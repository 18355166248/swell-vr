import * as THREE from 'three'
import EventEmitter from 'EventEmitter3'
import { SpaceConfig, VROptions } from './types'
import { SpaceManager } from './space'
import {
  TextureCacheLoader,
  formatBaseInfo,
  update3dObjectBaseInfo,
} from './helper'
// 引入轨道控制器扩展库OrbitControls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Vr360 extends EventEmitter {
  // 容器
  public container: HTMLElement
  // 场景
  public scene: THREE.Scene
  // 相机
  public camera: THREE.Camera
  // 渲染器
  public renderer: THREE.Renderer
  // 空间管理器
  public spaceManager: SpaceManager
  // 空间配置
  public spaceConfig: SpaceConfig[]
  // texture 缓存器
  private textureCacheLoader: TextureCacheLoader
  // 控制器
  public controls: OrbitControls


  public get containerWidth () {
    return this.container.clientWidth
  }
  public get containerHeigh () {
    return this.container.clientHeight
  }

  constructor(options: VROptions) {
    super()

    const { container, spacesConfig } = options

    this.textureCacheLoader = TextureCacheLoader.getInstance()

    this.container = container
    this.scene = this.createScene()
    this.camera = this.createCamera()
    this.renderer = this.createRenderer()
    this.controls = this.createControls()

    this.spaceConfig = [...spacesConfig]

    this.container.appendChild(this.renderer.domElement)

    // 创建空间管理器
    this.spaceManager = this.createSpaceManager()
    // 实例化空间
    this.updateSpacesConfig(this.spaceConfig)
  }

  createScene () {
    const scene = new THREE.Scene()

    return scene
  }

  createCamera () {
    const camera = new THREE.PerspectiveCamera(
      75,
      this.containerWidth / this.containerHeigh,
      0.1,
      10_000,
    )

    return camera
  }

  createRenderer () {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(this.containerWidth, this.containerHeigh)
    return renderer
  }

  createSpaceManager () {
    const spaceManage = new SpaceManager({
      textureCacheLoader: this.textureCacheLoader,
    })

    return spaceManage
  }

  updateSpacesConfig (newSpaceConfig: SpaceConfig[]) {
    newSpaceConfig.map(spaceConfig => {
      this.spaceManager.create(spaceConfig)
    })

    this.switchSpace(newSpaceConfig[0].id)
  }


  switchSpace (id: string) {
    console.log('🚀 ~ file: vr360.ts:92 ~ Vr360 ~ switchSpace ~ id:', id)
    const spaceGroup = this.spaceManager.find(id)
    if (!spaceGroup) return

    const spaceConfig = spaceGroup.userData.spaceConfig as SpaceConfig
    const { camera } = spaceConfig

    // 添加目标空间进场景
    if (!this.scene.children.includes(spaceGroup)) {
      this.scene.add(spaceGroup)
    }

    // 下一个镜头的信息
    const nextCameraInfo = formatBaseInfo(camera)

    update3dObjectBaseInfo(this.camera, nextCameraInfo)
  }

  createControls () {
    // 设置相机控件轨道控制器OrbitControls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    // API 文档 https://threejs.org/docs/#examples/zh/controls/OrbitControls
    // 为指定的DOM元素添加按键监听。推荐将window作为指定的DOM元素。

    controls.listenToKeyEvents(window)
    controls.autoRotate = false
    controls.autoRotateSpeed = 0.5
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

    return controls
  }

  /**
   * 渲染
   */
  public render (): void {
    requestAnimationFrame(this.render.bind(this))
    // 请注意，如果它被启用，你必须在你的动画循环里调用.update()
    this.controls.update()
    this.handleUpdate()
  }

  /**
   * 每次渲染更新时执行一些东西
   */
  private handleUpdate (): void {
    this.renderer.render(this.scene, this.camera)
  }
}
