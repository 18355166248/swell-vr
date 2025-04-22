import {LoaderObject} from '../../const/loader'
import EventEmitter from '../../utils/EventEmitter'
import {AssetInfo} from '../types'

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

  initDefaultLoader () {
    
  }
}

export default ResourceManager
