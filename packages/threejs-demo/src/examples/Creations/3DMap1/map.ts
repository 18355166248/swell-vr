import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import ChinaData from '../../../data/map/china.json'
import {cg} from './utils'

export default class Map {
  width: number
  height: number
  renderer: THREE.WebGLRenderer | null = null
  destroyTasks: (() => void)[] = []
  scene?: THREE.Scene
  camera?: THREE.PerspectiveCamera
  map?: THREE.Object3D<THREE.Object3DEventMap>
  controls?: OrbitControls

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

      this.container.appendChild(renderer.domElement)

      // 初始化控制器
      this.setController()
      // 初始化地图
      this.initMap()

      this.render()

      this.container.appendChild(renderer.domElement)

      this.destroyTasks.push(() => {
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
    console.log('🚀 ~ Map ~ initMap ~ initMap:')
    // 国家地图
    // const province = new THREE.Object3D()

    // this.scene?.add(province)

    this.initInnerShadow()
  }

  initInnerShadow() {
    const canvasMap = document.createElement('canvas')
    const ctx = canvasMap.getContext('2d') as CanvasRenderingContext2D
    const g = {
      fill: true,
      fillColor: 'red',
      shadowColor: 'red',
      shadowBlur: 100,
    }
    const list = ChinaData.features[0].geometry.coordinates
    list.forEach(item => {
      // console.log(item)

      const inner = this.drawInnerShadow({
        feature: item,
        zoom: 1,
        style: g,
        width: 100,
        height: 100,
        offset: [0, 0],
      })
      ctx.drawImage(inner, Math.abs(0), Math.abs(0), inner.width, inner.height)
    })

    // 生成图片数据URL（PNG格式，默认质量0.9）
    const dataUrl = canvasMap.toDataURL('image/png', 0.9)
    console.log('🚀 ~ Map ~ initInnerShadow ~ dataUrl:', dataUrl)

    // 创建隐藏的下载链接
    // const link = document.createElement('a')
    // link.href = dataUrl
    // link.download = `myImage.png` // 自定义文件名
    // // 触发下载
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
  }

  drawInnerShadow(params: {
    feature: number[][][]
    zoom: number
    style: {
      fill: boolean
      fillColor: string
      shadowColor: string
      shadowBlur: number
    }
    width: number
    height: number
    offset: number[]
  }) {
    const {feature, zoom, style, width, height, offset} = params,
      s = document.createElement('canvas'),
      l = s.getContext('2d') as CanvasRenderingContext2D

    s.width = width
    s.height = height
    s.style.width = width + 'px'
    s.style.height = height + 'px'

    const u = feature
    const c: [number, number][][] = []
    let d: number[], h: number, p: number
    c.push([[0, 0]])
    for (let f = 0; f < u[0].length; f++) {
      const t = u[0][f]
      ;(d = this.convertToPixelCoordinates(t[0], t[1], zoom)),
        c[0].push([d[0] - offset[0], d[1] - offset[1]])
    }

    for (
      l.globalCompositeOperation = 'source-out', l.beginPath(), h = 0;
      h < c.length;
      h++
    ) {
      for (p = 0; p < c[h].length; p++) {
        const t = c[h][p]
        l[p ? 'lineTo' : 'moveTo'](t[0], t[1])
      }
      l.closePath()
    }
    return (
      (l.shadowBlur = style.shadowBlur),
      (l.shadowColor = style.shadowColor),
      (l.fillStyle = style.fillColor),
      l.fill(),
      s
    )
  }

  convertToPixelCoordinates(
    longitude: number,
    latitude: number,
    zoomLevel: number,
  ): [number, number] {
    // 计算x坐标（经度转换）
    const x =
      ((longitude + 180) / 360) * this.calculateTileSize(zoomLevel) * 256

    // 计算y坐标（纬度转换）
    const latRad = (latitude * Math.PI) / 180
    const mercatorY =
      0.5 -
      Math.log((1 + Math.sin(latRad)) / (1 - Math.sin(latRad))) / (4 * Math.PI)
    const y = mercatorY * this.calculateTileSize(zoomLevel) * 256

    return [Math.floor(x), Math.floor(y)]
  }

  // 计算指定缩放级别下的瓦片大小
  calculateTileSize(zoomLevel: number): number {
    return Math.pow(2, zoomLevel)
  }

  bbox(t: number[][]): [number, number, number, number] {
    let e, i
    return ((e = cg(t)),
    (i = [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ]),
    e.reduce(function (t, e) {
      return [
        Math.min(e[0], t[0]),
        Math.min(e[1], t[1]),
        Math.max(e[0], t[2]),
        Math.max(e[1], t[3]),
      ]
    }, i)) as [number, number, number, number]
  }

  render(): void {
    if (!this.scene || !this.camera) return

    this.camera.updateMatrixWorld()
    this.controls?.update()
    this.renderer?.render(this.scene, this.camera)
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
}
