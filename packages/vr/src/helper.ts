import * as THREE from 'three'

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
