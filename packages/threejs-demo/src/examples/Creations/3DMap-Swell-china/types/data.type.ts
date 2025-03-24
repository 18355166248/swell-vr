export interface CityData {
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
  coordinates: number[][][][]
}

interface Properties {
  adcode: number
  name: string
  center: number[]
  centroid: number[]
  childrenNum: number
  level: string
  parent: Parent
}

interface Parent {
  adcode: null
}
