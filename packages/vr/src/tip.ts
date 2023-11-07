import * as THREE from 'three'
import {Tip} from './types/tip'
import defaultUrl from './assets/tips.png'
import {TextureCacheLoader} from './helper'
import EventEmitter from 'EventEmitter3'

type TipParams = {
  tip: Tip
}

interface ShowTipParams extends TipParams {
  left: number
  top: number
}

interface SwitchSpaceParams {
  targetSpaceId: string
  clickPosition: THREE.Vector3
}

export type TipManagerEvents = {
  // 触发提示时的回调
  showTip: (params: ShowTipParams) => void
  // 隐藏提示时的回调
  hideTip: (params: TipParams) => void
  // 点击提示时的回调
  clickTip: (params: TipParams) => void
  // 切换空间时的回调
  switchSpace: (params: SwitchSpaceParams) => void
}

export type TipEventName = keyof TipManagerEvents

export const tipEventNames: TipEventName[] = [
  'showTip',
  'hideTip',
  'clickTip',
  'switchSpace',
]

export type TipManageProps = {
  // 容器
  container: HTMLElement
  tipContainer: HTMLElement
  // 场景
  scene: THREE.Scene
  // 相机
  camera: THREE.PerspectiveCamera
  // 渲染器
  renderer: THREE.WebGLRenderer
  textureCacheLoader: TextureCacheLoader
}

export type ThreeObjectDispatchEvent<T extends keyof HTMLElementEventMap> = {
  type: T
  intersect: THREE.Intersection
  sourceEvent: HTMLElementEventMap[T]
  isMouseDown: boolean
}

export default class TipManager extends EventEmitter<TipManagerEvents> {
  private container: HTMLElement
  private tipContainer: HTMLElement
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private textureCacheLoader: TextureCacheLoader
  private tipSpriteMap = new Map<string, THREE.Sprite>()

  constructor(options: TipManageProps) {
    super()
    this.container = options.container
    this.tipContainer = options.tipContainer
    this.scene = options.scene
    this.camera = options.camera
    this.renderer = options.renderer
    this.textureCacheLoader = options.textureCacheLoader
  }

  public create(config: Tip) {
    const {position, textureUrl = defaultUrl, id, scale, rotate} = config
    const texture = this.textureCacheLoader.loadUrl(textureUrl)
    const material = new THREE.SpriteMaterial({map: texture})
    const sprite = new THREE.Sprite(material)

    // 调整大小 旋转角度 位置
    sprite.scale.set(scale?.x ?? 3, scale?.y ?? 3, scale?.z ?? 3)
    sprite.position.set(position.x, position.y, position.z)
    if (rotate) {
      sprite.rotation.set(rotate.x, rotate.y, rotate.z)
    }

    const emitShowTip = (e: ThreeObjectDispatchEvent<'mouseover'>) => {
      const intersect = e.intersect
      const tip = intersect.object.userData.tip as Tip

      const containerHalfWidth = this.container.clientWidth / 2
      const containerHalfHeight = this.container.clientHeight / 2

      const tipContainerWidth = this.tipContainer.clientWidth
      const tipContainerHeight = this.tipContainer.clientHeight
      const rendererOffsetLeft = this.renderer.domElement.offsetLeft
      const rendererOffsetTop = this.renderer.domElement.offsetTop
      const percentPosition = intersect.object.position
        .clone()
        .project(this.camera)
      const left =
        (percentPosition.x + 1) * containerHalfWidth -
        tipContainerWidth / 2 +
        rendererOffsetLeft
      const top =
        (1 - percentPosition.y) * containerHalfHeight -
        tipContainerHeight / 2 +
        rendererOffsetTop

      const showTipParams: ShowTipParams = {tip, left, top}

      this.emit('showTip', showTipParams)
    }

    const emitHideTip = (e: ThreeObjectDispatchEvent<'mouseout'>) => {
      const intersect = e.intersect
      const tip = intersect.object.userData.tip as Tip

      const hideTipParams: TipParams = {tip}

      this.emit('hideTip', hideTipParams)
    }

    sprite.addEventListener('mouseover', _e => {
      const e = _e as unknown as ThreeObjectDispatchEvent<'mouseover'>

      if (e.isMouseDown) return

      emitShowTip(e)
    })
    sprite.addEventListener('mouseout', _e => {
      const e = _e as unknown as ThreeObjectDispatchEvent<'mouseout'>
      if (e.isMouseDown) return

      emitHideTip(e)
    })

    // 点击切换空间
    sprite.addEventListener('click', _e => {
      const e = _e as unknown as ThreeObjectDispatchEvent<'click'>

      const intersect = e.intersect
      const tip = intersect.object.userData.tip as Tip

      this.emit('clickTip', {tip})

      if (tip.targetSpaceId) {
        // 跳转时隐藏提示
        const hideTipParams: TipParams = {tip}

        this.emit('hideTip', hideTipParams)

        this.emit('switchSpace', {
          targetSpaceId: tip.targetSpaceId,
          clickPosition: intersect.point,
        })
      }
    })

    sprite.userData.cursor = 'pointer'
    sprite.userData.tip = config

    this.tipSpriteMap.set(id, sprite)

    return sprite
  }

  public findOrCreate(tip: Tip): THREE.Sprite {
    const sprite = this.find(tip)
    if (sprite) return sprite
    return this.create(tip)
  }

  public find(tip: Tip) {
    return this.tipSpriteMap.get(tip.id)
  }
}
