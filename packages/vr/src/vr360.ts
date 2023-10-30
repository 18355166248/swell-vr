import * as THREE from 'three'
import EventEmitter from 'EventEmitter3'
import {SpaceConfig, VROptions} from './types'
import {SpaceManager} from './space'
import {
  TextureCacheLoader,
  formatBaseInfo,
  update3dObjectBaseInfo,
} from './helper'

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
  //texture 缓存器
  private textureCacheLoader: TextureCacheLoader

  public get containerWidth() {
    return this.container.clientWidth
  }
  public get containerHeigh() {
    return this.container.clientHeight
  }

  constructor(options: VROptions) {
    super()

    const {container, spacesConfig} = options

    this.textureCacheLoader = TextureCacheLoader.getInstance()

    this.container = container
    this.scene = this.createScene()
    this.camera = this.createCamera()
    this.renderer = this.createRenderer()

    this.spaceConfig = [...spacesConfig]

    this.container.appendChild(this.renderer.domElement)

    // 创建空间管理器
    this.spaceManager = this.createSpaceManager()
    // 实例化空间
    this.updateSpacesConfig(this.spaceConfig)
  }

  createScene() {
    const scene = new THREE.Scene()

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
    return renderer
  }

  createSpaceManager() {
    const spaceManage = new SpaceManager({
      textureCacheLoader: this.textureCacheLoader,
    })

    return spaceManage
  }

  updateSpacesConfig(newSpaceConfig: SpaceConfig[]) {
    newSpaceConfig.map(spaceConfig => {
      this.spaceManager.create(spaceConfig)
    })

    this.switchSpace(newSpaceConfig[0].id)
  }

  switchSpace(id: string) {
    console.log('🚀 ~ file: vr360.ts:92 ~ Vr360 ~ switchSpace ~ id:', id)
    const spaceGroup = this.spaceManager.find(id)
    if (!spaceGroup) return

    const spaceConfig = spaceGroup.userData.spaceConfig as SpaceConfig
    const {camera} = spaceConfig

    // 添加目标空间进场景
    if (!this.scene.children.includes(spaceGroup)) {
      this.scene.add(spaceGroup)
    }

    // 下一个镜头的信息
    const nextCameraInfo = formatBaseInfo(camera)

    update3dObjectBaseInfo(this.camera, nextCameraInfo)
  }

  /**
   * 渲染
   */
  public render(): void {
    requestAnimationFrame(this.render.bind(this))
    this.handleUpdate()
  }

  /**
   * 每次渲染更新时执行一些东西
   */
  private handleUpdate(): void {
    this.renderer.render(this.scene, this.camera)
  }
}
