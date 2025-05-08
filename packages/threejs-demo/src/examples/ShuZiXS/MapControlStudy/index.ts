import LilGui from '../utils/lilGui'
import MapApplication from './MapApplication/MapApplication'
import {MapControlOptions} from './types'
import * as THREE from 'three'
import {LoadAssets, ZheJiangCityInfo} from './utils/infoData'
import Grid from './utils/Grid'
import PlaneMeshRotate from './utils/PlaneMeshRotate'
import {initGsapTimeLine} from './gsapTimeLine'
import GeoMapRenderer from './utils/GeoMapRenderer'
import LineRenderer from './utils/LineRenderer'
import {createProvinceMaterial} from './utils/material'
import GradientShader from './utils/GradientShader'
import ExtrudedGeoMapRenderer from './utils/ExtrudedGeoMapRenderer'
import createAnimateVideoItem from './utils/animateVideoItem'
import {InteractionManager} from 'three.interactive'
import gsap from 'gsap'

class MapControlStudy extends MapApplication {
  debug?: LilGui
  // 地图中心点
  pointCenter: [number, number]
  flyLineCenter: [number, number]
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
  zhejiangLineMaterial?: THREE.LineBasicMaterial
  focusMapGroup?: THREE.Group<THREE.Object3DEventMap>
  clicked = false // 点击控制
  eventElement: THREE.Object3D<THREE.Object3DEventMap>[] = []
  interactionManager: InteractionManager
  defaultMaterial?: THREE.MeshStandardMaterial
  defaultLightMaterial?: THREE.MeshStandardMaterial
  flyLineGroup?: THREE.Group<THREE.Object3DEventMap>
  flyLineFocusGroup?: THREE.Group<THREE.Object3DEventMap>
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    super(container, options)
    this.container = container
    this.pointCenter = options.centroid
    this.flyLineCenter = ZheJiangCityInfo[0].centroid as [number, number]
    this.scene.background = new THREE.Color(0x102736)
    // 设置雾化
    this.scene.fog = new THREE.Fog(0x102736, 1, 50)
    if (this.camera.instance) {
      this.camera.instance.position.set(
        -13.767695123014105,
        12.990152163077308,
        39.28228164159694,
      )

      this.camera.instance.near = 1
      this.camera.instance.far = 10000
      this.camera.instance.updateProjectionMatrix()
    }
    // 点击管理器
    this.interactionManager = new InteractionManager(
      this.render.instance,
      this.camera.instance,
      this.canvas,
    )

    this.initLilGui()

    this.assets = new LoadAssets(() => {
      console.log('资源初始化成功')
      this.initEnvironment()
      this.createFloor()
      this.createGrid()
      this.createRotateBorder()
      this.createModel()
      this.createAnimateVideo()
      this.createEvent()
      this.createFlyLine()

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
    const borderSize = 12

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
          color: 0x48afff, // 蓝色调
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
    this.focusMapGroup = new THREE.Group()
    const bottomLineGroup = new THREE.Group()
    // 创建中国地图及其轮廓线
    const {china, chinaLine, chinaBottomLine} = this.createChina()
    china.setParent(mapRootGroup)
    chinaLine.setParent(mapRootGroup)
    chinaBottomLine.setParent(bottomLineGroup)

    // 创建浙江省地图及其相关元素
    const {zhejiang, zhejiangTop, zhejiangLine} = this.createZheJiang()
    zhejiang.setParent(this.focusMapGroup)
    zhejiangTop.setParent(this.focusMapGroup)
    zhejiangLine.setParent(this.focusMapGroup)

    this.focusMapGroup.position.set(0, 0, -0.11)
    this.focusMapGroup.scale.set(0, 0, 0)

    mapRootGroup.rotateX(-Math.PI / 2)
    mapRootGroup.position.set(0, 0.2, 0)

    bottomLineGroup.rotateX(-Math.PI / 2)
    bottomLineGroup.position.set(0, -0.04, 0)

    mapRootGroup.add(this.focusMapGroup)

    this.scene.add(mapRootGroup)
    this.scene.add(bottomLineGroup)
  }
  /**
   * 创建中国地图及其相关元素
   * 负责创建中国地图及其相关元素，包括中国地图、中国轮廓线等
   * @returns 包含中国地图、中国轮廓线和底部线条的对象
   */
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
  /**
   * 创建浙江省地图及其相关元素
   * 负责创建浙江省地图及其相关元素，包括顶部地图、轮廓线等
   * @returns 包含浙江省地图、顶部地图和轮廓线的对象
   */
  createZheJiang() {
    const zhejiangGeoData = this.assets.instance!.getResource('zhejiang-city')
    const [topFaceMaterial, sideMaterial] = createProvinceMaterial({
      assets: this.assets,
      time: this.time,
    })
    this.focusMapTopMaterial = topFaceMaterial
    // this.focusMapSideMaterial = sideMaterial

    // 创建浙江省主体地图（带深度的3D效果）
    const zhejiang = new ExtrudedGeoMapRenderer(
      {
        assets: this.assets,
        time: this.time,
      },
      {
        center: this.pointCenter,
        position: new THREE.Vector3(0, 0, 0.11),
        data: zhejiangGeoData,
        depth: 0.5,
        topFaceMaterial: topFaceMaterial,
        sideMaterial: sideMaterial,
        renderOrder: 9,
      },
    )

    const topMapMaterial = new THREE.MeshStandardMaterial({
      color: 16777215, // 白色
      transparent: true,
      opacity: 0.5,
    })
    // 应用渐变着色器
    new GradientShader(topMapMaterial, {uColor1: 0x2a6e92, uColor2: 0x102736})

    this.defaultMaterial = topMapMaterial
    // 创建发光材质（克隆自默认材质）
    this.defaultLightMaterial = this.defaultMaterial.clone()
    this.defaultLightMaterial.emissive.setHex(0xb112d) // 蓝绿色
    // this.defaultLightMaterial.emissiveIntensity = 3.5

    // 创建浙江省顶部地图（平面）
    const zhejiangTop = new GeoMapRenderer({
      center: this.pointCenter,
      position: new THREE.Vector3(0, 0, 0.72),
      data: zhejiangGeoData,
      material: topMapMaterial,
      renderOrder: 3,
    })

    // 将网格添加到可交互元素列表
    zhejiangTop.mapGroup.children.map(provinceGroup => {
      provinceGroup.children.map(child => {
        child.type === 'Mesh' && this.eventElement.push(child)
      })
    })

    // 创建浙江省轮廓线材质
    this.zhejiangLineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff, // 白色
      transparent: true,
      opacity: 0, // 不透明度
      fog: false, // 不受雾化影响
    })
    // 创建浙江省轮廓线
    const zhejiangLine = new LineRenderer({
      center: this.pointCenter,
      data: zhejiangGeoData,
      material: this.zhejiangLineMaterial,
      renderOrder: 3,
    })
    zhejiangLine.lineGroup.position.z += 0.73

    return {zhejiang, zhejiangTop, zhejiangLine}
  }
  // 创建动画视频
  createAnimateVideo() {
    const video1 = createAnimateVideoItem(
      '.map-gd-video1',
      new THREE.Vector3(11, 0.4, 1),
    )
    const video2 = createAnimateVideoItem(
      '.map-gd-video2',
      new THREE.Vector3(-11, 0.4, 2),
    )
    const videoGroup = new THREE.Group()
    if (video1) videoGroup.add(video1)
    if (video2) videoGroup.add(video2)
    this.scene.add(videoGroup)
  }
  /**
   * 创建交互事件
   * 处理地图元素的鼠标交互事件，包括悬停、点击等
   * 实现地图元素高亮、相机移动等交互效果
   */
  createEvent() {
    // 存储当前悬停的元素集合
    const hoveredElements: THREE.Object3D<THREE.Object3DEventMap>[] = []

    // 应用默认材质的函数
    const applyDefaultMaterial = (object: THREE.Object3D) => {
      object.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          // eslint-disable-next-line no-extra-semi
          ;(child as THREE.Mesh).material = this.defaultMaterial!
        }
      })
    }

    // 应用高亮材质的函数
    const applyHighlightMaterial = (object: THREE.Object3D) => {
      object.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          // eslint-disable-next-line no-extra-semi
          ;(child as THREE.Mesh).material = this.defaultLightMaterial!
        }
      })
    }

    // 为每个可交互元素添加事件监听
    this.eventElement.forEach(element => {
      // 添加到交互管理器
      this.interactionManager.add(element)

      // 鼠标按下事件 - 移动相机到点击位置
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const el = element as any

      // 鼠标悬停事件 - 高亮显示元素
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      el.addEventListener('mouseover', (event: any) => {
        const parent = event.target.parent

        if (parent && !hoveredElements.includes(parent)) {
          hoveredElements.push(parent)
        }
        document.body.style.cursor = 'pointer'
        if (parent) {
          applyHighlightMaterial(parent)
        }
      })

      // 鼠标离开点击事件 - 恢复默认显示
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      el.addEventListener('mouseout', (event: any) => {
        const parent = event.target.parent
        if (parent) {
          // 从悬停元素列表中移除当前元素
          const filteredElements = hoveredElements.filter(
            element => element.userData.name !== parent.userData.name,
          )
          // 更新悬停元素列表
          hoveredElements.length = 0
          filteredElements.forEach(el => hoveredElements.push(el))

          // 应用默认材质
          applyDefaultMaterial(parent)
          document.body.style.cursor = 'default'
        }
      })
    })
  }
  /**
   * 创建飞线效果
   * 在地图上绘制从中心点（杭州）到各城市的飞线动画
   * 使用二次贝塞尔曲线实现弧线效果，纹理动画实现飞行效果
   */
  createFlyLine() {
    this.flyLineGroup = new THREE.Group()
    this.flyLineGroup.name = 'flyLineGroup'
    this.flyLineGroup.visible = false
    this.scene.add(this.flyLineGroup)

    // 获取飞线纹理并设置属性
    const flyLineTexture = this.assets.instance!.getResource('flyLine')
    flyLineTexture.colorSpace = THREE.SRGBColorSpace
    flyLineTexture.wrapS = THREE.RepeatWrapping
    flyLineTexture.wrapT = THREE.RepeatWrapping
    flyLineTexture.repeat.set(1, 1)

    // 设置飞线参数
    const tubeRadius = 0.03 // 管道半径
    const tubularSegments = 32 // 管道分段数
    const radiusSegments = 8 // 管道横截面分段数
    const isClosed = false // 是否闭合曲线

    const [centerX, centerY] = this.geoProjection(this.flyLineCenter)!
    const centerPoint = new THREE.Vector3(centerX, -centerY, 0)

    const flyLineMaterial = new THREE.MeshBasicMaterial({
      map: flyLineTexture,
      alphaMap: flyLineTexture,
      color: 0x2a6f72, // 蓝色
      transparent: true,
      fog: false,
      blending: THREE.AdditiveBlending, // 加法混合增强亮度
    })

    this.time.on('tick', () => {
      flyLineTexture.offset.x -= 0.006 // 纹理偏移实现流动效果
    })

    ZheJiangCityInfo.filter(v => v.value > 40).map(cityInfo => {
      const [targetX, targetY] = this.geoProjection(
        cityInfo.centroid as [number, number],
      )!
      const targetPoint = new THREE.Vector3(targetX, -targetY, 0)

      // 计算中间一个位置顶点
      const middlePoint = new THREE.Vector3()
      // 计算中间点
      middlePoint.addVectors(centerPoint, targetPoint).multiplyScalar(0.5)
      middlePoint.setZ(3)
      const bezierCurve = new THREE.QuadraticBezierCurve3(
        centerPoint,
        middlePoint,
        targetPoint,
      )

      const tubeGeometry = new THREE.TubeGeometry(
        bezierCurve,
        tubularSegments,
        tubeRadius,
        radiusSegments,
        isClosed,
      )

      const flyLineMesh = new THREE.Mesh(tubeGeometry, flyLineMaterial)
      flyLineMesh.rotation.x = -Math.PI / 2 // 旋转到水平面
      flyLineMesh.position.set(0, 0.94, 0) // 定位高度
      flyLineMesh.renderOrder = 21 // 设置渲染优先级

      this.flyLineGroup!.add(flyLineMesh)
    })
    // 创建焦点效果（杭州中心点特效）
    this.createFlyLineFocus()
  }
  /**
   * 创建飞线焦点效果
   * 在地图上绘制从中心点（杭州）到各城市的飞线动画
   * 使用二次贝塞尔曲线实现弧线效果，纹理动画实现飞行效果
   */
  createFlyLineFocus() {
    this.flyLineFocusGroup = new THREE.Group()
    this.flyLineFocusGroup.name = 'flyLineFocusGroup'
    this.flyLineFocusGroup.visible = false
    this.flyLineFocusGroup.rotation.x = -Math.PI / 2 // 旋转到水平面
    this.scene.add(this.flyLineFocusGroup)

    const [centerX, centerY] = this.geoProjection(this.flyLineCenter)!
    this.flyLineFocusGroup.position.set(centerX, 0.942, centerY)

    const focusTexture = this.assets.instance!.getResource('flyLineFocus')
    const focusMaterial = new THREE.MeshBasicMaterial({
      map: focusTexture,
      alphaMap: focusTexture,
      color: 16777215, // 白色
      transparent: true,
      blending: THREE.AdditiveBlending, // 加法混合增强亮度
      fog: false,
      depthTest: false,
    })

    const focusMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.3, 1.3),
      focusMaterial,
    )
    focusMesh.scale.set(0, 0, 0) // 初始大小为0

    const focusMesh2 = focusMesh.clone()
    focusMesh2.material = focusMaterial.clone()

    this.flyLineFocusGroup.add(focusMesh, focusMesh2)

    gsap.to(focusMesh.material, {
      opacity: 0, // 透明度从1到0
      repeat: -1, // 无限循环
      yoyo: false, // 不往返
      duration: 1, // 1秒周期
    })

    gsap.to(focusMesh.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      repeat: -1, // 无限循环
      yoyo: false, // 不往返
      duration: 1, // 1秒周期
    })

    gsap.to(focusMesh2.material, {
      delay: 0.5, // 延迟0.5秒
      opacity: 0, // 透明度从1到0
      repeat: -1, // 无限循环
      yoyo: false, // 不往返
      duration: 1, // 1秒周期
    })
    gsap.to(focusMesh2.scale, {
      delay: 0.5, // 延迟0.5秒
      x: 1.5,
      y: 1.5,
      z: 1.5,
      repeat: -1, // 无限循环
      yoyo: false, // 不往返
      duration: 1, // 1秒周期
    })
  }
  destroy() {
    super.destroy()
  }
}

export default MapControlStudy
