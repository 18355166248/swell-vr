import * as THREE from 'three'
import {initReSize} from '../../utils/onresize'
import ChinaData from './Data/china.json'
import * as d3 from 'd3'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {CSM, CSMMode} from 'three/examples/jsm/csm/CSM.js'
import {CSMHelper} from 'three/examples/jsm/csm/CSMHelper.js'

const COLOR_ARR = ['#0465BD', '#357bcb', '#3a7abd']

let csmHelper: CSMHelper

const params = {
  orthographic: false,
  fade: false,
  far: 1000,
  mode: 'practical' as CSMMode,
  // mode: 'uniform',
  lightX: -1,
  lightY: -1,
  lightZ: -1,
  margin: 100,
  lightFar: 5000,
  lightNear: 1,
  autoUpdateHelper: true,
  updateHelper: function () {
    csmHelper.update()
  },
}

// 墨卡托投影转换
const projection = d3
  .geoMercator()
  .center([104.0, 37.5])
  .scale(80)
  .translate([0, 0])

export default class Map {
  width: number
  height: number
  renderer?: THREE.WebGLRenderer
  destroyTasks: (() => void)[] = []
  scene?: THREE.Scene
  camera?: THREE.PerspectiveCamera
  map?: THREE.Object3D<THREE.Object3DEventMap>
  controls?: OrbitControls
  lightProbe?: THREE.LightProbe
  csm?: CSM
  csmHelper?: CSMHelper<CSM>

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

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      this.scene.add(ambientLight)

      this.camera = new THREE.PerspectiveCamera(
        60,
        this.width / this.height,
        0.1,
        50_00,
      )

      this.camera.position.set(0, -10, 70)
      this.camera.lookAt(0, 0, 0)

      this.scene.position.y = 8

      // 增加阴影模糊
      this.csm = new CSM({
        maxFar: params.far,
        cascades: 4,
        mode: params.mode,
        parent: this.scene,
        shadowMapSize: 1024,
        lightDirection: new THREE.Vector3(
          params.lightX,
          params.lightY,
          params.lightZ,
        ).normalize(),
        camera: this.camera,
      })

      this.csmHelper = new CSMHelper(this.csm)
      this.csmHelper.visible = false
      this.scene.add(this.csmHelper)

      this.container.appendChild(renderer.domElement)

      // 初始化控制器
      this.setController()
      // 初始化灯光
      this.setLight()
      // 初始化地图
      this.initMap()
      this.setBackground()

      this.render()

      this.container.appendChild(renderer.domElement)

      const {addEventListenerResize, removeEventListenerResize} = initReSize(
        this.camera,
        renderer,
        this.render.bind(this),
      )

      addEventListenerResize()

      this.destroyTasks.push(() => {
        renderer?.dispose()
        renderer?.forceContextLoss()
        renderer?.domElement.remove()
      })

      this.destroyTasks.push(() => {
        this.scene?.remove(...this.scene.children)
      })

      this.destroyTasks.push(() => {
        removeEventListenerResize()
      })
    }
  }

  render(): void {
    if (!this.scene || !this.camera) return
    requestAnimationFrame(this.render.bind(this))
    this.camera.updateMatrixWorld()
    // 请注意，如果它被启用，你必须在你的动画循环里调用.update()
    this.csm?.update()
    this.controls?.update()
    this.renderer?.render(this.scene, this.camera)
  }

  initMap() {
    // 建一个空对象存放对象
    this.map = new THREE.Object3D()

    ChinaData.features.forEach((item, index) => {
      // 定一个省份的3D对象
      const province = new THREE.Object3D()
      const coordinates = item.geometry.coordinates
      const color = COLOR_ARR[index % COLOR_ARR.length]

      // 循环坐标数组
      coordinates.forEach(multiPolygon => {
        multiPolygon.forEach(polygon => {
          // 使用路径以及可选的孔洞来定义一个二维形状平面
          const shape = new THREE.Shape()
          for (let i = 0; i < polygon.length; i++) {
            const [x, y] = projection(polygon[i] as [number, number]) as [
              number,
              number,
            ]
            if (i === 0) {
              shape.moveTo(x, -y)
            }
            shape.lineTo(x, -y)
          }

          const extrudeSettings = {
            depth: 4,
            bevelEnabled: true,
            bevelSegments: 1,
            bevelThickness: 0.2,
          }

          // 挤压缓冲几何体（ExtrudeGeometry） 从一个形状路径中，挤压出一个BufferGeometry。
          const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

          // 平面部分材质
          const material = new THREE.MeshStandardMaterial({
            metalness: 1,
            color: color,
          })
          // 拉高部分材质
          const material1 = new THREE.MeshStandardMaterial({
            metalness: 1,
            roughness: 1,
            color: color,
          })

          const mesh = new THREE.Mesh(geometry, [material, material1])

          if (index % 2 === 0) {
            mesh.scale.set(1, 1, 1.2)
          }
          mesh.castShadow = true
          mesh.receiveShadow = true
          province.add(mesh)
        })
      })

      // 将geo的属性放到省份模型中
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(province as any).properties = item.properties

      this.map?.add(province)
    })

    this.scene?.add(this.map)
  }

  setController() {
    if (!this.camera || !this.renderer) return

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.update()
    this.controls.minDistance = 100
    this.controls.maxDistance = 800
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    this.controls.enableDamping = true
    //是否可以缩放
    this.controls.enableZoom = true
  }

  setLight() {
    const light = new THREE.DirectionalLight(0xffffff, 0.5) // 平行光
    light.position.set(20, -50, 20)

    light.castShadow = true
    light.shadow.mapSize.width = 1024
    light.shadow.mapSize.height = 1024

    this.scene?.add(light)
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
