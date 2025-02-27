export default async function ZV(t, e) {
  if (!(null == t ? void 0 : t.data)) return null
  const {type: i, data: n, simplify: r} = t,
    {useProject: o, useProcess: a} = af(QV, e)
  let s, l
  switch (i) {
    case xk.GEOJSON:
      s = n
      break
    case xk.GEOJSON_URL:
      ;(l = t.data), (s = await XV.getGeoJsonByUrl(l))
      break
    case xk.GEOBUF_URL:
      ;(l = t.data), (s = await XV.getGeoBuf2GeoJsonByUrl(l))
      break
    case xk.GEOBUF:
    default:
      console.error('[xGis]', `地图数据 url ${l} 格式无法解析`)
  }
  return (
    (t.__raw_geojson__ = s),
    (t.__geojson__ = s),
    (null == r ? void 0 : r.enabled) &&
      (t.__geojson__ = am.simplify(t.__geojson__, r.tolerance)),
    a && (t.__geojson_process__ = lV(t.__geojson__)),
    o &&
      (t.__geojson_process_proj__ = sm(
        a ? t.__geojson_process__ : t.__geojson__,
        Qf,
      )),
    t
  )
}
