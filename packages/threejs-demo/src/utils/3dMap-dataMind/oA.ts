import * as turf from '@turf/turf'

/**
 * 将地理坐标（经纬度）转换为三维笛卡尔坐标
 * @param latitude 纬度（度）
 * @param longitude 经度（度）
 * @returns 三维笛卡尔坐标数组 [x, y, z]
 */
function geoToCartesian(latitude: number, longitude: number): number[] {
  latitude = turf.degreesToRadians(latitude)
  longitude = turf.degreesToRadians(longitude)
  return [
    Math.sin(latitude) * Math.sin(longitude),
    -1 * Math.sin(latitude) * Math.cos(longitude),
    Math.cos(latitude),
  ]
}

/**
 * 将地理坐标（经纬度）转换为另一种三维笛卡尔坐标系
 * 与geoToCartesian不同，此函数使用不同的数学公式计算坐标
 * @param latitude 纬度（度）
 * @param longitude 经度（度）
 * @returns 三维笛卡尔坐标数组 [x, y, z]
 */
// aA
function geoToCartesianAlt(latitude: number, longitude: number): number[] {
  latitude = turf.degreesToRadians(latitude)
  longitude = turf.degreesToRadians(longitude)
  return [
    -1 * Math.cos(latitude) * Math.sin(longitude),
    Math.cos(latitude) * Math.cos(longitude),
    Math.sin(latitude),
  ]
}

// 导出函数
export {geoToCartesian, geoToCartesianAlt}
