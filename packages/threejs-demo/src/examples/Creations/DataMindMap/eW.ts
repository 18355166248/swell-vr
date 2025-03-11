import * as THREE from 'three'
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial.js'
import {LineGeometry} from 'three/examples/jsm/lines/LineGeometry.js'
import {Line2} from 'three/examples/jsm/lines/Line2.js'
import ln from './ln'
import {lU} from './uu-lu'
import {Qf, sf} from './utils'
import {EA} from './EA'
import {am} from './am'
import sm from './sm'
import lV from './lV'
import ZV from './ZV'
import TU from './TU'

const TD = LineMaterial
const YD = LineGeometry
const XD = Line2

async function uV(t, e = 'all') {
  if (!t.districtData) return
  const i =
      'bottomStroke' === e
        ? null
        : (function (t) {
            const {districtStyle: e} = t.state
            if (e.stroke && e.stroke.width) {
              const i = new TD({
                transparent: !0,
                color: new ln(e.stroke.color).getHex(),
                linewidth: e.stroke.width,
                opacity: e.stroke.opacity,
              })
              return (
                i.resolution.set(
                  t.gis.props.containerDom.clientWidth,
                  t.gis.props.containerDom.clientHeight,
                ),
                i
              )
            }
            return null
          })(t),
    n =
      'stroke' === e
        ? null
        : (function (t) {
            const {districtStyle: e} = t.state
            if (e.bottomStroke && e.stroke.width) {
              const i = new TD({
                transparent: !0,
                color: new ln(e.bottomStroke.color).getHex(),
                linewidth: e.bottomStroke.width,
                opacity: e.bottomStroke.opacity,
                dashed: !1,
              })
              return (
                i.resolution.set(
                  t.gis.props.containerDom.clientWidth,
                  t.gis.props.containerDom.clientHeight,
                ),
                i
              )
            }
            return null
          })(t)
  t.districtData.forEach(e => {
    e.geometry.coordinates.forEach(e => {
      ;(e => {
        let r
        const o = []
        for (let t = 0; t < e.length; t++) {
          const [i, n] = e[t]
          o.push(i, n, 0)
        }
        if (((i || n) && ((r = new YD()), r.setPositions(o)), i)) {
          const e = new XD(r, i)
          e.setRenderIndex(lU.BASE_MAP_LAYER_COUNTRY_STROKE),
            t.districtStrokeGroup.add(e)
        }
        if (n) {
          const e = new XD(r, n)
          e.setRenderIndex(lU.BASE_MAP_LAYER_BOTTOM_STROKE),
            t.districtBottomStrokeGroup.add(e)
        }
      })(e)
    })
  })
}

function cV(t, e) {
  if (sf(t, 'stroke')) {
    const i = EA(t.stroke.color)
    0 === e.districtStrokeGroup.children.length
      ? uV(e, 'stroke')
      : e.districtStrokeGroup.children.forEach(e => {
          const n = e.material
          n &&
            ((n.color = i.color),
            (n.opacity = DA(i, t.stroke.opacity)),
            (n.linewidth = t.stroke.width))
        })
  }
}
function hV(t, e) {
  if (sf(t, 'bottomStroke')) {
    const i = EA(t.bottomStroke.color)
    0 === e.districtBottomStrokeGroup.children.length
      ? uV(e, 'bottomStroke')
      : e.districtBottomStrokeGroup.children.forEach(e => {
          const n = e.material
          ;(n.color = i.color),
            (n.opacity = DA(i, t.bottomStroke.opacity)),
            (n.linewidth = t.bottomStroke.width)
        })
  }
}
function pV(t) {
  const e = t[0],
    i = t[1],
    n = t[2]
  return Math.sqrt(e * e + i * i + n * n)
}
function dV(t, e, i) {
  return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t
}
function fV(t, e) {
  const i = e[0],
    n = e[1],
    r = e[2]
  let o = i * i + n * n + r * r
  return (
    o > 0 &&
      ((o = 1 / Math.sqrt(o)),
      (t[0] = e[0] * o),
      (t[1] = e[1] * o),
      (t[2] = e[2] * o)),
    t
  )
}
function gV(t, e, i, n = [], r = !0) {
  const o = [],
    a = []
  return (
    dV(o, i, e),
    dV(a, t, e),
    (function (t, e, i) {
      const n = e[0],
        r = e[1],
        o = e[2],
        a = i[0],
        s = i[1],
        l = i[2]
      ;(t[0] = r * l - o * s), (t[1] = o * a - n * l), (t[2] = n * s - r * a)
    })(n, o, a),
    r && fV(n, n),
    n
  )
}
function mV(t, e, i, n) {
  let r = 0
  for (let o = e, a = i - n; o < i; o += n)
    (r += (t[a] - t[o]) * (t[o + 1] + t[a + 1])), (a = o)
  return r > 0
}
function yV(t, e) {
  const {coordinates: i, bbox: n, height: r} = e,
    {vertices: o, holes: a, dimensions: s} = _l.flatten(i),
    l = _l.default(o, a, s),
    {index: u, position: c, normal: h, uv: p} = t,
    d = n[2] - n[0],
    f = n[3] - n[1],
    g = c.length / 3
  let m
  const y = []
  for (m = 0; m < o.length; m += s)
    (y[0] = +Math.round(o[m])),
      (y[1] = +Math.round(o[m + 1])),
      (y[2] = +Math.round(r)),
      c.push(...y),
      p.push((+y[0] - n[0]) / d, (+y[1] - n[1]) / f),
      h.push(0, 0, 0)
  let v, b, x
  const _ = [],
    S = [],
    M = [],
    C = []
  for (m = 2; m < l.length; m += 3)
    (v = l[m - 2] + g),
      (b = l[m - 1] + g),
      (x = l[m] + g),
      u.push(v, b, x),
      (v *= 3),
      (_[0] = c[v]),
      (_[1] = c[v + 1]),
      (_[2] = c[v + 2]),
      (b *= 3),
      (S[0] = c[b]),
      (S[1] = c[b + 1]),
      (S[2] = c[b + 2]),
      (x *= 3),
      (M[0] = c[x]),
      (M[1] = c[x + 1]),
      (M[2] = c[x + 2]),
      gV(_, S, M, C, !1),
      (h[v] += C[0]),
      (h[v + 1] += C[1]),
      (h[v + 2] += C[2]),
      (h[b] += C[0]),
      (h[b + 1] += C[1]),
      (h[b + 2] += C[2]),
      (h[x] += C[0]),
      (h[x + 1] += C[1]),
      (h[x + 2] += C[2])
  for (m = 3 * g; m < h.length; m += 3)
    (C[0] = h[m]),
      (C[1] = h[m + 1]),
      (C[2] = h[m + 2]),
      fV(C, C),
      ([h[m], h[m + 1], h[m + 2]] = C)
}
function vV(t, e) {
  const {coordinates: i, height: n} = e,
    {vertices: r, holes: o, dimensions: a} = _l.flatten(i),
    {index: s, position: l, normal: u, uv: c} = t,
    h = [],
    p = [],
    d = [],
    f = [],
    g = [],
    m = [],
    y = [],
    v = [],
    b = [],
    x = l.length / 3
  let _, S
  for (_ = 0; _ < r.length; _ += a)
    (y[0] = +Math.round(r[_])),
      (y[1] = +Math.round(r[_ + 1])),
      (y[2] = +Math.round(n)),
      l.push(...y),
      u.push(0, 0, 0),
      (y[2] = 0),
      l.push(...y),
      u.push(0, 0, 0)
  const M = o && o.length > 0 ? o[0] : r.length / a
  let C, w
  b.push([0, M])
  const A = o.length
  for (_ = 0; _ < A; _++)
    (C = o[_]), (w = _ < A - 1 ? o[_ + 1] : r.length / a), b.push([C, w])
  let E, D, T
  for (_ = 0; _ < b.length; _++) {
    ;([C, w] = b[_]), (D = 0 === _), (E = 0)
    if (D === mV(r, C * a, w * a, a))
      for (S = C + 1; S < w; S++)
        (T = 2 * (S - 1) + x),
          (T *= 3),
          (h[0] = l[T]),
          (h[1] = l[T + 1]),
          (h[2] = l[T + 2]),
          (p[0] = l[T + 3]),
          (p[1] = l[T + 4]),
          (p[2] = l[T + 5]),
          (T = 2 * S + x),
          (T *= 3),
          (d[0] = l[T]),
          (d[1] = l[T + 1]),
          (d[2] = l[T + 2]),
          (f[0] = l[T + 3]),
          (f[1] = l[T + 4]),
          (f[2] = l[T + 5]),
          (T = 2 * (S - 1) + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          (E += pV(dV(v, f, p))),
          (T = 2 * S + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          gV(p, f, h, g, !1),
          gV(f, d, h, m, !1),
          (T = 2 * (S - 1) + x),
          (T *= 3),
          (u[T] += g[0] + m[0]),
          (u[T + 1] += g[1] + m[1]),
          (u[T + 2] += g[2] + m[2]),
          (u[T + 3] += g[0]),
          (u[T + 4] += g[1]),
          (u[T + 5] += g[2]),
          (T = 2 * S + x),
          (T *= 3),
          (u[T] += m[0]),
          (u[T + 1] += m[1]),
          (u[T + 2] += m[2]),
          (u[T + 3] += g[0] + m[0]),
          (u[T + 4] += g[1] + m[1]),
          (u[T + 5] += g[2] + m[2]),
          (T = 2 * (S - 1) + x),
          s.push(T + 1, T + 3, T),
          s.push(T + 3, T + 2, T)
    else
      for (S = w - 2; S >= C; S--)
        (T = 2 * (S + 1) + x),
          (T *= 3),
          (h[0] = l[T]),
          (h[1] = l[T + 1]),
          (h[2] = l[T + 2]),
          (p[0] = l[T + 3]),
          (p[1] = l[T + 4]),
          (p[2] = l[T + 5]),
          (T = 2 * S + x),
          (T *= 3),
          (d[0] = l[T]),
          (d[1] = l[T + 1]),
          (d[2] = l[T + 2]),
          (f[0] = l[T + 3]),
          (f[1] = l[T + 4]),
          (f[2] = l[T + 5]),
          (T = 2 * (S + 1) + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          (E += pV(dV(v, f, p))),
          (T = 2 * S + x),
          (T *= 2),
          (c[T] = E),
          (c[T + 1] = 1),
          (c[T + 2] = E),
          (c[T + 3] = 0),
          gV(p, f, h, g, !1),
          gV(f, d, h, m, !1),
          (T = 2 * (S + 1) + x),
          (T *= 3),
          (u[T] += g[0] + m[0]),
          (u[T + 1] += g[1] + m[1]),
          (u[T + 2] += g[2] + m[2]),
          (u[T + 3] += g[0]),
          (u[T + 4] += g[1]),
          (u[T + 5] += g[2]),
          (T = 2 * S + x),
          (T *= 3),
          (u[T] += m[0]),
          (u[T + 1] += m[1]),
          (u[T + 2] += m[2]),
          (u[T + 3] += g[0] + m[0]),
          (u[T + 4] += g[1] + m[1]),
          (u[T + 5] += g[2] + m[2]),
          (T = 2 * (S + 1) + x),
          s.push(T + 1, T - 1, T),
          s.push(T - 1, T - 2, T)
  }
  for (_ = 3 * x; _ < u.length; _ += 3)
    (g[0] = u[_]),
      (g[1] = u[_ + 1]),
      (g[2] = u[_ + 2]),
      fV(g, g),
      ([u[_], u[_ + 1], u[_ + 2]] = g)
}
function bV(t, e) {
  const i = {
      index: [],
      position: [],
      normal: [],
      uv: [],
    },
    n = {
      index: [],
      position: [],
      normal: [],
      uv: [],
    }
  let r, o, a
  for (r = 0; r < t.features.length; r++) {
    ;(o = t.features[r]), (a = o.geometry.coordinates)
    yV(i, {
      coordinates: a,
      bbox: e,
      height: 1,
    })
    vV(n, {
      coordinates: a,
      bbox: e,
      height: 1,
    })
  }
  const s = {
    index: [],
    position: [],
    normal: [],
    uv: [],
    group: [],
  }
  return xV(0, s, i), xV(1, s, n), s
}
function xV(t, e, i) {
  _V(e, i, 'index'),
    _V(e, i, 'position'),
    _V(e, i, 'normal'),
    _V(e, i, 'uv'),
    e.group.push(t, i.index.length, i.position.length / 3)
}
function _V(t, e, i) {
  for (let n = 0; n < e[i].length; n++) t[i].push(e[i][n])
}

function tW(t) {
  let e, i, n
  try {
    const {drill: r, data: o} = t.state,
      a = r.enabled && r.data
    if (a)
      if (0 === t.currentLevel) {
        const e =
          !!o.region &&
          Object.values(o.region).find(e => e.adcode === t.currentCode)
        e
          ? ((t.rawDistrictData = o[e.adcode].rawDistrictData),
            (t.districtData = o[e.adcode].districtData),
            (t.currentRegion = e.adcode))
          : ((t.rawDistrictData = o.district.__geojson__.features),
            (t.districtData = o.district.__geojson_process_proj__.features))
      } else
        (t.rawDistrictData = [
          t.drillData.default[t.currentParentLevel]
            .get(t.currentParentCode)
            .find(e => e.properties.id === t.currentCode),
        ]),
          (t.districtData = sm(
            lV({
              type: 'FeatureCollection',
              features: t.rawDistrictData,
            }),
            Qf,
          ).features)
    else
      (null == (e = o.district) ? void 0 : e.data) &&
        ((t.districtData = o.district.__geojson_process_proj__.features),
        (t.rawDistrictData = o.district.__geojson__.features))
    if (a) {
      t.rawSubDistrictData = t.drillData.default[t.currentLevel].get(
        t.currentCode,
      )
      let e = {
        type: 'FeatureCollection',
        features: t.rawSubDistrictData,
      }
      const n =
        null == (i = t.state.drill.data[t.currentLevel]) ? void 0 : i.simplify
      ;(null == n ? void 0 : n.enabled) && (e = am.simplify(e, n.tolerance)),
        (t.subDistrictData = sm(lV(e), Qf).features)
    } else
      (null == (n = o.subDistrict) ? void 0 : n.data) &&
        ((t.subDistrictData = o.subDistrict.__geojson_process_proj__.features),
        (t.rawSubDistrictData = o.subDistrict.__geojson__.features))
  } catch (r) {
    throw ((t.isDrilling = !1), new Error('地图数据生成失败'))
  }
}

async function $V(t) {
  try {
    const {drill: e, data: i} = t.state
    e.enabled && e.data
      ? await (async function (t) {
          const {drill: e} = t.state
          ;(t.drillData = await (async function (t, e, i) {
            const n = []
            for (let r = e[0]; r <= e[1]; r++) {
              const e = t[String(r)]
              if (e) {
                const {data: t, type: i} = e
                let r = t
                switch (i) {
                  case xk.GEOJSON:
                    n.push(
                      new Promise(e => {
                        e(t)
                      }),
                    )
                    break
                  case xk.GEOBUF_URL:
                    ;(r = t), n.push(XV.getGeoBuf2GeoJsonByUrl(r))
                    break
                  case xk.GEOJSON_URL:
                    ;(r = t), n.push(XV.getGeoJsonByUrl(r))
                    break
                  case xk.GEOBUF:
                  default:
                    console.error('[xGis]', `地图数据 url ${r} 格式无法解析`)
                }
              } else
                3 === r ||
                  console.error(
                    '[xGis]',
                    `钻取地图 level ${r} 无法匹配对应数据`,
                  )
            }
            return Promise.all(n)
              .then(t => {
                const n = (function (t, e, i) {
                  const n = {
                    default: [],
                    process: [],
                  }
                  if (
                    (t.forEach((e, r) => {
                      const o = new Map()
                      let a = new Map()
                      const s = i[String(r)]
                      if (s <= r)
                        console.error(
                          '[xGis]',
                          `配置 granularity ${s} 必须大于 level ${r} `,
                        )
                      else {
                        let i
                        switch (r) {
                          case 0:
                            switch ((o.set(Mk, t[0].features), s)) {
                              case 1:
                                ;(i = t[0]), a.set(Mk, i.features)
                                break
                              case 2:
                                const e = []
                                ;(i = t[1]),
                                  i.features.forEach(i => {
                                    const n = i.properties.parent
                                    if (Lk.includes(n)) {
                                      const i = t[0].features.find(
                                        t => t.properties.id === n,
                                      )
                                      e.find(
                                        t =>
                                          t.properties.id === i.properties.id,
                                      ) || e.push(i)
                                    } else e.push(i)
                                  }),
                                  a.set(Mk, e)
                                break
                              default:
                                ;(i = t[2]), a.set(Mk, i.features)
                            }
                            break
                          case 1:
                            if (
                              ((i = t[s - 1]),
                              e.features.forEach(t => {
                                const e = t.properties.parent,
                                  i = o.get(e)
                                Array.isArray(i) ? i.push(t) : o.set(e, [t])
                              }),
                              2 === s)
                            )
                              a = o
                            else
                              i &&
                                e.features.forEach(t => {
                                  const e = t.properties.parent
                                  let n = a.get(e)
                                  Array.isArray(n) || a.set(e, []),
                                    (n = a.get(e)),
                                    Lk.includes(e)
                                      ? n.push(t)
                                      : i.features.forEach(t => {
                                          const i = t.properties.acroutes
                                          if (i) {
                                            i.split(',')[1] === e && n.push(t)
                                          }
                                        })
                                })
                            break
                          case 2:
                            e.features.forEach(t => {
                              const e = t.properties.parent,
                                i = o.get(e)
                              Array.isArray(i) ? i.push(t) : o.set(e, [t])
                            }),
                              (a = o)
                            break
                          default:
                            console.error(
                              '[xGis]',
                              '钻取地图 数据 data 超出三级结构',
                            )
                        }
                      }
                      n.default.push(o), n.process.push(a)
                    }),
                    t[1] && t[2] && 3 === e[e.length - 1])
                  ) {
                    const e = new Map()
                    let i = new Map()
                    t[1].features.forEach(t => {
                      if (Lk.includes(t.properties.parent)) {
                        const i = t.properties.id,
                          n = e.get(i)
                        Array.isArray(n)
                          ? n.push(t)
                          : e.set(t.properties.id, [t])
                      }
                    }),
                      t[2].features.forEach(t => {
                        const i = t.properties.id,
                          n = e.get(i)
                        Array.isArray(n) ? n.push(t) : e.set(i, [t])
                      }),
                      (i = e),
                      n.default.push(e),
                      n.process.push(i)
                  }
                  return n
                })(t, e, i)
                return n
              })
              .catch(
                t => (
                  console.error('[xGis]', t),
                  {
                    default: [],
                    process: [],
                  }
                ),
              )
          })(e.data, e.level.range, e.granularity)),
            (t.currentCode = e.level.adcode),
            (t.currentLevel = qV(t.drillData, t.currentCode))
          const i = XV.getParentInfoByAdCode(t.currentCode, t.gis)
          ;(t.currentParentLevel = i.level), (t.currentParentCode = i.adcode)
        })(t)
      : await ZV(null == i ? void 0 : i.subDistrict),
      i.district ||
        (i.district = {
          type: xk.GEOJSON,
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: am.dissolve(i.subDistrict.__raw_geojson__),
              },
            ],
          },
        }),
      await ZV(null == i ? void 0 : i.district),
      (async function (t) {
        const {
            data: {region: e, subDistrict: i},
            drill: {data: n, granularity: r, enabled: o},
          } = t.state,
          a = o && n
        e &&
          Object.values(e).forEach(e => {
            let n, o, s, l, u
            if (a) {
              if (
                ((u = t.drillData.default[0]
                  .get(Mk)
                  .filter(t => e.child.includes(t.properties.id))),
                u.length > 0)
              ) {
                let i
                switch (r.region) {
                  case 1:
                    i = u
                    break
                  case 2:
                    const n = []
                    for (const [i, o] of t.drillData.default[1].entries())
                      e.child.includes(i) &&
                        (Lk.includes(i)
                          ? n.push(
                              t.drillData.default[0]
                                .get(Mk)
                                .find(t => t.properties.id === i),
                            )
                          : n.push(...o))
                    i = n
                    break
                  case 3:
                    const r = []
                    for (const [i, o] of t.drillData.default[2].entries()) {
                      const t = o[0].properties.acroutes
                      if (t) {
                        const i = t.split(',')[1]
                        e.child.includes(i) && r.push(...o)
                      }
                    }
                    i = r
                }
                t.drillData.default[0].set(e.adcode, u),
                  t.drillData.process[0].set(e.adcode, i)
                const a = t.drillData.process[0].get(e.adcode)
                ;(n = [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: am.dissolve(a),
                  },
                ]),
                  (o = sm(
                    lV({
                      type: 'FeatureCollection',
                      features: n,
                    }),
                    Qf,
                  ).features),
                  (s = t.drillData.process[0].get(e.adcode)),
                  (l = sm(
                    lV({
                      type: 'FeatureCollection',
                      features: s,
                    }),
                    Qf,
                  ).features)
              }
            } else if (
              ((u = i.__geojson__.features.filter(t =>
                e.child.includes(t.properties.id),
              )),
              u.length > 0)
            ) {
              const i = u
              t.drillData.default[0].set(e.adcode, u),
                t.drillData.process[0].set(e.adcode, i),
                (n = [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: am.dissolve(i),
                  },
                ]),
                (o = sm(
                  lV({
                    type: 'FeatureCollection',
                    features: n,
                  }),
                  Qf,
                ).features),
                (s = i),
                (l = sm(
                  lV({
                    type: 'FeatureCollection',
                    features: s,
                  }),
                  Qf,
                ).features)
            }
            u.length > 0 &&
              (t.state = af(t.state, {
                data: {
                  [e.adcode]: {
                    districtData: o,
                    rawDistrictData: n,
                    subDistrictData: l,
                    rawSubDistrictData: s,
                  },
                },
              }))
          })
      })(t)
  } catch (e) {
    throw new Error('地图数据加载失败')
  }
}

const oV = class {
  constructor(t, e) {
    ;(this.gis = t),
      (this.props = e),
      (this.animation = new TU()),
      (this.ee = new dt()),
      (this.scaleService = HH),
      (this.listenerObj = new As()),
      (this.comboTimeout = 200),
      (this.activeArr = []),
      (this.handleDblclick = t => {
        clearTimeout(this.comboTimer),
          (this.comboTimer = setTimeout(() => {
            this.comboTimer = null
          }, this.comboTimeout))
      }),
      this._baseLayerinit()
    const {containerDom: i} = this.gis.props
    i.addEventListener('dblclick', this.handleDblclick, !1)
  }
  _baseLayerinit() {
    ;(this.group = new As()),
      (this.group.userData.isRootLayer = !0),
      (this.group.userData.invertedRelection = !1),
      (this.id = this.group.uuid),
      (this.dataView = new ak(this.gis.dataSet, {})),
      (this.textureManager = Yd(this.textureService.getTextureManager)(
        this.id,
      )),
      (this._propsWatch = kf.createPropsWatch()),
      this._initPropsWatchRule()
  }
  _initialState(t) {
    this.state = af(t, this.props)
  }
  _initLayerGroup(t) {
    const {
        layerName: e,
        layerType: i,
        coreGroup: n,
        label: r = {},
        isHudScene: o = !1,
      } = t,
      {enabled: a = !1, markerType: s = 'css2d'} = r,
      {sceneSystem: l, layerManager: u} = this.gis
    ;(this.layerType = i),
      o ? l.hudScene.add(this.group) : l.coreScene.add(this.group),
      (this.group.name = e),
      (this.coreGroup = null != n ? n : new As()),
      (this.coreGroup.name = `core-${e}`),
      this.group.add(this.coreGroup),
      (this.poiGroup = new eV()),
      (this.poiGroup.name = `${e}-poi-layer`),
      l.hudScene.add(this.poiGroup),
      u.add({
        layerType: i,
        layer: this,
      }),
      a &&
        this.gis.eventManager.ee.emit('markerEnabled', {
          markerType: s,
        }),
      this.updateBaseHeight()
  }
  _getParseData(t) {
    const {rawData: e, layerType: i, coordsField: n} = t,
      {clipMode: r} = this.state,
      {globalOpts: o} = this.gis,
      {boundary: a} = o,
      s = Yw(e[0]) ? 'geojson' : 'bytejson',
      l = !(!r || r === Qw.none),
      u = this.dataView
        .parse(e, {
          type: s,
          options: {
            layerType: i,
            coordsField: n,
          },
        })
        .transform({
          type: 'filter',
          options: {
            callback: l && (t => Kw(t, a.features[0], r, i)),
          },
        })
        .transform({
          type: 'webgis',
          options: {
            as: 'coordinates',
          },
        }).latestData
    return this.state.parseData.push(...u), this
  }
  _getScaleData(t) {
    const {parseData: e} = this.state
    return (this.state.scaleData = this.scaleService.apply(t, e)), this
  }
  _getRenderData(t) {}
  add(t) {
    return this
  }
  remove() {
    this._destroy()
  }
  set(t) {
    return this._propsWatch.compare(this.state, t), this
  }
  get() {
    return this.state
  }
  updateArea(t) {
    this.updateBaseHeight(), this._updateOffset(this.state.common.offset)
  }
  updateBaseHeight() {
    const {globalOpts: t} = this.gis
    if (t) {
      const e = t.bboxOption.baseHeight
      this.coreGroup.position.setZ(e),
        this.poiGroup.updateBaseHeight(e),
        this._updatePOI(!0)
    }
  }
  setContainer(t) {
    this.container = t
  }
  getContainer() {
    return this.container
  }
  clear() {
    this.clearCoreGroup(),
      this.clearPoiGroup(),
      this.clearInteractionGroup(),
      this._clearData()
  }
  clearCoreGroup() {
    this.coreGroup.destroy(!1)
  }
  clearPoiGroup() {
    this.poiGroup.abort(), this.poiGroup.destroy(!1)
  }
  clearInteractionGroup() {
    this.unActive()
  }
  _clearData() {
    ;(this.dataView.latestData = null),
      (this.state.data = []),
      (this.state.parseData = []),
      (this.state.scaleData = []),
      (this.state.renderData = [])
  }
  _destroy() {
    let t
    const {sceneSystem: e, layerManager: i} = this.gis,
      {containerDom: n} = this.gis.props
    n.removeEventListener('dblclick', this.handleDblclick),
      this.clear(),
      i.__removePure({
        layerID: this.id,
      }),
      this.dataView.destroy(),
      this.textureService.removeTextureManager(this.id),
      null == (t = e.coreScene) || t.remove(this.group),
      this.ee.removeAllListeners(),
      (this._propsWatch = null)
  }
  on(t, e, i) {
    Fk(t) || this.gis.eventManager.bindEvent(this.id, t), this.ee.on(t, e, i)
  }
  off(t, e) {
    Fk(t) || this.gis.eventManager.removeMapEvent(this.id, t),
      this.ee.removeListener(t),
      e && e()
  }
  rotate(t, e) {
    switch (t) {
      case 'x':
        this.group.rotateX(De(e))
        break
      case 'y':
        this.group.rotateY(De(e))
        break
      case 'z':
        this.group.rotateZ(De(e))
    }
  }
  handleAnimation(t) {}
  emitPropsWatch(t = {}) {
    this._propsWatch.compare(t, this.state)
  }
  _initPropsWatchRule() {
    this._propsWatch.addWatch([
      this._propsWatch.defaultRule('', 'always', t => {
        this.state = af(this.state, t)
      }),
      this._propsWatch.defaultRule(['common', 'offset'], 'diff', t => {
        cf(t.common.offset) && this._updateOffset(t.common.offset)
      }),
      this._propsWatch.defaultRule(['common', 'visible'], 'diff', t => {
        sf(t.common, 'visible') && this._updateVisible(t.common.visible)
      }),
      this._propsWatch.defaultRule(['common', 'zIndex'], 'diff', t => {
        sf(t.common, 'zIndex') && this._updateZIndex(t.common.zIndex)
      }),
      this._propsWatch.defaultRule(['common', 'zoomRange'], 'diff', t => {
        sf(t.common, 'zoomRange') && this._updateZoomRange(t.common.zoomRange)
      }),
      this._propsWatch.defaultRule('interaction', 'diffDeep', () => {
        this._updateInteraction(this.state.interaction)
      }),
    ])
  }
  _updateOffset(t) {
    const [e, i, n] = t,
      {globalOpts: r} = this.gis,
      {size: o} = r.bboxOption,
      a = TA(o.bboxSize, e),
      s = TA(o.bboxSize, i),
      l = TA(o.bboxSize, n)
    this.extensions &&
      Object.values(this.extensions).forEach(t => {
        t.group.position.setX(a),
          t.group.position.setY(s),
          t.group.position.setZ(l),
          t._updatePOI(!0)
      }),
      this.group.position.setX(a),
      this.group.position.setY(s),
      this.group.position.setZ(l),
      this._updatePOI(!0)
  }
  _updateVisible(t) {
    this.extensions &&
      Object.values(this.extensions).forEach(e => {
        e.group.visible = !!t && e.state.common.visible
      }),
      'marker-layer' === this.group.name &&
        requestAnimationFrame(() => {
          const e = `data-layerid="${this.id}"`
          document.querySelectorAll(`[${e}]`).forEach(e => {
            e.firstChild.style.display = t ? 'block' : 'none'
          })
        }),
      (this.group.visible = t),
      (this.poiGroup.visible = t)
  }
  _updateZoomRange(t) {
    this.extensions &&
      Object.values(this.extensions).forEach(e => {
        ;(e.group.ext.zoomRange = t), (e.poiGroup.ext.zoomRange = t)
      }),
      (this.group.ext.zoomRange = t),
      (this.poiGroup.ext.zoomRange = t)
  }
  _updateZIndex(t) {
    this.extensions &&
      Object.values(this.extensions).forEach(e => {
        e.group.zIndex = null != t ? t : e.group.zIndex
      }),
      'marker-layer' === this.group.name &&
        requestAnimationFrame(() => {
          const e = `data-layerid="${this.id}"`
          document.querySelectorAll(`[${e}]`).forEach(e => {
            e.style.zIndex = t + ''
          })
        }),
      (this.group.zIndex = null != t ? t : this.group.zIndex)
  }
  _updateInteraction(t) {
    if (((this.interaction = t), !this.interaction)) return
    const {hover: e, select: i} = this.interaction
    ;[e, i].forEach(t => {
      t.enabled
        ? this.gis.eventManager.bindEvent(this.id, t.trigger)
        : this.gis.eventManager.removeMapEvent(this.id, t.trigger)
    })
  }
  registerInteraction(t = this.state.interaction, e = this.coreGroup, i = !1) {
    ;(this.interaction = t), (this.listenerObj = e), (this.recursive = i)
  }
  active(t) {
    const {
      type: e,
      object: i,
      id: n,
      instanceId: r,
      name: o,
      color: a,
      multi: s,
    } = t
    return cf(n) || cf(o)
      ? (o
          ? o instanceof Array
            ? o.forEach(t => {
                this._activeAtomic({
                  name: t,
                  object: i,
                  color: a,
                  type: e,
                  multi: s,
                })
              })
            : this._activeAtomic({
                name: o,
                object: i,
                color: a,
                type: e,
                multi: s,
              })
          : n instanceof Array
          ? n.forEach(t => {
              this._activeAtomic({
                id: t,
                object: i,
                color: a,
                type: e,
                instanceId: r,
                multi: s,
              })
            })
          : this._activeAtomic({
              id: n,
              object: i,
              color: a,
              type: e,
              instanceId: r,
              multi: s,
            }),
        this)
      : (this.logService.error('active 需要 传入 id 或 name'), this)
  }
  _activeAtomic(t) {
    const {object: e} = t
    e && e.isInstancedMesh
      ? this._activeInstanceAtomic(t)
      : this._activeMeshAtomic(t)
  }
  _activeInstanceAtomic(t) {
    const {
      color: e,
      type: i,
      object: n,
      instanceId: r,
      id: o,
      name: a,
      multi: s,
    } = t
    n.ext.activeArr || (n.ext.activeArr = [])
    const l = n.ext.activeArr.findIndex(t => t.isActive && t.instanceId === r)
    if (-1 != l) {
      const t = n.ext.activeArr[l]
      if ('select' === t.type && 'hover' === i) return
      if ('select' === t.type && 'select' === i) {
        const {instanceId: e, rawColor: i} = t
        return (
          ZD(n.geometry.attributes.color, e, i),
          (n.ext.activeArr[l].type = ''),
          (n.ext.activeArr[l].activeColor = ''),
          void (n.ext.activeArr[l].isActive = !1)
        )
      }
    }
    'hover' === i &&
      this.unActive({
        type: 'hover',
      }),
      'select' === i &&
        !0 !== s &&
        this.unActive({
          type: 'select',
        })
    const u = n.ext.activeArr.findIndex(t => t.instanceId === r)
    let c
    if (-1 === u) {
      const {color: t} = n.geometry.attributes,
        {array: o, itemSize: a} = t
      ;(c = Array.from(o).slice(r * a, r * a + a)),
        t.normalized && (c = c.map(t => t / 255)),
        n.ext.activeArr.push({
          rawColor: c,
          activeColor: e,
          instanceId: r,
          isActive: !0,
          type: i,
        })
    } else (n.ext.activeArr[u].type = i), (n.ext.activeArr[u].isActive = !0)
    if (isNaN(Number(e))) {
      const t = EA(e)
      ZD(n.geometry.attributes.color, r, [
        t.color.r,
        t.color.g,
        t.color.b,
        t.opacity,
      ])
    } else {
      const t = Number(e),
        i = n.ext.activeArr[u]
      ZD(n.geometry.attributes.color, r, [
        (null != c ? c : i.rawColor)[0] * t,
        (null != c ? c : i.rawColor)[1] * t,
        (null != c ? c : i.rawColor)[2] * t,
        (null != c ? c : i.rawColor)[3],
      ])
    }
    const h = {
      name: a,
      id: o,
      instanceId: r,
      object: n,
      type: i,
      meshs: [],
    }
    this.activeArr.push(h)
  }
  _activeMeshAtomic(t) {
    const {name: e, color: i, type: n, id: r, multi: o} = t,
      a = this.activeArr.findIndex(t =>
        t.meshs.find(t => JH(t, e, r) && t.ext.isActive),
      )
    if (-1 != a) {
      const t = this.activeArr[a]
      let i = !1
      if (
        (t.meshs.forEach(o => {
          'select' === o.ext.type && 'hover' === n
            ? (i = !0)
            : 'select' === o.ext.type &&
              'select' === n &&
              (this._unactiveAtomic({
                id: r,
                name: e,
                meshs: t.meshs,
              }),
              this.activeArr.splice(a, 1),
              (i = !0))
        }),
        i)
      )
        return
    }
    'hover' === n &&
      this.unActive({
        type: 'hover',
      }),
      'select' === n &&
        !0 !== o &&
        this.unActive({
          type: 'select',
        })
    const s = this.listenerObj.getObjectsByFn(t => JH(t, e, r))
    if (0 === s.length) return void this.logService.error('active mesh 不存在')
    const l = {
      name: e,
      id: r,
      meshs: [],
      type: n,
    }
    s.forEach(t => {
      const e = t,
        r = e.material
      ;(e.ext.type = n),
        (e.ext.isActive = !0),
        (e.ext.activeColor = i),
        e.ext.rawColor ||
          ((e.ext.rawColor = r.color.clone()),
          (e.ext.rawTransparent = r.transparent),
          (e.ext.rawOpacity = r.opacity))
      if (isNaN(Number(i))) {
        const t = EA(i)
        ;(r.color = t.color),
          (r.transparent = t.transparent),
          (r.opacity = t.opacity)
      } else {
        const t = Number(i),
          n = e.ext.rawColor.clone()
        r.color = n.multiplyScalar(t)
      }
      ;(r.needsUpdate = !0), l.meshs.push(t)
    }),
      this.activeArr.push(l)
  }
  unActive(t) {
    for (let e = this.activeArr.length - 1; e >= 0; e--) {
      const i = this.activeArr[e],
        n = i.object,
        r = i.type,
        o = i.meshs
      if (cf(null == t ? void 0 : t.id)) {
        const {id: i} = t
        i instanceof Array
          ? i.forEach(t => {
              t === n.id &&
                (this._unactiveAtomic({
                  id: t,
                  object: n,
                  meshs: o,
                }),
                this.activeArr.splice(e, 1))
            })
          : i === n.id &&
            (this._unactiveAtomic({
              id: i,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1))
      } else if (null == t ? void 0 : t.name) {
        const {name: i} = t
        i instanceof Array
          ? i.forEach(t => {
              t === n.name &&
                (this._unactiveAtomic({
                  name: t,
                  object: n,
                  meshs: o,
                }),
                this.activeArr.splice(e, 1))
            })
          : i === n.name &&
            (this._unactiveAtomic({
              name: i,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1))
      } else
        cf(null == t ? void 0 : t.type)
          ? t.type === r &&
            (this._unactiveAtomic({
              type: t.type,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1))
          : (this._unactiveAtomic({
              type: r,
              object: n,
              meshs: o,
            }),
            this.activeArr.splice(e, 1))
    }
    return this
  }
  _unactiveAtomic(t) {
    const {object: e} = t
    e && e.isInstancedMesh
      ? this._unactiveInstanceAtomic(t)
      : this._unactiveMeshAtomic(t)
  }
  _unactiveInstanceAtomic(t) {
    const {type: e, object: i} = t
    for (let n = i.ext.activeArr.length - 1; n >= 0; n--) {
      const t = i.ext.activeArr[n],
        {instanceId: r, isActive: o, rawColor: a} = t
      o &&
        e === t.type &&
        (ZD(i.geometry.attributes.color, r, a),
        (t.type = ''),
        (t.activeColor = ''),
        (t.isActive = !1))
    }
  }
  _unactiveMeshAtomic(t) {
    const {id: e, type: i, name: n, meshs: r} = t
    r.forEach(t => {
      if ((JH(t, n, e) || (!!i && t.ext.type === i)) && t.ext.isActive) {
        const e = t.material
        ;(e.color = t.ext.rawColor),
          (e.transparent = t.ext.rawTransparent),
          (e.opacity = t.ext.rawOpacity),
          (e.needsUpdate = !0),
          (t.ext.isActive = !1),
          (t.ext.activeColor = ''),
          (t.ext.type = '')
      }
    })
  }
  _updatePOI(t = !1) {
    const {poi: e, interaction: i} = this.state
    if (!e || !e.enabled) return
    const {cameraSystem: n} = this.gis,
      {coverEnable: r, hideOnMove: o} = e
    if (o && !t) return void (this.poiGroup.moving = !0)
    t && (this.poiGroup.moving = !1),
      this.group.updateWorldMatrix(!0, !1),
      n.coreCamera.updateWorldMatrix(!0, !1),
      this.poiGroup.updateTextPosition(this.group.matrixWorld, n)
    ;(i.hover.enabled && i.hover.effect.poi) ||
    (i.select.enabled && i.select.effect.poi)
      ? this.poiGroup.hide({
          each: !0,
        })
      : r || this.poiGroup.collision()
  }
  _mapSize(t, e) {
    const {globalOpts: i} = this.gis
    let n = 100
    switch (e) {
      case 'straightline':
        n = (t / 100) * i.layerFitValue.straightLineWidth
        break
      case 'flyline':
        n = (t / 100) * i.layerFitValue.flylineWidth
        break
      case 'z':
        n = (t / 100) * i.layerFitValue.z
        break
      default:
        n = (t / 100) * i.layerFitValue.xy
    }
    return n
  }
}

export class eW extends oV {
  constructor(t, e, i) {
    super(t, e),
      (this.gis = t),
      (this.props = e),
      (this.cb = i),
      (this.isDrilling = !1),
      (this.drillData = {
        default: [new Map()],
        process: [new Map()],
      }),
      (this.currentCode = Mk),
      (this.currentLevel = 0),
      (this.currentParentCode = null),
      (this.currentParentLevel = -1),
      (this.drillCache = {}),
      (this.subDistrictInfoArr = []),
      (this.currentRegion = null)
  }
  async init() {
    this._initialState(),
      this._initLayerGroup(),
      await this.__initMap(),
      this.gis.__destroyed ||
        (this.__initEvent(),
        this.animation.start(),
        super.registerInteraction(
          this.state.interaction,
          this.subDistrictFillGroup,
          !1,
        ),
        super.emitPropsWatch(),
        this.registerHeightScale(),
        this.ee.emit('loaded', this),
        this.cb())
  }
  _initialState() {
    super._initialState({})
  }
  _initLayerGroup() {
    super._initLayerGroup({
      layerName: 'base-map-layer',
      layerType: 'base',
    }),
      this.__releaseLayerGroup()
  }
  __initEvent() {
    const {drill: t} = this.state
    t.enabled &&
      (t.preventMouse ||
        (this.gis.eventManager.bindEvent(this.id, t.drillUpEvent),
        this.gis.eventManager.bindEvent(this.id, t.drillDownEvent)))
  }
  __releaseLayerGroup() {
    ;(this.districtStrokeGroup = new As()),
      (this.districtStrokeGroup.name = 'district-stroke'),
      (this.districtBottomStrokeGroup = new As()),
      (this.districtBottomStrokeGroup.name = 'district-bottom-stroke'),
      (this.districtFillGroup = new As()),
      (this.districtFillGroup.name = 'district-fill'),
      (this.extrudeBackgroundFillGroup = new As()),
      (this.extrudeBackgroundFillGroup.name = 'extrude-background-fill'),
      (this.subDistrictStrokeGroup = new As()),
      (this.subDistrictStrokeGroup.name = 'sub-district-stroke'),
      (this.subDistrictFillGroup = new As()),
      (this.subDistrictFillGroup.name = 'sub-district-fill'),
      (this.listenerObj = this.subDistrictFillGroup),
      this.coreGroup.add(
        this.districtStrokeGroup,
        this.districtBottomStrokeGroup,
        this.districtFillGroup,
        this.extrudeBackgroundFillGroup,
        this.subDistrictFillGroup,
        this.subDistrictStrokeGroup,
      ),
      (this.coreGroup.userData.invertedRelection = !0),
      (this.districtStrokeGroup.userData.invertedRelection = !1),
      (this.districtBottomStrokeGroup.userData.invertedRelection = !1),
      (this.districtFillGroup.userData.invertedRelection = !0),
      (this.extrudeBackgroundFillGroup.userData.invertedRelection = !0),
      (this.subDistrictFillGroup.userData.invertedRelection = !1),
      (this.subDistrictStrokeGroup.userData.invertedRelection = !1)
  }
  set(t) {
    return super.set(t), this
  }
  get() {
    return super.get()
  }
  add() {
    return this
  }
  remove() {
    super.remove()
  }
  updateArea(t) {
    const {cameraStatus: e} = this.gis.globalOpts,
      {
        drill: {duration: i},
      } = this.state,
      {cameraChange: n, cameraTween: r} = af(Ok, t)
    n &&
      this.gis.viewportSystem.setCameraState(
        e,
        r
          ? {
              duration: i,
              type: 'straight',
            }
          : void 0,
      ),
      this.updateBaseHeight(),
      this._updatePOI(!0)
  }
  async initExtrude() {
    const {bboxOption: t, boundary: e, boundaryProj: i} = this.gis.globalOpts,
      {districtStyle: n, extrudeBackgroundStyle: r} = this.state
    if (
      (n &&
        n.enabled &&
        (function (t, e) {
          const {geojson: i, bboxOption: n} = t,
            r = bV(i, n.bboxProj)
          let o = 0,
            a = 0,
            s = 0,
            l = 0
          const u = n.baseHeight ? n.baseHeight : 1
          for (let c = 0; c < r.group.length; c += 3)
            switch (
              ((o += s),
              (a += l),
              (s = r.group[c + 1]),
              (l = r.group[c + 2]),
              r.group[c])
            ) {
              case 0:
                const t = RV({
                    index: r.index.slice(o, 1 * (o + s)),
                    position: r.position.slice(3 * a, 3 * (a + l)),
                    normal: r.normal.slice(3 * a, 3 * (a + l)),
                    uv: r.uv.slice(2 * a, 2 * (a + l)),
                  }),
                  i = new Wn(t, e.extrudeTopMaterial)
                i.setRenderIndex(lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                  (i.scale.z = u),
                  (i.position.z = 0),
                  (i.userData.faceType = 'top'),
                  (i.name = 'map-top'),
                  (i.frustumCulled = !1),
                  e.districtFillGroup.add(i)
                const n = new Wn(t, e.extrudeInnerShadowMaterial)
                n.setRenderIndex(lU.BASE_MAP_LAYER_INNERSHADOW_MESH),
                  (n.scale.z = 1.01 * u),
                  (n.position.z = 0),
                  (n.userData.faceType = 'map-innerShadow'),
                  (n.name = 'map-innerShadow'),
                  (n.frustumCulled = !1),
                  e.districtFillGroup.add(n)
                break
              case 1:
                const c = RV({
                    index: r.index.slice(o, 1 * (o + s)),
                    position: r.position.slice(3 * a, 3 * (a + l)),
                    normal: r.normal.slice(3 * a, 3 * (a + l)),
                    uv: r.uv.slice(2 * a, 2 * (a + l)),
                  }),
                  h = new Wn(c, e.extrudeSideMaterial)
                h.setRenderIndex(lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                  (h.scale.z = u),
                  (h.position.z = 0),
                  (h.name = 'map-side'),
                  (h.userData.faceType = 'side'),
                  (h.userData.invertedRelection = !0),
                  (h.castShadow = !0),
                  (h.frustumCulled = !1),
                  e.districtFillGroup.add(h)
            }
        })(
          {
            geojson: i,
            bboxOption: t,
          },
          this,
        ),
      r && r.enabled)
    ) {
      if (!this.bgGeoData) {
        const t = {
          type: xk.GEOBUF_URL,
          data: `https://lf3-dpfe.${atob(
            'Ynl0ZXRvcy5jb20=',
          )}/obj/gis/data/worldborderworldborder_gc.pbf`,
        }
        this.bgGeoData = await ZV(t, {
          useProcess: !1,
          useProject: !1,
        })
      }
      const i = UV(t, this),
        n = (function (t, e, i) {
          const {bbox2: n} = t,
            r = Ww.intersect(
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Polygon',
                  coordinates: [
                    [
                      [n[0], n[1]],
                      [n[2], n[1]],
                      [n[2], n[3]],
                      [n[0], n[3]],
                      [n[0], n[1]],
                    ],
                  ],
                },
              },
              e.__geojson__.features[0],
            )
          let o = {
            type: 'FeatureCollection',
            features: [r],
          }
          o = am.rewind(o)
          const a = Ww.distance(
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [t.bbox[0], t.bbox[1]],
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [t.bbox[2], t.bbox[3]],
                },
              },
              {
                units: 'meters',
              },
            ),
            s = Ww.buffer(i.features[0], ~~(0.001 * a), {
              units: 'meters',
              steps: 1,
            })
          return (
            (o = {
              type: 'FeatureCollection',
              features: [Ww.difference(r, s)],
            }),
            sm(lV(o), Qf)
          )
        })(i, this.bgGeoData, e)
      !(function (t, e) {
        const {geojson: i, bboxOption: n} = t,
          r = bV(i, n.bboxProj)
        let o = 0,
          a = 0,
          s = 0,
          l = 0
        for (let u = 0; u < r.group.length; u += 3)
          switch (
            ((o += s),
            (a += l),
            (s = r.group[u + 1]),
            (l = r.group[u + 2]),
            r.group[u])
          ) {
            case 0:
              const t = RV({
                  index: r.index.slice(o, 1 * (o + s)),
                  position: r.position.slice(3 * a, 3 * (a + l)),
                  normal: r.normal.slice(3 * a, 3 * (a + l)),
                  uv: r.uv.slice(2 * a, 2 * (a + l)),
                }),
                i = new Wn(t, e.extrudeBackgroundTopMaterial)
              i.setRenderIndex(lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                (i.scale.z = n.baseHeight ? n.baseHeight : 1),
                (i.position.z = 0),
                (i.userData.faceType = 'top'),
                (i.name = 'map-top'),
                (i.receiveShadow = !0),
                (i.frustumCulled = !1),
                e.extrudeBackgroundFillGroup.add(i)
              break
            case 1:
              const u = RV({
                  index: r.index.slice(o, 1 * (o + s)),
                  position: r.position.slice(3 * a, 3 * (a + l)),
                  normal: r.normal.slice(3 * a, 3 * (a + l)),
                  uv: r.uv.slice(2 * a, 2 * (a + l)),
                }),
                c = new Wn(u, e.extrudeBackgroundSideMaterial)
              c.setRenderIndex(lU.BASE_MAP_LAYER_EXTRUDE_MESH),
                (c.scale.z = n.baseHeight ? n.baseHeight : 1),
                (c.position.z = 0),
                (c.name = 'map-side'),
                (c.userData.faceType = 'side'),
                (c.userData.invertedRelection = !0),
                (c.castShadow = !0),
                (c.frustumCulled = !1),
                e.extrudeBackgroundFillGroup.add(c)
          }
      })(
        {
          geojson: n,
          bboxOption: i,
        },
        this,
      )
    }
  }
  async updateExtrudeStyle() {
    const {districtStyle: t, extrudeBackgroundStyle: e} = this.state
    t && t.enabled && (FV(this, 'extrude'), zV(this), kV(this)),
      e && e.enabled && FV(this, 'extrude-background')
  }
  updateBaseHeight() {
    const {globalOpts: t} = this.gis
    if (t) {
      const {
        bboxOption: {baseHeight: e},
      } = t
      this.districtStrokeGroup.position.setZ(e),
        this.subDistrictStrokeGroup.position.setZ(e),
        this.subDistrictFillGroup.position.setZ(e),
        this.poiGroup.updateBaseHeight(e),
        (function (t, e) {
          e.districtFillGroup.children.forEach(e => {
            'map-innerShadow' === e.userData.faceType
              ? (e.scale.z = 1.01 * (t || 1))
              : (e.scale.z = t || 1),
              (e.position.z = 0)
          })
        })(e, this),
        jV(e, this)
    }
  }
  async __initMap(t) {
    const {districtStyle: e, extrudeBackgroundStyle: i} = this.state,
      {sceneSystem: n} = this.gis
    await $V(this),
      this.gis.__destroyed ||
        (tW(this),
        uV(this),
        HV(this),
        this.scaleAdaptation(!1),
        t
          ? this.gis.viewportSystem.init('xgis')
          : this.gis.viewportSystem.init(),
        this.scaleAdaptation(!1),
        (function (t, e, i) {
          const n = EA(e.state.background.color)
          ;(i.extrudeTopMaterial = new zA({
            color: n.color,
            transparent: !0,
            depthTest: !0,
            depthWrite: !0,
          })),
            (i.extrudeInnerShadowMaterial = new zA({
              transparent: !0,
              depthTest: !0,
              depthWrite: !0,
            }))
          const {colorConfig: r} = t.sideConfig,
            {
              bottomColor: o,
              topColor: a,
              bottomOpacity: s,
              topOpacity: l,
            } = GV(r)
          i.extrudeSideMaterial = new Jn({
            uniforms: {
              type: {
                type: 'int',
                value: (t => {
                  switch (t) {
                    case 'linear':
                      return 1
                    case 'ordinal':
                      return 2
                  }
                })(r.type),
              },
              bottomColor: {
                type: 'vec3',
                value: {
                  color: o,
                  opacity: s,
                },
              },
              topColor: {
                type: 'vec3',
                value: {
                  color: a,
                  opacity: l,
                },
              },
            },
            transparent: !0,
            vertexShader:
              'varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}',
            fragmentShader:
              '#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n  vec3 color;\n  float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}',
          })
        })(e, n, this),
        (function (t, e, i) {
          const n = EA(e.state.background.color)
          i.extrudeBackgroundTopMaterial = new zA({
            color: n.color,
            transparent: !0,
            depthTest: !0,
            depthWrite: !0,
          })
          const {colorConfig: r} = t.sideConfig,
            {
              bottomColor: o,
              topColor: a,
              bottomOpacity: s,
              topOpacity: l,
            } = GV(r)
          i.extrudeBackgroundSideMaterial = new Jn({
            uniforms: {
              type: {
                type: 'int',
                value: (t => {
                  switch (t) {
                    case 'linear':
                      return 1
                    case 'ordinal':
                      return 2
                  }
                })(r.type),
              },
              bottomColor: {
                type: 'vec3',
                value: {
                  color: o,
                  opacity: s,
                },
              },
              topColor: {
                type: 'vec3',
                value: {
                  color: a,
                  opacity: l,
                },
              },
            },
            transparent: !1,
            vertexShader:
              'varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}',
            fragmentShader:
              '#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n    vec3 color;\n    float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}',
            depthTest: !0,
            depthWrite: !0,
          })
        })(i, n, this),
        await this.initExtrude())
  }
  async drillDown(t, e) {
    const {viewportSystem: i} = this.gis,
      {
        drill: {
          enabled: n,
          duration: r,
          level: {range: o},
        },
      } = this.state
    if (!n) return this.logService.warn('当前未开启钻取功能'), this
    if (this.isDrilling) return this.logService.warn('当前钻取未结束'), this
    const a = qV(this.drillData, t)
    if (-1 === a)
      return this.logService.warn(`钻取层级 ${a}不合法，下钻无效`), this
    if (a > o[1] || a < o[0])
      return this.logService.warn(`钻取层级 ${a}超过最大限制，下钻无效`), this
    this.isDrilling = !0
    const s = {
      adcode: this.currentCode,
      viewPortInfo: i.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    }
    ;(this.drillCache[s.adcode] = s),
      (this.currentLevel = a),
      (this.currentCode = t)
    const l = XV.getParentInfoByAdCode(this.currentCode, this.gis)
    ;(this.currentParentLevel = l.level),
      (this.currentParentCode = l.adcode),
      (this.currentRegion = null),
      tW(this)
    const u = {
      type: 'drillDown',
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    }
    return (
      this.ee.emit('drill', u),
      this.ee.emit('drillDown', u),
      WV(this),
      await new Promise(t =>
        setTimeout(() => {
          e && e(),
            (() => {
              this.ee.emit('drillDownEnd', u),
                this.ee.emit('drillEnd', u),
                (this.isDrilling = !1)
            })(),
            t(this)
        }, r),
      )
    )
  }
  async drillUp(t, e) {
    const {viewportSystem: i} = this.gis,
      {
        drill: {
          enabled: n,
          duration: r,
          level: {range: o},
        },
      } = this.state
    if (!n) return this.logService.warn('当前未开启钻取功能'), this
    if (this.isDrilling) return this.logService.warn('当前钻取未结束'), this
    let a = this.currentParentLevel
    if ((t && (a = qV(this.drillData, t)), -1 === a))
      return this.logService.warn(`钻取层级 ${a}不合法，上钻无效`), this
    if (a > o[1] || a < o[0])
      return this.logService.warn(`钻取层级 ${a}超过最大限制，上钻无效`), this
    this.isDrilling = !0
    const s = {
      adcode: this.currentCode,
      viewPortInfo: i.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    }
    ;(this.drillCache[s.adcode] = s), (this.currentLevel = a)
    const l = XV.getParentInfoByAdCode(this.currentCode, this.gis)
    this.currentCode = null != t ? t : l.adcode
    const u = XV.getParentInfoByAdCode(this.currentCode, this.gis)
    ;(this.currentParentCode = u.adcode),
      (this.currentParentLevel = u.level),
      (this.currentRegion = null),
      tW(this)
    const c = {
      type: 'drillUp',
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    }
    return (
      this.ee.emit('drill', c),
      this.ee.emit('drillUp', c),
      WV(this),
      await new Promise(t =>
        setTimeout(() => {
          e && e(),
            (() => {
              this.ee.emit('drillUpEnd', c),
                this.ee.emit('drillEnd', c),
                (this.isDrilling = !1)
            })(),
            t(this)
        }, r),
      )
    )
  }
  async drillRegion(t, e) {
    const {viewportSystem: i} = this.gis,
      {
        drill: {enabled: n, duration: r},
      } = this.state
    if (!n) return this.logService.warn('当前未开启钻取功能'), this
    if (this.isDrilling) return this.logService.warn('当前钻取未结束'), this
    ;(this.isDrilling = !0), (this.currentRegion = t)
    const o = {
      adcode: this.currentCode,
      viewPortInfo: i.get(),
      group: this.coreGroup,
      subDistrictInfoArr: this.subDistrictInfoArr,
    }
    ;(this.drillCache[o.adcode] = o),
      (this.currentLevel = 0),
      (this.currentCode = t)
    const a = XV.getParentInfoByAdCode(this.currentCode, this.gis)
    ;(this.currentParentCode = a.adcode),
      (this.currentParentLevel = a.level),
      (async function (t) {
        const e = t.state.data[t.currentRegion]
        ;(t.rawSubDistrictData = e.rawSubDistrictData),
          (t.subDistrictData = e.subDistrictData),
          (t.rawDistrictData = e.rawDistrictData),
          (t.districtData = e.districtData)
      })(this)
    const s = {
      type: 'drillRegion',
      code: 200,
      properties: {
        currentCode: this.currentCode,
        currentLevel: this.currentLevel,
      },
    }
    return (
      this.ee.emit('drill', s),
      this.ee.emit('drillRegion', s),
      WV(this),
      await new Promise(t =>
        setTimeout(() => {
          e && e(),
            (() => {
              this.ee.emit('drillEnd', s),
                this.ee.emit('drillRegionEnd', s),
                (this.isDrilling = !1)
            })(),
            t(this)
        }, r),
      )
    )
  }
  async initPOI() {
    const {poi: t} = this.state,
      {
        enabled: e,
        background: i,
        orient: n,
        alignment: r,
        offsetX: o,
        offsetY: a,
        major: s,
      } = t
    if (!e || !s.enabled) return void this.clearPoiGroup()
    this.clearPoiGroup()
    const {baseHeight: l} = this.gis.globalOpts.bboxOption
    for (let u = 0; u < this.subDistrictInfoArr.length; u++) {
      const t = this.subDistrictInfoArr[u],
        {centroid: e, alias: c} = t
      if (!e) continue
      const h = new Ye(0, 0, 0)
      await this.poiGroup.addText(
        h,
        n,
        r,
        i,
        {
          content: `${s.format ? s.format(c) : c}`,
          props: s,
        },
        null,
        o,
        a,
        {
          position: [e[0], e[1], l],
          offsetX: o,
          offsetY: a,
        },
      )
    }
    this._updatePOI(!0)
  }
  scaleAdaptation(t = !0) {
    const {project: e} = this.gis.layerManager.geo,
      {
        districtStyle: {heightScale: i},
        viewClip: n,
      } = this.state,
      {drillSave: r} = this.gis.viewportSystem.get(),
      o = this.drillCache[this.currentCode]
    let a
    a = o && r ? o.viewPortInfo : this.gis.viewportSystem.get()
    const {pitch: s, rotation: l, offset: u} = a,
      c = Vf,
      h = null == n ? void 0 : n[this.currentCode],
      p = KV({
        geojson: {
          type: 'FeatureCollection',
          features: this.rawDistrictData,
        },
        geojsonProj: {
          type: 'FeatureCollection',
          features: this.districtData,
        },
        project: e,
        geojsonUtil: am,
        worldBboxSize: c,
        heightScale: i,
        pitch: s,
        rotation: l,
        offset: u,
        viewClip: h,
      })
    ;(this.gis.globalOpts = p),
      this.gis.layerManager.ee.emit('updateArea', {
        cameraTween: t,
      }),
      this.gis.lightSystem.ee.emit('updateArea')
  }
  registerHeightScale() {
    this._propsWatch.addWatch([
      this._propsWatch.defaultRule(
        ['districtStyle', 'heightScale'],
        'diffDeep',
        () => {
          const {bboxOption: t} = this.gis.globalOpts
          ;(t.baseHeight =
            t.size.bboxSize * this.state.districtStyle.heightScale * 0.05),
            this.gis.layerManager.ee.emit('updateArea', {
              cameraChange: !1,
              cameraTween: !1,
            }),
            this.gis.lightSystem.ee.emit('updateArea')
        },
      ),
    ])
  }
  debugBbox() {
    const {
        bboxOption: {
          size: {width: t, height: e},
          centerProj: i,
          baseHeight: n,
        },
      } = this.gis.globalOpts,
      r = new dr(t, e),
      o = new pn({
        color: 16711680,
        opacity: 0.1,
        transparent: !0,
        side: xt,
      }),
      a = new Wn(r, o)
    a.position.set(i[0], i[1], n + 1),
      a.setRenderIndex(lU.PARTICLE_LAYER),
      this.coreGroup.add(a)
  }
  handleAnimation() {
    this.boundaryStreamerLayer && this.boundaryStreamerLayer.handleAnimation()
  }
  clear() {
    this.clearCoreGroup(),
      this.clearPoiGroup(),
      this.clearInteractionGroup(),
      (this.isDrilling = !1),
      (this.drillData = {
        default: [new Map()],
        process: [new Map()],
      }),
      (this.currentCode = Mk),
      (this.currentLevel = 0),
      (this.currentParentCode = null),
      (this.currentParentLevel = -1),
      (this.drillCache = {}),
      (this.subDistrictStrokeGroup = null),
      (this.subDistrictFillGroup = null),
      (this.districtStrokeGroup = null),
      (this.districtBottomStrokeGroup = null),
      (this.districtFillGroup = null),
      (this.extrudeBackgroundFillGroup = null),
      (this.subDistrictInfoArr = []),
      (this.districtData = null),
      (this.subDistrictData = null),
      (this.rawDistrictData = null),
      (this.rawSubDistrictData = null),
      (this.extrudeTopMaterial = null),
      (this.extrudeSideMaterial = null),
      (this.extrudeInnerShadowMaterial = null),
      (this.extrudeBackgroundTopMaterial = null),
      (this.extrudeBackgroundSideMaterial = null),
      (this.currentRegion = null),
      (this.bgGeoData = null),
      (this.boundaryStreamerLayer = null),
      (this.gis.globalOpts = null)
  }
  async release() {
    if (
      (this.clear(),
      this._initLayerGroup(),
      await this.__initMap(!0),
      this.gis.__destroyed)
    )
      return
    this.__initEvent(),
      this.animation.start(),
      super.registerInteraction(
        this.state.interaction,
        this.subDistrictFillGroup,
        !1,
      ),
      super.emitPropsWatch(),
      this.registerHeightScale(),
      FV(this, 'extrude'),
      BV(this.extrudeSideMaterial, this.state.districtStyle),
      zV(this),
      kV(this),
      cV(this.state.districtStyle, this),
      hV(this.state.districtStyle, this),
      VV(this.state.subDistrictStyle, this),
      FV(this, 'extrude-background'),
      BV(this.extrudeBackgroundSideMaterial, this.state.extrudeBackgroundStyle)
    const {backgroundBboxOption: t} = this.gis.globalOpts
    t &&
      ((t.baseHeight =
        t.size.bboxSize *
        this.state.extrudeBackgroundStyle.heightScale *
        0.05 *
        0.2),
      jV(t.baseHeight, this)),
      await this.initPOI()
  }
  _initPropsWatchRule() {
    super._initPropsWatchRule(),
      this._propsWatch.addWatch([
        this._propsWatch.defaultRule(['viewClip'], 'diffDeep', () => {
          ;(this.drillCache = {}), this.scaleAdaptation(!1)
        }),
        this._propsWatch.defaultRule(
          ['districtStyle', 'fill'],
          'diffDeep',
          () => {
            FV(this, 'extrude')
          },
        ),
        this._propsWatch.defaultRule(
          ['districtStyle', 'sideConfig'],
          'diffDeep',
          () => {
            BV(this.extrudeSideMaterial, this.state.districtStyle)
          },
        ),
        this._propsWatch.defaultRule(
          ['districtStyle', 'innerShadow'],
          'diffDeep',
          () => {
            zV(this)
          },
        ),
        this._propsWatch.defaultRule(
          ['districtStyle', 'boundaryStreamer'],
          'diffDeep',
          () => {
            kV(this)
          },
        ),
        this._propsWatch.defaultRule(
          ['districtStyle', 'stroke'],
          'diffDeep',
          () => {
            cV(this.state.districtStyle, this)
          },
        ),
        this._propsWatch.defaultRule(
          ['districtStyle', 'bottomStroke'],
          'diffDeep',
          () => {
            hV(this.state.districtStyle, this)
          },
        ),
        this._propsWatch.defaultRule(
          ['subDistrictStyle', 'stroke'],
          'diffDeep',
          () => {
            VV(this.state.subDistrictStyle, this)
          },
        ),
        this._propsWatch.defaultRule(
          ['extrudeBackgroundStyle', 'fill'],
          'diffDeep',
          () => {
            FV(this, 'extrude-background')
          },
        ),
        this._propsWatch.defaultRule(
          ['extrudeBackgroundStyle', 'sideConfig'],
          'diffDeep',
          () => {
            BV(
              this.extrudeBackgroundSideMaterial,
              this.state.extrudeBackgroundStyle,
            )
          },
        ),
        this._propsWatch.defaultRule(
          ['extrudeBackgroundStyle', 'heightScale'],
          'diffDeep',
          () => {
            const {backgroundBboxOption: t} = this.gis.globalOpts
            t &&
              ((t.baseHeight =
                t.size.bboxSize *
                this.state.extrudeBackgroundStyle.heightScale *
                0.05 *
                0.2),
              jV(t.baseHeight, this))
          },
        ),
        this._propsWatch.defaultRule('poi', 'diffDeep', () => {
          this.initPOI()
        }),
      ])
  }
}
