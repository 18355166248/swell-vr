export const am = {
  rewind: ag,
  bbox: function (t) {
    let e, i
    if (t.hasOwnProperty('type'))
      return (
        (e = cg(t)),
        (i = [
          Number.POSITIVE_INFINITY,
          Number.POSITIVE_INFINITY,
          Number.NEGATIVE_INFINITY,
          Number.NEGATIVE_INFINITY,
        ]),
        e.reduce(function (t, e) {
          return [
            Math.min(e[0], t[0]),
            Math.min(e[1], t[1]),
            Math.max(e[0], t[2]),
            Math.max(e[1], t[3]),
          ]
        }, i)
      )
  },
  flatten: function t(e) {
    switch ((e && e.type) || null) {
      case 'FeatureCollection':
        return (
          (e.features = e.features.reduce(function (e, i) {
            return e.concat(t(i))
          }, [])),
          e
        )
      case 'Feature':
        return e.geometry
          ? t(e.geometry).map(function (t) {
              const i = {
                type: 'Feature',
                properties: JSON.parse(JSON.stringify(e.properties)),
                geometry: t,
              }
              return void 0 !== e.id && (i.id = e.id), i
            })
          : [e]
      case 'MultiPoint':
        return e.coordinates.map(function (t) {
          return {
            type: 'Point',
            coordinates: t,
          }
        })
      case 'MultiPolygon':
        return e.coordinates.map(function (t) {
          return {
            type: 'Polygon',
            coordinates: t,
          }
        })
      case 'MultiLineString':
        return e.coordinates.map(function (t) {
          return {
            type: 'LineString',
            coordinates: t,
          }
        })
      case 'GeometryCollection':
        return e.geometries.map(t).reduce(function (t, e) {
          return t.concat(e)
        }, [])
      case 'Point':
      case 'Polygon':
      case 'LineString':
        return [e]
    }
  },
  dissolve: tm,
  simplify: em.exports,
}
