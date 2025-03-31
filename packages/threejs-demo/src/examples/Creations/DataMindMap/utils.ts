import Jf from './Jf'

function Vc(t, e) {
  return t === e || (t != t && e != e)
}

const Wc = Object.prototype.hasOwnProperty
function qc(t, e, i) {
  const n = t[e]
  ;(Wc.call(t, e) && Vc(n, i) && (void 0 !== i || e in t)) || Hc(t, e, i)
}

function Hc(t, e, i) {
  '__proto__' == e && Zu
    ? Zu(t, e, {
        configurable: !0,
        enumerable: !0,
        value: i,
        writable: !0,
      })
    : (t[e] = i)
}

function Yc(t, e, i, n) {
  const r = !i
  i || (i = {})
  for (let o = -1, a = e.length; ++o < a; ) {
    let s = e[o],
      l = n ? n(i[s], t[s], s, i, t) : void 0
    void 0 === l && (l = t[s]), r ? Hc(i, s, l) : qc(i, s, l)
  }
  return i
}

function Bu(t, e) {
  let i = -1,
    n = t.length
  for (e || (e = Array(n)); ++i < n; ) e[i] = t[i]
  return e
}

const kl = Array.isArray,
  Bl = /\s/
const Sp = _p,
  Mp = Object.prototype.hasOwnProperty

function jl(t) {
  const e = typeof t
  return null != t && ('object' == e || 'function' == e)
}

export function ud(t, e, i, n, r, o) {
  let a,
    s = e & ed,
    l = e & id,
    u = e & nd
  if ((i && (a = r ? i(t, n, r, o) : i(t)), void 0 !== a)) return a
  if (!jl(t)) return t
  const c = kl(t)
  if (c) {
    if (
      ((a = (function (t) {
        const e = t.length,
          i = new t.constructor(e)
        return (
          e &&
            'string' == typeof t[0] &&
            Mp.call(t, 'index') &&
            ((i.index = t.index), (i.input = t.input)),
          i
        )
      })(t)),
      !s)
    )
      return Bu(t, a)
  } else {
    const h = Sp(t),
      p = h == od || h == ad
    if (ch(t)) return Jh(t, s)
    if (h == sd || h == rd || (p && !r)) {
      if (((a = l || p ? {} : Zp(t)), !s))
        return l
          ? (function (t, e) {
              return Yc(t, rp(t), e)
            })(
              t,
              (function (t, e) {
                return t && Yc(e, Eh(e), t)
              })(a, t),
            )
          : (function (t, e) {
              return Yc(t, ip(t), e)
            })(
              t,
              (function (t, e) {
                return t && Yc(e, Ch(e), t)
              })(a, t),
            )
    } else {
      if (!ld[h]) return r ? t : {}
      a = Qp(t, h, s)
    }
  }
  o || (o = new qh())
  const d = o.get(t)
  if (d) return d
  o.set(t, a),
    td(t)
      ? t.forEach(function (n) {
          a.add(ud(n, e, i, n, t, o))
        })
      : Kp(t) &&
        t.forEach(function (n, r) {
          a.set(r, ud(n, e, i, r, t, o))
        })
  const f = c ? void 0 : (u ? (l ? sp : ap) : l ? Eh : Ch)(t)
  return (
    $u(f || t, function (n, r) {
      f && (n = t[(r = n)]), qc(a, r, ud(n, e, i, r, t, o))
    }),
    a
  )
}

export function pd(t) {
  return ud(t, cd | hd)
}

export function sf(t: any, e: string) {
  return t && t.hasOwnProperty(e)
}

export function DA(t, e) {
  return t.transparent ? t.opacity : e
}

export function Qf(t) {
  const e = Jf
  if (void 0 === t[2]) {
    return e.project(t[0], t[1])
  }
  {
    const i = e.project(t[0], t[1])
    return i.push(t[2]), i
  }
}

export function qV(t, e) {
  if (!t) return -1
  return t.default.findIndex(t => !!t.get(e))
}
