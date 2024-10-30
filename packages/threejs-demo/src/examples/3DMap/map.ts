import * as THREE from 'three'
import {initReSize} from '../../utils/onresize'
import ChinaData from './Data/china.json'
import * as d3 from 'd3'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {CSM, CSMMode} from 'three/examples/jsm/csm/CSM.js'
import {CSMHelper} from 'three/examples/jsm/csm/CSMHelper.js'

const COLOR_ARR = ['#0465BD', '#357bcb', '#3a7abd']
const HIGHT_COLOR = '#4fa5ff'

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
  raycaster?: THREE.Raycaster
  mouse?: THREE.Vector2
  activeIntersects: THREE.Intersection<
    THREE.Object3D<THREE.Object3DEventMap>
  >[] = []
  material?: THREE.ShaderMaterial

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
      //
      this.setRaycaster()
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
    if (this.raycaster && this.mouse) {
      // 通过摄像机和鼠标位置更新射线
      this.raycaster.setFromCamera(this.mouse, this.camera)

      // 计算物体和射线的焦点
      const intersects = this.raycaster.intersectObjects(this.scene.children)

      // 恢复之前的高亮
      this.activeIntersects.forEach(intersects => {
        const {object} = intersects
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const {_color, material} = object
        material[0].color.set(_color)
        material[1].color.set(_color)
      })

      this.activeIntersects = []
      // 改变颜色
      for (let i = 0; i < intersects.length; i++) {
        if (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          intersects[i].object.material &&
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          intersects[i].object.material.length === 2
        ) {
          this.activeIntersects.push(intersects[i])
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          intersects[i].object.material[0].color.set(HIGHT_COLOR)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          intersects[i].object.material[1].color.set(HIGHT_COLOR)
          break // 只取第一个
        }
      }
    }
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
          const points = []
          for (let i = 0; i < polygon.length; i++) {
            const [x, y] = projection(polygon[i] as [number, number]) as [
              number,
              number,
            ]
            points.push(new THREE.Vector3(x, -y, 11))
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          mesh._color = color
          province.add(mesh)

          // 创建轮廓线

          province.add(this.createLine(points))
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

  setRaycaster() {
    // 光线投射用于进行鼠标拾取
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()

    // 鼠标事件
    window.addEventListener('mousemove', this.onMouseMove.bind(this))
  }
  onMouseMove(event: MouseEvent) {
    if (!this.mouse) return
    const {top, left, width, height} = this.container.getBoundingClientRect()
    // this.mouse.x = (clientX / width) * 2 - 1: 将鼠标在容器内的X坐标转换为-1到1之间的标准化值。这是通过将鼠标的X坐标除以容器的宽度得到相对位置，然后乘以2并减去1来实现的。这个转换使得容器的左边界对应-1，右边界对应1，而容器的中心对应0。
    // this.mouse.y = -(clientY / height) * 2 + 1: 将鼠标在容器内的Y坐标转换为-1到1之间的标准化值。与X坐标的处理类似，但是这里乘以-1是为了使得容器的上边界对应1，下边界对应-1，而容器的中心仍然对应0。这种处理方式在图形编程中很常见，因为它简化了基于中心的计算。
    const clientX = event.clientX - left
    const clientY = event.clientY - top
    this.mouse.x = (clientX / width) * 2 - 1
    this.mouse.y = -(clientY / height) * 2 + 1
  }
  createLine(points: THREE.Vector3[]) {
    const curve = new THREE.CatmullRomCurve3(points, true, 'catmullrom', 0)

    const geometry = new THREE.TubeGeometry(
      curve,
      Math.round(points.length * 0.5),
      0.01,
      8,
      true,
    )
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: {value: 0.0},
        len: {value: 0.03},
        size: {value: 0.02},
        color1: {value: new THREE.Color('#fff')},
        color2: {value: new THREE.Color('yellow')},
      },
      // 顶点着色器
      vertexShader: `
        uniform float time;
        uniform float size;
        uniform float len;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vColor;
        void main() {
          vColor = color1;
          vec3 newPosition = position;
          float d = uv.x - time;

          if (abs(d) < len) {
            newPosition = newPosition + normal * size;
            vColor = color2;
          }
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      // 片元着色器
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          gl_FragColor =vec4(vColor, 1.0);
        }
      `,
    })
    this.material = material
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
  }
}
