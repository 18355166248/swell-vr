import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import ChinaData from '../../../data/map/china.json'
import {extractGeoJsonCoordinates} from './utils'

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
      renderer.shadowMap.enabled = true // 开启阴影
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping
      this.renderer.toneMappingExposure = 1.25
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(this.width, this.height)
      renderer.setClearColor(0xffffff, 0)

      this.scene = new THREE.Scene()

      // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      // this.scene.add(ambientLight)

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

      // 初始化控制器
      this.setController()
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
        shadowBlur: 100,
        shadowBlurScale: 0.02,
      },
      canvasWidth: 400,
      canvasHeight: 400,
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
    canvasHeight = 1024,
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
    // 创建画布和上下文
    const mapCanvas = document.createElement('canvas')
    mapCanvas.width = canvasWidth
    mapCanvas.height = canvasHeight
    const mapContext = mapCanvas.getContext('2d') as CanvasRenderingContext2D

    // 遍历所有地理特征（省份）
    const provinces = ChinaData.features
    provinces.forEach(province => {
      // 获取省份的边界框
      const boundingBox = this.bbox(province)
      const topLeft = this.convertToPixelCoordinates(
        boundingBox[0],
        boundingBox[1],
        1,
      )
      const bottomRight = this.convertToPixelCoordinates(
        boundingBox[2],
        boundingBox[3],
        1,
      )

      // 计算绘制区域的宽度和高度
      const areaWidth = Math.abs(topLeft[0] - bottomRight[0])
      const areaHeight = Math.abs(topLeft[1] - bottomRight[1])

      if (areaWidth > 0 && areaHeight > 0) {
        drawStyle.shadowBlur =
          Math.min(areaWidth, areaHeight) * drawStyle.shadowBlurScale
        // 遍历省份的每个多边形区域
        const polygons = province.geometry.coordinates
        for (
          let polygonIndex = 0;
          polygonIndex < polygons.length;
          polygonIndex++
        ) {
          const polygon = polygons[polygonIndex]

          // 绘制单个多边形的内阴影
          const shadowCanvas = this.drawInnerShadow({
            feature: polygon,
            zoom: 1,
            style: drawStyle,
            width: areaWidth,
            height: areaHeight,
            offset: [topLeft[0], bottomRight[1]],
          })

          // 将阴影效果绘制到主画布上
          mapContext.drawImage(
            shadowCanvas,
            Math.abs(0),
            Math.abs(0),
            shadowCanvas.width,
            shadowCanvas.height,
          )
        }
      }
    })

    // 生成最终的图片数据URL
    const resultImageUrl = mapCanvas.toDataURL('image/png', 0.9)
    console.log('Generated map shadow image URL:', resultImageUrl)
  }

  /**
   * 为单个地理区域绘制内阴影效果
   * @param params 绘制参数
   * @returns 包含阴影效果的Canvas元素
   */
  drawInnerShadow(params: {
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
  }) {
    const {feature, zoom, style, width, height, offset} = params

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
    pathPoints[0].push([0, 0])
    for (let i = 0; i < feature[0].length; i++) {
      const point = feature[0][i]
      const pixelCoord = this.convertToPixelCoordinates(
        point[0],
        point[1],
        zoom,
      )
      pathPoints[0].push([pixelCoord[0] - offset[0], pixelCoord[1] - offset[1]])
    }

    // 设置合成模式并开始绘制路径
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
    ctx.shadowBlur = style.shadowBlur
    ctx.shadowColor = style.shadowColor
    ctx.fillStyle = style.fillColor
    ctx.fill()

    return shadowCanvas
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
    // 计算x坐标（经度转换）
    const x =
      ((longitude + 180) / 360) * this.calculateTileSize(zoomLevel) * 256

    // 计算y坐标（纬度转换）
    const latRad = (latitude * Math.PI) / 180
    const mercatorY =
      0.5 -
      Math.log((1 + Math.sin(latRad)) / (1 - Math.sin(latRad))) / (4 * Math.PI)
    const y = mercatorY * this.calculateTileSize(zoomLevel) * 256

    return [Math.floor(x), Math.floor(y)]
  }

  // 计算指定缩放级别下的瓦片大小
  calculateTileSize(zoomLevel: number): number {
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

  setController() {
    if (!this.camera || !this.renderer) return

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.minDistance = 20
    this.controls.maxDistance = 400
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    this.controls.enableDamping = true
    //是否可以缩放
    this.controls.enableZoom = true
  }
  setLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2) // 环境光

    const light = new THREE.DirectionalLight(0xffffff, 0.5) // 平行光
    light.position.set(20, -50, 20)

    light.castShadow = true
    light.shadow.mapSize.width = 1024
    light.shadow.mapSize.height = 1024

    // 半球光
    const hemiLight = new THREE.HemisphereLight('#80edff', '#75baff', 0.3)
    // 这个也是默认位置
    hemiLight.position.set(20, -50, 0)

    const pointLight = new THREE.PointLight(0xffffff, 0.5)
    pointLight.position.set(20, -50, 50)

    pointLight.castShadow = true
    pointLight.shadow.mapSize.width = 1024
    pointLight.shadow.mapSize.height = 1024

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5)
    pointLight2.position.set(50, -50, 20)
    pointLight2.castShadow = true
    pointLight2.shadow.mapSize.width = 1024
    pointLight2.shadow.mapSize.height = 1024

    const pointLight3 = new THREE.PointLight(0xffffff, 0.5)
    pointLight3.position.set(-50, -50, 20)
    pointLight3.castShadow = true
    pointLight3.shadow.mapSize.width = 1024
    pointLight3.shadow.mapSize.height = 1024

    this.scene?.add(light)
    this.scene?.add(ambientLight)
    this.scene?.add(hemiLight)
    this.scene?.add(pointLight)
    this.scene?.add(pointLight2)
    this.scene?.add(pointLight3)
  }
  setBackground() {
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x031837,
      metalness: 0,
      roughness: 1,
      opacity: 0.5,
      transparent: true,
    })
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      groundMaterial,
    )
    ground.rotation.z = 0
    ground.receiveShadow = true
    this.scene?.add(ground)
  }
}
