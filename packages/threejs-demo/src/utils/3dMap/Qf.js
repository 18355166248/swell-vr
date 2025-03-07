import proj4 from 'proj4'

const MAX_LATITUDE = 85.0511287798 // Web墨卡托投影的最大纬度
const RESOLUTION_FACTOR = 1565.4303392804097 // 分辨率因子

const WGS84 = 'EPSG:4326' // WGS84经纬度坐标系
const WEB_MERCATOR =
  '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs'

proj4.defs(WGS84, '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs')
proj4.defs('EPSG:3857', WEB_MERCATOR)

class WebMercator {
  static project(lon, lat) {
    lat = Math.max(Math.min(MAX_LATITUDE, lat), -MAX_LATITUDE)
    return proj4(WGS84, 'EPSG:3857', [lon, lat])
  }

  static unproject(x, y) {
    return proj4('EPSG:3857', WGS84, [x, y])
  }

  static getResolution(zoom) {
    return RESOLUTION_FACTOR / Math.pow(2, zoom)
  }
}

/**
 * 投影坐标 - 用于turf.coordEach的回调函数
 * 直接修改传入的坐标数组
 * @param {Array} coords - 坐标数组 [lon, lat, z?]
 */
function projectCoords(coords) {
  // 保存可能存在的第三个坐标值
  const z = coords.length > 2 ? coords[2] : undefined

  // 限制纬度范围并进行投影
  const lat = Math.max(Math.min(MAX_LATITUDE, coords[1]), -MAX_LATITUDE)
  const projected = proj4(WGS84, 'EPSG:3857', [coords[0], lat])

  // 直接修改传入的坐标数组
  coords[0] = projected[0]
  coords[1] = projected[1]

  // 如果有第三个坐标值，保留它
  if (z !== undefined) {
    coords[2] = z
  }

  return coords // 返回修改后的坐标，与turf.coordEach兼容
}

export {projectCoords as Qf, WebMercator as Jf}
