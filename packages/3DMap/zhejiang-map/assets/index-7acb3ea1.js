;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver(r => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, {
    childList: !0,
    subtree: !0,
  })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
})()
/**
 * @vue/shared v3.5.0
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function zs(e, t) {
  const n = new Set(e.split(','))
  return t ? s => n.has(s.toLowerCase()) : s => n.has(s)
}
const oe = {},
  Ut = [],
  Ue = () => {},
  wl = () => !1,
  Yn = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  qs = e => e.startsWith('onUpdate:'),
  fe = Object.assign,
  Gs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Tl = Object.prototype.hasOwnProperty,
  W = (e, t) => Tl.call(e, t),
  F = Array.isArray,
  Kt = e => Xn(e) === '[object Map]',
  Oo = e => Xn(e) === '[object Set]',
  V = e => typeof e == 'function',
  ae = e => typeof e == 'string',
  St = e => typeof e == 'symbol',
  ie = e => e !== null && typeof e == 'object',
  Ao = e => (ie(e) || V(e)) && V(e.then) && V(e.catch),
  Io = Object.prototype.toString,
  Xn = e => Io.call(e),
  Rl = e => Xn(e).slice(8, -1),
  Mo = e => Xn(e) === '[object Object]',
  Js = e => ae(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  on = zs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Zn = e => {
    const t = Object.create(null)
    return n => t[n] || (t[n] = e(n))
  },
  xl = /-(\w)/g,
  ze = Zn(e => e.replace(xl, (t, n) => (n ? n.toUpperCase() : ''))),
  Pl = /\B([A-Z])/g,
  Lt = Zn(e => e.replace(Pl, '-$1').toLowerCase()),
  es = Zn(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Ln = Zn(e => (e ? `on${es(e)}` : '')),
  Et = (e, t) => !Object.is(e, t),
  ps = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Do = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  Ol = e => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Al = e => {
    const t = ae(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Cr
const No = () =>
  Cr ||
  (Cr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
function Cn(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ae(s) ? Nl(s) : Cn(s)
      if (r) for (const o in r) t[o] = r[o]
    }
    return t
  } else if (ae(e) || ie(e)) return e
}
const Il = /;(?![^(]*\))/g,
  Ml = /:([^]+)/,
  Dl = /\/\*[^]*?\*\//g
function Nl(e) {
  const t = {}
  return (
    e
      .replace(Dl, '')
      .split(Il)
      .forEach(n => {
        if (n) {
          const s = n.split(Ml)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function at(e) {
  let t = ''
  if (ae(e)) t = e
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = at(e[n])
      s && (t += s + ' ')
    }
  else if (ie(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Ll =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  $l = zs(Ll)
function Lo(e) {
  return !!e || e === ''
}
const $o = e => !!(e && e.__v_isRef === !0),
  Qs = e =>
    ae(e)
      ? e
      : e == null
      ? ''
      : F(e) || (ie(e) && (e.toString === Io || !V(e.toString)))
      ? $o(e)
        ? Qs(e.value)
        : JSON.stringify(e, Bo, 2)
      : String(e),
  Bo = (e, t) =>
    $o(t)
      ? Bo(e, t.value)
      : Kt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], o) => ((n[gs(s, o) + ' =>'] = r), n),
            {},
          ),
        }
      : Oo(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map(n => gs(n)),
        }
      : St(t)
      ? gs(t)
      : ie(t) && !F(t) && !Mo(t)
      ? String(t)
      : t,
  gs = (e, t = '') => {
    var n
    return St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.0
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Pe
class Bl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Pe),
      !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Pe
      try {
        return (Pe = this), t()
      } finally {
        Pe = n
      }
    }
  }
  on() {
    Pe = this
  }
  off() {
    Pe = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Fl() {
  return Pe
}
let re
const ms = new WeakSet()
class Fo {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.nextEffect = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Pe && Pe.active && Pe.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), ms.has(this) && (ms.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) ||
      this.flags & 8 ||
      ((this.flags |= 8), (this.nextEffect = ln), (ln = this))
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Er(this), Vo(this)
    const t = re,
      n = Ke
    ;(re = this), (Ke = !0)
    try {
      return this.fn()
    } finally {
      jo(this), (re = t), (Ke = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Zs(t)
      ;(this.deps = this.depsTail = void 0),
        Er(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? ms.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty()
  }
  runIfDirty() {
    As(this) && this.run()
  }
  get dirty() {
    return As(this)
  }
}
let Ho = 0,
  ln
function Ys() {
  Ho++
}
function Xs() {
  if (--Ho > 0) return
  let e
  for (; ln; ) {
    let t = ln
    for (ln = void 0; t; ) {
      const n = t.nextEffect
      if (((t.nextEffect = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function Vo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function jo(e) {
  let t,
    n = e.depsTail
  for (let s = n; s; s = s.prevDep)
    s.version === -1 ? (s === n && (n = s.prevDep), Zs(s), Hl(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0)
  ;(e.deps = t), (e.depsTail = n)
}
function As(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && ko(t.dep.computed) === !1) ||
      t.dep.version !== t.version
    )
      return !0
  return !!e._dirty
}
function ko(e) {
  if (e.flags & 2) return !1
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === dn)
  )
    return
  e.globalVersion = dn
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && !As(e))) {
    e.flags &= -3
    return
  }
  const n = re,
    s = Ke
  ;(re = e), (Ke = !0)
  try {
    Vo(e)
    const r = e.fn()
    ;(t.version === 0 || Et(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(re = n), (Ke = s), jo(e), (e.flags &= -3)
  }
}
function Zs(e) {
  const {dep: t, prevSub: n, nextSub: s} = e
  if (
    (n && ((n.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = n), (e.nextSub = void 0)),
    t.subs === e && (t.subs = n),
    !t.subs && t.computed)
  ) {
    t.computed.flags &= -5
    for (let r = t.computed.deps; r; r = r.nextDep) Zs(r)
  }
}
function Hl(e) {
  const {prevDep: t, nextDep: n} = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Ke = !0
const Uo = []
function wt() {
  Uo.push(Ke), (Ke = !1)
}
function Tt() {
  const e = Uo.pop()
  Ke = e === void 0 ? !0 : e
}
function Er(e) {
  const {cleanup: t} = e
  if (((e.cleanup = void 0), t)) {
    const n = re
    re = void 0
    try {
      t()
    } finally {
      re = n
    }
  }
}
let dn = 0
class er {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0)
  }
  track(t) {
    if (!re || !Ke) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== re)
      (n = this.activeLink =
        {
          dep: this,
          sub: re,
          version: this.version,
          nextDep: void 0,
          prevDep: void 0,
          nextSub: void 0,
          prevSub: void 0,
          prevActiveLink: void 0,
        }),
        re.deps
          ? ((n.prevDep = re.depsTail),
            (re.depsTail.nextDep = n),
            (re.depsTail = n))
          : (re.deps = re.depsTail = n),
        re.flags & 4 && Ko(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = re.depsTail),
        (n.nextDep = void 0),
        (re.depsTail.nextDep = n),
        (re.depsTail = n),
        re.deps === n && (re.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, dn++, this.notify(t)
  }
  notify(t) {
    Ys()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify()
    } finally {
      Xs()
    }
  }
}
function Ko(e) {
  const t = e.dep.computed
  if (t && !e.dep.subs) {
    t.flags |= 20
    for (let s = t.deps; s; s = s.nextDep) Ko(s)
  }
  const n = e.dep.subs
  n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
}
const kn = new WeakMap(),
  Mt = Symbol(''),
  Is = Symbol(''),
  hn = Symbol('')
function be(e, t, n) {
  if (Ke && re) {
    let s = kn.get(e)
    s || kn.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = new er())), r.track()
  }
}
function lt(e, t, n, s, r, o) {
  const i = kn.get(e)
  if (!i) {
    dn++
    return
  }
  let l = []
  if (t === 'clear') l = [...i.values()]
  else {
    const c = F(e),
      f = c && Js(n)
    if (c && n === 'length') {
      const a = Number(s)
      i.forEach((h, p) => {
        ;(p === 'length' || p === hn || (!St(p) && p >= a)) && l.push(h)
      })
    } else {
      const a = h => h && l.push(h)
      switch ((n !== void 0 && a(i.get(n)), f && a(i.get(hn)), t)) {
        case 'add':
          c ? f && a(i.get('length')) : (a(i.get(Mt)), Kt(e) && a(i.get(Is)))
          break
        case 'delete':
          c || (a(i.get(Mt)), Kt(e) && a(i.get(Is)))
          break
        case 'set':
          Kt(e) && a(i.get(Mt))
          break
      }
    }
  }
  Ys()
  for (const c of l) c.trigger()
  Xs()
}
function Vl(e, t) {
  var n
  return (n = kn.get(e)) == null ? void 0 : n.get(t)
}
function Ft(e) {
  const t = z(e)
  return t === e ? t : (be(t, 'iterate', hn), We(e) ? t : t.map(_e))
}
function ts(e) {
  return be((e = z(e)), 'iterate', hn), e
}
const jl = {
  __proto__: null,
  [Symbol.iterator]() {
    return vs(this, Symbol.iterator, _e)
  },
  concat(...e) {
    return Ft(this).concat(...e.map(t => Ft(t)))
  },
  entries() {
    return vs(this, 'entries', e => ((e[1] = _e(e[1])), e))
  },
  every(e, t) {
    return nt(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return nt(this, 'filter', e, t, n => n.map(_e), arguments)
  },
  find(e, t) {
    return nt(this, 'find', e, t, _e, arguments)
  },
  findIndex(e, t) {
    return nt(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return nt(this, 'findLast', e, t, _e, arguments)
  },
  findLastIndex(e, t) {
    return nt(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return nt(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return ys(this, 'includes', e)
  },
  indexOf(...e) {
    return ys(this, 'indexOf', e)
  },
  join(e) {
    return Ft(this).join(e)
  },
  lastIndexOf(...e) {
    return ys(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return nt(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return en(this, 'pop')
  },
  push(...e) {
    return en(this, 'push', e)
  },
  reduce(e, ...t) {
    return Sr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return Sr(this, 'reduceRight', e, t)
  },
  shift() {
    return en(this, 'shift')
  },
  some(e, t) {
    return nt(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return en(this, 'splice', e)
  },
  toReversed() {
    return Ft(this).toReversed()
  },
  toSorted(e) {
    return Ft(this).toSorted(e)
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e)
  },
  unshift(...e) {
    return en(this, 'unshift', e)
  },
  values() {
    return vs(this, 'values', _e)
  },
}
function vs(e, t, n) {
  const s = ts(e),
    r = s[t]()
  return (
    s !== e &&
      !We(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const o = r._next()
        return o.value && (o.value = n(o.value)), o
      })),
    r
  )
}
const kl = Array.prototype
function nt(e, t, n, s, r, o) {
  const i = ts(e),
    l = i !== e && !We(e),
    c = i[t]
  if (c !== kl[t]) {
    const h = c.apply(e, o)
    return l ? _e(h) : h
  }
  let f = n
  i !== e &&
    (l
      ? (f = function (h, p) {
          return n.call(this, _e(h), p, e)
        })
      : n.length > 2 &&
        (f = function (h, p) {
          return n.call(this, h, p, e)
        }))
  const a = c.call(i, f, s)
  return l && r ? r(a) : a
}
function Sr(e, t, n, s) {
  const r = ts(e)
  let o = n
  return (
    r !== e &&
      (We(e)
        ? n.length > 3 &&
          (o = function (i, l, c) {
            return n.call(this, i, l, c, e)
          })
        : (o = function (i, l, c) {
            return n.call(this, i, _e(l), c, e)
          })),
    r[t](o, ...s)
  )
}
function ys(e, t, n) {
  const s = z(e)
  be(s, 'iterate', hn)
  const r = s[t](...n)
  return (r === -1 || r === !1) && rr(n[0]) ? ((n[0] = z(n[0])), s[t](...n)) : r
}
function en(e, t, n = []) {
  wt(), Ys()
  const s = z(e)[t].apply(e, n)
  return Xs(), Tt(), s
}
const Ul = zs('__proto__,__v_isRef,__isVue'),
  Wo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(St),
  )
function Kl(e) {
  St(e) || (e = String(e))
  const t = z(this)
  return be(t, 'has', e), t.hasOwnProperty(e)
}
class zo {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (r ? (o ? sc : Qo) : o ? Jo : Go).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = F(t)
    if (!r) {
      let c
      if (i && (c = jl[n])) return c
      if (n === 'hasOwnProperty') return Kl
    }
    const l = Reflect.get(t, n, ve(t) ? t : s)
    return (St(n) ? Wo.has(n) : Ul(n)) || (r || be(t, 'get', n), o)
      ? l
      : ve(l)
      ? i && Js(n)
        ? l
        : l.value
      : ie(l)
      ? r
        ? Xo(l)
        : En(l)
      : l
  }
}
class qo extends zo {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let o = t[n]
    if (!this._isShallow) {
      const c = Dt(o)
      if (
        (!We(s) && !Dt(s) && ((o = z(o)), (s = z(s))), !F(t) && ve(o) && !ve(s))
      )
        return c ? !1 : ((o.value = s), !0)
    }
    const i = F(t) && Js(n) ? Number(n) < t.length : W(t, n),
      l = Reflect.set(t, n, s, ve(t) ? t : r)
    return (
      t === z(r) && (i ? Et(s, o) && lt(t, 'set', n, s) : lt(t, 'add', n, s)), l
    )
  }
  deleteProperty(t, n) {
    const s = W(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && lt(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!St(n) || !Wo.has(n)) && be(t, 'has', n), s
  }
  ownKeys(t) {
    return be(t, 'iterate', F(t) ? 'length' : Mt), Reflect.ownKeys(t)
  }
}
class Wl extends zo {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const zl = new qo(),
  ql = new Wl(),
  Gl = new qo(!0)
const tr = e => e,
  ns = e => Reflect.getPrototypeOf(e)
function Pn(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = z(e),
    o = z(t)
  n || (Et(t, o) && be(r, 'get', t), be(r, 'get', o))
  const {has: i} = ns(r),
    l = s ? tr : n ? or : _e
  if (i.call(r, t)) return l(e.get(t))
  if (i.call(r, o)) return l(e.get(o))
  e !== r && e.get(t)
}
function On(e, t = !1) {
  const n = this.__v_raw,
    s = z(n),
    r = z(e)
  return (
    t || (Et(e, r) && be(s, 'has', e), be(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function An(e, t = !1) {
  return (
    (e = e.__v_raw), !t && be(z(e), 'iterate', Mt), Reflect.get(e, 'size', e)
  )
}
function wr(e, t = !1) {
  !t && !We(e) && !Dt(e) && (e = z(e))
  const n = z(this)
  return ns(n).has.call(n, e) || (n.add(e), lt(n, 'add', e, e)), this
}
function Tr(e, t, n = !1) {
  !n && !We(t) && !Dt(t) && (t = z(t))
  const s = z(this),
    {has: r, get: o} = ns(s)
  let i = r.call(s, e)
  i || ((e = z(e)), (i = r.call(s, e)))
  const l = o.call(s, e)
  return (
    s.set(e, t), i ? Et(t, l) && lt(s, 'set', e, t) : lt(s, 'add', e, t), this
  )
}
function Rr(e) {
  const t = z(this),
    {has: n, get: s} = ns(t)
  let r = n.call(t, e)
  r || ((e = z(e)), (r = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return r && lt(t, 'delete', e, void 0), o
}
function xr() {
  const e = z(this),
    t = e.size !== 0,
    n = e.clear()
  return t && lt(e, 'clear', void 0, void 0), n
}
function In(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = z(i),
      c = t ? tr : e ? or : _e
    return (
      !e && be(l, 'iterate', Mt), i.forEach((f, a) => s.call(r, c(f), c(a), o))
    )
  }
}
function Mn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = z(r),
      i = Kt(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      c = e === 'keys' && i,
      f = r[e](...s),
      a = n ? tr : t ? or : _e
    return (
      !t && be(o, 'iterate', c ? Is : Mt),
      {
        next() {
          const {value: h, done: p} = f.next()
          return p
            ? {
                value: h,
                done: p,
              }
            : {
                value: l ? [a(h[0]), a(h[1])] : a(h),
                done: p,
              }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function pt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Jl() {
  const e = {
      get(o) {
        return Pn(this, o)
      },
      get size() {
        return An(this)
      },
      has: On,
      add: wr,
      set: Tr,
      delete: Rr,
      clear: xr,
      forEach: In(!1, !1),
    },
    t = {
      get(o) {
        return Pn(this, o, !1, !0)
      },
      get size() {
        return An(this)
      },
      has: On,
      add(o) {
        return wr.call(this, o, !0)
      },
      set(o, i) {
        return Tr.call(this, o, i, !0)
      },
      delete: Rr,
      clear: xr,
      forEach: In(!1, !0),
    },
    n = {
      get(o) {
        return Pn(this, o, !0)
      },
      get size() {
        return An(this, !0)
      },
      has(o) {
        return On.call(this, o, !0)
      },
      add: pt('add'),
      set: pt('set'),
      delete: pt('delete'),
      clear: pt('clear'),
      forEach: In(!0, !1),
    },
    s = {
      get(o) {
        return Pn(this, o, !0, !0)
      },
      get size() {
        return An(this, !0)
      },
      has(o) {
        return On.call(this, o, !0)
      },
      add: pt('add'),
      set: pt('set'),
      delete: pt('delete'),
      clear: pt('clear'),
      forEach: In(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(o => {
      ;(e[o] = Mn(o, !1, !1)),
        (n[o] = Mn(o, !0, !1)),
        (t[o] = Mn(o, !1, !0)),
        (s[o] = Mn(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [Ql, Yl, Xl, Zl] = Jl()
function nr(e, t) {
  const n = t ? (e ? Zl : Xl) : e ? Yl : Ql
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(W(n, r) && r in s ? n : s, r, o)
}
const ec = {
    get: nr(!1, !1),
  },
  tc = {
    get: nr(!1, !0),
  },
  nc = {
    get: nr(!0, !1),
  }
const Go = new WeakMap(),
  Jo = new WeakMap(),
  Qo = new WeakMap(),
  sc = new WeakMap()
function rc(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function oc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rc(Rl(e))
}
function En(e) {
  return Dt(e) ? e : sr(e, !1, zl, ec, Go)
}
function Yo(e) {
  return sr(e, !1, Gl, tc, Jo)
}
function Xo(e) {
  return sr(e, !0, ql, nc, Qo)
}
function sr(e, t, n, s, r) {
  if (!ie(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = r.get(e)
  if (o) return o
  const i = oc(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? s : n)
  return r.set(e, l), l
}
function Wt(e) {
  return Dt(e) ? Wt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Dt(e) {
  return !!(e && e.__v_isReadonly)
}
function We(e) {
  return !!(e && e.__v_isShallow)
}
function rr(e) {
  return e ? !!e.__v_raw : !1
}
function z(e) {
  const t = e && e.__v_raw
  return t ? z(t) : e
}
function ic(e) {
  return Object.isExtensible(e) && Do(e, '__v_skip', !0), e
}
const _e = e => (ie(e) ? En(e) : e),
  or = e => (ie(e) ? Xo(e) : e)
function ve(e) {
  return e ? e.__v_isRef === !0 : !1
}
function lc(e) {
  return Zo(e, !1)
}
function cc(e) {
  return Zo(e, !0)
}
function Zo(e, t) {
  return ve(e) ? e : new ac(e, t)
}
class ac {
  constructor(t, n) {
    ;(this.dep = new er()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : z(t)),
      (this._value = n ? t : _e(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || We(t) || Dt(t)
    ;(t = s ? t : z(t)),
      Et(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : _e(t)),
        this.dep.trigger())
  }
}
function Ct(e) {
  return ve(e) ? e.value : e
}
const uc = {
  get: (e, t, n) => Ct(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return ve(r) && !ve(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function ei(e) {
  return Wt(e) ? e : new Proxy(e, uc)
}
function md(e) {
  const t = F(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = dc(e, n)
  return t
}
class fc {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Vl(z(this._object), this._key)
  }
}
function dc(e, t, n) {
  const s = e[t]
  return ve(s) ? s : new fc(e, t, n)
}
class hc {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new er(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = dn - 1),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    re !== this && ((this.flags |= 16), this.dep.notify())
  }
  get value() {
    const t = this.dep.track()
    return ko(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function pc(e, t, n = !1) {
  let s, r
  return V(e) ? (s = e) : ((s = e.get), (r = e.set)), new hc(s, r, n)
}
const Dn = {},
  Un = new WeakMap()
let Ot
function gc(e, t = !1, n = Ot) {
  if (n) {
    let s = Un.get(n)
    s || Un.set(n, (s = [])), s.push(e)
  }
}
function mc(e, t, n = oe) {
  const {
      immediate: s,
      deep: r,
      once: o,
      scheduler: i,
      augmentJob: l,
      call: c,
    } = n,
    f = A => (r ? A : We(A) || r === !1 || r === 0 ? it(A, 1) : it(A))
  let a,
    h,
    p,
    m,
    P = !1,
    O = !1
  if (
    (ve(e)
      ? ((h = () => e.value), (P = We(e)))
      : Wt(e)
      ? ((h = () => f(e)), (P = !0))
      : F(e)
      ? ((O = !0),
        (P = e.some(A => Wt(A) || We(A))),
        (h = () =>
          e.map(A => {
            if (ve(A)) return A.value
            if (Wt(A)) return f(A)
            if (V(A)) return c ? c(A, 2) : A()
          })))
      : V(e)
      ? t
        ? (h = c ? () => c(e, 2) : e)
        : (h = () => {
            if (p) {
              wt()
              try {
                p()
              } finally {
                Tt()
              }
            }
            const A = Ot
            Ot = a
            try {
              return c ? c(e, 3, [m]) : e(m)
            } finally {
              Ot = A
            }
          })
      : (h = Ue),
    t && r)
  ) {
    const A = h,
      U = r === !0 ? 1 / 0 : r
    h = () => it(A(), U)
  }
  const k = Fl(),
    $ = () => {
      a.stop(), k && Gs(k.effects, a)
    }
  if (o)
    if (t) {
      const A = t
      t = (...U) => {
        A(...U), $()
      }
    } else {
      const A = h
      h = () => {
        A(), $()
      }
    }
  let I = O ? new Array(e.length).fill(Dn) : Dn
  const N = A => {
    if (!(!(a.flags & 1) || (!a.dirty && !A)))
      if (t) {
        const U = a.run()
        if (r || P || (O ? U.some((te, Z) => Et(te, I[Z])) : Et(U, I))) {
          p && p()
          const te = Ot
          Ot = a
          try {
            const Z = [U, I === Dn ? void 0 : O && I[0] === Dn ? [] : I, m]
            c ? c(t, 3, Z) : t(...Z), (I = U)
          } finally {
            Ot = te
          }
        }
      } else a.run()
  }
  return (
    l && l(N),
    (a = new Fo(h)),
    (a.scheduler = i ? () => i(N, !1) : N),
    (m = A => gc(A, !1, a)),
    (p = a.onStop =
      () => {
        const A = Un.get(a)
        if (A) {
          if (c) c(A, 4)
          else for (const U of A) U()
          Un.delete(a)
        }
      }),
    t ? (s ? N(!0) : (I = a.run())) : i ? i(N.bind(null, !0), !0) : a.run(),
    ($.pause = a.pause.bind(a)),
    ($.resume = a.resume.bind(a)),
    ($.stop = $),
    $
  )
}
function it(e, t = 1 / 0, n) {
  if (t <= 0 || !ie(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, ve(e))) it(e.value, t, n)
  else if (F(e)) for (let s = 0; s < e.length; s++) it(e[s], t, n)
  else if (Oo(e) || Kt(e))
    e.forEach(s => {
      it(s, t, n)
    })
  else if (Mo(e)) {
    for (const s in e) it(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && it(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.0
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Sn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    ss(r, t, n)
  }
}
function qe(e, t, n, s) {
  if (V(e)) {
    const r = Sn(e, t, n, s)
    return (
      r &&
        Ao(r) &&
        r.catch(o => {
          ss(o, t, n)
        }),
      r
    )
  }
  if (F(e)) {
    const r = []
    for (let o = 0; o < e.length; o++) r.push(qe(e[o], t, n, s))
    return r
  }
}
function ss(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    {errorHandler: o, throwUnhandledErrorInProduction: i} =
      (t && t.appContext.config) || oe
  if (t) {
    let l = t.parent
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const a = l.ec
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, c, f) === !1) return
      }
      l = l.parent
    }
    if (o) {
      wt(), Sn(o, null, 10, [e, c, f]), Tt()
      return
    }
  }
  vc(e, n, r, s, i)
}
function vc(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
let pn = !1,
  Ms = !1
const Ie = []
let At = 0
const zt = []
let yt = null,
  Vt = 0
const ti = Promise.resolve()
let ir = null
function lr(e) {
  const t = ir || ti
  return e ? t.then(this ? e.bind(this) : e) : t
}
function yc(e) {
  let t = pn ? At + 1 : 0,
    n = Ie.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ie[s],
      o = gn(r)
    o < e || (o === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function cr(e) {
  if (!(e.flags & 1)) {
    const t = gn(e),
      n = Ie[Ie.length - 1]
    !n || (!(e.flags & 2) && t >= gn(n)) ? Ie.push(e) : Ie.splice(yc(t), 0, e),
      e.flags & 4 || (e.flags |= 1),
      ni()
  }
}
function ni() {
  !pn && !Ms && ((Ms = !0), (ir = ti.then(ri)))
}
function _c(e) {
  F(e)
    ? zt.push(...e)
    : yt && e.id === -1
    ? yt.splice(Vt + 1, 0, e)
    : e.flags & 1 || (zt.push(e), e.flags & 4 || (e.flags |= 1)),
    ni()
}
function Pr(e, t, n = pn ? At + 1 : 0) {
  for (; n < Ie.length; n++) {
    const s = Ie[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      Ie.splice(n, 1), n--, s(), (s.flags &= -2)
    }
  }
}
function si(e) {
  if (zt.length) {
    const t = [...new Set(zt)].sort((n, s) => gn(n) - gn(s))
    if (((zt.length = 0), yt)) {
      yt.push(...t)
      return
    }
    for (yt = t, Vt = 0; Vt < yt.length; Vt++) {
      const n = yt[Vt]
      n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(yt = null), (Vt = 0)
  }
}
const gn = e => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function ri(e) {
  ;(Ms = !1), (pn = !0)
  const t = Ue
  try {
    for (At = 0; At < Ie.length; At++) {
      const n = Ie[At]
      n && !(n.flags & 8) && (Sn(n, n.i, n.i ? 15 : 14), (n.flags &= -2))
    }
  } finally {
    ;(At = 0),
      (Ie.length = 0),
      si(),
      (pn = !1),
      (ir = null),
      (Ie.length || zt.length) && ri()
  }
}
let he = null,
  oi = null
function Kn(e) {
  const t = he
  return (he = e), (oi = (e && e.type.__scopeId) || null), t
}
function wn(e, t = he, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Fr(-1)
    const o = Kn(t)
    let i
    try {
      i = e(...r)
    } finally {
      Kn(o), s._d && Fr(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function vd(e, t) {
  if (he === null) return e
  const n = us(he),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = oe] = t[r]
    o &&
      (V(o) &&
        (o = {
          mounted: o,
          updated: o,
        }),
      o.deep && it(i),
      s.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }))
  }
  return e
}
function Rt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const l = r[i]
    o && (l.oldValue = o[i].value)
    let c = l.dir[s]
    c && (wt(), qe(c, n, 8, [e.el, l, e, t]), Tt())
  }
}
const bc = Symbol('_vte'),
  Cc = e => e.__isTeleport,
  Ht = Symbol('_leaveCb'),
  Nn = Symbol('_enterCb')
function Ec() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    ar(() => {
      e.isMounted = !0
    }),
    fi(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Ne = [Function, Array],
  Sc = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ne,
    onEnter: Ne,
    onAfterEnter: Ne,
    onEnterCancelled: Ne,
    onBeforeLeave: Ne,
    onLeave: Ne,
    onAfterLeave: Ne,
    onLeaveCancelled: Ne,
    onBeforeAppear: Ne,
    onAppear: Ne,
    onAfterAppear: Ne,
    onAppearCancelled: Ne,
  }
function wc(e, t) {
  const {leavingVNodes: n} = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function Ds(e, t, n, s, r) {
  const {
      appear: o,
      mode: i,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: f,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: p,
      onLeave: m,
      onAfterLeave: P,
      onLeaveCancelled: O,
      onBeforeAppear: k,
      onAppear: $,
      onAfterAppear: I,
      onAppearCancelled: N,
    } = t,
    A = String(e.key),
    U = wc(n, e),
    te = (j, q) => {
      j && qe(j, s, 9, q)
    },
    Z = (j, q) => {
      const ne = q[1]
      te(j, q),
        F(j) ? j.every(M => M.length <= 1) && ne() : j.length <= 1 && ne()
    },
    ye = {
      mode: i,
      persisted: l,
      beforeEnter(j) {
        let q = c
        if (!n.isMounted)
          if (o) q = k || c
          else return
        j[Ht] && j[Ht](!0)
        const ne = U[A]
        ne && jt(e, ne) && ne.el[Ht] && ne.el[Ht](), te(q, [j])
      },
      enter(j) {
        let q = f,
          ne = a,
          M = h
        if (!n.isMounted)
          if (o) (q = $ || f), (ne = I || a), (M = N || h)
          else return
        let G = !1
        const de = (j[Nn] = Be => {
          G ||
            ((G = !0),
            Be ? te(M, [j]) : te(ne, [j]),
            ye.delayedLeave && ye.delayedLeave(),
            (j[Nn] = void 0))
        })
        q ? Z(q, [j, de]) : de()
      },
      leave(j, q) {
        const ne = String(e.key)
        if ((j[Nn] && j[Nn](!0), n.isUnmounting)) return q()
        te(p, [j])
        let M = !1
        const G = (j[Ht] = de => {
          M ||
            ((M = !0),
            q(),
            de ? te(O, [j]) : te(P, [j]),
            (j[Ht] = void 0),
            U[ne] === e && delete U[ne])
        })
        ;(U[ne] = e), m ? Z(m, [j, G]) : G()
      },
      clone(j) {
        const q = Ds(j, t, n, s, r)
        return r && r(q), q
      },
    }
  return ye
}
function Wn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Wn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function ii(e, t = !1, n) {
  let s = [],
    r = 0
  for (let o = 0; o < e.length; o++) {
    let i = e[o]
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o)
    i.type === ge
      ? (i.patchFlag & 128 && r++, (s = s.concat(ii(i.children, t, l))))
      : (t || i.type !== ut) &&
        s.push(
          l != null
            ? Nt(i, {
                key: l,
              })
            : i,
        )
  }
  if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */
function ft(e, t) {
  return V(e)
    ? (() =>
        fe(
          {
            name: e.name,
          },
          t,
          {
            setup: e,
          },
        ))()
    : e
}
function li(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function Ns(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((p, m) => Ns(p, t && (F(t) ? t[m] : t), n, s, r))
    return
  }
  if (qt(s) && !r) return
  const o = s.shapeFlag & 4 ? us(s.component) : s.el,
    i = r ? null : o,
    {i: l, r: c} = e,
    f = t && t.r,
    a = l.refs === oe ? (l.refs = {}) : l.refs,
    h = l.setupState
  if (
    (f != null &&
      f !== c &&
      (ae(f)
        ? ((a[f] = null), W(h, f) && (h[f] = null))
        : ve(f) && (f.value = null)),
    V(c))
  )
    Sn(c, l, 12, [i, a])
  else {
    const p = ae(c),
      m = ve(c)
    if (p || m) {
      const P = () => {
        if (e.f) {
          const O = p ? (W(h, c) ? h[c] : a[c]) : c.value
          r
            ? F(O) && Gs(O, o)
            : F(O)
            ? O.includes(o) || O.push(o)
            : p
            ? ((a[c] = [o]), W(h, c) && (h[c] = a[c]))
            : ((c.value = [o]), e.k && (a[e.k] = c.value))
        } else
          p
            ? ((a[c] = i), W(h, c) && (h[c] = i))
            : m && ((c.value = i), e.k && (a[e.k] = i))
      }
      i ? ((P.id = -1), xe(P, n)) : P()
    }
  }
}
const qt = e => !!e.type.__asyncLoader,
  ci = e => e.type.__isKeepAlive
function Tc(e, t) {
  ai(e, 'a', t)
}
function Rc(e, t) {
  ai(e, 'da', t)
}
function ai(e, t, n = me) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((rs(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) ci(r.parent.vnode) && xc(s, t, n, r), (r = r.parent)
  }
}
function xc(e, t, n, s) {
  const r = rs(t, e, s, !0)
  di(() => {
    Gs(s[t], r)
  }, n)
}
function rs(e, t, n = me, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          wt()
          const l = Tn(n),
            c = qe(t, n, e, i)
          return l(), Tt(), c
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const dt =
    e =>
    (t, n = me) => {
      ;(!as || e === 'sp') && rs(e, (...s) => t(...s), n)
    },
  Pc = dt('bm'),
  ar = dt('m'),
  Oc = dt('bu'),
  ui = dt('u'),
  fi = dt('bum'),
  di = dt('um'),
  Ac = dt('sp'),
  Ic = dt('rtg'),
  Mc = dt('rtc')
function Dc(e, t = me) {
  rs('ec', e, t)
}
const ur = 'components'
function Gt(e, t) {
  return pi(ur, e, !0, t) || e
}
const hi = Symbol.for('v-ndc')
function fr(e) {
  return ae(e) ? pi(ur, e, !1) || e : e || hi
}
function pi(e, t, n = !0, s = !1) {
  const r = he || me
  if (r) {
    const o = r.type
    if (e === ur) {
      const l = Ca(o, !1)
      if (l && (l === t || l === ze(t) || l === es(ze(t)))) return o
    }
    const i = Or(r[e] || o[e], t) || Or(r.appContext[e], t)
    return !i && s ? o : i
  }
}
function Or(e, t) {
  return e && (e[t] || e[ze(t)] || e[es(ze(t))])
}
function Ar(e, t, n, s) {
  let r
  const o = n && n[s],
    i = F(e)
  if (i || ae(e)) {
    const l = i && Wt(e)
    l && (e = ts(e)), (r = new Array(e.length))
    for (let c = 0, f = e.length; c < f; c++)
      r[c] = t(l ? _e(e[c]) : e[c], c, void 0, o && o[c])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, o && o[l])
  } else if (ie(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (l, c) => t(l, c, void 0, o && o[c]))
    else {
      const l = Object.keys(e)
      r = new Array(l.length)
      for (let c = 0, f = l.length; c < f; c++) {
        const a = l[c]
        r[c] = t(e[a], a, c, o && o[c])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function Nc(e, t, n = {}, s, r) {
  if (he.ce || (he.parent && qt(he.parent) && he.parent.ce))
    return (
      t !== 'default' && (n.name = t),
      ce(),
      je(ge, null, [pe('slot', n, s && s())], 64)
    )
  let o = e[t]
  o && o._c && (o._d = !1), ce()
  const i = o && gi(o(n)),
    l = je(
      ge,
      {
        key: (n.key || (i && i.key) || `_${t}`) + (!i && s ? '_fb' : ''),
      },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2,
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    o && o._c && (o._d = !0),
    l
  )
}
function gi(e) {
  return e.some(t =>
    qn(t) ? !(t.type === ut || (t.type === ge && !gi(t.children))) : !0,
  )
    ? e
    : null
}
function Lc(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : Ln(s)] = e[s]
  return n
}
const Ls = e => (e ? (Li(e) ? us(e) : Ls(e.parent)) : null),
  cn = fe(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ls(e.parent),
    $root: e => Ls(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => dr(e),
    $forceUpdate: e =>
      e.f ||
      (e.f = () => {
        cr(e.update)
      }),
    $nextTick: e => e.n || (e.n = lr.bind(e.proxy)),
    $watch: e => na.bind(e),
  }),
  _s = (e, t) => e !== oe && !e.__isScriptSetup && W(e, t),
  $c = {
    get({_: e}, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e
      let f
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (_s(s, t)) return (i[t] = 1), s[t]
          if (r !== oe && W(r, t)) return (i[t] = 2), r[t]
          if ((f = e.propsOptions[0]) && W(f, t)) return (i[t] = 3), o[t]
          if (n !== oe && W(n, t)) return (i[t] = 4), n[t]
          $s && (i[t] = 0)
        }
      }
      const a = cn[t]
      let h, p
      if (a) return t === '$attrs' && be(e.attrs, 'get', ''), a(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== oe && W(n, t)) return (i[t] = 4), n[t]
      if (((p = c.config.globalProperties), W(p, t))) return p[t]
    },
    set({_: e}, t, n) {
      const {data: s, setupState: r, ctx: o} = e
      return _s(r, t)
        ? ((r[t] = n), !0)
        : s !== oe && W(s, t)
        ? ((s[t] = n), !0)
        : W(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i,
    ) {
      let l
      return (
        !!n[i] ||
        (e !== oe && W(e, i)) ||
        _s(t, i) ||
        ((l = o[0]) && W(l, i)) ||
        W(s, i) ||
        W(cn, i) ||
        W(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : W(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Ir(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let $s = !0
function Bc(e) {
  const t = dr(e),
    n = e.proxy,
    s = e.ctx
  ;($s = !1), t.beforeCreate && Mr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: f,
    created: a,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: P,
    activated: O,
    deactivated: k,
    beforeDestroy: $,
    beforeUnmount: I,
    destroyed: N,
    unmounted: A,
    render: U,
    renderTracked: te,
    renderTriggered: Z,
    errorCaptured: ye,
    serverPrefetch: j,
    expose: q,
    inheritAttrs: ne,
    components: M,
    directives: G,
    filters: de,
  } = t
  if ((f && Fc(f, s, null), i))
    for (const ee in i) {
      const J = i[ee]
      V(J) && (s[ee] = J.bind(n))
    }
  if (r) {
    const ee = r.call(n, n)
    ie(ee) && (e.data = En(ee))
  }
  if ((($s = !0), o))
    for (const ee in o) {
      const J = o[ee],
        tt = V(J) ? J.bind(n, n) : V(J.get) ? J.get.bind(n, n) : Ue,
        ht = !V(J) && V(J.set) ? J.set.bind(n) : Ue,
        Je = Ve({
          get: tt,
          set: ht,
        })
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Je.value,
        set: Se => (Je.value = Se),
      })
    }
  if (l) for (const ee in l) mi(l[ee], s, n, ee)
  if (c) {
    const ee = V(c) ? c.call(n) : c
    Reflect.ownKeys(ee).forEach(J => {
      $n(J, ee[J])
    })
  }
  a && Mr(a, e, 'c')
  function ue(ee, J) {
    F(J) ? J.forEach(tt => ee(tt.bind(n))) : J && ee(J.bind(n))
  }
  if (
    (ue(Pc, h),
    ue(ar, p),
    ue(Oc, m),
    ue(ui, P),
    ue(Tc, O),
    ue(Rc, k),
    ue(Dc, ye),
    ue(Mc, te),
    ue(Ic, Z),
    ue(fi, I),
    ue(di, A),
    ue(Ac, j),
    F(q))
  )
    if (q.length) {
      const ee = e.exposed || (e.exposed = {})
      q.forEach(J => {
        Object.defineProperty(ee, J, {
          get: () => n[J],
          set: tt => (n[J] = tt),
        })
      })
    } else e.exposed || (e.exposed = {})
  U && e.render === Ue && (e.render = U),
    ne != null && (e.inheritAttrs = ne),
    M && (e.components = M),
    G && (e.directives = G),
    j && li(e)
}
function Fc(e, t, n = Ue) {
  F(e) && (e = Bs(e))
  for (const s in e) {
    const r = e[s]
    let o
    ie(r)
      ? 'default' in r
        ? (o = Ze(r.from || s, r.default, !0))
        : (o = Ze(r.from || s))
      : (o = Ze(r)),
      ve(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => (o.value = i),
          })
        : (t[s] = o)
  }
}
function Mr(e, t, n) {
  qe(F(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function mi(e, t, n, s) {
  let r = s.includes('.') ? Oi(n, s) : () => n[s]
  if (ae(e)) {
    const o = t[e]
    V(o) && Bn(r, o)
  } else if (V(e)) Bn(r, e.bind(n))
  else if (ie(e))
    if (F(e)) e.forEach(o => mi(o, t, n, s))
    else {
      const o = V(e.handler) ? e.handler.bind(n) : t[e.handler]
      V(o) && Bn(r, o, e)
    }
}
function dr(e) {
  const t = e.type,
    {mixins: n, extends: s} = t,
    {
      mixins: r,
      optionsCache: o,
      config: {optionMergeStrategies: i},
    } = e.appContext,
    l = o.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
      ? (c = t)
      : ((c = {}), r.length && r.forEach(f => zn(c, f, i, !0)), zn(c, t, i)),
    ie(t) && o.set(t, c),
    c
  )
}
function zn(e, t, n, s = !1) {
  const {mixins: r, extends: o} = t
  o && zn(e, o, n, !0), r && r.forEach(i => zn(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = Hc[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const Hc = {
  data: Dr,
  props: Nr,
  emits: Nr,
  methods: rn,
  computed: rn,
  beforeCreate: Ee,
  created: Ee,
  beforeMount: Ee,
  mounted: Ee,
  beforeUpdate: Ee,
  updated: Ee,
  beforeDestroy: Ee,
  beforeUnmount: Ee,
  destroyed: Ee,
  unmounted: Ee,
  activated: Ee,
  deactivated: Ee,
  errorCaptured: Ee,
  serverPrefetch: Ee,
  components: rn,
  directives: rn,
  watch: jc,
  provide: Dr,
  inject: Vc,
}
function Dr(e, t) {
  return t
    ? e
      ? function () {
          return fe(
            V(e) ? e.call(this, this) : e,
            V(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function Vc(e, t) {
  return rn(Bs(e), Bs(t))
}
function Bs(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function rn(e, t) {
  return e ? fe(Object.create(null), e, t) : t
}
function Nr(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : fe(Object.create(null), Ir(e), Ir(t ?? {}))
    : t
}
function jc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = fe(Object.create(null), e)
  for (const s in t) n[s] = Ee(e[s], t[s])
  return n
}
function vi() {
  return {
    app: null,
    config: {
      isNativeTag: wl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let kc = 0
function Uc(e, t) {
  return function (s, r = null) {
    V(s) || (s = fe({}, s)), r != null && !ie(r) && (r = null)
    const o = vi(),
      i = new WeakSet(),
      l = []
    let c = !1
    const f = (o.app = {
      _uid: kc++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Sa,
      get config() {
        return o.config
      },
      set config(a) {},
      use(a, ...h) {
        return (
          i.has(a) ||
            (a && V(a.install)
              ? (i.add(a), a.install(f, ...h))
              : V(a) && (i.add(a), a(f, ...h))),
          f
        )
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), f
      },
      component(a, h) {
        return h ? ((o.components[a] = h), f) : o.components[a]
      },
      directive(a, h) {
        return h ? ((o.directives[a] = h), f) : o.directives[a]
      },
      mount(a, h, p) {
        if (!c) {
          const m = f._ceVNode || pe(s, r)
          return (
            (m.appContext = o),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            h && t ? t(m, a) : e(m, a, p),
            (c = !0),
            (f._container = a),
            (a.__vue_app__ = f),
            us(m.component)
          )
        }
      },
      onUnmount(a) {
        l.push(a)
      },
      unmount() {
        c &&
          (qe(l, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__)
      },
      provide(a, h) {
        return (o.provides[a] = h), f
      },
      runWithContext(a) {
        const h = Jt
        Jt = f
        try {
          return a()
        } finally {
          Jt = h
        }
      },
    })
    return f
  }
}
let Jt = null
function $n(e, t) {
  if (me) {
    let n = me.provides
    const s = me.parent && me.parent.provides
    s === n && (n = me.provides = Object.create(s)), (n[e] = t)
  }
}
function Ze(e, t, n = !1) {
  const s = me || he
  if (s || Jt) {
    const r = Jt
      ? Jt._context.provides
      : s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && V(t) ? t.call(s && s.proxy) : t
  }
}
const yi = {},
  _i = () => Object.create(yi),
  bi = e => Object.getPrototypeOf(e) === yi
function Kc(e, t, n, s = !1) {
  const r = {},
    o = _i()
  ;(e.propsDefaults = Object.create(null)), Ci(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : Yo(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o)
}
function Wc(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: {patchFlag: i},
    } = e,
    l = z(r),
    [c] = e.propsOptions
  let f = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps
      for (let h = 0; h < a.length; h++) {
        let p = a[h]
        if (os(e.emitsOptions, p)) continue
        const m = t[p]
        if (c)
          if (W(o, p)) m !== o[p] && ((o[p] = m), (f = !0))
          else {
            const P = ze(p)
            r[P] = Fs(c, l, P, m, e, !1)
          }
        else m !== o[p] && ((o[p] = m), (f = !0))
      }
    }
  } else {
    Ci(e, t, r, o) && (f = !0)
    let a
    for (const h in l)
      (!t || (!W(t, h) && ((a = Lt(h)) === h || !W(t, a)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[a] !== void 0) &&
            (r[h] = Fs(c, l, h, void 0, e, !0))
          : delete r[h])
    if (o !== l) for (const h in o) (!t || !W(t, h)) && (delete o[h], (f = !0))
  }
  f && lt(e.attrs, 'set', '')
}
function Ci(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let c in t) {
      if (on(c)) continue
      const f = t[c]
      let a
      r && W(r, (a = ze(c)))
        ? !o || !o.includes(a)
          ? (n[a] = f)
          : ((l || (l = {}))[a] = f)
        : os(e.emitsOptions, c) ||
          ((!(c in s) || f !== s[c]) && ((s[c] = f), (i = !0)))
    }
  if (o) {
    const c = z(n),
      f = l || oe
    for (let a = 0; a < o.length; a++) {
      const h = o[a]
      n[h] = Fs(r, c, h, f[h], e, !W(f, h))
    }
  }
  return i
}
function Fs(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const l = W(i, 'default')
    if (l && s === void 0) {
      const c = i.default
      if (i.type !== Function && !i.skipFactory && V(c)) {
        const {propsDefaults: f} = r
        if (n in f) s = f[n]
        else {
          const a = Tn(r)
          ;(s = f[n] = c.call(null, t)), a()
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    i[0] && (o && !l ? (s = !1) : i[1] && (s === '' || s === Lt(n)) && (s = !0))
  }
  return s
}
const zc = new WeakMap()
function Ei(e, t, n = !1) {
  const s = n ? zc : t.propsCache,
    r = s.get(e)
  if (r) return r
  const o = e.props,
    i = {},
    l = []
  let c = !1
  if (!V(e)) {
    const a = h => {
      c = !0
      const [p, m] = Ei(h, t, !0)
      fe(i, p), m && l.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!o && !c) return ie(e) && s.set(e, Ut), Ut
  if (F(o))
    for (let a = 0; a < o.length; a++) {
      const h = ze(o[a])
      Lr(h) && (i[h] = oe)
    }
  else if (o)
    for (const a in o) {
      const h = ze(a)
      if (Lr(h)) {
        const p = o[a],
          m = (i[h] =
            F(p) || V(p)
              ? {
                  type: p,
                }
              : fe({}, p)),
          P = m.type
        let O = !1,
          k = !0
        if (F(P))
          for (let $ = 0; $ < P.length; ++$) {
            const I = P[$],
              N = V(I) && I.name
            if (N === 'Boolean') {
              O = !0
              break
            } else N === 'String' && (k = !1)
          }
        else O = V(P) && P.name === 'Boolean'
        ;(m[0] = O), (m[1] = k), (O || W(m, 'default')) && l.push(h)
      }
    }
  const f = [i, l]
  return ie(e) && s.set(e, f), f
}
function Lr(e) {
  return e[0] !== '$' && !on(e)
}
const Si = e => e[0] === '_' || e === '$stable',
  hr = e => (F(e) ? e.map(Xe) : [Xe(e)]),
  qc = (e, t, n) => {
    if (t._n) return t
    const s = wn((...r) => hr(t(...r)), n)
    return (s._c = !1), s
  },
  wi = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Si(r)) continue
      const o = e[r]
      if (V(o)) t[r] = qc(r, o, s)
      else if (o != null) {
        const i = hr(o)
        t[r] = () => i
      }
    }
  },
  Ti = (e, t) => {
    const n = hr(t)
    e.slots.default = () => n
  },
  Ri = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  Gc = (e, t, n) => {
    const s = (e.slots = _i())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Ri(s, t, n), n && Do(s, '_', r, !0)) : wi(t, s)
    } else t && Ti(e, t)
  },
  Jc = (e, t, n) => {
    const {vnode: s, slots: r} = e
    let o = !0,
      i = oe
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (o = !1)
          : Ri(r, t, n)
        : ((o = !t.$stable), wi(t, r)),
        (i = t)
    } else
      t &&
        (Ti(e, t),
        (i = {
          default: 1,
        }))
    if (o) for (const l in r) !Si(l) && i[l] == null && delete r[l]
  },
  xe = aa
function Qc(e) {
  return Yc(e)
}
function Yc(e, t) {
  const n = No()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: a,
      parentNode: h,
      nextSibling: p,
      setScopeId: m = Ue,
      insertStaticContent: P,
    } = e,
    O = (
      u,
      d,
      g,
      _ = null,
      v = null,
      b = null,
      w = void 0,
      S = null,
      E = !!d.dynamicChildren,
    ) => {
      if (u === d) return
      u && !jt(u, d) && ((_ = y(u)), Se(u, v, b, !0), (u = null)),
        d.patchFlag === -2 && ((E = !1), (d.dynamicChildren = null))
      const {type: C, ref: B, shapeFlag: R} = d
      switch (C) {
        case is:
          k(u, d, g, _)
          break
        case ut:
          $(u, d, g, _)
          break
        case Fn:
          u == null && I(d, g, _, w)
          break
        case ge:
          M(u, d, g, _, v, b, w, S, E)
          break
        default:
          R & 1
            ? U(u, d, g, _, v, b, w, S, E)
            : R & 6
            ? G(u, d, g, _, v, b, w, S, E)
            : (R & 64 || R & 128) && C.process(u, d, g, _, v, b, w, S, E, D)
      }
      B != null && v && Ns(B, u && u.ref, b, d || u, !d)
    },
    k = (u, d, g, _) => {
      if (u == null) s((d.el = l(d.children)), g, _)
      else {
        const v = (d.el = u.el)
        d.children !== u.children && f(v, d.children)
      }
    },
    $ = (u, d, g, _) => {
      u == null ? s((d.el = c(d.children || '')), g, _) : (d.el = u.el)
    },
    I = (u, d, g, _) => {
      ;[u.el, u.anchor] = P(u.children, d, g, _, u.el, u.anchor)
    },
    N = ({el: u, anchor: d}, g, _) => {
      let v
      for (; u && u !== d; ) (v = p(u)), s(u, g, _), (u = v)
      s(d, g, _)
    },
    A = ({el: u, anchor: d}) => {
      let g
      for (; u && u !== d; ) (g = p(u)), r(u), (u = g)
      r(d)
    },
    U = (u, d, g, _, v, b, w, S, E) => {
      d.type === 'svg' ? (w = 'svg') : d.type === 'math' && (w = 'mathml'),
        u == null ? te(d, g, _, v, b, w, S, E) : j(u, d, v, b, w, S, E)
    },
    te = (u, d, g, _, v, b, w, S) => {
      let E, C
      const {props: B, shapeFlag: R, transition: L, dirs: H} = u
      if (
        ((E = u.el = i(u.type, b, B && B.is, B)),
        R & 8
          ? a(E, u.children)
          : R & 16 && ye(u.children, E, null, _, v, bs(u, b), w, S),
        H && Rt(u, null, _, 'created'),
        Z(E, u, u.scopeId, w, _),
        B)
      ) {
        for (const se in B)
          se !== 'value' && !on(se) && o(E, se, null, B[se], b, _)
        'value' in B && o(E, 'value', null, B.value, b),
          (C = B.onVnodeBeforeMount) && Ye(C, _, u)
      }
      H && Rt(u, null, _, 'beforeMount')
      const K = Xc(v, L)
      K && L.beforeEnter(E),
        s(E, d, g),
        ((C = B && B.onVnodeMounted) || K || H) &&
          xe(() => {
            C && Ye(C, _, u), K && L.enter(E), H && Rt(u, null, _, 'mounted')
          }, v)
    },
    Z = (u, d, g, _, v) => {
      if ((g && m(u, g), _)) for (let b = 0; b < _.length; b++) m(u, _[b])
      if (v) {
        let b = v.subTree
        if (
          d === b ||
          (Ii(b.type) && (b.ssContent === d || b.ssFallback === d))
        ) {
          const w = v.vnode
          Z(u, w, w.scopeId, w.slotScopeIds, v.parent)
        }
      }
    },
    ye = (u, d, g, _, v, b, w, S, E = 0) => {
      for (let C = E; C < u.length; C++) {
        const B = (u[C] = S ? _t(u[C]) : Xe(u[C]))
        O(null, B, d, g, _, v, b, w, S)
      }
    },
    j = (u, d, g, _, v, b, w) => {
      const S = (d.el = u.el)
      let {patchFlag: E, dynamicChildren: C, dirs: B} = d
      E |= u.patchFlag & 16
      const R = u.props || oe,
        L = d.props || oe
      let H
      if (
        (g && xt(g, !1),
        (H = L.onVnodeBeforeUpdate) && Ye(H, g, d, u),
        B && Rt(d, u, g, 'beforeUpdate'),
        g && xt(g, !0),
        ((R.innerHTML && L.innerHTML == null) ||
          (R.textContent && L.textContent == null)) &&
          a(S, ''),
        C
          ? q(u.dynamicChildren, C, S, g, _, bs(d, v), b)
          : w || J(u, d, S, null, g, _, bs(d, v), b, !1),
        E > 0)
      ) {
        if (E & 16) ne(S, R, L, g, v)
        else if (
          (E & 2 && R.class !== L.class && o(S, 'class', null, L.class, v),
          E & 4 && o(S, 'style', R.style, L.style, v),
          E & 8)
        ) {
          const K = d.dynamicProps
          for (let se = 0; se < K.length; se++) {
            const Y = K[se],
              we = R[Y],
              Ce = L[Y]
            ;(Ce !== we || Y === 'value') && o(S, Y, we, Ce, v, g)
          }
        }
        E & 1 && u.children !== d.children && a(S, d.children)
      } else !w && C == null && ne(S, R, L, g, v)
      ;((H = L.onVnodeUpdated) || B) &&
        xe(() => {
          H && Ye(H, g, d, u), B && Rt(d, u, g, 'updated')
        }, _)
    },
    q = (u, d, g, _, v, b, w) => {
      for (let S = 0; S < d.length; S++) {
        const E = u[S],
          C = d[S],
          B =
            E.el && (E.type === ge || !jt(E, C) || E.shapeFlag & 70)
              ? h(E.el)
              : g
        O(E, C, B, null, _, v, b, w, !0)
      }
    },
    ne = (u, d, g, _, v) => {
      if (d !== g) {
        if (d !== oe)
          for (const b in d) !on(b) && !(b in g) && o(u, b, d[b], null, v, _)
        for (const b in g) {
          if (on(b)) continue
          const w = g[b],
            S = d[b]
          w !== S && b !== 'value' && o(u, b, S, w, v, _)
        }
        'value' in g && o(u, 'value', d.value, g.value, v)
      }
    },
    M = (u, d, g, _, v, b, w, S, E) => {
      const C = (d.el = u ? u.el : l('')),
        B = (d.anchor = u ? u.anchor : l(''))
      let {patchFlag: R, dynamicChildren: L, slotScopeIds: H} = d
      H && (S = S ? S.concat(H) : H),
        u == null
          ? (s(C, g, _), s(B, g, _), ye(d.children || [], g, B, v, b, w, S, E))
          : R > 0 && R & 64 && L && u.dynamicChildren
          ? (q(u.dynamicChildren, L, g, v, b, w, S),
            (d.key != null || (v && d === v.subTree)) && xi(u, d, !0))
          : J(u, d, g, B, v, b, w, S, E)
    },
    G = (u, d, g, _, v, b, w, S, E) => {
      ;(d.slotScopeIds = S),
        u == null
          ? d.shapeFlag & 512
            ? v.ctx.activate(d, g, _, w, E)
            : de(d, g, _, v, b, w, E)
          : Be(u, d, E)
    },
    de = (u, d, g, _, v, b, w) => {
      const S = (u.component = ma(u, _, v))
      if ((ci(u) && (S.ctx.renderer = D), va(S, !1, w), S.asyncDep)) {
        if ((v && v.registerDep(S, ue, w), !u.el)) {
          const E = (S.subTree = pe(ut))
          $(null, E, d, g)
        }
      } else ue(S, u, d, g, v, b, w)
    },
    Be = (u, d, g) => {
      const _ = (d.component = u.component)
      if (la(u, d, g))
        if (_.asyncDep && !_.asyncResolved) {
          ee(_, d, g)
          return
        } else (_.next = d), _.update()
      else (d.el = u.el), (_.vnode = d)
    },
    ue = (u, d, g, _, v, b, w) => {
      const S = () => {
        if (u.isMounted) {
          let {next: R, bu: L, u: H, parent: K, vnode: se} = u
          {
            const Te = Pi(u)
            if (Te) {
              R && ((R.el = se.el), ee(u, R, w)),
                Te.asyncDep.then(() => {
                  u.isUnmounted || S()
                })
              return
            }
          }
          let Y = R,
            we
          xt(u, !1),
            R ? ((R.el = se.el), ee(u, R, w)) : (R = se),
            L && ps(L),
            (we = R.props && R.props.onVnodeBeforeUpdate) && Ye(we, K, R, se),
            xt(u, !0)
          const Ce = Cs(u),
            Fe = u.subTree
          ;(u.subTree = Ce),
            O(Fe, Ce, h(Fe.el), y(Fe), u, v, b),
            (R.el = Ce.el),
            Y === null && ca(u, Ce.el),
            H && xe(H, v),
            (we = R.props && R.props.onVnodeUpdated) &&
              xe(() => Ye(we, K, R, se), v)
        } else {
          let R
          const {el: L, props: H} = d,
            {bm: K, m: se, parent: Y, root: we, type: Ce} = u,
            Fe = qt(d)
          if (
            (xt(u, !1),
            K && ps(K),
            !Fe && (R = H && H.onVnodeBeforeMount) && Ye(R, Y, d),
            xt(u, !0),
            L && le)
          ) {
            const Te = () => {
              ;(u.subTree = Cs(u)), le(L, u.subTree, u, v, null)
            }
            Fe ? Ce.__asyncHydrate(L, u, Te) : Te()
          } else {
            we.ce && we.ce._injectChildStyle(Ce)
            const Te = (u.subTree = Cs(u))
            O(null, Te, g, _, u, v, b), (d.el = Te.el)
          }
          if ((se && xe(se, v), !Fe && (R = H && H.onVnodeMounted))) {
            const Te = d
            xe(() => Ye(R, Y, Te), v)
          }
          ;(d.shapeFlag & 256 ||
            (Y && qt(Y.vnode) && Y.vnode.shapeFlag & 256)) &&
            u.a &&
            xe(u.a, v),
            (u.isMounted = !0),
            (d = g = _ = null)
        }
      }
      u.scope.on()
      const E = (u.effect = new Fo(S))
      u.scope.off()
      const C = (u.update = E.run.bind(E)),
        B = (u.job = E.runIfDirty.bind(E))
      ;(B.i = u), (B.id = u.uid), (E.scheduler = () => cr(B)), xt(u, !0), C()
    },
    ee = (u, d, g) => {
      d.component = u
      const _ = u.vnode.props
      ;(u.vnode = d),
        (u.next = null),
        Wc(u, d.props, _, g),
        Jc(u, d.children, g),
        wt(),
        Pr(u),
        Tt()
    },
    J = (u, d, g, _, v, b, w, S, E = !1) => {
      const C = u && u.children,
        B = u ? u.shapeFlag : 0,
        R = d.children,
        {patchFlag: L, shapeFlag: H} = d
      if (L > 0) {
        if (L & 128) {
          ht(C, R, g, _, v, b, w, S, E)
          return
        } else if (L & 256) {
          tt(C, R, g, _, v, b, w, S, E)
          return
        }
      }
      H & 8
        ? (B & 16 && De(C, v, b), R !== C && a(g, R))
        : B & 16
        ? H & 16
          ? ht(C, R, g, _, v, b, w, S, E)
          : De(C, v, b, !0)
        : (B & 8 && a(g, ''), H & 16 && ye(R, g, _, v, b, w, S, E))
    },
    tt = (u, d, g, _, v, b, w, S, E) => {
      ;(u = u || Ut), (d = d || Ut)
      const C = u.length,
        B = d.length,
        R = Math.min(C, B)
      let L
      for (L = 0; L < R; L++) {
        const H = (d[L] = E ? _t(d[L]) : Xe(d[L]))
        O(u[L], H, g, null, v, b, w, S, E)
      }
      C > B ? De(u, v, b, !0, !1, R) : ye(d, g, _, v, b, w, S, E, R)
    },
    ht = (u, d, g, _, v, b, w, S, E) => {
      let C = 0
      const B = d.length
      let R = u.length - 1,
        L = B - 1
      for (; C <= R && C <= L; ) {
        const H = u[C],
          K = (d[C] = E ? _t(d[C]) : Xe(d[C]))
        if (jt(H, K)) O(H, K, g, null, v, b, w, S, E)
        else break
        C++
      }
      for (; C <= R && C <= L; ) {
        const H = u[R],
          K = (d[L] = E ? _t(d[L]) : Xe(d[L]))
        if (jt(H, K)) O(H, K, g, null, v, b, w, S, E)
        else break
        R--, L--
      }
      if (C > R) {
        if (C <= L) {
          const H = L + 1,
            K = H < B ? d[H].el : _
          for (; C <= L; )
            O(null, (d[C] = E ? _t(d[C]) : Xe(d[C])), g, K, v, b, w, S, E), C++
        }
      } else if (C > L) for (; C <= R; ) Se(u[C], v, b, !0), C++
      else {
        const H = C,
          K = C,
          se = new Map()
        for (C = K; C <= L; C++) {
          const Re = (d[C] = E ? _t(d[C]) : Xe(d[C]))
          Re.key != null && se.set(Re.key, C)
        }
        let Y,
          we = 0
        const Ce = L - K + 1
        let Fe = !1,
          Te = 0
        const Zt = new Array(Ce)
        for (C = 0; C < Ce; C++) Zt[C] = 0
        for (C = H; C <= R; C++) {
          const Re = u[C]
          if (we >= Ce) {
            Se(Re, v, b, !0)
            continue
          }
          let Qe
          if (Re.key != null) Qe = se.get(Re.key)
          else
            for (Y = K; Y <= L; Y++)
              if (Zt[Y - K] === 0 && jt(Re, d[Y])) {
                Qe = Y
                break
              }
          Qe === void 0
            ? Se(Re, v, b, !0)
            : ((Zt[Qe - K] = C + 1),
              Qe >= Te ? (Te = Qe) : (Fe = !0),
              O(Re, d[Qe], g, null, v, b, w, S, E),
              we++)
        }
        const _r = Fe ? Zc(Zt) : Ut
        for (Y = _r.length - 1, C = Ce - 1; C >= 0; C--) {
          const Re = K + C,
            Qe = d[Re],
            br = Re + 1 < B ? d[Re + 1].el : _
          Zt[C] === 0
            ? O(null, Qe, g, br, v, b, w, S, E)
            : Fe && (Y < 0 || C !== _r[Y] ? Je(Qe, g, br, 2) : Y--)
        }
      }
    },
    Je = (u, d, g, _, v = null) => {
      const {el: b, type: w, transition: S, children: E, shapeFlag: C} = u
      if (C & 6) {
        Je(u.component.subTree, d, g, _)
        return
      }
      if (C & 128) {
        u.suspense.move(d, g, _)
        return
      }
      if (C & 64) {
        w.move(u, d, g, D)
        return
      }
      if (w === ge) {
        s(b, d, g)
        for (let R = 0; R < E.length; R++) Je(E[R], d, g, _)
        s(u.anchor, d, g)
        return
      }
      if (w === Fn) {
        N(u, d, g)
        return
      }
      if (_ !== 2 && C & 1 && S)
        if (_ === 0) S.beforeEnter(b), s(b, d, g), xe(() => S.enter(b), v)
        else {
          const {leave: R, delayLeave: L, afterLeave: H} = S,
            K = () => s(b, d, g),
            se = () => {
              R(b, () => {
                K(), H && H()
              })
            }
          L ? L(b, K, se) : se()
        }
      else s(b, d, g)
    },
    Se = (u, d, g, _ = !1, v = !1) => {
      const {
        type: b,
        props: w,
        ref: S,
        children: E,
        dynamicChildren: C,
        shapeFlag: B,
        patchFlag: R,
        dirs: L,
        cacheIndex: H,
      } = u
      if (
        (R === -2 && (v = !1),
        S != null && Ns(S, null, g, u, !0),
        H != null && (d.renderCache[H] = void 0),
        B & 256)
      ) {
        d.ctx.deactivate(u)
        return
      }
      const K = B & 1 && L,
        se = !qt(u)
      let Y
      if ((se && (Y = w && w.onVnodeBeforeUnmount) && Ye(Y, d, u), B & 6))
        xn(u.component, g, _)
      else {
        if (B & 128) {
          u.suspense.unmount(g, _)
          return
        }
        K && Rt(u, null, d, 'beforeUnmount'),
          B & 64
            ? u.type.remove(u, d, g, D, _)
            : C && !C.hasOnce && (b !== ge || (R > 0 && R & 64))
            ? De(C, d, g, !1, !0)
            : ((b === ge && R & 384) || (!v && B & 16)) && De(E, d, g),
          _ && $t(u)
      }
      ;((se && (Y = w && w.onVnodeUnmounted)) || K) &&
        xe(() => {
          Y && Ye(Y, d, u), K && Rt(u, null, d, 'unmounted')
        }, g)
    },
    $t = u => {
      const {type: d, el: g, anchor: _, transition: v} = u
      if (d === ge) {
        Bt(g, _)
        return
      }
      if (d === Fn) {
        A(u)
        return
      }
      const b = () => {
        r(g), v && !v.persisted && v.afterLeave && v.afterLeave()
      }
      if (u.shapeFlag & 1 && v && !v.persisted) {
        const {leave: w, delayLeave: S} = v,
          E = () => w(g, b)
        S ? S(u.el, b, E) : E()
      } else b()
    },
    Bt = (u, d) => {
      let g
      for (; u !== d; ) (g = p(u)), r(u), (u = g)
      r(d)
    },
    xn = (u, d, g) => {
      const {bum: _, scope: v, job: b, subTree: w, um: S, m: E, a: C} = u
      $r(E),
        $r(C),
        _ && ps(_),
        v.stop(),
        b && ((b.flags |= 8), Se(w, u, d, g)),
        S && xe(S, d),
        xe(() => {
          u.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    De = (u, d, g, _ = !1, v = !1, b = 0) => {
      for (let w = b; w < u.length; w++) Se(u[w], d, g, _, v)
    },
    y = u => {
      if (u.shapeFlag & 6) return y(u.component.subTree)
      if (u.shapeFlag & 128) return u.suspense.next()
      const d = p(u.anchor || u.el),
        g = d && d[bc]
      return g ? p(g) : d
    }
  let x = !1
  const T = (u, d, g) => {
      u == null
        ? d._vnode && Se(d._vnode, null, null, !0)
        : O(d._vnode || null, u, d, null, null, null, g),
        (d._vnode = u),
        x || ((x = !0), Pr(), si(), (x = !1))
    },
    D = {
      p: O,
      um: Se,
      m: Je,
      r: $t,
      mt: de,
      mc: ye,
      pc: J,
      pbc: q,
      n: y,
      o: e,
    }
  let Q, le
  return (
    t && ([Q, le] = t(D)),
    {
      render: T,
      hydrate: Q,
      createApp: Uc(T, Q),
    }
  )
}
function bs({type: e, props: t}, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function xt({effect: e, job: t}, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Xc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function xi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let l = r[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = _t(r[o])), (l.el = i.el)),
        !n && l.patchFlag !== -2 && xi(i, l)),
        l.type === is && (l.el = i.el)
    }
}
function Zc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const f = e[s]
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < f ? (o = l + 1) : (i = l)
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function Pi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Pi(t)
}
function $r(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const ea = Symbol.for('v-scx'),
  ta = () => Ze(ea)
function yd(e, t) {
  return pr(e, null, t)
}
function Bn(e, t, n) {
  return pr(e, t, n)
}
function pr(e, t, n = oe) {
  const {immediate: s, deep: r, flush: o, once: i} = n,
    l = fe({}, n)
  let c
  if (as)
    if (o === 'sync') {
      const p = ta()
      c = p.__watcherHandles || (p.__watcherHandles = [])
    } else if (!t || s) l.once = !0
    else
      return {
        stop: Ue,
        resume: Ue,
        pause: Ue,
      }
  const f = me
  l.call = (p, m, P) => qe(p, f, m, P)
  let a = !1
  o === 'post'
    ? (l.scheduler = p => {
        xe(p, f && f.suspense)
      })
    : o !== 'sync' &&
      ((a = !0),
      (l.scheduler = (p, m) => {
        m ? p() : cr(p)
      })),
    (l.augmentJob = p => {
      t && (p.flags |= 4),
        a && ((p.flags |= 2), f && ((p.id = f.uid), (p.i = f)))
    })
  const h = mc(e, t, l)
  return c && c.push(h), h
}
function na(e, t, n) {
  const s = this.proxy,
    r = ae(e) ? (e.includes('.') ? Oi(s, e) : () => s[e]) : e.bind(s, s)
  let o
  V(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = Tn(this),
    l = pr(r, o.bind(s), n)
  return i(), l
}
function Oi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const sa = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Lt(t)}Modifiers`]
function ra(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || oe
  let r = n
  const o = t.startsWith('update:'),
    i = o && sa(s, t.slice(7))
  i &&
    (i.trim && (r = n.map(a => (ae(a) ? a.trim() : a))),
    i.number && (r = n.map(Ol)))
  let l,
    c = s[(l = Ln(t))] || s[(l = Ln(ze(t)))]
  !c && o && (c = s[(l = Ln(Lt(t)))]), c && qe(c, e, 6, r)
  const f = s[l + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), qe(f, e, 6, r)
  }
}
function Ai(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const o = e.emits
  let i = {},
    l = !1
  if (!V(e)) {
    const c = f => {
      const a = Ai(f, t, !0)
      a && ((l = !0), fe(i, a))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !o && !l
    ? (ie(e) && s.set(e, null), null)
    : (F(o) ? o.forEach(c => (i[c] = null)) : fe(i, o), ie(e) && s.set(e, i), i)
}
function os(e, t) {
  return !e || !Yn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Lt(t)) || W(e, t))
}
function Cs(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: c,
      render: f,
      renderCache: a,
      props: h,
      data: p,
      setupState: m,
      ctx: P,
      inheritAttrs: O,
    } = e,
    k = Kn(e)
  let $, I
  try {
    if (n.shapeFlag & 4) {
      const A = r || s,
        U = A
      ;($ = Xe(f.call(U, A, a, h, m, p, P))), (I = l)
    } else {
      const A = t
      ;($ = Xe(
        A.length > 1
          ? A(h, {
              attrs: l,
              slots: i,
              emit: c,
            })
          : A(h, null),
      )),
        (I = t.props ? l : oa(l))
    }
  } catch (A) {
    ;(an.length = 0), ss(A, e, 1), ($ = pe(ut))
  }
  let N = $
  if (I && O !== !1) {
    const A = Object.keys(I),
      {shapeFlag: U} = N
    A.length &&
      U & 7 &&
      (o && A.some(qs) && (I = ia(I, o)), (N = Nt(N, I, !1, !0)))
  }
  return (
    n.dirs &&
      ((N = Nt(N, null, !1, !0)),
      (N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (N.transition = n.transition),
    ($ = N),
    Kn(k),
    $
  )
}
const oa = e => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Yn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  ia = (e, t) => {
    const n = {}
    for (const s in e) (!qs(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function la(e, t, n) {
  const {props: s, children: r, component: o} = e,
    {props: i, children: l, patchFlag: c} = t,
    f = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? Br(s, i, f) : !!i
    if (c & 8) {
      const a = t.dynamicProps
      for (let h = 0; h < a.length; h++) {
        const p = a[h]
        if (i[p] !== s[p] && !os(f, p)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Br(s, i, f)
        : !0
      : !!i
  return !1
}
function Br(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !os(n, o)) return !0
  }
  return !1
}
function ca({vnode: e, parent: t}, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ii = e => e.__isSuspense
function aa(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : _c(e)
}
const ge = Symbol.for('v-fgt'),
  is = Symbol.for('v-txt'),
  ut = Symbol.for('v-cmt'),
  Fn = Symbol.for('v-stc'),
  an = []
let Me = null
function ce(e = !1) {
  an.push((Me = e ? null : []))
}
function ua() {
  an.pop(), (Me = an[an.length - 1] || null)
}
let mn = 1
function Fr(e) {
  ;(mn += e), e < 0 && Me && (Me.hasOnce = !0)
}
function Mi(e) {
  return (
    (e.dynamicChildren = mn > 0 ? Me || Ut : null),
    ua(),
    mn > 0 && Me && Me.push(e),
    e
  )
}
function $e(e, t, n, s, r, o) {
  return Mi(Le(e, t, n, s, r, o, !0))
}
function je(e, t, n, s, r) {
  return Mi(pe(e, t, n, s, r, !0))
}
function qn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Di = ({key: e}) => e ?? null,
  Hn = ({ref: e, ref_key: t, ref_for: n}) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ae(e) || ve(e) || V(e)
        ? {
            i: he,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
  )
function Le(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === ge ? 0 : 1,
  i = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Di(t),
    ref: t && Hn(t),
    scopeId: oi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he,
  }
  return (
    l
      ? (gr(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ae(n) ? 8 : 16),
    mn > 0 &&
      !i &&
      Me &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Me.push(c),
    c
  )
}
const pe = fa
function fa(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === hi) && (e = ut), qn(e))) {
    const l = Nt(e, t, !0)
    return (
      n && gr(l, n),
      mn > 0 &&
        !o &&
        Me &&
        (l.shapeFlag & 6 ? (Me[Me.indexOf(e)] = l) : Me.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Ea(e) && (e = e.__vccOpts), t)) {
    t = da(t)
    let {class: l, style: c} = t
    l && !ae(l) && (t.class = at(l)),
      ie(c) && (rr(c) && !F(c) && (c = fe({}, c)), (t.style = Cn(c)))
  }
  const i = ae(e) ? 1 : Ii(e) ? 128 : Cc(e) ? 64 : ie(e) ? 4 : V(e) ? 2 : 0
  return Le(e, t, n, s, r, i, o, !0)
}
function da(e) {
  return e ? (rr(e) || bi(e) ? fe({}, e) : e) : null
}
function Nt(e, t, n = !1, s = !1) {
  const {props: r, ref: o, patchFlag: i, children: l, transition: c} = e,
    f = t ? cs(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && Di(f),
      ref:
        t && t.ref
          ? n && o
            ? F(o)
              ? o.concat(Hn(t))
              : [o, Hn(t)]
            : Hn(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ge ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Nt(e.ssContent),
      ssFallback: e.ssFallback && Nt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return c && s && Wn(a, c.clone(a)), a
}
function ls(e = ' ', t = 0) {
  return pe(is, null, e, t)
}
function ha(e, t) {
  const n = pe(Fn, null, e)
  return (n.staticCount = t), n
}
function Es(e = '', t = !1) {
  return t ? (ce(), je(ut, null, e)) : pe(ut, null, e)
}
function Xe(e) {
  return e == null || typeof e == 'boolean'
    ? pe(ut)
    : F(e)
    ? pe(ge, null, e.slice())
    : typeof e == 'object'
    ? _t(e)
    : pe(is, null, String(e))
}
function _t(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Nt(e)
}
function gr(e, t) {
  let n = 0
  const {shapeFlag: s} = e
  if (t == null) t = null
  else if (F(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), gr(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !bi(t)
        ? (t._ctx = he)
        : r === 3 &&
          he &&
          (he.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    V(t)
      ? ((t = {
          default: t,
          _ctx: he,
        }),
        (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ls(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function cs(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = at([t.class, s.class]))
      else if (r === 'style') t.style = Cn([t.style, s.style])
      else if (Yn(r)) {
        const o = t[r],
          i = s[r]
        i &&
          o !== i &&
          !(F(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Ye(e, t, n, s = null) {
  qe(e, t, 7, [n, s])
}
const pa = vi()
let ga = 0
function ma(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || pa,
    o = {
      uid: ga++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Bl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ei(s, r),
      emitsOptions: Ai(s, r),
      emit: null,
      emitted: null,
      propsDefaults: oe,
      inheritAttrs: s.inheritAttrs,
      ctx: oe,
      data: oe,
      props: oe,
      attrs: oe,
      slots: oe,
      refs: oe,
      setupState: oe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = {
      _: o,
    }),
    (o.root = t ? t.root : o),
    (o.emit = ra.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let me = null
const Ni = () => me || he
let Gn, Hs
{
  const e = No(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        o => {
          r.length > 1 ? r.forEach(i => i(o)) : r[0](o)
        }
      )
    }
  ;(Gn = t('__VUE_INSTANCE_SETTERS__', n => (me = n))),
    (Hs = t('__VUE_SSR_SETTERS__', n => (as = n)))
}
const Tn = e => {
    const t = me
    return (
      Gn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Gn(t)
      }
    )
  },
  Hr = () => {
    me && me.scope.off(), Gn(null)
  }
function Li(e) {
  return e.vnode.shapeFlag & 4
}
let as = !1
function va(e, t = !1, n = !1) {
  t && Hs(t)
  const {props: s, children: r} = e.vnode,
    o = Li(e)
  Kc(e, s, o, t), Gc(e, r, n)
  const i = o ? ya(e, t) : void 0
  return t && Hs(!1), i
}
function ya(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, $c))
  const {setup: s} = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? ba(e) : null),
      o = Tn(e)
    wt()
    const i = Sn(s, e, 0, [e.props, r])
    if ((Tt(), o(), Ao(i))) {
      if ((qt(e) || li(e), i.then(Hr, Hr), t))
        return i
          .then(l => {
            Vr(e, l, t)
          })
          .catch(l => {
            ss(l, e, 0)
          })
      e.asyncDep = i
    } else Vr(e, i, t)
  } else $i(e, t)
}
function Vr(e, t, n) {
  V(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ie(t) && (e.setupState = ei(t)),
    $i(e, n)
}
let jr
function $i(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && jr && !s.render) {
      const r = s.template || dr(e).template
      if (r) {
        const {isCustomElement: o, compilerOptions: i} = e.appContext.config,
          {delimiters: l, compilerOptions: c} = s,
          f = fe(
            fe(
              {
                isCustomElement: o,
                delimiters: l,
              },
              i,
            ),
            c,
          )
        s.render = jr(r, f)
      }
    }
    e.render = s.render || Ue
  }
  {
    const r = Tn(e)
    wt()
    try {
      Bc(e)
    } finally {
      Tt(), r()
    }
  }
}
const _a = {
  get(e, t) {
    return be(e, 'get', ''), e[t]
  },
}
function ba(e) {
  const t = n => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, _a),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function us(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ei(ic(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in cn) return cn[n](e)
          },
          has(t, n) {
            return n in t || n in cn
          },
        }))
    : e.proxy
}
function Ca(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Ea(e) {
  return V(e) && '__vccOpts' in e
}
const Ve = (e, t) => pc(e, t, as)
function Bi(e, t, n) {
  const s = arguments.length
  return s === 2
    ? ie(t) && !F(t)
      ? qn(t)
        ? pe(e, null, [t])
        : pe(e, t)
      : pe(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && qn(n) && (n = [n]),
      pe(e, t, n))
}
const Sa = '3.5.0'
/**
 * @vue/runtime-dom v3.5.0
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Vs
const kr = typeof window < 'u' && window.trustedTypes
if (kr)
  try {
    Vs = kr.createPolicy('vue', {
      createHTML: e => e,
    })
  } catch {}
const Fi = Vs ? e => Vs.createHTML(e) : e => e,
  wa = 'http://www.w3.org/2000/svg',
  Ta = 'http://www.w3.org/1998/Math/MathML',
  ot = typeof document < 'u' ? document : null,
  Ur = ot && ot.createElement('template'),
  Ra = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? ot.createElementNS(wa, e)
          : t === 'mathml'
          ? ot.createElementNS(Ta, e)
          : n
          ? ot.createElement(e, {
              is: n,
            })
          : ot.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: e => ot.createTextNode(e),
    createComment: e => ot.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => ot.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        Ur.innerHTML = Fi(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
            ? `<math>${e}</math>`
            : e,
        )
        const l = Ur.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  gt = 'transition',
  tn = 'animation',
  Qt = Symbol('_vtc'),
  Hi = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0,
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  xa = fe({}, Sc, Hi),
  Pt = (e, t = []) => {
    F(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  Kr = e => (e ? (F(e) ? e.some(t => t.length > 1) : e.length > 1) : !1)
function Pa(e) {
  const t = {}
  for (const M in e) M in Hi || (t[M] = e[M])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: f = i,
      appearToClass: a = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    P = Oa(r),
    O = P && P[0],
    k = P && P[1],
    {
      onBeforeEnter: $,
      onEnter: I,
      onEnterCancelled: N,
      onLeave: A,
      onLeaveCancelled: U,
      onBeforeAppear: te = $,
      onAppear: Z = I,
      onAppearCancelled: ye = N,
    } = t,
    j = (M, G, de) => {
      vt(M, G ? a : l), vt(M, G ? f : i), de && de()
    },
    q = (M, G) => {
      ;(M._isLeaving = !1), vt(M, h), vt(M, m), vt(M, p), G && G()
    },
    ne = M => (G, de) => {
      const Be = M ? Z : I,
        ue = () => j(G, M, de)
      Pt(Be, [G, ue]),
        Wr(() => {
          vt(G, M ? c : o), rt(G, M ? a : l), Kr(Be) || zr(G, s, O, ue)
        })
    }
  return fe(t, {
    onBeforeEnter(M) {
      Pt($, [M]), rt(M, o), rt(M, i)
    },
    onBeforeAppear(M) {
      Pt(te, [M]), rt(M, c), rt(M, f)
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(M, G) {
      M._isLeaving = !0
      const de = () => q(M, G)
      rt(M, h),
        rt(M, p),
        ji(),
        Wr(() => {
          M._isLeaving && (vt(M, h), rt(M, m), Kr(A) || zr(M, s, k, de))
        }),
        Pt(A, [M, de])
    },
    onEnterCancelled(M) {
      j(M, !1), Pt(N, [M])
    },
    onAppearCancelled(M) {
      j(M, !0), Pt(ye, [M])
    },
    onLeaveCancelled(M) {
      q(M), Pt(U, [M])
    },
  })
}
function Oa(e) {
  if (e == null) return null
  if (ie(e)) return [Ss(e.enter), Ss(e.leave)]
  {
    const t = Ss(e)
    return [t, t]
  }
}
function Ss(e) {
  return Al(e)
}
function rt(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Qt] || (e[Qt] = new Set())).add(t)
}
function vt(e, t) {
  t.split(/\s+/).forEach(s => s && e.classList.remove(s))
  const n = e[Qt]
  n && (n.delete(t), n.size || (e[Qt] = void 0))
}
function Wr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Aa = 0
function zr(e, t, n, s) {
  const r = (e._endId = ++Aa),
    o = () => {
      r === e._endId && s()
    }
  if (n) return setTimeout(o, n)
  const {type: i, timeout: l, propCount: c} = Vi(e, t)
  if (!i) return s()
  const f = i + 'end'
  let a = 0
  const h = () => {
      e.removeEventListener(f, p), o()
    },
    p = m => {
      m.target === e && ++a >= c && h()
    }
  setTimeout(() => {
    a < c && h()
  }, l + 1),
    e.addEventListener(f, p)
}
function Vi(e, t) {
  const n = window.getComputedStyle(e),
    s = P => (n[P] || '').split(', '),
    r = s(`${gt}Delay`),
    o = s(`${gt}Duration`),
    i = qr(r, o),
    l = s(`${tn}Delay`),
    c = s(`${tn}Duration`),
    f = qr(l, c)
  let a = null,
    h = 0,
    p = 0
  t === gt
    ? i > 0 && ((a = gt), (h = i), (p = o.length))
    : t === tn
    ? f > 0 && ((a = tn), (h = f), (p = c.length))
    : ((h = Math.max(i, f)),
      (a = h > 0 ? (i > f ? gt : tn) : null),
      (p = a ? (a === gt ? o.length : c.length) : 0))
  const m =
    a === gt && /\b(transform|all)(,|$)/.test(s(`${gt}Property`).toString())
  return {
    type: a,
    timeout: h,
    propCount: p,
    hasTransform: m,
  }
}
function qr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Gr(n) + Gr(e[s])))
}
function Gr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function ji() {
  return document.body.offsetHeight
}
function Ia(e, t, n) {
  const s = e[Qt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
const Jn = Symbol('_vod'),
  ki = Symbol('_vsh'),
  _d = {
    beforeMount(e, {value: t}, {transition: n}) {
      ;(e[Jn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : nn(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
      n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: s}) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), nn(e, !0), s.enter(e))
            : s.leave(e, () => {
                nn(e, !1)
              })
          : nn(e, t))
    },
    beforeUnmount(e, {value: t}) {
      nn(e, t)
    },
  }
function nn(e, t) {
  ;(e.style.display = t ? e[Jn] : 'none'), (e[ki] = !t)
}
const Ma = Symbol(''),
  Da = /(^|;)\s*display\s*:/
function Na(e, t, n) {
  const s = e.style,
    r = ae(n)
  let o = !1
  if (n && !r) {
    if (t)
      if (ae(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim()
          n[l] == null && Vn(s, l, '')
        }
      else for (const i in t) n[i] == null && Vn(s, i, '')
    for (const i in n) i === 'display' && (o = !0), Vn(s, i, n[i])
  } else if (r) {
    if (t !== n) {
      const i = s[Ma]
      i && (n += ';' + i), (s.cssText = n), (o = Da.test(n))
    }
  } else t && e.removeAttribute('style')
  Jn in e && ((e[Jn] = o ? s.display : ''), e[ki] && (s.display = 'none'))
}
const Jr = /\s*!important$/
function Vn(e, t, n) {
  if (F(n)) n.forEach(s => Vn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = La(e, t)
    Jr.test(n)
      ? e.setProperty(Lt(s), n.replace(Jr, ''), 'important')
      : (e[s] = n)
  }
}
const Qr = ['Webkit', 'Moz', 'ms'],
  ws = {}
function La(e, t) {
  const n = ws[t]
  if (n) return n
  let s = ze(t)
  if (s !== 'filter' && s in e) return (ws[t] = s)
  s = es(s)
  for (let r = 0; r < Qr.length; r++) {
    const o = Qr[r] + s
    if (o in e) return (ws[t] = o)
  }
  return t
}
const Yr = 'http://www.w3.org/1999/xlink'
function Xr(e, t, n, s, r, o = $l(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Yr, t.slice(6, t.length))
      : e.setAttributeNS(Yr, t, n)
    : n == null || (o && !Lo(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? '' : St(n) ? String(n) : n)
}
function $a(e, t, n, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Fi(n) : n)
    return
  }
  const r = e.tagName
  if (t === 'value' && r !== 'PROGRESS' && !r.includes('-')) {
    const i = r === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(i !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const i = typeof e[t]
    i === 'boolean'
      ? (n = Lo(n))
      : n == null && i === 'string'
      ? ((n = ''), (o = !0))
      : i === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(t)
}
function Ba(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Fa(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Zr = Symbol('_vei')
function Ha(e, t, n, s, r = null) {
  const o = e[Zr] || (e[Zr] = {}),
    i = o[t]
  if (s && i) i.value = s
  else {
    const [l, c] = Va(t)
    if (s) {
      const f = (o[t] = Ua(s, r))
      Ba(e, l, f, c)
    } else i && (Fa(e, l, i, c), (o[t] = void 0))
  }
}
const eo = /(?:Once|Passive|Capture)$/
function Va(e) {
  let t
  if (eo.test(e)) {
    t = {}
    let s
    for (; (s = e.match(eo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Lt(e.slice(2)), t]
}
let Ts = 0
const ja = Promise.resolve(),
  ka = () => Ts || (ja.then(() => (Ts = 0)), (Ts = Date.now()))
function Ua(e, t) {
  const n = s => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    qe(Ka(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = ka()), n
}
function Ka(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map(s => r => !r._stopped && s && s(r))
    )
  } else return t
}
const to = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Wa = (e, t, n, s, r, o) => {
    const i = r === 'svg'
    t === 'class'
      ? Ia(e, s, i)
      : t === 'style'
      ? Na(e, n, s)
      : Yn(t)
      ? qs(t) || Ha(e, t, n, s, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : za(e, t, s, i)
        )
      ? ($a(e, t, s),
        !e.tagName.includes('-') &&
          (t === 'value' || t === 'checked' || t === 'selected') &&
          Xr(e, t, s, i, o, t !== 'value'))
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        Xr(e, t, s, i))
  }
function za(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && to(t) && V(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return to(t) && ae(n)
    ? !1
    : !!(t in e || (e._isVueCE && (/[A-Z]/.test(t) || !ae(n))))
}
const Ui = new WeakMap(),
  Ki = new WeakMap(),
  Qn = Symbol('_moveCb'),
  no = Symbol('_enterCb'),
  Wi = {
    name: 'TransitionGroup',
    props: fe({}, xa, {
      tag: String,
      moveClass: String,
    }),
    setup(e, {slots: t}) {
      const n = Ni(),
        s = Ec()
      let r, o
      return (
        ui(() => {
          if (!r.length) return
          const i = e.moveClass || `${e.name || 'v'}-move`
          if (!Xa(r[0].el, n.vnode.el, i)) return
          r.forEach(Ja), r.forEach(Qa)
          const l = r.filter(Ya)
          ji(),
            l.forEach(c => {
              const f = c.el,
                a = f.style
              rt(f, i),
                (a.transform = a.webkitTransform = a.transitionDuration = '')
              const h = (f[Qn] = p => {
                ;(p && p.target !== f) ||
                  ((!p || /transform$/.test(p.propertyName)) &&
                    (f.removeEventListener('transitionend', h),
                    (f[Qn] = null),
                    vt(f, i)))
              })
              f.addEventListener('transitionend', h)
            })
        }),
        () => {
          const i = z(e),
            l = Pa(i)
          let c = i.tag || ge
          if (((r = []), o))
            for (let f = 0; f < o.length; f++) {
              const a = o[f]
              a.el &&
                a.el instanceof Element &&
                (r.push(a),
                Wn(a, Ds(a, l, s, n)),
                Ui.set(a, a.el.getBoundingClientRect()))
            }
          o = t.default ? ii(t.default()) : []
          for (let f = 0; f < o.length; f++) {
            const a = o[f]
            a.key != null && Wn(a, Ds(a, l, s, n))
          }
          return pe(c, null, o)
        }
      )
    },
  },
  qa = e => delete e.mode
Wi.props
const Ga = Wi
function Ja(e) {
  const t = e.el
  t[Qn] && t[Qn](), t[no] && t[no]()
}
function Qa(e) {
  Ki.set(e, e.el.getBoundingClientRect())
}
function Ya(e) {
  const t = Ui.get(e),
    n = Ki.get(e),
    s = t.left - n.left,
    r = t.top - n.top
  if (s || r) {
    const o = e.el.style
    return (
      (o.transform = o.webkitTransform = `translate(${s}px,${r}px)`),
      (o.transitionDuration = '0s'),
      e
    )
  }
}
function Xa(e, t, n) {
  const s = e.cloneNode(),
    r = e[Qt]
  r &&
    r.forEach(l => {
      l.split(/\s+/).forEach(c => c && s.classList.remove(c))
    }),
    n.split(/\s+/).forEach(l => l && s.classList.add(l)),
    (s.style.display = 'none')
  const o = t.nodeType === 1 ? t : t.parentNode
  o.appendChild(s)
  const {hasTransform: i} = Vi(s)
  return o.removeChild(s), i
}
const Za = ['ctrl', 'shift', 'alt', 'meta'],
  eu = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => Za.some(n => e[`${n}Key`] && !t.includes(n)),
  },
  tu = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const l = eu[t[i]]
          if (l && l(r, t)) return
        }
        return e(r, ...o)
      })
    )
  },
  nu = fe(
    {
      patchProp: Wa,
    },
    Ra,
  )
let so
function su() {
  return so || (so = Qc(nu))
}
const zi = (...e) => {
  const t = su().createApp(...e),
    {mount: n} = t
  return (
    (t.mount = s => {
      const r = ou(s)
      if (!r) return
      const o = t._component
      !V(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = '')
      const i = n(r, !1, ru(r))
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        i
      )
    }),
    t
  )
}
function ru(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function ou(e) {
  return ae(e) ? document.querySelector(e) : e
}
const iu = 'modulepreload',
  lu = function (e) {
    return '/' + e
  },
  ro = {},
  cu = function (t, n, s) {
    if (!n || n.length === 0) return t()
    const r = document.getElementsByTagName('link')
    return Promise.all(
      n.map(o => {
        if (((o = lu(o)), o in ro)) return
        ro[o] = !0
        const i = o.endsWith('.css'),
          l = i ? '[rel="stylesheet"]' : ''
        if (!!s)
          for (let a = r.length - 1; a >= 0; a--) {
            const h = r[a]
            if (h.href === o && (!i || h.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${o}"]${l}`)) return
        const f = document.createElement('link')
        if (
          ((f.rel = i ? 'stylesheet' : iu),
          i || ((f.as = 'script'), (f.crossOrigin = '')),
          (f.href = o),
          document.head.appendChild(f),
          i)
        )
          return new Promise((a, h) => {
            f.addEventListener('load', a),
              f.addEventListener('error', () =>
                h(new Error(`Unable to preload CSS for ${o}`)),
              )
          })
      }),
    )
      .then(() => t())
      .catch(o => {
        const i = new Event('vite:preloadError', {
          cancelable: !0,
        })
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
          throw o
      })
  }
/*!
 * vue-router v4.4.3
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const kt = typeof document < 'u'
function au(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const X = Object.assign
function Rs(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Ge(r) ? r.map(e) : e(r)
  }
  return n
}
const un = () => {},
  Ge = Array.isArray,
  qi = /#/g,
  uu = /&/g,
  fu = /\//g,
  du = /=/g,
  hu = /\?/g,
  Gi = /\+/g,
  pu = /%5B/g,
  gu = /%5D/g,
  Ji = /%5E/g,
  mu = /%60/g,
  Qi = /%7B/g,
  vu = /%7C/g,
  Yi = /%7D/g,
  yu = /%20/g
function mr(e) {
  return encodeURI('' + e)
    .replace(vu, '|')
    .replace(pu, '[')
    .replace(gu, ']')
}
function _u(e) {
  return mr(e).replace(Qi, '{').replace(Yi, '}').replace(Ji, '^')
}
function js(e) {
  return mr(e)
    .replace(Gi, '%2B')
    .replace(yu, '+')
    .replace(qi, '%23')
    .replace(uu, '%26')
    .replace(mu, '`')
    .replace(Qi, '{')
    .replace(Yi, '}')
    .replace(Ji, '^')
}
function bu(e) {
  return js(e).replace(du, '%3D')
}
function Cu(e) {
  return mr(e).replace(qi, '%23').replace(hu, '%3F')
}
function Eu(e) {
  return e == null ? '' : Cu(e).replace(fu, '%2F')
}
function vn(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Su = /\/$/,
  wu = e => e.replace(Su, '')
function xs(e, t, n = '/') {
  let s,
    r = {},
    o = '',
    i = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 &&
      ((s = t.slice(0, c)),
      (o = t.slice(c + 1, l > -1 ? l : t.length)),
      (r = e(o))),
    l > -1 && ((s = s || t.slice(0, l)), (i = t.slice(l, t.length))),
    (s = Pu(s ?? t, n)),
    {
      fullPath: s + (o && '?') + o + i,
      path: s,
      query: r,
      hash: vn(i),
    }
  )
}
function Tu(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function oo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function Ru(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Yt(t.matched[s], n.matched[r]) &&
    Xi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Yt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Xi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!xu(e[n], t[n])) return !1
  return !0
}
function xu(e, t) {
  return Ge(e) ? io(e, t) : Ge(t) ? io(t, e) : e === t
}
function io(e, t) {
  return Ge(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Pu(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let o = n.length - 1,
    i,
    l
  for (i = 0; i < s.length; i++)
    if (((l = s[i]), l !== '.'))
      if (l === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + s.slice(i).join('/')
}
const mt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var yn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(yn || (yn = {}))
var fn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(fn || (fn = {}))
function Ou(e) {
  if (!e)
    if (kt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), wu(e)
}
const Au = /^[^#]+#/
function Iu(e, t) {
  return e.replace(Au, '#') + t
}
function Mu(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const fs = () => ({
  left: window.scrollX,
  top: window.scrollY,
})
function Du(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = Mu(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function lo(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ks = new Map()
function Nu(e, t) {
  ks.set(e, t)
}
function Lu(e) {
  const t = ks.get(e)
  return ks.delete(e), t
}
let $u = () => location.protocol + '//' + location.host
function Zi(e, t) {
  const {pathname: n, search: s, hash: r} = t,
    o = e.indexOf('#')
  if (o > -1) {
    let l = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = r.slice(l)
    return c[0] !== '/' && (c = '/' + c), oo(c, '')
  }
  return oo(n, e) + s + r
}
function Bu(e, t, n, s) {
  let r = [],
    o = [],
    i = null
  const l = ({state: p}) => {
    const m = Zi(e, location),
      P = n.value,
      O = t.value
    let k = 0
    if (p) {
      if (((n.value = m), (t.value = p), i && i === P)) {
        i = null
        return
      }
      k = O ? p.position - O.position : 0
    } else s(m)
    r.forEach($ => {
      $(n.value, P, {
        delta: k,
        type: yn.pop,
        direction: k ? (k > 0 ? fn.forward : fn.back) : fn.unknown,
      })
    })
  }
  function c() {
    i = n.value
  }
  function f(p) {
    r.push(p)
    const m = () => {
      const P = r.indexOf(p)
      P > -1 && r.splice(P, 1)
    }
    return o.push(m), m
  }
  function a() {
    const {history: p} = window
    p.state &&
      p.replaceState(
        X({}, p.state, {
          scroll: fs(),
        }),
        '',
      )
  }
  function h() {
    for (const p of o) p()
    ;(o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', a)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', a, {
      passive: !0,
    }),
    {
      pauseListeners: c,
      listen: f,
      destroy: h,
    }
  )
}
function co(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? fs() : null,
  }
}
function Fu(e) {
  const {history: t, location: n} = window,
    s = {
      value: Zi(e, n),
    },
    r = {
      value: t.state,
    }
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function o(c, f, a) {
    const h = e.indexOf('#'),
      p =
        h > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(h)) + c
          : $u() + e + c
    try {
      t[a ? 'replaceState' : 'pushState'](f, '', p), (r.value = f)
    } catch (m) {
      console.error(m), n[a ? 'replace' : 'assign'](p)
    }
  }
  function i(c, f) {
    const a = X({}, t.state, co(r.value.back, c, r.value.forward, !0), f, {
      position: r.value.position,
    })
    o(c, a, !0), (s.value = c)
  }
  function l(c, f) {
    const a = X({}, r.value, t.state, {
      forward: c,
      scroll: fs(),
    })
    o(a.current, a, !0)
    const h = X(
      {},
      co(s.value, c, null),
      {
        position: a.position + 1,
      },
      f,
    )
    o(c, h, !1), (s.value = c)
  }
  return {
    location: s,
    state: r,
    push: l,
    replace: i,
  }
}
function Hu(e) {
  e = Ou(e)
  const t = Fu(e),
    n = Bu(e, t.state, t.location, t.replace)
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const r = X(
    {
      location: '',
      base: e,
      go: s,
      createHref: Iu.bind(null, e),
    },
    t,
    n,
  )
  return (
    Object.defineProperty(r, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  )
}
function Vu(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Hu(e)
  )
}
function ju(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function el(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const tl = Symbol('')
var ao
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(ao || (ao = {}))
function Xt(e, t) {
  return X(
    new Error(),
    {
      type: e,
      [tl]: !0,
    },
    t,
  )
}
function st(e, t) {
  return e instanceof Error && tl in e && (t == null || !!(e.type & t))
}
const uo = '[^/]+?',
  ku = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0,
  },
  Uu = /[.+*?^${}()[\]/\\]/g
function Ku(e, t) {
  const n = X({}, ku, t),
    s = []
  let r = n.start ? '^' : ''
  const o = []
  for (const f of e) {
    const a = f.length ? [] : [90]
    n.strict && !f.length && (r += '/')
    for (let h = 0; h < f.length; h++) {
      const p = f[h]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0)
        h || (r += '/'), (r += p.value.replace(Uu, '\\$&')), (m += 40)
      else if (p.type === 1) {
        const {value: P, repeatable: O, optional: k, regexp: $} = p
        o.push({
          name: P,
          repeatable: O,
          optional: k,
        })
        const I = $ || uo
        if (I !== uo) {
          m += 10
          try {
            new RegExp(`(${I})`)
          } catch (A) {
            throw new Error(
              `Invalid custom RegExp for param "${P}" (${I}): ` + A.message,
            )
          }
        }
        let N = O ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`
        h || (N = k && f.length < 2 ? `(?:/${N})` : '/' + N),
          k && (N += '?'),
          (r += N),
          (m += 20),
          k && (m += -8),
          O && (m += -20),
          I === '.*' && (m += -50)
      }
      a.push(m)
    }
    s.push(a)
  }
  if (n.strict && n.end) {
    const f = s.length - 1
    s[f][s[f].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const i = new RegExp(r, n.sensitive ? '' : 'i')
  function l(f) {
    const a = f.match(i),
      h = {}
    if (!a) return null
    for (let p = 1; p < a.length; p++) {
      const m = a[p] || '',
        P = o[p - 1]
      h[P.name] = m && P.repeatable ? m.split('/') : m
    }
    return h
  }
  function c(f) {
    let a = '',
      h = !1
    for (const p of e) {
      ;(!h || !a.endsWith('/')) && (a += '/'), (h = !1)
      for (const m of p)
        if (m.type === 0) a += m.value
        else if (m.type === 1) {
          const {value: P, repeatable: O, optional: k} = m,
            $ = P in f ? f[P] : ''
          if (Ge($) && !O)
            throw new Error(
              `Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const I = Ge($) ? $.join('/') : $
          if (!I)
            if (k)
              p.length < 2 &&
                (a.endsWith('/') ? (a = a.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${P}"`)
          a += I
        }
    }
    return a || '/'
  }
  return {
    re: i,
    score: s,
    keys: o,
    parse: l,
    stringify: c,
  }
}
function Wu(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function nl(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const o = Wu(s[n], r[n])
    if (o) return o
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (fo(s)) return 1
    if (fo(r)) return -1
  }
  return r.length - s.length
}
function fo(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const zu = {
    type: 0,
    value: '',
  },
  qu = /[a-zA-Z0-9_]/
function Gu(e) {
  if (!e) return [[]]
  if (e === '/') return [[zu]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`)
  }
  let n = 0,
    s = n
  const r = []
  let o
  function i() {
    o && r.push(o), (o = [])
  }
  let l = 0,
    c,
    f = '',
    a = ''
  function h() {
    f &&
      (n === 0
        ? o.push({
            type: 0,
            value: f,
          })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === '*' || c === '+') &&
            t(
              `A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`,
            ),
          o.push({
            type: 1,
            value: f,
            regexp: a,
            repeatable: c === '*' || c === '+',
            optional: c === '*' || c === '?',
          }))
        : t('Invalid state to consume buffer'),
      (f = ''))
  }
  function p() {
    f += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (f && h(), i()) : c === ':' ? (h(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        c === '('
          ? (n = 2)
          : qu.test(c)
          ? p()
          : (h(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case 2:
        c === ')'
          ? a[a.length - 1] == '\\'
            ? (a = a.slice(0, -1) + c)
            : (n = 3)
          : (a += c)
        break
      case 3:
        h(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--, (a = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), h(), i(), r
}
function Ju(e, t, n) {
  const s = Ku(Gu(e.path), n),
    r = X(s, {
      record: e,
      parent: t,
      children: [],
      alias: [],
    })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Qu(e, t) {
  const n = [],
    s = new Map()
  t = go(
    {
      strict: !1,
      end: !0,
      sensitive: !1,
    },
    t,
  )
  function r(h) {
    return s.get(h)
  }
  function o(h, p, m) {
    const P = !m,
      O = Yu(h)
    O.aliasOf = m && m.record
    const k = go(t, h),
      $ = [O]
    if ('alias' in h) {
      const A = typeof h.alias == 'string' ? [h.alias] : h.alias
      for (const U of A)
        $.push(
          X({}, O, {
            components: m ? m.record.components : O.components,
            path: U,
            aliasOf: m ? m.record : O,
          }),
        )
    }
    let I, N
    for (const A of $) {
      const {path: U} = A
      if (p && U[0] !== '/') {
        const te = p.record.path,
          Z = te[te.length - 1] === '/' ? '' : '/'
        A.path = p.record.path + (U && Z + U)
      }
      if (
        ((I = Ju(A, p, k)),
        m
          ? m.alias.push(I)
          : ((N = N || I),
            N !== I && N.alias.push(I),
            P && h.name && !po(I) && i(h.name)),
        sl(I) && c(I),
        O.children)
      ) {
        const te = O.children
        for (let Z = 0; Z < te.length; Z++) o(te[Z], I, m && m.children[Z])
      }
      m = m || I
    }
    return N
      ? () => {
          i(N)
        }
      : un
  }
  function i(h) {
    if (el(h)) {
      const p = s.get(h)
      p &&
        (s.delete(h),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i))
    } else {
      const p = n.indexOf(h)
      p > -1 &&
        (n.splice(p, 1),
        h.record.name && s.delete(h.record.name),
        h.children.forEach(i),
        h.alias.forEach(i))
    }
  }
  function l() {
    return n
  }
  function c(h) {
    const p = ef(h, n)
    n.splice(p, 0, h), h.record.name && !po(h) && s.set(h.record.name, h)
  }
  function f(h, p) {
    let m,
      P = {},
      O,
      k
    if ('name' in h && h.name) {
      if (((m = s.get(h.name)), !m))
        throw Xt(1, {
          location: h,
        })
      ;(k = m.record.name),
        (P = X(
          ho(
            p.params,
            m.keys
              .filter(N => !N.optional)
              .concat(m.parent ? m.parent.keys.filter(N => N.optional) : [])
              .map(N => N.name),
          ),
          h.params &&
            ho(
              h.params,
              m.keys.map(N => N.name),
            ),
        )),
        (O = m.stringify(P))
    } else if (h.path != null)
      (O = h.path),
        (m = n.find(N => N.re.test(O))),
        m && ((P = m.parse(O)), (k = m.record.name))
    else {
      if (((m = p.name ? s.get(p.name) : n.find(N => N.re.test(p.path))), !m))
        throw Xt(1, {
          location: h,
          currentLocation: p,
        })
      ;(k = m.record.name),
        (P = X({}, p.params, h.params)),
        (O = m.stringify(P))
    }
    const $ = []
    let I = m
    for (; I; ) $.unshift(I.record), (I = I.parent)
    return {
      name: k,
      path: O,
      params: P,
      matched: $,
      meta: Zu($),
    }
  }
  e.forEach(h => o(h))
  function a() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: o,
    resolve: f,
    removeRoute: i,
    clearRoutes: a,
    getRoutes: l,
    getRecordMatcher: r,
  }
}
function ho(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function Yu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Xu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && {
            default: e.component,
          },
  }
}
function Xu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function po(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Zu(e) {
  return e.reduce((t, n) => X(t, n.meta), {})
}
function go(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function ef(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const o = (n + s) >> 1
    nl(e, t[o]) < 0 ? (s = o) : (n = o + 1)
  }
  const r = tf(e)
  return r && (s = t.lastIndexOf(r, s - 1)), s
}
function tf(e) {
  let t = e
  for (; (t = t.parent); ) if (sl(t) && nl(e, t) === 0) return t
}
function sl({record: e}) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  )
}
function nf(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(Gi, ' '),
      i = o.indexOf('='),
      l = vn(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : vn(o.slice(i + 1))
    if (l in t) {
      let f = t[l]
      Ge(f) || (f = t[l] = [f]), f.push(c)
    } else t[l] = c
  }
  return t
}
function mo(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = bu(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Ge(s) ? s.map(o => o && js(o)) : [s && js(s)]).forEach(o => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function sf(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Ge(s)
        ? s.map(r => (r == null ? null : '' + r))
        : s == null
        ? s
        : '' + s)
  }
  return t
}
const rf = Symbol(''),
  vo = Symbol(''),
  vr = Symbol(''),
  rl = Symbol(''),
  Us = Symbol('')
function sn() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n,
  }
}
function bt(e, t, n, s, r, o = i => i()) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((l, c) => {
      const f = p => {
          p === !1
            ? c(
                Xt(4, {
                  from: n,
                  to: t,
                }),
              )
            : p instanceof Error
            ? c(p)
            : ju(p)
            ? c(
                Xt(2, {
                  from: t,
                  to: p,
                }),
              )
            : (i &&
                s.enterCallbacks[r] === i &&
                typeof p == 'function' &&
                i.push(p),
              l())
        },
        a = o(() => e.call(s && s.instances[r], t, n, f))
      let h = Promise.resolve(a)
      e.length < 3 && (h = h.then(f)), h.catch(p => c(p))
    })
}
function Ps(e, t, n, s, r = o => o()) {
  const o = []
  for (const i of e)
    for (const l in i.components) {
      let c = i.components[l]
      if (!(t !== 'beforeRouteEnter' && !i.instances[l]))
        if (of(c)) {
          const a = (c.__vccOpts || c)[t]
          a && o.push(bt(a, n, s, i, l, r))
        } else {
          let f = c()
          o.push(() =>
            f.then(a => {
              if (!a)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${l}" at "${i.path}"`),
                )
              const h = au(a) ? a.default : a
              i.components[l] = h
              const m = (h.__vccOpts || h)[t]
              return m && bt(m, n, s, i, l, r)()
            }),
          )
        }
    }
  return o
}
function of(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function yo(e) {
  const t = Ze(vr),
    n = Ze(rl),
    s = Ve(() => {
      const c = Ct(e.to)
      return t.resolve(c)
    }),
    r = Ve(() => {
      const {matched: c} = s.value,
        {length: f} = c,
        a = c[f - 1],
        h = n.matched
      if (!a || !h.length) return -1
      const p = h.findIndex(Yt.bind(null, a))
      if (p > -1) return p
      const m = _o(c[f - 2])
      return f > 1 && _o(a) === m && h[h.length - 1].path !== m
        ? h.findIndex(Yt.bind(null, c[f - 2]))
        : p
    }),
    o = Ve(() => r.value > -1 && uf(n.params, s.value.params)),
    i = Ve(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Xi(n.params, s.value.params),
    )
  function l(c = {}) {
    return af(c)
      ? t[Ct(e.replace) ? 'replace' : 'push'](Ct(e.to)).catch(un)
      : Promise.resolve()
  }
  return {
    route: s,
    href: Ve(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: l,
  }
}
const lf = ft({
    name: 'RouterLink',
    compatConfig: {
      MODE: 3,
    },
    props: {
      to: {
        type: [String, Object],
        required: !0,
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: 'page',
      },
    },
    useLink: yo,
    setup(e, {slots: t}) {
      const n = En(yo(e)),
        {options: s} = Ze(vr),
        r = Ve(() => ({
          [bo(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [bo(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active',
          )]: n.isExactActive,
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : Bi(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              o,
            )
      }
    },
  }),
  cf = lf
function af(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function uf(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Ge(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
      return !1
  }
  return !0
}
function _o(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const bo = (e, t, n) => e ?? t ?? n,
  ff = ft({
    name: 'RouterView',
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: 'default',
      },
      route: Object,
    },
    compatConfig: {
      MODE: 3,
    },
    setup(e, {attrs: t, slots: n}) {
      const s = Ze(Us),
        r = Ve(() => e.route || s.value),
        o = Ze(vo, 0),
        i = Ve(() => {
          let f = Ct(o)
          const {matched: a} = r.value
          let h
          for (; (h = a[f]) && !h.components; ) f++
          return f
        }),
        l = Ve(() => r.value.matched[i.value])
      $n(
        vo,
        Ve(() => i.value + 1),
      ),
        $n(rf, l),
        $n(Us, r)
      const c = lc()
      return (
        Bn(
          () => [c.value, l.value, e.name],
          ([f, a, h], [p, m, P]) => {
            a &&
              ((a.instances[h] = f),
              m &&
                m !== a &&
                f &&
                f === p &&
                (a.leaveGuards.size || (a.leaveGuards = m.leaveGuards),
                a.updateGuards.size || (a.updateGuards = m.updateGuards))),
              f &&
                a &&
                (!m || !Yt(a, m) || !p) &&
                (a.enterCallbacks[h] || []).forEach(O => O(f))
          },
          {
            flush: 'post',
          },
        ),
        () => {
          const f = r.value,
            a = e.name,
            h = l.value,
            p = h && h.components[a]
          if (!p)
            return Co(n.default, {
              Component: p,
              route: f,
            })
          const m = h.props[a],
            P = m
              ? m === !0
                ? f.params
                : typeof m == 'function'
                ? m(f)
                : m
              : null,
            k = Bi(
              p,
              X({}, P, t, {
                onVnodeUnmounted: $ => {
                  $.component.isUnmounted && (h.instances[a] = null)
                },
                ref: c,
              }),
            )
          return (
            Co(n.default, {
              Component: k,
              route: f,
            }) || k
          )
        }
      )
    },
  })
function Co(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const df = ff
function hf(e) {
  const t = Qu(e.routes, e),
    n = e.parseQuery || nf,
    s = e.stringifyQuery || mo,
    r = e.history,
    o = sn(),
    i = sn(),
    l = sn(),
    c = cc(mt)
  let f = mt
  kt &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const a = Rs.bind(null, y => '' + y),
    h = Rs.bind(null, Eu),
    p = Rs.bind(null, vn)
  function m(y, x) {
    let T, D
    return (
      el(y) ? ((T = t.getRecordMatcher(y)), (D = x)) : (D = y), t.addRoute(D, T)
    )
  }
  function P(y) {
    const x = t.getRecordMatcher(y)
    x && t.removeRoute(x)
  }
  function O() {
    return t.getRoutes().map(y => y.record)
  }
  function k(y) {
    return !!t.getRecordMatcher(y)
  }
  function $(y, x) {
    if (((x = X({}, x || c.value)), typeof y == 'string')) {
      const d = xs(n, y, x.path),
        g = t.resolve(
          {
            path: d.path,
          },
          x,
        ),
        _ = r.createHref(d.fullPath)
      return X(d, g, {
        params: p(g.params),
        hash: vn(d.hash),
        redirectedFrom: void 0,
        href: _,
      })
    }
    let T
    if (y.path != null)
      T = X({}, y, {
        path: xs(n, y.path, x.path).path,
      })
    else {
      const d = X({}, y.params)
      for (const g in d) d[g] == null && delete d[g]
      ;(T = X({}, y, {
        params: h(d),
      })),
        (x.params = h(x.params))
    }
    const D = t.resolve(T, x),
      Q = y.hash || ''
    D.params = a(p(D.params))
    const le = Tu(
        s,
        X({}, y, {
          hash: _u(Q),
          path: D.path,
        }),
      ),
      u = r.createHref(le)
    return X(
      {
        fullPath: le,
        hash: Q,
        query: s === mo ? sf(y.query) : y.query || {},
      },
      D,
      {
        redirectedFrom: void 0,
        href: u,
      },
    )
  }
  function I(y) {
    return typeof y == 'string' ? xs(n, y, c.value.path) : X({}, y)
  }
  function N(y, x) {
    if (f !== y)
      return Xt(8, {
        from: x,
        to: y,
      })
  }
  function A(y) {
    return Z(y)
  }
  function U(y) {
    return A(
      X(I(y), {
        replace: !0,
      }),
    )
  }
  function te(y) {
    const x = y.matched[y.matched.length - 1]
    if (x && x.redirect) {
      const {redirect: T} = x
      let D = typeof T == 'function' ? T(y) : T
      return (
        typeof D == 'string' &&
          ((D =
            D.includes('?') || D.includes('#')
              ? (D = I(D))
              : {
                  path: D,
                }),
          (D.params = {})),
        X(
          {
            query: y.query,
            hash: y.hash,
            params: D.path != null ? {} : y.params,
          },
          D,
        )
      )
    }
  }
  function Z(y, x) {
    const T = (f = $(y)),
      D = c.value,
      Q = y.state,
      le = y.force,
      u = y.replace === !0,
      d = te(T)
    if (d)
      return Z(
        X(I(d), {
          state: typeof d == 'object' ? X({}, Q, d.state) : Q,
          force: le,
          replace: u,
        }),
        x || T,
      )
    const g = T
    g.redirectedFrom = x
    let _
    return (
      !le &&
        Ru(s, D, T) &&
        ((_ = Xt(16, {
          to: g,
          from: D,
        })),
        Je(D, D, !0, !1)),
      (_ ? Promise.resolve(_) : q(g, D))
        .catch(v => (st(v) ? (st(v, 2) ? v : ht(v)) : J(v, g, D)))
        .then(v => {
          if (v) {
            if (st(v, 2))
              return Z(
                X(
                  {
                    replace: u,
                  },
                  I(v.to),
                  {
                    state: typeof v.to == 'object' ? X({}, Q, v.to.state) : Q,
                    force: le,
                  },
                ),
                x || g,
              )
          } else v = M(g, D, !0, u, Q)
          return ne(g, D, v), v
        })
    )
  }
  function ye(y, x) {
    const T = N(y, x)
    return T ? Promise.reject(T) : Promise.resolve()
  }
  function j(y) {
    const x = Bt.values().next().value
    return x && typeof x.runWithContext == 'function'
      ? x.runWithContext(y)
      : y()
  }
  function q(y, x) {
    let T
    const [D, Q, le] = pf(y, x)
    T = Ps(D.reverse(), 'beforeRouteLeave', y, x)
    for (const d of D)
      d.leaveGuards.forEach(g => {
        T.push(bt(g, y, x))
      })
    const u = ye.bind(null, y, x)
    return (
      T.push(u),
      De(T)
        .then(() => {
          T = []
          for (const d of o.list()) T.push(bt(d, y, x))
          return T.push(u), De(T)
        })
        .then(() => {
          T = Ps(Q, 'beforeRouteUpdate', y, x)
          for (const d of Q)
            d.updateGuards.forEach(g => {
              T.push(bt(g, y, x))
            })
          return T.push(u), De(T)
        })
        .then(() => {
          T = []
          for (const d of le)
            if (d.beforeEnter)
              if (Ge(d.beforeEnter))
                for (const g of d.beforeEnter) T.push(bt(g, y, x))
              else T.push(bt(d.beforeEnter, y, x))
          return T.push(u), De(T)
        })
        .then(
          () => (
            y.matched.forEach(d => (d.enterCallbacks = {})),
            (T = Ps(le, 'beforeRouteEnter', y, x, j)),
            T.push(u),
            De(T)
          ),
        )
        .then(() => {
          T = []
          for (const d of i.list()) T.push(bt(d, y, x))
          return T.push(u), De(T)
        })
        .catch(d => (st(d, 8) ? d : Promise.reject(d)))
    )
  }
  function ne(y, x, T) {
    l.list().forEach(D => j(() => D(y, x, T)))
  }
  function M(y, x, T, D, Q) {
    const le = N(y, x)
    if (le) return le
    const u = x === mt,
      d = kt ? history.state : {}
    T &&
      (D || u
        ? r.replace(
            y.fullPath,
            X(
              {
                scroll: u && d && d.scroll,
              },
              Q,
            ),
          )
        : r.push(y.fullPath, Q)),
      (c.value = y),
      Je(y, x, T, u),
      ht()
  }
  let G
  function de() {
    G ||
      (G = r.listen((y, x, T) => {
        if (!xn.listening) return
        const D = $(y),
          Q = te(D)
        if (Q) {
          Z(
            X(Q, {
              replace: !0,
            }),
            D,
          ).catch(un)
          return
        }
        f = D
        const le = c.value
        kt && Nu(lo(le.fullPath, T.delta), fs()),
          q(D, le)
            .catch(u =>
              st(u, 12)
                ? u
                : st(u, 2)
                ? (Z(u.to, D)
                    .then(d => {
                      st(d, 20) && !T.delta && T.type === yn.pop && r.go(-1, !1)
                    })
                    .catch(un),
                  Promise.reject())
                : (T.delta && r.go(-T.delta, !1), J(u, D, le)),
            )
            .then(u => {
              ;(u = u || M(D, le, !1)),
                u &&
                  (T.delta && !st(u, 8)
                    ? r.go(-T.delta, !1)
                    : T.type === yn.pop && st(u, 20) && r.go(-1, !1)),
                ne(D, le, u)
            })
            .catch(un)
      }))
  }
  let Be = sn(),
    ue = sn(),
    ee
  function J(y, x, T) {
    ht(y)
    const D = ue.list()
    return (
      D.length ? D.forEach(Q => Q(y, x, T)) : console.error(y),
      Promise.reject(y)
    )
  }
  function tt() {
    return ee && c.value !== mt
      ? Promise.resolve()
      : new Promise((y, x) => {
          Be.add([y, x])
        })
  }
  function ht(y) {
    return (
      ee ||
        ((ee = !y),
        de(),
        Be.list().forEach(([x, T]) => (y ? T(y) : x())),
        Be.reset()),
      y
    )
  }
  function Je(y, x, T, D) {
    const {scrollBehavior: Q} = e
    if (!kt || !Q) return Promise.resolve()
    const le =
      (!T && Lu(lo(y.fullPath, 0))) ||
      ((D || !T) && history.state && history.state.scroll) ||
      null
    return lr()
      .then(() => Q(y, x, le))
      .then(u => u && Du(u))
      .catch(u => J(u, y, x))
  }
  const Se = y => r.go(y)
  let $t
  const Bt = new Set(),
    xn = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: P,
      clearRoutes: t.clearRoutes,
      hasRoute: k,
      getRoutes: O,
      resolve: $,
      options: e,
      push: A,
      replace: U,
      go: Se,
      back: () => Se(-1),
      forward: () => Se(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: ue.add,
      isReady: tt,
      install(y) {
        const x = this
        y.component('RouterLink', cf),
          y.component('RouterView', df),
          (y.config.globalProperties.$router = x),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Ct(c),
          }),
          kt &&
            !$t &&
            c.value === mt &&
            (($t = !0), A(r.location).catch(Q => {}))
        const T = {}
        for (const Q in mt)
          Object.defineProperty(T, Q, {
            get: () => c.value[Q],
            enumerable: !0,
          })
        y.provide(vr, x), y.provide(rl, Yo(T)), y.provide(Us, c)
        const D = y.unmount
        Bt.add(y),
          (y.unmount = function () {
            Bt.delete(y),
              Bt.size < 1 &&
                ((f = mt),
                G && G(),
                (G = null),
                (c.value = mt),
                ($t = !1),
                (ee = !1)),
              D()
          })
      },
    }
  function De(y) {
    return y.reduce((x, T) => x.then(() => j(T)), Promise.resolve())
  }
  return xn
}
function pf(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const l = t.matched[i]
    l && (e.matched.find(f => Yt(f, l)) ? s.push(l) : n.push(l))
    const c = e.matched[i]
    c && (t.matched.find(f => Yt(f, c)) || r.push(c))
  }
  return [n, s, r]
}
const Eo = () =>
    cu(
      () => import('./index-393c19cd.js'),
      [
        './packages/3DMap/zhejiang-map/assets/index-393c19cd.js',
        './packages/3DMap/zhejiang-map/assets/index-32a4050e.css',
      ],
    ),
  gf = hf({
    history: Vu(),
    routes: [
      {
        path: '/',
        redirect: '/zhejiangMap',
        component: Eo,
      },
      {
        path: '/zhejiangMap',
        component: Eo,
      },
      {
        path: '/:pathMatch(.*)',
        redirect: '/',
      },
    ],
  }),
  mf = './assets/qrcode-42ca0273.png'
const vf = {
    class: 'root-app',
  },
  yf = {
    __name: 'App',
    setup(e) {
      let t = null,
        n = En({
          isHover: !1,
        })
      function s() {
        clearTimeout(t), (n.isHover = !0)
      }
      function r() {
        clearTimeout(t),
          (t = setTimeout(() => {
            n.isHover = !1
          }, 2e3))
      }
      function o() {
        {
          ;(document.oncontextmenu = function () {
            event.returnValue = !1
          }),
            (document.onkeydown =
              document.onkeyup =
              document.onkeypress =
                function (c) {
                  let f =
                    c || window.event || arguments.callee.caller.arguments[0]
                  if (f && f.keyCode == 123) return (f.returnValue = !1), !1
                })
          var i = new Image()
          Object.defineProperty(i, 'id', {
            get: function () {
              window.location.href = 'https://www.baidu.com'
            },
          }),
            console.log(i),
            setInterval(function () {
              l()
            }, 2e3)
          var l = function () {
            console.log(22)

            // function c(f) {
            //   ("" + f / f).length !== 1 || f % 20 === 0
            //     ? function () {}.constructor("debugger")()
            //     : function () {}.constructor("debugger")(),
            //     c(++f);
            // }
            try {
              c(0)
            } catch {}
          }
          l()
        }
      }
      return (
        ar(() => {
          o(),
            setTimeout(() => {
              ;(n.isHover = !0),
                (t = setTimeout(() => {
                  n.isHover = !1
                }, 2e3))
            }, 500)
        }),
        (i, l) => {
          const c = Gt('router-view')
          return (
            ce(),
            $e('div', vf, [
              pe(c),
              Le(
                'div',
                {
                  class: at([
                    'qrcode-fixed',
                    {
                      active: Ct(n).isHover,
                    },
                  ]),
                },
                [
                  Le(
                    'div',
                    {
                      class: 'qrcode-fixed-btn',
                      onMouseenter: s,
                      onMouseleave: r,
                    },
                    l[0] ||
                      (l[0] = [
                        Le(
                          'div',
                          {
                            class: 'buy-btn',
                          },
                          [Le('span', null, '购买'), Le('span', null, '源码')],
                          -1,
                        ),
                      ]),
                    32,
                  ),
                  l[1] ||
                    (l[1] = ha(
                      '<div class="qrcode-fixed-card"><img class="qrcode-pic" src="' +
                        mf +
                        '" alt=""><div class="content-us"><p class="title">Three.js 3d前端特效</p><p class="desc"><span>承接数据可视化前端制作/源码出售</span><span>欢迎咨询合作</span></p><p class="tips">微信扫码，联系我们</p></div></div>',
                      1,
                    )),
                ],
                2,
              ),
            ])
          )
        }
      )
    },
  }
var _f = Object.defineProperty,
  So = Object.getOwnPropertySymbols,
  bf = Object.prototype.hasOwnProperty,
  Cf = Object.prototype.propertyIsEnumerable,
  wo = (e, t, n) =>
    t in e
      ? _f(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n,
        })
      : (e[t] = n),
  ol = (e, t) => {
    for (var n in t || (t = {})) bf.call(t, n) && wo(e, n, t[n])
    if (So) for (var n of So(t)) Cf.call(t, n) && wo(e, n, t[n])
    return e
  },
  ds = e => typeof e == 'function',
  hs = e => typeof e == 'string',
  il = e => hs(e) && e.trim().length > 0,
  Ef = e => typeof e == 'number',
  It = e => typeof e > 'u',
  _n = e => typeof e == 'object' && e !== null,
  Sf = e => et(e, 'tag') && il(e.tag),
  ll = e => window.TouchEvent && e instanceof TouchEvent,
  cl = e => et(e, 'component') && al(e.component),
  wf = e => ds(e) || _n(e),
  al = e => !It(e) && (hs(e) || wf(e) || cl(e)),
  To = e =>
    _n(e) &&
    ['height', 'width', 'right', 'left', 'top', 'bottom'].every(t => Ef(e[t])),
  et = (e, t) => (_n(e) || ds(e)) && t in e,
  Tf = (
    e => () =>
      e++
  )(0)
function Os(e) {
  return ll(e) ? e.targetTouches[0].clientX : e.clientX
}
function Ro(e) {
  return ll(e) ? e.targetTouches[0].clientY : e.clientY
}
var Rf = e => {
    It(e.remove) ? e.parentNode && e.parentNode.removeChild(e) : e.remove()
  },
  Rn = e =>
    cl(e)
      ? Rn(e.component)
      : Sf(e)
      ? ft({
          render() {
            return e
          },
        })
      : typeof e == 'string'
      ? e
      : z(Ct(e)),
  xf = e => {
    if (typeof e == 'string') return e
    const t = et(e, 'props') && _n(e.props) ? e.props : {},
      n = et(e, 'listeners') && _n(e.listeners) ? e.listeners : {}
    return {
      component: Rn(e),
      props: t,
      listeners: n,
    }
  },
  Pf = () => typeof window < 'u',
  yr = class {
    constructor() {
      this.allHandlers = {}
    }
    getHandlers(e) {
      return this.allHandlers[e] || []
    }
    on(e, t) {
      const n = this.getHandlers(e)
      n.push(t), (this.allHandlers[e] = n)
    }
    off(e, t) {
      const n = this.getHandlers(e)
      n.splice(n.indexOf(t) >>> 0, 1)
    }
    emit(e, t) {
      this.getHandlers(e).forEach(s => s(t))
    }
  },
  Of = e => ['on', 'off', 'emit'].every(t => et(e, t) && ds(e[t])),
  Oe
;(function (e) {
  ;(e.SUCCESS = 'success'),
    (e.ERROR = 'error'),
    (e.WARNING = 'warning'),
    (e.INFO = 'info'),
    (e.DEFAULT = 'default')
})(Oe || (Oe = {}))
var bn
;(function (e) {
  ;(e.TOP_LEFT = 'top-left'),
    (e.TOP_CENTER = 'top-center'),
    (e.TOP_RIGHT = 'top-right'),
    (e.BOTTOM_LEFT = 'bottom-left'),
    (e.BOTTOM_CENTER = 'bottom-center'),
    (e.BOTTOM_RIGHT = 'bottom-right')
})(bn || (bn = {}))
var Ae
;(function (e) {
  ;(e.ADD = 'add'),
    (e.DISMISS = 'dismiss'),
    (e.UPDATE = 'update'),
    (e.CLEAR = 'clear'),
    (e.UPDATE_DEFAULTS = 'update_defaults')
})(Ae || (Ae = {}))
var ke = 'Vue-Toastification',
  He = {
    type: {
      type: String,
      default: Oe.DEFAULT,
    },
    classNames: {
      type: [String, Array],
      default: () => [],
    },
    trueBoolean: {
      type: Boolean,
      default: !0,
    },
  },
  ul = {
    type: He.type,
    customIcon: {
      type: [String, Boolean, Object, Function],
      default: !0,
    },
  },
  jn = {
    component: {
      type: [String, Object, Function, Boolean],
      default: 'button',
    },
    classNames: He.classNames,
    showOnHover: {
      type: Boolean,
      default: !1,
    },
    ariaLabel: {
      type: String,
      default: 'close',
    },
  },
  Ks = {
    timeout: {
      type: [Number, Boolean],
      default: 5e3,
    },
    hideProgressBar: {
      type: Boolean,
      default: !1,
    },
    isRunning: {
      type: Boolean,
      default: !1,
    },
  },
  fl = {
    transition: {
      type: [Object, String],
      default: `${ke}__bounce`,
    },
  },
  Af = {
    position: {
      type: String,
      default: bn.TOP_RIGHT,
    },
    draggable: He.trueBoolean,
    draggablePercent: {
      type: Number,
      default: 0.6,
    },
    pauseOnFocusLoss: He.trueBoolean,
    pauseOnHover: He.trueBoolean,
    closeOnClick: He.trueBoolean,
    timeout: Ks.timeout,
    hideProgressBar: Ks.hideProgressBar,
    toastClassName: He.classNames,
    bodyClassName: He.classNames,
    icon: ul.customIcon,
    closeButton: jn.component,
    closeButtonClassName: jn.classNames,
    showCloseButtonOnHover: jn.showOnHover,
    accessibility: {
      type: Object,
      default: () => ({
        toastRole: 'alert',
        closeButtonLabel: 'close',
      }),
    },
    rtl: {
      type: Boolean,
      default: !1,
    },
    eventBus: {
      type: Object,
      required: !1,
      default: () => new yr(),
    },
  },
  If = {
    id: {
      type: [String, Number],
      required: !0,
      default: 0,
    },
    type: He.type,
    content: {
      type: [String, Object, Function],
      required: !0,
      default: '',
    },
    onClick: {
      type: Function,
      default: void 0,
    },
    onClose: {
      type: Function,
      default: void 0,
    },
  },
  Mf = {
    container: {
      type: [Object, Function],
      default: () => document.body,
    },
    newestOnTop: He.trueBoolean,
    maxToasts: {
      type: Number,
      default: 20,
    },
    transition: fl.transition,
    toastDefaults: Object,
    filterBeforeCreate: {
      type: Function,
      default: e => e,
    },
    filterToasts: {
      type: Function,
      default: e => e,
    },
    containerClassName: He.classNames,
    onMounted: Function,
    shareAppContext: [Boolean, Object],
  },
  ct = {
    CORE_TOAST: Af,
    TOAST: If,
    CONTAINER: Mf,
    PROGRESS_BAR: Ks,
    ICON: ul,
    TRANSITION: fl,
    CLOSE_BUTTON: jn,
  },
  dl = ft({
    name: 'VtProgressBar',
    props: ct.PROGRESS_BAR,
    data() {
      return {
        hasClass: !0,
      }
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.timeout}ms`,
          animationPlayState: this.isRunning ? 'running' : 'paused',
          opacity: this.hideProgressBar ? 0 : 1,
        }
      },
      cpClass() {
        return this.hasClass ? `${ke}__progress-bar` : ''
      },
    },
    watch: {
      timeout() {
        ;(this.hasClass = !1), this.$nextTick(() => (this.hasClass = !0))
      },
    },
    mounted() {
      this.$el.addEventListener('animationend', this.animationEnded)
    },
    beforeUnmount() {
      this.$el.removeEventListener('animationend', this.animationEnded)
    },
    methods: {
      animationEnded() {
        this.$emit('close-toast')
      },
    },
  })
function Df(e, t) {
  return (
    ce(),
    $e(
      'div',
      {
        style: Cn(e.style),
        class: at(e.cpClass),
      },
      null,
      6,
    )
  )
}
dl.render = Df
var Nf = dl,
  hl = ft({
    name: 'VtCloseButton',
    props: ct.CLOSE_BUTTON,
    computed: {
      buttonComponent() {
        return this.component !== !1 ? Rn(this.component) : 'button'
      },
      classes() {
        const e = [`${ke}__close-button`]
        return (
          this.showOnHover && e.push('show-on-hover'), e.concat(this.classNames)
        )
      },
    },
  }),
  Lf = ls(' × ')
function $f(e, t) {
  return (
    ce(),
    je(
      fr(e.buttonComponent),
      cs(
        {
          'aria-label': e.ariaLabel,
          class: e.classes,
        },
        e.$attrs,
      ),
      {
        default: wn(() => [Lf]),
        _: 1,
      },
      16,
      ['aria-label', 'class'],
    )
  )
}
hl.render = $f
var Bf = hl,
  pl = {},
  Ff = {
    'aria-hidden': 'true',
    focusable: 'false',
    'data-prefix': 'fas',
    'data-icon': 'check-circle',
    class: 'svg-inline--fa fa-check-circle fa-w-16',
    role: 'img',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
  },
  Hf = Le(
    'path',
    {
      fill: 'currentColor',
      d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
    },
    null,
    -1,
  ),
  Vf = [Hf]
function jf(e, t) {
  return ce(), $e('svg', Ff, Vf)
}
pl.render = jf
var kf = pl,
  gl = {},
  Uf = {
    'aria-hidden': 'true',
    focusable: 'false',
    'data-prefix': 'fas',
    'data-icon': 'info-circle',
    class: 'svg-inline--fa fa-info-circle fa-w-16',
    role: 'img',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
  },
  Kf = Le(
    'path',
    {
      fill: 'currentColor',
      d: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z',
    },
    null,
    -1,
  ),
  Wf = [Kf]
function zf(e, t) {
  return ce(), $e('svg', Uf, Wf)
}
gl.render = zf
var xo = gl,
  ml = {},
  qf = {
    'aria-hidden': 'true',
    focusable: 'false',
    'data-prefix': 'fas',
    'data-icon': 'exclamation-circle',
    class: 'svg-inline--fa fa-exclamation-circle fa-w-16',
    role: 'img',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
  },
  Gf = Le(
    'path',
    {
      fill: 'currentColor',
      d: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
    },
    null,
    -1,
  ),
  Jf = [Gf]
function Qf(e, t) {
  return ce(), $e('svg', qf, Jf)
}
ml.render = Qf
var Yf = ml,
  vl = {},
  Xf = {
    'aria-hidden': 'true',
    focusable: 'false',
    'data-prefix': 'fas',
    'data-icon': 'exclamation-triangle',
    class: 'svg-inline--fa fa-exclamation-triangle fa-w-18',
    role: 'img',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 576 512',
  },
  Zf = Le(
    'path',
    {
      fill: 'currentColor',
      d: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
    },
    null,
    -1,
  ),
  ed = [Zf]
function td(e, t) {
  return ce(), $e('svg', Xf, ed)
}
vl.render = td
var nd = vl,
  yl = ft({
    name: 'VtIcon',
    props: ct.ICON,
    computed: {
      customIconChildren() {
        return et(this.customIcon, 'iconChildren')
          ? this.trimValue(this.customIcon.iconChildren)
          : ''
      },
      customIconClass() {
        return hs(this.customIcon)
          ? this.trimValue(this.customIcon)
          : et(this.customIcon, 'iconClass')
          ? this.trimValue(this.customIcon.iconClass)
          : ''
      },
      customIconTag() {
        return et(this.customIcon, 'iconTag')
          ? this.trimValue(this.customIcon.iconTag, 'i')
          : 'i'
      },
      hasCustomIcon() {
        return this.customIconClass.length > 0
      },
      component() {
        return this.hasCustomIcon
          ? this.customIconTag
          : al(this.customIcon)
          ? Rn(this.customIcon)
          : this.iconTypeComponent
      },
      iconTypeComponent() {
        return {
          [Oe.DEFAULT]: xo,
          [Oe.INFO]: xo,
          [Oe.SUCCESS]: kf,
          [Oe.ERROR]: nd,
          [Oe.WARNING]: Yf,
        }[this.type]
      },
      iconClasses() {
        const e = [`${ke}__icon`]
        return this.hasCustomIcon ? e.concat(this.customIconClass) : e
      },
    },
    methods: {
      trimValue(e, t = '') {
        return il(e) ? e.trim() : t
      },
    },
  })
function sd(e, t) {
  return (
    ce(),
    je(
      fr(e.component),
      {
        class: at(e.iconClasses),
      },
      {
        default: wn(() => [ls(Qs(e.customIconChildren), 1)]),
        _: 1,
      },
      8,
      ['class'],
    )
  )
}
yl.render = sd
var rd = yl,
  _l = ft({
    name: 'VtToast',
    components: {
      ProgressBar: Nf,
      CloseButton: Bf,
      Icon: rd,
    },
    inheritAttrs: !1,
    props: Object.assign({}, ct.CORE_TOAST, ct.TOAST),
    data() {
      return {
        isRunning: !0,
        disableTransitions: !1,
        beingDragged: !1,
        dragStart: 0,
        dragPos: {
          x: 0,
          y: 0,
        },
        dragRect: {},
      }
    },
    computed: {
      classes() {
        const e = [
          `${ke}__toast`,
          `${ke}__toast--${this.type}`,
          `${this.position}`,
        ].concat(this.toastClassName)
        return (
          this.disableTransitions && e.push('disable-transition'),
          this.rtl && e.push(`${ke}__toast--rtl`),
          e
        )
      },
      bodyClasses() {
        return [
          `${ke}__toast-${hs(this.content) ? 'body' : 'component-body'}`,
        ].concat(this.bodyClassName)
      },
      draggableStyle() {
        return this.dragStart === this.dragPos.x
          ? {}
          : this.beingDragged
          ? {
              transform: `translateX(${this.dragDelta}px)`,
              opacity: 1 - Math.abs(this.dragDelta / this.removalDistance),
            }
          : {
              transition: 'transform 0.2s, opacity 0.2s',
              transform: 'translateX(0)',
              opacity: 1,
            }
      },
      dragDelta() {
        return this.beingDragged ? this.dragPos.x - this.dragStart : 0
      },
      removalDistance() {
        return To(this.dragRect)
          ? (this.dragRect.right - this.dragRect.left) * this.draggablePercent
          : 0
      },
    },
    mounted() {
      this.draggable && this.draggableSetup(),
        this.pauseOnFocusLoss && this.focusSetup()
    },
    beforeUnmount() {
      this.draggable && this.draggableCleanup(),
        this.pauseOnFocusLoss && this.focusCleanup()
    },
    methods: {
      hasProp: et,
      getVueComponentFromObj: Rn,
      closeToast() {
        this.eventBus.emit(Ae.DISMISS, this.id)
      },
      clickHandler() {
        this.onClick && this.onClick(this.closeToast),
          this.closeOnClick &&
            (!this.beingDragged || this.dragStart === this.dragPos.x) &&
            this.closeToast()
      },
      timeoutHandler() {
        this.closeToast()
      },
      hoverPause() {
        this.pauseOnHover && (this.isRunning = !1)
      },
      hoverPlay() {
        this.pauseOnHover && (this.isRunning = !0)
      },
      focusPause() {
        this.isRunning = !1
      },
      focusPlay() {
        this.isRunning = !0
      },
      focusSetup() {
        addEventListener('blur', this.focusPause),
          addEventListener('focus', this.focusPlay)
      },
      focusCleanup() {
        removeEventListener('blur', this.focusPause),
          removeEventListener('focus', this.focusPlay)
      },
      draggableSetup() {
        const e = this.$el
        e.addEventListener('touchstart', this.onDragStart, {
          passive: !0,
        }),
          e.addEventListener('mousedown', this.onDragStart),
          addEventListener('touchmove', this.onDragMove, {
            passive: !1,
          }),
          addEventListener('mousemove', this.onDragMove),
          addEventListener('touchend', this.onDragEnd),
          addEventListener('mouseup', this.onDragEnd)
      },
      draggableCleanup() {
        const e = this.$el
        e.removeEventListener('touchstart', this.onDragStart),
          e.removeEventListener('mousedown', this.onDragStart),
          removeEventListener('touchmove', this.onDragMove),
          removeEventListener('mousemove', this.onDragMove),
          removeEventListener('touchend', this.onDragEnd),
          removeEventListener('mouseup', this.onDragEnd)
      },
      onDragStart(e) {
        ;(this.beingDragged = !0),
          (this.dragPos = {
            x: Os(e),
            y: Ro(e),
          }),
          (this.dragStart = Os(e)),
          (this.dragRect = this.$el.getBoundingClientRect())
      },
      onDragMove(e) {
        this.beingDragged &&
          (e.preventDefault(),
          this.isRunning && (this.isRunning = !1),
          (this.dragPos = {
            x: Os(e),
            y: Ro(e),
          }))
      },
      onDragEnd() {
        this.beingDragged &&
          (Math.abs(this.dragDelta) >= this.removalDistance
            ? ((this.disableTransitions = !0),
              this.$nextTick(() => this.closeToast()))
            : setTimeout(() => {
                ;(this.beingDragged = !1),
                  To(this.dragRect) &&
                  this.pauseOnHover &&
                  this.dragRect.bottom >= this.dragPos.y &&
                  this.dragPos.y >= this.dragRect.top &&
                  this.dragRect.left <= this.dragPos.x &&
                  this.dragPos.x <= this.dragRect.right
                    ? (this.isRunning = !1)
                    : (this.isRunning = !0)
              }))
      },
    },
  }),
  od = ['role']
function id(e, t) {
  const n = Gt('Icon'),
    s = Gt('CloseButton'),
    r = Gt('ProgressBar')
  return (
    ce(),
    $e(
      'div',
      {
        class: at(e.classes),
        style: Cn(e.draggableStyle),
        onClick:
          t[0] || (t[0] = (...o) => e.clickHandler && e.clickHandler(...o)),
        onMouseenter:
          t[1] || (t[1] = (...o) => e.hoverPause && e.hoverPause(...o)),
        onMouseleave:
          t[2] || (t[2] = (...o) => e.hoverPlay && e.hoverPlay(...o)),
      },
      [
        e.icon
          ? (ce(),
            je(
              n,
              {
                key: 0,
                'custom-icon': e.icon,
                type: e.type,
              },
              null,
              8,
              ['custom-icon', 'type'],
            ))
          : Es('v-if', !0),
        Le(
          'div',
          {
            role: e.accessibility.toastRole || 'alert',
            class: at(e.bodyClasses),
          },
          [
            typeof e.content == 'string'
              ? (ce(),
                $e(
                  ge,
                  {
                    key: 0,
                  },
                  [ls(Qs(e.content), 1)],
                  2112,
                ))
              : (ce(),
                je(
                  fr(e.getVueComponentFromObj(e.content)),
                  cs(
                    {
                      key: 1,
                      'toast-id': e.id,
                    },
                    e.hasProp(e.content, 'props') ? e.content.props : {},
                    Lc(
                      e.hasProp(e.content, 'listeners')
                        ? e.content.listeners
                        : {},
                    ),
                    {
                      onCloseToast: e.closeToast,
                    },
                  ),
                  null,
                  16,
                  ['toast-id', 'onCloseToast'],
                )),
          ],
          10,
          od,
        ),
        e.closeButton
          ? (ce(),
            je(
              s,
              {
                key: 1,
                component: e.closeButton,
                'class-names': e.closeButtonClassName,
                'show-on-hover': e.showCloseButtonOnHover,
                'aria-label': e.accessibility.closeButtonLabel,
                onClick: tu(e.closeToast, ['stop']),
              },
              null,
              8,
              [
                'component',
                'class-names',
                'show-on-hover',
                'aria-label',
                'onClick',
              ],
            ))
          : Es('v-if', !0),
        e.timeout
          ? (ce(),
            je(
              r,
              {
                key: 2,
                'is-running': e.isRunning,
                'hide-progress-bar': e.hideProgressBar,
                timeout: e.timeout,
                onCloseToast: e.timeoutHandler,
              },
              null,
              8,
              ['is-running', 'hide-progress-bar', 'timeout', 'onCloseToast'],
            ))
          : Es('v-if', !0),
      ],
      38,
    )
  )
}
_l.render = id
var ld = _l,
  bl = ft({
    name: 'VtTransition',
    props: ct.TRANSITION,
    emits: ['leave'],
    methods: {
      hasProp: et,
      leave(e) {
        e instanceof HTMLElement &&
          ((e.style.left = e.offsetLeft + 'px'),
          (e.style.top = e.offsetTop + 'px'),
          (e.style.width = getComputedStyle(e).width),
          (e.style.position = 'absolute'))
      },
    },
  })
function cd(e, t) {
  return (
    ce(),
    je(
      Ga,
      {
        tag: 'div',
        'enter-active-class': e.transition.enter
          ? e.transition.enter
          : `${e.transition}-enter-active`,
        'move-class': e.transition.move
          ? e.transition.move
          : `${e.transition}-move`,
        'leave-active-class': e.transition.leave
          ? e.transition.leave
          : `${e.transition}-leave-active`,
        onLeave: e.leave,
      },
      {
        default: wn(() => [Nc(e.$slots, 'default')]),
        _: 3,
      },
      8,
      ['enter-active-class', 'move-class', 'leave-active-class', 'onLeave'],
    )
  )
}
bl.render = cd
var ad = bl,
  Cl = ft({
    name: 'VueToastification',
    devtools: {
      hide: !0,
    },
    components: {
      Toast: ld,
      VtTransition: ad,
    },
    props: Object.assign({}, ct.CORE_TOAST, ct.CONTAINER, ct.TRANSITION),
    data() {
      return {
        count: 0,
        positions: Object.values(bn),
        toasts: {},
        defaults: {},
      }
    },
    computed: {
      toastArray() {
        return Object.values(this.toasts)
      },
      filteredToasts() {
        return this.defaults.filterToasts(this.toastArray)
      },
    },
    beforeMount() {
      const e = this.eventBus
      e.on(Ae.ADD, this.addToast),
        e.on(Ae.CLEAR, this.clearToasts),
        e.on(Ae.DISMISS, this.dismissToast),
        e.on(Ae.UPDATE, this.updateToast),
        e.on(Ae.UPDATE_DEFAULTS, this.updateDefaults),
        (this.defaults = this.$props)
    },
    mounted() {
      this.setup(this.container)
    },
    methods: {
      async setup(e) {
        ds(e) && (e = await e()), Rf(this.$el), e.appendChild(this.$el)
      },
      setToast(e) {
        It(e.id) || (this.toasts[e.id] = e)
      },
      addToast(e) {
        e.content = xf(e.content)
        const t = Object.assign(
            {},
            this.defaults,
            e.type &&
              this.defaults.toastDefaults &&
              this.defaults.toastDefaults[e.type],
            e,
          ),
          n = this.defaults.filterBeforeCreate(t, this.toastArray)
        n && this.setToast(n)
      },
      dismissToast(e) {
        const t = this.toasts[e]
        !It(t) && !It(t.onClose) && t.onClose(), delete this.toasts[e]
      },
      clearToasts() {
        Object.keys(this.toasts).forEach(e => {
          this.dismissToast(e)
        })
      },
      getPositionToasts(e) {
        const t = this.filteredToasts
          .filter(n => n.position === e)
          .slice(0, this.defaults.maxToasts)
        return this.defaults.newestOnTop ? t.reverse() : t
      },
      updateDefaults(e) {
        It(e.container) || this.setup(e.container),
          (this.defaults = Object.assign({}, this.defaults, e))
      },
      updateToast({id: e, options: t, create: n}) {
        this.toasts[e]
          ? (t.timeout && t.timeout === this.toasts[e].timeout && t.timeout++,
            this.setToast(Object.assign({}, this.toasts[e], t)))
          : n &&
            this.addToast(
              Object.assign(
                {},
                {
                  id: e,
                },
                t,
              ),
            )
      },
      getClasses(e) {
        return [`${ke}__container`, e].concat(this.defaults.containerClassName)
      },
    },
  })
function ud(e, t) {
  const n = Gt('Toast'),
    s = Gt('VtTransition')
  return (
    ce(),
    $e('div', null, [
      (ce(!0),
      $e(
        ge,
        null,
        Ar(
          e.positions,
          r => (
            ce(),
            $e(
              'div',
              {
                key: r,
              },
              [
                pe(
                  s,
                  {
                    transition: e.defaults.transition,
                    class: at(e.getClasses(r)),
                  },
                  {
                    default: wn(() => [
                      (ce(!0),
                      $e(
                        ge,
                        null,
                        Ar(
                          e.getPositionToasts(r),
                          o => (
                            ce(),
                            je(
                              n,
                              cs(
                                {
                                  key: o.id,
                                },
                                o,
                              ),
                              null,
                              16,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 2,
                  },
                  1032,
                  ['transition', 'class'],
                ),
              ],
            )
          ),
        ),
        128,
      )),
    ])
  )
}
Cl.render = ud
var fd = Cl,
  Po = (e = {}, t = !0) => {
    const n = (e.eventBus = e.eventBus || new yr())
    t &&
      lr(() => {
        const o = zi(fd, ol({}, e)),
          i = o.mount(document.createElement('div')),
          l = e.onMounted
        if ((It(l) || l(i, o), e.shareAppContext)) {
          const c = e.shareAppContext
          c === !0
            ? console.warn(
                `[${ke}] App to share context with was not provided.`,
              )
            : ((o._context.components = c._context.components),
              (o._context.directives = c._context.directives),
              (o._context.mixins = c._context.mixins),
              (o._context.provides = c._context.provides),
              (o.config.globalProperties = c.config.globalProperties))
        }
      })
    const s = (o, i) => {
      const l = Object.assign(
        {},
        {
          id: Tf(),
          type: Oe.DEFAULT,
        },
        i,
        {
          content: o,
        },
      )
      return n.emit(Ae.ADD, l), l.id
    }
    ;(s.clear = () => n.emit(Ae.CLEAR, void 0)),
      (s.updateDefaults = o => {
        n.emit(Ae.UPDATE_DEFAULTS, o)
      }),
      (s.dismiss = o => {
        n.emit(Ae.DISMISS, o)
      })
    function r(o, {content: i, options: l}, c = !1) {
      const f = Object.assign({}, l, {
        content: i,
      })
      n.emit(Ae.UPDATE, {
        id: o,
        options: f,
        create: c,
      })
    }
    return (
      (s.update = r),
      (s.success = (o, i) =>
        s(
          o,
          Object.assign({}, i, {
            type: Oe.SUCCESS,
          }),
        )),
      (s.info = (o, i) =>
        s(
          o,
          Object.assign({}, i, {
            type: Oe.INFO,
          }),
        )),
      (s.error = (o, i) =>
        s(
          o,
          Object.assign({}, i, {
            type: Oe.ERROR,
          }),
        )),
      (s.warning = (o, i) =>
        s(
          o,
          Object.assign({}, i, {
            type: Oe.WARNING,
          }),
        )),
      s
    )
  },
  dd = () => {
    const e = () => console.warn(`[${ke}] This plugin does not support SSR!`)
    return new Proxy(e, {
      get() {
        return e
      },
    })
  }
function Ws(e) {
  return Pf()
    ? Of(e)
      ? Po(
          {
            eventBus: e,
          },
          !1,
        )
      : Po(e, !0)
    : dd()
}
var El = Symbol('VueToastification'),
  Sl = new yr(),
  hd = (e, t) => {
    ;(t == null ? void 0 : t.shareAppContext) === !0 && (t.shareAppContext = e)
    const n = Ws(
      ol(
        {
          eventBus: Sl,
        },
        t,
      ),
    )
    e.provide(El, n)
  },
  bd = e => {
    if (e) return Ws(e)
    const t = Ni() ? Ze(El, void 0) : void 0
    return t || Ws(Sl)
  },
  pd = hd
let gd = zi(yf)
gd.use(gf)
  .use(pd, {
    position: bn.TOP_CENTER,
    hideProgressBar: !0,
  })
  .mount('#app')
export {
  En as A,
  ls as B,
  Ar as C,
  vd as D,
  ha as E,
  ge as F,
  je as G,
  _d as H,
  fi as a,
  ce as b,
  $e as c,
  Le as d,
  pe as e,
  Ct as f,
  lc as g,
  Ve as h,
  Ze as i,
  Cn as j,
  ft as k,
  md as l,
  Ni as m,
  at as n,
  ar as o,
  $n as p,
  yd as q,
  Nc as r,
  cc as s,
  Qs as t,
  bd as u,
  Bi as v,
  Bn as w,
  lr as x,
  ve as y,
  wn as z,
}
