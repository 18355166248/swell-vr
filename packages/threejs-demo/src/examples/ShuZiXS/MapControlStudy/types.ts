import * as THREE from 'three'
import {LoaderTypeValues} from '../const/loader'

export interface MapControlOptions {
  centroid: [number, number]
}

export type CameraManagerInstance =
  | THREE.PerspectiveCamera
  | THREE.OrthographicCamera
  | null

export interface AssetInfo {
  type: LoaderTypeValues
  name: string
  path: string
  data?: any
}
