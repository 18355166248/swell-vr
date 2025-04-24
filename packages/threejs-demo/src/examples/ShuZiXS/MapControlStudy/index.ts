import LilGui from '../utils/lilGui'
import MapApplication from './MapApplication/MapApplication'
import {MapControlOptions} from './types'
import * as THREE from 'three'
import {LoadAssets} from './utils/infoData'

class MapControlStudy extends MapApplication {
  debug?: LilGui
  // 地图中心点
  pointCenter: [number, number]
  assets: LoadAssets
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    super(container, options)
    this.container = container
    this.pointCenter = options.centroid

    this.initLilGui()

    this.assets = new LoadAssets(() => {
      console.log('资源初始化成功')
      this.initEnvironment()
      this.createFloor()
    })
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
    if (this.assets.instance) {
      // 创建一个20x20的平面几何体作为地板
      const floorGeometry = new THREE.PlaneGeometry(20, 20)
      const oceanTexture = this.assets.instance.getResource('ocean')

      oceanTexture.repeat.set(1, 1) // 设置纹理重复次数

      const floorMaterial = new THREE.MeshBasicMaterial({
        map: oceanTexture,
        opacity: 1,
      })
      const floor = new THREE.Mesh(floorGeometry, floorMaterial)
      floor.rotateX(-Math.PI / 2)
      // floor.position.set(0, -0.7, 0)
      this.scene.add(floor)
    }
  }
  destroy() {
    super.destroy()
  }
}

export default MapControlStudy
