import * as THREE from 'three'
import {Tip} from './types/tip'
import defaultUrl from './assets/tips.png'
import {TextureCacheLoader} from './helper'

export type TipManageProps = {
  // 容器
  container: HTMLElement
  // 场景
  scene: THREE.Scene
  // 相机
  camera: THREE.PerspectiveCamera
  // 渲染器
  renderer: THREE.WebGLRenderer
  textureCacheLoader: TextureCacheLoader
}

export default class TipManager {
  private container: HTMLElement
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private textureCacheLoader: TextureCacheLoader
  private tipSpriteMap = new Map<string, THREE.Sprite>()

  constructor(options: TipManageProps) {
    this.container = options.container
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
    console.log('sprite', sprite)
    sprite.addEventListener('mouseover', _e => {
      const e = _e as unknown as HTMLElementEventMap['mouseover']
      console.log('🚀 ~ file: tip.ts:49 ~ TipManager ~ create ~ e:', e)
    })
    sprite.addEventListener('click', _e => {
      const e = _e as unknown as HTMLElementEventMap['mouseover']
      console.log('🚀 ~ file: tip.ts:49 ~ TipManager ~ create ~ e:', e)
    })

    sprite.userData.cursor = 'pointer'

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
