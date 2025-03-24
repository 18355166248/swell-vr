/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {cloneDeep} from 'lodash-es'
import * as turf from '@turf/turf'

/**
 * 检查多边形坐标是否闭合，如果未闭合且长度足够，则闭合它
 * @param coordinates 多边形坐标数组
 * @returns 处理后的坐标数组
 */
function processPolygonCoordinates(coordinates: any[]): any[] {
  const result: any[] = []

  for (let i = 0; i < coordinates.length; i++) {
    const firstPoint = coordinates[i][0]
    const lastPoint = coordinates[i][coordinates[i].length - 1]

    // 检查多边形是否闭合
    if (firstPoint[0] === lastPoint[0] && firstPoint[1] === lastPoint[1]) {
      result.push(coordinates[i])
    } else if (coordinates[i].length > 10) {
      // 如果多边形未闭合且点数足够，则闭合它
      coordinates[i].push(firstPoint)
      result.push(coordinates[i])
    }
  }

  return result
}

/**
 * 处理GeoJSON特征集合，仅保留有效的多边形
 * @param featureCollection 输入的特征集合
 * @returns 处理后的特征集合
 */
function processFeatureCollection(featureCollection: any): any {
  const result = {
    type: 'FeatureCollection',
    features: [],
  }

  for (let i = 0; i < featureCollection.features.length; i++) {
    const feature = featureCollection.features[i]
    const geometry = feature.geometry

    // 跳过无效的几何体
    if (!geometry || !geometry.coordinates || geometry.coordinates.length === 0)
      continue

    // 仅处理多边形类型
    if (geometry.type !== 'Polygon') continue

    // 处理多边形坐标
    feature.geometry.coordinates = processPolygonCoordinates(
      geometry.coordinates,
    )

    // @ts-ignore
    result.features.push(feature)
  }

  return result
}

function lV(t: any) {
  let e = cloneDeep(t)
  e = turf.flatten(e)
  e = processFeatureCollection(e)
  return e
}

export {lV}
