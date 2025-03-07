/* eslint-disable @typescript-eslint/no-explicit-any */
import {merge} from 'lodash-es'
import {lV} from './lV'
import * as turf from '@turf/turf'
import {Qf} from './Qf'

// 扩展Window接口
declare global {
  interface Window {
    ZV: typeof processGeoData
  }
}

const DEFAULT_CONFIG = {
  useProcess: !0,
  useProject: !0,
}

interface MapData {
  __geojson_process_proj__: any
  __geojson_process__: any
  __geojson__: any
  __raw_geojson__: any
  type: string
  data: any
  simplify: {
    enabled: boolean
    tolerance: number
  }
}
/**
 * 处理地图数据并转换为GeoJSON格式
 * @param {Object} mapData - 地图数据对象
 * @param {Object} config - 配置选项
 * @returns {Object|null} - 处理后的地图数据对象或null
 */
async function processGeoData(
  mapData: MapData,
  config?: typeof DEFAULT_CONFIG,
) {
  console.log('🚀 ~ processGeoData ~ mapData:', mapData)
  // 检查数据是否存在
  if (!(null == mapData ? void 0 : mapData.data)) return null

  // 解构数据对象
  const {type: dataType, data: rawData} = mapData
  // 合并默认配置
  const {useProject: enableProjection, useProcess: enableProcessing} = merge(
    DEFAULT_CONFIG,
    config,
  )

  let geoJsonData, dataUrl

  // 根据数据类型处理不同格式的地图数据
  switch (dataType) {
    case 'geojson':
      // 直接使用原始GeoJSON数据
      geoJsonData = rawData
      break
    // case xk.GEOJSON_URL:
    //   // 从URL获取GeoJSON数据
    //   dataUrl = mapData.data
    //   geoJsonData = await XV.getGeoJsonByUrl(dataUrl)
    //   break
    // case xk.GEOBUF_URL:
    //   // 从URL获取GeoBuf数据并转换为GeoJSON
    //   dataUrl = mapData.data
    //   geoJsonData = await XV.getGeoBuf2GeoJsonByUrl(dataUrl)
    //   break
    // case xk.GEOBUF:
    default:
      console.error('[xGis]', `地图数据 url ${dataUrl} 格式无法解析`)
  }

  // 保存原始GeoJSON数据
  mapData.__raw_geojson__ = geoJsonData
  mapData.__geojson__ = geoJsonData

  // 如果启用了简化选项，对GeoJSON数据进行简化处理
  // if (null == simplifyOptions ? void 0 : simplifyOptions.enabled) {
  //   mapData.__geojson__ = am.simplify(
  //     mapData.__geojson__,
  //     simplifyOptions.tolerance,
  //   )
  // }

  // 如果启用了处理选项，对GeoJSON数据进行处理
  if (enableProcessing) {
    mapData.__geojson_process__ = lV(mapData.__geojson__)
  }

  // 如果启用了投影选项，对GeoJSON数据进行投影转换
  if (enableProjection) {
    mapData.__geojson_process_proj__ = turf.coordEach(
      enableProcessing ? mapData.__geojson_process__ : mapData.__geojson__,
      Qf,
    )
  }

  return mapData
}
window.ZV = processGeoData
