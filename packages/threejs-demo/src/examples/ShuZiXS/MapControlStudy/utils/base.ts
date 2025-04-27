/**
 * 标准化GeoJSON数据格式
 * 将Polygon类型的几何体转换为MultiPolygon兼容格式
 * @param jsonString GeoJSON格式的字符串
 * @returns 处理后的GeoJSON对象
 */
export const normalizeGeoJSON = (jsonString: string) => {
  const geoJsonData = JSON.parse(jsonString)
  const features = geoJsonData.features

  // 遍历所有特征
  for (let i = 0; i < features.length; i++) {
    const feature = features[i]

    // 如果是Polygon类型，将坐标数组包装一层，使其与MultiPolygon格式兼容
    if (['Polygon'].includes(feature.geometry.type)) {
      feature.geometry.coordinates = [feature.geometry.coordinates]
    }
  }

  return geoJsonData
}
