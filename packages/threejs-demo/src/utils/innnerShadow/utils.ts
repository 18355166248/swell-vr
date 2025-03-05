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

/**
 * 墨卡托投影
 * 将地理坐标转换为像素坐标
 * @param longitude 经度
 * @param latitude 纬度
 * @param zoomLevel 缩放级别
 * @returns 像素坐标 [x, y]
 */
export function convertToPixelCoordinates(
  longitude: number,
  latitude: number,
  zoomLevel: number,
): [number, number] {
  // 确保缩放级别有一个合理的最小值
  const effectiveZoom = Math.max(zoomLevel, 1.5)

  // 安徽省的大致中心点
  const centerLongitude = 117.2
  const centerLatitude = 31.8

  // 相对于中心点的经纬度差值
  const deltaLon = longitude - centerLongitude
  const deltaLat = latitude - centerLatitude

  // 根据缩放级别调整系数，较小的缩放级别使用更大的系数确保细节可见
  const scaleFactor = effectiveZoom < 3 ? 800 / effectiveZoom : 256

  // 使用更均匀的投影变换，减少地图变形
  const x = deltaLon * scaleFactor * Math.cos((centerLatitude * Math.PI) / 180)
  // 纬度反转以匹配屏幕坐标系
  const y = -deltaLat * scaleFactor

  return [Math.floor(x), Math.floor(y)]
}
