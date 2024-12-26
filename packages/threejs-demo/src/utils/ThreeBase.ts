/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import {Controller, GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import {GUISetting} from '../types/three.type'
import * as TWEEN from 'three/addons/libs/tween.module.js'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import {WebGLRendererParameters} from 'three'
// 引入CSS2渲染器CSS2DRenderer
import {CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js'
// 引入后处理扩展库EffectComposer.js
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js'
// 引入OutlinePass通道
import {OutlinePass} from 'three/addons/postprocessing/OutlinePass.js'
// 引入渲染器通道RenderPass
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js'
// 引入CSS2模型对象CSS2DObject
import {CSS2DObject} from 'three/addons/renderers/CSS2DRenderer.js'
import ReactDOM from 'react-dom/client'

export interface ViewControl {
  width?: number
  height?: number
  depth?: number
  cameraPosX?: number
  cameraPosY?: number
  cameraPosZ?: number
}

export default class ThreeBase {
  scene?: THREE.Scene
  camera?: THREE.PerspectiveCamera
  cameraConfig: {fov?: number; near?: number; far?: number} = {
    fov: 45,
    near: 0.1,
    far: 1000,
  }
  container?: HTMLElement
  renderer: THREE.WebGLRenderer | null = null
  css2Renderer: CSS2DRenderer | null = null
  isCSS2Renderer: boolean = false // 是否使用CSS2渲染器
  rendererSettings?: WebGLRendererParameters
  width?: number = 0
  height?: number = 0
  isGui?: boolean = false
  guiSettings: GUISetting[] = []
  dataObj: Record<string, any> = {}
  gui?: GUI
  raycaster?: THREE.Raycaster
  mouse?: THREE.Vector2
  mouse1?: THREE.Vector2
  isRayCaster: boolean = false
  isTWEEN: boolean = false
  TWEEN?: typeof TWEEN
  isControl: boolean = false
  controls?: OrbitControls
  threeAnim?: number
  stats?: Stats
  isStats: boolean = false // 性能监视器
  axesHelper?: THREE.AxesHelper
  isAxesHelper: boolean = false // 辅助观察的坐标系
  axesHelperSize = 100 // 辅助观察的坐标系大小
  composer?: EffectComposer
  outlinePass?: OutlinePass
  isOutlinePass: boolean = false // 轮廓渲染
  outlinePassParams = {
    color: 0x00ffff,
    edgeThickness: 2,
    edgeStrength: 2,
  }
  onGuiAction?: (p: {
    object: object
    property: string
    value: unknown
    controller: Controller
  }) => void
  needRender: boolean = true
  tagKey = 'tag-key'

  constructor() {}
  init(container?: HTMLElement) {
    this.container = container || document.body
    this.width = this.container?.clientWidth || 0
    this.height = this.container?.clientHeight || 0

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: false,
      ...this.rendererSettings,
      //想把canvas画布上内容下载到本地，需要设置为true
      // preserveDrawingBuffer:true,
    })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.clear()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight,
    )
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setViewport(0, 0, this.width, this.height)
    // 查WebGL渲染器文档，你可以看到.outputColorSpace的默认值就是SRGB颜色空间THREE.SRGBColorSpace，意味着新版本代码中，加载gltf，没有特殊需要，不设置.outputColorSpace也不会引起色差。
    // this.renderer.outputColorSpace = THREE.SRGBColorSpace

    this.container?.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(
      this.cameraConfig.fov,
      this.width / this.height || 1,
      this.cameraConfig.near,
      this.cameraConfig.far,
    )
    this.camera.position.set(0, 10, 50)
    this.camera.lookAt(0, 0, 0)
    if (this.isGui) {
      this.initGui()
    }

    if (this.isRayCaster) {
      this.initRaycaster()
    }
    if (this.isTWEEN) {
      this.TWEEN = TWEEN
    }
    if (this.isControl) {
      this.initControl()
    }
    if (this.isStats) {
      //创建stats对象
      const stats = new Stats()
      //stats.domElement:web页面上输出计算结果,一个div元素，
      stats.dom.style.zIndex = '998'
      document.body.appendChild(stats.dom)
    }
    if (this.isAxesHelper) {
      this.initAxesHelper()
    }
    if (this.isCSS2Renderer) {
      this.initCSS2Renderer()
    }
    if (this.isOutlinePass) {
      this.initOutlinePass()
    }
    this._animate()

    window.addEventListener('resize', this.onResize.bind(this))
    window.addEventListener('unload', this.destroy.bind(this))
  }

  async initGui() {
    let _gui = this.gui
    if (!this.gui) {
      _gui = new GUI()
      this.gui = _gui
    }

    const gui = _gui as GUI

    this.recursionGuiSettings(this.guiSettings, gui)

    // gui.open()
    gui.onChange(event => {
      // event.object; // object that was modified
      // event.property; // string, name of property
      // event.value; // new value of controller
      // event.controller; // controller that was modified
      this.onGuiAction?.(event)
    })
  }

  delay(time = 1000) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
  }
  initRaycaster() {
    this.raycaster = new THREE.Raycaster()
    this.mouseHover()
    this.mouseClick()
  }
  mouseHover() {
    if (!this.container) return
    this.mouse1 = new THREE.Vector2()
    this.container.addEventListener('pointermove', event => {
      if (!this.mouse1 || !this.container || !this.camera || !this.raycaster)
        return
      event.preventDefault()

      this.mouse1.x =
        ((event.offsetX - this.container.offsetLeft) /
          this.container.offsetWidth) *
          2 -
        1
      this.mouse1.y =
        -(
          (event.offsetY - this.container.offsetTop) /
          this.container.offsetHeight
        ) *
          2 +
        1
      const vector = new THREE.Vector3(
        this.mouse1.x,
        this.mouse1.y,
        1,
      ).unproject(this.camera)

      this.raycaster.set(
        this.camera.position,
        vector.sub(this.camera.position).normalize(),
      )
      this.raycaster.setFromCamera(this.mouse1, this.camera)
      this.mouseHoverAction()
    })
  }
  mouseClick() {
    if (!this.container) return
    this.mouse = new THREE.Vector2()
    this.container.style.cursor = 'pointer'
    this.container.addEventListener('pointerdown', this.mouseClickAction)
  }
  // 箭头函数 不然this拿不到值
  mouseClickAction = (event: PointerEvent) => {
    if (!this.container || !this.mouse || !this.camera || !this.raycaster)
      return
    event.preventDefault()

    this.mouse.x =
      ((event.offsetX - this.container.offsetLeft) /
        this.container.offsetWidth) *
        2 -
      1
    this.mouse.y =
      -(
        (event.offsetY - this.container.offsetTop) /
        this.container.offsetHeight
      ) *
        2 +
      1
    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 1).unproject(
      this.camera,
    )

    this.raycaster.set(
      this.camera.position,
      vector.sub(this.camera.position).normalize(),
    )
    this.raycaster.setFromCamera(this.mouse, this.camera)
    this.raycasterAction()
  }
  mouseHoverAction() {}
  raycasterAction() {}
  initControl() {
    if (!this.camera || !this.renderer) return
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
  }
  modelCenter(
    group: THREE.Group<THREE.Object3DEventMap>,
    viewControl?: ViewControl,
  ) {
    if (group.updateMatrixWorld) {
      group.updateMatrixWorld()
    }

    const box = new THREE.Box3().setFromObject(group)

    // 返回包围盒的中心点
    const center = box.getCenter(new THREE.Vector3())

    group.position.x += group.position.x - center.x
    group.position.y += group.position.y - center.y
    group.position.z += group.position.z - center.z

    const objSize = new THREE.Vector3(
      Math.abs(box.max.x - box.min.x),
      Math.abs(box.max.y - box.min.y),
      Math.abs(box.max.z - box.min.z),
    )
    const width = objSize.x
    const height = objSize.y
    const depth = objSize.z

    if (this.camera && viewControl) {
      this.camera.position.x = width * (viewControl.width || 0)
      this.camera.position.y = height * (viewControl.height || 0)
      this.camera.position.z = depth * (viewControl.depth || 0)
    }
  }
  _animate() {
    if (this.controls) {
      this.controls.update()
    }
    if (TWEEN.getAll().length) {
      TWEEN.update()
    }
    if (this.renderer && this.scene && this.camera && this.needRender) {
      this.renderer.render(this.scene, this.camera)
    }
    this.animate?.()
    this.threeAnim = requestAnimationFrame(this._animate.bind(this))
  }
  animate() {}
  onResize() {
    if (this.container && this.camera && this.renderer && this.css2Renderer) {
      this.camera.aspect =
        this.container.offsetWidth / this.container.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(
        this.container.offsetWidth,
        this.container.offsetHeight,
      )
      this.css2Renderer.setSize(
        this.container.offsetWidth,
        this.container.offsetHeight,
      )
    }
  }
  destroy() {
    if (this.threeAnim) {
      cancelAnimationFrame(this.threeAnim)
    }
    this.scene && this.scene.remove(...this.scene.children)
    this.controls && this.controls.dispose()
    if (this.renderer) {
      this.renderer.renderLists && this.renderer.renderLists.dispose()
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      this.renderer.domElement.remove()
      this.renderer = null
    }
    if (this.css2Renderer) {
      this.css2Renderer.domElement.remove()
    }
    this.stats?.end()
    this.stats?.dom.remove()
    this.gui?.destroy()
    this.guiSettings = []

    window.removeEventListener('resize', this.onResize.bind(this))
    window.removeEventListener('unload', this.destroy.bind(this))
    if (this.container && this.isRayCaster) {
      this.container.removeEventListener('pointerdown', this.mouseClickAction)
    }
  }

  recursionGuiSettings(settings: GUISetting[], gui: GUI) {
    settings.forEach(item => {
      if (item.type == 'color') {
        gui.addColor(this.dataObj, item.key)
      } else if (item.type == 'select') {
        /**
         * gui.add( obj, 'size', [ 'Small', 'Medium', 'Large' ] )
gui.add( obj, 'speed', { Slow: 0.1, Normal: 1, Fast: 5 } )
         */
        gui.add(this.dataObj, item.key, item.options)
      } else if (item.type == 'number') {
        /**
         * gui.add( obj, 'number1', 0, 1 ); // min, max
gui.add( obj, 'number2', 0, 100, 10 ); // min, max, step
         */
        gui.add(this.dataObj, item.key, item.min, item.max, item.step)
      } else if (item.type == 'folder') {
        if (Array.isArray(item.children) && item.children.length) {
          const folder = gui.addFolder(item.key)
          this.recursionGuiSettings(item.children, folder)
        }
      } else {
        gui.add(this.dataObj, item.key)
      }
    })
  }
  initAxesHelper() {
    const axesHelper = new THREE.AxesHelper(this.axesHelperSize)
    this.axesHelper = axesHelper
    this.scene?.add(axesHelper)
  }
  initCSS2Renderer() {
    if (
      this.scene &&
      this.camera &&
      this.width &&
      this.height &&
      this.container
    ) {
      // 创建一个CSS2渲染器CSS2DRenderer
      const css2Renderer = new CSS2DRenderer()
      css2Renderer.render(this.scene, this.camera)
      // width, height：canvas画布宽高度
      css2Renderer.setSize(this.width, this.height)
      this.container?.appendChild(css2Renderer.domElement)
      css2Renderer.domElement.style.position = 'absolute'
      css2Renderer.domElement.style.top = '0px'
      css2Renderer.domElement.style.pointerEvents = 'none'
      this.css2Renderer = css2Renderer
    }
  }
  initOutlinePass() {
    if (
      this.renderer &&
      this.scene &&
      this.camera &&
      this.width &&
      this.height
    ) {
      // 创建后处理对象EffectComposer，WebGL渲染器作为参数
      const composer = new EffectComposer(this.renderer)
      const renderPass = new RenderPass(this.scene, this.camera)
      composer.addPass(renderPass)

      // 创建OutlinePass通道
      const v2 = new THREE.Vector2(this.width, this.height)
      const outlinePass = new OutlinePass(v2, this.scene, this.camera)
      outlinePass.visibleEdgeColor.set(this.outlinePassParams.color)
      outlinePass.edgeThickness = this.outlinePassParams.edgeThickness
      outlinePass.edgeStrength = this.outlinePassParams.edgeStrength
      composer.addPass(outlinePass)
      this.outlinePass = outlinePass
      this.composer = composer
    }
  }
  createTag(
    mesh: THREE.Object3D<THREE.Object3DEventMap>,
    Tag: React.ReactNode,
  ) {
    const div = document.createElement('div')
    ReactDOM.createRoot(div).render(Tag)
    const label = new CSS2DObject(div)
    label.name = this.tagKey
    mesh.add(label)
  }
  downLoadImage() {
    const canvas = this.container?.children[0] as HTMLCanvasElement | undefined
    if (canvas && this.renderer) {
      // 创建一个超链接元素，用来下载保存数据的文件
      const link = document.createElement('a')
      // 通过超链接herf属性，设置要保存到文件中的数据
      link.href = link.href = canvas.toDataURL('image/png')
      link.download = 'threejs.png' //下载文件名
      link.click() //js代码触发超链接元素a的鼠标点击事件，开始下载文件到本地
    }
  }
}
