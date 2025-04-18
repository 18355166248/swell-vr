/* eslint-disable @typescript-eslint/no-explicit-any */
import {LoaderTypeValues} from './const/loader'

export interface MapControlOptions {
  centroid: [number, number] // 几何中心
}

export interface AssetInfo {
  type: LoaderTypeValues
  name: string
  path: string
  data?: any
}

export type AssetList = AssetInfo[]

export interface PointLightOptions {
  color: string
  intensity: number
  distance: number
  x: number
  y: number
  z: number
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
