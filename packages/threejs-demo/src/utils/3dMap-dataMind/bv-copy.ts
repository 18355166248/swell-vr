const Xs = {
  exports: {},
}
function Qs(t, e, i) {
  i = i || 2
  let n,
    r,
    o,
    a,
    s,
    l,
    u,
    c = e && e.length,
    h = c ? e[0] * i : t.length,
    p = Zs(t, 0, h, i, !0),
    d = []
  if (!p || p.next === p.prev) return d
  if (
    (c &&
      (p = (function (t, e, i, n) {
        let r,
          o,
          a,
          s = []
        for (r = 0, o = e.length; r < o; r++)
          (a = Zs(t, e[r] * n, r < o - 1 ? e[r + 1] * n : t.length, n, !1)) ===
            a.next && (a.steiner = !0),
            s.push(sl(a))
        for (s.sort(nl), r = 0; r < s.length; r++)
          i = Js((i = rl(s[r], i)), i.next)
        return i
      })(t, e, p, i)),
    t.length > 80 * i)
  ) {
    ;(n = o = t[0]), (r = a = t[1])
    for (let f = i; f < h; f += i)
      (s = t[f]) < n && (n = s),
        (l = t[f + 1]) < r && (r = l),
        s > o && (o = s),
        l > a && (a = l)
    u = 0 !== (u = Math.max(o - n, a - r)) ? 1 / u : 0
  }
  return Ks(p, d, i, n, r, u), d
}
function Zs(t, e, i, n, r) {
  let o, a
  if (r === xl(t, e, i, n) > 0)
    for (o = e; o < i; o += n) a = yl(o, t[o], t[o + 1], a)
  else for (o = i - n; o >= e; o -= n) a = yl(o, t[o], t[o + 1], a)
  return a && hl(a, a.next) && (vl(a), (a = a.next)), a
}
function Js(t, e) {
  if (!t) return t
  e || (e = t)
  let i,
    n = t
  do {
    if (
      ((i = !1), n.steiner || (!hl(n, n.next) && 0 !== cl(n.prev, n, n.next)))
    )
      n = n.next
    else {
      if ((vl(n), (n = e = n.prev) === n.next)) break
      i = !0
    }
  } while (i || n !== e)
  return e
}
function Ks(t, e, i, n, r, o, a) {
  if (t) {
    !a &&
      o &&
      (function (t, e, i, n) {
        let r = t
        do {
          null === r.z && (r.z = al(r.x, r.y, e, i, n)),
            (r.prevZ = r.prev),
            (r.nextZ = r.next),
            (r = r.next)
        } while (r !== t)
        ;(r.prevZ.nextZ = null),
          (r.prevZ = null),
          (function (t) {
            let e,
              i,
              n,
              r,
              o,
              a,
              s,
              l,
              u = 1
            do {
              for (i = t, t = null, o = null, a = 0; i; ) {
                for (
                  a++, n = i, s = 0, e = 0;
                  e < u && (s++, (n = n.nextZ));
                  e++
                );
                for (l = u; s > 0 || (l > 0 && n); )
                  0 !== s && (0 === l || !n || i.z <= n.z)
                    ? ((r = i), (i = i.nextZ), s--)
                    : ((r = n), (n = n.nextZ), l--),
                    o ? (o.nextZ = r) : (t = r),
                    (r.prevZ = o),
                    (o = r)
                i = n
              }
              ;(o.nextZ = null), (u *= 2)
            } while (a > 1)
          })(r)
      })(t, n, r, o)
    for (var s, l, u = t; t.prev !== t.next; )
      if (((s = t.prev), (l = t.next), o ? tl(t, n, r, o) : $s(t)))
        e.push(s.i / i),
          e.push(t.i / i),
          e.push(l.i / i),
          vl(t),
          (t = l.next),
          (u = l.next)
      else if ((t = l) === u) {
        a
          ? 1 === a
            ? Ks((t = el(Js(t), e, i)), e, i, n, r, o, 2)
            : 2 === a && il(t, e, i, n, r, o)
          : Ks(Js(t), e, i, n, r, o, 1)
        break
      }
  }
}
function $s(t) {
  const e = t.prev,
    i = t,
    n = t.next
  if (cl(e, i, n) >= 0) return !1
  for (let r = t.next.next; r !== t.prev; ) {
    if (
      ll(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) &&
      cl(r.prev, r, r.next) >= 0
    )
      return !1
    r = r.next
  }
  return !0
}
function tl(t, e, i, n) {
  const r = t.prev,
    o = t,
    a = t.next
  if (cl(r, o, a) >= 0) return !1
  for (
    var s = r.x < o.x ? (r.x < a.x ? r.x : a.x) : o.x < a.x ? o.x : a.x,
      l = r.y < o.y ? (r.y < a.y ? r.y : a.y) : o.y < a.y ? o.y : a.y,
      u = r.x > o.x ? (r.x > a.x ? r.x : a.x) : o.x > a.x ? o.x : a.x,
      c = r.y > o.y ? (r.y > a.y ? r.y : a.y) : o.y > a.y ? o.y : a.y,
      h = al(s, l, e, i, n),
      p = al(u, c, e, i, n),
      d = t.prevZ,
      f = t.nextZ;
    d && d.z >= h && f && f.z <= p;

  ) {
    if (
      d !== t.prev &&
      d !== t.next &&
      ll(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) &&
      cl(d.prev, d, d.next) >= 0
    )
      return !1
    if (
      ((d = d.prevZ),
      f !== t.prev &&
        f !== t.next &&
        ll(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) &&
        cl(f.prev, f, f.next) >= 0)
    )
      return !1
    f = f.nextZ
  }
  for (; d && d.z >= h; ) {
    if (
      d !== t.prev &&
      d !== t.next &&
      ll(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) &&
      cl(d.prev, d, d.next) >= 0
    )
      return !1
    d = d.prevZ
  }
  for (; f && f.z <= p; ) {
    if (
      f !== t.prev &&
      f !== t.next &&
      ll(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) &&
      cl(f.prev, f, f.next) >= 0
    )
      return !1
    f = f.nextZ
  }
  return !0
}
function el(t, e, i) {
  let n = t
  do {
    const r = n.prev,
      o = n.next.next
    !hl(r, o) &&
      pl(r, n, n.next, o) &&
      gl(r, o) &&
      gl(o, r) &&
      (e.push(r.i / i),
      e.push(n.i / i),
      e.push(o.i / i),
      vl(n),
      vl(n.next),
      (n = t = o)),
      (n = n.next)
  } while (n !== t)
  return Js(n)
}
function il(t, e, i, n, r, o) {
  let a = t
  do {
    for (let s = a.next.next; s !== a.prev; ) {
      if (a.i !== s.i && ul(a, s)) {
        let l = ml(a, s)
        return (
          (a = Js(a, a.next)),
          (l = Js(l, l.next)),
          Ks(a, e, i, n, r, o),
          void Ks(l, e, i, n, r, o)
        )
      }
      s = s.next
    }
    a = a.next
  } while (a !== t)
}
function nl(t, e) {
  return t.x - e.x
}
function rl(t, e) {
  const i = (function (t, e) {
    let i,
      n = e,
      r = t.x,
      o = t.y,
      a = -1 / 0
    do {
      if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
        const s = n.x + ((o - n.y) * (n.next.x - n.x)) / (n.next.y - n.y)
        if (s <= r && s > a) {
          if (((a = s), s === r)) {
            if (o === n.y) return n
            if (o === n.next.y) return n.next
          }
          i = n.x < n.next.x ? n : n.next
        }
      }
      n = n.next
    } while (n !== e)
    if (!i) return null
    if (r === a) return i
    let l,
      u = i,
      c = i.x,
      h = i.y,
      p = 1 / 0
    n = i
    do {
      r >= n.x &&
        n.x >= c &&
        r !== n.x &&
        ll(o < h ? r : a, o, c, h, o < h ? a : r, o, n.x, n.y) &&
        ((l = Math.abs(o - n.y) / (r - n.x)),
        gl(n, t) &&
          (l < p || (l === p && (n.x > i.x || (n.x === i.x && ol(i, n))))) &&
          ((i = n), (p = l))),
        (n = n.next)
    } while (n !== u)
    return i
  })(t, e)
  if (!i) return e
  const n = ml(i, t),
    r = Js(i, i.next)
  return Js(n, n.next), e === i ? r : e
}
function ol(t, e) {
  return cl(t.prev, t, e.prev) < 0 && cl(e.next, t, t.next) < 0
}
function al(t, e, i, n, r) {
  return (
    (t =
      1431655765 &
      ((t =
        858993459 &
        ((t =
          252645135 &
          ((t = 16711935 & ((t = 32767 * (t - i) * r) | (t << 8))) |
            (t << 4))) |
          (t << 2))) |
        (t << 1))) |
    ((e =
      1431655765 &
      ((e =
        858993459 &
        ((e =
          252645135 &
          ((e = 16711935 & ((e = 32767 * (e - n) * r) | (e << 8))) |
            (e << 4))) |
          (e << 2))) |
        (e << 1))) <<
      1)
  )
}
function sl(t) {
  let e = t,
    i = t
  do {
    ;(e.x < i.x || (e.x === i.x && e.y < i.y)) && (i = e), (e = e.next)
  } while (e !== t)
  return i
}
function ll(t, e, i, n, r, o, a, s) {
  return (
    (r - a) * (e - s) - (t - a) * (o - s) >= 0 &&
    (t - a) * (n - s) - (i - a) * (e - s) >= 0 &&
    (i - a) * (o - s) - (r - a) * (n - s) >= 0
  )
}
function ul(t, e) {
  return (
    t.next.i !== e.i &&
    t.prev.i !== e.i &&
    !(function (t, e) {
      let i = t
      do {
        if (
          i.i !== t.i &&
          i.next.i !== t.i &&
          i.i !== e.i &&
          i.next.i !== e.i &&
          pl(i, i.next, t, e)
        )
          return !0
        i = i.next
      } while (i !== t)
      return !1
    })(t, e) &&
    ((gl(t, e) &&
      gl(e, t) &&
      (function (t, e) {
        let i = t,
          n = !1,
          r = (t.x + e.x) / 2,
          o = (t.y + e.y) / 2
        do {
          i.y > o != i.next.y > o &&
            i.next.y !== i.y &&
            r < ((i.next.x - i.x) * (o - i.y)) / (i.next.y - i.y) + i.x &&
            (n = !n),
            (i = i.next)
        } while (i !== t)
        return n
      })(t, e) &&
      (cl(t.prev, t, e.prev) || cl(t, e.prev, e))) ||
      (hl(t, e) && cl(t.prev, t, t.next) > 0 && cl(e.prev, e, e.next) > 0))
  )
}
function cl(t, e, i) {
  return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
}
function hl(t, e) {
  return t.x === e.x && t.y === e.y
}
function pl(t, e, i, n) {
  const r = fl(cl(t, e, i)),
    o = fl(cl(t, e, n)),
    a = fl(cl(i, n, t)),
    s = fl(cl(i, n, e))
  return (
    (r !== o && a !== s) ||
    !(0 !== r || !dl(t, i, e)) ||
    !(0 !== o || !dl(t, n, e)) ||
    !(0 !== a || !dl(i, t, n)) ||
    !(0 !== s || !dl(i, e, n))
  )
}
function dl(t, e, i) {
  return (
    e.x <= Math.max(t.x, i.x) &&
    e.x >= Math.min(t.x, i.x) &&
    e.y <= Math.max(t.y, i.y) &&
    e.y >= Math.min(t.y, i.y)
  )
}
function fl(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0
}
function gl(t, e) {
  return cl(t.prev, t, t.next) < 0
    ? cl(t, e, t.next) >= 0 && cl(t, t.prev, e) >= 0
    : cl(t, e, t.prev) < 0 || cl(t, t.next, e) < 0
}
function ml(t, e) {
  const i = new bl(t.i, t.x, t.y),
    n = new bl(e.i, e.x, e.y),
    r = t.next,
    o = e.prev
  return (
    (t.next = e),
    (e.prev = t),
    (i.next = r),
    (r.prev = i),
    (n.next = i),
    (i.prev = n),
    (o.next = n),
    (n.prev = o),
    n
  )
}
function yl(t, e, i, n) {
  const r = new bl(t, e, i)
  return (
    n
      ? ((r.next = n.next), (r.prev = n), (n.next.prev = r), (n.next = r))
      : ((r.prev = r), (r.next = r)),
    r
  )
}
function vl(t) {
  ;(t.next.prev = t.prev),
    (t.prev.next = t.next),
    t.prevZ && (t.prevZ.nextZ = t.nextZ),
    t.nextZ && (t.nextZ.prevZ = t.prevZ)
}
function bl(t, e, i) {
  ;(this.i = t),
    (this.x = e),
    (this.y = i),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1)
}
function xl(t, e, i, n) {
  for (var r = 0, o = e, a = i - n; o < i; o += n)
    (r += (t[a] - t[o]) * (t[o + 1] + t[a + 1])), (a = o)
  return r
}
;(Xs.exports = Qs),
  (Xs.exports.default = Qs),
  (Qs.deviation = function (t, e, i, n) {
    let r = e && e.length,
      o = r ? e[0] * i : t.length,
      a = Math.abs(xl(t, 0, o, i))
    if (r)
      for (var s = 0, l = e.length; s < l; s++) {
        const u = e[s] * i,
          c = s < l - 1 ? e[s + 1] * i : t.length
        a -= Math.abs(xl(t, u, c, i))
      }
    let h = 0
    for (s = 0; s < n.length; s += 3) {
      const p = n[s] * i,
        d = n[s + 1] * i,
        f = n[s + 2] * i
      h += Math.abs(
        (t[p] - t[f]) * (t[d + 1] - t[p + 1]) -
          (t[p] - t[d]) * (t[f + 1] - t[p + 1]),
      )
    }
    return 0 === a && 0 === h ? 0 : Math.abs((h - a) / a)
  }),
  (Qs.flatten = function (t) {
    for (
      var e = t[0][0].length,
        i = {
          vertices: [],
          holes: [],
          dimensions: e,
        },
        n = 0,
        r = 0;
      r < t.length;
      r++
    ) {
      for (let o = 0; o < t[r].length; o++)
        for (let a = 0; a < e; a++) i.vertices.push(t[r][o][a])
      r > 0 && ((n += t[r - 1].length), i.holes.push(n))
    }
    return i
  })
const _l = Xs.exports,
  Sl =
    'object' == typeof global && global && global.Object === Object && global,
  Ml = 'object' == typeof self && self && self.Object === Object && self,
  Cl = Sl || Ml || Function('return this')(),
  wl = Cl.Symbol,
  Al = Object.prototype,
  El = Al.hasOwnProperty,
  Dl = Al.toString,
  Tl = wl ? wl.toStringTag : void 0
