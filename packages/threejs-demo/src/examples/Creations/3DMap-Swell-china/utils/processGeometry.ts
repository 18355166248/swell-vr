import {Geometry} from 'geojson'
import {processPolygon} from './processPolygon'

/**
 * 处理几何体数据
 * @param geometry 几何体数据
 * @param geometryData 几何体缓冲数据对象
 */
export function processGeometry(
  geometry: Geometry,
  geometryData: {
    index: number[]
    position: number[]
    normal: number[]
    uv: number[]
  },
): void {
  let multiPolygonCoords: number[][][][]

  switch (geometry.type) {
    case 'Polygon':
      processPolygon(geometry.coordinates as number[][][], geometryData)
      break
    case 'MultiPolygon':
      // 处理多个多边形
      multiPolygonCoords = geometry.coordinates as number[][][][]
      multiPolygonCoords.forEach(polygonCoords => {
        processPolygon(polygonCoords, geometryData)
      })
      break
  }
}
