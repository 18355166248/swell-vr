// /examples/jsm/lines/LineGeometry.js
class ZB extends $B {
  constructor() {
    super(), (this.isLineGeometry = !0), (this.type = 'LineGeometry')
  }
  setPositions(t) {
    const e = t.length - 3,
      n = new Float32Array(2 * e)
    for (let i = 0; i < e; i += 3)
      (n[2 * i] = t[i]),
        (n[2 * i + 1] = t[i + 1]),
        (n[2 * i + 2] = t[i + 2]),
        (n[2 * i + 3] = t[i + 3]),
        (n[2 * i + 4] = t[i + 4]),
        (n[2 * i + 5] = t[i + 5])
    return super.setPositions(n), this
  }
  setColors(t) {
    const e = t.length - 3,
      n = new Float32Array(2 * e)
    for (let i = 0; i < e; i += 3)
      (n[2 * i] = t[i]),
        (n[2 * i + 1] = t[i + 1]),
        (n[2 * i + 2] = t[i + 2]),
        (n[2 * i + 3] = t[i + 3]),
        (n[2 * i + 4] = t[i + 4]),
        (n[2 * i + 5] = t[i + 5])
    return super.setColors(n), this
  }
  fromLine(t) {
    const e = t.geometry
    return this.setPositions(e.attributes.position.array), this
  }
}

class iK extends rK {
  constructor(
    t = new ZB(),
    e = new qB({
      color: Math.random() * 16777215,
    }),
  ) {
    super(t, e), (this.isLine2 = !0), (this.type = 'Line2')
  }
}
