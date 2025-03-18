function CV(t) {
  return Math.pow(2, t)
}
function wV(t, e, i) {
  const n = (function (t, e) {
      const i = (t + 180) / 360
      return Math.floor(i * CV(e) * 256)
    })(t, i),
    r = (function (t, e) {
      const i = Math.sin((t * Math.PI) / 180),
        n = 0.5 - Math.log((1 + i) / (1 - i)) / (4 * Math.PI)
      return Math.floor(n * CV(e) * 256)
    })(e, i)
  return [n, r]
}
