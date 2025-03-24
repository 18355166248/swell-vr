import {ThreeMap} from '.'
import {EA, loadMapTexture} from './OV_map'
import * as THREE from 'three'

/**
 * 更新材质属性
 * @param context - 上下文对象
 * @param materialType - 材质类型 ('extrude' | 'extrude-background')
 */
// FV
export function updateMaterialProperties(
  context: ThreeMap,
  materialType: 'extrude' | 'extrude-background',
): void {
  let textureMap, color, normalMap, normalScale, material
  switch (materialType) {
    case 'extrude':
      material = context.extrudeTopMaterial
      textureMap = context.districtStyle.fill.map
      color = context.districtStyle.fill.color
      normalMap = context.districtStyle.fill.normalMap
      normalScale = context.districtStyle.fill.normalScale
      material.metalness = context.districtStyle.fill.metalness
      material.roughness = context.districtStyle.fill.roughness
      break
    case 'extrude-background':
      material = context.extrudeBackgroundTopMaterial
      textureMap = context.extrudeBackgroundStyle.fill.map
      color = context.extrudeBackgroundStyle.fill.color
      normalMap = context.extrudeBackgroundStyle.fill.normalMap
      normalScale = context.extrudeBackgroundStyle.fill.normalScale
      material.metalness = context.extrudeBackgroundStyle.fill.metalness
      material.roughness = context.extrudeBackgroundStyle.fill.roughness
  }

  // 处理纹理贴图
  if (textureMap) {
    loadMapTexture(context, textureMap, 'map', materialType)
  } else {
    material.map = null
    const colorProps = color
      ? EA(color)
      : {
          color: new THREE.Color(16777215),
          transparent: false,
          opacity: 1,
        }
    if (color) {
      // context.textureManager(`${materialType}-map`).abort()
    }
    material.color = colorProps.color
    material.opacity = colorProps.opacity
    material.transparent = colorProps.transparent
    material.needsUpdate = true
  }

  // 处理法线贴图
  if (normalMap) {
    loadMapTexture(context, normalMap, 'normalMap', materialType)
    material.normalScale = new THREE.Vector2(normalScale, normalScale)
  } else {
    material.normalMap = null
    material.needsUpdate = true
  }
}
