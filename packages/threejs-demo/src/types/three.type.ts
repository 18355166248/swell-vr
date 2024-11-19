export type GUISetting = BaseGui | ColorGui | NumberGui | SelectGui | FolderGui

export interface BaseGui {
  type: ''
  key: string
}
export interface ColorGui {
  type: 'color'
  key: string
}
export interface NumberGui {
  type: 'number'
  key: string
  min?: number
  max?: number
  step?: number
}
export interface SelectGui {
  type: 'select'
  key: string
  options: string[]
}
export interface FolderGui {
  type: 'folder'
  key: string
  children?: GUISetting[]
}
