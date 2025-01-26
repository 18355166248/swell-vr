import * as THREE from 'three'
import EventEmitter from 'EventEmitter3'
import {
  SpaceConfig,
  ThreeObjectBase,
  VREvents,
  VROptions,
  Vector3Position,
} from './types'
import {SpaceEventName, SpaceManager, spaceEventNames} from './space'
import {
  TextureCacheLoader,
  addListenerToThree,
  formatBaseInfo,
  get3dObjectBaseInfo,
  update3dObjectBaseInfo,
} from './helper'
// 引入轨道控制器扩展库OrbitControls
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as TWEEN from '@tweenjs/tween.js'
import { initReSize } from './utils/onresize'

// 空间管理器事件列表
const extendsSpaceEventNames = spaceEventNames.filter(
  eventName => !['switchSpace'].includes(eventName),
) as unknown as Exclude<SpaceEventName, 'switchSpace'>[]

export const VREventNames = [...extendsSpaceEventNames, 'update']

let tween: TWEEN.Tween<ThreeObjectBase> | undefined

export class Vr360 extends EventEmitter<VREvents> {
  // 容器
  public container: HTMLElement
  // 提示容器
  public tipContainer: HTMLElement
  // 场景
  public scene: THREE.Scene
  // 相机
  public camera: THREE.PerspectiveCamera
  // 渲染器
  public renderer: THREE.WebGLRenderer
  // 空间管理器
  public spaceManager: SpaceManager
  // 空间配置
  public spaceConfig: SpaceConfig[]
  // texture 缓存器
  private textureCacheLoader: TextureCacheLoader
  // 控制器
  public controls: OrbitControls
  // 销毁列表
  private destroyList: (() => void)[] = []
  // 当前空间id
  private curSpaceId = ''

  public get containerWidth() {
    return this.container.clientWidth
  }
  public get containerHeigh() {
    return this.container.clientHeight
  }

  constructor(options: VROptions) {
    super()

    const {container, spacesConfig, tipContainer} = options

    this.textureCacheLoader = TextureCacheLoader.getInstance()

    this.container = container
    this.tipContainer = tipContainer
    this.scene = this.createScene()
    this.camera = this.createCamera()
    this.renderer = this.createRenderer()
    this.controls = this.createControls()

    this.spaceConfig = [...spacesConfig]

    this.container.appendChild(this.renderer.domElement)

    addListenerToThree(() => ({
      camera: this.camera,
      scene: this.scene,
      renderer: this.renderer,
    }))

    // 创建空间管理器
    this.spaceManager = this.createSpaceManager()
    // 实例化空间
    this.updateSpacesConfig(this.spaceConfig)
  }

  createScene() {
    const scene = new THREE.Scene()

    this.destroyList.push(() => {
      scene.remove(...scene.children)
    })

    return scene
  }

  createCamera() {
    const camera = new THREE.PerspectiveCamera(
      75,
      this.containerWidth / this.containerHeigh,
      0.1,
      10_000,
    )

    return camera
  }

  createRenderer() {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(this.containerWidth, this.containerHeigh)
    this.destroyList.push(() => {
      renderer.dispose()
      renderer.forceContextLoss()
      renderer.domElement.remove()
    })

    return renderer
  }

  createSpaceManager() {
    const spaceManage = new SpaceManager({
      textureCacheLoader: this.textureCacheLoader,
      container: this.container,
      scene: this.scene,
      camera: this.camera,
      renderer: this.renderer,
      tipContainer: this.tipContainer,
    })

    // 空间的事件继承
    extendsSpaceEventNames.forEach(eventName => {
      // @ts-ignore
      spaceManage.on(eventName, e => {
        // @ts-ignore
        this.emit(eventName, e)
      })
    })

    // 特殊处理 switchSpace
    spaceManage.on('switchSpace', e => {
      this.switchSpace(e.targetSpaceId, e.clickPosition)
    })

    return spaceManage
  }

  updateSpacesConfig(newSpaceConfig: SpaceConfig[]) {
    newSpaceConfig.map(spaceConfig => {
      this.spaceManager.create(spaceConfig)
    })

    // 初始化空间
    if (!this.curSpaceId) {
      this.switchSpace(newSpaceConfig[0].id)
    }
  }

  switchSpace(id: string, clickPosition?: THREE.Vector3) {
    if (this.curSpaceId === id || !id) return
    const spaceGroup = this.spaceManager.find(id)

    if (!spaceGroup) return

    if (!spaceGroup.userData.spaceConfig) {
      throw new Error('spaceConfig 不存在')
    }

    const spaceConfig = spaceGroup.userData.spaceConfig as SpaceConfig
    const {camera} = spaceConfig

    this.curSpaceId = spaceConfig.id

    // 添加目标空间进场景
    if (!this.scene.children.includes(spaceGroup)) {
      this.scene.add(spaceGroup)
    }

    // 移除其他的场景
    this.scene.children.forEach(child => {
      if (
        child instanceof THREE.Group &&
        child.userData.type === 'spaceGroup' &&
        child !== spaceGroup
      ) {
        this.scene.remove(child)
      }
    })

    // 下一个镜头的信息
    const nextCameraInfo = formatBaseInfo(camera)

    const handleCompleteSwitch = () => {
      this.emit('afterSwitchSpace', {spaceConfig})
    }

    if (clickPosition) {
      // 增加切换场景的动画
      // 获取当前相机的信息
      const currentCameraInfo: ThreeObjectBase = {
        ...get3dObjectBaseInfo(this.camera),
        position: {
          x:
            nextCameraInfo.position.x -
            (clickPosition.x - this.camera.position.x),
          y:
            nextCameraInfo.position.y -
            (clickPosition.y - this.camera.position.y),
          z:
            nextCameraInfo.position.z -
            (clickPosition.z - this.camera.position.z),
        },
      }

      // TODO 很关键 如果不带的动画会不准确 (找问题找了1天)
      // TODO 很关键 如果不带的动画会不准确
      // TODO 很关键 如果不带的动画会不准确
      nextCameraInfo.rotate = currentCameraInfo.rotate as Vector3Position

      tween = new TWEEN.Tween(currentCameraInfo)
        .to(nextCameraInfo, 500)
        .onUpdate(cameraInfo => {
          update3dObjectBaseInfo(this.camera, cameraInfo)
        })
        .easing(TWEEN.Easing.Linear.None)
        .start()
        .onComplete(() => {
          handleCompleteSwitch()
        })
    } else {
      update3dObjectBaseInfo(this.camera, nextCameraInfo)
      handleCompleteSwitch()
    }
  }

  createControls() {
    // 设置相机控件轨道控制器OrbitControls
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    // API 文档 https://threejs.org/docs/#examples/zh/controls/OrbitControls
    // 为指定的DOM元素添加按键监听。推荐将window作为指定的DOM元素。

    controls.listenToKeyEvents(window)
    controls.autoRotate = false
    controls.autoRotateSpeed = 1
    controls.enableZoom = false
    controls.enableDamping = true
    controls.enablePan = true
    controls.enableRotate = true
    controls.rotateSpeed = 0.5
    controls.minDistance = 1
    controls.maxDistance = 100

    // 控制器初始化位置为相机看到的位置
    controls.target = new THREE.Vector3(0, 0, 1)
    controls.update()

    this.destroyList.push(() => {
      controls.dispose()
    })

    return controls
  }

  /**
   * 渲染
   */
  public render(): void {
    requestAnimationFrame(this.render.bind(this))
    // 请注意，如果它被启用，你必须在你的动画循环里调用.update()
    this.controls.update()
    TWEEN.update()
    this.handleUpdate()
  }

  /**
   * 每次渲染更新时执行一些东西
   */
  private handleUpdate(): void {
    this.renderer.render(this.scene, this.camera)
  }

  // 监听页面尺寸变化 更新画布尺寸
  public listenResize() {
    const {addEventListenerResize, removeEventListenerResize} = initReSize(
      this.camera,
      this.renderer,
      this.handleUpdate.bind(this),
    )

    this.destroyList.push(removeEventListenerResize)

    addEventListenerResize()
  }

  // 销毁实例
  public destroy() {
    this.destroyList.forEach(task => task())
  }
}
