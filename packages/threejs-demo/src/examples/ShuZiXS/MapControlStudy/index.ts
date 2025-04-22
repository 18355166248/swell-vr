import LilGui from '../utils/lilGui'
import MapApplication from './MapApplication/MapApplication'
import {MapControlOptions} from './types'
import * as THREE from 'three'

class MapControlStudy extends MapApplication {
  debug?: LilGui
  // 地图中心点
  pointCenter: [number, number]
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    super(container, options)
    this.container = container
    this.pointCenter = options.centroid

    this.initLilGui()
    this.initEnvironment()
    this.createFloor()
  }

  initLilGui() {
    this.debug = new LilGui(true)
  }
  // 创建环境光照
  initEnvironment() {
    // 创建环境光照
    const ambientLight = new THREE.AmbientLight(0xffffff, 5) // 白色环境光，强度5
    this.scene.add(ambientLight)

    // 创建平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5) // 白色平行光，强度5
    directionalLight.position.set(-30, 6, -8) // 设置光源位置
    // directionalLight.castShadow = true // 启用阴影投射
    // directionalLight.shadow.radius = 20 // 阴影半径
    // directionalLight.shadow.mapSize.width = 1024 // 阴影贴图宽度
    // directionalLight.shadow.mapSize.height = 1024 // 阴影贴图高度
    this.scene.add(directionalLight)
  }
  // 创建地板
  createFloor() {
    // 创建一个20x20的平面几何体作为地板
    const geometry = new THREE.PlaneGeometry(20, 20)
    const material = new THREE.MeshStandardMaterial({color: 0x0000ff})
    const floor = new THREE.Mesh(geometry, material)
    floor.rotateX(-Math.PI / 2)
    // floor.position.set(0, -0.7, 0)
    this.scene.add(floor)
  }
  destroy() {
    super.destroy()
  }
}

export default MapControlStudy
