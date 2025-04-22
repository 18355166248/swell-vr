import OceanBlueBgImg from '../../assets/imgs/ocean-blue-bg.png'
import {ResourceManager} from '../MapApplication/'

class LoadAssets {
  onLoadCallback: () => void
  instance?: ResourceManager
  constructor(e = () => {}) {
    this.onLoadCallback = e
    this.init()
  }
  init() {
    this.instance = new ResourceManager()
    this.instance.addLoader(THREE.FileLoader, 'FileLoader')
  }
}
