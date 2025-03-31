/**
 * 计算2的指定次方
 * @param zoomLevel 缩放级别
 * @returns 2的指定次方值
 */
function calculatePowerOfTwo(zoomLevel: number): number {
  return Math.pow(2, zoomLevel)
}

/**
 * 将经纬度坐标转换为瓦片坐标
 * @param longitude 经度
 * @param latitude 纬度
 * @param zoomLevel 缩放级别
 * @returns 瓦片坐标 [x, y]
 */
function convertToTileCoordinates(
  longitude: number,
  latitude: number,
  zoomLevel: number,
): [number, number] {
  // 计算X坐标（经度转瓦片X坐标）
  const tileX = (function (lng: number, zoom: number): number {
    // 将经度范围[-180, 180]映射到[0, 1]
    const normalizedX = (lng + 180) / 360
    // 根据缩放级别计算最终的瓦片X坐标
    return Math.floor(normalizedX * calculatePowerOfTwo(zoom) * 256)
  })(longitude, zoomLevel)

  // 计算Y坐标（纬度转瓦片Y坐标）
  const tileY = (function (lat: number, zoom: number): number {
    // 使用墨卡托投影公式将纬度转换为Y坐标
    const sinLatitude = Math.sin((lat * Math.PI) / 180)
    const normalizedY =
      0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI)
    // 根据缩放级别计算最终的瓦片Y坐标
    return Math.floor(normalizedY * calculatePowerOfTwo(zoom) * 256)
  })(latitude, zoomLevel)

  return [tileX, tileY]
}

// wV
export default convertToTileCoordinates
