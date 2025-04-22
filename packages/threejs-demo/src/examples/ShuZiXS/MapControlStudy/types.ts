import * as THREE from 'three'

export interface MapControlOptions {
  centroid: [number, number]
}

export type CameraManagerInstance =
  | THREE.PerspectiveCamera
  | THREE.OrthographicCamera
  | null
