import {SpaceManagerEvents} from 'src/space'
import {Tip} from './tip'

export interface VROptions {
  container: HTMLElement
  tipContainer: HTMLElement
  // 空间配置
  spacesConfig: SpaceConfig[]
}

// 通用坐标
export type Vector3Position = {
  // x 轴坐标
  x: number
  // y 轴坐标
  y: number
  // z 轴坐标
  z: number
}

// 位置
export type Position = Vector3Position
// 缩放
export type Scale = Vector3Position
// 旋转
export type Rotate = Vector3Position

// 每个 threejs 对象的通用配置
export type ThreeObjectBase = {
  // 位置
  position: Position
  // 缩放
  scale?: Scale
  // 旋转
  rotate?: Rotate
}

// 立方体空间纹理贴图 url 列表
export type CubeSpaceTextureUrls = {
  // 左侧贴图 url
  left: string
  // 右侧贴图 url
  right: string
  // 上侧贴图 url
  up: string
  // 下侧贴图 url
  down: string
  // 前侧贴图 url
  front: string
  // 后侧贴图 url
  back: string
}

// 空间配置
export type SpaceConfig = {
  // 空间 id
  id: string
  // 相机配置
  camera?: ThreeObjectBase
  // 空间贴图列表
  cubeSpaceTextureUrls: CubeSpaceTextureUrls
  tips: Tip[]
}

/**
 * 深度处理 interface key，使所有 key 为可选项
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P]
}

/**
 * 深度处理 interface key，使所有 key 为必填项
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends (infer U)[]
    ? DeepRequired<U>[]
    : T[P] extends object
    ? DeepRequired<T[P]>
    : T[P]
}

/**
 * 完成跳转空间时的回调 event
 */
export type AfterSwitchSpaceEvent = {
  /**
   * 跳转的目标空间配置
   */
  spaceConfig: SpaceConfig
}

// 自定义事件
export type VREvents = {
  update: () => void
  afterSwitchSpace: (e: AfterSwitchSpaceEvent) => void
} & Omit<SpaceManagerEvents, 'switchSpace'>
