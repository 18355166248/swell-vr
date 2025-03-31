const Tx = new Oe(),
  iL = new U(),
  aL = new U(),
  ur = new Oe(),
  cr = new Oe(),
  Oa = new Oe(),
  Cx = new U(),
  Ex = new ae(),
  hr = new tq(),
  oL = new U(),
  wg = new Ei(),
  Mg = new na(),
  Na = new Oe()
let qa, Mu
function sL(r, t, e) {
  return (
    Na.set(0, 0, -t, 1).applyMatrix4(r.projectionMatrix),
    Na.multiplyScalar(1 / Na.w),
    (Na.x = Mu / e.width),
    (Na.y = Mu / e.height),
    Na.applyMatrix4(r.projectionMatrixInverse),
    Na.multiplyScalar(1 / Na.w),
    Math.abs(Math.max(Na.x, Na.y))
  )
}
function eK(r, t) {
  const e = r.matrixWorld,
    n = r.geometry,
    i = n.attributes.instanceStart,
    a = n.attributes.instanceEnd,
    o = Math.min(n.instanceCount, i.count)
  for (let s = 0, l = o; s < l; s++) {
    hr.start.fromBufferAttribute(i, s),
      hr.end.fromBufferAttribute(a, s),
      hr.applyMatrix4(e)
    const u = new U(),
      c = new U()
    qa.distanceSqToSegment(hr.start, hr.end, c, u),
      c.distanceTo(u) < Mu * 0.5 &&
        t.push({
          point: c,
          pointOnLine: u,
          distance: qa.origin.distanceTo(c),
          object: r,
          face: null,
          faceIndex: s,
          uv: null,
          uv1: null,
        })
  }
}
function nK(r, t, e) {
  const n = t.projectionMatrix,
    a = r.material.resolution,
    o = r.matrixWorld,
    s = r.geometry,
    l = s.attributes.instanceStart,
    u = s.attributes.instanceEnd,
    c = Math.min(s.instanceCount, l.count),
    h = -t.near
  qa.at(1, Oa),
    (Oa.w = 1),
    Oa.applyMatrix4(t.matrixWorldInverse),
    Oa.applyMatrix4(n),
    Oa.multiplyScalar(1 / Oa.w),
    (Oa.x *= a.x / 2),
    (Oa.y *= a.y / 2),
    (Oa.z = 0),
    Cx.copy(Oa),
    Ex.multiplyMatrices(t.matrixWorldInverse, o)
  for (let f = 0, d = c; f < d; f++) {
    if (
      (ur.fromBufferAttribute(l, f),
      cr.fromBufferAttribute(u, f),
      (ur.w = 1),
      (cr.w = 1),
      ur.applyMatrix4(Ex),
      cr.applyMatrix4(Ex),
      ur.z > h && cr.z > h)
    )
      continue
    if (ur.z > h) {
      const _ = ur.z - cr.z,
        x = (ur.z - h) / _
      ur.lerp(cr, x)
    } else if (cr.z > h) {
      const _ = cr.z - ur.z,
        x = (cr.z - h) / _
      cr.lerp(ur, x)
    }
    ur.applyMatrix4(n),
      cr.applyMatrix4(n),
      ur.multiplyScalar(1 / ur.w),
      cr.multiplyScalar(1 / cr.w),
      (ur.x *= a.x / 2),
      (ur.y *= a.y / 2),
      (cr.x *= a.x / 2),
      (cr.y *= a.y / 2),
      hr.start.copy(ur),
      (hr.start.z = 0),
      hr.end.copy(cr),
      (hr.end.z = 0)
    const g = hr.closestPointToPointParameter(Cx, !0)
    hr.at(g, oL)
    const v = IM.lerp(ur.z, cr.z, g),
      m = v >= -1 && v <= 1,
      y = Cx.distanceTo(oL) < Mu * 0.5
    if (m && y) {
      hr.start.fromBufferAttribute(l, f),
        hr.end.fromBufferAttribute(u, f),
        hr.start.applyMatrix4(o),
        hr.end.applyMatrix4(o)
      const _ = new U(),
        x = new U()
      qa.distanceSqToSegment(hr.start, hr.end, x, _),
        e.push({
          point: x,
          pointOnLine: _,
          distance: qa.origin.distanceTo(x),
          object: r,
          face: null,
          faceIndex: f,
          uv: null,
          uv1: null,
        })
    }
  }
}
class rK extends De {
  constructor(
    t = new $B(),
    e = new qB({
      color: Math.random() * 16777215,
    }),
  ) {
    super(t, e), (this.isLineSegments2 = !0), (this.type = 'LineSegments2')
  }
  computeLineDistances() {
    const t = this.geometry,
      e = t.attributes.instanceStart,
      n = t.attributes.instanceEnd,
      i = new Float32Array(2 * e.count)
    for (let o = 0, s = 0, l = e.count; o < l; o++, s += 2)
      iL.fromBufferAttribute(e, o),
        aL.fromBufferAttribute(n, o),
        (i[s] = s === 0 ? 0 : i[s - 1]),
        (i[s + 1] = i[s] + iL.distanceTo(aL))
    const a = new JA(i, 2, 1)
    return (
      t.setAttribute('instanceDistanceStart', new _a(a, 1, 0)),
      t.setAttribute('instanceDistanceEnd', new _a(a, 1, 1)),
      this
    )
  }
  raycast(t, e) {
    const n = this.material.worldUnits,
      i = t.camera
    i === null &&
      !n &&
      console.error(
        'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.',
      )
    const a = (t.params.Line2 !== void 0 && t.params.Line2.threshold) || 0
    qa = t.ray
    const o = this.matrixWorld,
      s = this.geometry,
      l = this.material
    ;(Mu = l.linewidth + a),
      s.boundingSphere === null && s.computeBoundingSphere(),
      Mg.copy(s.boundingSphere).applyMatrix4(o)
    let u
    if (n) u = Mu * 0.5
    else {
      const h = Math.max(i.near, Mg.distanceToPoint(qa.origin))
      u = sL(i, h, l.resolution)
    }
    if (((Mg.radius += u), qa.intersectsSphere(Mg) === !1)) return
    s.boundingBox === null && s.computeBoundingBox(),
      wg.copy(s.boundingBox).applyMatrix4(o)
    let c
    if (n) c = Mu * 0.5
    else {
      const h = Math.max(i.near, wg.distanceToPoint(qa.origin))
      c = sL(i, h, l.resolution)
    }
    wg.expandByScalar(c),
      qa.intersectsBox(wg) !== !1 && (n ? eK(this, e) : nK(this, i, e))
  }
  onBeforeRender(t) {
    const e = this.material.uniforms
    e &&
      e.resolution &&
      (t.getViewport(Tx),
      this.material.uniforms.resolution.value.set(Tx.z, Tx.w))
  }
}
