export default function sm(t, e) {
  const i = t => {
      const i = e(t)
      ;(t[0] = +i[0].toFixed(6)), (t[1] = +i[1].toFixed(6))
    },
    n = JSON.parse(JSON.stringify(t))
  switch (n.type) {
    case 'FeatureCollection':
      for (let t = 0; t < n.features.length; t++) lm(n.features[t].geometry, i)
      break
    case 'Feature':
      lm(n.geometry, i)
      break
    case 'GeometryCollection':
      for (let t = 0; t < n.geometries.length; t++) lm(n.geometries[t], i)
      break
    default:
      lm(n, i)
  }
  return n
}
