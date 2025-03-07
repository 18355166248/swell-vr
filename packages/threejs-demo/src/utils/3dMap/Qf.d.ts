/**
 * Web墨卡托投影类
 */
export class Jf {
  /**
   * 将WGS84坐标投影为Web墨卡托坐标
   * @param lon 经度
   * @param lat 纬度
   * @returns 投影后的坐标 [x, y]
   */
  static project(lon: number, lat: number): [number, number]

  /**
   * 将Web墨卡托坐标反投影为WGS84坐标
   * @param x X坐标
   * @param y Y坐标
   * @returns 反投影后的坐标 [lon, lat]
   */
  static unproject(x: number, y: number): [number, number]

  /**
   * 根据缩放级别获取分辨率
   * @param zoom 缩放级别
   * @returns 分辨率
   */
  static getResolution(zoom: number): number
}

/**
 * 投影坐标函数 - 用于turf.coordEach的回调函数
 * 直接修改传入的坐标数组
 * @param coords 坐标数组 [lon, lat, z?]
 * @returns 修改后的坐标数组
 */
export function Qf(coords: number[]): number[]
