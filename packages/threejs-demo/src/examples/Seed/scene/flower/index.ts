import {Group} from 'three'
import FlowerGlb from './Flower.glb'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Flower extends Group {
  constructor() {
    super()
    const loader = new GLTFLoader()

    this.name = 'flower'

    loader.load(FlowerGlb, gltf => {
      this.add(gltf.scene)
    })
  }
}
