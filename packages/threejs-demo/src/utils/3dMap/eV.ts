import * as THREE from 'three'

// eV 类可以理解为一个用于POI(Point of Interest)标签显示的自定义组件。它不是Three.js原生的类，而是在Three.js的基础上进行了封装，专门用于处理3D场景中的文本标签展示需求。
// 这个类似乎是为地图或GIS应用设计的，特别是基于它包含的 zIndex 属性和对 coreCamera、hudCamera 的引用，这些都是典型的GIS可视化应用中的常见功能。
// 总结来说，eV 是一个在Three.js基础上构建的文本标签管理器，专门用于在3D场景中展示和管理POI标签。
class eV extends THREE.Group {
  constructor(t = 0) {
    // console.log("🚀 ~ eV ~ constructor ~ t:", t);
    super()
    this.zIndex = t
    this.__asyncTaskPool = []
    this.__prevVisible = !1
    this.__moving = !1
  }
  set moving(t) {
    this.__moving !== t &&
      (t
        ? ((this.__prevVisible = this.visible),
          (this.__moving = !0),
          (this.visible = !1))
        : ((this.__moving = !1), (this.visible = this.__prevVisible)))
  }
  async addText(t, e, i, n, r, o, a, s, l) {
    const u = []
    r &&
      u.push({
        text: r.content,
        props: r.props,
      }),
      o &&
        u.push({
          text: o.content,
          props: o.props,
        })
    const c = (function (t) {
      let e
      return {
        promise: new Promise((i, n) => {
          ;(e = n), t && t(i, n)
        }),
        abort: () => {
          e('async promise is aborted')
        },
      }
    })(async (r, o) => {
      r(
        await this.textService.createText({
          position: t,
          textSeries: u,
          alignment: i,
          background: n,
          orient: e,
          zIndex: this.zIndex,
          offsetX: a,
          offsetY: s,
        }),
      )
    })
    this.__asyncTaskPool.push(c)
    try {
      const t = await c.promise
      ;(t.ext = l), this.add(t)
    } catch (h) {
      this.logService.warn(h)
    }
  }
  collision() {
    const t = []
    this.children.forEach(e => {
      let i = !0
      for (let n = 0; n < t.length; n++) {
        if (ZH(e, t[n])) {
          i = !1
          break
        }
        i = !0
      }
      i ? ((e.visible = !0), t.push(e)) : (e.visible = !1)
    })
  }
  updateTextPosition(t, e) {
    this.children.forEach(i => {
      const n = new Ye(...i.ext.position)
      n.applyMatrix4(t)
      const r = n.project(e.coreCamera).unproject(e.hudCamera)
      i.position.set(r.x + i.ext.offsetX, r.y + i.ext.offsetY, 0)
    })
  }
  updateBaseHeight(t) {
    this.children.forEach(e => {
      e.ext.position[2] = t
    })
  }
  active(t) {
    if (!t)
      return void this.hide({
        each: !0,
      })
    const {id: e, instanceId: i} = t
    cf(i)
      ? this.children.forEach(t => {
          t.ext.relatedInstanceId === i ? (t.visible = !0) : (t.visible = !1)
        })
      : this.children.forEach(t => {
          let i
          ;(null == (i = t.ext.relatedMeshIds) ? void 0 : i.includes(e))
            ? (t.visible = !0)
            : (t.visible = !1)
        })
  }
  abort() {
    this.__asyncTaskPool.forEach(t => t.abort()), (this.__asyncTaskPool = [])
  }
  hide(t) {
    if (!t) return void (this.visible = !1)
    const {each: e} = t
    e &&
      this.children.forEach(t => {
        t.visible = !1
      })
  }
  show(t) {
    if (!t) return void (this.visible = !0)
    const {each: e} = t
    e &&
      this.children.forEach(t => {
        t.visible = !0
      })
  }
}

export default eV
