import {FeatureCollection} from 'geojson'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

export interface MapToolsProps {
  scene: THREE.Scene
  renderer: THREE.Renderer
  camera: THREE.Camera
  controls: OrbitControls
  containerDom: HTMLElement
  data: FeatureCollection
  style?: {
    fill?: {
      color?: string
    }
    innerShadow?: {
      enabled?: boolean
      shadowColor?: string
      shadowBlurScale?: number
    }
    sideConfig?: {
      map?: THREE.Texture | null
      colorConfig?: {
        type?: string
        range?: string[]
      }
    }
  }
}
