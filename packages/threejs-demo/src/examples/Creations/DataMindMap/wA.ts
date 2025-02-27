export default class wA {
  constructor(t, e, i) {
    return (
      (this.NAMES = bA),
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
    )
  }
  set(t) {
    return (
      t && t.isColor
        ? this.copy(t)
        : 'number' == typeof t
        ? this.setHex(t)
        : 'string' == typeof t && this.setStyle(t),
      this
    )
  }
  setScalar(t) {
    return (this.r = t), (this.g = t), (this.b = t), this
  }
  setHex(t) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (255 & t) / 255),
      this
    )
  }
  setRGB(t, e, i) {
    return (this.r = t), (this.g = e), (this.b = i), this
  }
  setHSL(t, e, i) {
    let n
    if (
      ((t = ((t % (n = 1)) + n) % n),
      (e = yA(e, 0, 1)),
      (i = yA(i, 0, 1)),
      0 === e)
    )
      this.r = this.g = this.b = i
    else {
      const n = i <= 0.5 ? i * (1 + e) : i + e - i * e,
        r = 2 * i - n
      ;(this.r = SA(r, n, t + 1 / 3)),
        (this.g = SA(r, n, t)),
        (this.b = SA(r, n, t - 1 / 3))
    }
    return this
  }
  setStyle(t) {
    let e
    if ((e = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
      let t
      const i = e[1],
        n = e[2]
      switch (i) {
        case 'rgb':
        case 'rgba':
          if (
            (t =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                n,
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(t[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(t[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(t[3], 10)) / 255),
              t[4],
              this
            )
          if (
            (t =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                n,
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(t[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(t[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(t[3], 10)) / 100),
              t[4],
              this
            )
          break
        case 'hsl':
        case 'hsla':
          if (
            (t =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                n,
              ))
          ) {
            const e = parseFloat(t[1]) / 360,
              i = parseInt(t[2], 10) / 100,
              n = parseInt(t[3], 10) / 100
            return t[4], this.setHSL(e, i, n)
          }
      }
    } else if ((e = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const t = e[1],
        i = t.length
      if (3 === i)
        return (
          (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
          (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
          (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
          this
        )
      if (6 === i)
        return (
          (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
          (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
          (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
          this
        )
    }
    return t && t.length > 0 ? this.setColorName(t) : this
  }
  setColorName(t) {
    const e = bA[t.toLowerCase()]
    return void 0 !== e && this.setHex(e), this
  }
  clone() {
    return new wA(this.r, this.g, this.b)
  }
  copy(t) {
    return (this.r = t.r), (this.g = t.g), (this.b = t.b), this
  }
  copyGammaToLinear(t, e = 2) {
    return (
      (this.r = Math.pow(t.r, e)),
      (this.g = Math.pow(t.g, e)),
      (this.b = Math.pow(t.b, e)),
      this
    )
  }
  copyLinearToGamma(t, e = 2) {
    const i = e > 0 ? 1 / e : 1
    return (
      (this.r = Math.pow(t.r, i)),
      (this.g = Math.pow(t.g, i)),
      (this.b = Math.pow(t.b, i)),
      this
    )
  }
  convertGammaToLinear(t) {
    return this.copyGammaToLinear(this, t), this
  }
  convertLinearToGamma(t) {
    return this.copyLinearToGamma(this, t), this
  }
  copySRGBToLinear(t) {
    return (this.r = MA(t.r)), (this.g = MA(t.g)), (this.b = MA(t.b)), this
  }
  copyLinearToSRGB(t) {
    return (this.r = CA(t.r)), (this.g = CA(t.g)), (this.b = CA(t.b)), this
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this
  }
  getHex() {
    return ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ (255 * this.b)
  }
  getHexString() {
    return ('000000' + this.getHex().toString(16)).slice(-6)
  }
  getHSL(t) {
    const e = this.r,
      i = this.g,
      n = this.b,
      r = Math.max(e, i, n),
      o = Math.min(e, i, n)
    let a, s
    const l = (o + r) / 2
    if (o === r) (a = 0), (s = 0)
    else {
      const t = r - o
      switch (((s = l <= 0.5 ? t / (r + o) : t / (2 - r - o)), r)) {
        case e:
          a = (i - n) / t + (i < n ? 6 : 0)
          break
        case i:
          a = (n - e) / t + 2
          break
        case n:
          a = (e - i) / t + 4
      }
      a /= 6
    }
    return (t.h = a), (t.s = s), (t.l = l), t
  }
  getStyle() {
    return (
      'rgb(' +
      ((255 * this.r) | 0) +
      ',' +
      ((255 * this.g) | 0) +
      ',' +
      ((255 * this.b) | 0) +
      ')'
    )
  }
  offsetHSL(t, e, i) {
    return (
      this.getHSL(xA),
      (xA.h += t),
      (xA.s += e),
      (xA.l += i),
      this.setHSL(xA.h, xA.s, xA.l),
      this
    )
  }
  add(t) {
    return (this.r += t.r), (this.g += t.g), (this.b += t.b), this
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
    )
  }
  addScalar(t) {
    return (this.r += t), (this.g += t), (this.b += t), this
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    )
  }
  multiply(t) {
    return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this
  }
  multiplyScalar(t) {
    return (this.r *= t), (this.g *= t), (this.b *= t), this
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    )
  }
  lerpColors(t, e, i) {
    return (
      (this.r = t.r + (e.r - t.r) * i),
      (this.g = t.g + (e.g - t.g) * i),
      (this.b = t.b + (e.b - t.b) * i),
      this
    )
  }
  lerpHSL(t, e) {
    this.getHSL(xA), t.getHSL(_A)
    const i = vA(xA.h, _A.h, e),
      n = vA(xA.s, _A.s, e),
      r = vA(xA.l, _A.l, e)
    return this.setHSL(i, n, r), this
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b
  }
  fromArray(t, e = 0) {
    return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)),
      (this.g = t.getY(e)),
      (this.b = t.getZ(e)),
      !0 === t.normalized &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    )
  }
  toJSON() {
    return this.getHex()
  }
}
