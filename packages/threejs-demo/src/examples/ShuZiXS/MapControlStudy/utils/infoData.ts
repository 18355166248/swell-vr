import OceanBlueBgImg from '../../assets/imgs/ocean-blue-bg.png'
import {AssetList} from '../../MapControl/types'
import ResourceManager from '../MapApplication/ResourceManager'
import ChinaBlurLineImg from '../../assets/imgs/chinaBlurLine.png'

/**
 * 加载资源
 */
export class LoadAssets {
  onLoadCallback: () => void
  instance?: ResourceManager
  constructor(e = () => {}) {
    this.onLoadCallback = e
    this.init()
  }
  init() {
    this.instance = new ResourceManager()

    this.instance.on('onProgress', (r, t, n) => {
      console.log('加载进度', ((t / n) * 100).toFixed(2))
    })
    this.instance.on('onLoad', () => {
      this.onLoadCallback && this.onLoadCallback()
    })

    const list: AssetList = [
      {type: 'Texture', name: 'ocean', path: OceanBlueBgImg},
      {type: 'Texture', name: 'chinaBlurLine', path: ChinaBlurLineImg},
    ]
    this.instance.loadAll(list)
  }
}
