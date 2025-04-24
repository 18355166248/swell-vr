/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  availableLoaderTypes,
  LoaderConstructor,
  LoaderObject,
  LoaderTypeKeys,
  loaderTypes,
  LoaderTypeValues,
} from '../../const/loader'
import {AssetList} from '../../MapControl/types'
import EventEmitter from '../../utils/EventEmitter'
import {AssetInfo} from '../types'
import * as THREE from 'three'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

// 资源管理器
class ResourceManager extends EventEmitter {
  dracoPath: string // 路径
  itemsLoaded: number // 已加载数量
  itemsTotal: number // 总数
  assets: AssetInfo[] // 资源列表
  loaders: LoaderObject // 加载器列表
  constructor() {
    super()
    this.dracoPath = '/draco/gltf/'
    this.itemsLoaded = 0
    this.itemsTotal = 0
    this.assets = []
    this.loaders = {} as LoaderObject
    this.initDefaultLoader()
  }
  initDefaultLoader() {
    const loaders: {loader: LoaderConstructor; name: LoaderTypeKeys}[] = [
      {loader: GLTFLoader, name: 'GLTFLoader'},
      {loader: THREE.TextureLoader, name: 'TextureLoader'},
    ]
    loaders.map(loaderInfo =>
      this.addLoader(loaderInfo.loader, loaderInfo.name),
    )
  }
  addLoader(LoaderClass: LoaderConstructor, loaderName: LoaderTypeKeys) {
    const loaderValue = loaderTypes[loaderName]
    if (LoaderClass.name && loaderValue) {
      if (!this.loaders[loaderValue]) {
        // @ts-ignore
        const loader = new LoaderClass() as LoaderConstructor
        if (loader instanceof THREE.Loader) {
          loaderName === 'GLTFLoader' &&
            this.initDraco(loader as unknown as GLTFLoader)
          this.loaders[loaderValue] = loader
        }
      }
    } else {
      throw new Error('请配置正确的加载器')
    }
  }
  /**
   * 初始化Draco解码器
   */
  initDraco(loader: GLTFLoader) {
    const dracoLoader = new DRACOLoader()
    const path = window.location.origin + this.dracoPath
    dracoLoader.setDecoderPath(path)
    dracoLoader.preload()
    loader.setDRACOLoader(dracoLoader)
  }
  // 加载单个资源
  loadItem(assetInfo: AssetInfo): Promise<AssetInfo> {
    return new Promise((resolve, reject) => {
      if (!this.loaders[assetInfo.type])
        throw new Error(`资源${assetInfo.path}没有配置加载器`)
      // @ts-ignore
      this.loaders[assetInfo.type].load(
        assetInfo.path,
        // @ts-ignore
        loadedData => {
          this.itemsLoaded++
          this.emit(
            'onProgress',
            assetInfo.path,
            this.itemsLoaded,
            this.itemsTotal,
          )
          resolve({...assetInfo, data: loadedData})
        },
        null,
        // @ts-ignore
        error => {
          this.emit('onError', error)
          reject(error)
        },
      )
    })
  }
  /**
   * 匹配资源类型
   * @param {Array} assetList 资源列表
   */
  matchType(assetList: AssetList) {
    this.assets = assetList
      .map(asset => ({
        ...asset,
        type: availableLoaderTypes.includes(asset.type)
          ? (asset.type as LoaderTypeValues)
          : ('' as LoaderTypeValues),
        path: asset.path,
        name: asset.name,
        data: null,
      }))
      .filter(asset => {
        if (!asset.type) throw new Error(`资源${asset.path},type不正确`)
        return asset.type
      })
    return this.assets
  }
  // 加载多个资源
  loadAll(assetList: AssetList) {
    this.itemsLoaded = 0
    this.itemsTotal = 0
    return new Promise((resolve, reject) => {
      const assets = this.matchType(assetList)
      const promises: Promise<AssetInfo>[] = []
      this.itemsTotal = assets.length
      assets.map(asset => {
        const promise = this.loadItem(asset)
        promises.push(promise)
      })
      Promise.all(promises)
        .then(loadedAssets => {
          this.assets = loadedAssets
          this.emit('onLoad')
          resolve(loadedAssets)
        })
        .catch(error => {
          this.emit('onError', error)
          reject(error)
        })
    })
  }

  /**
   * 获取已加载的资源
   * @param {string} assetName 资源名称
   */
  getResource(assetName: string) {
    const asset = this.assets.find(asset => {
      return asset.name === assetName
    })
    console.log('🚀 ~ ResourceManager ~ getResource ~ asset:', asset)
    if (!asset) throw new Error(`资源${assetName}不存在`)
    return asset.data
  }

  /**
   * 清理资源
   */
  destroy() {
    this.off('onProgress')
    this.off('onLoad')
    this.off('onError')
    this.assets = []
  }
}

export default ResourceManager
