import LilGui from '../utils/lilGui'
import MapApplication from './MapApplication/MapApplication'
import {MapControlOptions} from './types'
import * as THREE from 'three'
import {LoadAssets} from './utils/infoData'
import gsap from 'gsap'
import Grid from './utils/Grid'

class MapControlStudy extends MapApplication {
  debug?: LilGui
  // 地图中心点
  pointCenter: [number, number]
  assets: LoadAssets
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    super(container, options)
    this.container = container
    this.pointCenter = options.centroid
    this.scene.background = new THREE.Color(0x102736)
    // 设置雾化
    // this.scene.fog = new THREE.Fog(0x102736, 1, 50)
    // this.camera.instance!.position.set(
    //   -13.767695123014105,
    //   12.990152163077308,
    //   39.28228164159694,
    // )
    this.camera.instance!.position.set(
      -0.2515849818960619,
      12.397744557047988,
      14.647659671139275,
    )

    this.initLilGui()

    this.assets = new LoadAssets(() => {
      console.log('资源初始化成功')
      this.initEnvironment()
      this.createFloor()
      this.createChinaBlurLine()
      this.createGrid()

      const timeLine = gsap.timeline()
      // timeLine.add(
      //   gsap.to(this.camera.instance!.position, {
      //     duration: 2,
      //     x: -0.2515849818960619,
      //     y: 12.397744557047988,
      //     z: 14.647659671139275,
      //     ease: 'circ.out',
      //   }),
      // )
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
      oceanTexture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间
      oceanTexture.wrapS = THREE.RepeatWrapping // 水平方向重复纹理
      oceanTexture.wrapT = THREE.RepeatWrapping // 垂直方向重复纹理
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
  // 创建中国模糊线
  createChinaBlurLine() {
    if (this.assets.instance) {
      const chileBlurLineGeometry = new THREE.PlaneGeometry(147, 147)
      const blurLineTexture = this.assets.instance.getResource('chinaBlurLine')
      if (blurLineTexture) {
        blurLineTexture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间
        blurLineTexture.wrapS = THREE.RepeatWrapping // 水平方向重复纹理
        blurLineTexture.wrapT = THREE.RepeatWrapping // 垂直方向重复纹理
        blurLineTexture.generateMipmaps = false // 禁用mipmap生成以提高性能
        blurLineTexture.minFilter = THREE.NearestFilter // 设置最小化过滤器为最近点采样
        blurLineTexture.repeat.set(1, 1) // 设置纹理重复次数
        const chileBlurLineMaterial = new THREE.MeshBasicMaterial({
          color: 0x3f82cd, // 设置材质颜色（浅蓝色）
          alphaMap: blurLineTexture, // 使用纹理作为透明度贴图
          opacity: 0.5,
          transparent: true,
        })

        const blurLineMesh = new THREE.Mesh(
          chileBlurLineGeometry,
          chileBlurLineMaterial,
        )
        blurLineMesh.rotateX(-Math.PI / 2)
        blurLineMesh.position.set(-31, 0.5, -7)
        this.scene.add(blurLineMesh)

        // 如果处于调试模式，添加位置控制器
        if (this.debug && this.debug.active && this.debug.instance) {
          const blurLineFolder = this.debug.instance.addFolder('blurLine')

          // 添加X、Y、Z轴位置调整控制器
          blurLineFolder.add(blurLineMesh.position, 'x', -100, 100, 0.1)
          blurLineFolder.add(blurLineMesh.position, 'y', -100, 100, 0.1)
          blurLineFolder.add(blurLineMesh.position, 'z', -100, 100, 0.1)
        }
      }
    }
  }
  // 创建网格
  createGrid() {
    const options = {
      gridSize: 50,
      gridDivision: 20,
      gridColor: 0x1b4b70, // 深蓝
      shapeSize: 0.5,
      shapeColor: 0x2a5f8a, // 深蓝
      // shapeColor: 0xf44336, // 红色
      pointSize: 0.1,
      pointColor: 0x154d7d, // 深蓝
      diffuse: true,
      diffuseSpeed: 10,
      diffuseWidth: 10,
      diffuseColor: 0x2e8bd9, // 蓝色
      // diffuseDir: 1, // 扩散方向：0-圆形扩散，1-横向扩散
    }
    new Grid(this, options)
  }
  destroy() {
    super.destroy()
  }
}

export default MapControlStudy
