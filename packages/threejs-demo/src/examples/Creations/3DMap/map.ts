import * as THREE from 'three'
import * as d3 from 'd3'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {CSM, CSMMode} from 'three/examples/jsm/csm/CSM.js'
import {CSMHelper} from 'three/examples/jsm/csm/CSMHelper.js'
import ChinaProvinceData from '../../../data/map/china-province.json'
import ChinaData from '../../../data/map/china.json'

// text-cyan-200	color: rgb(165, 243, 252);
// text-cyan-500	color: rgb(6, 182, 212);
// text-cyan-950	color: rgb(8, 51, 68);
const HIGHT_COLOR = 'rgb(165, 243, 252)'
const materialColor = 'rgb(6, 182, 212)'
const mapLineColor = 'rgb(6, 182, 212)'
const planeColor = 'rgb(21, 94, 117)'
const ActiveColor = 'gold'
const ActiveSize = 2

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
const projection = d3.geoMercator().center([104.065735, 36]).translate([0, 0])

export default class Map {
  width: number
  height: number
  renderer: THREE.WebGLRenderer | null = null
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
  lines: [number, number, number][] = []
  geometry = new THREE.BufferGeometry()
  opacitys?: Float32Array
  indexBol: boolean = true
  pointSpeed = 6
  currentPos = 0
  animationFrame: number | null = null

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

      // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      // this.scene.add(ambientLight)

      this.camera = new THREE.PerspectiveCamera(
        60,
        this.width / this.height,
        0.1,
        50_00,
      )

      this.camera.position.set(0, -30, 190)
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
      // 初始化地图
      this.initMap()

      // 初始化灯光
      // this.setLight()
      // this.setRaycaster()
      // this.setBackground()

      this.render()

      this.container.appendChild(renderer.domElement)

      this.destroyTasks.push(() => {
        this.animationFrame && cancelAnimationFrame(this.animationFrame)
        this.animationFrame = null

        if (this.renderer) {
          this.renderer.renderLists && this.renderer.renderLists.dispose()
          this.renderer.dispose && this.renderer.dispose()
          this.renderer.forceContextLoss()
          this.renderer?.domElement.remove()
          this.renderer = null
        }

        this.controls && this.controls.dispose()
        this.scene?.remove(...this.scene.children)
      })
    }
  }

  initMap() {
    // 建一个空对象存放对象
    this.map = new THREE.Object3D()

    // 省级地图
    ChinaProvinceData.features.forEach(item => {
      // 定一个省份的3D对象
      const province = new THREE.Object3D()
      const coordinates = item.geometry.coordinates
      const type = item.geometry.type
      const provinceIndex = 4.15
      // 多边形
      if (type === 'Polygon') {
        coordinates.forEach(coordinate => {
          const lineParams = {
            coordinate,
            color: mapLineColor,
            transparent: true,
            zIndex: provinceIndex,
          } as {coordinate: number[][]; color: string}
          const lineMaterial = this.drawLineProvince(lineParams)
          province.add(lineMaterial)
        })
      }

      // 多个多边形
      if (type === 'MultiPolygon') {
        coordinates.forEach(multiPolygon => {
          multiPolygon.forEach(polygon => {
            const lineParams = {
              coordinate: polygon,
              color: mapLineColor,
              transparent: true,
              zIndex: provinceIndex,
            } as {coordinate: number[][]; color: string}
            const lineMaterial = this.drawLineProvince(lineParams)
            province.add(lineMaterial)
          })
        })
      }

      // 将geo的属性放到省份模型中
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      province.properties = item.properties

      this.map?.add(province)
    })
    this.scene?.add(this.map)

    // 国家地图
    const province = new THREE.Object3D()
    const provinceMaterials = new THREE.Object3D()
    ChinaData.features[0].geometry.coordinates.forEach(coordinate => {
      // coordinate 多边形数据
      coordinate.forEach(rows => {
        const line = this.lineDraw(rows, 0xffffff)
        // 设置拉伸材质
        const mesh = this.drawExtrudeMesh(rows, materialColor)

        const mesh2 = this.drawMesh(rows, planeColor)

        province.add(line)
        province.add(mesh)
        provinceMaterials.add(mesh2)
      })
    })
    this.scene?.add(province)
    this.scene?.add(provinceMaterials)

    this.drawActionLine()
  }

  render(): void {
    if (!this.scene || !this.camera) return
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
    this.animateAction()
    this.camera.updateMatrixWorld()
    // 请注意，如果它被启用，你必须在你的动画循环里调用.update()
    this.csm?.update()
    this.controls?.update()
    this.renderer?.render(this.scene, this.camera)
    this.animationFrame = requestAnimationFrame(this.render.bind(this))
  }
  lineDraw(polygon: number[][], color: number | string) {
    const zIndex = 4
    const lineGeometry = new THREE.BufferGeometry()
    const pointsArray: THREE.Vector3[] = []
    polygon.forEach(row => {
      const [x, y] = projection(row as [number, number]) as [number, number]
      // 创建三维点
      pointsArray.push(new THREE.Vector3(x, -y, zIndex))

      if (this.indexBol) {
        this.lines.push([x, -y, zIndex])
      }
    })
    this.indexBol = false
    // 放入多个点
    lineGeometry.setFromPoints(pointsArray)

    const lineMaterial = new THREE.LineBasicMaterial({
      color,
    })
    return new THREE.Line(lineGeometry, lineMaterial)
  }
  drawLineProvince({
    coordinate,
    color,
    zIndex = 4,
    transparent = false,
  }: {
    coordinate: number[][]
    color: string
    zIndex?: number
    transparent?: boolean
  }) {
    const lineGeometry = new THREE.BufferGeometry()
    const pointsArray: THREE.Vector3[] = []
    coordinate.forEach(row => {
      const [x, y] = projection(row as [number, number]) as [number, number]
      // 创建三维点
      pointsArray.push(new THREE.Vector3(x, -y, zIndex))
    })
    // 放入多个点
    lineGeometry.setFromPoints(pointsArray)
    const lineMaterial = new THREE.LineBasicMaterial({
      color,
      opacity: 1,
      transparent,
    })
    return new THREE.Line(lineGeometry, lineMaterial)
  }
  setController() {
    if (!this.camera || !this.renderer) return

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.minDistance = 20
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

  // 平面
  drawExtrudeMesh(coordinate: number[][], color: string | number) {
    const shape = new THREE.Shape()
    for (let i = 0; i < coordinate.length; i++) {
      const [x, y] = projection(coordinate[i] as [number, number]) as [
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
      bevelEnabled: false,
      bevelSegments: 1,
      bevelThickness: 0.2,
    }

    // 挤压缓冲几何体（ExtrudeGeometry） 从一个形状路径中，挤压出一个BufferGeometry。
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

    // 平面部分材质
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.5,
    })

    const mesh = new THREE.Mesh(geometry, material)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mesh._color = color

    return mesh
  }
  drawMesh(coordinate: number[][], color: string | number) {
    const shape = new THREE.Shape()
    for (let i = 0; i < coordinate.length; i++) {
      const [x, y] = projection(coordinate[i] as [number, number]) as [
        number,
        number,
      ]
      if (i === 0) {
        shape.moveTo(x, -y)
      }
      shape.lineTo(x, -y)
    }

    // 挤压缓冲几何体（ExtrudeGeometry） 从一个形状路径中，挤压出一个BufferGeometry。
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.1,
      bevelEnabled: false,
      bevelSegments: 1,
      bevelThickness: 0.2,
    })

    // 平面部分材质
    const material = new THREE.MeshBasicMaterial({
      color,
    })

    const mesh = new THREE.Mesh(geometry, material)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mesh._color = color
    mesh.position.z = 4

    return mesh
  }
  drawActionLine() {
    const positions = new Float32Array(this.lines.flat(1))
    // 设置顶点
    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    )
    // 设置 粒子透明度为 0
    this.opacitys = new Float32Array(positions.length).map(() => 0)
    this.geometry.setAttribute(
      'aOpacity',
      new THREE.BufferAttribute(this.opacitys, 1),
    )

    const vertexShader = `
      attribute float aOpacity;
      uniform float uSize;
      varying float vOpacity;

      void main(){
          gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
          gl_PointSize = uSize;

          vOpacity=aOpacity;
      }
      `

    const fragmentShader = `
      varying float vOpacity;
      uniform vec3 uColor;

      float invert(float n){
          return 1.-n;
      }

      void main(){
        if(vOpacity <=0.2){
            discard;
        }
        vec2 uv=vec2(gl_PointCoord.x,invert(gl_PointCoord.y));
        vec2 cUv=2.*uv-1.;
        vec4 color=vec4(1./length(cUv));
        color*=vOpacity;
        color.rgb*=uColor;
        gl_FragColor=color;
      }
      `
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      // transparent: true, // 设置透明
      uniforms: {
        uSize: {
          value: ActiveSize,
        },
        uColor: {
          value: new THREE.Color(ActiveColor),
        },
      },
    })
    const points = new THREE.Points(this.geometry, material)
    this.scene?.add(points)
  }
  animateAction() {
    if (!this.opacitys || !this.geometry.attributes.position) return

    this.currentPos += this.pointSpeed
    this.currentPos = this.currentPos % this.lines.length

    for (let i = 0; i < this.pointSpeed; i++) {
      this.opacitys[(this.currentPos - i) % this.lines.length] = 0
    }

    for (let i = 0; i < 200; i++) {
      this.opacitys[(this.currentPos + i) % this.lines.length] =
        i / 50 > 2 ? 2 : i / 50
    }
    this.geometry.attributes.aOpacity.needsUpdate = true
  }
}
