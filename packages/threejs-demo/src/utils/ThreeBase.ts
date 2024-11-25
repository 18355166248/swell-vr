/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import {Controller, GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import {GUISetting} from '../types/three.type'
import * as TWEEN from 'three/addons/libs/tween.module.js'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

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
  isAxesHelper: boolean = false // 辅助观察的坐标系
  axesHelperSize = 100 // 辅助观察的坐标系大小

  constructor() {}
  init(container?: HTMLElement) {
    this.container = container || document.body
    this.width = this.container?.clientWidth || 0
    this.height = this.container?.clientHeight || 0

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: false,
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
    this._animate()

    window.addEventListener('resize', this.onResize.bind(this))
    window.addEventListener('unload', this.destroy.bind(this))
  }

  initGui() {
    const gui = new GUI()
    this.gui = gui

    this.recursionGuiSettings(this.guiSettings, gui)

    // gui.open()
    gui.onChange(event => {
      // event.object; // object that was modified
      // event.property; // string, name of property
      // event.value; // new value of controller
      // event.controller; // controller that was modified
      this.onGuiAction(event)
    })
  }
  onGuiAction(event: {
    object: object
    property: string
    value: unknown
    controller: Controller
  }) {
    console.log('🚀 ~ ThreeBase ~ onGuiAction ~ event:', event)
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
    this.container.addEventListener('pointerdown', event => {
      if (!this.container || !this.mouse || !this.camera || !this.raycaster)
        return
      console.log('click')
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
    })
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
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera)
    }
    this.animate?.()
    this.threeAnim = requestAnimationFrame(this._animate.bind(this))
  }
  animate() {}
  onResize() {
    if (this.container && this.camera && this.renderer) {
      this.camera.aspect =
        this.container.offsetWidth / this.container.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(
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
      this.renderer.dispose && this.renderer.dispose()
      this.renderer.forceContextLoss()
      this.renderer?.domElement.remove()
      this.renderer = null
    }
    this.stats?.end()
    this.stats?.dom.remove()
    this.gui?.destroy()

    window.removeEventListener('resize', this.onResize.bind(this))
    window.removeEventListener('unload', this.destroy.bind(this))
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
    this.scene?.add(axesHelper)
  }
}
