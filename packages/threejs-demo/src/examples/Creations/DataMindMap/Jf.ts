export default class Jf {
  static project(t, e) {
    const i = 85.0511287798
    return (
      (e = Math.max(Math.min(i, e), -i)),
      (t *= Gf),
      (e *= Gf),
      (e = Math.log(Math.tan(Math.PI / 4 + e / 2))),
      [t * jf, e * jf]
    )
  }
  static unproject(t, e) {
    return [(t / jf) * Uf, (2 * Math.atan(Math.exp(e / jf)) - Math.PI / 2) * Uf]
  }
  static getResolution(t) {
    return Hf / Math.pow(2, t)
  }
}
