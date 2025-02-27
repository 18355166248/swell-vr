export default function lV(t) {
  let e = af(t)
  return (
    am.flatten(e),
    (e = (function (t) {
      const e = {
        type: 'FeatureCollection',
        features: [],
      }
      let i, n
      for (i = 0; i < t.features.length; i++) {
        const r = t.features[i],
          o = r.geometry
        if (!o || !o.coordinates || 0 === o.coordinates.length) continue
        if ('Polygon' != o.type) continue
        const a = o.coordinates,
          s = []
        for (n = 0; n < a.length; n++) {
          const t = a[n][0],
            e = a[n][a[n].length - 1]
          t[0] == e[0] && t[1] == e[1]
            ? s.push(a[n])
            : a[n].length > 10 && (a[n].push(t), s.push(a[n]))
        }
        ;(r.geometry.coordinates = s), e.features.push(r)
      }
      return e
    })(e)),
    e
  )
}
