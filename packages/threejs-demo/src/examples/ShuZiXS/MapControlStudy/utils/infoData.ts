import OceanBlueBgImg from '../../assets/imgs/ocean-blue-bg.png'
import {AssetList} from '../../MapControl/types'
import ResourceManager from '../MapApplication/ResourceManager'
import ChinaBlurLineImg from '../../assets/imgs/chinaBlurLine.png'
import RotationBorder1Img from '../../assets/imgs/rotationBorder1.png'
import RotationBorder2Img from '../../assets/imgs/rotationBorder2.png'

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
      {type: 'Texture', name: 'rotationBorder1', path: RotationBorder1Img},
      {type: 'Texture', name: 'rotationBorder2', path: RotationBorder2Img},
    ]
    this.instance.loadAll(list)
  }
}
