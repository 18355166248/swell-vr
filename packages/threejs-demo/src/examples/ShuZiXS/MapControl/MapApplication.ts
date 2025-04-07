/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import EventEmitter from './utils/EventEmitter'
import {geoMercator} from 'd3-geo'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
/**
 * 渲染器类，管理Three.js渲染器
 */
class Renderer {
  canvas: HTMLCanvasElement
  sizes: SizeManager
  scene: THREE.Scene
  camera: CameraManager
  postprocessing: boolean
  composer: any
  instance?: THREE.WebGLRenderer
  constructor({
    canvas: canvasElement,
    sizes: sizeManager,
    scene: sceneInstance,
    camera: cameraManager,
    postprocessing: enablePostprocessing = !1,
    composer: composerInstance = null,
  }: {
    canvas: HTMLCanvasElement
    sizes: SizeManager
    scene: THREE.Scene
    camera: CameraManager
    postprocessing: boolean
    composer: any
  }) {
    this.canvas = canvasElement
    this.sizes = sizeManager
    this.scene = sceneInstance
    this.camera = cameraManager
    this.postprocessing = enablePostprocessing
    this.composer = composerInstance
    this.setInstance()
  }

  /**
   * 创建渲染器实例
   */
  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      alpha: !0,
      antialias: !0,
      canvas: this.canvas,
    })
    this.instance.setSize(this.sizes.width!, this.sizes.height!)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
  }

  /**
   * 调整渲染器尺寸
   */
  resize() {
    this.instance?.setSize(this.sizes.width!, this.sizes.height!)
    this.instance?.setPixelRatio(this.sizes.pixelRatio)
  }

  /**
   * 渲染场景
   */
  update() {
    this.postprocessing && this.composer
      ? this.composer.render()
      : this.instance?.render(this.scene, this.camera.instance)
  }

  /**
   * 清理资源
   */
  destroy() {
    this.instance?.dispose(), this.instance?.forceContextLoss()
  }
}

/**
 * 尺寸管理类，处理画布尺寸和设备像素比
 */
class SizeManager extends EventEmitter {
  canvas: any
  pixelRatio: number
  width?: number
  height?: number
  constructor({canvas}: {canvas: HTMLCanvasElement}) {
    super()
    this.canvas = canvas
    this.pixelRatio = 0
    this.init()
    window.addEventListener('resize', () => {
      this.init(), this.emit('resize')
    })
  }

  /**
   * 初始化尺寸信息
   */
  init() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = this.pixelRatio || Math.min(window.devicePixelRatio, 2)
  }

  /**
   * 清理资源
   */
  destroy() {
    this.off('resize')
  }
}

/**
 * 时间管理类，处理动画帧和时间计算
 */
class TimeManager extends EventEmitter {
  start: number
  current: any
  elapsed: number
  delta: number
  clock: any
  timer: number
  stop: boolean = false
  constructor() {
    super()
    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16
    this.clock = new THREE.Clock()
    this.timer = window.requestAnimationFrame(() => {
      this.tick()
    })
  }

  /**
   * 时间帧更新
   */
  tick() {
    const now = Date.now()
    this.delta = now - this.current
    this.current = now
    this.elapsed = this.current - this.start
    const deltaTime = this.clock.getDelta()
    const elapsedTime = this.clock.getElapsedTime()
    this.emit('tick', deltaTime, elapsedTime)
    if (this.stop) return window.cancelAnimationFrame(this.timer), !1
    this.timer = window.requestAnimationFrame(() => {
      this.tick()
    })
  }

  /**
   * 清理资源
   */
  destroy() {
    this.stop = true
    this.off('tick')
  }
}

/**
 * 相机管理类
 */
class CameraManager {
  sizes: any
  scene: any
  wWidth: number
  wHeight: number
  canvas: any
  options: {isOrthographic: boolean}
  instance: any
  controls: any
  constructor(
    {
      sizes: sizeManager,
      scene: sceneInstance,
      canvas: canvasElement,
    }: {sizes: SizeManager; scene: THREE.Scene; canvas: HTMLCanvasElement},
    options: {isOrthographic: boolean} = {isOrthographic: !1},
  ) {
    this.sizes = sizeManager
    this.scene = sceneInstance
    this.wWidth = 0
    this.wHeight = 0
    this.canvas = canvasElement
    this.options = Object.assign({isOrthographic: !1}, options)
    this.setInstance()
    // 监听键盘事件切换相机模式
    document.addEventListener('keydown', event => {
      const currentPosition = new THREE.Vector3().copy(this.instance.position)
      switch (event.keyCode) {
        case 79: // O键 - 正交相机
          this.setCamera(),
            this.instance.position.copy(currentPosition),
            this.instance.updateProjectionMatrix()
          break
        case 80: // P键 - 透视相机
          this.setCamera(!1),
            this.instance.position.copy(currentPosition),
            this.instance.updateProjectionMatrix()
          break
      }
    })
  }

  /**
   * 获取相机视图尺寸
   */
  getCameraViewSize() {
    if (this.instance instanceof THREE.PerspectiveCamera) {
      const fovRad = (this.instance.fov * Math.PI) / 180,
        height = 2 * Math.tan(fovRad / 2) * Math.abs(this.instance.position.z),
        width = height * this.instance.aspect
      this.wWidth = width
      this.wHeight = height
    } else this.wWidth = this.instance.top - this.instance.bottom
    this.wHeight = this.instance.right - this.instance.left
    return [this.wWidth, this.wHeight]
  }

  /**
   * 创建相机实例
   */
  setInstance() {
    this.instance = null
    this.setCamera(this.options.isOrthographic)
    this.instance.position.set(10, 10, 10)
    this.scene.add(this.instance)
  }

  /**
   * 设置相机类型
   * @param {boolean} useOrthographic 是否使用正交相机
   */
  setCamera(useOrthographic = !0) {
    const aspectRatio = this.sizes.width / this.sizes.height
    if (useOrthographic) {
      const frustumSize = 120
      this.instance = new THREE.OrthographicCamera(
        -frustumSize * aspectRatio,
        frustumSize * aspectRatio,
        frustumSize,
        -frustumSize,
        1,
        1e4,
      )
    } else this.instance = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1e4)
    this.setControls(), this.getCameraViewSize()
  }

  /**
   * 设置相机控制器
   */
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
    this.controls.update()
  }

  /**
   * 调整相机尺寸
   */
  resize() {
    const aspectRatio = this.sizes.width / this.sizes.height
    if (this.options.isOrthographic) {
      const frustumSize = 120
      this.instance.left = -frustumSize * aspectRatio
      this.instance.right = frustumSize * aspectRatio
      this.instance.top = frustumSize
      this.instance.bottom = -frustumSize
    } else this.instance.aspect = aspectRatio
    this.instance.updateProjectionMatrix()
  }

  /**
   * 更新相机控制器
   */
  update() {
    this.controls.update()
  }

  /**
   * 清理资源
   */
  destroy() {
    this.controls.dispose()
  }
}

/**
 * 地图应用主类
 */
class MapApplication extends EventEmitter {
  config: {
    geoProjectionCenter: any
    geoProjectionScale: any
    geoProjectionTranslate: any
  }
  canvas: HTMLCanvasElement
  scene: THREE.Scene
  sizes: SizeManager
  time: TimeManager
  camera: CameraManager
  renderer: Renderer
  constructor(canvasElement: HTMLCanvasElement, options = {}) {
    super()
    Object.defineProperty(this, 'geoProjection', (coordinates: any) => {
      const {
        geoProjectionCenter: center,
        geoProjectionScale: scale,
        geoProjectionTranslate: translate,
      } = this.config
      return geoMercator().center(center).scale(scale).translate(translate)(
        coordinates,
      )
    })

    // 默认配置
    const defaultConfig = {
      geoProjectionCenter: [0, 0],
      geoProjectionScale: 120,
      geoProjectionTranslate: [0, 0],
      isOrthographic: !1,
    }

    // 合并配置
    this.config = Object.assign({}, defaultConfig, options)
    this.canvas = canvasElement
    this.scene = new THREE.Scene()
    this.sizes = new SizeManager({canvas: canvasElement})
    this.time = new TimeManager()
    this.camera = new CameraManager(this, {
      isOrthographic: this.config.isOrthographic,
    })
    // @ts-ignore
    this.renderer = new Renderer(this)
    // 注册事件监听
    this.sizes.on('resize', () => {
      this.resize()
    })
    this.time.on('tick', () => {
      this.update()
    })
  }

  /**
   * 设置坐标轴辅助
   * @param {number} size 坐标轴大小
   */
  setAxesHelper(size = 250) {
    if (!size) return !1
    const axesHelper = new THREE.AxesHelper(size)
    this.scene.add(axesHelper)
  }

  /**
   * 调整尺寸
   */
  resize() {
    this.camera.resize(), this.renderer.resize()
  }

  /**
   * 更新场景
   * @param {number} deltaTime 时间增量
   */
  update() {
    this.camera.update()
    this.renderer.update()
  }

  /**
   * 清理资源
   */
  destroy() {
    this.sizes.destroy()
    this.time.destroy()
    this.camera.destroy()
    this.renderer.destroy()
    // 遍历场景并清理资源
    this.scene.traverse(object => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose()
        for (const materialKey in object.material) {
          const material = object.material[materialKey]
          material &&
            typeof material.dispose == 'function' &&
            material.dispose()
        }
      }
    })
    this.canvas.parentNode?.removeChild(this.canvas)
  }
}

export default MapApplication
