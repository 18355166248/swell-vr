/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 对GeoJSON数据应用坐标变换函数
 * @param {Object} geoJSON - 需要转换的GeoJSON对象
 * @param {Function} transformFunction - 坐标转换函数，接收[x,y]坐标并返回转换后的坐标
 * @returns {Object} 转换后的GeoJSON对象副本
 */
function transformGeoJSON(geoJSON: any, transformFunction: any) {
  // 内部函数：应用转换并保留6位小数精度
  const applyTransform = (coord: any) => {
    const transformedCoord = transformFunction(coord)
    // 保留6位小数精度
    ;(coord[0] = +transformedCoord[0].toFixed(6)),
      (coord[1] = +transformedCoord[1].toFixed(6))
  }

  // 创建输入GeoJSON的深拷贝，避免修改原始数据
  const clonedGeoJSON = JSON.parse(JSON.stringify(geoJSON))

  // 根据GeoJSON类型选择处理方式
  switch (clonedGeoJSON.type) {
    case 'FeatureCollection':
      for (
        let featureIndex = 0;
        featureIndex < clonedGeoJSON.features.length;
        featureIndex++
      ) {
        transformGeometry(
          clonedGeoJSON.features[featureIndex].geometry,
          applyTransform,
        )
      }
      break
    case 'Feature':
      transformGeometry(clonedGeoJSON.geometry, applyTransform)
      break
    case 'GeometryCollection':
      for (
        let geomIndex = 0;
        geomIndex < clonedGeoJSON.geometries.length;
        geomIndex++
      ) {
        transformGeometry(clonedGeoJSON.geometries[geomIndex], applyTransform)
      }
      break
    default:
      // 处理直接的几何对象
      transformGeometry(clonedGeoJSON, applyTransform)
  }

  return clonedGeoJSON
}

/**
 * 遍历GeoJSON几何体的坐标结构并应用转换
 * @param {Object} geometry - GeoJSON几何对象
 * @param {Function} transformFunc - 要应用于每个坐标的转换函数
 */
function transformGeometry(geometry: any, transformFunc: any) {
  let i, j, k
  const coordinates = geometry.coordinates

  // 根据几何类型选择适当的坐标遍历方式
  switch (geometry.type) {
    case 'Point':
      // 单个坐标点
      transformFunc(coordinates)
      break
    case 'LineString':
    case 'MultiPoint':
      // 一维坐标数组
      for (i = 0; i < coordinates.length; i++) {
        transformFunc(coordinates[i])
      }
      break
    case 'Polygon':
    case 'MultiLineString':
      // 二维坐标数组
      for (i = 0; i < coordinates.length; i++) {
        for (j = 0; j < coordinates[i].length; j++) {
          transformFunc(coordinates[i][j])
        }
      }
      break
    case 'MultiPolygon':
      // 三维坐标数组
      for (i = 0; i < coordinates.length; i++) {
        for (j = 0; j < coordinates[i].length; j++) {
          for (k = 0; k < coordinates[i][j].length; k++) {
            transformFunc(coordinates[i][j][k])
          }
        }
      }
      break
  }
}

// 导出函数到全局作用域，保持原有API兼容性
export {transformGeoJSON}
