/* eslint-disable @typescript-eslint/no-explicit-any */
export function cg(t: any): number[][] {
  let e
  return (
    'Point' == t.type
      ? (e = [t.coordinates])
      : 'LineString' == t.type || 'MultiPoint' == t.type
      ? (e = t.coordinates)
      : 'Polygon' == t.type || 'MultiLineString' == t.type
      ? (e = t.coordinates.reduce(function (t: any, e: any) {
          return t.concat(e)
        }, []))
      : 'MultiPolygon' == t.type
      ? (e = t.coordinates.reduce(function (t: any, e: any) {
          return t.concat(
            e.reduce(function (t: any, e: any) {
              return t.concat(e)
            }, []),
          )
        }, []))
      : 'Feature' == t.type
      ? (e = cg(t.geometry))
      : 'GeometryCollection' == t.type
      ? (e = t.geometries.reduce(function (t: any, e: any) {
          return t.concat(cg(e))
        }, []))
      : 'FeatureCollection' == t.type &&
        (e = t.features.reduce(function (t: any, e: any) {
          return t.concat(cg(e))
        }, [])),
    e
  )
}
