import {projectCoords} from './projectCoords'

class SV {
  levelMax: number
  levelMin: number
  constructor(t: number, e: number) {
    this.levelMax = t
    this.levelMin = e
  }
  _getMapSize(t: number) {
    return Math.pow(2, t)
  }
  getResolution(t, e) {
    return (12756274 * Math.PI * Math.cos(t)) / 256 / this._getMapSize(e)
  }
  _lngToTileX(t, e) {
    const i = (t + 180) / 360
    let n = Math.floor(i * this._getMapSize(e))
    return (n = Math.min(n, Math.pow(2, e) - 1)), n
  }
  _latToTileY(t, e) {
    const i = (t * Math.PI) / 180,
      n = (1 - Math.log(Math.tan(i) + 1 / Math.cos(i)) / Math.PI) / 2
    return Math.floor(n * this._getMapSize(e))
  }
  lnglatToTile(t, e, i) {
    return {
      tileX: this._lngToTileX(t, i),
      tileY: this._latToTileY(e, i),
    }
  }
  _lngToPixelX(t, e) {
    const i = (t + 180) / 360
    return Math.floor((i * this._getMapSize(e) * 256) % 256)
  }
  _latToPixelY(t, e) {
    const i = Math.sin((t * Math.PI) / 180),
      n = 0.5 - Math.log((1 + i) / (1 - i)) / (4 * Math.PI)
    return Math.floor((n * this._getMapSize(e) * 256) % 256)
  }
  lnglatToPixel(t, e, i) {
    return {
      pixelX: this._lngToPixelX(t, i),
      pixelY: this._latToPixelY(e, i),
    }
  }
  _pixelXTolng(t, e, i) {
    return ((e + t / 256) / this._getMapSize(i)) * 360 - 180
  }
  _pixelYToLat(t, e, i) {
    const n = t / 256
    let r
    return (
      (180 *
        Math.atan(
          ((r = Math.PI * (1 - (2 * (e + n)) / this._getMapSize(i))),
          (Math.exp(r) - Math.exp(-r)) / 2),
        )) /
      Math.PI
    )
  }
  pixelToLnglat(t, e, i, n, r) {
    return {
      lng: this._pixelXTolng(t, i, r),
      lat: this._pixelYToLat(e, n, r),
    }
  }
}
function MV(t) {
  const {
      tileUrl: e,
      maxZoom: i,
      worldBboxSize: n,
      bboxOption: r,
      isExtrudeBackground: o,
    } = t,
    {bbox: a, size: s} = r,
    l = (function (t) {
      const {
        bboxSize: e,
        maxZoom: i,
        worldBboxSize: n,
        isExtrudeBackground: r,
      } = t
      let o = ~~(n / e)
      for (let s = 0; s < 21; s++)
        if (o >= Math.pow(2, s) && o < Math.pow(2, s + 1)) {
          o = s + 3
          break
        }
      r && o > 4 && o <= i && (o -= 1)
      const a = i || 12
      return o > a && (o = a), o
    })({
      bboxSize: s.bboxSize,
      maxZoom: i,
      worldBboxSize: n,
      isExtrudeBackground: o,
    }),
    u = new SV(0, 20),
    c = u._lngToTileX(a[0], l),
    h = u._lngToTileX(a[2], l),
    p = u._latToTileY(a[3], l),
    d = u._latToTileY(a[1], l),
    f = {
      leftTop: u.pixelToLnglat(0, 0, c, p, l),
      rightBottom: u.pixelToLnglat(256, 256, h, d, l),
    },
    g = {
      leftTop: projectCoords([f.leftTop.lng, f.leftTop.lat, 0]),
      rightBottom: projectCoords([f.rightBottom.lng, f.rightBottom.lat, 0]),
      width: 0,
      height: 0,
    }
  ;(g.width = Math.abs(g.rightBottom[0] - g.leftTop[0])),
    (g.height = Math.abs(g.rightBottom[1] - g.leftTop[1]))
  const m = []
  for (let y = c; y <= h; y++)
    for (let t = p; t <= d; t++)
      y >= 0 &&
        t >= 0 &&
        y < Math.pow(2, l) &&
        t < Math.pow(2, l) &&
        m.push({
          url: e.replace('{x}', y).replace('{y}', t).replace('{z}', l),
          col: y,
          row: t,
          zoom: l,
        })
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

export default MV
