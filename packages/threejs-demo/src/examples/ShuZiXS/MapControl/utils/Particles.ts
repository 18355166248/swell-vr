import * as THREE from 'three'
import {TimeManager} from '../MapApplication.js'

class Particles {
  instance: THREE.Points | null
  time: TimeManager
  enable: boolean
  config: {
    num: number
    range: number
    speed: number
    renderOrder: number
    dir: string
    material: THREE.PointsMaterial
  }
  constructor({time}: {time: TimeManager}, n = {}) {
    this.instance = null
    this.time = time
    this.enable = true
    this.config = Object.assign(
      {
        num: 100,
        range: 500,
        speed: 0.01,
        renderOrder: 99,
        dir: 'up',
        material: new THREE.PointsMaterial({
          map: Particles.createTexture(),
          size: 20,
          color: 16777215,
          transparent: true,
          opacity: 1,
          depthTest: false,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        }),
      },
      n,
    )
    this.create()
  }
  create() {
    const {
      range,
      // speed: n,
      dir,
      material,
      num,
      renderOrder,
    } = this.config
    const s = []
    const a = []
    const h = []
    for (let u = 0; u < num; u++) {
      s.push(
        Math.random() * range - range / 2,
        Math.random() * range - range / 2,
        Math.random() * range - range / 2,
      )
      const i = dir === 'up' ? 1 : -1
      h.push(
        Math.random() * i,
        (0.1 + Math.random()) * i,
        0.1 + Math.random() * i,
      )
      const o = material.color.clone()
      const l = {h: 0, s: 0, l: 0}
      o.getHSL(l)
      o.setHSL(l.h, l.s, l.l * Math.random())
      a.push(o.r, o.g, o.b)
    }
    const t = new THREE.BufferGeometry()
    t.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(s), 3),
    )
    t.setAttribute(
      'velocities',
      new THREE.BufferAttribute(new Float32Array(h), 3),
    )
    t.setAttribute('color', new THREE.BufferAttribute(new Float32Array(a), 3))
    this.instance = new THREE.Points(t, material)
    this.instance.renderOrder = renderOrder
  }
  static createTexture() {
    const e = document.createElement('canvas')
    e.width = 1024
    e.height = 1024
    const n = e.getContext('2d')
    if (!n) return null
    const r = n.createRadialGradient(512, 512, 0, 512, 512, 512)

    r.addColorStop(0, 'rgba(255,255,255,1)')
    r.addColorStop(1, 'rgba(255,255,255,0)')
    n.fillStyle = r
    n.fillRect(0, 0, 1024, 1024)
    return new THREE.CanvasTexture(e)
  }
  update(e: number, n: number) {
    if (!this.instance) return !1
    const {range: r, speed: c, dir: g} = this.config
    const d = g === 'up' ? 1 : -1,
      s = this.instance.geometry.getAttribute('position'),
      a = this.instance.geometry.getAttribute('velocities')
    const h = s.count
    for (let t = 0; t < h; t++) {
      let u = s.getX(t)
      s.getY(t)
      let i = s.getZ(t)
      const o = a.getX(t)
      const l = a.getY(t)
      a.getZ(t)
      u += Math.sin(o * n) * e
      i += c * d
      i > r / 2 && d === 1 && (i = -r / 2)
      i < -r / 2 && d == -1 && (i = r / 2)
      s.setX(t, u)
      s.setZ(t, i)
      a.setX(t, o)
      a.setY(t, l)
    }
    s.needsUpdate = true
    a.needsUpdate = true
  }
  setParent(e: THREE.Object3D) {
    e.add(this.instance!)
    this.time.on('tick', (n, r) => {
      this.enable && this.update(n, r)
    })
  }
}

export default Particles
