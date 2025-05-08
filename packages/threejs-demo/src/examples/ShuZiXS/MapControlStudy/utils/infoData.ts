import OceanBlueBgImg from '../../assets/imgs/ocean-blue-bg.png'
import {AssetList} from '../../MapControl/types'
import ResourceManager from '../MapApplication/ResourceManager'
import ChinaBlurLineImg from '../../assets/imgs/chinaBlurLine.png'
import RotationBorder1Img from '../../assets/imgs/rotationBorder1.png'
import RotationBorder2Img from '../../assets/imgs/rotationBorder2.png'
import {sideImg, FlyLineImg, circleWhiteBreak} from '../base64'
import * as THREE from 'three'

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

    this.instance.addLoader(THREE.FileLoader, 'FileLoader')
    this.instance.on('onProgress', (r, t, n) => {
      console.log('加载进度', ((t / n) * 100).toFixed(2))
    })
    this.instance.on('onLoad', () => {
      this.onLoadCallback && this.onLoadCallback()
    })

    // 确保公共资源路径正确
    const baseUrl = window.location.origin
    const path = `${baseUrl}/data/map/`

    const list: AssetList = [
      {type: 'Texture', name: 'ocean', path: OceanBlueBgImg},
      {type: 'Texture', name: 'chinaBlurLine', path: ChinaBlurLineImg},
      {type: 'Texture', name: 'rotationBorder1', path: RotationBorder1Img},
      {type: 'Texture', name: 'rotationBorder2', path: RotationBorder2Img},
      {
        type: 'File',
        name: 'china-province',
        path: path + 'china-province.json',
      },
      {
        type: 'File',
        name: 'china',
        path: path + 'china.json',
      },
      {
        type: 'File',
        name: 'zhejiang-city',
        path: path + 'zhejiang-city.json',
      },
      {type: 'Texture', name: 'side', path: sideImg},
      {type: 'Texture', name: 'flyLine', path: FlyLineImg},
      {type: 'Texture', name: 'flyLineFocus', path: circleWhiteBreak},
    ]
    this.instance.loadAll(list)
  }
}

/**
 * 浙江城市信息
 */
export const ZheJiangCityInfo = [
  {
    name: '杭州市',
    enName: 'hangzhou',
    value: 98,
    center: [120.153576, 30.287459],
    centroid: [119.476498, 29.898918],
  },
  {
    name: '宁波市',
    enName: 'ningbo',
    value: 57,
    center: [121.549792, 29.868388],
    centroid: [121.479174, 29.733017],
  },
  {
    name: '温州市',
    enName: 'wenzhou',
    value: 80,
    center: [120.672111, 28.000575],
    centroid: [120.463912, 27.894726],
  },
  {
    name: '嘉兴市',
    enName: 'jiaxing',
    value: 42,
    center: [120.750865, 30.762653],
    centroid: [120.783487, 30.620063],
  },
  {
    name: '湖州市',
    enName: 'huzhou',
    value: 37,
    center: [120.102398, 30.867198],
    centroid: [119.873663, 30.743058],
  },
  {
    name: '绍兴市',
    enName: 'shaoxing',
    value: 24,
    center: [120.582112, 29.997117],
    centroid: [120.640933, 29.732893],
  },
  {
    name: '金华市',
    enName: 'jinghua',
    value: 43,
    center: [119.649506, 29.089524],
    centroid: [119.957007, 29.115117],
  },
  {
    name: '衢州市',
    enName: 'hengzhou',
    value: 46,
    center: [118.87263, 28.941708],
    centroid: [118.679569, 28.932446],
  },
  {
    name: '舟山市',
    enName: 'zhousan',
    value: 37,
    center: [122.106863, 30.016028],
    centroid: [122.146805, 30.056563],
  },
  {
    name: '台州市',
    enName: 'taizhou',
    value: 36,
    center: [121.428599, 28.661378],
    centroid: [121.136679, 28.757098],
  },
  {
    name: '丽水市',
    enName: 'lishui',
    value: 48,
    center: [119.921786, 28.451993],
    centroid: [119.517145, 28.197644],
  },
]
