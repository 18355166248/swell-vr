import {ThreeObjectBase} from '.'

export type Tip = {
  id: string
  targetSpaceId?: string
  textureUrl?: string
  [key: string]: any
} & ThreeObjectBase
