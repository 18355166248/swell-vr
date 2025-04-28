import LilGui from '../utils/lilGui'
import MapApplication from './MapApplication/MapApplication'
import {MapControlOptions} from './types'
import * as THREE from 'three'
import {LoadAssets} from './utils/infoData'
import Grid from './utils/Grid'
import PlaneMeshRotate from './utils/PlaneMeshRotate'
import {initGsapTimeLine} from './gsapTimeLine'
import GeoMapRenderer from './utils/GeoMapRenderer'
import LineRenderer from './utils/LineRenderer'
import {createProvinceMaterial} from './utils/material'

class MapControlStudy extends MapApplication {
  debug?: LilGui
  // 地图中心点
  pointCenter: [number, number]
  assets: LoadAssets
  rotateBorder1?: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >
  rotateBorder2?: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >
  focusMapTopMaterial?: THREE.MeshLambertMaterial | THREE.MeshStandardMaterial
  focusMapSideMaterial?: THREE.MeshLambertMaterial | THREE.MeshStandardMaterial
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
      this.createGrid()
      this.createRotateBorder()
      this.createModel()

      initGsapTimeLine.call(this)
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
      floor.position.set(0, -0.7, 0)
      this.scene.add(floor)
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
  // 创建旋转边框
  createRotateBorder() {
    // 旋转边框的尺寸大小
    const borderSize = 5

    // 获取两种不同的旋转边框纹理
    const outerBorderTexture =
      this.assets.instance?.getResource('rotationBorder1')
    const innerBorderTexture =
      this.assets.instance?.getResource('rotationBorder2')

    // 创建外层旋转边框
    const outerBorder = new PlaneMeshRotate(
      {
        time: this.time,
      },
      {
        name: 'rotationBorder1-mesh',
        width: borderSize * 1.178, // 外层边框稍大
        needRotate: true,
        rotateSpeed: 0.001, // 外层旋转速度较慢
        material: new THREE.MeshBasicMaterial({
          alphaMap: outerBorderTexture,
          color: 4763647, // 蓝色调
          transparent: true,
          opacity: 0.2, // 外层透明度较低
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
        position: new THREE.Vector3(0, 0.21, 0),
      },
    )
    outerBorder.instance.renderOrder = 6
    outerBorder.instance.scale.set(0, 0, 0)
    outerBorder.setParent(this.scene)

    // 创建内层旋转边框
    const innerBorder = new PlaneMeshRotate(
      {
        time: this.time,
      },
      {
        name: 'rotationBorder1-mesh',
        width: borderSize * 1.116, // 内层边框稍小
        needRotate: true,
        rotateSpeed: -0.004, // 内层旋转速度较快，方向相反
        material: new THREE.MeshBasicMaterial({
          alphaMap: innerBorderTexture,
          color: 0x48afff, // 蓝色调
          transparent: true,
          opacity: 0.4, // 内层透明度较低
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
        position: new THREE.Vector3(0, 0.21, 0),
      },
    )
    innerBorder.instance.renderOrder = 6
    innerBorder.instance.scale.set(0, 0, 0)
    innerBorder.setParent(this.scene)

    this.rotateBorder1 = outerBorder.instance
    this.rotateBorder2 = innerBorder.instance
  }
  /**
   * 创建模型并组织地图层次结构
   * 负责创建中国地图及浙江省地图模型，并设置它们的层级关系
   */
  createModel() {
    const mapRootGroup = new THREE.Group()
    const bottomLineGroup = new THREE.Group()
    // 创建中国地图及其轮廓线
    const {china, chinaLine, chinaBottomLine} = this.createChina()
    china.setParent(mapRootGroup)
    chinaLine.setParent(mapRootGroup)
    chinaBottomLine.setParent(bottomLineGroup)

    mapRootGroup.rotateX(-Math.PI / 2)
    mapRootGroup.position.set(0, 0.2, 0)

    bottomLineGroup.rotateX(-Math.PI / 2)
    bottomLineGroup.position.set(0, -0.04, 0)

    this.scene.add(mapRootGroup)
    this.scene.add(bottomLineGroup)
  }
  createChina() {
    const chinaProvinceGeoData =
      this.assets.instance!.getResource('china-province')
    const chinaGeoData = this.assets.instance!.getResource('china')

    const china = new GeoMapRenderer({
      data: chinaProvinceGeoData,
      center: this.pointCenter,
      material: new THREE.MeshLambertMaterial({
        color: 0x152c47, // 深蓝色
        transparent: true,
        opacity: 1,
      }),
      renderOrder: 2,
    })

    const chinaLine = new LineRenderer({
      center: this.pointCenter,
      data: chinaProvinceGeoData,
      material: new THREE.LineBasicMaterial({
        color: 0x3f82cd, // 蓝色
        transparent: true,
        opacity: 0.6, // 不透明度
        blending: THREE.AdditiveBlending, // 加法混合
      }),
      renderOrder: 3,
    })

    const chinaBottomLine = new LineRenderer({
      center: this.pointCenter,
      data: chinaGeoData,
      material: new THREE.LineBasicMaterial({
        color: 0x3f82cd, // 蓝色
        transparent: true,
        opacity: 0.4, // 更低的不透明度
      }),
      renderOrder: 3, // 低于主线条
    })

    return {china, chinaLine, chinaBottomLine}
  }
  createZheJiang() {
    const zhejiangGeoData = this.assets.instance!.getResource('zhejiang-city')
    const [topFaceMaterial, sideMaterial] = createProvinceMaterial({
      assets: this.assets,
      time: this.time,
    })
    this.focusMapTopMaterial = topFaceMaterial
    this.focusMapSideMaterial = sideMaterial
  }

  destroy() {
    super.destroy()
  }
}

export default MapControlStudy
