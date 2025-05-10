import {SquareIcon} from '../base64'
import {ProvinceInfo} from '../types'
import {Label3D} from './label3d'
import * as THREE from 'three'

export function createProvinceLabel({
  provinceInfo,
  label3d,
  parentGroup,
  geoProjection,
}: {
  provinceInfo: ProvinceInfo
  label3d: Label3D
  parentGroup: THREE.Group
  geoProjection: (center: [number, number]) => [number, number] | null
}) {
  const labelClass = `china-label ${provinceInfo.blur ? ' blur' : ''}`
  const label = label3d.create('', labelClass, false)
  const [x, y] = geoProjection(provinceInfo.centroid)!
  label.init(
    `<div class="other-label"><img class="label-icon" src="${SquareIcon}">${provinceInfo.name}</div>`,
    new THREE.Vector3(x, -y, 0),
  )
  label3d.setLabelStyle(label, 0.02, 'x')

  label.setParent(parentGroup)

  return label
}

export function createSpecialProvinceLabel({
  provinceInfo,
  label3d,
  parentGroup,
  geoProjection,
}: {
  provinceInfo: {
    name: string
    enName: string
    center: [number, number]
  }
  label3d: Label3D
  parentGroup: THREE.Group
  geoProjection: (center: [number, number]) => [number, number] | null
}) {
  const label = label3d.create('', 'zhejiang-label', false)
  const [x, y] = geoProjection(provinceInfo.center) || [0, 0]

  label.init(
    `<div class="other-label"><span>${provinceInfo.name}</span><span>${provinceInfo.enName}</span></div>`,
    new THREE.Vector3(x, -y, 0),
  )
  label3d.setLabelStyle(label, 0.02, 'x')
  label.setParent(parentGroup)

  return label
}
