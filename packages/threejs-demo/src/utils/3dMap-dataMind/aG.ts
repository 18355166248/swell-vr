import {cloneDeep, curry} from 'lodash-es'
import * as THREE from 'three'

const jk = 'inversify:paramtypes'
const pk = 12
const dk = 400
const fk = 'rgba(215,242,255,0.6)'
const mk = {
  fontFamily:
    'PingFang SC,Microsoft Yahei,system-ui,-apple-system,segoe ui,Roboto,Helvetica,Arial,sans-serif, apple color emoji,segoe ui emoji,segoe ui symbol',
  fontSize: pk,
  fontWeight: dk,
  color: fk,
  strokeWidth: 0,
  strokeColor: 'rgba(0,0,0,1)',
  offsetX: 0,
  offsetY: 0,
}
const yk = {
  color: null,
  opacity: 1,
  padding: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
  shadow: {
    color: 'rgb(255, 255, 255)',
    blur: 0,
    offsetX: 0,
    offsetY: 0,
  },
  borderRadius: null,
}
function Mf(t, e, i, n, r, o, a) {
  a && (Cf(t, i, n, r, o, a), t.clip()), t.drawImage(e, i, n, r, o)
}
function Cf(
  t: CanvasRenderingContext2D,
  e: number,
  i: number,
  n: number,
  r: number,
  o: number[],
) {
  t.beginPath(),
    t.translate(e, i),
    t.arc(n - o[2], r - o[2], o[2], 0, Math.PI / 2),
    t.lineTo(o[2], r),
    t.arc(o[3], r - o[3], o[3], Math.PI / 2, Math.PI),
    t.lineTo(0, o[3]),
    t.arc(o[0], o[0], o[0], Math.PI, (3 * Math.PI) / 2),
    t.lineTo(n - o[0], 0),
    t.arc(n - o[1], o[1], o[1], (3 * Math.PI) / 2, 2 * Math.PI),
    t.lineTo(n, r - o[1]),
    t.closePath()
}

function JB() {
  return function (t) {
    // if (Reflect.hasOwnMetadata(jk, t))
    //   throw new Error('Cannot apply @injectable decorator multiple times.')
    // const e = Reflect.getMetadata('design:paramtypes', t) || []
    // return Reflect.defineMetadata(jk, e, t), t
  }
}

const dG = Object.defineProperty
const fG = Object.getOwnPropertyDescriptor
const gG = class {
  constructor() {
    ;(this.textureManagerMap = {}),
      (this.imageMap = {}),
      (this.getTextureManager = (t, e) => (
        this.textureManagerMap[t]
          ? this.textureManagerMap[t][e] ||
            (this.textureManagerMap[t][e] = {
              loader: new THREE.TextureLoader(),
              abort: () => {},
              setTexture: curry(this._setTexture)(t, e),
            })
          : (this.textureManagerMap[t] = {
              [e]: {
                loader: new THREE.TextureLoader(),
                abort: () => {},
                setTexture: curry(this._setTexture)(t, e),
              },
            }),
        this.textureManagerMap[t][e]
      )),
      (this.removeTextureManager = t => {
        ;(this.textureManagerMap[t] = null), delete this.textureManagerMap[t]
      }),
      (this._setTexture = (t, e, i, n) => {
        this.textureManagerMap[t][e].abort(),
          new Promise((n, r) => {
            ;(this.textureManagerMap[t][e].abort = r), i(n)
          })
            .then(t => {
              n(t)
            })
            .catch(() => {})
      })
    // (this.logService = window.bG.get(window.KB.ILogService))
  }
  addImage(t, e, i) {
    if (this.getImage(t)) return
    new THREE.TextureLoader().load(e, e => {
      this.imageMap[t] = e.image
      i && i(e.image)
    })
  }
  async addImageAsync(t, e, i) {
    if (this.getImage(t)) return
    const n = new THREE.TextureLoader(),
      r = await n.loadAsync(e)
    this.imageMap[t] = r.image
    i && i(r.image)
  }
  getImage(t) {
    const e = this.imageMap[t]
    return e || null
  }
  getImageMap() {
    return this.imageMap
  }
  getTextureManagerMap() {
    return this.textureManagerMap
  }
}

const $B = 32 * window.devicePixelRatio,
  tG = 32 * $B,
  eG = 32 * $B

const iG = new (class {
  constructor(t, e) {
    this.width = t
    this.height = e
    const i = document.createElement('canvas')
    ;(i.height = e), (i.width = t), (this.ctx = i.getContext('2d'))
  }
  async createTextImage(t, e) {
    const {textSeries: i, background: n, orient: r, alignment: o} = e
    this.ctx.clearRect(0, 0, this.width, this.height),
      (this.ctx.textBaseline = 'top')
    let a = 0
    let s = 0
    const l = $B / i[0].props.fontSize
    const u = 0 + (n.shadow.blur * l) / 2
    const c = 0 + (n.shadow.blur * l) / 2
    i.forEach(t => {
      const {
        text: e,
        props: {
          fontWeight: n,
          fontFamily: o,
          fontSize: u,
          offsetX: c = 0,
          offsetY: h = 0,
        },
      } = t
      let p = $B * (u / i[0].props.fontSize)
      this.ctx.font = `${n} ${p}px ${o} `
      const d = this.ctx.measureText(String(e)).width + c * l
      p += h * l
      const f = {
        x: 0,
        y: 0,
      }
      switch (r) {
        case 'vertical':
          f.x = c * l
          f.y = s + h * l
          a = a > d ? a : d
          s += p
          break
        case 'horizontal':
          f.y = h * l
          f.x = a + c * l
          a += d
          s = s > p ? s : p
          break
        default:
          console.error('[xGis]', `传入 poi orient ${r} 无法解析`)
      }
      t.origin = f
    })
    const h = s + n.padding.top * l + n.padding.bottom * l,
      p = a + n.padding.left * l + n.padding.right * l
    if (
      (n.shadow &&
        ((this.ctx.shadowBlur = n.shadow.blur * l),
        (this.ctx.shadowOffsetX = n.shadow.offsetX * l),
        (this.ctx.shadowOffsetY = -n.shadow.offsetY * l),
        (this.ctx.shadowColor = n.shadow.color)),
      n.map)
    ) {
      const e = t.getImage(n.map)
      this.ctx.save(),
        (this.ctx.globalAlpha = n.opacity),
        e
          ? Mf(
              this.ctx,
              e,
              u,
              c,
              p,
              h,
              n.borderRadius ? n.borderRadius.map(t => t * l) : null,
            )
          : await t.addImageAsync(n.map, n.map, t => {
              Mf(
                this.ctx,
                t,
                u,
                c,
                p,
                h,
                n.borderRadius ? n.borderRadius.map(t => t * l) : null,
              )
            }),
        this.ctx.restore()
    } else
      n.color &&
        (this.ctx.save(),
        (d = this.ctx),
        (f = n.color),
        (g = u),
        (m = c),
        (y = p),
        (v = h),
        (b = n.borderRadius ? n.borderRadius.map(t => t * l) : null),
        (d.fillStyle = f),
        b ? (Cf(d, g, m, y, v, b), d.fill()) : d.fillRect(g, m, y, v),
        this.ctx.restore())
    let d, f, g, m, y, v, b
    i.forEach(t => {
      const {
          text: e,
          props: {
            fontWeight: h,
            fontFamily: p,
            fontSize: d,
            color: f,
            offsetX: g,
            offsetY: m,
            strokeWidth: y,
            strokeColor: v,
          },
        } = t,
        b = $B * (d / i[0].props.fontSize)
      this.ctx.font = `${h} ${b}px ${p} `
      const x = this.ctx.measureText(String(e))
      switch (r) {
        case 'vertical':
          switch (o) {
            case 'top':
              t.origin.x += 0
              break
            case 'bottom':
              t.origin.x += a - (x.width + g * l)
              break
            case 'middle':
              t.origin.x += (a - (x.width + g * l)) / 2
              break
            default:
              console.error('[xGis]', `传入 poi alignment ${o} 无法解析`)
          }
          break
        case 'horizontal':
          switch (o) {
            case 'top':
              t.origin.y += 0
              break
            case 'bottom':
              t.origin.y += s - (b + m * l)
              break
            case 'middle':
              t.origin.y += (s - (b + m * l)) / 2
              break
            default:
              console.error('[xGis]', `传入 poi alignment ${o} 无法解析`)
          }
          break
        default:
          console.error('[xGis]', `传入 poi orient ${r} 无法解析`)
      }
      ;(this.ctx.globalAlpha = 1), (this.ctx.fillStyle = f)
      const _ = x.actualBoundingBoxAscent || 0,
        S = t.origin.x + u + n.padding.left * l,
        M = t.origin.y + c - _ + n.padding.top * l
      y &&
        ((this.ctx.strokeStyle = v),
        (this.ctx.lineWidth = y * l),
        this.ctx.strokeText(String(e), S, M)),
        this.ctx.fillText(String(e), S, M)
    })
    const x = p + n.shadow.blur * l
    const _ = h + n.shadow.blur * l
    return this.ctx.getImageData(0, 0, x, _)
  }
})(tG, eG)

class nG extends THREE.RawShaderMaterial {
  constructor(t) {
    super({
      transparent: !0,
      fragmentShader:
        'precision highp float;\nvarying vec2 vUv;\nuniform sampler2D uMap;\nvoid main() {\n  vec4 tex = texture2D(uMap, vUv);\n  gl_FragColor = tex;\n}',
      vertexShader:
        'precision highp float;\nattribute vec3 position;\nattribute vec2 uv;\nvarying vec2 vUv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}',
      uniforms: {
        uMap: {
          value: null,
        },
      },
    })
    this.props = t
    // this.textureService = window.bG.get(window.KB.ITextureService)
    this.textureService = new gG()
  }
  async init() {
    const t = await iG.createTextImage(this.textureService, this.props)
    const e = new THREE.DataTexture(t, t.width, t.height)
    e.flipY = !0
    e.minFilter = THREE.LinearFilter
    e.magFilter = THREE.LinearFilter
    this.uniforms.uMap.value = e
    this.imageWidth = t.width
    this.imageHeight = t.height
    this.needsUpdate = !0
  }
}

const aG = class {
  constructor() {}
  async createText(t) {
    return await this.create2DText(t)
  }
  async create2DText(t) {
    const {
      position: e,
      textSeries: i,
      background: n,
      orient: r,
      zIndex: o,
      alignment: a,
      offsetX: s,
      offsetY: l,
    } = t
    const u = {
      position: e,
      alignment: a,
      orient: r,
      zIndex: o,
      offsetX: s,
      offsetY: l,
      textSeries: i.map(t =>
        cloneDeep(t, {
          props: cloneDeep(mk, t.props),
        }),
      ),
      background: cloneDeep(yk, n),
    }
    const c = new THREE.PlaneGeometry(1, 1, 1, 1)
    const h = new nG(u)
    await h.init()
    const p = (h.imageWidth / $B) * i[0].props.fontSize
    const d = (h.imageHeight / $B) * i[0].props.fontSize
    c.translate(0, 0, 0), c.scale(p, d, 1)
    const f = new THREE.Mesh(c, h)
    f.renderOrder = 0
    f.position.set(e.x + s, e.y + l, e.z)
    return f
  }
}

export default aG
