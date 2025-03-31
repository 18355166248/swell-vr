const rL = new Ei(),
  bg = new U()

class $B extends V$ {
  constructor() {
    super(),
      (this.isLineSegmentsGeometry = !0),
      (this.type = 'LineSegmentsGeometry')
    const t = [
        -1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1,
        -1, 0,
      ],
      e = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2],
      n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]
    this.setIndex(n),
      this.setAttribute('position', new nn(t, 3)),
      this.setAttribute('uv', new nn(e, 2))
  }
  applyMatrix4(t) {
    const e = this.attributes.instanceStart,
      n = this.attributes.instanceEnd
    return (
      e !== void 0 &&
        (e.applyMatrix4(t), n.applyMatrix4(t), (e.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    )
  }
  setPositions(t) {
    let e
    t instanceof Float32Array
      ? (e = t)
      : Array.isArray(t) && (e = new Float32Array(t))
    const n = new JA(e, 6, 1)
    return (
      this.setAttribute('instanceStart', new _a(n, 3, 0)),
      this.setAttribute('instanceEnd', new _a(n, 3, 3)),
      this.computeBoundingBox(),
      this.computeBoundingSphere(),
      this
    )
  }
  setColors(t) {
    let e
    t instanceof Float32Array
      ? (e = t)
      : Array.isArray(t) && (e = new Float32Array(t))
    const n = new JA(e, 6, 1)
    return (
      this.setAttribute('instanceColorStart', new _a(n, 3, 0)),
      this.setAttribute('instanceColorEnd', new _a(n, 3, 3)),
      this
    )
  }
  fromWireframeGeometry(t) {
    return this.setPositions(t.attributes.position.array), this
  }
  fromEdgesGeometry(t) {
    return this.setPositions(t.attributes.position.array), this
  }
  fromMesh(t) {
    return this.fromWireframeGeometry(new b$(t.geometry)), this
  }
  fromLineSegments(t) {
    const e = t.geometry
    return this.setPositions(e.attributes.position.array), this
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ei())
    const t = this.attributes.instanceStart,
      e = this.attributes.instanceEnd
    t !== void 0 &&
      e !== void 0 &&
      (this.boundingBox.setFromBufferAttribute(t),
      rL.setFromBufferAttribute(e),
      this.boundingBox.union(rL))
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new na()),
      this.boundingBox === null && this.computeBoundingBox()
    const t = this.attributes.instanceStart,
      e = this.attributes.instanceEnd
    if (t !== void 0 && e !== void 0) {
      const n = this.boundingSphere.center
      this.boundingBox.getCenter(n)
      let i = 0
      for (let a = 0, o = t.count; a < o; a++)
        bg.fromBufferAttribute(t, a),
          (i = Math.max(i, n.distanceToSquared(bg))),
          bg.fromBufferAttribute(e, a),
          (i = Math.max(i, n.distanceToSquared(bg)))
      ;(this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.',
            this,
          )
    }
  }
  toJSON() {}
  applyMatrix(t) {
    return (
      console.warn(
        'THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().',
      ),
      this.applyMatrix4(t)
    )
  }
}
