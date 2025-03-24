/* eslint-disable @typescript-eslint/no-explicit-any */
// 地图投影相关常量
// const EPSILON = 0.01 // 极小值常量
const RAD_PER_DEG = Math.PI / 180 // 角度转弧度系数
const DEG_PER_RAD = 180 / Math.PI // 弧度转角度系数
const EARTH_RADIUS = 63781.37 // 地球半径常量
const BASE_RESOLUTION = 1565.4303392804097 // 基础分辨率
// const EARTH_PERIMETER = EARTH_RADIUS * Math.PI * 2 // 地球周长
// const CACHE_ARRAY = [] // 缓存数组

/**
 * 地图投影工具类
 * 用于经纬度与墨卡托投影坐标的转换
 */
class MapProjection {
  /**
   * 将经纬度坐标投影为墨卡托坐标
   * @param {number} longitude - 经度
   * @param {number} latitude - 纬度
   * @returns {Array} 墨卡托坐标 [x, y]
   */
  static project(longitude: number, latitude: number) {
    const MAX_LATITUDE = 85.0511287798 // 最大纬度限制
    return (
      // 限制纬度范围
      (latitude = Math.max(Math.min(MAX_LATITUDE, latitude), -MAX_LATITUDE)),
      // 转换为弧度
      (longitude *= RAD_PER_DEG),
      (latitude *= RAD_PER_DEG),
      // 墨卡托投影公式
      (latitude = Math.log(Math.tan(Math.PI / 4 + latitude / 2))),
      [longitude * EARTH_RADIUS, latitude * EARTH_RADIUS]
    )
  }

  /**
   * 将墨卡托坐标反投影为经纬度坐标
   * @param {number} x - 墨卡托x坐标
   * @param {number} y - 墨卡托y坐标
   * @returns {Array} 经纬度坐标 [longitude, latitude]
   */
  static unproject(x: number, y: number) {
    return [
      (x / EARTH_RADIUS) * DEG_PER_RAD,
      (2 * Math.atan(Math.exp(y / EARTH_RADIUS)) - Math.PI / 2) * DEG_PER_RAD,
    ]
  }

  /**
   * 根据缩放级别获取分辨率
   * @param {number} zoom - 缩放级别
   * @returns {number} 分辨率
   */
  static getResolution(zoom: number) {
    return BASE_RESOLUTION / Math.pow(2, zoom)
  }
}

/**
 * 坐标投影函数
 * 处理二维或三维坐标的投影
 * @param {Array} coords - 输入坐标 [longitude, latitude, ?altitude]
 * @returns {Array} 投影后的坐标
 */
function projectCoords(coords: any) {
  const projector = MapProjection
  if (void 0 === coords[2]) {
    // 二维坐标投影
    return projector.project(coords[0], coords[1])
  }
  {
    // 三维坐标投影，保留高度值
    const projectedCoords = projector.project(coords[0], coords[1])
    return projectedCoords.push(coords[2]), projectedCoords
  }
}
// window.Qf = projectCoords; // 保持原有的全局导出名称

/**
 * 坐标反投影函数
 * 将投影坐标转换回经纬度坐标
 * @param {Array} coords - 输入投影坐标 [x, y, ?altitude]
 * @returns {Array} 反投影后的经纬度坐标 [longitude, latitude, ?altitude]
 */
function unprojectCoords(coords: any) {
  const projector = MapProjection
  if (void 0 === coords[2]) {
    // 二维坐标反投影
    return projector.unproject(coords[0], coords[1])
  }
  {
    // 三维坐标反投影，保留高度值
    const unprojectedCoords = projector.unproject(coords[0], coords[1])
    return unprojectedCoords.push(coords[2]), unprojectedCoords
  }
}

// Qf Zf
export {projectCoords, unprojectCoords}
