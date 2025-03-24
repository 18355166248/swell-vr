import {CityData} from './data.type'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

export interface MapToolsProps {
  scene: THREE.Scene
  renderer: THREE.Renderer
  camera: THREE.Camera
  controls: OrbitControls
  containerDom: HTMLElement
  data: CityData
}
