/* eslint-disable @typescript-eslint/no-explicit-any */
import {MapControlOptions, PointLightOptions} from './types'
import MapApplication from './MapApplication'
import * as THREE from 'three'
import {InteractionManager} from 'three.interactive'
import {Label3D, Label3DProps} from './components/label3d'
import LilGui from './utils/lilGui'
import Stats from 'three/addons/libs/stats.module.js'
import {
  ChinaProvinceInfo,
  ExtrudedGeoMapRenderer,
  GeoMapRenderer,
  LineRenderer,
  LoadAssets,
  ZheJiangCityInfo,
} from './utils/infoData'
import {Grid} from './utils/Grid'
import {GradientShader, PlaneMesh} from './utils/GradientShader'
import {SquareIcon} from './utils/base64-img'
import {
  createProvinceLabel,
  createSpecialProvinceLabel,
  createDecorationIcon,
  createProvinceBarLabel,
} from './utils/createlabel'
import {gsap} from 'gsap'

function SortByValue(_: any[]) {
  _.sort((t: any, a: any) => a.value - t.value)
  return _
}

class MapControl extends MapApplication {
  pointCenter: [number, number]
  flyLineCenter: [number, number]
  depth: number
  clicked: boolean
  interactionManager: InteractionManager
  labelGroup: THREE.Group
  label3d: Label3D
  eventElement: THREE.Object3D<THREE.Object3DEventMap>[]
  defaultMaterial?: THREE.MeshStandardMaterial
  defaultLightMaterial?: THREE.MeshStandardMaterial
  debug?: LilGui
  stats?: Stats
  assets: LoadAssets
  rotateBorder1?: THREE.Mesh
  rotateBorder2?: THREE.Mesh
  otherLabel: Label3DProps[] = []
  focusMapGroup?: THREE.Group<THREE.Object3DEventMap>
  focusMapTopMaterial?: THREE.MeshLambertMaterial | THREE.MeshStandardMaterial
  focusMapSideMaterial?: THREE.MeshLambertMaterial | THREE.MeshStandardMaterial
  zhejiangLineMaterial?: THREE.LineBasicMaterial
  allBar: THREE.Mesh[] = []
  allBarMaterial: THREE.MeshBasicMaterial[] = []
  allGuangquan: THREE.Group<THREE.Object3DEventMap>[] = []
  allProvinceLabel: Label3DProps[] = []
  quanGroup?: THREE.Group<THREE.Object3DEventMap>
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    super(container, options)
    this.pointCenter = options.centroid
    this.flyLineCenter = options.center
    this.depth = 0.5
    this.clicked = false
    this.scene.fog = new THREE.Fog(1058614, 1, 50)
    this.scene.background = new THREE.Color(1058614)
    this.camera.instance.position.set(
      -13.767695123014105,
      12.990152163077308,
      39.28228164159694,
    )
    this.camera.instance.near = 1
    this.camera.instance.far = 1e4
    this.camera.instance.updateProjectionMatrix()
    this.interactionManager = new InteractionManager(
      this.renderer.instance,
      this.camera.instance,
      this.canvas,
    )
    this.labelGroup = new THREE.Group()
    this.label3d = new Label3D(this)
    this.labelGroup.rotateX(-Math.PI / 2)
    this.eventElement = []

    this.scene.add(this.labelGroup)
    this.initSetting()
    this.assets = new LoadAssets(() => {
      console.log('初始化成功')
      this.initEnvironment()
      this.createFloor()
      this.createChinaBlurLine()
      this.createGrid()
      this.createRotateBorder()
      this.createLabel()
      this.createModel()

      const timeLine = gsap.timeline()
      timeLine.addLabel('focusMap', 2)
      timeLine.addLabel('focusMapOpacity', 2.5)
      timeLine.addLabel('bar', 3.5)
      timeLine.add(
        gsap.to(this.camera.instance.position, {
          duration: 2.5,
          x: -0.2515849818960619,
          y: 12.397744557047988,
          z: 14.647659671139275,
          ease: 'circ.out',
        }),
      )
      if (this.focusMapGroup) {
        timeLine.add(
          gsap.to(this.focusMapGroup.position, {
            duration: 1,
            x: 0,
            y: 0,
            z: 0,
          }),
          'focusMap',
        )
        timeLine.add(
          gsap.to(this.focusMapGroup.scale, {
            duration: 1,
            x: 1,
            y: 1,
            z: 1,
            ease: 'circ.out',
          }),
          'focusMap',
        )
      }

      if (this.focusMapTopMaterial && this.focusMapSideMaterial) {
        timeLine.add(
          gsap.to(this.focusMapTopMaterial, {
            duration: 1,
            opacity: 1,
            ease: 'circ.out',
          }),
          'focusMapOpacity',
        )
        timeLine.add(
          gsap.to(this.focusMapSideMaterial, {
            duration: 1,
            opacity: 1,
            ease: 'circ.out',
            onComplete: () => {
              this.focusMapSideMaterial!.transparent = false
            },
          }),
          'focusMapOpacity',
        )
      }
      this.otherLabel.map((e, i) => {
        const r = e.element.querySelector('.other-label')
        timeLine.add(
          gsap.to(r, {
            duration: 1,
            delay: 0.1 * i,
            translateY: 0,
            opacity: 1,
            ease: 'circ.out',
          }),
          'focusMapOpacity',
        )
      })
      if (this.zhejiangLineMaterial) {
        timeLine.add(
          gsap.to(this.zhejiangLineMaterial, {
            duration: 0.5,
            delay: 0.3,
            opacity: 1,
          }),
          'focusMapOpacity',
        )
      }
      if (this.rotateBorder1) {
        timeLine.add(
          gsap.to(this.rotateBorder1.scale, {
            delay: 0.3,
            duration: 1,
            x: 1,
            y: 1,
            z: 1,
            ease: 'circ.out',
          }),
          'focusMapOpacity',
        )
      }
      if (this.rotateBorder2) {
        timeLine.add(
          gsap.to(this.rotateBorder2.scale, {
            duration: 1,
            delay: 0.5,
            x: 1,
            y: 1,
            z: 1,
            ease: 'circ.out',
          }),
          'focusMapOpacity',
        )
      }
      this.allBar.map((e, i) => {
        timeLine.add(
          gsap.to(e.scale, {
            duration: 1,
            delay: 0.1 * i,
            x: 1,
            y: 1,
            z: 1,
            ease: 'circ.out',
          }),
          'bar',
        )
      })
      this.allBarMaterial.map((e, i) => {
        timeLine.add(
          gsap.to(e, {
            duration: 1,
            delay: 0.1 * i,
            opacity: 1,
            ease: 'circ.out',
          }),
          'bar',
        )
      })
      this.allProvinceLabel.map((e, i) => {
        const r = e.element.querySelector('.provinces-label-wrap')
        const c = e.element.querySelector('.number .value')
        const o = Number(c?.textContent)
        const l = {score: 0}
        timeLine.add(
          gsap.to(r, {
            duration: 1,
            delay: 0.2 * i,
            translateY: 0,
            opacity: 1,
            ease: 'circ.out',
          }),
          'bar',
        )
        const p = gsap.to(l, {
          duration: 1,
          delay: 0.2 * i,
          score: o,
          onUpdate: n,
        })
        function n() {
          c!.textContent = l.score.toFixed(0)
        }
        timeLine.add(p, 'bar')
      })
      this.allGuangquan.map((e, i) => {
        timeLine.add(
          gsap.to(e.children[0].scale, {
            duration: 1,
            delay: 0.1 * i,
            x: 1,
            y: 1,
            z: 1,
            ease: 'circ.out',
          }),
          'bar',
        )
        timeLine.add(
          gsap.to(e.children[1].scale, {
            duration: 1,
            delay: 0.1 * i,
            x: 1,
            y: 1,
            z: 1,
            ease: 'circ.out',
          }),
          'bar',
        )
      })
    })
  }
  // 初始化 LilGui
  initSetting() {
    this.debug = new LilGui(false)
    if (this.renderer.instance) {
      this.renderer.instance.shadowMap.enabled = false
      this.renderer.resize()
    }
  }
  // 初始化环境光照
  initEnvironment() {
    // 创建环境光照
    const ambientLight = new THREE.AmbientLight(16777215, 5) // 白色环境光，强度5
    this.scene.add(ambientLight)

    // 创建平行光
    const directionalLight = new THREE.DirectionalLight(16777215, 5) // 白色平行光，强度5
    directionalLight.position.set(-30, 6, -8) // 设置光源位置
    directionalLight.castShadow = true // 启用阴影投射
    directionalLight.shadow.radius = 20 // 阴影半径
    directionalLight.shadow.mapSize.width = 1024 // 阴影贴图宽度
    directionalLight.shadow.mapSize.height = 1024 // 阴影贴图高度
    this.scene.add(directionalLight)

    // 调试模式下添加光源辅助器和GUI控制
    if (this.debug && this.debug.active && this.debug.instance) {
      const directionalLightHelper = new THREE.DirectionalLightHelper(
        directionalLight,
        2,
      )
      this.scene.add(directionalLightHelper)

      const environmentFolder = this.debug.instance.addFolder('Environment')
      environmentFolder.add(directionalLight.position, 'x', -30, 30, 1)
      environmentFolder.add(directionalLight.position, 'y', -30, 30, 1)
      environmentFolder.add(directionalLight.position, 'z', -30, 30, 1)
      environmentFolder.add(directionalLight, 'intensity', 1, 100, 1)
      environmentFolder.add(ambientLight, 'intensity', 1, 10, 1)
      environmentFolder.onChange(() => {
        directionalLightHelper.update()
      })
    }

    // 添加点光源
    this.createPointLight({
      color: '#1d5e5e', // 青色
      intensity: 600,
      distance: 10000,
      x: -9,
      y: 3,
      z: -3,
    })

    this.createPointLight({
      color: '#1d5e5e', // 青色
      intensity: 100,
      distance: 10000,
      x: 0,
      y: 2,
      z: 5,
    })
  }
  createPointLight(options: PointLightOptions) {
    // 创建点光源
    const pointLight = new THREE.PointLight(
      1924702,
      options.intensity,
      options.distance,
      1,
    )
    pointLight.position.set(options.x, options.y, options.z)
    this.scene.add(pointLight)

    // 调试模式下添加点光源辅助器和GUI控制
    if (this.debug && this.debug.active && this.debug.instance) {
      const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
      this.scene.add(pointLightHelper)

      const pointLightFolder = this.debug.instance.addFolder(
        'Point' + Math.random(),
      )
      pointLightFolder.addColor(options, 'color')
      pointLightFolder.add(options, 'intensity', 1, 20000, 10)
      pointLightFolder.add(options, 'distance', 100, 100000, 10)
      pointLightFolder.add(options, 'x', -30, 30, 1)
      pointLightFolder.add(options, 'y', -30, 30, 1)
      pointLightFolder.add(options, 'z', -30, 30, 1)

      pointLightFolder.onChange(event => {
        const updatedOptions = event.object as PointLightOptions
        pointLight.color = new THREE.Color(updatedOptions.color)
        pointLight.distance = updatedOptions.distance
        pointLight.intensity = updatedOptions.intensity
        pointLight.position.set(
          updatedOptions.x,
          updatedOptions.y,
          updatedOptions.z,
        )
        pointLightHelper.update()
      })
    }
  }
  // 创建地板
  createFloor() {
    if (this.assets.instance) {
      // 创建一个20x20的平面几何体作为地板
      const floorGeometry = new THREE.PlaneGeometry(20, 20)
      // 获取海洋纹理资源
      const oceanTexture = this.assets.instance.getResource('ocean')
      // 设置纹理属性
      oceanTexture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间
      oceanTexture.wrapS = THREE.RepeatWrapping // 水平方向重复纹理
      oceanTexture.wrapT = THREE.RepeatWrapping // 垂直方向重复纹理
      oceanTexture.repeat.set(1, 1) // 设置纹理重复次数
      // 创建基础材质并应用纹理
      const floorMaterial = new THREE.MeshBasicMaterial({
        map: oceanTexture,
        opacity: 1,
      })
      // 创建地板网格
      const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
      // 将地板旋转到水平位置（绕X轴旋转-90度）
      floorMesh.rotateX(-Math.PI / 2)
      // 设置地板位置稍微下沉
      floorMesh.position.set(0, -0.7, 0)
      // 将地板添加到场景
      this.scene.add(floorMesh)
    }
  }
  // 创建中国边缘线
  createChinaBlurLine() {
    // 创建一个147x147的平面几何体用于显示中国边缘线
    const blurLineGeometry = new THREE.PlaneGeometry(147, 147)

    // 获取中国边缘线纹理资源
    const blurLineTexture = this.assets.instance?.getResource('chinaBlurLine')

    if (blurLineTexture) {
      // 设置纹理属性
      blurLineTexture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间
      blurLineTexture.wrapS = THREE.RepeatWrapping // 水平方向重复纹理
      blurLineTexture.wrapT = THREE.RepeatWrapping // 垂直方向重复纹理
      blurLineTexture.generateMipmaps = false // 禁用mipmap生成以提高性能
      blurLineTexture.minFilter = THREE.NearestFilter // 设置最小化过滤器为最近点采样
      blurLineTexture.repeat.set(1, 1) // 设置纹理重复次数

      // 创建半透明材质并应用纹理作为透明度贴图
      const blurLineMaterial = new THREE.MeshBasicMaterial({
        color: 4162253, // 设置材质颜色（浅蓝色）
        alphaMap: blurLineTexture, // 使用纹理作为透明度贴图
        transparent: true, // 启用透明
        opacity: 0.5, // 设置透明度为50%
      })

      // 创建中国边缘线网格
      const blurLineMesh = new THREE.Mesh(blurLineGeometry, blurLineMaterial)

      // 将平面旋转到水平位置（绕X轴旋转-90度）
      blurLineMesh.rotateX(-Math.PI / 2)

      // 调整位置使其正确对齐
      blurLineMesh.position.set(-33.2, -0.5, -5.2)

      // 将中国边缘线添加到场景
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
  // 创建网格
  createGrid() {
    const options = {
      gridSize: 50,
      gridDivision: 20,
      gridColor: 1788784,
      shapeSize: 0.5,
      shapeColor: 2776970,
      pointSize: 0.1,
      pointColor: 1396093,
      diffuse: !0,
      diffuseSpeed: 10,
    }
    new Grid(this, options)
  }
  // 创建2个旋转边框
  createRotateBorder() {
    // 旋转边框的尺寸大小
    const borderSize = 12

    // 获取两种不同的旋转边框纹理
    const outerBorderTexture =
      this.assets.instance?.getResource('rotationBorder1')
    const innerBorderTexture =
      this.assets.instance?.getResource('rotationBorder2')

    // 创建外层旋转边框
    const outerBorder = new PlaneMesh(this, {
      name: 'rotationBorder1-mesh',
      width: borderSize * 1.178, // 外层边框稍大
      needRotate: true,
      rotateSpeed: 0.001, // 外层旋转速度较慢
      material: new THREE.MeshBasicMaterial({
        map: outerBorderTexture,
        color: 4763647, // 蓝色调
        transparent: true,
        opacity: 0.2, // 外层透明度较低
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
      position: new THREE.Vector3(0, 0.28, 0),
    })
    outerBorder.instance.renderOrder = 6
    outerBorder.instance.scale.set(0, 0, 0)
    outerBorder.setParent(this.scene)

    // 创建内层旋转边框
    const innerBorder = new PlaneMesh(this, {
      name: 'rotationBorder2-mesh',
      width: borderSize * 1.116, // 内层边框稍小
      needRotate: true,
      rotateSpeed: -0.004, // 内层旋转速度较快，方向相反
      material: new THREE.MeshBasicMaterial({
        map: innerBorderTexture,
        color: 4763647, // 蓝色调
        transparent: true,
        opacity: 0.4, // 内层透明度较高
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
      position: new THREE.Vector3(0, 0.3, 0),
    })
    innerBorder.instance.renderOrder = 6
    innerBorder.instance.scale.set(0, 0, 0)
    innerBorder.setParent(this.scene)

    // 保存引用以便后续可能的动画或交互使用
    this.rotateBorder1 = outerBorder.instance
    this.rotateBorder2 = innerBorder.instance
  }
  // 创建标签
  createLabel() {
    const labels: Label3DProps[] = []

    // 创建省份标签
    ChinaProvinceInfo.map(provinceInfo => {
      if (provinceInfo.hide == true) return false
      const provinceLabel = createProvinceLabel(
        provinceInfo,
        this.label3d,
        this.labelGroup,
        this.geoProjection.bind(this),
      )
      labels.push(provinceLabel)
    })

    // 创建特殊省份标签(浙江省)
    const zhejiangLabel = createSpecialProvinceLabel(
      {
        name: '浙江省',
        enName: 'ZHEJIANG PROVINCE',
        center: [120.109913, 26.881466],
      },
      this.label3d,
      this.labelGroup,
      this.geoProjection.bind(this),
    )

    // 创建大尺寸装饰图标
    const largeDecorationIcon = createDecorationIcon(
      {
        icon: SquareIcon,
        center: [125.109913, 26.881466],
        width: '40px',
        height: '40px',
        reflect: true,
      },
      this.label3d,
      this.labelGroup,
      this.geoProjection.bind(this),
    )

    // 创建小尺寸装饰图标
    const smallDecorationIcon = createDecorationIcon(
      {
        icon: SquareIcon,
        center: [116.109913, 26.881466],
        width: '20px',
        height: '20px',
        reflect: false,
      },
      this.label3d,
      this.labelGroup,
      this.geoProjection.bind(this),
    )

    labels.push(zhejiangLabel)
    labels.push(largeDecorationIcon)
    labels.push(smallDecorationIcon)
    this.otherLabel = labels
  }
  /**
   * 创建模型并组织地图层次结构
   * 负责创建中国地图及浙江省地图模型，并设置它们的层级关系
   */
  createModel() {
    const mapRootGroup = new THREE.Group()
    this.focusMapGroup = new THREE.Group()

    // 创建中国地图及其轮廓线
    const {china, chinaTopLine} = this.createChina()

    // 创建浙江省地图及其相关元素
    const {zhejiang, zhejiangTop, zhejiangLine} = this.createProvince()

    console.log('🚀 ~ createModel ~ zhejiang:', zhejiang)
    // 设置地图层级关系
    china.setParent(mapRootGroup)
    chinaTopLine.setParent(mapRootGroup)
    zhejiang.setParent(this.focusMapGroup)
    zhejiangTop.setParent(this.focusMapGroup)
    zhejiangLine.setParent(this.focusMapGroup)

    // 设置焦点地图组的位置和缩放
    this.focusMapGroup.position.set(0, 0, -0.01)
    this.focusMapGroup.scale.set(1, 1, 0)
    mapRootGroup.add(this.focusMapGroup)

    // 旋转地图至水平位置并设置位置
    mapRootGroup.rotation.x = -Math.PI / 2
    mapRootGroup.position.set(0, 0.2, 0)
    this.scene.add(mapRootGroup)

    // 创建柱状图表示各城市数据
    this.createBar()
  }
  /**
   * 创建中国地图
   * 包括地图主体和两层轮廓线（顶部和底部）
   * @returns 中国地图相关元素，包括主体地图、顶部线框和底部线框
   */
  createChina() {
    const chinaGeoData = this.assets.instance!.getResource('china')

    // 创建中国地图主体
    const china = new GeoMapRenderer({
      data: chinaGeoData,
      center: this.pointCenter,
      merge: false,
      material: new THREE.MeshLambertMaterial({
        color: 1387591, // 深蓝色
        transparent: true,
        opacity: 1,
      }),
      renderOrder: 2,
    })

    // 创建中国顶部轮廓线（高亮广东省）
    const chinaTopLine = new LineRenderer({
      center: this.pointCenter,
      visibelProvince: '广东省',
      data: chinaGeoData,
      material: new THREE.LineBasicMaterial({color: 4162253}), // 蓝色
      renderOrder: 3,
    })
    chinaTopLine.lineGroup.position.z += 0.01

    // 创建中国底部轮廓线（半透明）
    const chinaBottomLine = new LineRenderer({
      center: this.pointCenter,
      data: chinaGeoData,
      material: new THREE.LineBasicMaterial({
        color: 4162253, // 蓝色
        transparent: true,
        opacity: 0.4,
      }),
      renderOrder: 3,
    })
    chinaBottomLine.lineGroup.position.z -= 0.59

    return {china, chinaTopLine, chinaBottomLine}
  }
  /**
   * 创建浙江省地图
   * 包括浙江省地图主体、顶部地图和轮廓线
   * @returns 浙江省地图相关元素，包括主体地图、顶部地图和线框
   */
  createProvince() {
    const zhejiangGeoData = this.assets.instance!.getResource('zhejiang')

    // 创建省份材质（上表面和侧面）
    const [topFaceMaterial, sideMaterial] = this.createProvinceMaterial()
    this.focusMapTopMaterial = topFaceMaterial
    this.focusMapSideMaterial = sideMaterial

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

    // 创建顶部地图的材质（带渐变）
    const topMapMaterial = new THREE.MeshStandardMaterial({
      color: 16777215, // 白色
      transparent: true,
      opacity: 0.5,
    })

    // 应用渐变着色器
    new GradientShader(topMapMaterial, {uColor1: 2780818, uColor2: 1058614})
    this.defaultMaterial = topMapMaterial

    // 创建发光材质（克隆自默认材质）
    this.defaultLightMaterial = this.defaultMaterial.clone()
    this.defaultLightMaterial.emissive.setHex(725293) // 蓝绿色
    this.defaultLightMaterial.emissiveIntensity = 3.5

    // 创建浙江省顶部地图（平面）
    const zhejiangTop = new GeoMapRenderer({
      center: this.pointCenter,
      position: new THREE.Vector3(0, 0, 0.72),
      data: zhejiangGeoData,
      material: topMapMaterial,
      renderOrder: 2,
    })

    // 将网格添加到可交互元素列表
    zhejiangTop.mapGroup.children.map(provinceGroup => {
      provinceGroup.children.map(child => {
        child.type === 'Mesh' && this.eventElement.push(child)
      })
    })

    // 创建浙江轮廓线材质
    this.zhejiangLineMaterial = new THREE.LineBasicMaterial({
      color: 16777215, // 白色
      opacity: 0,
      transparent: true,
      fog: false,
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
  /**
   * 创建省份材质
   * 包括顶面材质和侧面材质，均应用了自定义着色器
   * @returns 包含顶面材质和侧面材质的数组
   */
  createProvinceMaterial() {
    // 创建顶面材质（带渐变效果）
    const topMaterial = new THREE.MeshLambertMaterial({
      color: 16777215, // 白色
      transparent: true,
      opacity: 0,
      fog: false,
      side: THREE.DoubleSide,
    })

    // 自定义顶面着色器
    topMaterial.onBeforeCompile = shader => {
      // 添加自定义着色器参数
      shader.uniforms = {
        ...shader.uniforms,
        uColor1: {value: new THREE.Color(2780818)}, // 浅蓝色
        uColor2: {value: new THREE.Color(1058614)}, // 深蓝色
      }

      // 修改顶点着色器，添加位置和透明度传递
      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `
        attribute float alpha;
        varying vec3 vPosition;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vPosition = position;
      `,
      )

      // 修改片元着色器，添加自定义变量和制服
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `,
      )

      // 实现水平渐变效果
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
                      #ifdef OPAQUE
                      diffuseColor.a = 1.0;
                      #endif

                      // https://github.com/mrdoob/three.js/pull/22425
                      #ifdef USE_TRANSMISSION
                      diffuseColor.a *= transmissionAlpha + 0.1;
                      #endif
                      vec3 gradient = mix(uColor1, uColor2, vPosition.x/15.78); // 15.78

                      outgoingLight = outgoingLight*gradient;
                      float topAlpha = 0.5;
                      if(vPosition.z>0.3){
                        diffuseColor.a *= topAlpha;
                      }

                      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
                      `,
      )
    }

    // 获取侧面纹理
    const sideTexture = this.assets.instance!.getResource('side')
    sideTexture.wrapS = THREE.RepeatWrapping
    sideTexture.wrapT = THREE.RepeatWrapping
    sideTexture.repeat.set(1, 1.5)
    sideTexture.offset.y += 0.065

    // 创建侧面材质（带流动纹理）
    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 16777215, // 白色
      map: sideTexture,
      fog: false,
      opacity: 0,
      side: THREE.DoubleSide,
    })

    // 动画效果：纹理流动
    this.time.on('tick', () => {
      sideTexture.offset.y += 0.005 // 纹理Y轴偏移，产生流动效果
    })

    // 自定义侧面着色器
    sideMaterial.onBeforeCompile = shader => {
      shader.uniforms = {
        ...shader.uniforms,
        uColor1: {value: new THREE.Color(2780818)}, // 浅蓝色
        uColor2: {value: new THREE.Color(2780818)}, // 浅蓝色
      }

      // 修改顶点着色器
      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `
                      attribute float alpha;
                      varying vec3 vPosition;
                      varying float vAlpha;
                      void main() {
                        vAlpha = alpha;
                        vPosition = position;
                    `,
      )

      // 修改片元着色器
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `
                        varying vec3 vPosition;
                        varying float vAlpha;
                        uniform vec3 uColor1;
                        uniform vec3 uColor2;

                        void main() {
                      `,
      )

      // 实现垂直渐变效果
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
                      #ifdef OPAQUE
                      diffuseColor.a = 1.0;
                      #endif

                      // https://github.com/mrdoob/three.js/pull/22425
                      #ifdef USE_TRANSMISSION
                      diffuseColor.a *= transmissionAlpha + 0.1;
                      #endif
                      vec3 gradient = mix(uColor1, uColor2, vPosition.z/1.2);

                      outgoingLight = outgoingLight*gradient;


                      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
                      `,
      )
    }

    return [topMaterial, sideMaterial]
  }
  /**
   * 创建城市数据柱状图
   * 根据各城市数据创建高度不同的柱状图，并添加光环和辉光效果
   */
  createBar() {
    // 筛选出浙江省前7个市（按数值排序）
    const cityList = SortByValue(ZheJiangCityInfo).filter(
      (city, index) => index < 7,
    )

    // 创建柱状图组
    const barGroup = new THREE.Group()

    // 设置柱状图参数
    const baseSize = 0.7
    const maxHeight = 4 * baseSize
    const maxValue = cityList[0].value // 最大值用于归一化

    // 初始化数组
    this.allBar = []
    this.allBarMaterial = []
    this.allGuangquan = []
    this.allProvinceLabel = []

    // 为每个城市创建柱状图
    cityList.map((cityInfo, index) => {
      // 计算柱高（根据数值归一化）
      const barHeight = maxHeight * (cityInfo.value / maxValue)

      // 创建柱状图材质（带渐变）
      const barMaterial = new THREE.MeshBasicMaterial({
        color: 16777215, // 白色
        transparent: true,
        opacity: 0,
        depthTest: false,
        fog: false,
      })

      // 应用不同颜色渐变（前4名和后3名使用不同颜色）
      new GradientShader(barMaterial, {
        uColor1: index > 3 ? 16506760 : 5291006, // 黄色 : 蓝色
        uColor2: index > 3 ? 16776948 : 7863285, // 浅黄色 : 浅蓝色
        size: barHeight,
        dir: 'y',
      })

      // 创建柱状图几何体
      const barGeometry = new THREE.BoxGeometry(
        0.1 * baseSize,
        0.1 * baseSize,
        barHeight,
      )
      barGeometry.translate(0, 0, barHeight / 2) // 上移几何体，使底部对齐

      // 创建柱状图网格
      const barMesh = new THREE.Mesh(barGeometry, barMaterial)
      barMesh.renderOrder = 5

      // 获取城市坐标并设置位置
      const [x, y] = this.geoProjection(cityInfo.centroid)!
      barMesh.position.set(x, -y, 0.95) // 将柱状图放置在地图上方
      barMesh.scale.set(1, 1, 0) // 初始缩放为0，待动画展示

      // 创建柱状图底部光环
      const guangquan = this.createQuan(new THREE.Vector3(x, 0.94, y))

      // 创建柱状图辉光效果
      const huiguang = this.createHUIGUANG(
        barHeight,
        index > 3 ? 16776948 : 7863285, // 黄色 : 蓝色
      )
      barMesh.add(...huiguang)

      // 添加到柱状图组
      barGroup.add(barMesh)

      // 设置组旋转
      barGroup.rotation.x = -Math.PI / 2

      // 创建城市标签
      const cityLabel = createProvinceBarLabel(
        cityInfo,
        index,
        new THREE.Vector3(x, -y, 1.6 + barHeight), // 将标签放置在柱状图顶部
        this.label3d,
        this.labelGroup,
      )

      // 保存引用用于动画
      this.allBar.push(barMesh)
      this.allBarMaterial.push(barMaterial)
      this.allGuangquan.push(guangquan)
      this.allProvinceLabel.push(cityLabel)
    })

    // 添加柱状图组到场景
    this.scene.add(barGroup)
  }
  /**
   * 创建光环效果
   * 用于柱状图底部的光环装饰
   * @param position 光环的位置
   * @returns 光环组
   */
  createQuan(position: THREE.Vector3) {
    // 获取光环纹理
    const texture1 = this.assets.instance!.getResource('guangquan1')
    const texture2 = this.assets.instance!.getResource('guangquan2')

    // 创建光环几何体
    const planeGeometry = new THREE.PlaneGeometry(0.5, 0.5)

    // 创建外层光环材质
    const outerRingMaterial = new THREE.MeshBasicMaterial({
      color: 16777215, // 白色
      map: texture1,
      alphaMap: texture1,
      opacity: 1,
      transparent: true,
      depthTest: false,
      fog: false,
      blending: THREE.AdditiveBlending, // 加法混合，增强亮度
    })

    // 创建内层光环材质
    const innerRingMaterial = new THREE.MeshBasicMaterial({
      color: 16777215, // 白色
      map: texture2,
      alphaMap: texture2,
      opacity: 1,
      transparent: true,
      depthTest: false,
      fog: false,
      blending: THREE.AdditiveBlending, // 加法混合，增强亮度
    })

    // 创建外层和内层光环网格
    const outerRing = new THREE.Mesh(planeGeometry, outerRingMaterial)
    const innerRing = new THREE.Mesh(planeGeometry, innerRingMaterial)

    // 设置渲染顺序，确保透明度正确
    outerRing.renderOrder = 6
    innerRing.renderOrder = 6

    // 旋转到水平位置
    outerRing.rotateX(-Math.PI / 2)
    innerRing.rotateX(-Math.PI / 2)

    // 设置位置
    outerRing.position.copy(position)
    innerRing.position.copy(position)
    innerRing.position.y -= 0.001 // 内层微微下移，防止z-fighting

    // 初始缩放为0，待动画展示
    outerRing.scale.set(0, 0, 0)
    innerRing.scale.set(0, 0, 0)

    // 创建光环组并添加两个环
    this.quanGroup = new THREE.Group()
    this.quanGroup.add(outerRing, innerRing)
    this.scene.add(this.quanGroup)

    // 添加旋转动画
    this.time.on('tick', () => {
      outerRing.rotation.z += 0.05 // 外层光环旋转
    })

    return this.quanGroup
  }
  /**
   * 创建辉光效果
   * 在柱状图周围创建三个平面，形成辉光效果
   * @param height 辉光高度
   * @param color 辉光颜色
   * @returns 辉光网格数组
   */
  createHUIGUANG(height: number, color: number) {
    // 创建辉光几何体
    const huiguangGeometry = new THREE.PlaneGeometry(0.35, height)
    huiguangGeometry.translate(0, height / 2, 0) // 上移几何体，使底部对齐

    // 获取辉光纹理
    const huiguangTexture = this.assets.instance!.getResource('huiguang')
    huiguangTexture.colorSpace = THREE.SRGBColorSpace
    huiguangTexture.wrapS = THREE.RepeatWrapping
    huiguangTexture.wrapT = THREE.RepeatWrapping

    // 创建辉光材质
    const huiguangMaterial = new THREE.MeshBasicMaterial({
      color: color,
      map: huiguangTexture,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, // 加法混合，增强亮度
    })

    // 创建第一个辉光平面
    const huiguang1 = new THREE.Mesh(huiguangGeometry, huiguangMaterial)
    huiguang1.renderOrder = 10
    huiguang1.rotateX(Math.PI / 2)

    // 复制并旋转创建第二个和第三个辉光平面
    const huiguang2 = huiguang1.clone()
    const huiguang3 = huiguang1.clone()

    // 旋转第二个和第三个平面，形成三角形分布
    huiguang2.rotateY((Math.PI / 180) * 60) // 旋转60度
    huiguang3.rotateY((Math.PI / 180) * 120) // 旋转120度

    // 返回三个辉光平面
    return [huiguang1, huiguang2, huiguang3]
  }
  destroy() {
    super.destroy()
    this.debug?.destroy()
    this.label3d && this.label3d.destroy()
    this.stats && this.stats.dom && document.body.removeChild(this.stats.dom)
  }
}

export default MapControl
