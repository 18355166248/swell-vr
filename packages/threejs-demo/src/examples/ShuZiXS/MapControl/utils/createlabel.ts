import * as THREE from 'three'
import {Label3D} from '../components/label3d'
import {SquareIcon} from './base64-img'

/**
 * 省份信息接口
 */
export interface ProvinceInfo {
  name: string
  center: number[]
  centroid?: number[]
  hide?: boolean
  blur?: boolean
}

/**
 * 特殊省份信息接口（含英文名称）
 */
export interface SpecialProvinceInfo {
  name: string
  enName: string
  center: number[]
}

/**
 * 城市信息接口
 */
export interface CityInfo {
  name: string
  enName: string
  value: number
  center: number[]
  centroid: number[]
}

/**
 * 装饰图标信息接口
 */
export interface DecorationIconInfo {
  icon: string
  center: number[]
  width: string
  height: string
  reflect: boolean
}

/**
 * 创建省份标签
 * @param provinceInfo 省份信息
 * @param label3d 3D标签组件
 * @param parentGroup 父级组
 * @param geoProjection 地理投影函数
 * @returns 创建的标签实例
 */
export function createProvinceLabel(
  provinceInfo: ProvinceInfo,
  label3d: Label3D,
  parentGroup: THREE.Group,
  geoProjection: (center: number[]) => [number, number] | null,
) {
  const labelClass = `china-label ${provinceInfo.blur ? ' blur' : ''}`
  const label = label3d.create('', labelClass, false)
  const [x, y] = geoProjection(provinceInfo.center) || [0, 0]

  label.init(
    `<div class="other-label"><img class="label-icon" src="${SquareIcon}">${provinceInfo.name}</div>`,
    new THREE.Vector3(x, -y, 0.4),
  )

  label3d.setLabelStyle(label, 0.02, 'x')
  label.setParent(parentGroup)

  return label
}

/**
 * 创建特殊省份标签（带英文名称）
 * @param provinceInfo 省份信息，包含name和enName
 * @param label3d 3D标签组件
 * @param parentGroup 父级组
 * @param geoProjection 地理投影函数
 * @returns 创建的标签实例
 */
export function createSpecialProvinceLabel(
  provinceInfo: SpecialProvinceInfo,
  label3d: Label3D,
  parentGroup: THREE.Group,
  geoProjection: (center: number[]) => [number, number] | null,
) {
  const label = label3d.create('', 'guangdong-label', false)
  const [x, y] = geoProjection(provinceInfo.center) || [0, 0]

  label.init(
    `<div class="other-label"><span>${provinceInfo.name}</span><span>${provinceInfo.enName}</span></div>`,
    new THREE.Vector3(x, -y, 0.4),
  )

  label3d.setLabelStyle(label, 0.02, 'x')
  label.setParent(parentGroup)

  return label
}

/**
 * 创建装饰图标
 * @param iconInfo 图标信息，包含图标URL、位置和尺寸
 * @param label3d 3D标签组件
 * @param parentGroup 父级组
 * @param geoProjection 地理投影函数
 * @returns 创建的标签实例
 */
export function createDecorationIcon(
  iconInfo: DecorationIconInfo,
  label3d: Label3D,
  parentGroup: THREE.Group,
  geoProjection: (center: number[]) => [number, number] | null,
) {
  const labelClass = `decoration-label ${iconInfo.reflect ? ' reflect' : ''}`
  const label = label3d.create('', labelClass, false)
  const [x, y] = geoProjection(iconInfo.center) || [0, 0]

  label.init(
    `<div class="other-label"><img class="label-icon" style="width:${iconInfo.width};height:${iconInfo.height}" src="${iconInfo.icon}">`,
    new THREE.Vector3(x, -y, 0.4),
  )

  label3d.setLabelStyle(label, 0.02, 'x')
  label.setParent(parentGroup)

  return label
}

/**
 * 创建省份柱状图上的标签
 * @param cityInfo 城市信息
 * @param index 索引号
 * @param position 标签位置
 * @param label3d 3D标签组件
 * @param labelGroup 标签组
 * @returns 创建的标签实例
 */
export function createProvinceBarLabel(
  cityInfo: CityInfo,
  index: number,
  position: THREE.Vector3,
  label3d: Label3D,
  labelGroup: THREE.Group,
) {
  const label = label3d.create('', 'provinces-label', true)

  label.init(
    `<div class="provinces-label ${index > 4 ? 'yellow' : ''}">
      <div class="provinces-label-wrap">
        <div class="number"><span class="value">${
          cityInfo.value
        }</span><span class="unit">万人</span></div>
        <div class="name">
          <span class="zh">${cityInfo.name}</span>
          <span class="en">${cityInfo.enName.toUpperCase()}</span>
        </div>
        <div class="no">${index + 1}</div>
      </div>
    </div>`,
    position,
  )

  label3d.setLabelStyle(label, 0.01, 'x')
  label.setParent(labelGroup)

  return label
}
