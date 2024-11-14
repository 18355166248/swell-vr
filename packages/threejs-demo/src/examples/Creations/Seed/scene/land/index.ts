import {Group} from 'three'
import LandGlb from './Land.glb'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Land extends Group {
  constructor() {
    super()
    const loader = new GLTFLoader()

    this.name = 'land'

    loader.load(LandGlb, gltf => {
      this.add(gltf.scene)
    })
  }
}
