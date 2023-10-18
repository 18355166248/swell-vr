import * as THREE from 'three'
import EventEmitter from 'EventEmitter3'
import {SpaceConfig, VROptions} from './types'
import {SpaceManager} from './space'

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

  public get containerWidth() {
    return this.container.clientWidth
  }
  public get containerHeigh() {
    return this.container.clientHeight
  }

  constructor(options: VROptions) {
    super()

    const {container, spacesConfig} = options

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
    const spaceManage = new SpaceManager()

    return spaceManage
  }

  updateSpacesConfig(newSpaceConfig: SpaceConfig[]) {}

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
