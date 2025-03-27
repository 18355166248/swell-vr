import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {MapToolsProps} from './types/map-tools.type'
import {FeatureCollection} from 'geojson'
import createBufferGeometry from './utils/createBufferGeometry'
import {processGeometry} from './utils/processGeometry'
import {calculateBounds} from './utils/calculateBounds'
import {districtStyle} from './districtStyle'
import {initInnerShadow} from './utils/createInnerShadow'

export class MapTools {
  scene: THREE.Scene
  renderer: THREE.Renderer
  camera: THREE.Camera
  controls: OrbitControls
  containerDom: HTMLElement
  data: FeatureCollection
  style: {
    fill: {
      color: string
    }
    innerShadow: {
      enabled: boolean
      shadowColor: string
      shadowBlurScale: number
    }
    sideConfig: {
      map: THREE.Texture | null
      colorConfig: {
        type: string
        range: string[]
      }
    }
  }
  geometryData?: {
    index: number[]
    position: number[]
    normal: number[]
    uv: number[]
  }
  geometry?: THREE.BufferGeometry<THREE.NormalBufferAttributes>
  extrudeInnerShadowMaterial = new THREE.MeshStandardMaterial({
    color: '#ff00ff', // 紫色
    transparent: true,
    depthTest: true,
    depthWrite: true,
  })
  constructor(p: MapToolsProps) {
    this.scene = p.scene
    this.renderer = p.renderer
    this.camera = p.camera
    this.controls = p.controls
    this.containerDom = p.containerDom
    this.data = p.data

    // 合并默认样式与传入的样式
    this.style = districtStyle

    this.init()
  }

  init() {
    // 初始化数据
    const geometryData = this.generateGeometryData()
    this.geometryData = geometryData
    // 创建BufferGeometry
    this.geometry = createBufferGeometry(this.geometryData)
    // 创建表面
    this.createSurface()
    // 创建阴影
    this.createInnerShadow()
  }

  /**
   * 从GeoJSON数据生成用于BufferGeometry的数据
   * @returns 包含index、position、normal和uv数据的对象
   */
  private generateGeometryData() {
    const geometryData = {
      index: [] as number[],
      position: [] as number[],
      normal: [] as number[],
      uv: [] as number[],
    }

    // 遍历所有feature
    this.data.features.forEach(feature => {
      // 只处理几何类型
      if (feature.geometry) {
        processGeometry(feature.geometry, geometryData)
      }
    })

    // 计算几何体的边界和中心点
    const bounds = calculateBounds(this.data)
    console.log('地图边界信息:', bounds)

    // 创建一个新的位置数组，应用中心偏移
    const centeredPositions = []
    for (let i = 0; i < geometryData.position.length; i += 3) {
      centeredPositions.push(
        geometryData.position[i] - bounds.center.x,
        geometryData.position[i + 1] - bounds.center.y,
        geometryData.position[i + 2],
      )
    }

    return {
      ...geometryData,
      purePosition: geometryData.position,
      position: centeredPositions,
    }
  }

  /**
   * 创建表面
   */
  private createSurface() {
    if (!this.geometryData) return

    // 从样式配置中获取颜色
    const fillColor = this.style.fill.color

    // 创建材质 - 使用配置的颜色
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(fillColor),
      transparent: true,
      opacity: parseFloat(fillColor.match(/[^,]+(?=\))/)?.[0] || '1'),
    })

    // 创建网格
    const mesh = new THREE.Mesh(this.geometry, material)
    // 添加到场景
    this.scene.add(mesh)
  }
  private createInnerShadow() {
    if (!this.geometryData || !this.style.innerShadow.enabled) return
    const geometry = this.geometry

    // 获取地图数据创建阴影纹理
    const mapCanvas = initInnerShadow({
      drawStyle: {
        fillColor: 'rgba(255,255,255,0.4)', // 半透明白色，更好地显示阴影
        shadowColor: this.style.innerShadow.shadowColor,
        shadowBlur: 20, // 增加阴影模糊值
        shadowBlurScale: this.style.innerShadow.shadowBlurScale * 2, // 增强阴影效果
      },
      data: this.data,
    })

    console.log(
      '内阴影纹理已创建，尺寸:',
      mapCanvas.width,
      'x',
      mapCanvas.height,
    )

    // 创建纹理并设置属性
    const shadowTexture = new THREE.CanvasTexture(mapCanvas)
    shadowTexture.needsUpdate = true
    shadowTexture.wrapS = THREE.ClampToEdgeWrapping
    shadowTexture.wrapT = THREE.ClampToEdgeWrapping
    shadowTexture.minFilter = THREE.LinearFilter

    // 创建材质 - 使用更适合阴影显示的材质设置
    const innerShadowMaterial = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 1,
      depthTest: true,
      depthWrite: false, // 避免深度写入问题
      blending: THREE.NormalBlending, // 使用标准混合
    })

    // 创建内阴影网格
    const innerShadowMesh = new THREE.Mesh(geometry, innerShadowMaterial)

    // 设置网格属性
    innerShadowMesh.renderOrder = 10 // 确保在其他图层之上渲染
    innerShadowMesh.scale.z = 1.01
    innerShadowMesh.position.z = 0.02 // 稍微增加高度，避免Z轴冲突
    innerShadowMesh.userData.faceType = 'map-innerShadow'
    innerShadowMesh.name = 'map-innerShadow'
    innerShadowMesh.frustumCulled = false

    // 添加到场景
    this.scene.add(innerShadowMesh)
  }
}
