export interface ProvinceData {
  type: string
  features: Feature[]
}

export interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
}

interface Geometry {
  type: string
  coordinates: number[][][]
}

interface Properties {
  adcode: number
  name: string
  center: number[]
  centroid: number[]
  childrenNum: number
  level: string
  parent: Parent
  subFeatureIndex: number
  acroutes: number[]
}

export interface CityData {
  type: string
  features: Feature[]
}

interface Parent {
  adcode: number
}

export interface SubDistrictInfo {
  adcode: number
  name: string
  alias: string
  lng: number
  lat: number
  centroid: number[]
}
