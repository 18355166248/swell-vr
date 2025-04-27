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
  data?: FeatureCollection
}

export interface FeatureCollection {
  type: string
  features: Feature[]
}

interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
}

interface Geometry {
  type: string
  coordinates: [number, number][][][]
}

interface Properties {
  adcode: number
  name: string
  center: [number, number]
  centroid: [number, number]
  childrenNum: number
  level: string
  parent: Parent
  subFeatureIndex: number
  acroutes: [number]
}

interface Parent {
  adcode: number
}
