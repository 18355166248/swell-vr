export interface mapDataType {
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
  subFeatureIndex: number
  acroutes: number[]
}

interface Parent {
  adcode: number
}
