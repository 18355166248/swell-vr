import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {MapToolsProps} from './types/map-tools.type'
import {FeatureCollection} from 'geojson'
import createBufferGeometry from './utils/createBufferGeometry'
import {processGeometry} from './utils/processGeometry'
import {calculateBounds} from './utils/calculateBounds'
import {districtStyle} from './districtStyle'

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

    // 创建BufferGeometry
    const geometry = createBufferGeometry(this.geometryData)

    // 从样式配置中获取颜色
    const fillColor = this.style.fill.color

    // 创建材质 - 使用配置的颜色
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(fillColor),
      transparent: true,
      opacity: parseFloat(fillColor.match(/[^,]+(?=\))/)?.[0] || '1'),
    })

    // 创建网格
    const mesh = new THREE.Mesh(geometry, material)
    // 添加到场景
    this.scene.add(mesh)
  }
  private createInnerShadow() {
    if (!this.geometryData) return
    // 计算几何体的边界和中心点
    const bounds = calculateBounds(this.data)
    console.log('地图边界信息:', bounds)
  }
}
