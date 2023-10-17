import * as THREE from 'three'
import EventEmitter from 'EventEmitter3'
import {VROptions} from './types'

export class Vr360 extends EventEmitter {
  // 容器
  public container: HTMLElement
  // 场景
  public scene: THREE.Scene
  // 相机
  public camera: THREE.Camera
  // 渲染器
  public renderer: THREE.Renderer

  public get containerWidth() {
    return this.container.clientWidth
  }
  public get containerHeigh() {
    return this.container.clientHeight
  }

  constructor(options: VROptions) {
    super()

    const {container} = options

    this.container = container
    this.scene = this.createScene()
    this.camera = this.createCamera()
    this.renderer = this.createRenderer()

    this.container.appendChild(this.renderer.domElement)

    this.camera.position.z = 5
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
