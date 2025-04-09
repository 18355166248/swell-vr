/* eslint-disable @typescript-eslint/no-explicit-any */
import {LoaderTypeValues} from './const/loader'

export interface MapControlOptions {
  center: [number, number] // 行政中心
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
