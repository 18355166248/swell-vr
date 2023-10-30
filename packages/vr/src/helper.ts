import * as THREE from 'three'
import {DeepPartial, DeepRequired, ThreeObjectBase} from './types'

/**
 * 纹理缓存加载器
 */
export class TextureCacheLoader {
  static instance: TextureCacheLoader
  static getInstance() {
    if (!TextureCacheLoader.instance)
      TextureCacheLoader.instance = new TextureCacheLoader()
    return TextureCacheLoader.instance
  }

  /**
   * 缓存
   */
  private cache = new Map<string, THREE.Texture>()

  /**
   * 加载器
   */
  private loader = new THREE.TextureLoader()

  /**
   * 根据单个链接加载纹理
   * @param url 图片链接
   * @returns 返回纹理
   */
  loadUrl(url: string) {
    if (this.cache.has(url)) return this.cache.get(url)
    const texture = this.loader.load(url)
    this.cache.set(url, texture)
    return texture
  }

  /**
   * 根据多个链接加载纹理
   * @param urls 图片链接数组
   * @returns 返回纹理数组
   */
  loadUrls(urls: string[]) {
    return urls.map(url => this.loadUrl(url))
  }
}

/**
 * 处理位置、缩放、旋转等基础信息默认值
 * @param baseInfo 位置、缩放、旋转信息
 * @returns 返回位置、缩放、旋转等基础信息
 */
export function formatBaseInfo(
  baseInfo: DeepPartial<ThreeObjectBase> | undefined,
): DeepRequired<ThreeObjectBase> {
  return {
    position: {
      x: baseInfo?.position?.x ?? 0,
      y: baseInfo?.position?.y ?? 0,
      z: baseInfo?.position?.z ?? 0,
    },
    rotate: {
      x: baseInfo?.rotate?.x ?? 0,
      y: baseInfo?.rotate?.y ?? 0,
      z: baseInfo?.rotate?.z ?? 0,
    },
    scale: {
      x: baseInfo?.scale?.x ?? 1,
      y: baseInfo?.scale?.y ?? 1,
      z: baseInfo?.scale?.z ?? 1,
    },
  }
}

/**
 * 更新 threejs 3d 对象的位置、缩放、旋转等基础信息
 * @param object threejs 3d 对象
 * @param baseInfo 位置、缩放、旋转信息
 */
export function update3dObjectBaseInfo(
  object: THREE.Object3D,
  baseInfo: Partial<ThreeObjectBase>,
): void {
  const {position, rotate, scale} = baseInfo
  if (
    position &&
    !new THREE.Vector3(position.x, position.y, position.z).equals(
      object.position,
    )
  ) {
    object.position.set(position.x, position.y, position.z)
  }

  if (
    scale &&
    !new THREE.Vector3(scale.x, scale.y, scale.z).equals(object.scale)
  ) {
    object.scale.set(scale.x, scale.y, scale.z)
  }

  if (
    rotate &&
    !new THREE.Euler(rotate.x, rotate.y, rotate.z).equals(object.rotation)
  ) {
    object.rotation.set(rotate.x, rotate.y, rotate.z)
  }
}
