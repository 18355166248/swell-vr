import {ResourceManager} from '../MapApplication'
import * as THREE from 'three'
import HuiGuangImg from '../../assets/imgs/huiguang.png'
import LogoImg from '../../assets/imgs/logo.png'
import RotationBorder1Img from '../../assets/imgs/rotationBorder1.png'
import RotationBorder2Img from '../../assets/imgs/rotationBorder2.png'
import {
  ArrowWhiteImg,
  circleWhite,
  circleWhiteBreak,
  FlyLineImg,
  PointWhiteImg,
  sideImg,
} from './base64-img'
import ChinaBlurLineImg from '../../assets/imgs/chinaBlurLine.png'
import OceanBlueBgImg from '../../assets/imgs/ocean-blue-bg.png'
import pathLine2Img from '../../assets/imgs/pathLine2.png'
import {AssetList} from '../types'

class fe {
  onLoadCallback: () => void
  instance?: ResourceManager
  constructor(e = () => {}) {
    this.onLoadCallback = e
    this.init()
  }
  init() {
    this.instance = new ResourceManager()
    this.instance.addLoader(THREE.FileLoader, 'FileLoader')
    this.instance.on('onProgress', (r, t, n) => {
      // eslint-disable-next-line no-extra-semi
      ;((t / n) * 100).toFixed(2) + ''
    })
    this.instance.on('onLoad', () => {
      this.onLoadCallback && this.onLoadCallback()
    })
    const e = '/sayhello-site/'
    const a: AssetList = [
      {type: 'Texture', name: 'huiguang', path: HuiGuangImg},
      {type: 'Texture', name: 'watermark', path: LogoImg},
      {type: 'Texture', name: 'rotationBorder1', path: RotationBorder1Img},
      {type: 'Texture', name: 'rotationBorder2', path: RotationBorder2Img},
      {type: 'Texture', name: 'guangquan1', path: circleWhiteBreak},
      {type: 'Texture', name: 'guangquan2', path: circleWhite},
      {type: 'Texture', name: 'chinaBlurLine', path: ChinaBlurLineImg},
      {type: 'Texture', name: 'ocean', path: OceanBlueBgImg},
      {type: 'Texture', name: 'side', path: sideImg},
      {type: 'Texture', name: 'flyLine', path: FlyLineImg},
      {type: 'Texture', name: 'flyLineFocus', path: circleWhiteBreak},
      {type: 'Texture', name: 'pathLine', path: pathLine2Img},
      {type: 'Texture', name: 'arrow', path: ArrowWhiteImg},
      {type: 'Texture', name: 'point', path: PointWhiteImg},
      {type: 'File', name: 'zhejiang', path: e + 'assets/json/浙江省.json'},
      {
        type: 'File',
        name: 'china',
        path: e + 'assets/json/中华人民共和国.json',
      },
    ]
    this.instance.loadAll(a)
  }
}

export default {
  fe,
}
