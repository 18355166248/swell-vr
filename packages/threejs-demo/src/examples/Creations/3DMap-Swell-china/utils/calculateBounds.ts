import * as turf from '@turf/turf'
import {FeatureCollection} from 'geojson'

/**
 * 使用Turf.js计算GeoJSON数据的边界和中心点
 * @param data GeoJSON数据
 * @returns 包含最小/最大坐标和中心点的对象
 */
export function calculateBounds(data: FeatureCollection) {
  // 使用turf.bbox计算边界框
  const bbox = turf.bbox(data)
  // 使用turf.center计算中心点
  const center = turf.center(data)

  // 返回计算结果
  return {
    min: {x: bbox[0], y: bbox[1]},
    max: {x: bbox[2], y: bbox[3]},
    center: {
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
    },
    width: bbox[2] - bbox[0],
    height: bbox[3] - bbox[1],
  }
}
