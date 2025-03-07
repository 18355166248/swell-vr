/* eslint-disable @typescript-eslint/no-explicit-any */
import {cloneDeep} from 'lodash-es'
import * as turf from '@turf/turf'

function lV(t: any) {
  let e = cloneDeep(t)
  return (
    turf.flatten(e),
    (e = (function (t: any) {
      const e = {
        type: 'FeatureCollection',
        features: [],
      }
      let i, n
      for (i = 0; i < t.features.length; i++) {
        const r = t.features[i]
        const o = r.geometry
        if (!o || !o.coordinates || 0 === o.coordinates.length) continue
        if ('Polygon' != o.type) continue
        const a = o.coordinates
        const s: any[] = []
        for (n = 0; n < a.length; n++) {
          const t = a[n][0]
          const e = a[n][a[n].length - 1]
          t[0] == e[0] && t[1] == e[1]
            ? s.push(a[n])
            : a[n].length > 10 && (a[n].push(t), s.push(a[n]))
        }
        r.geometry.coordinates = s
        e.features.push(r)
      }
      return e
    })(e)),
    e
  )
}

export {lV}
