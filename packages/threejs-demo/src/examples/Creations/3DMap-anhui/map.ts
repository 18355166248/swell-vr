import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import AnhuiData from './anhui.json'
import {extractGeoJsonCoordinates} from './utils'

// 安徽省的地理中心点（仅使用纬度计算经度校正）
const centerLatitude = Number(AnhuiData.properties.centroid[1].toFixed(3))

export default class Map {
  width: number
  height: number
  renderer: THREE.WebGLRenderer | null = null
  destroyTasks: (() => void)[] = []
  scene?: THREE.Scene
  camera?: THREE.PerspectiveCamera
  map?: THREE.Object3D<THREE.Object3DEventMap>
  controls?: OrbitControls

  constructor(private readonly container: HTMLDivElement) {
    this.width = this.container.clientWidth
    this.height = this.container.clientHeight
  }
  init() {
    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})

      const renderer = this.renderer
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(this.width, this.height)
      renderer.setClearColor(0xffffff, 0)

      this.scene = new THREE.Scene()

      this.camera = new THREE.PerspectiveCamera(
        60,
        this.width / this.height,
        0.1,
        50_00,
      )

      this.camera.position.set(0, -30, 190)
      this.camera.lookAt(0, 0, 0)

      this.scene.position.y = 8

      this.container.appendChild(renderer.domElement)

      // 初始化地图
      this.initMap()

      this.render()

      this.container.appendChild(renderer.domElement)

      this.destroyTasks.push(() => {
        if (this.renderer) {
          this.renderer.renderLists && this.renderer.renderLists.dispose()
          this.renderer.dispose && this.renderer.dispose()
          this.renderer.forceContextLoss()
          this.renderer?.domElement.remove()
          this.renderer = null
        }

        this.controls && this.controls.dispose()
        this.scene?.remove(...this.scene.children)
      })
    }
  }

  initMap() {
    this.initInnerShadow({
      drawStyle: {
        fill: true,
        fillColor: 'red',
        shadowColor: 'red',
        shadowBlur: 60,
        shadowBlurScale: 0.1,
      },
      canvasWidth: 1093,
      canvasHeight: 1271,
    })
  }

  /**
   * 初始化地图内阴影效果
   * 该方法通过Canvas绘制中国地图的内部阴影效果
   * 将每个省份的边界绘制成带有阴影的形状
   */
  initInnerShadow({
    drawStyle,
    canvasWidth = 1024,
    canvasHeight = 768,
  }: {
    drawStyle: {
      fill: boolean
      fillColor: string
      shadowColor: string
      shadowBlur: number
      shadowBlurScale: number
    }
    canvasWidth?: number
    canvasHeight?: number
  }) {
    // 根据画布尺寸计算最佳地图缩放值
    const mapScale = this.calculateOptimalMapScale(canvasWidth, canvasHeight)
    console.log('🚀 ~ Map ~ mapScale:', mapScale)

    // 创建画布和上下文
    const mapCanvas = document.createElement('canvas')
    mapCanvas.width = canvasWidth
    mapCanvas.height = canvasHeight
    mapCanvas.style.width = canvasWidth + 'px'
    mapCanvas.style.height = canvasHeight + 'px'
    const mapContext = mapCanvas.getContext('2d') as CanvasRenderingContext2D

    // 计算地图完整边界
    const a = this.bbox(AnhuiData)
    const allTopLeft = this.convertToPixelCoordinates(a[0], a[1], mapScale)
    const allBottomRight = this.convertToPixelCoordinates(a[2], a[3], mapScale)

    // 计算地图边界的宽度和高度
    const mapWidth = Math.abs(allTopLeft[0] - allBottomRight[0])
    const mapHeight = Math.abs(allTopLeft[1] - allBottomRight[1])

    // 确保地图尺寸足够大
    const minSize = 300
    const adjustedMapWidth = Math.max(mapWidth, minSize)
    const adjustedMapHeight = Math.max(mapHeight, minSize)

    // 计算缩放比例，使地图能够适应canvas
    const scaleX = canvasWidth / adjustedMapWidth
    const scaleY = canvasHeight / adjustedMapHeight
    const scale = Math.min(scaleX, scaleY) * 0.9 // 稍微缩小一点，留出边距

    // 计算居中偏移
    const offsetX = (canvasWidth - adjustedMapWidth * scale) / 2
    const offsetY = (canvasHeight - adjustedMapHeight * scale) / 2

    // 遍历省份的每个多边形区域
    const polygons = AnhuiData.geometry.coordinates
    for (let polygonIndex = 0; polygonIndex < polygons.length; polygonIndex++) {
      const polygon = polygons[polygonIndex]

      // 绘制单个多边形的内阴影
      const shadowCanvas = this.drawInnerShadowScaled({
        feature: polygon,
        zoom: mapScale,
        style: drawStyle,
        width: canvasWidth,
        height: canvasHeight,
        offset: [allTopLeft[0], allBottomRight[1]],
        scale: scale,
        canvasOffset: [offsetX, offsetY],
      })

      if (shadowCanvas) {
        // 将阴影效果绘制到主画布上
        mapContext.drawImage(
          shadowCanvas,
          0,
          0,
          shadowCanvas.width,
          shadowCanvas.height,
        )
      }
    }

    // 生成最终的图片数据URL
    // this.downloadImage(mapCanvas, 'map')

    this.drawMesh(mapCanvas, canvasWidth, canvasHeight)
  }

  /**
   * 计算最佳地图缩放比例，基于安徽省地理中心点和画布尺寸
   * @param canvasWidth 画布宽度
   * @param canvasHeight 画布高度
   * @returns 最佳地图缩放系数
   */
  calculateOptimalMapScale(canvasWidth: number, canvasHeight: number): number {
    // 获取安徽省的边界框
    const bounds = this.bbox(AnhuiData)

    // 计算经纬度范围
    const lonRange = Math.abs(bounds[2] - bounds[0])
    const latRange = Math.abs(bounds[3] - bounds[1])

    // 考虑纬度对经度距离的影响
    const correctedLonRange =
      lonRange * Math.cos((centerLatitude * Math.PI) / 180)

    // 计算地理范围和画布的比例关系
    // 这里的系数300是经验值，表示在比例为1时经度1度对应的像素数
    const geoToPixelRatio = 300

    // 计算理想宽度和高度（像素）
    const idealWidth = correctedLonRange * geoToPixelRatio
    const idealHeight = latRange * geoToPixelRatio

    // 计算画布与理想尺寸的比例
    const widthRatio = canvasWidth / idealWidth
    const heightRatio = canvasHeight / idealHeight

    // 取较小值以确保地图完全适应画布
    const baseScale = Math.min(widthRatio, heightRatio) * 0.85 // 0.85是留白系数

    // 基础缩放系数和地图缩放系数的关系
    // 缩放系数越大，地图越详细，但适应画布的能力越差
    // 所以我们使用反比关系
    const mapScale = 1.5 / baseScale

    // 确保mapScale在有效范围内
    return Math.max(0.8, Math.min(mapScale, 9.0))
  }

  drawMesh(
    mapCanvas: HTMLCanvasElement,
    canvasWidth: number,
    canvasHeight: number,
  ) {
    // 将图片数据转换为纹理 铺满屏幕
    const texture = new THREE.Texture(mapCanvas)
    texture.needsUpdate = true

    // 创建一个适合屏幕的大平面
    // 计算宽高比以保持纹理不变形
    const aspectRatio = canvasWidth / canvasHeight
    const planeWidth = 200 // 增大平面尺寸
    const planeHeight = planeWidth / aspectRatio

    const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
    const planeMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true, // 启用透明度
      side: THREE.DoubleSide, // 双面可见
    })

    const plane = new THREE.Mesh(planeGeometry, planeMaterial)

    // 保存对地图对象的引用
    this.scene?.add(plane)
  }

  /**
   * 为单个地理区域绘制内阴影效果，并支持缩放和居中
   */
  drawInnerShadowScaled(params: {
    feature: number[][][] // 地理区域坐标数据
    zoom: number // 缩放级别
    style: {
      // 绘制样式
      fill: boolean
      fillColor: string
      shadowColor: string
      shadowBlur: number
    }
    width: number // 画布宽度
    height: number // 画布高度
    offset: number[] // 坐标偏移量
    scale: number // 缩放比例
    canvasOffset: number[] // 画布上的偏移，用于居中
  }) {
    const {feature, zoom, style, width, height, offset, scale, canvasOffset} =
      params

    // 创建新的画布和上下文
    const shadowCanvas = document.createElement('canvas')
    const ctx = shadowCanvas.getContext('2d') as CanvasRenderingContext2D

    // 设置画布尺寸
    shadowCanvas.width = width
    shadowCanvas.height = height
    shadowCanvas.style.width = width + 'px'
    shadowCanvas.style.height = height + 'px'

    // 准备坐标点数组
    const pathPoints: [number, number][][] = [[]]

    // 转换地理坐标为像素坐标
    for (let i = 0; i < feature[0].length; i++) {
      const point = feature[0][i]
      const pixelCoord = this.convertToPixelCoordinates(
        point[0],
        point[1],
        zoom,
      )
      // 应用缩放和偏移
      const scaledX = (pixelCoord[0] - offset[0]) * scale + canvasOffset[0]
      const scaledY = (pixelCoord[1] - offset[1]) * scale + canvasOffset[1]
      pathPoints[0].push([scaledX, scaledY])
    }

    if (pathPoints[0].length <= 10) return null

    // 设置合成模式为源出
    ctx.globalCompositeOperation = 'source-out'
    ctx.beginPath()

    // 绘制所有路径
    for (let pathIndex = 0; pathIndex < pathPoints.length; pathIndex++) {
      const path = pathPoints[pathIndex]
      for (let pointIndex = 0; pointIndex < path.length; pointIndex++) {
        const point = path[pointIndex]
        if (pointIndex === 0) {
          ctx.moveTo(point[0], point[1])
        } else {
          ctx.lineTo(point[0], point[1])
        }
      }
      ctx.closePath()
    }

    // 应用阴影和填充样式
    ctx.shadowBlur = style.shadowBlur * scale // 根据缩放调整阴影模糊值
    ctx.shadowColor = style.shadowColor
    ctx.fillStyle = style.fillColor
    ctx.fill()

    return shadowCanvas
  }

  downloadImage(canvas: HTMLCanvasElement, fileName: string = 'map') {
    // 生成图片数据URL（PNG格式，默认质量0.9）
    const dataUrl = canvas.toDataURL('image/png', 0.9)

    // 创建隐藏的下载链接
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = `${fileName}.png` // 自定义文件名
    // 自定义下载的目录
    // 触发下载
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  /**
   * 将地理坐标转换为像素坐标
   * @param longitude 经度
   * @param latitude 纬度
   * @param zoomLevel 缩放级别
   * @returns 像素坐标 [x, y]
   */
  convertToPixelCoordinates(
    longitude: number,
    latitude: number,
    zoomLevel: number,
  ): [number, number] {
    // 确保缩放级别有一个合理的最小值
    const effectiveZoom = Math.max(zoomLevel, 1.5)

    // 安徽省的大致中心点
    const centerLongitude = 117.2
    const centerLatitude = 31.8

    // 相对于中心点的经纬度差值
    const deltaLon = longitude - centerLongitude
    const deltaLat = latitude - centerLatitude

    // 根据缩放级别调整系数，较小的缩放级别使用更大的系数确保细节可见
    const scaleFactor = effectiveZoom < 3 ? 800 / effectiveZoom : 256

    // 使用更均匀的投影变换，减少地图变形
    const x =
      deltaLon * scaleFactor * Math.cos((centerLatitude * Math.PI) / 180)
    const y = -deltaLat * scaleFactor // 纬度反转以匹配屏幕坐标系

    return [Math.floor(x), Math.floor(y)]
  }

  // 计算指定缩放级别下的瓦片大小
  calculateTileSize(zoomLevel: number): number {
    // 为小缩放级别提供更大的基础值，保证足够的分辨率
    if (zoomLevel <= 2) {
      return Math.pow(4, zoomLevel)
    }
    return Math.pow(2, zoomLevel)
  }

  /**
   * 计算地理特征的边界框
   * @param feature 地理特征对象
   * @returns 边界框坐标 [minX, minY, maxX, maxY]
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bbox(feature: any): [number, number, number, number] {
    // 获取地理特征的所有坐标点
    const coordinates = extractGeoJsonCoordinates(feature)

    // 初始化边界框的极值
    const bounds = [
      Number.POSITIVE_INFINITY, // minX
      Number.POSITIVE_INFINITY, // minY
      Number.NEGATIVE_INFINITY, // maxX
      Number.NEGATIVE_INFINITY, // maxY
    ]

    // 遍历所有坐标点，更新边界框的极值
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return coordinates.reduce((boundingBox: any, point: any) => {
      return [
        Math.min(point[0], boundingBox[0]), // 更新 minX
        Math.min(point[1], boundingBox[1]), // 更新 minY
        Math.max(point[0], boundingBox[2]), // 更新 maxX
        Math.max(point[1], boundingBox[3]), // 更新 maxY
      ]
    }, bounds) as [number, number, number, number]
  }

  render(): void {
    if (!this.scene || !this.camera) return

    this.camera.updateMatrixWorld()
    this.controls?.update()
    this.renderer?.render(this.scene, this.camera)
  }
}
