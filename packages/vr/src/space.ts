import * as THREE from 'three'
import {CubeSpaceTextureUrls, SpaceConfig} from './types'
import {TextureCacheLoader} from './helper'
import TipManage, {TipManagerEvents, tipEventNames} from './tip'
import TipManager from './tip'
import EventEmitter from 'EventEmitter3'

export const spaceEventNames = [...tipEventNames]

export type SpaceManagerEvents = TipManagerEvents

export type SpaceEventName = keyof SpaceManagerEvents

export type SpaceManagerProps = {
  // 容器
  container: HTMLElement
  // 场景
  scene: THREE.Scene
  // 相机
  camera: THREE.PerspectiveCamera
  // 渲染器
  renderer: THREE.WebGLRenderer
  // 提示容器
  tipContainer: HTMLElement
  textureCacheLoader: TextureCacheLoader
}

export class SpaceManager extends EventEmitter<TipManagerEvents> {
  private container: HTMLElement
  private tipContainer: HTMLElement
  private textureCacheLoader: TextureCacheLoader
  private spaceIdGroupMap = new Map<string, THREE.Group>()
  private spaceIdTipManager = new Map<string, TipManager>()
  public scene: THREE.Scene
  public camera: THREE.PerspectiveCamera
  public renderer: THREE.WebGLRenderer

  constructor({
    textureCacheLoader,
    container,
    tipContainer,
    scene,
    camera,
    renderer,
  }: SpaceManagerProps) {
    super()
    this.textureCacheLoader = textureCacheLoader
    this.container = container
    this.tipContainer = tipContainer
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
  }

  create(spaceConfig: SpaceConfig) {
    const {cubeSpaceTextureUrls, id, tips} = spaceConfig

    const group = new THREE.Group()

    // 创建提示精灵
    if (this.tipContainer && tips) {
      const tipManager = this.createTipManager(group)!
      tips.forEach(tip => {
        const sprite = tipManager.findOrCreate(tip)
        group.add(sprite)
      })
      this.spaceIdTipManager.set(id, tipManager)
    }

    // 创建空间
    const spaceMesh = this.createCubeSpaceMesh(cubeSpaceTextureUrls)
    spaceMesh.userData.type = 'spaceMesh'

    // 挂载当前 spaceConfig 到 group 上，在事件里面使用（更新时会覆盖这个挂载）
    group.userData.type = 'spaceGroup'
    group.userData.spaceConfig = spaceConfig

    group.add(spaceMesh)
    this.spaceIdGroupMap.set(id, group)

    return group
  }

  createCubeSpaceMesh(cubeSpaceTextureUrls: CubeSpaceTextureUrls) {
    const boxGeometry = new THREE.BoxGeometry(100, 100, 100)
    // 随机挑选一个面翻转扩大，使得贴图能够正常渲染
    boxGeometry.scale(-1, 1, 1)
    // 贴材质
    const boxMaterials = this.createCubeSpaceMaterials(cubeSpaceTextureUrls)
    const spaceMesh = new THREE.Mesh(boxGeometry, boxMaterials)

    return spaceMesh
  }

  // 创建正方体空间材料
  createCubeSpaceMaterials(cubeSpaceTextureUrls: CubeSpaceTextureUrls) {
    const directions = ['right', 'left', 'up', 'down', 'front', 'back'] as const
    const boxMaterials = directions.map(direction => {
      const texture = this.textureCacheLoader.loadUrl(
        cubeSpaceTextureUrls[direction as keyof typeof cubeSpaceTextureUrls],
      )
      return new THREE.MeshBasicMaterial({map: texture})
    })

    return boxMaterials
  }

  createTipManager(parent: THREE.Object3D) {
    if (!this.tipContainer) return
    const tipManager = new TipManager({
      container: this.container,
      tipContainer: this.tipContainer,
      scene: this.scene,
      camera: this.camera,
      renderer: this.renderer,
      textureCacheLoader: this.textureCacheLoader,
    })

    // tip的事件继承
    spaceEventNames.forEach(eventName => {
      // @ts-ignore
      tipManager.on(eventName, e => {
        // @ts-ignore
        this.emit(eventName, e)
      })
    })

    return tipManager
  }

  /**
   * find
   */
  public find(id: string) {
    return this.spaceIdGroupMap.get(id)
  }
}
