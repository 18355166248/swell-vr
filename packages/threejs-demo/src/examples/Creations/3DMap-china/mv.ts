/**
 * 地图投影和瓦片计算相关常量
 */
// 角度转弧度的转换系数
const DEG_TO_RAD = Math.PI / 180,
  // 弧度转角度的转换系数
  RAD_TO_DEG = 180 / Math.PI,
  // 地球半径（墨卡托投影参数）
  EARTH_RADIUS = 63781.37,
  // 地球周长的一半（用于分辨率计算）
  EARTH_CIRCUMFERENCE_HALF = 1565.4303392804097

// 地球周长
const Vf = EARTH_RADIUS * Math.PI * 2

/**
 * 瓦片信息接口
 */
interface TileInfo {
  // 瓦片图片URL
  url: string
  // 瓦片列号
  col: number
  // 瓦片行号
  row: number
  // 瓦片缩放级别
  zoom: number
}

/**
 * 经纬度坐标接口
 */
interface LngLat {
  // 经度
  lng: number
  // 纬度
  lat: number
}

/**
 * 像素坐标接口
 */
interface Pixel {
  // X像素坐标
  pixelX: number
  // Y像素坐标
  pixelY: number
}

/**
 * 瓦片坐标接口
 */
interface Tile {
  // 瓦片X坐标
  tileX: number
  // 瓦片Y坐标
  tileY: number
}

/**
 * 投影后的边界框接口
 */
interface ProjectedBBox {
  // 左上角坐标（投影后）
  leftTop: number[]
  // 右下角坐标（投影后）
  rightBottom: number[]
  // 宽度
  width: number
  // 高度
  height: number
}

/**
 * MV函数的输入参数接口
 */
interface MVOptions {
  // 瓦片URL模板，包含{x},{y},{z}占位符
  tileUrl: string
  // 最大缩放级别
  maxZoom?: number
  // 世界边界框大小
  worldBboxSize: number
  // 边界框选项
  bboxOption: {
    // 边界框坐标数组 [minLng, minLat, maxLng, maxLat]
    bbox: number[]
    size: {
      // 边界框大小
      bboxSize: number
    }
  }
  // 是否挤出背景
  isExtrudeBackground?: boolean
}

/**
 * MV函数的返回结果接口
 */
interface MVResult {
  // 最小列号
  minCol: number
  // 最大列号
  maxCol: number
  // 最小行号
  minRow: number
  // 最大行号
  maxRow: number
  // 瓦片信息数组
  tilesInfo: TileInfo[]
  // 投影后的瓦片边界框
  tileBboxProj: ProjectedBBox
  // 缩放级别
  zoom: number
}

/**
 * 地图投影工具类
 * 提供经纬度与投影坐标的转换功能
 */
class Jf {
  /**
   * 将经纬度坐标投影为平面坐标
   * @param t 经度
   * @param e 纬度
   * @returns 投影后的坐标数组 [x, y]
   */
  static project(t: number, e: number): number[] {
    // 纬度限制在±85.0511度范围内（墨卡托投影的有效范围）
    const i = 85.0511287798
    return (
      // 限制纬度范围
      (e = Math.max(Math.min(i, e), -i)),
      // 将经度转换为弧度
      (t *= DEG_TO_RAD),
      // 将纬度转换为弧度
      (e *= DEG_TO_RAD),
      // 计算墨卡托投影的y值
      (e = Math.log(Math.tan(Math.PI / 4 + e / 2))),
      // 返回投影后的坐标
      [t * EARTH_RADIUS, e * EARTH_RADIUS]
    )
  }

  /**
   * 将投影坐标转回经纬度坐标
   * @param t x坐标
   * @param e y坐标
   * @returns 经纬度坐标数组 [lng, lat]
   */
  static unproject(t: number, e: number): number[] {
    return [
      // 计算经度
      (t / EARTH_RADIUS) * RAD_TO_DEG,
      // 计算纬度
      (2 * Math.atan(Math.exp(e / EARTH_RADIUS)) - Math.PI / 2) * RAD_TO_DEG,
    ]
  }

  /**
   * 获取指定缩放级别的分辨率
   * @param t 缩放级别
   * @returns 分辨率
   */
  static getResolution(t: number): number {
    return EARTH_CIRCUMFERENCE_HALF / Math.pow(2, t)
  }
}

/**
 * 地图瓦片计算类
 * 提供经纬度、像素坐标和瓦片坐标之间的转换功能
 */
export class SV {
  // 最大缩放级别
  levelMax: number
  // 最小缩放级别
  levelMin: number

  /**
   * 构造函数
   * @param t 最大缩放级别
   * @param e 最小缩放级别
   */
  constructor(t: number, e: number) {
    this.levelMax = t
    this.levelMin = e
  }

  /**
   * 获取指定缩放级别的地图大小（2的幂次方）
   * @param t 缩放级别
   * @returns 地图大小
   */
  _getMapSize(t: number): number {
    return Math.pow(2, t)
  }

  /**
   * 获取指定位置和缩放级别的分辨率
   * @param t 纬度
   * @param e 缩放级别
   * @returns 分辨率
   */
  getResolution(t: number, e: number): number {
    // 根据纬度和缩放级别计算分辨率
    return (12756274 * Math.PI * Math.cos(t)) / 256 / this._getMapSize(e)
  }

  /**
   * 将经度转换为瓦片X坐标
   * @param t 经度
   * @param e 缩放级别
   * @returns 瓦片X坐标
   */
  _lngToTileX(t: number, e: number): number {
    // 将经度归一化到0-1范围
    const i = (t + 180) / 360
    // 计算瓦片X坐标
    let n = Math.floor(i * this._getMapSize(e))
    // 确保瓦片坐标不超出范围
    return (n = Math.min(n, Math.pow(2, e) - 1)), n
  }

  /**
   * 将纬度转换为瓦片Y坐标
   * @param t 纬度
   * @param e 缩放级别
   * @returns 瓦片Y坐标
   */
  _latToTileY(t: number, e: number): number {
    // 将纬度转换为弧度
    const i = (t * Math.PI) / 180,
      // 计算归一化的Y坐标
      n = (1 - Math.log(Math.tan(i) + 1 / Math.cos(i)) / Math.PI) / 2
    // 计算瓦片Y坐标
    return Math.floor(n * this._getMapSize(e))
  }

  /**
   * 将经纬度转换为瓦片坐标
   * @param t 经度
   * @param e 纬度
   * @param i 缩放级别
   * @returns 瓦片坐标
   */
  lnglatToTile(t: number, e: number, i: number): Tile {
    return {
      tileX: this._lngToTileX(t, i),
      tileY: this._latToTileY(e, i),
    }
  }

  /**
   * 将经度转换为瓦片内的像素X坐标
   * @param t 经度
   * @param e 缩放级别
   * @returns 像素X坐标
   */
  _lngToPixelX(t: number, e: number): number {
    // 将经度归一化到0-1范围
    const i = (t + 180) / 360
    // 计算像素X坐标并取模256（瓦片大小）
    return Math.floor((i * this._getMapSize(e) * 256) % 256)
  }

  /**
   * 将纬度转换为瓦片内的像素Y坐标
   * @param t 纬度
   * @param e 缩放级别
   * @returns 像素Y坐标
   */
  _latToPixelY(t: number, e: number): number {
    // 计算纬度的正弦值
    const i = Math.sin((t * Math.PI) / 180),
      // 计算归一化的Y坐标
      n = 0.5 - Math.log((1 + i) / (1 - i)) / (4 * Math.PI)
    // 计算像素Y坐标并取模256（瓦片大小）
    return Math.floor((n * this._getMapSize(e) * 256) % 256)
  }

  /**
   * 将经纬度转换为瓦片内的像素坐标
   * @param t 经度
   * @param e 纬度
   * @param i 缩放级别
   * @returns 像素坐标
   */
  lnglatToPixel(t: number, e: number, i: number): Pixel {
    return {
      pixelX: this._lngToPixelX(t, i),
      pixelY: this._latToPixelY(e, i),
    }
  }

  /**
   * 将像素X坐标转换为经度
   * @param t 像素X坐标（0-255）
   * @param e 瓦片X坐标
   * @param i 缩放级别
   * @returns 经度
   */
  _pixelXTolng(t: number, e: number, i: number): number {
    // 根据瓦片坐标和像素坐标计算经度
    return ((e + t / 256) / this._getMapSize(i)) * 360 - 180
  }

  /**
   * 将像素Y坐标转换为纬度
   * @param t 像素Y坐标（0-255）
   * @param e 瓦片Y坐标
   * @param i 缩放级别
   * @returns 纬度
   */
  _pixelYToLat(t: number, e: number, i: number): number {
    // 计算像素在瓦片中的相对位置
    const n = t / 256
    let r
    return (
      // 计算纬度
      (180 *
        Math.atan(
          ((r = Math.PI * (1 - (2 * (e + n)) / this._getMapSize(i))),
          (Math.exp(r) - Math.exp(-r)) / 2),
        )) /
      Math.PI
    )
  }

  /**
   * 将像素坐标转换为经纬度
   * @param t 像素X坐标
   * @param e 像素Y坐标
   * @param i 瓦片X坐标
   * @param n 瓦片Y坐标
   * @param r 缩放级别
   * @returns 经纬度坐标
   */
  pixelToLnglat(t: number, e: number, i: number, n: number, r: number): LngLat {
    return {
      lng: this._pixelXTolng(t, i, r),
      lat: this._pixelYToLat(e, n, r),
    }
  }
}

/**
 * 将坐标投影为平面坐标
 * @param t 坐标数组 [lng, lat, height?]
 * @returns 投影后的坐标数组
 */
function Qf(t: number[]): number[] {
  const e = Jf
  // 如果没有高度值
  if (void 0 === t[2]) {
    return e.project(t[0], t[1])
  }
  // 如果有高度值
  {
    const i = e.project(t[0], t[1])
    return i.push(t[2]), i
  }
}

/**
 * 主要地图瓦片计算函数
 * 根据边界框和参数计算需要的瓦片信息
 * @param t 配置选项
 * @returns 瓦片计算结果
 */
export function MV(t: MVOptions): MVResult {
  console.log('🚀 ~ MV ~ t:', t)
  // 解构参数
  const {
      tileUrl: e,
      maxZoom: i,
      worldBboxSize: n,
      bboxOption: r,
      isExtrudeBackground: o,
    } = t,
    {bbox: a, size: s} = r,
    // 计算最佳缩放级别
    l = (function (t: {
      bboxSize: number
      maxZoom?: number
      worldBboxSize: number
      isExtrudeBackground?: boolean
    }): number {
      const {
        bboxSize: e,
        maxZoom: i,
        worldBboxSize: n,
        isExtrudeBackground: r,
      } = t
      // 初步计算缩放级别
      let o = ~~(n / e)
      // 将缩放级别映射到合适的范围
      for (let s = 0; s < 21; s++)
        if (o >= Math.pow(2, s) && o < Math.pow(2, s + 1)) {
          o = s + 3
          break
        }
      // 如果需要挤出背景，且缩放级别在特定范围内，则减小缩放级别
      if (r && o > 4 && o <= (i || 0)) {
        o -= 1
      }
      // 确保缩放级别不超过最大值
      const a = i || 12
      return o > a ? a : o
    })({
      bboxSize: s.bboxSize,
      maxZoom: i,
      worldBboxSize: n,
      isExtrudeBackground: o,
    }),
    // 创建瓦片计算工具实例
    u = new SV(0, 20),
    // 计算边界框四个角的瓦片坐标
    c = u._lngToTileX(a[0], l), // 左边界瓦片X
    h = u._lngToTileX(a[2], l), // 右边界瓦片X
    p = u._latToTileY(a[3], l), // 上边界瓦片Y
    d = u._latToTileY(a[1], l), // 下边界瓦片Y
    // 计算边界框的经纬度范围
    f = {
      leftTop: u.pixelToLnglat(0, 0, c, p, l),
      rightBottom: u.pixelToLnglat(256, 256, h, d, l),
    },
    // 计算投影后的边界框
    g: ProjectedBBox = {
      leftTop: Qf([f.leftTop.lng, f.leftTop.lat, 0]),
      rightBottom: Qf([f.rightBottom.lng, f.rightBottom.lat, 0]),
      width: 0,
      height: 0,
    }
  // 计算投影边界框的宽度和高度
  ;(g.width = Math.abs(g.rightBottom[0] - g.leftTop[0])),
    (g.height = Math.abs(g.rightBottom[1] - g.leftTop[1]))
  // 创建瓦片信息数组
  const m: TileInfo[] = []
  // 遍历边界框内的所有瓦片
  for (let y = c; y <= h; y++)
    for (let t = p; t <= d; t++)
      // 确保瓦片坐标在有效范围内
      y >= 0 &&
        t >= 0 &&
        y < Math.pow(2, l) &&
        t < Math.pow(2, l) &&
        // 添加瓦片信息
        m.push({
          // 生成瓦片URL，替换模板中的坐标和缩放级别
          url: e
            .replace('{x}', y.toString())
            .replace('{y}', t.toString())
            .replace('{z}', l.toString()),
          col: y,
          row: t,
          zoom: l,
        })
  // 返回计算结果
  return {
    minCol: c,
    maxCol: h,
    minRow: p,
    maxRow: d,
    tilesInfo: m,
    tileBboxProj: g,
    zoom: l,
  }
}
