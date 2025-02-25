/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 提取 GeoJSON 数据中的坐标数组
 * 支持以下 GeoJSON 类型:
 * - Point
 * - LineString
 * - MultiPoint
 * - Polygon
 * - MultiLineString
 * - MultiPolygon
 * - Feature
 * - GeometryCollection
 * - FeatureCollection
 *
 * @param geoJson GeoJSON 数据对象
 * @returns 坐标数组的数组 [[lng, lat], ...]
 */
export function extractGeoJsonCoordinates(geoJson: any): number[][] {
  let coordinates: number[][]

  switch (geoJson.type) {
    case 'Point':
      coordinates = [geoJson.coordinates]
      break

    case 'LineString':
    case 'MultiPoint':
      coordinates = geoJson.coordinates
      break

    case 'Polygon':
    case 'MultiLineString':
      coordinates = geoJson.coordinates.reduce(
        (acc: number[][], curr: number[][]) => {
          return acc.concat(curr)
        },
        [],
      )
      break

    case 'MultiPolygon':
      coordinates = geoJson.coordinates.reduce(
        (acc: number[][], polygon: number[][][]) => {
          return acc.concat(
            polygon.reduce((polyAcc: number[][], ring: number[][]) => {
              return polyAcc.concat(ring)
            }, []),
          )
        },
        [],
      )
      break

    case 'Feature':
      coordinates = extractGeoJsonCoordinates(geoJson.geometry)
      break

    case 'GeometryCollection':
      coordinates = geoJson.geometries.reduce(
        (acc: number[][], geometry: any) => {
          return acc.concat(extractGeoJsonCoordinates(geometry))
        },
        [],
      )
      break

    case 'FeatureCollection':
      coordinates = geoJson.features.reduce((acc: number[][], feature: any) => {
        return acc.concat(extractGeoJsonCoordinates(feature))
      }, [])
      break

    default:
      coordinates = []
  }

  return coordinates
}
