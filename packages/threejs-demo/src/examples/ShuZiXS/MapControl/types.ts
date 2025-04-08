/* eslint-disable @typescript-eslint/no-explicit-any */
import {LoaderTypeKeys} from './const/loader'

export interface MapControlOptions {
  center: [number, number] // 行政中心
  centroid: [number, number] // 几何中心
}

export interface AssetInfo {
  type: LoaderTypeKeys
  name: string
  path: string
  data: any
}

export type AssetList = AssetInfo[]
