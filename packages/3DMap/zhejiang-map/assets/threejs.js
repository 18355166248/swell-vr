/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const SM = '166',
  hc = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
  },
  fc = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3,
  },
  x8 = 0,
  qE = 1,
  S8 = 2,
  Nk = 1,
  A8 = 2,
  Po = 3,
  $o = 0,
  Qr = 1,
  dr = 2,
  Xs = 0,
  bh = 1,
  $r = 2,
  ZE = 3,
  KE = 4,
  b8 = 5,
  uu = 100,
  w8 = 101,
  M8 = 102,
  T8 = 103,
  C8 = 104,
  E8 = 200,
  D8 = 201,
  L8 = 202,
  P8 = 203,
  vA = 204,
  gA = 205,
  R8 = 206,
  I8 = 207,
  O8 = 208,
  N8 = 209,
  k8 = 210,
  B8 = 211,
  F8 = 212,
  z8 = 213,
  U8 = 214,
  V8 = 0,
  G8 = 1,
  H8 = 2,
  dy = 3,
  W8 = 4,
  X8 = 5,
  Y8 = 6,
  $8 = 7,
  AM = 0,
  q8 = 1,
  Z8 = 2,
  Ys = 0,
  K8 = 1,
  j8 = 2,
  J8 = 3,
  Q8 = 4,
  t6 = 5,
  e6 = 6,
  n6 = 7,
  jE = 'attached',
  r6 = 'detached',
  kk = 300,
  Fh = 301,
  zh = 302,
  mA = 303,
  yA = 304,
  R0 = 306,
  Jn = 1e3,
  Ps = 1001,
  py = 1002,
  Ur = 1003,
  Bk = 1004,
  Cd = 1005,
  gi = 1006,
  Im = 1007,
  Fo = 1008,
  qo = 1009,
  Fk = 1010,
  zk = 1011,
  gp = 1012,
  bM = 1013,
  Uu = 1014,
  ya = 1015,
  hv = 1016,
  wM = 1017,
  MM = 1018,
  Uh = 1020,
  Uk = 35902,
  Vk = 1021,
  Gk = 1022,
  Yi = 1023,
  Hk = 1024,
  Wk = 1025,
  wh = 1026,
  Vh = 1027,
  TM = 1028,
  CM = 1029,
  Xk = 1030,
  EM = 1031,
  DM = 1033,
  Om = 33776,
  Nm = 33777,
  km = 33778,
  Bm = 33779,
  _A = 35840,
  xA = 35841,
  SA = 35842,
  AA = 35843,
  bA = 36196,
  wA = 37492,
  MA = 37496,
  TA = 37808,
  CA = 37809,
  EA = 37810,
  DA = 37811,
  LA = 37812,
  PA = 37813,
  RA = 37814,
  IA = 37815,
  OA = 37816,
  NA = 37817,
  kA = 37818,
  BA = 37819,
  FA = 37820,
  zA = 37821,
  Fm = 36492,
  UA = 36494,
  VA = 36495,
  Yk = 36283,
  GA = 36284,
  HA = 36285,
  WA = 36286,
  mp = 2300,
  yp = 2301,
  k_ = 2302,
  JE = 2400,
  QE = 2401,
  t2 = 2402,
  i6 = 2500,
  a6 = 0,
  $k = 1,
  XA = 2,
  o6 = 3200,
  s6 = 3201,
  LM = 0,
  l6 = 1,
  Ls = '',
  cn = 'srgb',
  ar = 'srgb-linear',
  PM = 'display-p3',
  I0 = 'display-p3-linear',
  vy = 'linear',
  an = 'srgb',
  gy = 'rec709',
  my = 'p3',
  dc = 7680,
  e2 = 519,
  u6 = 512,
  c6 = 513,
  h6 = 514,
  qk = 515,
  f6 = 516,
  d6 = 517,
  p6 = 518,
  v6 = 519,
  YA = 35044,
  n2 = '300 es',
  zo = 2e3,
  yy = 2001
class Ju {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {})
    const n = this._listeners
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e)
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1
    const n = this._listeners
    return n[t] !== void 0 && n[t].indexOf(e) !== -1
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return
    const i = this._listeners[t]
    if (i !== void 0) {
      const a = i.indexOf(e)
      a !== -1 && i.splice(a, 1)
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return
    const n = this._listeners[t.type]
    if (n !== void 0) {
      t.target = this
      const i = n.slice(0)
      for (let a = 0, o = i.length; a < o; a++) i[a].call(this, t)
      t.target = null
    }
  }
}
const _r = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0a',
  '0b',
  '0c',
  '0d',
  '0e',
  '0f',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '1a',
  '1b',
  '1c',
  '1d',
  '1e',
  '1f',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '2a',
  '2b',
  '2c',
  '2d',
  '2e',
  '2f',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '3a',
  '3b',
  '3c',
  '3d',
  '3e',
  '3f',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '4a',
  '4b',
  '4c',
  '4d',
  '4e',
  '4f',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '5a',
  '5b',
  '5c',
  '5d',
  '5e',
  '5f',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '6a',
  '6b',
  '6c',
  '6d',
  '6e',
  '6f',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
  '7a',
  '7b',
  '7c',
  '7d',
  '7e',
  '7f',
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87',
  '88',
  '89',
  '8a',
  '8b',
  '8c',
  '8d',
  '8e',
  '8f',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '99',
  '9a',
  '9b',
  '9c',
  '9d',
  '9e',
  '9f',
  'a0',
  'a1',
  'a2',
  'a3',
  'a4',
  'a5',
  'a6',
  'a7',
  'a8',
  'a9',
  'aa',
  'ab',
  'ac',
  'ad',
  'ae',
  'af',
  'b0',
  'b1',
  'b2',
  'b3',
  'b4',
  'b5',
  'b6',
  'b7',
  'b8',
  'b9',
  'ba',
  'bb',
  'bc',
  'bd',
  'be',
  'bf',
  'c0',
  'c1',
  'c2',
  'c3',
  'c4',
  'c5',
  'c6',
  'c7',
  'c8',
  'c9',
  'ca',
  'cb',
  'cc',
  'cd',
  'ce',
  'cf',
  'd0',
  'd1',
  'd2',
  'd3',
  'd4',
  'd5',
  'd6',
  'd7',
  'd8',
  'd9',
  'da',
  'db',
  'dc',
  'dd',
  'de',
  'df',
  'e0',
  'e1',
  'e2',
  'e3',
  'e4',
  'e5',
  'e6',
  'e7',
  'e8',
  'e9',
  'ea',
  'eb',
  'ec',
  'ed',
  'ee',
  'ef',
  'f0',
  'f1',
  'f2',
  'f3',
  'f4',
  'f5',
  'f6',
  'f7',
  'f8',
  'f9',
  'fa',
  'fb',
  'fc',
  'fd',
  'fe',
  'ff',
]
let r2 = 1234567
const Yd = Math.PI / 180,
  Gh = 180 / Math.PI
function Ki() {
  const r = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0
  return (
    _r[r & 255] +
    _r[(r >> 8) & 255] +
    _r[(r >> 16) & 255] +
    _r[(r >> 24) & 255] +
    '-' +
    _r[t & 255] +
    _r[(t >> 8) & 255] +
    '-' +
    _r[((t >> 16) & 15) | 64] +
    _r[(t >> 24) & 255] +
    '-' +
    _r[(e & 63) | 128] +
    _r[(e >> 8) & 255] +
    '-' +
    _r[(e >> 16) & 255] +
    _r[(e >> 24) & 255] +
    _r[n & 255] +
    _r[(n >> 8) & 255] +
    _r[(n >> 16) & 255] +
    _r[(n >> 24) & 255]
  ).toLowerCase()
}
function zn(r, t, e) {
  return Math.max(t, Math.min(e, r))
}
function RM(r, t) {
  return ((r % t) + t) % t
}
function g6(r, t, e, n, i) {
  return n + ((r - t) * (i - n)) / (e - t)
}
function m6(r, t, e) {
  return r !== t ? (e - r) / (t - r) : 0
}
function $d(r, t, e) {
  return (1 - e) * r + e * t
}
function y6(r, t, e, n) {
  return $d(r, t, 1 - Math.exp(-e * n))
}
function _6(r, t = 1) {
  return t - Math.abs(RM(r, t * 2) - t)
}
function x6(r, t, e) {
  return r <= t
    ? 0
    : r >= e
    ? 1
    : ((r = (r - t) / (e - t)), r * r * (3 - 2 * r))
}
function S6(r, t, e) {
  return r <= t
    ? 0
    : r >= e
    ? 1
    : ((r = (r - t) / (e - t)), r * r * r * (r * (r * 6 - 15) + 10))
}
function A6(r, t) {
  return r + Math.floor(Math.random() * (t - r + 1))
}
function b6(r, t) {
  return r + Math.random() * (t - r)
}
function w6(r) {
  return r * (0.5 - Math.random())
}
function M6(r) {
  r !== void 0 && (r2 = r)
  let t = (r2 += 1831565813)
  return (
    (t = Math.imul(t ^ (t >>> 15), t | 1)),
    (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
    ((t ^ (t >>> 14)) >>> 0) / 4294967296
  )
}
function T6(r) {
  return r * Yd
}
function C6(r) {
  return r * Gh
}
function E6(r) {
  return (r & (r - 1)) === 0 && r !== 0
}
function D6(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2))
}
function L6(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2))
}
function P6(r, t, e, n, i) {
  const a = Math.cos,
    o = Math.sin,
    s = a(e / 2),
    l = o(e / 2),
    u = a((t + n) / 2),
    c = o((t + n) / 2),
    h = a((t - n) / 2),
    f = o((t - n) / 2),
    d = a((n - t) / 2),
    p = o((n - t) / 2)
  switch (i) {
    case 'XYX':
      r.set(s * c, l * h, l * f, s * u)
      break
    case 'YZY':
      r.set(l * f, s * c, l * h, s * u)
      break
    case 'ZXZ':
      r.set(l * h, l * f, s * c, s * u)
      break
    case 'XZX':
      r.set(s * c, l * p, l * d, s * u)
      break
    case 'YXY':
      r.set(l * d, s * c, l * p, s * u)
      break
    case 'ZYZ':
      r.set(l * p, l * d, s * c, s * u)
      break
    default:
      console.warn(
        'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' +
          i,
      )
  }
}
function ma(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r
    case Uint32Array:
      return r / 4294967295
    case Uint16Array:
      return r / 65535
    case Uint8Array:
      return r / 255
    case Int32Array:
      return Math.max(r / 2147483647, -1)
    case Int16Array:
      return Math.max(r / 32767, -1)
    case Int8Array:
      return Math.max(r / 127, -1)
    default:
      throw new Error('Invalid component type.')
  }
}
function We(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r
    case Uint32Array:
      return Math.round(r * 4294967295)
    case Uint16Array:
      return Math.round(r * 65535)
    case Uint8Array:
      return Math.round(r * 255)
    case Int32Array:
      return Math.round(r * 2147483647)
    case Int16Array:
      return Math.round(r * 32767)
    case Int8Array:
      return Math.round(r * 127)
    default:
      throw new Error('Invalid component type.')
  }
}
const IM = {
  DEG2RAD: Yd,
  RAD2DEG: Gh,
  generateUUID: Ki,
  clamp: zn,
  euclideanModulo: RM,
  mapLinear: g6,
  inverseLerp: m6,
  lerp: $d,
  damp: y6,
  pingpong: _6,
  smoothstep: x6,
  smootherstep: S6,
  randInt: A6,
  randFloat: b6,
  randFloatSpread: w6,
  seededRandom: M6,
  degToRad: T6,
  radToDeg: C6,
  isPowerOfTwo: E6,
  ceilPowerOfTwo: D6,
  floorPowerOfTwo: L6,
  setQuaternionFromProperEuler: P6,
  normalize: We,
  denormalize: ma,
}
class pt {
  constructor(t = 0, e = 0) {
    ;(pt.prototype.isVector2 = !0), (this.x = t), (this.y = e)
  }
  get width() {
    return this.x
  }
  set width(t) {
    this.x = t
  }
  get height() {
    return this.y
  }
  set height(t) {
    this.y = t
  }
  set(t, e) {
    return (this.x = t), (this.y = e), this
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), this
  }
  setX(t) {
    return (this.x = t), this
  }
  setY(t) {
    return (this.y = t), this
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e
        break
      case 1:
        this.y = e
        break
      default:
        throw new Error('index is out of range: ' + t)
    }
    return this
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x
      case 1:
        return this.y
      default:
        throw new Error('index is out of range: ' + t)
    }
  }
  clone() {
    return new this.constructor(this.x, this.y)
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), this
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), this
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), this
  }
  addVectors(t, e) {
    return (this.x = t.x + e.x), (this.y = t.y + e.y), this
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), this
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), this
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), this
  }
  subVectors(t, e) {
    return (this.x = t.x - e.x), (this.y = t.y - e.y), this
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), this
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), this
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), this
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t)
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = t.elements
    return (
      (this.x = i[0] * e + i[3] * n + i[6]),
      (this.y = i[1] * e + i[4] * n + i[7]),
      this
    )
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
    )
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
    )
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      this
    )
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      this
    )
  }
  clampLength(t, e) {
    const n = this.length()
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this
  }
  dot(t) {
    return this.x * t.x + this.y * t.y
  }
  cross(t) {
    return this.x * t.y - this.y * t.x
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y)
  }
  normalize() {
    return this.divideScalar(this.length() || 1)
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq())
    if (e === 0) return Math.PI / 2
    const n = this.dot(t) / e
    return Math.acos(zn(n, -1, 1))
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t))
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y
    return e * e + n * n
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t)
  }
  lerp(t, e) {
    return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
    )
  }
  equals(t) {
    return t.x === this.x && t.y === this.y
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), this
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), t
  }
  fromBufferAttribute(t, e) {
    return (this.x = t.getX(e)), (this.y = t.getY(e)), this
  }
  rotateAround(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      a = this.x - t.x,
      o = this.y - t.y
    return (this.x = a * n - o * i + t.x), (this.y = a * i + o * n + t.y), this
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y
  }
}
class _e {
  constructor(t, e, n, i, a, o, s, l, u) {
    ;(_e.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, n, i, a, o, s, l, u)
  }
  set(t, e, n, i, a, o, s, l, u) {
    const c = this.elements
    return (
      (c[0] = t),
      (c[1] = i),
      (c[2] = s),
      (c[3] = e),
      (c[4] = a),
      (c[5] = l),
      (c[6] = n),
      (c[7] = o),
      (c[8] = u),
      this
    )
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
  }
  copy(t) {
    const e = this.elements,
      n = t.elements
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      this
    )
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    )
  }
  setFromMatrix4(t) {
    const e = t.elements
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
  }
  multiply(t) {
    return this.multiplyMatrices(this, t)
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this)
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      a = this.elements,
      o = n[0],
      s = n[3],
      l = n[6],
      u = n[1],
      c = n[4],
      h = n[7],
      f = n[2],
      d = n[5],
      p = n[8],
      g = i[0],
      v = i[3],
      m = i[6],
      y = i[1],
      _ = i[4],
      x = i[7],
      A = i[2],
      S = i[5],
      b = i[8]
    return (
      (a[0] = o * g + s * y + l * A),
      (a[3] = o * v + s * _ + l * S),
      (a[6] = o * m + s * x + l * b),
      (a[1] = u * g + c * y + h * A),
      (a[4] = u * v + c * _ + h * S),
      (a[7] = u * m + c * x + h * b),
      (a[2] = f * g + d * y + p * A),
      (a[5] = f * v + d * _ + p * S),
      (a[8] = f * m + d * x + p * b),
      this
    )
  }
  multiplyScalar(t) {
    const e = this.elements
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    )
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      a = t[3],
      o = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8]
    return e * o * c - e * s * u - n * a * c + n * s * l + i * a * u - i * o * l
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      a = t[3],
      o = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8],
      h = c * o - s * u,
      f = s * l - c * a,
      d = u * a - o * l,
      p = e * h + n * f + i * d
    if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0)
    const g = 1 / p
    return (
      (t[0] = h * g),
      (t[1] = (i * u - c * n) * g),
      (t[2] = (s * n - i * o) * g),
      (t[3] = f * g),
      (t[4] = (c * e - i * l) * g),
      (t[5] = (i * a - s * e) * g),
      (t[6] = d * g),
      (t[7] = (n * l - u * e) * g),
      (t[8] = (o * e - n * a) * g),
      this
    )
  }
  transpose() {
    let t
    const e = this.elements
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    )
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose()
  }
  transposeIntoArray(t) {
    const e = this.elements
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    )
  }
  setUvTransform(t, e, n, i, a, o, s) {
    const l = Math.cos(a),
      u = Math.sin(a)
    return (
      this.set(
        n * l,
        n * u,
        -n * (l * o + u * s) + o + t,
        -i * u,
        i * l,
        -i * (-u * o + l * s) + s + e,
        0,
        0,
        1,
      ),
      this
    )
  }
  scale(t, e) {
    return this.premultiply(B_.makeScale(t, e)), this
  }
  rotate(t) {
    return this.premultiply(B_.makeRotation(-t)), this
  }
  translate(t, e) {
    return this.premultiply(B_.makeTranslation(t, e)), this
  }
  makeTranslation(t, e) {
    return (
      t.isVector2
        ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
        : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
      this
    )
  }
  makeRotation(t) {
    const e = Math.cos(t),
      n = Math.sin(t)
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this
  }
  equals(t) {
    const e = this.elements,
      n = t.elements
    for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return !1
    return !0
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e]
    return this
  }
  toArray(t = [], e = 0) {
    const n = this.elements
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      t
    )
  }
  clone() {
    return new this.constructor().fromArray(this.elements)
  }
}
const B_ = new _e()
function Zk(r) {
  for (let t = r.length - 1; t >= 0; --t) if (r[t] >= 65535) return !0
  return !1
}
function _p(r) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', r)
}
function R6() {
  const r = _p('canvas')
  return (r.style.display = 'block'), r
}
const i2 = {}
function OM(r) {
  r in i2 || ((i2[r] = !0), console.warn(r))
}
function I6(r, t, e) {
  return new Promise(function (n, i) {
    function a() {
      switch (r.clientWaitSync(t, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i()
          break
        case r.TIMEOUT_EXPIRED:
          setTimeout(a, e)
          break
        default:
          n()
      }
    }
    setTimeout(a, e)
  })
}
const a2 = new _e().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199,
  ),
  o2 = new _e().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735,
  ),
  Bv = {
    [ar]: {
      transfer: vy,
      primaries: gy,
      toReference: r => r,
      fromReference: r => r,
    },
    [cn]: {
      transfer: an,
      primaries: gy,
      toReference: r => r.convertSRGBToLinear(),
      fromReference: r => r.convertLinearToSRGB(),
    },
    [I0]: {
      transfer: vy,
      primaries: my,
      toReference: r => r.applyMatrix3(o2),
      fromReference: r => r.applyMatrix3(a2),
    },
    [PM]: {
      transfer: an,
      primaries: my,
      toReference: r => r.convertSRGBToLinear().applyMatrix3(o2),
      fromReference: r => r.applyMatrix3(a2).convertLinearToSRGB(),
    },
  },
  O6 = new Set([ar, I0]),
  Be = {
    enabled: !0,
    _workingColorSpace: ar,
    get workingColorSpace() {
      return this._workingColorSpace
    },
    set workingColorSpace(r) {
      if (!O6.has(r))
        throw new Error(`Unsupported working color space, "${r}".`)
      this._workingColorSpace = r
    },
    convert: function (r, t, e) {
      if (this.enabled === !1 || t === e || !t || !e) return r
      const n = Bv[t].toReference,
        i = Bv[e].fromReference
      return i(n(r))
    },
    fromWorkingColorSpace: function (r, t) {
      return this.convert(r, this._workingColorSpace, t)
    },
    toWorkingColorSpace: function (r, t) {
      return this.convert(r, t, this._workingColorSpace)
    },
    getPrimaries: function (r) {
      return Bv[r].primaries
    },
    getTransfer: function (r) {
      return r === Ls ? vy : Bv[r].transfer
    },
  }
function Mh(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4)
}
function F_(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055
}
let pc
class N6 {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > 'u') return t.src
    let e
    if (t instanceof HTMLCanvasElement) e = t
    else {
      pc === void 0 && (pc = _p('canvas')),
        (pc.width = t.width),
        (pc.height = t.height)
      const n = pc.getContext('2d')
      t instanceof ImageData
        ? n.putImageData(t, 0, 0)
        : n.drawImage(t, 0, 0, t.width, t.height),
        (e = pc)
    }
    return e.width > 2048 || e.height > 2048
      ? (console.warn(
          'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
          t,
        ),
        e.toDataURL('image/jpeg', 0.6))
      : e.toDataURL('image/png')
  }
  static sRGBToLinear(t) {
    if (
      (typeof HTMLImageElement < 'u' && t instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < 'u' && t instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < 'u' && t instanceof ImageBitmap)
    ) {
      const e = _p('canvas')
      ;(e.width = t.width), (e.height = t.height)
      const n = e.getContext('2d')
      n.drawImage(t, 0, 0, t.width, t.height)
      const i = n.getImageData(0, 0, t.width, t.height),
        a = i.data
      for (let o = 0; o < a.length; o++) a[o] = Mh(a[o] / 255) * 255
      return n.putImageData(i, 0, 0), e
    } else if (t.data) {
      const e = t.data.slice(0)
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[n] = Math.floor(Mh(e[n] / 255) * 255))
          : (e[n] = Mh(e[n]))
      return {
        data: e,
        width: t.width,
        height: t.height,
      }
    } else
      return (
        console.warn(
          'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.',
        ),
        t
      )
  }
}
let k6 = 0
class Kk {
  constructor(t = null) {
    ;(this.isSource = !0),
      Object.defineProperty(this, 'id', {
        value: k6++,
      }),
      (this.uuid = Ki()),
      (this.data = t),
      (this.dataReady = !0),
      (this.version = 0)
  }
  set needsUpdate(t) {
    t === !0 && this.version++
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string'
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid]
    const n = {
        uuid: this.uuid,
        url: '',
      },
      i = this.data
    if (i !== null) {
      let a
      if (Array.isArray(i)) {
        a = []
        for (let o = 0, s = i.length; o < s; o++)
          i[o].isDataTexture ? a.push(z_(i[o].image)) : a.push(z_(i[o]))
      } else a = z_(i)
      n.url = a
    }
    return e || (t.images[this.uuid] = n), n
  }
}
function z_(r) {
  return (typeof HTMLImageElement < 'u' && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && r instanceof ImageBitmap)
    ? N6.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {})
}
let B6 = 0
class Yn extends Ju {
  constructor(
    t = Yn.DEFAULT_IMAGE,
    e = Yn.DEFAULT_MAPPING,
    n = Ps,
    i = Ps,
    a = gi,
    o = Fo,
    s = Yi,
    l = qo,
    u = Yn.DEFAULT_ANISOTROPY,
    c = Ls,
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', {
        value: B6++,
      }),
      (this.uuid = Ki()),
      (this.name = ''),
      (this.source = new Kk(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = a),
      (this.minFilter = o),
      (this.anisotropy = u),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new pt(0, 0)),
      (this.repeat = new pt(1, 1)),
      (this.center = new pt(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new _e()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = c),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0)
  }
  get image() {
    return this.source.data
  }
  set image(t = null) {
    this.source.data = t
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    )
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.channel = t.channel),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.colorSpace = t.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    )
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string'
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid]
    const n = {
      metadata: {
        version: 4.6,
        type: 'Texture',
        generator: 'Texture.toJSON',
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    }
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e || (t.textures[this.uuid] = n),
      n
    )
  }
  dispose() {
    this.dispatchEvent({
      type: 'dispose',
    })
  }
  transformUv(t) {
    if (this.mapping !== kk) return t
    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
      switch (this.wrapS) {
        case Jn:
          t.x = t.x - Math.floor(t.x)
          break
        case Ps:
          t.x = t.x < 0 ? 0 : 1
          break
        case py:
          Math.abs(Math.floor(t.x) % 2) === 1
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x))
          break
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Jn:
          t.y = t.y - Math.floor(t.y)
          break
        case Ps:
          t.y = t.y < 0 ? 0 : 1
          break
        case py:
          Math.abs(Math.floor(t.y) % 2) === 1
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y))
          break
      }
    return this.flipY && (t.y = 1 - t.y), t
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, (this.source.needsUpdate = !0))
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++
  }
}
Yn.DEFAULT_IMAGE = null
Yn.DEFAULT_MAPPING = kk
Yn.DEFAULT_ANISOTROPY = 1
class Oe {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    ;(Oe.prototype.isVector4 = !0),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      (this.w = i)
  }
  get width() {
    return this.z
  }
  set width(t) {
    this.z = t
  }
  get height() {
    return this.w
  }
  set height(t) {
    this.w = t
  }
  set(t, e, n, i) {
    return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this
  }
  setX(t) {
    return (this.x = t), this
  }
  setY(t) {
    return (this.y = t), this
  }
  setZ(t) {
    return (this.z = t), this
  }
  setW(t) {
    return (this.w = t), this
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e
        break
      case 1:
        this.y = e
        break
      case 2:
        this.z = e
        break
      case 3:
        this.w = e
        break
      default:
        throw new Error('index is out of range: ' + t)
    }
    return this
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x
      case 1:
        return this.y
      case 2:
        return this.z
      case 3:
        return this.w
      default:
        throw new Error('index is out of range: ' + t)
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w)
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = t.w !== void 0 ? t.w : 1),
      this
    )
  }
  add(t) {
    return (
      (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
    )
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    )
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    )
  }
  sub(t) {
    return (
      (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
    )
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    )
  }
  multiply(t) {
    return (
      (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
    )
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      a = this.w,
      o = t.elements
    return (
      (this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * a),
      (this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * a),
      (this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * a),
      (this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * a),
      this
    )
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t)
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w)
    const e = Math.sqrt(1 - t.w * t.w)
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    )
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, a
    const l = t.elements,
      u = l[0],
      c = l[4],
      h = l[8],
      f = l[1],
      d = l[5],
      p = l[9],
      g = l[2],
      v = l[6],
      m = l[10]
    if (
      Math.abs(c - f) < 0.01 &&
      Math.abs(h - g) < 0.01 &&
      Math.abs(p - v) < 0.01
    ) {
      if (
        Math.abs(c + f) < 0.1 &&
        Math.abs(h + g) < 0.1 &&
        Math.abs(p + v) < 0.1 &&
        Math.abs(u + d + m - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this
      e = Math.PI
      const _ = (u + 1) / 2,
        x = (d + 1) / 2,
        A = (m + 1) / 2,
        S = (c + f) / 4,
        b = (h + g) / 4,
        T = (p + v) / 4
      return (
        _ > x && _ > A
          ? _ < 0.01
            ? ((n = 0), (i = 0.707106781), (a = 0.707106781))
            : ((n = Math.sqrt(_)), (i = S / n), (a = b / n))
          : x > A
          ? x < 0.01
            ? ((n = 0.707106781), (i = 0), (a = 0.707106781))
            : ((i = Math.sqrt(x)), (n = S / i), (a = T / i))
          : A < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (a = 0))
          : ((a = Math.sqrt(A)), (n = b / a), (i = T / a)),
        this.set(n, i, a, e),
        this
      )
    }
    let y = Math.sqrt((v - p) * (v - p) + (h - g) * (h - g) + (f - c) * (f - c))
    return (
      Math.abs(y) < 0.001 && (y = 1),
      (this.x = (v - p) / y),
      (this.y = (h - g) / y),
      (this.z = (f - c) / y),
      (this.w = Math.acos((u + d + m - 1) / 2)),
      this
    )
  }
  setFromMatrixPosition(t) {
    const e = t.elements
    return (
      (this.x = e[12]),
      (this.y = e[13]),
      (this.z = e[14]),
      (this.w = e[15]),
      this
    )
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    )
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    )
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      (this.w = Math.max(t.w, Math.min(e.w, this.w))),
      this
    )
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      (this.w = Math.max(t, Math.min(e, this.w))),
      this
    )
  }
  clampLength(t, e) {
    const n = this.length()
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    )
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    )
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    )
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    )
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    )
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    )
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    )
  }
  normalize() {
    return this.divideScalar(this.length() || 1)
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t)
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    )
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    )
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    )
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    )
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    )
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    )
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w
  }
}
class F6 extends Ju {
  constructor(t = 1, e = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = t),
      (this.height = e),
      (this.depth = 1),
      (this.scissor = new Oe(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new Oe(0, 0, t, e))
    const i = {
      width: t,
      height: e,
      depth: 1,
    }
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: gi,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n,
    )
    const a = new Yn(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace,
    )
    ;(a.flipY = !1),
      (a.generateMipmaps = n.generateMipmaps),
      (a.internalFormat = n.internalFormat),
      (this.textures = [])
    const o = n.count
    for (let s = 0; s < o; s++)
      (this.textures[s] = a.clone()),
        (this.textures[s].isRenderTargetTexture = !0)
    ;(this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples)
  }
  get texture() {
    return this.textures[0]
  }
  set texture(t) {
    this.textures[0] = t
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      ;(this.width = t), (this.height = e), (this.depth = n)
      for (let i = 0, a = this.textures.length; i < a; i++)
        (this.textures[i].image.width = t),
          (this.textures[i].image.height = e),
          (this.textures[i].image.depth = n)
      this.dispose()
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(t) {
    ;(this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.scissor.copy(t.scissor),
      (this.scissorTest = t.scissorTest),
      this.viewport.copy(t.viewport),
      (this.textures.length = 0)
    for (let n = 0, i = t.textures.length; n < i; n++)
      (this.textures[n] = t.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0)
    const e = Object.assign({}, t.texture.image)
    return (
      (this.texture.source = new Kk(e)),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.resolveDepthBuffer = t.resolveDepthBuffer),
      (this.resolveStencilBuffer = t.resolveStencilBuffer),
      t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
      (this.samples = t.samples),
      this
    )
  }
  dispose() {
    this.dispatchEvent({
      type: 'dispose',
    })
  }
}
class Vu extends F6 {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), (this.isWebGLRenderTarget = !0)
  }
}
class jk extends Yn {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = {
        data: t,
        width: e,
        height: n,
        depth: i,
      }),
      (this.magFilter = Ur),
      (this.minFilter = Ur),
      (this.wrapR = Ps),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set())
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t)
  }
  clearLayerUpdates() {
    this.layerUpdates.clear()
  }
}
class z6 extends Yn {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = {
        data: t,
        width: e,
        height: n,
        depth: i,
      }),
      (this.magFilter = Ur),
      (this.minFilter = Ur),
      (this.wrapR = Ps),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1)
  }
}
class wa {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    ;(this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i)
  }
  static slerpFlat(t, e, n, i, a, o, s) {
    let l = n[i + 0],
      u = n[i + 1],
      c = n[i + 2],
      h = n[i + 3]
    const f = a[o + 0],
      d = a[o + 1],
      p = a[o + 2],
      g = a[o + 3]
    if (s === 0) {
      ;(t[e + 0] = l), (t[e + 1] = u), (t[e + 2] = c), (t[e + 3] = h)
      return
    }
    if (s === 1) {
      ;(t[e + 0] = f), (t[e + 1] = d), (t[e + 2] = p), (t[e + 3] = g)
      return
    }
    if (h !== g || l !== f || u !== d || c !== p) {
      let v = 1 - s
      const m = l * f + u * d + c * p + h * g,
        y = m >= 0 ? 1 : -1,
        _ = 1 - m * m
      if (_ > Number.EPSILON) {
        const A = Math.sqrt(_),
          S = Math.atan2(A, m * y)
        ;(v = Math.sin(v * S) / A), (s = Math.sin(s * S) / A)
      }
      const x = s * y
      if (
        ((l = l * v + f * x),
        (u = u * v + d * x),
        (c = c * v + p * x),
        (h = h * v + g * x),
        v === 1 - s)
      ) {
        const A = 1 / Math.sqrt(l * l + u * u + c * c + h * h)
        ;(l *= A), (u *= A), (c *= A), (h *= A)
      }
    }
    ;(t[e] = l), (t[e + 1] = u), (t[e + 2] = c), (t[e + 3] = h)
  }
  static multiplyQuaternionsFlat(t, e, n, i, a, o) {
    const s = n[i],
      l = n[i + 1],
      u = n[i + 2],
      c = n[i + 3],
      h = a[o],
      f = a[o + 1],
      d = a[o + 2],
      p = a[o + 3]
    return (
      (t[e] = s * p + c * h + l * d - u * f),
      (t[e + 1] = l * p + c * f + u * h - s * d),
      (t[e + 2] = u * p + c * d + s * f - l * h),
      (t[e + 3] = c * p - s * h - l * f - u * d),
      t
    )
  }
  get x() {
    return this._x
  }
  set x(t) {
    ;(this._x = t), this._onChangeCallback()
  }
  get y() {
    return this._y
  }
  set y(t) {
    ;(this._y = t), this._onChangeCallback()
  }
  get z() {
    return this._z
  }
  set z(t) {
    ;(this._z = t), this._onChangeCallback()
  }
  get w() {
    return this._w
  }
  set w(t) {
    ;(this._w = t), this._onChangeCallback()
  }
  set(t, e, n, i) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    )
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w)
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    )
  }
  setFromEuler(t, e = !0) {
    const n = t._x,
      i = t._y,
      a = t._z,
      o = t._order,
      s = Math.cos,
      l = Math.sin,
      u = s(n / 2),
      c = s(i / 2),
      h = s(a / 2),
      f = l(n / 2),
      d = l(i / 2),
      p = l(a / 2)
    switch (o) {
      case 'XYZ':
        ;(this._x = f * c * h + u * d * p),
          (this._y = u * d * h - f * c * p),
          (this._z = u * c * p + f * d * h),
          (this._w = u * c * h - f * d * p)
        break
      case 'YXZ':
        ;(this._x = f * c * h + u * d * p),
          (this._y = u * d * h - f * c * p),
          (this._z = u * c * p - f * d * h),
          (this._w = u * c * h + f * d * p)
        break
      case 'ZXY':
        ;(this._x = f * c * h - u * d * p),
          (this._y = u * d * h + f * c * p),
          (this._z = u * c * p + f * d * h),
          (this._w = u * c * h - f * d * p)
        break
      case 'ZYX':
        ;(this._x = f * c * h - u * d * p),
          (this._y = u * d * h + f * c * p),
          (this._z = u * c * p - f * d * h),
          (this._w = u * c * h + f * d * p)
        break
      case 'YZX':
        ;(this._x = f * c * h + u * d * p),
          (this._y = u * d * h + f * c * p),
          (this._z = u * c * p - f * d * h),
          (this._w = u * c * h - f * d * p)
        break
      case 'XZY':
        ;(this._x = f * c * h - u * d * p),
          (this._y = u * d * h - f * c * p),
          (this._z = u * c * p + f * d * h),
          (this._w = u * c * h + f * d * p)
        break
      default:
        console.warn(
          'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' +
            o,
        )
    }
    return e === !0 && this._onChangeCallback(), this
  }
  setFromAxisAngle(t, e) {
    const n = e / 2,
      i = Math.sin(n)
    return (
      (this._x = t.x * i),
      (this._y = t.y * i),
      (this._z = t.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    )
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      n = e[0],
      i = e[4],
      a = e[8],
      o = e[1],
      s = e[5],
      l = e[9],
      u = e[2],
      c = e[6],
      h = e[10],
      f = n + s + h
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1)
      ;(this._w = 0.25 / d),
        (this._x = (c - l) * d),
        (this._y = (a - u) * d),
        (this._z = (o - i) * d)
    } else if (n > s && n > h) {
      const d = 2 * Math.sqrt(1 + n - s - h)
      ;(this._w = (c - l) / d),
        (this._x = 0.25 * d),
        (this._y = (i + o) / d),
        (this._z = (a + u) / d)
    } else if (s > h) {
      const d = 2 * Math.sqrt(1 + s - n - h)
      ;(this._w = (a - u) / d),
        (this._x = (i + o) / d),
        (this._y = 0.25 * d),
        (this._z = (l + c) / d)
    } else {
      const d = 2 * Math.sqrt(1 + h - n - s)
      ;(this._w = (o - i) / d),
        (this._x = (a + u) / d),
        (this._y = (l + c) / d),
        (this._z = 0.25 * d)
    }
    return this._onChangeCallback(), this
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = n)),
      this.normalize()
    )
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(zn(this.dot(t), -1, 1)))
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t)
    if (n === 0) return this
    const i = Math.min(1, e / n)
    return this.slerp(t, i), this
  }
  identity() {
    return this.set(0, 0, 0, 1)
  }
  invert() {
    return this.conjugate()
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    )
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    )
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    )
  }
  normalize() {
    let t = this.length()
    return (
      t === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    )
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t)
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this)
  }
  multiplyQuaternions(t, e) {
    const n = t._x,
      i = t._y,
      a = t._z,
      o = t._w,
      s = e._x,
      l = e._y,
      u = e._z,
      c = e._w
    return (
      (this._x = n * c + o * s + i * u - a * l),
      (this._y = i * c + o * l + a * s - n * u),
      (this._z = a * c + o * u + n * l - i * s),
      (this._w = o * c - n * s - i * l - a * u),
      this._onChangeCallback(),
      this
    )
  }
  slerp(t, e) {
    if (e === 0) return this
    if (e === 1) return this.copy(t)
    const n = this._x,
      i = this._y,
      a = this._z,
      o = this._w
    let s = o * t._w + n * t._x + i * t._y + a * t._z
    if (
      (s < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (s = -s))
        : this.copy(t),
      s >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = a), this
    const l = 1 - s * s
    if (l <= Number.EPSILON) {
      const d = 1 - e
      return (
        (this._w = d * o + e * this._w),
        (this._x = d * n + e * this._x),
        (this._y = d * i + e * this._y),
        (this._z = d * a + e * this._z),
        this.normalize(),
        this
      )
    }
    const u = Math.sqrt(l),
      c = Math.atan2(u, s),
      h = Math.sin((1 - e) * c) / u,
      f = Math.sin(e * c) / u
    return (
      (this._w = o * h + this._w * f),
      (this._x = n * h + this._x * f),
      (this._y = i * h + this._y * f),
      (this._z = a * h + this._z * f),
      this._onChangeCallback(),
      this
    )
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n)
  }
  random() {
    const t = 2 * Math.PI * Math.random(),
      e = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      a = Math.sqrt(n)
    return this.set(
      i * Math.sin(t),
      i * Math.cos(t),
      a * Math.sin(e),
      a * Math.cos(e),
    )
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    )
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    )
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    )
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this._onChangeCallback(),
      this
    )
  }
  toJSON() {
    return this.toArray()
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w
  }
}
class U {
  constructor(t = 0, e = 0, n = 0) {
    ;(U.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n)
  }
  set(t, e, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      this
    )
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), this
  }
  setX(t) {
    return (this.x = t), this
  }
  setY(t) {
    return (this.y = t), this
  }
  setZ(t) {
    return (this.z = t), this
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e
        break
      case 1:
        this.y = e
        break
      case 2:
        this.z = e
        break
      default:
        throw new Error('index is out of range: ' + t)
    }
    return this
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x
      case 1:
        return this.y
      case 2:
        return this.z
      default:
        throw new Error('index is out of range: ' + t)
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z)
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), this
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), (this.z += t.z), this
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), this
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
    )
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), this
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
    )
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), this
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
    )
  }
  applyEuler(t) {
    return this.applyQuaternion(s2.setFromEuler(t))
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(s2.setFromAxisAngle(t, e))
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      a = t.elements
    return (
      (this.x = a[0] * e + a[3] * n + a[6] * i),
      (this.y = a[1] * e + a[4] * n + a[7] * i),
      (this.z = a[2] * e + a[5] * n + a[8] * i),
      this
    )
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize()
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      a = t.elements,
      o = 1 / (a[3] * e + a[7] * n + a[11] * i + a[15])
    return (
      (this.x = (a[0] * e + a[4] * n + a[8] * i + a[12]) * o),
      (this.y = (a[1] * e + a[5] * n + a[9] * i + a[13]) * o),
      (this.z = (a[2] * e + a[6] * n + a[10] * i + a[14]) * o),
      this
    )
  }
  applyQuaternion(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      a = t.x,
      o = t.y,
      s = t.z,
      l = t.w,
      u = 2 * (o * i - s * n),
      c = 2 * (s * e - a * i),
      h = 2 * (a * n - o * e)
    return (
      (this.x = e + l * u + o * h - s * c),
      (this.y = n + l * c + s * u - a * h),
      (this.z = i + l * h + a * c - o * u),
      this
    )
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix,
    )
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld,
    )
  }
  transformDirection(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      a = t.elements
    return (
      (this.x = a[0] * e + a[4] * n + a[8] * i),
      (this.y = a[1] * e + a[5] * n + a[9] * i),
      (this.z = a[2] * e + a[6] * n + a[10] * i),
      this.normalize()
    )
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t)
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    )
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    )
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      this
    )
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      this
    )
  }
  clampLength(t, e) {
    const n = this.length()
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    )
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    )
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    )
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    )
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
  }
  normalize() {
    return this.divideScalar(this.length() || 1)
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t)
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    )
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      this
    )
  }
  cross(t) {
    return this.crossVectors(this, t)
  }
  crossVectors(t, e) {
    const n = t.x,
      i = t.y,
      a = t.z,
      o = e.x,
      s = e.y,
      l = e.z
    return (
      (this.x = i * l - a * s),
      (this.y = a * o - n * l),
      (this.z = n * s - i * o),
      this
    )
  }
  projectOnVector(t) {
    const e = t.lengthSq()
    if (e === 0) return this.set(0, 0, 0)
    const n = t.dot(this) / e
    return this.copy(t).multiplyScalar(n)
  }
  projectOnPlane(t) {
    return U_.copy(this).projectOnVector(t), this.sub(U_)
  }
  reflect(t) {
    return this.sub(U_.copy(t).multiplyScalar(2 * this.dot(t)))
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq())
    if (e === 0) return Math.PI / 2
    const n = this.dot(t) / e
    return Math.acos(zn(n, -1, 1))
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t))
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y,
      i = this.z - t.z
    return e * e + n * n + i * i
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    )
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(e) * t),
      (this.z = i * Math.cos(n)),
      this
    )
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
  }
  setFromCylindricalCoords(t, e, n) {
    return (
      (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this
    )
  }
  setFromMatrixPosition(t) {
    const e = t.elements
    return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      n = this.setFromMatrixColumn(t, 1).length(),
      i = this.setFromMatrixColumn(t, 2).length()
    return (this.x = e), (this.y = n), (this.z = i), this
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4)
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3)
  }
  setFromEuler(t) {
    return (this.x = t._x), (this.y = t._y), (this.z = t._z), this
  }
  setFromColor(t) {
    return (this.x = t.r), (this.y = t.g), (this.z = t.b), this
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
    )
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    )
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2,
      e = Math.random() * 2 - 1,
      n = Math.sqrt(1 - e * e)
    return (
      (this.x = n * Math.cos(t)), (this.y = e), (this.z = n * Math.sin(t)), this
    )
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z
  }
}
const U_ = new U(),
  s2 = new wa()
class Ei {
  constructor(
    t = new U(1 / 0, 1 / 0, 1 / 0),
    e = new U(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ;(this.isBox3 = !0), (this.min = t), (this.max = e)
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this
  }
  setFromArray(t) {
    this.makeEmpty()
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(sa.fromArray(t, e))
    return this
  }
  setFromBufferAttribute(t) {
    this.makeEmpty()
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(sa.fromBufferAttribute(t, e))
    return this
  }
  setFromPoints(t) {
    this.makeEmpty()
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e])
    return this
  }
  setFromCenterAndSize(t, e) {
    const n = sa.copy(e).multiplyScalar(0.5)
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e)
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    )
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    )
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5)
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1)
    const n = t.geometry
    if (n !== void 0) {
      const a = n.getAttribute('position')
      if (e === !0 && a !== void 0 && t.isInstancedMesh !== !0)
        for (let o = 0, s = a.count; o < s; o++)
          t.isMesh === !0
            ? t.getVertexPosition(o, sa)
            : sa.fromBufferAttribute(a, o),
            sa.applyMatrix4(t.matrixWorld),
            this.expandByPoint(sa)
      else
        t.boundingBox !== void 0
          ? (t.boundingBox === null && t.computeBoundingBox(),
            Fv.copy(t.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Fv.copy(n.boundingBox)),
          Fv.applyMatrix4(t.matrixWorld),
          this.union(Fv)
    }
    const i = t.children
    for (let a = 0, o = i.length; a < o; a++) this.expandByObject(i[a], e)
    return this
  }
  containsPoint(t) {
    return !(
      t.x < this.min.x ||
      t.x > this.max.x ||
      t.y < this.min.y ||
      t.y > this.max.y ||
      t.z < this.min.z ||
      t.z > this.max.z
    )
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y &&
      this.min.z <= t.min.z &&
      t.max.z <= this.max.z
    )
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z),
    )
  }
  intersectsBox(t) {
    return !(
      t.max.x < this.min.x ||
      t.min.x > this.max.x ||
      t.max.y < this.min.y ||
      t.min.y > this.max.y ||
      t.max.z < this.min.z ||
      t.min.z > this.max.z
    )
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, sa),
      sa.distanceToSquared(t.center) <= t.radius * t.radius
    )
  }
  intersectsPlane(t) {
    let e, n
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
      e <= -t.constant && n >= -t.constant
    )
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1
    this.getCenter(kf),
      zv.subVectors(this.max, kf),
      vc.subVectors(t.a, kf),
      gc.subVectors(t.b, kf),
      mc.subVectors(t.c, kf),
      us.subVectors(gc, vc),
      cs.subVectors(mc, gc),
      xl.subVectors(vc, mc)
    let e = [
      0,
      -us.z,
      us.y,
      0,
      -cs.z,
      cs.y,
      0,
      -xl.z,
      xl.y,
      us.z,
      0,
      -us.x,
      cs.z,
      0,
      -cs.x,
      xl.z,
      0,
      -xl.x,
      -us.y,
      us.x,
      0,
      -cs.y,
      cs.x,
      0,
      -xl.y,
      xl.x,
      0,
    ]
    return !V_(e, vc, gc, mc, zv) ||
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !V_(e, vc, gc, mc, zv))
      ? !1
      : (Uv.crossVectors(us, cs),
        (e = [Uv.x, Uv.y, Uv.z]),
        V_(e, vc, gc, mc, zv))
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max)
  }
  distanceToPoint(t) {
    return this.clampPoint(t, sa).distanceTo(t)
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = this.getSize(sa).length() * 0.5)),
      t
    )
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    )
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this
  }
  applyMatrix4(t) {
    return this.isEmpty()
      ? this
      : (Ao[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        Ao[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        Ao[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        Ao[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        Ao[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        Ao[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        Ao[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        Ao[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(Ao),
        this)
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max)
  }
}
const Ao = [
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
  ],
  sa = new U(),
  Fv = new Ei(),
  vc = new U(),
  gc = new U(),
  mc = new U(),
  us = new U(),
  cs = new U(),
  xl = new U(),
  kf = new U(),
  zv = new U(),
  Uv = new U(),
  Sl = new U()
function V_(r, t, e, n, i) {
  for (let a = 0, o = r.length - 3; a <= o; a += 3) {
    Sl.fromArray(r, a)
    const s =
        i.x * Math.abs(Sl.x) + i.y * Math.abs(Sl.y) + i.z * Math.abs(Sl.z),
      l = t.dot(Sl),
      u = e.dot(Sl),
      c = n.dot(Sl)
    if (Math.max(-Math.max(l, u, c), Math.min(l, u, c)) > s) return !1
  }
  return !0
}
const U6 = new Ei(),
  Bf = new U(),
  G_ = new U()
class na {
  constructor(t = new U(), e = -1) {
    ;(this.isSphere = !0), (this.center = t), (this.radius = e)
  }
  set(t, e) {
    return this.center.copy(t), (this.radius = e), this
  }
  setFromPoints(t, e) {
    const n = this.center
    e !== void 0 ? n.copy(e) : U6.setFromPoints(t).getCenter(n)
    let i = 0
    for (let a = 0, o = t.length; a < o; a++)
      i = Math.max(i, n.distanceToSquared(t[a]))
    return (this.radius = Math.sqrt(i)), this
  }
  copy(t) {
    return this.center.copy(t.center), (this.radius = t.radius), this
  }
  isEmpty() {
    return this.radius < 0
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius
    return t.center.distanceToSquared(this.center) <= e * e
  }
  intersectsBox(t) {
    return t.intersectsSphere(this)
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t)
    return (
      e.copy(t),
      n > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    )
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    )
  }
  translate(t) {
    return this.center.add(t), this
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this
    Bf.subVectors(t, this.center)
    const e = Bf.lengthSq()
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e),
        i = (n - this.radius) * 0.5
      this.center.addScaledVector(Bf, i / n), (this.radius += i)
    }
    return this
  }
  union(t) {
    return t.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(t), this)
      : (this.center.equals(t.center) === !0
          ? (this.radius = Math.max(this.radius, t.radius))
          : (G_.subVectors(t.center, this.center).setLength(t.radius),
            this.expandByPoint(Bf.copy(t.center).add(G_)),
            this.expandByPoint(Bf.copy(t.center).sub(G_))),
        this)
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
const bo = new U(),
  H_ = new U(),
  Vv = new U(),
  hs = new U(),
  W_ = new U(),
  Gv = new U(),
  X_ = new U()
class hf {
  constructor(t = new U(), e = new U(0, 0, -1)) {
    ;(this.origin = t), (this.direction = e)
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t)
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this
  }
  recast(t) {
    return this.origin.copy(this.at(t, bo)), this
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin)
    const n = e.dot(this.direction)
    return n < 0
      ? e.copy(this.origin)
      : e.copy(this.origin).addScaledVector(this.direction, n)
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t))
  }
  distanceSqToPoint(t) {
    const e = bo.subVectors(t, this.origin).dot(this.direction)
    return e < 0
      ? this.origin.distanceToSquared(t)
      : (bo.copy(this.origin).addScaledVector(this.direction, e),
        bo.distanceToSquared(t))
  }
  distanceSqToSegment(t, e, n, i) {
    H_.copy(t).add(e).multiplyScalar(0.5),
      Vv.copy(e).sub(t).normalize(),
      hs.copy(this.origin).sub(H_)
    const a = t.distanceTo(e) * 0.5,
      o = -this.direction.dot(Vv),
      s = hs.dot(this.direction),
      l = -hs.dot(Vv),
      u = hs.lengthSq(),
      c = Math.abs(1 - o * o)
    let h, f, d, p
    if (c > 0)
      if (((h = o * l - s), (f = o * s - l), (p = a * c), h >= 0))
        if (f >= -p)
          if (f <= p) {
            const g = 1 / c
            ;(h *= g),
              (f *= g),
              (d = h * (h + o * f + 2 * s) + f * (o * h + f + 2 * l) + u)
          } else
            (f = a),
              (h = Math.max(0, -(o * f + s))),
              (d = -h * h + f * (f + 2 * l) + u)
        else
          (f = -a),
            (h = Math.max(0, -(o * f + s))),
            (d = -h * h + f * (f + 2 * l) + u)
      else
        f <= -p
          ? ((h = Math.max(0, -(-o * a + s))),
            (f = h > 0 ? -a : Math.min(Math.max(-a, -l), a)),
            (d = -h * h + f * (f + 2 * l) + u))
          : f <= p
          ? ((h = 0),
            (f = Math.min(Math.max(-a, -l), a)),
            (d = f * (f + 2 * l) + u))
          : ((h = Math.max(0, -(o * a + s))),
            (f = h > 0 ? a : Math.min(Math.max(-a, -l), a)),
            (d = -h * h + f * (f + 2 * l) + u))
    else
      (f = o > 0 ? -a : a),
        (h = Math.max(0, -(o * f + s))),
        (d = -h * h + f * (f + 2 * l) + u)
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      i && i.copy(H_).addScaledVector(Vv, f),
      d
    )
  }
  intersectSphere(t, e) {
    bo.subVectors(t.center, this.origin)
    const n = bo.dot(this.direction),
      i = bo.dot(bo) - n * n,
      a = t.radius * t.radius
    if (i > a) return null
    const o = Math.sqrt(a - i),
      s = n - o,
      l = n + o
    return l < 0 ? null : s < 0 ? this.at(l, e) : this.at(s, e)
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction)
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null
    const n = -(this.origin.dot(t.normal) + t.constant) / e
    return n >= 0 ? n : null
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t)
    return n === null ? null : this.at(n, e)
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin)
    return e === 0 || t.normal.dot(this.direction) * e < 0
  }
  intersectBox(t, e) {
    let n, i, a, o, s, l
    const u = 1 / this.direction.x,
      c = 1 / this.direction.y,
      h = 1 / this.direction.z,
      f = this.origin
    return (
      u >= 0
        ? ((n = (t.min.x - f.x) * u), (i = (t.max.x - f.x) * u))
        : ((n = (t.max.x - f.x) * u), (i = (t.min.x - f.x) * u)),
      c >= 0
        ? ((a = (t.min.y - f.y) * c), (o = (t.max.y - f.y) * c))
        : ((a = (t.max.y - f.y) * c), (o = (t.min.y - f.y) * c)),
      n > o ||
      a > i ||
      ((a > n || isNaN(n)) && (n = a),
      (o < i || isNaN(i)) && (i = o),
      h >= 0
        ? ((s = (t.min.z - f.z) * h), (l = (t.max.z - f.z) * h))
        : ((s = (t.max.z - f.z) * h), (l = (t.min.z - f.z) * h)),
      n > l || s > i) ||
      ((s > n || n !== n) && (n = s), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, e)
    )
  }
  intersectsBox(t) {
    return this.intersectBox(t, bo) !== null
  }
  intersectTriangle(t, e, n, i, a) {
    W_.subVectors(e, t), Gv.subVectors(n, t), X_.crossVectors(W_, Gv)
    let o = this.direction.dot(X_),
      s
    if (o > 0) {
      if (i) return null
      s = 1
    } else if (o < 0) (s = -1), (o = -o)
    else return null
    hs.subVectors(this.origin, t)
    const l = s * this.direction.dot(Gv.crossVectors(hs, Gv))
    if (l < 0) return null
    const u = s * this.direction.dot(W_.cross(hs))
    if (u < 0 || l + u > o) return null
    const c = -s * hs.dot(X_)
    return c < 0 ? null : this.at(c / o, a)
  }
  applyMatrix4(t) {
    return (
      this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    )
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction)
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
class ae {
  constructor(t, e, n, i, a, o, s, l, u, c, h, f, d, p, g, v) {
    ;(ae.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, n, i, a, o, s, l, u, c, h, f, d, p, g, v)
  }
  set(t, e, n, i, a, o, s, l, u, c, h, f, d, p, g, v) {
    const m = this.elements
    return (
      (m[0] = t),
      (m[4] = e),
      (m[8] = n),
      (m[12] = i),
      (m[1] = a),
      (m[5] = o),
      (m[9] = s),
      (m[13] = l),
      (m[2] = u),
      (m[6] = c),
      (m[10] = h),
      (m[14] = f),
      (m[3] = d),
      (m[7] = p),
      (m[11] = g),
      (m[15] = v),
      this
    )
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
  }
  clone() {
    return new ae().fromArray(this.elements)
  }
  copy(t) {
    const e = this.elements,
      n = t.elements
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      (e[9] = n[9]),
      (e[10] = n[10]),
      (e[11] = n[11]),
      (e[12] = n[12]),
      (e[13] = n[13]),
      (e[14] = n[14]),
      (e[15] = n[15]),
      this
    )
  }
  copyPosition(t) {
    const e = this.elements,
      n = t.elements
    return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this
  }
  setFromMatrix3(t) {
    const e = t.elements
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    )
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    )
  }
  makeBasis(t, e, n) {
    return (
      this.set(
        t.x,
        e.x,
        n.x,
        0,
        t.y,
        e.y,
        n.y,
        0,
        t.z,
        e.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    )
  }
  extractRotation(t) {
    const e = this.elements,
      n = t.elements,
      i = 1 / yc.setFromMatrixColumn(t, 0).length(),
      a = 1 / yc.setFromMatrixColumn(t, 1).length(),
      o = 1 / yc.setFromMatrixColumn(t, 2).length()
    return (
      (e[0] = n[0] * i),
      (e[1] = n[1] * i),
      (e[2] = n[2] * i),
      (e[3] = 0),
      (e[4] = n[4] * a),
      (e[5] = n[5] * a),
      (e[6] = n[6] * a),
      (e[7] = 0),
      (e[8] = n[8] * o),
      (e[9] = n[9] * o),
      (e[10] = n[10] * o),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    )
  }
  makeRotationFromEuler(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      a = t.z,
      o = Math.cos(n),
      s = Math.sin(n),
      l = Math.cos(i),
      u = Math.sin(i),
      c = Math.cos(a),
      h = Math.sin(a)
    if (t.order === 'XYZ') {
      const f = o * c,
        d = o * h,
        p = s * c,
        g = s * h
      ;(e[0] = l * c),
        (e[4] = -l * h),
        (e[8] = u),
        (e[1] = d + p * u),
        (e[5] = f - g * u),
        (e[9] = -s * l),
        (e[2] = g - f * u),
        (e[6] = p + d * u),
        (e[10] = o * l)
    } else if (t.order === 'YXZ') {
      const f = l * c,
        d = l * h,
        p = u * c,
        g = u * h
      ;(e[0] = f + g * s),
        (e[4] = p * s - d),
        (e[8] = o * u),
        (e[1] = o * h),
        (e[5] = o * c),
        (e[9] = -s),
        (e[2] = d * s - p),
        (e[6] = g + f * s),
        (e[10] = o * l)
    } else if (t.order === 'ZXY') {
      const f = l * c,
        d = l * h,
        p = u * c,
        g = u * h
      ;(e[0] = f - g * s),
        (e[4] = -o * h),
        (e[8] = p + d * s),
        (e[1] = d + p * s),
        (e[5] = o * c),
        (e[9] = g - f * s),
        (e[2] = -o * u),
        (e[6] = s),
        (e[10] = o * l)
    } else if (t.order === 'ZYX') {
      const f = o * c,
        d = o * h,
        p = s * c,
        g = s * h
      ;(e[0] = l * c),
        (e[4] = p * u - d),
        (e[8] = f * u + g),
        (e[1] = l * h),
        (e[5] = g * u + f),
        (e[9] = d * u - p),
        (e[2] = -u),
        (e[6] = s * l),
        (e[10] = o * l)
    } else if (t.order === 'YZX') {
      const f = o * l,
        d = o * u,
        p = s * l,
        g = s * u
      ;(e[0] = l * c),
        (e[4] = g - f * h),
        (e[8] = p * h + d),
        (e[1] = h),
        (e[5] = o * c),
        (e[9] = -s * c),
        (e[2] = -u * c),
        (e[6] = d * h + p),
        (e[10] = f - g * h)
    } else if (t.order === 'XZY') {
      const f = o * l,
        d = o * u,
        p = s * l,
        g = s * u
      ;(e[0] = l * c),
        (e[4] = -h),
        (e[8] = u * c),
        (e[1] = f * h + g),
        (e[5] = o * c),
        (e[9] = d * h - p),
        (e[2] = p * h - d),
        (e[6] = s * c),
        (e[10] = g * h + f)
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    )
  }
  makeRotationFromQuaternion(t) {
    return this.compose(V6, t, G6)
  }
  lookAt(t, e, n) {
    const i = this.elements
    return (
      hi.subVectors(t, e),
      hi.lengthSq() === 0 && (hi.z = 1),
      hi.normalize(),
      fs.crossVectors(n, hi),
      fs.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (hi.x += 1e-4) : (hi.z += 1e-4),
        hi.normalize(),
        fs.crossVectors(n, hi)),
      fs.normalize(),
      Hv.crossVectors(hi, fs),
      (i[0] = fs.x),
      (i[4] = Hv.x),
      (i[8] = hi.x),
      (i[1] = fs.y),
      (i[5] = Hv.y),
      (i[9] = hi.y),
      (i[2] = fs.z),
      (i[6] = Hv.z),
      (i[10] = hi.z),
      this
    )
  }
  multiply(t) {
    return this.multiplyMatrices(this, t)
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this)
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      a = this.elements,
      o = n[0],
      s = n[4],
      l = n[8],
      u = n[12],
      c = n[1],
      h = n[5],
      f = n[9],
      d = n[13],
      p = n[2],
      g = n[6],
      v = n[10],
      m = n[14],
      y = n[3],
      _ = n[7],
      x = n[11],
      A = n[15],
      S = i[0],
      b = i[4],
      T = i[8],
      w = i[12],
      M = i[1],
      C = i[5],
      E = i[9],
      D = i[13],
      P = i[2],
      L = i[6],
      I = i[10],
      F = i[14],
      k = i[3],
      V = i[7],
      H = i[11],
      Y = i[15]
    return (
      (a[0] = o * S + s * M + l * P + u * k),
      (a[4] = o * b + s * C + l * L + u * V),
      (a[8] = o * T + s * E + l * I + u * H),
      (a[12] = o * w + s * D + l * F + u * Y),
      (a[1] = c * S + h * M + f * P + d * k),
      (a[5] = c * b + h * C + f * L + d * V),
      (a[9] = c * T + h * E + f * I + d * H),
      (a[13] = c * w + h * D + f * F + d * Y),
      (a[2] = p * S + g * M + v * P + m * k),
      (a[6] = p * b + g * C + v * L + m * V),
      (a[10] = p * T + g * E + v * I + m * H),
      (a[14] = p * w + g * D + v * F + m * Y),
      (a[3] = y * S + _ * M + x * P + A * k),
      (a[7] = y * b + _ * C + x * L + A * V),
      (a[11] = y * T + _ * E + x * I + A * H),
      (a[15] = y * w + _ * D + x * F + A * Y),
      this
    )
  }
  multiplyScalar(t) {
    const e = this.elements
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    )
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[4],
      i = t[8],
      a = t[12],
      o = t[1],
      s = t[5],
      l = t[9],
      u = t[13],
      c = t[2],
      h = t[6],
      f = t[10],
      d = t[14],
      p = t[3],
      g = t[7],
      v = t[11],
      m = t[15]
    return (
      p *
        (+a * l * h -
          i * u * h -
          a * s * f +
          n * u * f +
          i * s * d -
          n * l * d) +
      g *
        (+e * l * d -
          e * u * f +
          a * o * f -
          i * o * d +
          i * u * c -
          a * l * c) +
      v *
        (+e * u * h -
          e * s * d -
          a * o * h +
          n * o * d +
          a * s * c -
          n * u * c) +
      m *
        (-i * s * c - e * l * h + e * s * f + i * o * h - n * o * f + n * l * c)
    )
  }
  transpose() {
    const t = this.elements
    let e
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    )
  }
  setPosition(t, e, n) {
    const i = this.elements
    return (
      t.isVector3
        ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
        : ((i[12] = t), (i[13] = e), (i[14] = n)),
      this
    )
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      a = t[3],
      o = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8],
      h = t[9],
      f = t[10],
      d = t[11],
      p = t[12],
      g = t[13],
      v = t[14],
      m = t[15],
      y = h * v * u - g * f * u + g * l * d - s * v * d - h * l * m + s * f * m,
      _ = p * f * u - c * v * u - p * l * d + o * v * d + c * l * m - o * f * m,
      x = c * g * u - p * h * u + p * s * d - o * g * d - c * s * m + o * h * m,
      A = p * h * l - c * g * l - p * s * f + o * g * f + c * s * v - o * h * v,
      S = e * y + n * _ + i * x + a * A
    if (S === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    const b = 1 / S
    return (
      (t[0] = y * b),
      (t[1] =
        (g * f * a -
          h * v * a -
          g * i * d +
          n * v * d +
          h * i * m -
          n * f * m) *
        b),
      (t[2] =
        (s * v * a -
          g * l * a +
          g * i * u -
          n * v * u -
          s * i * m +
          n * l * m) *
        b),
      (t[3] =
        (h * l * a -
          s * f * a -
          h * i * u +
          n * f * u +
          s * i * d -
          n * l * d) *
        b),
      (t[4] = _ * b),
      (t[5] =
        (c * v * a -
          p * f * a +
          p * i * d -
          e * v * d -
          c * i * m +
          e * f * m) *
        b),
      (t[6] =
        (p * l * a -
          o * v * a -
          p * i * u +
          e * v * u +
          o * i * m -
          e * l * m) *
        b),
      (t[7] =
        (o * f * a -
          c * l * a +
          c * i * u -
          e * f * u -
          o * i * d +
          e * l * d) *
        b),
      (t[8] = x * b),
      (t[9] =
        (p * h * a -
          c * g * a -
          p * n * d +
          e * g * d +
          c * n * m -
          e * h * m) *
        b),
      (t[10] =
        (o * g * a -
          p * s * a +
          p * n * u -
          e * g * u -
          o * n * m +
          e * s * m) *
        b),
      (t[11] =
        (c * s * a -
          o * h * a -
          c * n * u +
          e * h * u +
          o * n * d -
          e * s * d) *
        b),
      (t[12] = A * b),
      (t[13] =
        (c * g * i -
          p * h * i +
          p * n * f -
          e * g * f -
          c * n * v +
          e * h * v) *
        b),
      (t[14] =
        (p * s * i -
          o * g * i -
          p * n * l +
          e * g * l +
          o * n * v -
          e * s * v) *
        b),
      (t[15] =
        (o * h * i -
          c * s * i +
          c * n * l -
          e * h * l -
          o * n * f +
          e * s * f) *
        b),
      this
    )
  }
  scale(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      a = t.z
    return (
      (e[0] *= n),
      (e[4] *= i),
      (e[8] *= a),
      (e[1] *= n),
      (e[5] *= i),
      (e[9] *= a),
      (e[2] *= n),
      (e[6] *= i),
      (e[10] *= a),
      (e[3] *= n),
      (e[7] *= i),
      (e[11] *= a),
      this
    )
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]
    return Math.sqrt(Math.max(e, n, i))
  }
  makeTranslation(t, e, n) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
      this
    )
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      n = Math.sin(t)
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      n = Math.sin(t)
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      n = Math.sin(t)
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      a = 1 - n,
      o = t.x,
      s = t.y,
      l = t.z,
      u = a * o,
      c = a * s
    return (
      this.set(
        u * o + n,
        u * s - i * l,
        u * l + i * s,
        0,
        u * s + i * l,
        c * s + n,
        c * l - i * o,
        0,
        u * l - i * s,
        c * l + i * o,
        a * l * l + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    )
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
  }
  makeShear(t, e, n, i, a, o) {
    return this.set(1, n, a, 0, t, 1, o, 0, e, i, 1, 0, 0, 0, 0, 1), this
  }
  compose(t, e, n) {
    const i = this.elements,
      a = e._x,
      o = e._y,
      s = e._z,
      l = e._w,
      u = a + a,
      c = o + o,
      h = s + s,
      f = a * u,
      d = a * c,
      p = a * h,
      g = o * c,
      v = o * h,
      m = s * h,
      y = l * u,
      _ = l * c,
      x = l * h,
      A = n.x,
      S = n.y,
      b = n.z
    return (
      (i[0] = (1 - (g + m)) * A),
      (i[1] = (d + x) * A),
      (i[2] = (p - _) * A),
      (i[3] = 0),
      (i[4] = (d - x) * S),
      (i[5] = (1 - (f + m)) * S),
      (i[6] = (v + y) * S),
      (i[7] = 0),
      (i[8] = (p + _) * b),
      (i[9] = (v - y) * b),
      (i[10] = (1 - (f + g)) * b),
      (i[11] = 0),
      (i[12] = t.x),
      (i[13] = t.y),
      (i[14] = t.z),
      (i[15] = 1),
      this
    )
  }
  decompose(t, e, n) {
    const i = this.elements
    let a = yc.set(i[0], i[1], i[2]).length()
    const o = yc.set(i[4], i[5], i[6]).length(),
      s = yc.set(i[8], i[9], i[10]).length()
    this.determinant() < 0 && (a = -a),
      (t.x = i[12]),
      (t.y = i[13]),
      (t.z = i[14]),
      la.copy(this)
    const u = 1 / a,
      c = 1 / o,
      h = 1 / s
    return (
      (la.elements[0] *= u),
      (la.elements[1] *= u),
      (la.elements[2] *= u),
      (la.elements[4] *= c),
      (la.elements[5] *= c),
      (la.elements[6] *= c),
      (la.elements[8] *= h),
      (la.elements[9] *= h),
      (la.elements[10] *= h),
      e.setFromRotationMatrix(la),
      (n.x = a),
      (n.y = o),
      (n.z = s),
      this
    )
  }
  makePerspective(t, e, n, i, a, o, s = zo) {
    const l = this.elements,
      u = (2 * a) / (e - t),
      c = (2 * a) / (n - i),
      h = (e + t) / (e - t),
      f = (n + i) / (n - i)
    let d, p
    if (s === zo) (d = -(o + a) / (o - a)), (p = (-2 * o * a) / (o - a))
    else if (s === yy) (d = -o / (o - a)), (p = (-o * a) / (o - a))
    else
      throw new Error(
        'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + s,
      )
    return (
      (l[0] = u),
      (l[4] = 0),
      (l[8] = h),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = c),
      (l[9] = f),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = d),
      (l[14] = p),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    )
  }
  makeOrthographic(t, e, n, i, a, o, s = zo) {
    const l = this.elements,
      u = 1 / (e - t),
      c = 1 / (n - i),
      h = 1 / (o - a),
      f = (e + t) * u,
      d = (n + i) * c
    let p, g
    if (s === zo) (p = (o + a) * h), (g = -2 * h)
    else if (s === yy) (p = a * h), (g = -1 * h)
    else
      throw new Error(
        'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + s,
      )
    return (
      (l[0] = 2 * u),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -f),
      (l[1] = 0),
      (l[5] = 2 * c),
      (l[9] = 0),
      (l[13] = -d),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = -p),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    )
  }
  equals(t) {
    const e = this.elements,
      n = t.elements
    for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return !1
    return !0
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e]
    return this
  }
  toArray(t = [], e = 0) {
    const n = this.elements
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      (t[e + 9] = n[9]),
      (t[e + 10] = n[10]),
      (t[e + 11] = n[11]),
      (t[e + 12] = n[12]),
      (t[e + 13] = n[13]),
      (t[e + 14] = n[14]),
      (t[e + 15] = n[15]),
      t
    )
  }
}
const yc = new U(),
  la = new ae(),
  V6 = new U(0, 0, 0),
  G6 = new U(1, 1, 1),
  fs = new U(),
  Hv = new U(),
  hi = new U(),
  l2 = new ae(),
  u2 = new wa()
class Ma {
  constructor(t = 0, e = 0, n = 0, i = Ma.DEFAULT_ORDER) {
    ;(this.isEuler = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i)
  }
  get x() {
    return this._x
  }
  set x(t) {
    ;(this._x = t), this._onChangeCallback()
  }
  get y() {
    return this._y
  }
  set y(t) {
    ;(this._y = t), this._onChangeCallback()
  }
  get z() {
    return this._z
  }
  set z(t) {
    ;(this._z = t), this._onChangeCallback()
  }
  get order() {
    return this._order
  }
  set order(t) {
    ;(this._order = t), this._onChangeCallback()
  }
  set(t, e, n, i = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    )
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order)
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    )
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements,
      a = i[0],
      o = i[4],
      s = i[8],
      l = i[1],
      u = i[5],
      c = i[9],
      h = i[2],
      f = i[6],
      d = i[10]
    switch (e) {
      case 'XYZ':
        ;(this._y = Math.asin(zn(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-o, a)))
            : ((this._x = Math.atan2(f, u)), (this._z = 0))
        break
      case 'YXZ':
        ;(this._x = Math.asin(-zn(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(l, u)))
            : ((this._y = Math.atan2(-h, a)), (this._z = 0))
        break
      case 'ZXY':
        ;(this._x = Math.asin(zn(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-o, u)))
            : ((this._y = 0), (this._z = Math.atan2(l, a)))
        break
      case 'ZYX':
        ;(this._y = Math.asin(-zn(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(f, d)), (this._z = Math.atan2(l, a)))
            : ((this._x = 0), (this._z = Math.atan2(-o, u)))
        break
      case 'YZX':
        ;(this._z = Math.asin(zn(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-c, u)), (this._y = Math.atan2(-h, a)))
            : ((this._x = 0), (this._y = Math.atan2(s, d)))
        break
      case 'XZY':
        ;(this._z = Math.asin(-zn(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(f, u)), (this._y = Math.atan2(s, a)))
            : ((this._x = Math.atan2(-c, d)), (this._y = 0))
        break
      default:
        console.warn(
          'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
            e,
        )
    }
    return (this._order = e), n === !0 && this._onChangeCallback(), this
  }
  setFromQuaternion(t, e, n) {
    return (
      l2.makeRotationFromQuaternion(t), this.setFromRotationMatrix(l2, e, n)
    )
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e)
  }
  reorder(t) {
    return u2.setFromEuler(this), this.setFromQuaternion(u2, t)
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    )
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      t[3] !== void 0 && (this._order = t[3]),
      this._onChangeCallback(),
      this
    )
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    )
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order
  }
}
Ma.DEFAULT_ORDER = 'XYZ'
class NM {
  constructor() {
    this.mask = 1
  }
  set(t) {
    this.mask = ((1 << t) | 0) >>> 0
  }
  enable(t) {
    this.mask |= (1 << t) | 0
  }
  enableAll() {
    this.mask = -1
  }
  toggle(t) {
    this.mask ^= (1 << t) | 0
  }
  disable(t) {
    this.mask &= ~((1 << t) | 0)
  }
  disableAll() {
    this.mask = 0
  }
  test(t) {
    return (this.mask & t.mask) !== 0
  }
  isEnabled(t) {
    return (this.mask & ((1 << t) | 0)) !== 0
  }
}
let H6 = 0
const c2 = new U(),
  _c = new wa(),
  wo = new ae(),
  Wv = new U(),
  Ff = new U(),
  W6 = new U(),
  X6 = new wa(),
  h2 = new U(1, 0, 0),
  f2 = new U(0, 1, 0),
  d2 = new U(0, 0, 1),
  p2 = {
    type: 'added',
  },
  Y6 = {
    type: 'removed',
  },
  xc = {
    type: 'childadded',
    child: null,
  },
  Y_ = {
    type: 'childremoved',
    child: null,
  }
class Fe extends Ju {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', {
        value: H6++,
      }),
      (this.uuid = Ki()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = Fe.DEFAULT_UP.clone())
    const t = new U(),
      e = new Ma(),
      n = new wa(),
      i = new U(1, 1, 1)
    function a() {
      n.setFromEuler(e, !1)
    }
    function o() {
      e.setFromQuaternion(n, void 0, !1)
    }
    e._onChange(a),
      n._onChange(o),
      Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: t,
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: e,
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n,
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i,
        },
        modelViewMatrix: {
          value: new ae(),
        },
        normalMatrix: {
          value: new _e(),
        },
      }),
      (this.matrix = new ae()),
      (this.matrixWorld = new ae()),
      (this.matrixAutoUpdate = Fe.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new NM()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {})
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale)
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e)
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0)
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t)
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t)
  }
  rotateOnAxis(t, e) {
    return _c.setFromAxisAngle(t, e), this.quaternion.multiply(_c), this
  }
  rotateOnWorldAxis(t, e) {
    return _c.setFromAxisAngle(t, e), this.quaternion.premultiply(_c), this
  }
  rotateX(t) {
    return this.rotateOnAxis(h2, t)
  }
  rotateY(t) {
    return this.rotateOnAxis(f2, t)
  }
  rotateZ(t) {
    return this.rotateOnAxis(d2, t)
  }
  translateOnAxis(t, e) {
    return (
      c2.copy(t).applyQuaternion(this.quaternion),
      this.position.add(c2.multiplyScalar(e)),
      this
    )
  }
  translateX(t) {
    return this.translateOnAxis(h2, t)
  }
  translateY(t) {
    return this.translateOnAxis(f2, t)
  }
  translateZ(t) {
    return this.translateOnAxis(d2, t)
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld)
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(wo.copy(this.matrixWorld).invert())
    )
  }
  lookAt(t, e, n) {
    t.isVector3 ? Wv.copy(t) : Wv.set(t, e, n)
    const i = this.parent
    this.updateWorldMatrix(!0, !1),
      Ff.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? wo.lookAt(Ff, Wv, this.up)
        : wo.lookAt(Wv, Ff, this.up),
      this.quaternion.setFromRotationMatrix(wo),
      i &&
        (wo.extractRotation(i.matrixWorld),
        _c.setFromRotationMatrix(wo),
        this.quaternion.premultiply(_c.invert()))
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e])
      return this
    }
    return t === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          t,
        ),
        this)
      : (t && t.isObject3D
          ? (t.removeFromParent(),
            (t.parent = this),
            this.children.push(t),
            t.dispatchEvent(p2),
            (xc.child = t),
            this.dispatchEvent(xc),
            (xc.child = null))
          : console.error(
              'THREE.Object3D.add: object not an instance of THREE.Object3D.',
              t,
            ),
        this)
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n])
      return this
    }
    const e = this.children.indexOf(t)
    return (
      e !== -1 &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(Y6),
        (Y_.child = t),
        this.dispatchEvent(Y_),
        (Y_.child = null)),
      this
    )
  }
  removeFromParent() {
    const t = this.parent
    return t !== null && t.remove(this), this
  }
  clear() {
    return this.remove(...this.children)
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      wo.copy(this.matrixWorld).invert(),
      t.parent !== null &&
        (t.parent.updateWorldMatrix(!0, !1), wo.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(wo),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(p2),
      (xc.child = t),
      this.dispatchEvent(xc),
      (xc.child = null),
      this
    )
  }
  getObjectById(t) {
    return this.getObjectByProperty('id', t)
  }
  getObjectByName(t) {
    return this.getObjectByProperty('name', t)
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(t, e)
      if (o !== void 0) return o
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this)
    const i = this.children
    for (let a = 0, o = i.length; a < o; a++) i[a].getObjectsByProperty(t, e, n)
    return n
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    )
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ff, t, W6), t
    )
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ff, X6, t), t
    )
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1)
    const e = this.matrixWorld.elements
    return t.set(e[8], e[9], e[10]).normalize()
  }
  raycast() {}
  traverse(t) {
    t(this)
    const e = this.children
    for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
  }
  traverseVisible(t) {
    if (this.visible === !1) return
    t(this)
    const e = this.children
    for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
  }
  traverseAncestors(t) {
    const e = this.parent
    e !== null && (t(e), e.traverseAncestors(t))
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0)
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0))
    const e = this.children
    for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
  }
  updateWorldMatrix(t, e) {
    const n = this.parent
    if (
      (t === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      e === !0)
    ) {
      const i = this.children
      for (let a = 0, o = i.length; a < o; a++) i[a].updateWorldMatrix(!1, !0)
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string',
      n = {}
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: 'Object',
        generator: 'Object3D.toJSON',
      }))
    const i = {}
    ;(i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== '' && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = 'InstancedMesh'),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = 'BatchedMesh'),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map(s => ({
          boxInitialized: s.boxInitialized,
          boxMin: s.box.min.toArray(),
          boxMax: s.box.max.toArray(),
          sphereInitialized: s.sphereInitialized,
          sphereRadius: s.sphere.radius,
          sphereCenter: s.sphere.center.toArray(),
        }))),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(t)),
        this._colorsTexture !== null &&
          (i.colorsTexture = this._colorsTexture.toJSON(t)),
        this.boundingSphere !== null &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          }))
    function a(s, l) {
      return s[l.uuid] === void 0 && (s[l.uuid] = l.toJSON(t)), l.uuid
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(t).uuid)
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = a(t.geometries, this.geometry)
      const s = this.geometry.parameters
      if (s !== void 0 && s.shapes !== void 0) {
        const l = s.shapes
        if (Array.isArray(l))
          for (let u = 0, c = l.length; u < c; u++) {
            const h = l[u]
            a(t.shapes, h)
          }
        else a(t.shapes, l)
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (a(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const s = []
        for (let l = 0, u = this.material.length; l < u; l++)
          s.push(a(t.materials, this.material[l]))
        i.material = s
      } else i.material = a(t.materials, this.material)
    if (this.children.length > 0) {
      i.children = []
      for (let s = 0; s < this.children.length; s++)
        i.children.push(this.children[s].toJSON(t).object)
    }
    if (this.animations.length > 0) {
      i.animations = []
      for (let s = 0; s < this.animations.length; s++) {
        const l = this.animations[s]
        i.animations.push(a(t.animations, l))
      }
    }
    if (e) {
      const s = o(t.geometries),
        l = o(t.materials),
        u = o(t.textures),
        c = o(t.images),
        h = o(t.shapes),
        f = o(t.skeletons),
        d = o(t.animations),
        p = o(t.nodes)
      s.length > 0 && (n.geometries = s),
        l.length > 0 && (n.materials = l),
        u.length > 0 && (n.textures = u),
        c.length > 0 && (n.images = c),
        h.length > 0 && (n.shapes = h),
        f.length > 0 && (n.skeletons = f),
        d.length > 0 && (n.animations = d),
        p.length > 0 && (n.nodes = p)
    }
    return (n.object = i), n
    function o(s) {
      const l = []
      for (const u in s) {
        const c = s[u]
        delete c.metadata, l.push(c)
      }
      return l
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t)
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      e === !0)
    )
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n]
        this.add(i.clone())
      }
    return this
  }
}
Fe.DEFAULT_UP = new U(0, 1, 0)
Fe.DEFAULT_MATRIX_AUTO_UPDATE = !0
Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0
const ua = new U(),
  Mo = new U(),
  $_ = new U(),
  To = new U(),
  Sc = new U(),
  Ac = new U(),
  v2 = new U(),
  q_ = new U(),
  Z_ = new U(),
  K_ = new U()
let Ed = class ah {
  constructor(t = new U(), e = new U(), n = new U()) {
    ;(this.a = t), (this.b = e), (this.c = n)
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), ua.subVectors(t, e), i.cross(ua)
    const a = i.lengthSq()
    return a > 0 ? i.multiplyScalar(1 / Math.sqrt(a)) : i.set(0, 0, 0)
  }
  static getBarycoord(t, e, n, i, a) {
    ua.subVectors(i, e), Mo.subVectors(n, e), $_.subVectors(t, e)
    const o = ua.dot(ua),
      s = ua.dot(Mo),
      l = ua.dot($_),
      u = Mo.dot(Mo),
      c = Mo.dot($_),
      h = o * u - s * s
    if (h === 0) return a.set(0, 0, 0), null
    const f = 1 / h,
      d = (u * l - s * c) * f,
      p = (o * c - s * l) * f
    return a.set(1 - d - p, p, d)
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, To) === null
      ? !1
      : To.x >= 0 && To.y >= 0 && To.x + To.y <= 1
  }
  static getInterpolation(t, e, n, i, a, o, s, l) {
    return this.getBarycoord(t, e, n, i, To) === null
      ? ((l.x = 0),
        (l.y = 0),
        'z' in l && (l.z = 0),
        'w' in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(a, To.x),
        l.addScaledVector(o, To.y),
        l.addScaledVector(s, To.z),
        l)
  }
  static isFrontFacing(t, e, n, i) {
    return ua.subVectors(n, e), Mo.subVectors(t, e), ua.cross(Mo).dot(i) < 0
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return (
      this.a.fromBufferAttribute(t, e),
      this.b.fromBufferAttribute(t, n),
      this.c.fromBufferAttribute(t, i),
      this
    )
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
  }
  getArea() {
    return (
      ua.subVectors(this.c, this.b),
      Mo.subVectors(this.a, this.b),
      ua.cross(Mo).length() * 0.5
    )
  }
  getMidpoint(t) {
    return t
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3)
  }
  getNormal(t) {
    return ah.getNormal(this.a, this.b, this.c, t)
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c)
  }
  getBarycoord(t, e) {
    return ah.getBarycoord(t, this.a, this.b, this.c, e)
  }
  getInterpolation(t, e, n, i, a) {
    return ah.getInterpolation(t, this.a, this.b, this.c, e, n, i, a)
  }
  containsPoint(t) {
    return ah.containsPoint(t, this.a, this.b, this.c)
  }
  isFrontFacing(t) {
    return ah.isFrontFacing(this.a, this.b, this.c, t)
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this)
  }
  closestPointToPoint(t, e) {
    const n = this.a,
      i = this.b,
      a = this.c
    let o, s
    Sc.subVectors(i, n), Ac.subVectors(a, n), q_.subVectors(t, n)
    const l = Sc.dot(q_),
      u = Ac.dot(q_)
    if (l <= 0 && u <= 0) return e.copy(n)
    Z_.subVectors(t, i)
    const c = Sc.dot(Z_),
      h = Ac.dot(Z_)
    if (c >= 0 && h <= c) return e.copy(i)
    const f = l * h - c * u
    if (f <= 0 && l >= 0 && c <= 0)
      return (o = l / (l - c)), e.copy(n).addScaledVector(Sc, o)
    K_.subVectors(t, a)
    const d = Sc.dot(K_),
      p = Ac.dot(K_)
    if (p >= 0 && d <= p) return e.copy(a)
    const g = d * u - l * p
    if (g <= 0 && u >= 0 && p <= 0)
      return (s = u / (u - p)), e.copy(n).addScaledVector(Ac, s)
    const v = c * p - d * h
    if (v <= 0 && h - c >= 0 && d - p >= 0)
      return (
        v2.subVectors(a, i),
        (s = (h - c) / (h - c + (d - p))),
        e.copy(i).addScaledVector(v2, s)
      )
    const m = 1 / (v + g + f)
    return (
      (o = g * m),
      (s = f * m),
      e.copy(n).addScaledVector(Sc, o).addScaledVector(Ac, s)
    )
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
  }
}
const Jk = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ds = {
    h: 0,
    s: 0,
    l: 0,
  },
  Xv = {
    h: 0,
    s: 0,
    l: 0,
  }
function j_(r, t, e) {
  return (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6
      ? r + (t - r) * 6 * e
      : e < 1 / 2
      ? t
      : e < 2 / 3
      ? r + (t - r) * 6 * (2 / 3 - e)
      : r
  )
}
class qt {
  constructor(t, e, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(t, e, n)
    )
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const i = t
      i && i.isColor
        ? this.copy(i)
        : typeof i == 'number'
        ? this.setHex(i)
        : typeof i == 'string' && this.setStyle(i)
    } else this.setRGB(t, e, n)
    return this
  }
  setScalar(t) {
    return (this.r = t), (this.g = t), (this.b = t), this
  }
  setHex(t, e = cn) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (t & 255) / 255),
      Be.toWorkingColorSpace(this, e),
      this
    )
  }
  setRGB(t, e, n, i = Be.workingColorSpace) {
    return (
      (this.r = t),
      (this.g = e),
      (this.b = n),
      Be.toWorkingColorSpace(this, i),
      this
    )
  }
  setHSL(t, e, n, i = Be.workingColorSpace) {
    if (((t = RM(t, 1)), (e = zn(e, 0, 1)), (n = zn(n, 0, 1)), e === 0))
      this.r = this.g = this.b = n
    else {
      const a = n <= 0.5 ? n * (1 + e) : n + e - n * e,
        o = 2 * n - a
      ;(this.r = j_(o, a, t + 1 / 3)),
        (this.g = j_(o, a, t)),
        (this.b = j_(o, a, t - 1 / 3))
    }
    return Be.toWorkingColorSpace(this, i), this
  }
  setStyle(t, e = cn) {
    function n(a) {
      a !== void 0 &&
        parseFloat(a) < 1 &&
        console.warn(
          'THREE.Color: Alpha component of ' + t + ' will be ignored.',
        )
    }
    let i
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(t))) {
      let a
      const o = i[1],
        s = i[2]
      switch (o) {
        case 'rgb':
        case 'rgba':
          if (
            (a =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s,
              ))
          )
            return (
              n(a[4]),
              this.setRGB(
                Math.min(255, parseInt(a[1], 10)) / 255,
                Math.min(255, parseInt(a[2], 10)) / 255,
                Math.min(255, parseInt(a[3], 10)) / 255,
                e,
              )
            )
          if (
            (a =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s,
              ))
          )
            return (
              n(a[4]),
              this.setRGB(
                Math.min(100, parseInt(a[1], 10)) / 100,
                Math.min(100, parseInt(a[2], 10)) / 100,
                Math.min(100, parseInt(a[3], 10)) / 100,
                e,
              )
            )
          break
        case 'hsl':
        case 'hsla':
          if (
            (a =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s,
              ))
          )
            return (
              n(a[4]),
              this.setHSL(
                parseFloat(a[1]) / 360,
                parseFloat(a[2]) / 100,
                parseFloat(a[3]) / 100,
                e,
              )
            )
          break
        default:
          console.warn('THREE.Color: Unknown color model ' + t)
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const a = i[1],
        o = a.length
      if (o === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          e,
        )
      if (o === 6) return this.setHex(parseInt(a, 16), e)
      console.warn('THREE.Color: Invalid hex color ' + t)
    } else if (t && t.length > 0) return this.setColorName(t, e)
    return this
  }
  setColorName(t, e = cn) {
    const n = Jk[t.toLowerCase()]
    return (
      n !== void 0
        ? this.setHex(n, e)
        : console.warn('THREE.Color: Unknown color ' + t),
      this
    )
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b)
  }
  copy(t) {
    return (this.r = t.r), (this.g = t.g), (this.b = t.b), this
  }
  copySRGBToLinear(t) {
    return (this.r = Mh(t.r)), (this.g = Mh(t.g)), (this.b = Mh(t.b)), this
  }
  copyLinearToSRGB(t) {
    return (this.r = F_(t.r)), (this.g = F_(t.g)), (this.b = F_(t.b)), this
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this
  }
  getHex(t = cn) {
    return (
      Be.fromWorkingColorSpace(xr.copy(this), t),
      Math.round(zn(xr.r * 255, 0, 255)) * 65536 +
        Math.round(zn(xr.g * 255, 0, 255)) * 256 +
        Math.round(zn(xr.b * 255, 0, 255))
    )
  }
  getHexString(t = cn) {
    return ('000000' + this.getHex(t).toString(16)).slice(-6)
  }
  getHSL(t, e = Be.workingColorSpace) {
    Be.fromWorkingColorSpace(xr.copy(this), e)
    const n = xr.r,
      i = xr.g,
      a = xr.b,
      o = Math.max(n, i, a),
      s = Math.min(n, i, a)
    let l, u
    const c = (s + o) / 2
    if (s === o) (l = 0), (u = 0)
    else {
      const h = o - s
      switch (((u = c <= 0.5 ? h / (o + s) : h / (2 - o - s)), o)) {
        case n:
          l = (i - a) / h + (i < a ? 6 : 0)
          break
        case i:
          l = (a - n) / h + 2
          break
        case a:
          l = (n - i) / h + 4
          break
      }
      l /= 6
    }
    return (t.h = l), (t.s = u), (t.l = c), t
  }
  getRGB(t, e = Be.workingColorSpace) {
    return (
      Be.fromWorkingColorSpace(xr.copy(this), e),
      (t.r = xr.r),
      (t.g = xr.g),
      (t.b = xr.b),
      t
    )
  }
  getStyle(t = cn) {
    Be.fromWorkingColorSpace(xr.copy(this), t)
    const e = xr.r,
      n = xr.g,
      i = xr.b
    return t !== cn
      ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(
          i * 255,
        )})`
  }
  offsetHSL(t, e, n) {
    return this.getHSL(ds), this.setHSL(ds.h + t, ds.s + e, ds.l + n)
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
  lerpColors(t, e, n) {
    return (
      (this.r = t.r + (e.r - t.r) * n),
      (this.g = t.g + (e.g - t.g) * n),
      (this.b = t.b + (e.b - t.b) * n),
      this
    )
  }
  lerpHSL(t, e) {
    this.getHSL(ds), t.getHSL(Xv)
    const n = $d(ds.h, Xv.h, e),
      i = $d(ds.s, Xv.s, e),
      a = $d(ds.l, Xv.l, e)
    return this.setHSL(n, i, a), this
  }
  setFromVector3(t) {
    return (this.r = t.x), (this.g = t.y), (this.b = t.z), this
  }
  applyMatrix3(t) {
    const e = this.r,
      n = this.g,
      i = this.b,
      a = t.elements
    return (
      (this.r = a[0] * e + a[3] * n + a[6] * i),
      (this.g = a[1] * e + a[4] * n + a[7] * i),
      (this.b = a[2] * e + a[5] * n + a[8] * i),
      this
    )
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
      (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
    )
  }
  toJSON() {
    return this.getHex()
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b
  }
}
const xr = new qt()
qt.NAMES = Jk
let $6 = 0
class ji extends Ju {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', {
        value: $6++,
      }),
      (this.uuid = Ki()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = bh),
      (this.side = $o),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = vA),
      (this.blendDst = gA),
      (this.blendEquation = uu),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new qt(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = dy),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = e2),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = dc),
      (this.stencilZFail = dc),
      (this.stencilZPass = dc),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0)
  }
  get alphaTest() {
    return this._alphaTest
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t)
  }
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString()
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e]
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${e}' has value of undefined.`,
          )
          continue
        }
        const i = this[e]
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${e}' is not a property of THREE.${this.type}.`,
          )
          continue
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[e] = n)
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string'
    e &&
      (t = {
        textures: {},
        images: {},
      })
    const n = {
      metadata: {
        version: 4.6,
        type: 'Material',
        generator: 'Material.toJSON',
      },
    }
    ;(n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== '' && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(t).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(t).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(t).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(t).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(t).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(t).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(t).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(t).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(t).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== bh && (n.blending = this.blending),
      this.side !== $o && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== vA && (n.blendSrc = this.blendSrc),
      this.blendDst !== gA && (n.blendDst = this.blendDst),
      this.blendEquation !== uu && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== dy && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== e2 && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== dc && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== dc && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== dc && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData)
    function i(a) {
      const o = []
      for (const s in a) {
        const l = a[s]
        delete l.metadata, o.push(l)
      }
      return o
    }
    if (e) {
      const a = i(t.textures),
        o = i(t.images)
      a.length > 0 && (n.textures = a), o.length > 0 && (n.images = o)
    }
    return n
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(t) {
    ;(this.name = t.name),
      (this.blending = t.blending),
      (this.side = t.side),
      (this.vertexColors = t.vertexColors),
      (this.opacity = t.opacity),
      (this.transparent = t.transparent),
      (this.blendSrc = t.blendSrc),
      (this.blendDst = t.blendDst),
      (this.blendEquation = t.blendEquation),
      (this.blendSrcAlpha = t.blendSrcAlpha),
      (this.blendDstAlpha = t.blendDstAlpha),
      (this.blendEquationAlpha = t.blendEquationAlpha),
      this.blendColor.copy(t.blendColor),
      (this.blendAlpha = t.blendAlpha),
      (this.depthFunc = t.depthFunc),
      (this.depthTest = t.depthTest),
      (this.depthWrite = t.depthWrite),
      (this.stencilWriteMask = t.stencilWriteMask),
      (this.stencilFunc = t.stencilFunc),
      (this.stencilRef = t.stencilRef),
      (this.stencilFuncMask = t.stencilFuncMask),
      (this.stencilFail = t.stencilFail),
      (this.stencilZFail = t.stencilZFail),
      (this.stencilZPass = t.stencilZPass),
      (this.stencilWrite = t.stencilWrite)
    const e = t.clippingPlanes
    let n = null
    if (e !== null) {
      const i = e.length
      n = new Array(i)
      for (let a = 0; a !== i; ++a) n[a] = e[a].clone()
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = t.clipIntersection),
      (this.clipShadows = t.clipShadows),
      (this.shadowSide = t.shadowSide),
      (this.colorWrite = t.colorWrite),
      (this.precision = t.precision),
      (this.polygonOffset = t.polygonOffset),
      (this.polygonOffsetFactor = t.polygonOffsetFactor),
      (this.polygonOffsetUnits = t.polygonOffsetUnits),
      (this.dithering = t.dithering),
      (this.alphaTest = t.alphaTest),
      (this.alphaHash = t.alphaHash),
      (this.alphaToCoverage = t.alphaToCoverage),
      (this.premultipliedAlpha = t.premultipliedAlpha),
      (this.forceSinglePass = t.forceSinglePass),
      (this.visible = t.visible),
      (this.toneMapped = t.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      this
    )
  }
  dispose() {
    this.dispatchEvent({
      type: 'dispose',
    })
  }
  set needsUpdate(t) {
    t === !0 && this.version++
  }
  onBuild() {
    console.warn('Material: onBuild() has been removed.')
  }
  onBeforeRender() {
    console.warn('Material: onBeforeRender() has been removed.')
  }
}
class on extends ji {
  constructor(t) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new qt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ma()),
      (this.combine = AM),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.fog = !0),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    )
  }
}
const kn = new U(),
  Yv = new pt()
class ir {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        'THREE.BufferAttribute: array should be a Typed Array.',
      )
    ;(this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = t),
      (this.itemSize = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.normalized = n),
      (this.usage = YA),
      (this._updateRange = {
        offset: 0,
        count: -1,
      }),
      (this.updateRanges = []),
      (this.gpuType = ya),
      (this.version = 0)
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++
  }
  get updateRange() {
    return (
      OM(
        'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.',
      ),
      this._updateRange
    )
  }
  setUsage(t) {
    return (this.usage = t), this
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({
      start: t,
      count: e,
    })
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    )
  }
  copyAt(t, e, n) {
    ;(t *= this.itemSize), (n *= e.itemSize)
    for (let i = 0, a = this.itemSize; i < a; i++)
      this.array[t + i] = e.array[n + i]
    return this
  }
  copyArray(t) {
    return this.array.set(t), this
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        Yv.fromBufferAttribute(this, e),
          Yv.applyMatrix3(t),
          this.setXY(e, Yv.x, Yv.y)
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        kn.fromBufferAttribute(this, e),
          kn.applyMatrix3(t),
          this.setXYZ(e, kn.x, kn.y, kn.z)
    return this
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      kn.fromBufferAttribute(this, e),
        kn.applyMatrix4(t),
        this.setXYZ(e, kn.x, kn.y, kn.z)
    return this
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      kn.fromBufferAttribute(this, e),
        kn.applyNormalMatrix(t),
        this.setXYZ(e, kn.x, kn.y, kn.z)
    return this
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      kn.fromBufferAttribute(this, e),
        kn.transformDirection(t),
        this.setXYZ(e, kn.x, kn.y, kn.z)
    return this
  }
  set(t, e = 0) {
    return this.array.set(t, e), this
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e]
    return this.normalized && (n = ma(n, this.array)), n
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = We(n, this.array)),
      (this.array[t * this.itemSize + e] = n),
      this
    )
  }
  getX(t) {
    let e = this.array[t * this.itemSize]
    return this.normalized && (e = ma(e, this.array)), e
  }
  setX(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    )
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1]
    return this.normalized && (e = ma(e, this.array)), e
  }
  setY(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    )
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2]
    return this.normalized && (e = ma(e, this.array)), e
  }
  setZ(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    )
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3]
    return this.normalized && (e = ma(e, this.array)), e
  }
  setW(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    )
  }
  setXY(t, e, n) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = We(e, this.array)), (n = We(n, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      this
    )
  }
  setXYZ(t, e, n, i) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = We(e, this.array)),
        (n = We(n, this.array)),
        (i = We(i, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      this
    )
  }
  setXYZW(t, e, n, i, a) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = We(e, this.array)),
        (n = We(n, this.array)),
        (i = We(i, this.array)),
        (a = We(a, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      (this.array[t + 3] = a),
      this
    )
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this)
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    }
    return (
      this.name !== '' && (t.name = this.name),
      this.usage !== YA && (t.usage = this.usage),
      t
    )
  }
}
class Qk extends ir {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n)
  }
}
class tB extends ir {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n)
  }
}
class nn extends ir {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n)
  }
}
let q6 = 0
const Li = new ae(),
  J_ = new Fe(),
  bc = new U(),
  fi = new Ei(),
  zf = new Ei(),
  jn = new U()
class Mn extends Ju {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', {
        value: q6++,
      }),
      (this.uuid = Ki()),
      (this.name = ''),
      (this.type = 'BufferGeometry'),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = {
        start: 0,
        count: 1 / 0,
      }),
      (this.userData = {})
  }
  getIndex() {
    return this.index
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (Zk(t) ? tB : Qk)(t, 1))
        : (this.index = t),
      this
    )
  }
  getAttribute(t) {
    return this.attributes[t]
  }
  setAttribute(t, e) {
    return (this.attributes[t] = e), this
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n,
    })
  }
  clearGroups() {
    this.groups = []
  }
  setDrawRange(t, e) {
    ;(this.drawRange.start = t), (this.drawRange.count = e)
  }
  applyMatrix4(t) {
    const e = this.attributes.position
    e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0))
    const n = this.attributes.normal
    if (n !== void 0) {
      const a = new _e().getNormalMatrix(t)
      n.applyNormalMatrix(a), (n.needsUpdate = !0)
    }
    const i = this.attributes.tangent
    return (
      i !== void 0 && (i.transformDirection(t), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    )
  }
  applyQuaternion(t) {
    return Li.makeRotationFromQuaternion(t), this.applyMatrix4(Li), this
  }
  rotateX(t) {
    return Li.makeRotationX(t), this.applyMatrix4(Li), this
  }
  rotateY(t) {
    return Li.makeRotationY(t), this.applyMatrix4(Li), this
  }
  rotateZ(t) {
    return Li.makeRotationZ(t), this.applyMatrix4(Li), this
  }
  translate(t, e, n) {
    return Li.makeTranslation(t, e, n), this.applyMatrix4(Li), this
  }
  scale(t, e, n) {
    return Li.makeScale(t, e, n), this.applyMatrix4(Li), this
  }
  lookAt(t) {
    return J_.lookAt(t), J_.updateMatrix(), this.applyMatrix4(J_.matrix), this
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(bc).negate(),
      this.translate(bc.x, bc.y, bc.z),
      this
    )
  }
  setFromPoints(t) {
    const e = []
    for (let n = 0, i = t.length; n < i; n++) {
      const a = t[n]
      e.push(a.x, a.y, a.z || 0)
    }
    return this.setAttribute('position', new nn(e, 3)), this
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ei())
    const t = this.attributes.position,
      e = this.morphAttributes.position
    if (t && t.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.',
        this,
      ),
        this.boundingBox.set(
          new U(-1 / 0, -1 / 0, -1 / 0),
          new U(1 / 0, 1 / 0, 1 / 0),
        )
      return
    }
    if (t !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(t), e))
        for (let n = 0, i = e.length; n < i; n++) {
          const a = e[n]
          fi.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (jn.addVectors(this.boundingBox.min, fi.min),
                this.boundingBox.expandByPoint(jn),
                jn.addVectors(this.boundingBox.max, fi.max),
                this.boundingBox.expandByPoint(jn))
              : (this.boundingBox.expandByPoint(fi.min),
                this.boundingBox.expandByPoint(fi.max))
        }
    } else this.boundingBox.makeEmpty()
    ;(isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      )
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new na())
    const t = this.attributes.position,
      e = this.morphAttributes.position
    if (t && t.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.',
        this,
      ),
        this.boundingSphere.set(new U(), 1 / 0)
      return
    }
    if (t) {
      const n = this.boundingSphere.center
      if ((fi.setFromBufferAttribute(t), e))
        for (let a = 0, o = e.length; a < o; a++) {
          const s = e[a]
          zf.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (jn.addVectors(fi.min, zf.min),
                fi.expandByPoint(jn),
                jn.addVectors(fi.max, zf.max),
                fi.expandByPoint(jn))
              : (fi.expandByPoint(zf.min), fi.expandByPoint(zf.max))
        }
      fi.getCenter(n)
      let i = 0
      for (let a = 0, o = t.count; a < o; a++)
        jn.fromBufferAttribute(t, a), (i = Math.max(i, n.distanceToSquared(jn)))
      if (e)
        for (let a = 0, o = e.length; a < o; a++) {
          const s = e[a],
            l = this.morphTargetsRelative
          for (let u = 0, c = s.count; u < c; u++)
            jn.fromBufferAttribute(s, u),
              l && (bc.fromBufferAttribute(t, u), jn.add(bc)),
              (i = Math.max(i, n.distanceToSquared(jn)))
        }
      ;(this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          )
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes
    if (
      t === null ||
      e.position === void 0 ||
      e.normal === void 0 ||
      e.uv === void 0
    ) {
      console.error(
        'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)',
      )
      return
    }
    const n = e.position,
      i = e.normal,
      a = e.uv
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new ir(new Float32Array(4 * n.count), 4))
    const o = this.getAttribute('tangent'),
      s = [],
      l = []
    for (let T = 0; T < n.count; T++) (s[T] = new U()), (l[T] = new U())
    const u = new U(),
      c = new U(),
      h = new U(),
      f = new pt(),
      d = new pt(),
      p = new pt(),
      g = new U(),
      v = new U()
    function m(T, w, M) {
      u.fromBufferAttribute(n, T),
        c.fromBufferAttribute(n, w),
        h.fromBufferAttribute(n, M),
        f.fromBufferAttribute(a, T),
        d.fromBufferAttribute(a, w),
        p.fromBufferAttribute(a, M),
        c.sub(u),
        h.sub(u),
        d.sub(f),
        p.sub(f)
      const C = 1 / (d.x * p.y - p.x * d.y)
      isFinite(C) &&
        (g
          .copy(c)
          .multiplyScalar(p.y)
          .addScaledVector(h, -d.y)
          .multiplyScalar(C),
        v
          .copy(h)
          .multiplyScalar(d.x)
          .addScaledVector(c, -p.x)
          .multiplyScalar(C),
        s[T].add(g),
        s[w].add(g),
        s[M].add(g),
        l[T].add(v),
        l[w].add(v),
        l[M].add(v))
    }
    let y = this.groups
    y.length === 0 &&
      (y = [
        {
          start: 0,
          count: t.count,
        },
      ])
    for (let T = 0, w = y.length; T < w; ++T) {
      const M = y[T],
        C = M.start,
        E = M.count
      for (let D = C, P = C + E; D < P; D += 3)
        m(t.getX(D + 0), t.getX(D + 1), t.getX(D + 2))
    }
    const _ = new U(),
      x = new U(),
      A = new U(),
      S = new U()
    function b(T) {
      A.fromBufferAttribute(i, T), S.copy(A)
      const w = s[T]
      _.copy(w),
        _.sub(A.multiplyScalar(A.dot(w))).normalize(),
        x.crossVectors(S, w)
      const C = x.dot(l[T]) < 0 ? -1 : 1
      o.setXYZW(T, _.x, _.y, _.z, C)
    }
    for (let T = 0, w = y.length; T < w; ++T) {
      const M = y[T],
        C = M.start,
        E = M.count
      for (let D = C, P = C + E; D < P; D += 3)
        b(t.getX(D + 0)), b(t.getX(D + 1)), b(t.getX(D + 2))
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute('position')
    if (e !== void 0) {
      let n = this.getAttribute('normal')
      if (n === void 0)
        (n = new ir(new Float32Array(e.count * 3), 3)),
          this.setAttribute('normal', n)
      else for (let f = 0, d = n.count; f < d; f++) n.setXYZ(f, 0, 0, 0)
      const i = new U(),
        a = new U(),
        o = new U(),
        s = new U(),
        l = new U(),
        u = new U(),
        c = new U(),
        h = new U()
      if (t)
        for (let f = 0, d = t.count; f < d; f += 3) {
          const p = t.getX(f + 0),
            g = t.getX(f + 1),
            v = t.getX(f + 2)
          i.fromBufferAttribute(e, p),
            a.fromBufferAttribute(e, g),
            o.fromBufferAttribute(e, v),
            c.subVectors(o, a),
            h.subVectors(i, a),
            c.cross(h),
            s.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, g),
            u.fromBufferAttribute(n, v),
            s.add(c),
            l.add(c),
            u.add(c),
            n.setXYZ(p, s.x, s.y, s.z),
            n.setXYZ(g, l.x, l.y, l.z),
            n.setXYZ(v, u.x, u.y, u.z)
        }
      else
        for (let f = 0, d = e.count; f < d; f += 3)
          i.fromBufferAttribute(e, f + 0),
            a.fromBufferAttribute(e, f + 1),
            o.fromBufferAttribute(e, f + 2),
            c.subVectors(o, a),
            h.subVectors(i, a),
            c.cross(h),
            n.setXYZ(f + 0, c.x, c.y, c.z),
            n.setXYZ(f + 1, c.x, c.y, c.z),
            n.setXYZ(f + 2, c.x, c.y, c.z)
      this.normalizeNormals(), (n.needsUpdate = !0)
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal
    for (let e = 0, n = t.count; e < n; e++)
      jn.fromBufferAttribute(t, e),
        jn.normalize(),
        t.setXYZ(e, jn.x, jn.y, jn.z)
  }
  toNonIndexed() {
    function t(s, l) {
      const u = s.array,
        c = s.itemSize,
        h = s.normalized,
        f = new u.constructor(l.length * c)
      let d = 0,
        p = 0
      for (let g = 0, v = l.length; g < v; g++) {
        s.isInterleavedBufferAttribute
          ? (d = l[g] * s.data.stride + s.offset)
          : (d = l[g] * c)
        for (let m = 0; m < c; m++) f[p++] = u[d++]
      }
      return new ir(f, c, h)
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.',
        ),
        this
      )
    const e = new Mn(),
      n = this.index.array,
      i = this.attributes
    for (const s in i) {
      const l = i[s],
        u = t(l, n)
      e.setAttribute(s, u)
    }
    const a = this.morphAttributes
    for (const s in a) {
      const l = [],
        u = a[s]
      for (let c = 0, h = u.length; c < h; c++) {
        const f = u[c],
          d = t(f, n)
        l.push(d)
      }
      e.morphAttributes[s] = l
    }
    e.morphTargetsRelative = this.morphTargetsRelative
    const o = this.groups
    for (let s = 0, l = o.length; s < l; s++) {
      const u = o[s]
      e.addGroup(u.start, u.count, u.materialIndex)
    }
    return e
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: 'BufferGeometry',
        generator: 'BufferGeometry.toJSON',
      },
    }
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      this.name !== '' && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters
      for (const u in l) l[u] !== void 0 && (t[u] = l[u])
      return t
    }
    t.data = {
      attributes: {},
    }
    const e = this.index
    e !== null &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      })
    const n = this.attributes
    for (const l in n) {
      const u = n[l]
      t.data.attributes[l] = u.toJSON(t.data)
    }
    const i = {}
    let a = !1
    for (const l in this.morphAttributes) {
      const u = this.morphAttributes[l],
        c = []
      for (let h = 0, f = u.length; h < f; h++) {
        const d = u[h]
        c.push(d.toJSON(t.data))
      }
      c.length > 0 && ((i[l] = c), (a = !0))
    }
    a &&
      ((t.data.morphAttributes = i),
      (t.data.morphTargetsRelative = this.morphTargetsRelative))
    const o = this.groups
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)))
    const s = this.boundingSphere
    return (
      s !== null &&
        (t.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      t
    )
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(t) {
    ;(this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null)
    const e = {}
    this.name = t.name
    const n = t.index
    n !== null && this.setIndex(n.clone(e))
    const i = t.attributes
    for (const u in i) {
      const c = i[u]
      this.setAttribute(u, c.clone(e))
    }
    const a = t.morphAttributes
    for (const u in a) {
      const c = [],
        h = a[u]
      for (let f = 0, d = h.length; f < d; f++) c.push(h[f].clone(e))
      this.morphAttributes[u] = c
    }
    this.morphTargetsRelative = t.morphTargetsRelative
    const o = t.groups
    for (let u = 0, c = o.length; u < c; u++) {
      const h = o[u]
      this.addGroup(h.start, h.count, h.materialIndex)
    }
    const s = t.boundingBox
    s !== null && (this.boundingBox = s.clone())
    const l = t.boundingSphere
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    )
  }
  dispose() {
    this.dispatchEvent({
      type: 'dispose',
    })
  }
}
const g2 = new ae(),
  Al = new hf(),
  $v = new na(),
  m2 = new U(),
  wc = new U(),
  Mc = new U(),
  Tc = new U(),
  Q_ = new U(),
  qv = new U(),
  Zv = new pt(),
  Kv = new pt(),
  jv = new pt(),
  y2 = new U(),
  _2 = new U(),
  x2 = new U(),
  Jv = new U(),
  Qv = new U()
class De extends Fe {
  constructor(t = new Mn(), e = new on()) {
    super(),
      (this.isMesh = !0),
      (this.type = 'Mesh'),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets()
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
      t.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          t.morphTargetDictionary,
        )),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    )
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      n = Object.keys(e)
    if (n.length > 0) {
      const i = e[n[0]]
      if (i !== void 0) {
        ;(this.morphTargetInfluences = []), (this.morphTargetDictionary = {})
        for (let a = 0, o = i.length; a < o; a++) {
          const s = i[a].name || String(a)
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = a)
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry,
      i = n.attributes.position,
      a = n.morphAttributes.position,
      o = n.morphTargetsRelative
    e.fromBufferAttribute(i, t)
    const s = this.morphTargetInfluences
    if (a && s) {
      qv.set(0, 0, 0)
      for (let l = 0, u = a.length; l < u; l++) {
        const c = s[l],
          h = a[l]
        c !== 0 &&
          (Q_.fromBufferAttribute(h, t),
          o ? qv.addScaledVector(Q_, c) : qv.addScaledVector(Q_.sub(e), c))
      }
      e.add(qv)
    }
    return e
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.material,
      a = this.matrixWorld
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      $v.copy(n.boundingSphere),
      $v.applyMatrix4(a),
      Al.copy(t.ray).recast(t.near),
      !(
        $v.containsPoint(Al.origin) === !1 &&
        (Al.intersectSphere($v, m2) === null ||
          Al.origin.distanceToSquared(m2) > (t.far - t.near) ** 2)
      ) &&
        (g2.copy(a).invert(),
        Al.copy(t.ray).applyMatrix4(g2),
        !(n.boundingBox !== null && Al.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(t, e, Al)))
  }
  _computeIntersections(t, e, n) {
    let i
    const a = this.geometry,
      o = this.material,
      s = a.index,
      l = a.attributes.position,
      u = a.attributes.uv,
      c = a.attributes.uv1,
      h = a.attributes.normal,
      f = a.groups,
      d = a.drawRange
    if (s !== null)
      if (Array.isArray(o))
        for (let p = 0, g = f.length; p < g; p++) {
          const v = f[p],
            m = o[v.materialIndex],
            y = Math.max(v.start, d.start),
            _ = Math.min(
              s.count,
              Math.min(v.start + v.count, d.start + d.count),
            )
          for (let x = y, A = _; x < A; x += 3) {
            const S = s.getX(x),
              b = s.getX(x + 1),
              T = s.getX(x + 2)
            ;(i = tg(this, m, t, n, u, c, h, S, b, T)),
              i &&
                ((i.faceIndex = Math.floor(x / 3)),
                (i.face.materialIndex = v.materialIndex),
                e.push(i))
          }
        }
      else {
        const p = Math.max(0, d.start),
          g = Math.min(s.count, d.start + d.count)
        for (let v = p, m = g; v < m; v += 3) {
          const y = s.getX(v),
            _ = s.getX(v + 1),
            x = s.getX(v + 2)
          ;(i = tg(this, o, t, n, u, c, h, y, _, x)),
            i && ((i.faceIndex = Math.floor(v / 3)), e.push(i))
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let p = 0, g = f.length; p < g; p++) {
          const v = f[p],
            m = o[v.materialIndex],
            y = Math.max(v.start, d.start),
            _ = Math.min(
              l.count,
              Math.min(v.start + v.count, d.start + d.count),
            )
          for (let x = y, A = _; x < A; x += 3) {
            const S = x,
              b = x + 1,
              T = x + 2
            ;(i = tg(this, m, t, n, u, c, h, S, b, T)),
              i &&
                ((i.faceIndex = Math.floor(x / 3)),
                (i.face.materialIndex = v.materialIndex),
                e.push(i))
          }
        }
      else {
        const p = Math.max(0, d.start),
          g = Math.min(l.count, d.start + d.count)
        for (let v = p, m = g; v < m; v += 3) {
          const y = v,
            _ = v + 1,
            x = v + 2
          ;(i = tg(this, o, t, n, u, c, h, y, _, x)),
            i && ((i.faceIndex = Math.floor(v / 3)), e.push(i))
        }
      }
  }
}
function Z6(r, t, e, n, i, a, o, s) {
  let l
  if (
    (t.side === Qr
      ? (l = n.intersectTriangle(o, a, i, !0, s))
      : (l = n.intersectTriangle(i, a, o, t.side === $o, s)),
    l === null)
  )
    return null
  Qv.copy(s), Qv.applyMatrix4(r.matrixWorld)
  const u = e.ray.origin.distanceTo(Qv)
  return u < e.near || u > e.far
    ? null
    : {
        distance: u,
        point: Qv.clone(),
        object: r,
      }
}
function tg(r, t, e, n, i, a, o, s, l, u) {
  r.getVertexPosition(s, wc),
    r.getVertexPosition(l, Mc),
    r.getVertexPosition(u, Tc)
  const c = Z6(r, t, e, n, wc, Mc, Tc, Jv)
  if (c) {
    i &&
      (Zv.fromBufferAttribute(i, s),
      Kv.fromBufferAttribute(i, l),
      jv.fromBufferAttribute(i, u),
      (c.uv = Ed.getInterpolation(Jv, wc, Mc, Tc, Zv, Kv, jv, new pt()))),
      a &&
        (Zv.fromBufferAttribute(a, s),
        Kv.fromBufferAttribute(a, l),
        jv.fromBufferAttribute(a, u),
        (c.uv1 = Ed.getInterpolation(Jv, wc, Mc, Tc, Zv, Kv, jv, new pt()))),
      o &&
        (y2.fromBufferAttribute(o, s),
        _2.fromBufferAttribute(o, l),
        x2.fromBufferAttribute(o, u),
        (c.normal = Ed.getInterpolation(Jv, wc, Mc, Tc, y2, _2, x2, new U())),
        c.normal.dot(n.direction) > 0 && c.normal.multiplyScalar(-1))
    const h = {
      a: s,
      b: l,
      c: u,
      normal: new U(),
      materialIndex: 0,
    }
    Ed.getNormal(wc, Mc, Tc, h.normal), (c.face = h)
  }
  return c
}
class fv extends Mn {
  constructor(t = 1, e = 1, n = 1, i = 1, a = 1, o = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: a,
        depthSegments: o,
      })
    const s = this
    ;(i = Math.floor(i)), (a = Math.floor(a)), (o = Math.floor(o))
    const l = [],
      u = [],
      c = [],
      h = []
    let f = 0,
      d = 0
    p('z', 'y', 'x', -1, -1, n, e, t, o, a, 0),
      p('z', 'y', 'x', 1, -1, n, e, -t, o, a, 1),
      p('x', 'z', 'y', 1, 1, t, n, e, i, o, 2),
      p('x', 'z', 'y', 1, -1, t, n, -e, i, o, 3),
      p('x', 'y', 'z', 1, -1, t, e, n, i, a, 4),
      p('x', 'y', 'z', -1, -1, t, e, -n, i, a, 5),
      this.setIndex(l),
      this.setAttribute('position', new nn(u, 3)),
      this.setAttribute('normal', new nn(c, 3)),
      this.setAttribute('uv', new nn(h, 2))
    function p(g, v, m, y, _, x, A, S, b, T, w) {
      const M = x / b,
        C = A / T,
        E = x / 2,
        D = A / 2,
        P = S / 2,
        L = b + 1,
        I = T + 1
      let F = 0,
        k = 0
      const V = new U()
      for (let H = 0; H < I; H++) {
        const Y = H * C - D
        for (let K = 0; K < L; K++) {
          const ut = K * M - E
          ;(V[g] = ut * y),
            (V[v] = Y * _),
            (V[m] = P),
            u.push(V.x, V.y, V.z),
            (V[g] = 0),
            (V[v] = 0),
            (V[m] = S > 0 ? 1 : -1),
            c.push(V.x, V.y, V.z),
            h.push(K / b),
            h.push(1 - H / T),
            (F += 1)
        }
      }
      for (let H = 0; H < T; H++)
        for (let Y = 0; Y < b; Y++) {
          const K = f + Y + L * H,
            ut = f + Y + L * (H + 1),
            W = f + (Y + 1) + L * (H + 1),
            Z = f + (Y + 1) + L * H
          l.push(K, ut, Z), l.push(ut, W, Z), (k += 6)
        }
      s.addGroup(d, k, w), (d += k), (f += F)
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    )
  }
  static fromJSON(t) {
    return new fv(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments,
    )
  }
}
function Hh(r) {
  const t = {}
  for (const e in r) {
    t[e] = {}
    for (const n in r[e]) {
      const i = r[e][n]
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().',
            ),
            (t[e][n] = null))
          : (t[e][n] = i.clone())
        : Array.isArray(i)
        ? (t[e][n] = i.slice())
        : (t[e][n] = i)
    }
  }
  return t
}
function Ir(r) {
  const t = {}
  for (let e = 0; e < r.length; e++) {
    const n = Hh(r[e])
    for (const i in n) t[i] = n[i]
  }
  return t
}
function K6(r) {
  const t = []
  for (let e = 0; e < r.length; e++) t.push(r[e].clone())
  return t
}
function eB(r) {
  const t = r.getRenderTarget()
  return t === null
    ? r.outputColorSpace
    : t.isXRRenderTarget === !0
    ? t.texture.colorSpace
    : Be.workingColorSpace
}
const kM = {
  clone: Hh,
  merge: Ir,
}
var j6 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  J6 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`
class lo extends ji {
  constructor(t) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = j6),
      (this.fragmentShader = J6),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        clipCullDistance: !1,
        multiDraw: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      t !== void 0 && this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      (this.fragmentShader = t.fragmentShader),
      (this.vertexShader = t.vertexShader),
      (this.uniforms = Hh(t.uniforms)),
      (this.uniformsGroups = K6(t.uniformsGroups)),
      (this.defines = Object.assign({}, t.defines)),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.fog = t.fog),
      (this.lights = t.lights),
      (this.clipping = t.clipping),
      (this.extensions = Object.assign({}, t.extensions)),
      (this.glslVersion = t.glslVersion),
      this
    )
  }
  toJSON(t) {
    const e = super.toJSON(t)
    ;(e.glslVersion = this.glslVersion), (e.uniforms = {})
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value
      o && o.isTexture
        ? (e.uniforms[i] = {
            type: 't',
            value: o.toJSON(t).uuid,
          })
        : o && o.isColor
        ? (e.uniforms[i] = {
            type: 'c',
            value: o.getHex(),
          })
        : o && o.isVector2
        ? (e.uniforms[i] = {
            type: 'v2',
            value: o.toArray(),
          })
        : o && o.isVector3
        ? (e.uniforms[i] = {
            type: 'v3',
            value: o.toArray(),
          })
        : o && o.isVector4
        ? (e.uniforms[i] = {
            type: 'v4',
            value: o.toArray(),
          })
        : o && o.isMatrix3
        ? (e.uniforms[i] = {
            type: 'm3',
            value: o.toArray(),
          })
        : o && o.isMatrix4
        ? (e.uniforms[i] = {
            type: 'm4',
            value: o.toArray(),
          })
        : (e.uniforms[i] = {
            value: o,
          })
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader),
      (e.lights = this.lights),
      (e.clipping = this.clipping)
    const n = {}
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0)
    return Object.keys(n).length > 0 && (e.extensions = n), e
  }
}
let nB = class extends Fe {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new ae()),
      (this.projectionMatrix = new ae()),
      (this.projectionMatrixInverse = new ae()),
      (this.coordinateSystem = zo)
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      (this.coordinateSystem = t.coordinateSystem),
      this
    )
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate()
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert()
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert()
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
const ps = new U(),
  S2 = new pt(),
  A2 = new pt()
class wr extends nB {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix()
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    )
  }
  setFocalLength(t) {
    const e = (0.5 * this.getFilmHeight()) / t
    ;(this.fov = Gh * 2 * Math.atan(e)), this.updateProjectionMatrix()
  }
  getFocalLength() {
    const t = Math.tan(Yd * 0.5 * this.fov)
    return (0.5 * this.getFilmHeight()) / t
  }
  getEffectiveFOV() {
    return Gh * 2 * Math.atan(Math.tan(Yd * 0.5 * this.fov) / this.zoom)
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1)
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1)
  }
  getViewBounds(t, e, n) {
    ps.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      e.set(ps.x, ps.y).multiplyScalar(-t / ps.z),
      ps.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(ps.x, ps.y).multiplyScalar(-t / ps.z)
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, S2, A2), e.subVectors(A2, S2)
  }
  setViewOffset(t, e, n, i, a, o) {
    ;(this.aspect = t / e),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = a),
      (this.view.height = o),
      this.updateProjectionMatrix()
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix()
  }
  updateProjectionMatrix() {
    const t = this.near
    let e = (t * Math.tan(Yd * 0.5 * this.fov)) / this.zoom,
      n = 2 * e,
      i = this.aspect * n,
      a = -0.5 * i
    const o = this.view
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        u = o.fullHeight
      ;(a += (o.offsetX * i) / l),
        (e -= (o.offsetY * n) / u),
        (i *= o.width / l),
        (n *= o.height / u)
    }
    const s = this.filmOffset
    s !== 0 && (a += (t * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        a,
        a + i,
        e,
        e - n,
        t,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
  }
  toJSON(t) {
    const e = super.toJSON(t)
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    )
  }
}
const Cc = -90,
  Ec = 1
class Q6 extends Fe {
  constructor(t, e, n) {
    super(),
      (this.type = 'CubeCamera'),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0)
    const i = new wr(Cc, Ec, t, e)
    ;(i.layers = this.layers), this.add(i)
    const a = new wr(Cc, Ec, t, e)
    ;(a.layers = this.layers), this.add(a)
    const o = new wr(Cc, Ec, t, e)
    ;(o.layers = this.layers), this.add(o)
    const s = new wr(Cc, Ec, t, e)
    ;(s.layers = this.layers), this.add(s)
    const l = new wr(Cc, Ec, t, e)
    ;(l.layers = this.layers), this.add(l)
    const u = new wr(Cc, Ec, t, e)
    ;(u.layers = this.layers), this.add(u)
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem,
      e = this.children.concat(),
      [n, i, a, o, s, l] = e
    for (const u of e) this.remove(u)
    if (t === zo)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        s.up.set(0, 1, 0),
        s.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1)
    else if (t === yy)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        s.up.set(0, -1, 0),
        s.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1)
    else
      throw new Error(
        'THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' +
          t,
      )
    for (const u of e) this.add(u), u.updateMatrixWorld()
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld()
    const {renderTarget: n, activeMipmapLevel: i} = this
    this.coordinateSystem !== t.coordinateSystem &&
      ((this.coordinateSystem = t.coordinateSystem),
      this.updateCoordinateSystem())
    const [a, o, s, l, u, c] = this.children,
      h = t.getRenderTarget(),
      f = t.getActiveCubeFace(),
      d = t.getActiveMipmapLevel(),
      p = t.xr.enabled
    t.xr.enabled = !1
    const g = n.texture.generateMipmaps
    ;(n.texture.generateMipmaps = !1),
      t.setRenderTarget(n, 0, i),
      t.render(e, a),
      t.setRenderTarget(n, 1, i),
      t.render(e, o),
      t.setRenderTarget(n, 2, i),
      t.render(e, s),
      t.setRenderTarget(n, 3, i),
      t.render(e, l),
      t.setRenderTarget(n, 4, i),
      t.render(e, u),
      (n.texture.generateMipmaps = g),
      t.setRenderTarget(n, 5, i),
      t.render(e, c),
      t.setRenderTarget(h, f, d),
      (t.xr.enabled = p),
      (n.texture.needsPMREMUpdate = !0)
  }
}
class rB extends Yn {
  constructor(t, e, n, i, a, o, s, l, u, c) {
    ;(t = t !== void 0 ? t : []),
      (e = e !== void 0 ? e : Fh),
      super(t, e, n, i, a, o, s, l, u, c),
      (this.isCubeTexture = !0),
      (this.flipY = !1)
  }
  get images() {
    return this.image
  }
  set images(t) {
    this.image = t
  }
}
class tW extends Vu {
  constructor(t = 1, e = {}) {
    super(t, t, e), (this.isWebGLCubeRenderTarget = !0)
    const n = {
        width: t,
        height: t,
        depth: 1,
      },
      i = [n, n, n, n, n, n]
    ;(this.texture = new rB(
      i,
      e.mapping,
      e.wrapS,
      e.wrapT,
      e.magFilter,
      e.minFilter,
      e.format,
      e.type,
      e.anisotropy,
      e.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        e.generateMipmaps !== void 0 ? e.generateMipmaps : !1),
      (this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : gi)
  }
  fromEquirectangularTexture(t, e) {
    ;(this.texture.type = e.type),
      (this.texture.colorSpace = e.colorSpace),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter)
    const n = {
        uniforms: {
          tEquirect: {
            value: null,
          },
        },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new fv(5, 5, 5),
      a = new lo({
        name: 'CubemapFromEquirect',
        uniforms: Hh(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Qr,
        blending: Xs,
      })
    a.uniforms.tEquirect.value = e
    const o = new De(i, a),
      s = e.minFilter
    return (
      e.minFilter === Fo && (e.minFilter = gi),
      new Q6(1, 10, this).update(t, o),
      (e.minFilter = s),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    )
  }
  clear(t, e, n, i) {
    const a = t.getRenderTarget()
    for (let o = 0; o < 6; o++) t.setRenderTarget(this, o), t.clear(e, n, i)
    t.setRenderTarget(a)
  }
}
const tx = new U(),
  eW = new U(),
  nW = new _e()
let Cs = class {
  constructor(t = new U(1, 0, 0), e = 0) {
    ;(this.isPlane = !0), (this.normal = t), (this.constant = e)
  }
  set(t, e) {
    return this.normal.copy(t), (this.constant = e), this
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), (this.constant = i), this
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
  }
  setFromCoplanarPoints(t, e, n) {
    const i = tx.subVectors(n, e).cross(eW.subVectors(t, e)).normalize()
    return this.setFromNormalAndCoplanarPoint(i, t), this
  }
  copy(t) {
    return this.normal.copy(t.normal), (this.constant = t.constant), this
  }
  normalize() {
    const t = 1 / this.normal.length()
    return this.normal.multiplyScalar(t), (this.constant *= t), this
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t))
  }
  intersectLine(t, e) {
    const n = t.delta(tx),
      i = this.normal.dot(n)
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null
    const a = -(t.start.dot(this.normal) + this.constant) / i
    return a < 0 || a > 1 ? null : e.copy(t.start).addScaledVector(n, a)
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start),
      n = this.distanceToPoint(t.end)
    return (e < 0 && n > 0) || (n < 0 && e > 0)
  }
  intersectsBox(t) {
    return t.intersectsPlane(this)
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this)
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant)
  }
  applyMatrix4(t, e) {
    const n = e || nW.getNormalMatrix(t),
      i = this.coplanarPoint(tx).applyMatrix4(t),
      a = this.normal.applyMatrix3(n).normalize()
    return (this.constant = -i.dot(a)), this
  }
  translate(t) {
    return (this.constant -= t.dot(this.normal)), this
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
const bl = new na(),
  eg = new U()
class BM {
  constructor(
    t = new Cs(),
    e = new Cs(),
    n = new Cs(),
    i = new Cs(),
    a = new Cs(),
    o = new Cs(),
  ) {
    this.planes = [t, e, n, i, a, o]
  }
  set(t, e, n, i, a, o) {
    const s = this.planes
    return (
      s[0].copy(t),
      s[1].copy(e),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(a),
      s[5].copy(o),
      this
    )
  }
  copy(t) {
    const e = this.planes
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n])
    return this
  }
  setFromProjectionMatrix(t, e = zo) {
    const n = this.planes,
      i = t.elements,
      a = i[0],
      o = i[1],
      s = i[2],
      l = i[3],
      u = i[4],
      c = i[5],
      h = i[6],
      f = i[7],
      d = i[8],
      p = i[9],
      g = i[10],
      v = i[11],
      m = i[12],
      y = i[13],
      _ = i[14],
      x = i[15]
    if (
      (n[0].setComponents(l - a, f - u, v - d, x - m).normalize(),
      n[1].setComponents(l + a, f + u, v + d, x + m).normalize(),
      n[2].setComponents(l + o, f + c, v + p, x + y).normalize(),
      n[3].setComponents(l - o, f - c, v - p, x - y).normalize(),
      n[4].setComponents(l - s, f - h, v - g, x - _).normalize(),
      e === zo)
    )
      n[5].setComponents(l + s, f + h, v + g, x + _).normalize()
    else if (e === yy) n[5].setComponents(s, h, g, _).normalize()
    else
      throw new Error(
        'THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' +
          e,
      )
    return this
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(),
        bl.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)
    else {
      const e = t.geometry
      e.boundingSphere === null && e.computeBoundingSphere(),
        bl.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)
    }
    return this.intersectsSphere(bl)
  }
  intersectsSprite(t) {
    return (
      bl.center.set(0, 0, 0),
      (bl.radius = 0.7071067811865476),
      bl.applyMatrix4(t.matrixWorld),
      this.intersectsSphere(bl)
    )
  }
  intersectsSphere(t) {
    const e = this.planes,
      n = t.center,
      i = -t.radius
    for (let a = 0; a < 6; a++) if (e[a].distanceToPoint(n) < i) return !1
    return !0
  }
  intersectsBox(t) {
    const e = this.planes
    for (let n = 0; n < 6; n++) {
      const i = e[n]
      if (
        ((eg.x = i.normal.x > 0 ? t.max.x : t.min.x),
        (eg.y = i.normal.y > 0 ? t.max.y : t.min.y),
        (eg.z = i.normal.z > 0 ? t.max.z : t.min.z),
        i.distanceToPoint(eg) < 0)
      )
        return !1
    }
    return !0
  }
  containsPoint(t) {
    const e = this.planes
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1
    return !0
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
function iB() {
  let r = null,
    t = !1,
    e = null,
    n = null
  function i(a, o) {
    e(a, o), (n = r.requestAnimationFrame(i))
  }
  return {
    start: function () {
      t !== !0 && e !== null && ((n = r.requestAnimationFrame(i)), (t = !0))
    },
    stop: function () {
      r.cancelAnimationFrame(n), (t = !1)
    },
    setAnimationLoop: function (a) {
      e = a
    },
    setContext: function (a) {
      r = a
    },
  }
}
function rW(r) {
  const t = new WeakMap()
  function e(s, l) {
    const u = s.array,
      c = s.usage,
      h = u.byteLength,
      f = r.createBuffer()
    r.bindBuffer(l, f), r.bufferData(l, u, c), s.onUploadCallback()
    let d
    if (u instanceof Float32Array) d = r.FLOAT
    else if (u instanceof Uint16Array)
      s.isFloat16BufferAttribute ? (d = r.HALF_FLOAT) : (d = r.UNSIGNED_SHORT)
    else if (u instanceof Int16Array) d = r.SHORT
    else if (u instanceof Uint32Array) d = r.UNSIGNED_INT
    else if (u instanceof Int32Array) d = r.INT
    else if (u instanceof Int8Array) d = r.BYTE
    else if (u instanceof Uint8Array) d = r.UNSIGNED_BYTE
    else if (u instanceof Uint8ClampedArray) d = r.UNSIGNED_BYTE
    else
      throw new Error(
        'THREE.WebGLAttributes: Unsupported buffer data format: ' + u,
      )
    return {
      buffer: f,
      type: d,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: s.version,
      size: h,
    }
  }
  function n(s, l, u) {
    const c = l.array,
      h = l._updateRange,
      f = l.updateRanges
    if (
      (r.bindBuffer(u, s),
      h.count === -1 && f.length === 0 && r.bufferSubData(u, 0, c),
      f.length !== 0)
    ) {
      for (let d = 0, p = f.length; d < p; d++) {
        const g = f[d]
        r.bufferSubData(u, g.start * c.BYTES_PER_ELEMENT, c, g.start, g.count)
      }
      l.clearUpdateRanges()
    }
    h.count !== -1 &&
      (r.bufferSubData(u, h.offset * c.BYTES_PER_ELEMENT, c, h.offset, h.count),
      (h.count = -1)),
      l.onUploadCallback()
  }
  function i(s) {
    return s.isInterleavedBufferAttribute && (s = s.data), t.get(s)
  }
  function a(s) {
    s.isInterleavedBufferAttribute && (s = s.data)
    const l = t.get(s)
    l && (r.deleteBuffer(l.buffer), t.delete(s))
  }
  function o(s, l) {
    if (s.isGLBufferAttribute) {
      const c = t.get(s)
      ;(!c || c.version < s.version) &&
        t.set(s, {
          buffer: s.buffer,
          type: s.type,
          bytesPerElement: s.elementSize,
          version: s.version,
        })
      return
    }
    s.isInterleavedBufferAttribute && (s = s.data)
    const u = t.get(s)
    if (u === void 0) t.set(s, e(s, l))
    else if (u.version < s.version) {
      if (u.size !== s.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        )
      n(u.buffer, s, l), (u.version = s.version)
    }
  }
  return {
    get: i,
    remove: a,
    update: o,
  }
}
class Ti extends Mn {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i,
      })
    const a = t / 2,
      o = e / 2,
      s = Math.floor(n),
      l = Math.floor(i),
      u = s + 1,
      c = l + 1,
      h = t / s,
      f = e / l,
      d = [],
      p = [],
      g = [],
      v = []
    for (let m = 0; m < c; m++) {
      const y = m * f - o
      for (let _ = 0; _ < u; _++) {
        const x = _ * h - a
        p.push(x, -y, 0), g.push(0, 0, 1), v.push(_ / s), v.push(1 - m / l)
      }
    }
    for (let m = 0; m < l; m++)
      for (let y = 0; y < s; y++) {
        const _ = y + u * m,
          x = y + u * (m + 1),
          A = y + 1 + u * (m + 1),
          S = y + 1 + u * m
        d.push(_, x, S), d.push(x, A, S)
      }
    this.setIndex(d),
      this.setAttribute('position', new nn(p, 3)),
      this.setAttribute('normal', new nn(g, 3)),
      this.setAttribute('uv', new nn(v, 2))
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    )
  }
  static fromJSON(t) {
    return new Ti(t.width, t.height, t.widthSegments, t.heightSegments)
  }
}
var iW = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  aW = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  oW = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  sW = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  lW = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  uW = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  cW = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  hW = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  fW = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  dW = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  pW = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  vW = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  gW = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  mW = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  yW = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  _W = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  xW = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  SW = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  AW = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  bW = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  wW = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  MW = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  TW = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  CW = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  EW = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  DW = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  LW = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  PW = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  RW = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  IW = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  OW = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  NW = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  kW = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  BW = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,
  FW = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  zW = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  UW = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  VW = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  GW = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  HW = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  WW = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  XW = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  YW = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  $W = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  qW = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  ZW = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  KW = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  jW = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  JW = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  QW = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  t9 = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  e9 = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  n9 = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  r9 = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  i9 = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  a9 = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  o9 = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  s9 = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  l9 = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  u9 = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  c9 = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  h9 = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  f9 = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  d9 = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  p9 = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  v9 = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  g9 = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  m9 = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  y9 = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  _9 = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  x9 = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  S9 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  A9 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  b9 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  w9 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  M9 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  T9 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  C9 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  E9 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  D9 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  L9 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  P9 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  R9 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  I9 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  O9 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  N9 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  k9 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  B9 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  F9 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  z9 = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  U9 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  V9 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  G9 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  H9 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  W9 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  X9 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Y9 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  $9 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  q9 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Z9 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  K9 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  j9 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  J9 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Q9 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  t7 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  e7 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  n7 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`
const r7 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  i7 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  a7 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  o7 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  s7 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  l7 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  u7 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  c7 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  h7 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  f7 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  d7 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  p7 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  v7 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  g7 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  m7 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  y7 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  _7 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  x7 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  S7 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  A7 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  b7 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  w7 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  M7 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  T7 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  C7 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  E7 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  D7 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  L7 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  P7 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  R7 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  I7 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  O7 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  N7 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  k7 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  me = {
    alphahash_fragment: iW,
    alphahash_pars_fragment: aW,
    alphamap_fragment: oW,
    alphamap_pars_fragment: sW,
    alphatest_fragment: lW,
    alphatest_pars_fragment: uW,
    aomap_fragment: cW,
    aomap_pars_fragment: hW,
    batching_pars_vertex: fW,
    batching_vertex: dW,
    begin_vertex: pW,
    beginnormal_vertex: vW,
    bsdfs: gW,
    iridescence_fragment: mW,
    bumpmap_pars_fragment: yW,
    clipping_planes_fragment: _W,
    clipping_planes_pars_fragment: xW,
    clipping_planes_pars_vertex: SW,
    clipping_planes_vertex: AW,
    color_fragment: bW,
    color_pars_fragment: wW,
    color_pars_vertex: MW,
    color_vertex: TW,
    common: CW,
    cube_uv_reflection_fragment: EW,
    defaultnormal_vertex: DW,
    displacementmap_pars_vertex: LW,
    displacementmap_vertex: PW,
    emissivemap_fragment: RW,
    emissivemap_pars_fragment: IW,
    colorspace_fragment: OW,
    colorspace_pars_fragment: NW,
    envmap_fragment: kW,
    envmap_common_pars_fragment: BW,
    envmap_pars_fragment: FW,
    envmap_pars_vertex: zW,
    envmap_physical_pars_fragment: KW,
    envmap_vertex: UW,
    fog_vertex: VW,
    fog_pars_vertex: GW,
    fog_fragment: HW,
    fog_pars_fragment: WW,
    gradientmap_pars_fragment: XW,
    lightmap_pars_fragment: YW,
    lights_lambert_fragment: $W,
    lights_lambert_pars_fragment: qW,
    lights_pars_begin: ZW,
    lights_toon_fragment: jW,
    lights_toon_pars_fragment: JW,
    lights_phong_fragment: QW,
    lights_phong_pars_fragment: t9,
    lights_physical_fragment: e9,
    lights_physical_pars_fragment: n9,
    lights_fragment_begin: r9,
    lights_fragment_maps: i9,
    lights_fragment_end: a9,
    logdepthbuf_fragment: o9,
    logdepthbuf_pars_fragment: s9,
    logdepthbuf_pars_vertex: l9,
    logdepthbuf_vertex: u9,
    map_fragment: c9,
    map_pars_fragment: h9,
    map_particle_fragment: f9,
    map_particle_pars_fragment: d9,
    metalnessmap_fragment: p9,
    metalnessmap_pars_fragment: v9,
    morphinstance_vertex: g9,
    morphcolor_vertex: m9,
    morphnormal_vertex: y9,
    morphtarget_pars_vertex: _9,
    morphtarget_vertex: x9,
    normal_fragment_begin: S9,
    normal_fragment_maps: A9,
    normal_pars_fragment: b9,
    normal_pars_vertex: w9,
    normal_vertex: M9,
    normalmap_pars_fragment: T9,
    clearcoat_normal_fragment_begin: C9,
    clearcoat_normal_fragment_maps: E9,
    clearcoat_pars_fragment: D9,
    iridescence_pars_fragment: L9,
    opaque_fragment: P9,
    packing: R9,
    premultiplied_alpha_fragment: I9,
    project_vertex: O9,
    dithering_fragment: N9,
    dithering_pars_fragment: k9,
    roughnessmap_fragment: B9,
    roughnessmap_pars_fragment: F9,
    shadowmap_pars_fragment: z9,
    shadowmap_pars_vertex: U9,
    shadowmap_vertex: V9,
    shadowmask_pars_fragment: G9,
    skinbase_vertex: H9,
    skinning_pars_vertex: W9,
    skinning_vertex: X9,
    skinnormal_vertex: Y9,
    specularmap_fragment: $9,
    specularmap_pars_fragment: q9,
    tonemapping_fragment: Z9,
    tonemapping_pars_fragment: K9,
    transmission_fragment: j9,
    transmission_pars_fragment: J9,
    uv_pars_fragment: Q9,
    uv_pars_vertex: t7,
    uv_vertex: e7,
    worldpos_vertex: n7,
    background_vert: r7,
    background_frag: i7,
    backgroundCube_vert: a7,
    backgroundCube_frag: o7,
    cube_vert: s7,
    cube_frag: l7,
    depth_vert: u7,
    depth_frag: c7,
    distanceRGBA_vert: h7,
    distanceRGBA_frag: f7,
    equirect_vert: d7,
    equirect_frag: p7,
    linedashed_vert: v7,
    linedashed_frag: g7,
    meshbasic_vert: m7,
    meshbasic_frag: y7,
    meshlambert_vert: _7,
    meshlambert_frag: x7,
    meshmatcap_vert: S7,
    meshmatcap_frag: A7,
    meshnormal_vert: b7,
    meshnormal_frag: w7,
    meshphong_vert: M7,
    meshphong_frag: T7,
    meshphysical_vert: C7,
    meshphysical_frag: E7,
    meshtoon_vert: D7,
    meshtoon_frag: L7,
    points_vert: P7,
    points_frag: R7,
    shadow_vert: I7,
    shadow_frag: O7,
    sprite_vert: N7,
    sprite_frag: k7,
  },
  Rt = {
    common: {
      diffuse: {
        value: new qt(16777215),
      },
      opacity: {
        value: 1,
      },
      map: {
        value: null,
      },
      mapTransform: {
        value: new _e(),
      },
      alphaMap: {
        value: null,
      },
      alphaMapTransform: {
        value: new _e(),
      },
      alphaTest: {
        value: 0,
      },
    },
    specularmap: {
      specularMap: {
        value: null,
      },
      specularMapTransform: {
        value: new _e(),
      },
    },
    envmap: {
      envMap: {
        value: null,
      },
      envMapRotation: {
        value: new _e(),
      },
      flipEnvMap: {
        value: -1,
      },
      reflectivity: {
        value: 1,
      },
      ior: {
        value: 1.5,
      },
      refractionRatio: {
        value: 0.98,
      },
    },
    aomap: {
      aoMap: {
        value: null,
      },
      aoMapIntensity: {
        value: 1,
      },
      aoMapTransform: {
        value: new _e(),
      },
    },
    lightmap: {
      lightMap: {
        value: null,
      },
      lightMapIntensity: {
        value: 1,
      },
      lightMapTransform: {
        value: new _e(),
      },
    },
    bumpmap: {
      bumpMap: {
        value: null,
      },
      bumpMapTransform: {
        value: new _e(),
      },
      bumpScale: {
        value: 1,
      },
    },
    normalmap: {
      normalMap: {
        value: null,
      },
      normalMapTransform: {
        value: new _e(),
      },
      normalScale: {
        value: new pt(1, 1),
      },
    },
    displacementmap: {
      displacementMap: {
        value: null,
      },
      displacementMapTransform: {
        value: new _e(),
      },
      displacementScale: {
        value: 1,
      },
      displacementBias: {
        value: 0,
      },
    },
    emissivemap: {
      emissiveMap: {
        value: null,
      },
      emissiveMapTransform: {
        value: new _e(),
      },
    },
    metalnessmap: {
      metalnessMap: {
        value: null,
      },
      metalnessMapTransform: {
        value: new _e(),
      },
    },
    roughnessmap: {
      roughnessMap: {
        value: null,
      },
      roughnessMapTransform: {
        value: new _e(),
      },
    },
    gradientmap: {
      gradientMap: {
        value: null,
      },
    },
    fog: {
      fogDensity: {
        value: 25e-5,
      },
      fogNear: {
        value: 1,
      },
      fogFar: {
        value: 2e3,
      },
      fogColor: {
        value: new qt(16777215),
      },
    },
    lights: {
      ambientLightColor: {
        value: [],
      },
      lightProbe: {
        value: [],
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {},
        },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: {
        value: [],
      },
      directionalShadowMatrix: {
        value: [],
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: {
        value: [],
      },
      spotShadowMap: {
        value: [],
      },
      spotLightMatrix: {
        value: [],
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {},
        },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: {
        value: [],
      },
      pointShadowMatrix: {
        value: [],
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {},
        },
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {},
        },
      },
      ltc_1: {
        value: null,
      },
      ltc_2: {
        value: null,
      },
    },
    points: {
      diffuse: {
        value: new qt(16777215),
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 1,
      },
      scale: {
        value: 1,
      },
      map: {
        value: null,
      },
      alphaMap: {
        value: null,
      },
      alphaMapTransform: {
        value: new _e(),
      },
      alphaTest: {
        value: 0,
      },
      uvTransform: {
        value: new _e(),
      },
    },
    sprite: {
      diffuse: {
        value: new qt(16777215),
      },
      opacity: {
        value: 1,
      },
      center: {
        value: new pt(0.5, 0.5),
      },
      rotation: {
        value: 0,
      },
      map: {
        value: null,
      },
      mapTransform: {
        value: new _e(),
      },
      alphaMap: {
        value: null,
      },
      alphaMapTransform: {
        value: new _e(),
      },
      alphaTest: {
        value: 0,
      },
    },
  },
  qr = {
    basic: {
      uniforms: Ir([
        Rt.common,
        Rt.specularmap,
        Rt.envmap,
        Rt.aomap,
        Rt.lightmap,
        Rt.fog,
      ]),
      vertexShader: me.meshbasic_vert,
      fragmentShader: me.meshbasic_frag,
    },
    lambert: {
      uniforms: Ir([
        Rt.common,
        Rt.specularmap,
        Rt.envmap,
        Rt.aomap,
        Rt.lightmap,
        Rt.emissivemap,
        Rt.bumpmap,
        Rt.normalmap,
        Rt.displacementmap,
        Rt.fog,
        Rt.lights,
        {
          emissive: {
            value: new qt(0),
          },
        },
      ]),
      vertexShader: me.meshlambert_vert,
      fragmentShader: me.meshlambert_frag,
    },
    phong: {
      uniforms: Ir([
        Rt.common,
        Rt.specularmap,
        Rt.envmap,
        Rt.aomap,
        Rt.lightmap,
        Rt.emissivemap,
        Rt.bumpmap,
        Rt.normalmap,
        Rt.displacementmap,
        Rt.fog,
        Rt.lights,
        {
          emissive: {
            value: new qt(0),
          },
          specular: {
            value: new qt(1118481),
          },
          shininess: {
            value: 30,
          },
        },
      ]),
      vertexShader: me.meshphong_vert,
      fragmentShader: me.meshphong_frag,
    },
    standard: {
      uniforms: Ir([
        Rt.common,
        Rt.envmap,
        Rt.aomap,
        Rt.lightmap,
        Rt.emissivemap,
        Rt.bumpmap,
        Rt.normalmap,
        Rt.displacementmap,
        Rt.roughnessmap,
        Rt.metalnessmap,
        Rt.fog,
        Rt.lights,
        {
          emissive: {
            value: new qt(0),
          },
          roughness: {
            value: 1,
          },
          metalness: {
            value: 0,
          },
          envMapIntensity: {
            value: 1,
          },
        },
      ]),
      vertexShader: me.meshphysical_vert,
      fragmentShader: me.meshphysical_frag,
    },
    toon: {
      uniforms: Ir([
        Rt.common,
        Rt.aomap,
        Rt.lightmap,
        Rt.emissivemap,
        Rt.bumpmap,
        Rt.normalmap,
        Rt.displacementmap,
        Rt.gradientmap,
        Rt.fog,
        Rt.lights,
        {
          emissive: {
            value: new qt(0),
          },
        },
      ]),
      vertexShader: me.meshtoon_vert,
      fragmentShader: me.meshtoon_frag,
    },
    matcap: {
      uniforms: Ir([
        Rt.common,
        Rt.bumpmap,
        Rt.normalmap,
        Rt.displacementmap,
        Rt.fog,
        {
          matcap: {
            value: null,
          },
        },
      ]),
      vertexShader: me.meshmatcap_vert,
      fragmentShader: me.meshmatcap_frag,
    },
    points: {
      uniforms: Ir([Rt.points, Rt.fog]),
      vertexShader: me.points_vert,
      fragmentShader: me.points_frag,
    },
    dashed: {
      uniforms: Ir([
        Rt.common,
        Rt.fog,
        {
          scale: {
            value: 1,
          },
          dashSize: {
            value: 1,
          },
          totalSize: {
            value: 2,
          },
        },
      ]),
      vertexShader: me.linedashed_vert,
      fragmentShader: me.linedashed_frag,
    },
    depth: {
      uniforms: Ir([Rt.common, Rt.displacementmap]),
      vertexShader: me.depth_vert,
      fragmentShader: me.depth_frag,
    },
    normal: {
      uniforms: Ir([
        Rt.common,
        Rt.bumpmap,
        Rt.normalmap,
        Rt.displacementmap,
        {
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: me.meshnormal_vert,
      fragmentShader: me.meshnormal_frag,
    },
    sprite: {
      uniforms: Ir([Rt.sprite, Rt.fog]),
      vertexShader: me.sprite_vert,
      fragmentShader: me.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new _e(),
        },
        t2D: {
          value: null,
        },
        backgroundIntensity: {
          value: 1,
        },
      },
      vertexShader: me.background_vert,
      fragmentShader: me.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: {
          value: null,
        },
        flipEnvMap: {
          value: -1,
        },
        backgroundBlurriness: {
          value: 0,
        },
        backgroundIntensity: {
          value: 1,
        },
        backgroundRotation: {
          value: new _e(),
        },
      },
      vertexShader: me.backgroundCube_vert,
      fragmentShader: me.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: {
          value: null,
        },
        tFlip: {
          value: -1,
        },
        opacity: {
          value: 1,
        },
      },
      vertexShader: me.cube_vert,
      fragmentShader: me.cube_frag,
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null,
        },
      },
      vertexShader: me.equirect_vert,
      fragmentShader: me.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Ir([
        Rt.common,
        Rt.displacementmap,
        {
          referencePosition: {
            value: new U(),
          },
          nearDistance: {
            value: 1,
          },
          farDistance: {
            value: 1e3,
          },
        },
      ]),
      vertexShader: me.distanceRGBA_vert,
      fragmentShader: me.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ir([
        Rt.lights,
        Rt.fog,
        {
          color: {
            value: new qt(0),
          },
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: me.shadow_vert,
      fragmentShader: me.shadow_frag,
    },
  }
qr.physical = {
  uniforms: Ir([
    qr.standard.uniforms,
    {
      clearcoat: {
        value: 0,
      },
      clearcoatMap: {
        value: null,
      },
      clearcoatMapTransform: {
        value: new _e(),
      },
      clearcoatNormalMap: {
        value: null,
      },
      clearcoatNormalMapTransform: {
        value: new _e(),
      },
      clearcoatNormalScale: {
        value: new pt(1, 1),
      },
      clearcoatRoughness: {
        value: 0,
      },
      clearcoatRoughnessMap: {
        value: null,
      },
      clearcoatRoughnessMapTransform: {
        value: new _e(),
      },
      dispersion: {
        value: 0,
      },
      iridescence: {
        value: 0,
      },
      iridescenceMap: {
        value: null,
      },
      iridescenceMapTransform: {
        value: new _e(),
      },
      iridescenceIOR: {
        value: 1.3,
      },
      iridescenceThicknessMinimum: {
        value: 100,
      },
      iridescenceThicknessMaximum: {
        value: 400,
      },
      iridescenceThicknessMap: {
        value: null,
      },
      iridescenceThicknessMapTransform: {
        value: new _e(),
      },
      sheen: {
        value: 0,
      },
      sheenColor: {
        value: new qt(0),
      },
      sheenColorMap: {
        value: null,
      },
      sheenColorMapTransform: {
        value: new _e(),
      },
      sheenRoughness: {
        value: 1,
      },
      sheenRoughnessMap: {
        value: null,
      },
      sheenRoughnessMapTransform: {
        value: new _e(),
      },
      transmission: {
        value: 0,
      },
      transmissionMap: {
        value: null,
      },
      transmissionMapTransform: {
        value: new _e(),
      },
      transmissionSamplerSize: {
        value: new pt(),
      },
      transmissionSamplerMap: {
        value: null,
      },
      thickness: {
        value: 0,
      },
      thicknessMap: {
        value: null,
      },
      thicknessMapTransform: {
        value: new _e(),
      },
      attenuationDistance: {
        value: 0,
      },
      attenuationColor: {
        value: new qt(0),
      },
      specularColor: {
        value: new qt(1, 1, 1),
      },
      specularColorMap: {
        value: null,
      },
      specularColorMapTransform: {
        value: new _e(),
      },
      specularIntensity: {
        value: 1,
      },
      specularIntensityMap: {
        value: null,
      },
      specularIntensityMapTransform: {
        value: new _e(),
      },
      anisotropyVector: {
        value: new pt(),
      },
      anisotropyMap: {
        value: null,
      },
      anisotropyMapTransform: {
        value: new _e(),
      },
    },
  ]),
  vertexShader: me.meshphysical_vert,
  fragmentShader: me.meshphysical_frag,
}
const ng = {
    r: 0,
    b: 0,
    g: 0,
  },
  wl = new Ma(),
  B7 = new ae()
function F7(r, t, e, n, i, a, o) {
  const s = new qt(0)
  let l = a === !0 ? 0 : 1,
    u,
    c,
    h = null,
    f = 0,
    d = null
  function p(y) {
    let _ = y.isScene === !0 ? y.background : null
    return (
      _ && _.isTexture && (_ = (y.backgroundBlurriness > 0 ? e : t).get(_)), _
    )
  }
  function g(y) {
    let _ = !1
    const x = p(y)
    x === null ? m(s, l) : x && x.isColor && (m(x, 1), (_ = !0))
    const A = r.xr.getEnvironmentBlendMode()
    A === 'additive'
      ? n.buffers.color.setClear(0, 0, 0, 1, o)
      : A === 'alpha-blend' && n.buffers.color.setClear(0, 0, 0, 0, o),
      (r.autoClear || _) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil))
  }
  function v(y, _) {
    const x = p(_)
    x && (x.isCubeTexture || x.mapping === R0)
      ? (c === void 0 &&
          ((c = new De(
            new fv(1, 1, 1),
            new lo({
              name: 'BackgroundCubeMaterial',
              uniforms: Hh(qr.backgroundCube.uniforms),
              vertexShader: qr.backgroundCube.vertexShader,
              fragmentShader: qr.backgroundCube.fragmentShader,
              side: Qr,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          c.geometry.deleteAttribute('normal'),
          c.geometry.deleteAttribute('uv'),
          (c.onBeforeRender = function (A, S, b) {
            this.matrixWorld.copyPosition(b.matrixWorld)
          }),
          Object.defineProperty(c.material, 'envMap', {
            get: function () {
              return this.uniforms.envMap.value
            },
          }),
          i.update(c)),
        wl.copy(_.backgroundRotation),
        (wl.x *= -1),
        (wl.y *= -1),
        (wl.z *= -1),
        x.isCubeTexture &&
          x.isRenderTargetTexture === !1 &&
          ((wl.y *= -1), (wl.z *= -1)),
        (c.material.uniforms.envMap.value = x),
        (c.material.uniforms.flipEnvMap.value =
          x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
        (c.material.uniforms.backgroundBlurriness.value =
          _.backgroundBlurriness),
        (c.material.uniforms.backgroundIntensity.value = _.backgroundIntensity),
        c.material.uniforms.backgroundRotation.value.setFromMatrix4(
          B7.makeRotationFromEuler(wl),
        ),
        (c.material.toneMapped = Be.getTransfer(x.colorSpace) !== an),
        (h !== x || f !== x.version || d !== r.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (h = x),
          (f = x.version),
          (d = r.toneMapping)),
        c.layers.enableAll(),
        y.unshift(c, c.geometry, c.material, 0, 0, null))
      : x &&
        x.isTexture &&
        (u === void 0 &&
          ((u = new De(
            new Ti(2, 2),
            new lo({
              name: 'BackgroundMaterial',
              uniforms: Hh(qr.background.uniforms),
              vertexShader: qr.background.vertexShader,
              fragmentShader: qr.background.fragmentShader,
              side: $o,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          u.geometry.deleteAttribute('normal'),
          Object.defineProperty(u.material, 'map', {
            get: function () {
              return this.uniforms.t2D.value
            },
          }),
          i.update(u)),
        (u.material.uniforms.t2D.value = x),
        (u.material.uniforms.backgroundIntensity.value = _.backgroundIntensity),
        (u.material.toneMapped = Be.getTransfer(x.colorSpace) !== an),
        x.matrixAutoUpdate === !0 && x.updateMatrix(),
        u.material.uniforms.uvTransform.value.copy(x.matrix),
        (h !== x || f !== x.version || d !== r.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (h = x),
          (f = x.version),
          (d = r.toneMapping)),
        u.layers.enableAll(),
        y.unshift(u, u.geometry, u.material, 0, 0, null))
  }
  function m(y, _) {
    y.getRGB(ng, eB(r)), n.buffers.color.setClear(ng.r, ng.g, ng.b, _, o)
  }
  return {
    getClearColor: function () {
      return s
    },
    setClearColor: function (y, _ = 1) {
      s.set(y), (l = _), m(s, l)
    },
    getClearAlpha: function () {
      return l
    },
    setClearAlpha: function (y) {
      ;(l = y), m(s, l)
    },
    render: g,
    addToRenderList: v,
  }
}
function z7(r, t) {
  const e = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    n = {},
    i = f(null)
  let a = i,
    o = !1
  function s(M, C, E, D, P) {
    let L = !1
    const I = h(D, E, C)
    a !== I && ((a = I), u(a.object)),
      (L = d(M, D, E, P)),
      L && p(M, D, E, P),
      P !== null && t.update(P, r.ELEMENT_ARRAY_BUFFER),
      (L || o) &&
        ((o = !1),
        x(M, C, E, D),
        P !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(P).buffer))
  }
  function l() {
    return r.createVertexArray()
  }
  function u(M) {
    return r.bindVertexArray(M)
  }
  function c(M) {
    return r.deleteVertexArray(M)
  }
  function h(M, C, E) {
    const D = E.wireframe === !0
    let P = n[M.id]
    P === void 0 && ((P = {}), (n[M.id] = P))
    let L = P[C.id]
    L === void 0 && ((L = {}), (P[C.id] = L))
    let I = L[D]
    return I === void 0 && ((I = f(l())), (L[D] = I)), I
  }
  function f(M) {
    const C = [],
      E = [],
      D = []
    for (let P = 0; P < e; P++) (C[P] = 0), (E[P] = 0), (D[P] = 0)
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: C,
      enabledAttributes: E,
      attributeDivisors: D,
      object: M,
      attributes: {},
      index: null,
    }
  }
  function d(M, C, E, D) {
    const P = a.attributes,
      L = C.attributes
    let I = 0
    const F = E.getAttributes()
    for (const k in F)
      if (F[k].location >= 0) {
        const H = P[k]
        let Y = L[k]
        if (
          (Y === void 0 &&
            (k === 'instanceMatrix' &&
              M.instanceMatrix &&
              (Y = M.instanceMatrix),
            k === 'instanceColor' && M.instanceColor && (Y = M.instanceColor)),
          H === void 0 || H.attribute !== Y || (Y && H.data !== Y.data))
        )
          return !0
        I++
      }
    return a.attributesNum !== I || a.index !== D
  }
  function p(M, C, E, D) {
    const P = {},
      L = C.attributes
    let I = 0
    const F = E.getAttributes()
    for (const k in F)
      if (F[k].location >= 0) {
        let H = L[k]
        H === void 0 &&
          (k === 'instanceMatrix' && M.instanceMatrix && (H = M.instanceMatrix),
          k === 'instanceColor' && M.instanceColor && (H = M.instanceColor))
        const Y = {}
        ;(Y.attribute = H), H && H.data && (Y.data = H.data), (P[k] = Y), I++
      }
    ;(a.attributes = P), (a.attributesNum = I), (a.index = D)
  }
  function g() {
    const M = a.newAttributes
    for (let C = 0, E = M.length; C < E; C++) M[C] = 0
  }
  function v(M) {
    m(M, 0)
  }
  function m(M, C) {
    const E = a.newAttributes,
      D = a.enabledAttributes,
      P = a.attributeDivisors
    ;(E[M] = 1),
      D[M] === 0 && (r.enableVertexAttribArray(M), (D[M] = 1)),
      P[M] !== C && (r.vertexAttribDivisor(M, C), (P[M] = C))
  }
  function y() {
    const M = a.newAttributes,
      C = a.enabledAttributes
    for (let E = 0, D = C.length; E < D; E++)
      C[E] !== M[E] && (r.disableVertexAttribArray(E), (C[E] = 0))
  }
  function _(M, C, E, D, P, L, I) {
    I === !0
      ? r.vertexAttribIPointer(M, C, E, P, L)
      : r.vertexAttribPointer(M, C, E, D, P, L)
  }
  function x(M, C, E, D) {
    g()
    const P = D.attributes,
      L = E.getAttributes(),
      I = C.defaultAttributeValues
    for (const F in L) {
      const k = L[F]
      if (k.location >= 0) {
        let V = P[F]
        if (
          (V === void 0 &&
            (F === 'instanceMatrix' &&
              M.instanceMatrix &&
              (V = M.instanceMatrix),
            F === 'instanceColor' && M.instanceColor && (V = M.instanceColor)),
          V !== void 0)
        ) {
          const H = V.normalized,
            Y = V.itemSize,
            K = t.get(V)
          if (K === void 0) continue
          const ut = K.buffer,
            W = K.type,
            Z = K.bytesPerElement,
            ft = W === r.INT || W === r.UNSIGNED_INT || V.gpuType === bM
          if (V.isInterleavedBufferAttribute) {
            const lt = V.data,
              ct = lt.stride,
              At = V.offset
            if (lt.isInstancedInterleavedBuffer) {
              for (let gt = 0; gt < k.locationSize; gt++)
                m(k.location + gt, lt.meshPerAttribute)
              M.isInstancedMesh !== !0 &&
                D._maxInstanceCount === void 0 &&
                (D._maxInstanceCount = lt.meshPerAttribute * lt.count)
            } else
              for (let gt = 0; gt < k.locationSize; gt++) v(k.location + gt)
            r.bindBuffer(r.ARRAY_BUFFER, ut)
            for (let gt = 0; gt < k.locationSize; gt++)
              _(
                k.location + gt,
                Y / k.locationSize,
                W,
                H,
                ct * Z,
                (At + (Y / k.locationSize) * gt) * Z,
                ft,
              )
          } else {
            if (V.isInstancedBufferAttribute) {
              for (let lt = 0; lt < k.locationSize; lt++)
                m(k.location + lt, V.meshPerAttribute)
              M.isInstancedMesh !== !0 &&
                D._maxInstanceCount === void 0 &&
                (D._maxInstanceCount = V.meshPerAttribute * V.count)
            } else
              for (let lt = 0; lt < k.locationSize; lt++) v(k.location + lt)
            r.bindBuffer(r.ARRAY_BUFFER, ut)
            for (let lt = 0; lt < k.locationSize; lt++)
              _(
                k.location + lt,
                Y / k.locationSize,
                W,
                H,
                Y * Z,
                (Y / k.locationSize) * lt * Z,
                ft,
              )
          }
        } else if (I !== void 0) {
          const H = I[F]
          if (H !== void 0)
            switch (H.length) {
              case 2:
                r.vertexAttrib2fv(k.location, H)
                break
              case 3:
                r.vertexAttrib3fv(k.location, H)
                break
              case 4:
                r.vertexAttrib4fv(k.location, H)
                break
              default:
                r.vertexAttrib1fv(k.location, H)
            }
        }
      }
    }
    y()
  }
  function A() {
    T()
    for (const M in n) {
      const C = n[M]
      for (const E in C) {
        const D = C[E]
        for (const P in D) c(D[P].object), delete D[P]
        delete C[E]
      }
      delete n[M]
    }
  }
  function S(M) {
    if (n[M.id] === void 0) return
    const C = n[M.id]
    for (const E in C) {
      const D = C[E]
      for (const P in D) c(D[P].object), delete D[P]
      delete C[E]
    }
    delete n[M.id]
  }
  function b(M) {
    for (const C in n) {
      const E = n[C]
      if (E[M.id] === void 0) continue
      const D = E[M.id]
      for (const P in D) c(D[P].object), delete D[P]
      delete E[M.id]
    }
  }
  function T() {
    w(), (o = !0), a !== i && ((a = i), u(a.object))
  }
  function w() {
    ;(i.geometry = null), (i.program = null), (i.wireframe = !1)
  }
  return {
    setup: s,
    reset: T,
    resetDefaultState: w,
    dispose: A,
    releaseStatesOfGeometry: S,
    releaseStatesOfProgram: b,
    initAttributes: g,
    enableAttribute: v,
    disableUnusedAttributes: y,
  }
}
function U7(r, t, e) {
  let n
  function i(u) {
    n = u
  }
  function a(u, c) {
    r.drawArrays(n, u, c), e.update(c, n, 1)
  }
  function o(u, c, h) {
    h !== 0 && (r.drawArraysInstanced(n, u, c, h), e.update(c, n, h))
  }
  function s(u, c, h) {
    if (h === 0) return
    t.get('WEBGL_multi_draw').multiDrawArraysWEBGL(n, u, 0, c, 0, h)
    let d = 0
    for (let p = 0; p < h; p++) d += c[p]
    e.update(d, n, 1)
  }
  function l(u, c, h, f) {
    if (h === 0) return
    const d = t.get('WEBGL_multi_draw')
    if (d === null) for (let p = 0; p < u.length; p++) o(u[p], c[p], f[p])
    else {
      d.multiDrawArraysInstancedWEBGL(n, u, 0, c, 0, f, 0, h)
      let p = 0
      for (let g = 0; g < h; g++) p += c[g]
      for (let g = 0; g < f.length; g++) e.update(p, n, f[g])
    }
  }
  ;(this.setMode = i),
    (this.render = a),
    (this.renderInstances = o),
    (this.renderMultiDraw = s),
    (this.renderMultiDrawInstances = l)
}
function V7(r, t, e, n) {
  let i
  function a() {
    if (i !== void 0) return i
    if (t.has('EXT_texture_filter_anisotropic') === !0) {
      const S = t.get('EXT_texture_filter_anisotropic')
      i = r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
    } else i = 0
    return i
  }
  function o(S) {
    return !(
      S !== Yi &&
      n.convert(S) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)
    )
  }
  function s(S) {
    const b =
      S === hv &&
      (t.has('EXT_color_buffer_half_float') || t.has('EXT_color_buffer_float'))
    return !(
      S !== qo &&
      n.convert(S) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) &&
      S !== ya &&
      !b
    )
  }
  function l(S) {
    if (S === 'highp') {
      if (
        r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision >
          0 &&
        r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision >
          0
      )
        return 'highp'
      S = 'mediump'
    }
    return S === 'mediump' &&
      r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision >
        0 &&
      r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision >
        0
      ? 'mediump'
      : 'lowp'
  }
  let u = e.precision !== void 0 ? e.precision : 'highp'
  const c = l(u)
  c !== u &&
    (console.warn(
      'THREE.WebGLRenderer:',
      u,
      'not supported, using',
      c,
      'instead.',
    ),
    (u = c))
  const h = e.logarithmicDepthBuffer === !0,
    f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),
    d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    p = r.getParameter(r.MAX_TEXTURE_SIZE),
    g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),
    v = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),
    y = r.getParameter(r.MAX_VARYING_VECTORS),
    _ = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),
    x = d > 0,
    A = r.getParameter(r.MAX_SAMPLES)
  return {
    isWebGL2: !0,
    getMaxAnisotropy: a,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: s,
    precision: u,
    logarithmicDepthBuffer: h,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: v,
    maxVertexUniforms: m,
    maxVaryings: y,
    maxFragmentUniforms: _,
    vertexTextures: x,
    maxSamples: A,
  }
}
function G7(r) {
  const t = this
  let e = null,
    n = 0,
    i = !1,
    a = !1
  const o = new Cs(),
    s = new _e(),
    l = {
      value: null,
      needsUpdate: !1,
    }
  ;(this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, f) {
      const d = h.length !== 0 || f || n !== 0 || i
      return (i = f), (n = h.length), d
    }),
    (this.beginShadows = function () {
      ;(a = !0), c(null)
    }),
    (this.endShadows = function () {
      a = !1
    }),
    (this.setGlobalState = function (h, f) {
      e = c(h, f, 0)
    }),
    (this.setState = function (h, f, d) {
      const p = h.clippingPlanes,
        g = h.clipIntersection,
        v = h.clipShadows,
        m = r.get(h)
      if (!i || p === null || p.length === 0 || (a && !v)) a ? c(null) : u()
      else {
        const y = a ? 0 : n,
          _ = y * 4
        let x = m.clippingState || null
        ;(l.value = x), (x = c(p, f, _, d))
        for (let A = 0; A !== _; ++A) x[A] = e[A]
        ;(m.clippingState = x),
          (this.numIntersection = g ? this.numPlanes : 0),
          (this.numPlanes += y)
      }
    })
  function u() {
    l.value !== e && ((l.value = e), (l.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0)
  }
  function c(h, f, d, p) {
    const g = h !== null ? h.length : 0
    let v = null
    if (g !== 0) {
      if (((v = l.value), p !== !0 || v === null)) {
        const m = d + g * 4,
          y = f.matrixWorldInverse
        s.getNormalMatrix(y),
          (v === null || v.length < m) && (v = new Float32Array(m))
        for (let _ = 0, x = d; _ !== g; ++_, x += 4)
          o.copy(h[_]).applyMatrix4(y, s),
            o.normal.toArray(v, x),
            (v[x + 3] = o.constant)
      }
      ;(l.value = v), (l.needsUpdate = !0)
    }
    return (t.numPlanes = g), (t.numIntersection = 0), v
  }
}
function H7(r) {
  let t = new WeakMap()
  function e(o, s) {
    return s === mA ? (o.mapping = Fh) : s === yA && (o.mapping = zh), o
  }
  function n(o) {
    if (o && o.isTexture) {
      const s = o.mapping
      if (s === mA || s === yA)
        if (t.has(o)) {
          const l = t.get(o).texture
          return e(l, o.mapping)
        } else {
          const l = o.image
          if (l && l.height > 0) {
            const u = new tW(l.height)
            return (
              u.fromEquirectangularTexture(r, o),
              t.set(o, u),
              o.addEventListener('dispose', i),
              e(u.texture, o.mapping)
            )
          } else return null
        }
    }
    return o
  }
  function i(o) {
    const s = o.target
    s.removeEventListener('dispose', i)
    const l = t.get(s)
    l !== void 0 && (t.delete(s), l.dispose())
  }
  function a() {
    t = new WeakMap()
  }
  return {
    get: n,
    dispose: a,
  }
}
class O0 extends nB {
  constructor(t = -1, e = 1, n = 1, i = -1, a = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = n),
      (this.bottom = i),
      (this.near = a),
      (this.far = o),
      this.updateProjectionMatrix()
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      this
    )
  }
  setViewOffset(t, e, n, i, a, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = a),
      (this.view.height = o),
      this.updateProjectionMatrix()
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix()
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2
    let a = n - t,
      o = n + t,
      s = i + e,
      l = i - e
    if (this.view !== null && this.view.enabled) {
      const u = (this.right - this.left) / this.view.fullWidth / this.zoom,
        c = (this.top - this.bottom) / this.view.fullHeight / this.zoom
      ;(a += u * this.view.offsetX),
        (o = a + u * this.view.width),
        (s -= c * this.view.offsetY),
        (l = s - c * this.view.height)
    }
    this.projectionMatrix.makeOrthographic(
      a,
      o,
      s,
      l,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
  }
  toJSON(t) {
    const e = super.toJSON(t)
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      e
    )
  }
}
const ph = 4,
  b2 = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  cu = 20,
  ex = new O0(),
  w2 = new qt()
let nx = null,
  rx = 0,
  ix = 0,
  ax = !1
const tu = (1 + Math.sqrt(5)) / 2,
  Dc = 1 / tu,
  M2 = [
    new U(-tu, Dc, 0),
    new U(tu, Dc, 0),
    new U(-Dc, 0, tu),
    new U(Dc, 0, tu),
    new U(0, tu, -Dc),
    new U(0, tu, Dc),
    new U(-1, 1, -1),
    new U(1, 1, -1),
    new U(-1, 1, 1),
    new U(1, 1, 1),
  ]
class T2 {
  constructor(t) {
    ;(this._renderer = t),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial)
  }
  fromScene(t, e = 0, n = 0.1, i = 100) {
    ;(nx = this._renderer.getRenderTarget()),
      (rx = this._renderer.getActiveCubeFace()),
      (ix = this._renderer.getActiveMipmapLevel()),
      (ax = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256)
    const a = this._allocateTargets()
    return (
      (a.depthBuffer = !0),
      this._sceneToCubeUV(t, n, i, a),
      e > 0 && this._blur(a, 0, 0, e),
      this._applyPMREM(a),
      this._cleanup(a),
      a
    )
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e)
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e)
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = D2()),
      this._compileMaterial(this._cubemapMaterial))
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = E2()),
      this._compileMaterial(this._equirectMaterial))
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose()
  }
  _setSize(t) {
    ;(this._lodMax = Math.floor(Math.log2(t))),
      (this._cubeSize = Math.pow(2, this._lodMax))
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose()
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose()
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(nx, rx, ix),
      (this._renderer.xr.enabled = ax),
      (t.scissorTest = !1),
      rg(t, 0, 0, t.width, t.height)
  }
  _fromTexture(t, e) {
    t.mapping === Fh || t.mapping === zh
      ? this._setSize(
          t.image.length === 0
            ? 16
            : t.image[0].width || t.image[0].image.width,
        )
      : this._setSize(t.image.width / 4),
      (nx = this._renderer.getRenderTarget()),
      (rx = this._renderer.getActiveCubeFace()),
      (ix = this._renderer.getActiveMipmapLevel()),
      (ax = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1)
    const n = e || this._allocateTargets()
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112),
      e = 4 * this._cubeSize,
      n = {
        magFilter: gi,
        minFilter: gi,
        generateMipmaps: !1,
        type: hv,
        format: Yi,
        colorSpace: ar,
        depthBuffer: !1,
      },
      i = C2(t, e, n)
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== t ||
      this._pingPongRenderTarget.height !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = C2(t, e, n))
      const {_lodMax: a} = this
      ;({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = W7(a)),
        (this._blurMaterial = X7(a, t, e))
    }
    return i
  }
  _compileMaterial(t) {
    const e = new De(this._lodPlanes[0], t)
    this._renderer.compile(e, ex)
  }
  _sceneToCubeUV(t, e, n, i) {
    const s = new wr(90, 1, e, n),
      l = [1, -1, 1, 1, 1, 1],
      u = [1, 1, 1, -1, -1, -1],
      c = this._renderer,
      h = c.autoClear,
      f = c.toneMapping
    c.getClearColor(w2), (c.toneMapping = Ys), (c.autoClear = !1)
    const d = new on({
        name: 'PMREM.Background',
        side: Qr,
        depthWrite: !1,
        depthTest: !1,
      }),
      p = new De(new fv(), d)
    let g = !1
    const v = t.background
    v
      ? v.isColor && (d.color.copy(v), (t.background = null), (g = !0))
      : (d.color.copy(w2), (g = !0))
    for (let m = 0; m < 6; m++) {
      const y = m % 3
      y === 0
        ? (s.up.set(0, l[m], 0), s.lookAt(u[m], 0, 0))
        : y === 1
        ? (s.up.set(0, 0, l[m]), s.lookAt(0, u[m], 0))
        : (s.up.set(0, l[m], 0), s.lookAt(0, 0, u[m]))
      const _ = this._cubeSize
      rg(i, y * _, m > 2 ? _ : 0, _, _),
        c.setRenderTarget(i),
        g && c.render(p, s),
        c.render(t, s)
    }
    p.geometry.dispose(),
      p.material.dispose(),
      (c.toneMapping = f),
      (c.autoClear = h),
      (t.background = v)
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer,
      i = t.mapping === Fh || t.mapping === zh
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = D2()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          t.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = E2())
    const a = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new De(this._lodPlanes[0], a),
      s = a.uniforms
    s.envMap.value = t
    const l = this._cubeSize
    rg(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, ex)
  }
  _applyPMREM(t) {
    const e = this._renderer,
      n = e.autoClear
    e.autoClear = !1
    const i = this._lodPlanes.length
    for (let a = 1; a < i; a++) {
      const o = Math.sqrt(
          this._sigmas[a] * this._sigmas[a] -
            this._sigmas[a - 1] * this._sigmas[a - 1],
        ),
        s = M2[(i - a - 1) % M2.length]
      this._blur(t, a - 1, a, o, s)
    }
    e.autoClear = n
  }
  _blur(t, e, n, i, a) {
    const o = this._pingPongRenderTarget
    this._halfBlur(t, o, e, n, i, 'latitudinal', a),
      this._halfBlur(o, t, n, n, i, 'longitudinal', a)
  }
  _halfBlur(t, e, n, i, a, o, s) {
    const l = this._renderer,
      u = this._blurMaterial
    o !== 'latitudinal' &&
      o !== 'longitudinal' &&
      console.error(
        'blur direction must be either latitudinal or longitudinal!',
      )
    const c = 3,
      h = new De(this._lodPlanes[i], u),
      f = u.uniforms,
      d = this._sizeLods[n] - 1,
      p = isFinite(a) ? Math.PI / (2 * d) : (2 * Math.PI) / (2 * cu - 1),
      g = a / p,
      v = isFinite(a) ? 1 + Math.floor(c * g) : cu
    v > cu &&
      console.warn(
        `sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${cu}`,
      )
    const m = []
    let y = 0
    for (let b = 0; b < cu; ++b) {
      const T = b / g,
        w = Math.exp((-T * T) / 2)
      m.push(w), b === 0 ? (y += w) : b < v && (y += 2 * w)
    }
    for (let b = 0; b < m.length; b++) m[b] = m[b] / y
    ;(f.envMap.value = t.texture),
      (f.samples.value = v),
      (f.weights.value = m),
      (f.latitudinal.value = o === 'latitudinal'),
      s && (f.poleAxis.value = s)
    const {_lodMax: _} = this
    ;(f.dTheta.value = p), (f.mipInt.value = _ - n)
    const x = this._sizeLods[i],
      A = 3 * x * (i > _ - ph ? i - _ + ph : 0),
      S = 4 * (this._cubeSize - x)
    rg(e, A, S, 3 * x, 2 * x), l.setRenderTarget(e), l.render(h, ex)
  }
}
function W7(r) {
  const t = [],
    e = [],
    n = []
  let i = r
  const a = r - ph + 1 + b2.length
  for (let o = 0; o < a; o++) {
    const s = Math.pow(2, i)
    e.push(s)
    let l = 1 / s
    o > r - ph ? (l = b2[o - r + ph - 1]) : o === 0 && (l = 0), n.push(l)
    const u = 1 / (s - 2),
      c = -u,
      h = 1 + u,
      f = [c, c, h, c, h, h, c, c, h, h, c, h],
      d = 6,
      p = 6,
      g = 3,
      v = 2,
      m = 1,
      y = new Float32Array(g * p * d),
      _ = new Float32Array(v * p * d),
      x = new Float32Array(m * p * d)
    for (let S = 0; S < d; S++) {
      const b = ((S % 3) * 2) / 3 - 1,
        T = S > 2 ? 0 : -1,
        w = [
          b,
          T,
          0,
          b + 2 / 3,
          T,
          0,
          b + 2 / 3,
          T + 1,
          0,
          b,
          T,
          0,
          b + 2 / 3,
          T + 1,
          0,
          b,
          T + 1,
          0,
        ]
      y.set(w, g * p * S), _.set(f, v * p * S)
      const M = [S, S, S, S, S, S]
      x.set(M, m * p * S)
    }
    const A = new Mn()
    A.setAttribute('position', new ir(y, g)),
      A.setAttribute('uv', new ir(_, v)),
      A.setAttribute('faceIndex', new ir(x, m)),
      t.push(A),
      i > ph && i--
  }
  return {
    lodPlanes: t,
    sizeLods: e,
    sigmas: n,
  }
}
function C2(r, t, e) {
  const n = new Vu(r, t, e)
  return (
    (n.texture.mapping = R0),
    (n.texture.name = 'PMREM.cubeUv'),
    (n.scissorTest = !0),
    n
  )
}
function rg(r, t, e, n, i) {
  r.viewport.set(t, e, n, i), r.scissor.set(t, e, n, i)
}
function X7(r, t, e) {
  const n = new Float32Array(cu),
    i = new U(0, 1, 0)
  return new lo({
    name: 'SphericalGaussianBlur',
    defines: {
      n: cu,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: {
        value: null,
      },
      samples: {
        value: 1,
      },
      weights: {
        value: n,
      },
      latitudinal: {
        value: !1,
      },
      dTheta: {
        value: 0,
      },
      mipInt: {
        value: 0,
      },
      poleAxis: {
        value: i,
      },
    },
    vertexShader: FM(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Xs,
    depthTest: !1,
    depthWrite: !1,
  })
}
function E2() {
  return new lo({
    name: 'EquirectangularToCubeUV',
    uniforms: {
      envMap: {
        value: null,
      },
    },
    vertexShader: FM(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Xs,
    depthTest: !1,
    depthWrite: !1,
  })
}
function D2() {
  return new lo({
    name: 'CubemapToCubeUV',
    uniforms: {
      envMap: {
        value: null,
      },
      flipEnvMap: {
        value: -1,
      },
    },
    vertexShader: FM(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Xs,
    depthTest: !1,
    depthWrite: !1,
  })
}
function FM() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function Y7(r) {
  let t = new WeakMap(),
    e = null
  function n(s) {
    if (s && s.isTexture) {
      const l = s.mapping,
        u = l === mA || l === yA,
        c = l === Fh || l === zh
      if (u || c) {
        let h = t.get(s)
        const f = h !== void 0 ? h.texture.pmremVersion : 0
        if (s.isRenderTargetTexture && s.pmremVersion !== f)
          return (
            e === null && (e = new T2(r)),
            (h = u ? e.fromEquirectangular(s, h) : e.fromCubemap(s, h)),
            (h.texture.pmremVersion = s.pmremVersion),
            t.set(s, h),
            h.texture
          )
        if (h !== void 0) return h.texture
        {
          const d = s.image
          return (u && d && d.height > 0) || (c && d && i(d))
            ? (e === null && (e = new T2(r)),
              (h = u ? e.fromEquirectangular(s) : e.fromCubemap(s)),
              (h.texture.pmremVersion = s.pmremVersion),
              t.set(s, h),
              s.addEventListener('dispose', a),
              h.texture)
            : null
        }
      }
    }
    return s
  }
  function i(s) {
    let l = 0
    const u = 6
    for (let c = 0; c < u; c++) s[c] !== void 0 && l++
    return l === u
  }
  function a(s) {
    const l = s.target
    l.removeEventListener('dispose', a)
    const u = t.get(l)
    u !== void 0 && (t.delete(l), u.dispose())
  }
  function o() {
    ;(t = new WeakMap()), e !== null && (e.dispose(), (e = null))
  }
  return {
    get: n,
    dispose: o,
  }
}
function $7(r) {
  const t = {}
  function e(n) {
    if (t[n] !== void 0) return t[n]
    let i
    switch (n) {
      case 'WEBGL_depth_texture':
        i =
          r.getExtension('WEBGL_depth_texture') ||
          r.getExtension('MOZ_WEBGL_depth_texture') ||
          r.getExtension('WEBKIT_WEBGL_depth_texture')
        break
      case 'EXT_texture_filter_anisotropic':
        i =
          r.getExtension('EXT_texture_filter_anisotropic') ||
          r.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          r.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
        break
      case 'WEBGL_compressed_texture_s3tc':
        i =
          r.getExtension('WEBGL_compressed_texture_s3tc') ||
          r.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          r.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc')
        break
      case 'WEBGL_compressed_texture_pvrtc':
        i =
          r.getExtension('WEBGL_compressed_texture_pvrtc') ||
          r.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc')
        break
      default:
        i = r.getExtension(n)
    }
    return (t[n] = i), i
  }
  return {
    has: function (n) {
      return e(n) !== null
    },
    init: function () {
      e('EXT_color_buffer_float'),
        e('WEBGL_clip_cull_distance'),
        e('OES_texture_float_linear'),
        e('EXT_color_buffer_half_float'),
        e('WEBGL_multisampled_render_to_texture'),
        e('WEBGL_render_shared_exponent')
    },
    get: function (n) {
      const i = e(n)
      return (
        i === null &&
          OM('THREE.WebGLRenderer: ' + n + ' extension not supported.'),
        i
      )
    },
  }
}
function q7(r, t, e, n) {
  const i = {},
    a = new WeakMap()
  function o(h) {
    const f = h.target
    f.index !== null && t.remove(f.index)
    for (const p in f.attributes) t.remove(f.attributes[p])
    for (const p in f.morphAttributes) {
      const g = f.morphAttributes[p]
      for (let v = 0, m = g.length; v < m; v++) t.remove(g[v])
    }
    f.removeEventListener('dispose', o), delete i[f.id]
    const d = a.get(f)
    d && (t.remove(d), a.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      e.memory.geometries--
  }
  function s(h, f) {
    return (
      i[f.id] === !0 ||
        (f.addEventListener('dispose', o),
        (i[f.id] = !0),
        e.memory.geometries++),
      f
    )
  }
  function l(h) {
    const f = h.attributes
    for (const p in f) t.update(f[p], r.ARRAY_BUFFER)
    const d = h.morphAttributes
    for (const p in d) {
      const g = d[p]
      for (let v = 0, m = g.length; v < m; v++) t.update(g[v], r.ARRAY_BUFFER)
    }
  }
  function u(h) {
    const f = [],
      d = h.index,
      p = h.attributes.position
    let g = 0
    if (d !== null) {
      const y = d.array
      g = d.version
      for (let _ = 0, x = y.length; _ < x; _ += 3) {
        const A = y[_ + 0],
          S = y[_ + 1],
          b = y[_ + 2]
        f.push(A, S, S, b, b, A)
      }
    } else if (p !== void 0) {
      const y = p.array
      g = p.version
      for (let _ = 0, x = y.length / 3 - 1; _ < x; _ += 3) {
        const A = _ + 0,
          S = _ + 1,
          b = _ + 2
        f.push(A, S, S, b, b, A)
      }
    } else return
    const v = new (Zk(f) ? tB : Qk)(f, 1)
    v.version = g
    const m = a.get(h)
    m && t.remove(m), a.set(h, v)
  }
  function c(h) {
    const f = a.get(h)
    if (f) {
      const d = h.index
      d !== null && f.version < d.version && u(h)
    } else u(h)
    return a.get(h)
  }
  return {
    get: s,
    update: l,
    getWireframeAttribute: c,
  }
}
function Z7(r, t, e) {
  let n
  function i(f) {
    n = f
  }
  let a, o
  function s(f) {
    ;(a = f.type), (o = f.bytesPerElement)
  }
  function l(f, d) {
    r.drawElements(n, d, a, f * o), e.update(d, n, 1)
  }
  function u(f, d, p) {
    p !== 0 && (r.drawElementsInstanced(n, d, a, f * o, p), e.update(d, n, p))
  }
  function c(f, d, p) {
    if (p === 0) return
    t.get('WEBGL_multi_draw').multiDrawElementsWEBGL(n, d, 0, a, f, 0, p)
    let v = 0
    for (let m = 0; m < p; m++) v += d[m]
    e.update(v, n, 1)
  }
  function h(f, d, p, g) {
    if (p === 0) return
    const v = t.get('WEBGL_multi_draw')
    if (v === null) for (let m = 0; m < f.length; m++) u(f[m] / o, d[m], g[m])
    else {
      v.multiDrawElementsInstancedWEBGL(n, d, 0, a, f, 0, g, 0, p)
      let m = 0
      for (let y = 0; y < p; y++) m += d[y]
      for (let y = 0; y < g.length; y++) e.update(m, n, g[y])
    }
  }
  ;(this.setMode = i),
    (this.setIndex = s),
    (this.render = l),
    (this.renderInstances = u),
    (this.renderMultiDraw = c),
    (this.renderMultiDrawInstances = h)
}
function K7(r) {
  const t = {
      geometries: 0,
      textures: 0,
    },
    e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0,
    }
  function n(a, o, s) {
    switch ((e.calls++, o)) {
      case r.TRIANGLES:
        e.triangles += s * (a / 3)
        break
      case r.LINES:
        e.lines += s * (a / 2)
        break
      case r.LINE_STRIP:
        e.lines += s * (a - 1)
        break
      case r.LINE_LOOP:
        e.lines += s * a
        break
      case r.POINTS:
        e.points += s * a
        break
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', o)
        break
    }
  }
  function i() {
    ;(e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0)
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  }
}
function j7(r, t, e) {
  const n = new WeakMap(),
    i = new Oe()
  function a(o, s, l) {
    const u = o.morphTargetInfluences,
      c =
        s.morphAttributes.position ||
        s.morphAttributes.normal ||
        s.morphAttributes.color,
      h = c !== void 0 ? c.length : 0
    let f = n.get(s)
    if (f === void 0 || f.count !== h) {
      let w = function () {
        b.dispose(), n.delete(s), s.removeEventListener('dispose', w)
      }
      f !== void 0 && f.texture.dispose()
      const d = s.morphAttributes.position !== void 0,
        p = s.morphAttributes.normal !== void 0,
        g = s.morphAttributes.color !== void 0,
        v = s.morphAttributes.position || [],
        m = s.morphAttributes.normal || [],
        y = s.morphAttributes.color || []
      let _ = 0
      d === !0 && (_ = 1), p === !0 && (_ = 2), g === !0 && (_ = 3)
      let x = s.attributes.position.count * _,
        A = 1
      x > t.maxTextureSize &&
        ((A = Math.ceil(x / t.maxTextureSize)), (x = t.maxTextureSize))
      const S = new Float32Array(x * A * 4 * h),
        b = new jk(S, x, A, h)
      ;(b.type = ya), (b.needsUpdate = !0)
      const T = _ * 4
      for (let M = 0; M < h; M++) {
        const C = v[M],
          E = m[M],
          D = y[M],
          P = x * A * 4 * M
        for (let L = 0; L < C.count; L++) {
          const I = L * T
          d === !0 &&
            (i.fromBufferAttribute(C, L),
            (S[P + I + 0] = i.x),
            (S[P + I + 1] = i.y),
            (S[P + I + 2] = i.z),
            (S[P + I + 3] = 0)),
            p === !0 &&
              (i.fromBufferAttribute(E, L),
              (S[P + I + 4] = i.x),
              (S[P + I + 5] = i.y),
              (S[P + I + 6] = i.z),
              (S[P + I + 7] = 0)),
            g === !0 &&
              (i.fromBufferAttribute(D, L),
              (S[P + I + 8] = i.x),
              (S[P + I + 9] = i.y),
              (S[P + I + 10] = i.z),
              (S[P + I + 11] = D.itemSize === 4 ? i.w : 1))
        }
      }
      ;(f = {
        count: h,
        texture: b,
        size: new pt(x, A),
      }),
        n.set(s, f),
        s.addEventListener('dispose', w)
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(r, 'morphTexture', o.morphTexture, e)
    else {
      let d = 0
      for (let g = 0; g < u.length; g++) d += u[g]
      const p = s.morphTargetsRelative ? 1 : 1 - d
      l.getUniforms().setValue(r, 'morphTargetBaseInfluence', p),
        l.getUniforms().setValue(r, 'morphTargetInfluences', u)
    }
    l.getUniforms().setValue(r, 'morphTargetsTexture', f.texture, e),
      l.getUniforms().setValue(r, 'morphTargetsTextureSize', f.size)
  }
  return {
    update: a,
  }
}
function J7(r, t, e, n) {
  let i = new WeakMap()
  function a(l) {
    const u = n.render.frame,
      c = l.geometry,
      h = t.get(l, c)
    if (
      (i.get(h) !== u && (t.update(h), i.set(h, u)),
      l.isInstancedMesh &&
        (l.hasEventListener('dispose', s) === !1 &&
          l.addEventListener('dispose', s),
        i.get(l) !== u &&
          (e.update(l.instanceMatrix, r.ARRAY_BUFFER),
          l.instanceColor !== null && e.update(l.instanceColor, r.ARRAY_BUFFER),
          i.set(l, u))),
      l.isSkinnedMesh)
    ) {
      const f = l.skeleton
      i.get(f) !== u && (f.update(), i.set(f, u))
    }
    return h
  }
  function o() {
    i = new WeakMap()
  }
  function s(l) {
    const u = l.target
    u.removeEventListener('dispose', s),
      e.remove(u.instanceMatrix),
      u.instanceColor !== null && e.remove(u.instanceColor)
  }
  return {
    update: a,
    dispose: o,
  }
}
class aB extends Yn {
  constructor(t, e, n, i, a, o, s, l, u, c = wh) {
    if (c !== wh && c !== Vh)
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat',
      )
    n === void 0 && c === wh && (n = Uu),
      n === void 0 && c === Vh && (n = Uh),
      super(null, i, a, o, s, l, c, n, u),
      (this.isDepthTexture = !0),
      (this.image = {
        width: t,
        height: e,
      }),
      (this.magFilter = s !== void 0 ? s : Ur),
      (this.minFilter = l !== void 0 ? l : Ur),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null)
  }
  copy(t) {
    return super.copy(t), (this.compareFunction = t.compareFunction), this
  }
  toJSON(t) {
    const e = super.toJSON(t)
    return (
      this.compareFunction !== null &&
        (e.compareFunction = this.compareFunction),
      e
    )
  }
}
const oB = new Yn(),
  L2 = new aB(1, 1),
  sB = new jk(),
  lB = new z6(),
  uB = new rB(),
  P2 = [],
  R2 = [],
  I2 = new Float32Array(16),
  O2 = new Float32Array(9),
  N2 = new Float32Array(4)
function ff(r, t, e) {
  const n = r[0]
  if (n <= 0 || n > 0) return r
  const i = t * e
  let a = P2[i]
  if ((a === void 0 && ((a = new Float32Array(i)), (P2[i] = a)), t !== 0)) {
    n.toArray(a, 0)
    for (let o = 1, s = 0; o !== t; ++o) (s += e), r[o].toArray(a, s)
  }
  return a
}
function $n(r, t) {
  if (r.length !== t.length) return !1
  for (let e = 0, n = r.length; e < n; e++) if (r[e] !== t[e]) return !1
  return !0
}
function qn(r, t) {
  for (let e = 0, n = t.length; e < n; e++) r[e] = t[e]
}
function N0(r, t) {
  let e = R2[t]
  e === void 0 && ((e = new Int32Array(t)), (R2[t] = e))
  for (let n = 0; n !== t; ++n) e[n] = r.allocateTextureUnit()
  return e
}
function Q7(r, t) {
  const e = this.cache
  e[0] !== t && (r.uniform1f(this.addr, t), (e[0] = t))
}
function tX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (r.uniform2f(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y))
  else {
    if ($n(e, t)) return
    r.uniform2fv(this.addr, t), qn(e, t)
  }
}
function eX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (r.uniform3f(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z))
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) &&
      (r.uniform3f(this.addr, t.r, t.g, t.b),
      (e[0] = t.r),
      (e[1] = t.g),
      (e[2] = t.b))
  else {
    if ($n(e, t)) return
    r.uniform3fv(this.addr, t), qn(e, t)
  }
}
function nX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (r.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w))
  else {
    if ($n(e, t)) return
    r.uniform4fv(this.addr, t), qn(e, t)
  }
}
function rX(r, t) {
  const e = this.cache,
    n = t.elements
  if (n === void 0) {
    if ($n(e, t)) return
    r.uniformMatrix2fv(this.addr, !1, t), qn(e, t)
  } else {
    if ($n(e, n)) return
    N2.set(n), r.uniformMatrix2fv(this.addr, !1, N2), qn(e, n)
  }
}
function iX(r, t) {
  const e = this.cache,
    n = t.elements
  if (n === void 0) {
    if ($n(e, t)) return
    r.uniformMatrix3fv(this.addr, !1, t), qn(e, t)
  } else {
    if ($n(e, n)) return
    O2.set(n), r.uniformMatrix3fv(this.addr, !1, O2), qn(e, n)
  }
}
function aX(r, t) {
  const e = this.cache,
    n = t.elements
  if (n === void 0) {
    if ($n(e, t)) return
    r.uniformMatrix4fv(this.addr, !1, t), qn(e, t)
  } else {
    if ($n(e, n)) return
    I2.set(n), r.uniformMatrix4fv(this.addr, !1, I2), qn(e, n)
  }
}
function oX(r, t) {
  const e = this.cache
  e[0] !== t && (r.uniform1i(this.addr, t), (e[0] = t))
}
function sX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (r.uniform2i(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y))
  else {
    if ($n(e, t)) return
    r.uniform2iv(this.addr, t), qn(e, t)
  }
}
function lX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (r.uniform3i(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z))
  else {
    if ($n(e, t)) return
    r.uniform3iv(this.addr, t), qn(e, t)
  }
}
function uX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (r.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w))
  else {
    if ($n(e, t)) return
    r.uniform4iv(this.addr, t), qn(e, t)
  }
}
function cX(r, t) {
  const e = this.cache
  e[0] !== t && (r.uniform1ui(this.addr, t), (e[0] = t))
}
function hX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (r.uniform2ui(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y))
  else {
    if ($n(e, t)) return
    r.uniform2uiv(this.addr, t), qn(e, t)
  }
}
function fX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (r.uniform3ui(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z))
  else {
    if ($n(e, t)) return
    r.uniform3uiv(this.addr, t), qn(e, t)
  }
}
function dX(r, t) {
  const e = this.cache
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (r.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w))
  else {
    if ($n(e, t)) return
    r.uniform4uiv(this.addr, t), qn(e, t)
  }
}
function pX(r, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit()
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i))
  let a
  this.type === r.SAMPLER_2D_SHADOW
    ? ((L2.compareFunction = qk), (a = L2))
    : (a = oB),
    e.setTexture2D(t || a, i)
}
function vX(r, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit()
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    e.setTexture3D(t || lB, i)
}
function gX(r, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit()
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    e.setTextureCube(t || uB, i)
}
function mX(r, t, e) {
  const n = this.cache,
    i = e.allocateTextureUnit()
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    e.setTexture2DArray(t || sB, i)
}
function yX(r) {
  switch (r) {
    case 5126:
      return Q7
    case 35664:
      return tX
    case 35665:
      return eX
    case 35666:
      return nX
    case 35674:
      return rX
    case 35675:
      return iX
    case 35676:
      return aX
    case 5124:
    case 35670:
      return oX
    case 35667:
    case 35671:
      return sX
    case 35668:
    case 35672:
      return lX
    case 35669:
    case 35673:
      return uX
    case 5125:
      return cX
    case 36294:
      return hX
    case 36295:
      return fX
    case 36296:
      return dX
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return pX
    case 35679:
    case 36299:
    case 36307:
      return vX
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return gX
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return mX
  }
}
function _X(r, t) {
  r.uniform1fv(this.addr, t)
}
function xX(r, t) {
  const e = ff(t, this.size, 2)
  r.uniform2fv(this.addr, e)
}
function SX(r, t) {
  const e = ff(t, this.size, 3)
  r.uniform3fv(this.addr, e)
}
function AX(r, t) {
  const e = ff(t, this.size, 4)
  r.uniform4fv(this.addr, e)
}
function bX(r, t) {
  const e = ff(t, this.size, 4)
  r.uniformMatrix2fv(this.addr, !1, e)
}
function wX(r, t) {
  const e = ff(t, this.size, 9)
  r.uniformMatrix3fv(this.addr, !1, e)
}
function MX(r, t) {
  const e = ff(t, this.size, 16)
  r.uniformMatrix4fv(this.addr, !1, e)
}
function TX(r, t) {
  r.uniform1iv(this.addr, t)
}
function CX(r, t) {
  r.uniform2iv(this.addr, t)
}
function EX(r, t) {
  r.uniform3iv(this.addr, t)
}
function DX(r, t) {
  r.uniform4iv(this.addr, t)
}
function LX(r, t) {
  r.uniform1uiv(this.addr, t)
}
function PX(r, t) {
  r.uniform2uiv(this.addr, t)
}
function RX(r, t) {
  r.uniform3uiv(this.addr, t)
}
function IX(r, t) {
  r.uniform4uiv(this.addr, t)
}
function OX(r, t, e) {
  const n = this.cache,
    i = t.length,
    a = N0(e, i)
  $n(n, a) || (r.uniform1iv(this.addr, a), qn(n, a))
  for (let o = 0; o !== i; ++o) e.setTexture2D(t[o] || oB, a[o])
}
function NX(r, t, e) {
  const n = this.cache,
    i = t.length,
    a = N0(e, i)
  $n(n, a) || (r.uniform1iv(this.addr, a), qn(n, a))
  for (let o = 0; o !== i; ++o) e.setTexture3D(t[o] || lB, a[o])
}
function kX(r, t, e) {
  const n = this.cache,
    i = t.length,
    a = N0(e, i)
  $n(n, a) || (r.uniform1iv(this.addr, a), qn(n, a))
  for (let o = 0; o !== i; ++o) e.setTextureCube(t[o] || uB, a[o])
}
function BX(r, t, e) {
  const n = this.cache,
    i = t.length,
    a = N0(e, i)
  $n(n, a) || (r.uniform1iv(this.addr, a), qn(n, a))
  for (let o = 0; o !== i; ++o) e.setTexture2DArray(t[o] || sB, a[o])
}
function FX(r) {
  switch (r) {
    case 5126:
      return _X
    case 35664:
      return xX
    case 35665:
      return SX
    case 35666:
      return AX
    case 35674:
      return bX
    case 35675:
      return wX
    case 35676:
      return MX
    case 5124:
    case 35670:
      return TX
    case 35667:
    case 35671:
      return CX
    case 35668:
    case 35672:
      return EX
    case 35669:
    case 35673:
      return DX
    case 5125:
      return LX
    case 36294:
      return PX
    case 36295:
      return RX
    case 36296:
      return IX
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return OX
    case 35679:
    case 36299:
    case 36307:
      return NX
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return kX
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return BX
  }
}
class zX {
  constructor(t, e, n) {
    ;(this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.setValue = yX(e.type))
  }
}
class UX {
  constructor(t, e, n) {
    ;(this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.size = e.size),
      (this.setValue = FX(e.type))
  }
}
class VX {
  constructor(t) {
    ;(this.id = t), (this.seq = []), (this.map = {})
  }
  setValue(t, e, n) {
    const i = this.seq
    for (let a = 0, o = i.length; a !== o; ++a) {
      const s = i[a]
      s.setValue(t, e[s.id], n)
    }
  }
}
const ox = /(\w+)(\])?(\[|\.)?/g
function k2(r, t) {
  r.seq.push(t), (r.map[t.id] = t)
}
function GX(r, t, e) {
  const n = r.name,
    i = n.length
  for (ox.lastIndex = 0; ; ) {
    const a = ox.exec(n),
      o = ox.lastIndex
    let s = a[1]
    const l = a[2] === ']',
      u = a[3]
    if ((l && (s = s | 0), u === void 0 || (u === '[' && o + 2 === i))) {
      k2(e, u === void 0 ? new zX(s, r, t) : new UX(s, r, t))
      break
    } else {
      let h = e.map[s]
      h === void 0 && ((h = new VX(s)), k2(e, h)), (e = h)
    }
  }
}
class zm {
  constructor(t, e) {
    ;(this.seq = []), (this.map = {})
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS)
    for (let i = 0; i < n; ++i) {
      const a = t.getActiveUniform(e, i),
        o = t.getUniformLocation(e, a.name)
      GX(a, o, this)
    }
  }
  setValue(t, e, n, i) {
    const a = this.map[e]
    a !== void 0 && a.setValue(t, n, i)
  }
  setOptional(t, e, n) {
    const i = e[n]
    i !== void 0 && this.setValue(t, n, i)
  }
  static upload(t, e, n, i) {
    for (let a = 0, o = e.length; a !== o; ++a) {
      const s = e[a],
        l = n[s.id]
      l.needsUpdate !== !1 && s.setValue(t, l.value, i)
    }
  }
  static seqWithValue(t, e) {
    const n = []
    for (let i = 0, a = t.length; i !== a; ++i) {
      const o = t[i]
      o.id in e && n.push(o)
    }
    return n
  }
}
function B2(r, t, e) {
  const n = r.createShader(t)
  return r.shaderSource(n, e), r.compileShader(n), n
}
const HX = 37297
let WX = 0
function XX(r, t) {
  const e = r.split(`
`),
    n = [],
    i = Math.max(t - 6, 0),
    a = Math.min(t + 6, e.length)
  for (let o = i; o < a; o++) {
    const s = o + 1
    n.push(`${s === t ? '>' : ' '} ${s}: ${e[o]}`)
  }
  return n.join(`
`)
}
function YX(r) {
  const t = Be.getPrimaries(Be.workingColorSpace),
    e = Be.getPrimaries(r)
  let n
  switch (
    (t === e
      ? (n = '')
      : t === my && e === gy
      ? (n = 'LinearDisplayP3ToLinearSRGB')
      : t === gy && e === my && (n = 'LinearSRGBToLinearDisplayP3'),
    r)
  ) {
    case ar:
    case I0:
      return [n, 'LinearTransferOETF']
    case cn:
    case PM:
      return [n, 'sRGBTransferOETF']
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported color space:', r),
        [n, 'LinearTransferOETF']
      )
  }
}
function F2(r, t, e) {
  const n = r.getShaderParameter(t, r.COMPILE_STATUS),
    i = r.getShaderInfoLog(t).trim()
  if (n && i === '') return ''
  const a = /ERROR: 0:(\d+)/.exec(i)
  if (a) {
    const o = parseInt(a[1])
    return (
      e.toUpperCase() +
      `

` +
      i +
      `

` +
      XX(r.getShaderSource(t), o)
    )
  } else return i
}
function $X(r, t) {
  const e = YX(t)
  return `vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`
}
function qX(r, t) {
  let e
  switch (t) {
    case K8:
      e = 'Linear'
      break
    case j8:
      e = 'Reinhard'
      break
    case J8:
      e = 'OptimizedCineon'
      break
    case Q8:
      e = 'ACESFilmic'
      break
    case e6:
      e = 'AgX'
      break
    case n6:
      e = 'Neutral'
      break
    case t6:
      e = 'Custom'
      break
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', t),
        (e = 'Linear')
  }
  return (
    'vec3 ' + r + '( vec3 color ) { return ' + e + 'ToneMapping( color ); }'
  )
}
function ZX(r) {
  return [
    r.extensionClipCullDistance
      ? '#extension GL_ANGLE_clip_cull_distance : require'
      : '',
    r.extensionMultiDraw ? '#extension GL_ANGLE_multi_draw : require' : '',
  ].filter(Dd).join(`
`)
}
function KX(r) {
  const t = []
  for (const e in r) {
    const n = r[e]
    n !== !1 && t.push('#define ' + e + ' ' + n)
  }
  return t.join(`
`)
}
function jX(r, t) {
  const e = {},
    n = r.getProgramParameter(t, r.ACTIVE_ATTRIBUTES)
  for (let i = 0; i < n; i++) {
    const a = r.getActiveAttrib(t, i),
      o = a.name
    let s = 1
    a.type === r.FLOAT_MAT2 && (s = 2),
      a.type === r.FLOAT_MAT3 && (s = 3),
      a.type === r.FLOAT_MAT4 && (s = 4),
      (e[o] = {
        type: a.type,
        location: r.getAttribLocation(t, o),
        locationSize: s,
      })
  }
  return e
}
function Dd(r) {
  return r !== ''
}
function z2(r, t) {
  const e =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps
  return r
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, e)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function U2(r, t) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection,
    )
}
const JX = /^[ \t]*#include +<([\w\d./]+)>/gm
function $A(r) {
  return r.replace(JX, tY)
}
const QX = new Map()
function tY(r, t) {
  let e = me[t]
  if (e === void 0) {
    const n = QX.get(t)
    if (n !== void 0)
      (e = me[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          t,
          n,
        )
    else throw new Error('Can not resolve #include <' + t + '>')
  }
  return $A(e)
}
const eY =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g
function V2(r) {
  return r.replace(eY, nY)
}
function nY(r, t, e, n) {
  let i = ''
  for (let a = parseInt(t); a < parseInt(e); a++)
    i += n
      .replace(/\[\s*i\s*\]/g, '[ ' + a + ' ]')
      .replace(/UNROLLED_LOOP_INDEX/g, a)
  return i
}
function G2(r) {
  let t = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`
  return (
    r.precision === 'highp'
      ? (t += `
#define HIGH_PRECISION`)
      : r.precision === 'mediump'
      ? (t += `
#define MEDIUM_PRECISION`)
      : r.precision === 'lowp' &&
        (t += `
#define LOW_PRECISION`),
    t
  )
}
function rY(r) {
  let t = 'SHADOWMAP_TYPE_BASIC'
  return (
    r.shadowMapType === Nk
      ? (t = 'SHADOWMAP_TYPE_PCF')
      : r.shadowMapType === A8
      ? (t = 'SHADOWMAP_TYPE_PCF_SOFT')
      : r.shadowMapType === Po && (t = 'SHADOWMAP_TYPE_VSM'),
    t
  )
}
function iY(r) {
  let t = 'ENVMAP_TYPE_CUBE'
  if (r.envMap)
    switch (r.envMapMode) {
      case Fh:
      case zh:
        t = 'ENVMAP_TYPE_CUBE'
        break
      case R0:
        t = 'ENVMAP_TYPE_CUBE_UV'
        break
    }
  return t
}
function aY(r) {
  let t = 'ENVMAP_MODE_REFLECTION'
  if (r.envMap)
    switch (r.envMapMode) {
      case zh:
        t = 'ENVMAP_MODE_REFRACTION'
        break
    }
  return t
}
function oY(r) {
  let t = 'ENVMAP_BLENDING_NONE'
  if (r.envMap)
    switch (r.combine) {
      case AM:
        t = 'ENVMAP_BLENDING_MULTIPLY'
        break
      case q8:
        t = 'ENVMAP_BLENDING_MIX'
        break
      case Z8:
        t = 'ENVMAP_BLENDING_ADD'
        break
    }
  return t
}
function sY(r) {
  const t = r.envMapCubeUVHeight
  if (t === null) return null
  const e = Math.log2(t) - 2,
    n = 1 / t
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
    texelHeight: n,
    maxMip: e,
  }
}
function lY(r, t, e, n) {
  const i = r.getContext(),
    a = e.defines
  let o = e.vertexShader,
    s = e.fragmentShader
  const l = rY(e),
    u = iY(e),
    c = aY(e),
    h = oY(e),
    f = sY(e),
    d = ZX(e),
    p = KX(a),
    g = i.createProgram()
  let v,
    m,
    y = e.glslVersion
      ? '#version ' +
        e.glslVersion +
        `
`
      : ''
  e.isRawShaderMaterial
    ? ((v = [
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        p,
      ].filter(Dd).join(`
`)),
      v.length > 0 &&
        (v += `
`),
      (m = [
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        p,
      ].filter(Dd).join(`
`)),
      m.length > 0 &&
        (m += `
`))
    : ((v = [
        G2(e),
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        p,
        e.extensionClipCullDistance ? '#define USE_CLIP_DISTANCE' : '',
        e.batching ? '#define USE_BATCHING' : '',
        e.batchingColor ? '#define USE_BATCHING_COLOR' : '',
        e.instancing ? '#define USE_INSTANCING' : '',
        e.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
        e.instancingMorph ? '#define USE_INSTANCING_MORPH' : '',
        e.useFog && e.fog ? '#define USE_FOG' : '',
        e.useFog && e.fogExp2 ? '#define FOG_EXP2' : '',
        e.map ? '#define USE_MAP' : '',
        e.envMap ? '#define USE_ENVMAP' : '',
        e.envMap ? '#define ' + c : '',
        e.lightMap ? '#define USE_LIGHTMAP' : '',
        e.aoMap ? '#define USE_AOMAP' : '',
        e.bumpMap ? '#define USE_BUMPMAP' : '',
        e.normalMap ? '#define USE_NORMALMAP' : '',
        e.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        e.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        e.displacementMap ? '#define USE_DISPLACEMENTMAP' : '',
        e.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        e.anisotropy ? '#define USE_ANISOTROPY' : '',
        e.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        e.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        e.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        e.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        e.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        e.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        e.specularMap ? '#define USE_SPECULARMAP' : '',
        e.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        e.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        e.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        e.metalnessMap ? '#define USE_METALNESSMAP' : '',
        e.alphaMap ? '#define USE_ALPHAMAP' : '',
        e.alphaHash ? '#define USE_ALPHAHASH' : '',
        e.transmission ? '#define USE_TRANSMISSION' : '',
        e.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        e.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        e.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        e.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        e.mapUv ? '#define MAP_UV ' + e.mapUv : '',
        e.alphaMapUv ? '#define ALPHAMAP_UV ' + e.alphaMapUv : '',
        e.lightMapUv ? '#define LIGHTMAP_UV ' + e.lightMapUv : '',
        e.aoMapUv ? '#define AOMAP_UV ' + e.aoMapUv : '',
        e.emissiveMapUv ? '#define EMISSIVEMAP_UV ' + e.emissiveMapUv : '',
        e.bumpMapUv ? '#define BUMPMAP_UV ' + e.bumpMapUv : '',
        e.normalMapUv ? '#define NORMALMAP_UV ' + e.normalMapUv : '',
        e.displacementMapUv
          ? '#define DISPLACEMENTMAP_UV ' + e.displacementMapUv
          : '',
        e.metalnessMapUv ? '#define METALNESSMAP_UV ' + e.metalnessMapUv : '',
        e.roughnessMapUv ? '#define ROUGHNESSMAP_UV ' + e.roughnessMapUv : '',
        e.anisotropyMapUv
          ? '#define ANISOTROPYMAP_UV ' + e.anisotropyMapUv
          : '',
        e.clearcoatMapUv ? '#define CLEARCOATMAP_UV ' + e.clearcoatMapUv : '',
        e.clearcoatNormalMapUv
          ? '#define CLEARCOAT_NORMALMAP_UV ' + e.clearcoatNormalMapUv
          : '',
        e.clearcoatRoughnessMapUv
          ? '#define CLEARCOAT_ROUGHNESSMAP_UV ' + e.clearcoatRoughnessMapUv
          : '',
        e.iridescenceMapUv
          ? '#define IRIDESCENCEMAP_UV ' + e.iridescenceMapUv
          : '',
        e.iridescenceThicknessMapUv
          ? '#define IRIDESCENCE_THICKNESSMAP_UV ' + e.iridescenceThicknessMapUv
          : '',
        e.sheenColorMapUv
          ? '#define SHEEN_COLORMAP_UV ' + e.sheenColorMapUv
          : '',
        e.sheenRoughnessMapUv
          ? '#define SHEEN_ROUGHNESSMAP_UV ' + e.sheenRoughnessMapUv
          : '',
        e.specularMapUv ? '#define SPECULARMAP_UV ' + e.specularMapUv : '',
        e.specularColorMapUv
          ? '#define SPECULAR_COLORMAP_UV ' + e.specularColorMapUv
          : '',
        e.specularIntensityMapUv
          ? '#define SPECULAR_INTENSITYMAP_UV ' + e.specularIntensityMapUv
          : '',
        e.transmissionMapUv
          ? '#define TRANSMISSIONMAP_UV ' + e.transmissionMapUv
          : '',
        e.thicknessMapUv ? '#define THICKNESSMAP_UV ' + e.thicknessMapUv : '',
        e.vertexTangents && e.flatShading === !1 ? '#define USE_TANGENT' : '',
        e.vertexColors ? '#define USE_COLOR' : '',
        e.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        e.vertexUv1s ? '#define USE_UV1' : '',
        e.vertexUv2s ? '#define USE_UV2' : '',
        e.vertexUv3s ? '#define USE_UV3' : '',
        e.pointsUvs ? '#define USE_POINTS_UV' : '',
        e.flatShading ? '#define FLAT_SHADED' : '',
        e.skinning ? '#define USE_SKINNING' : '',
        e.morphTargets ? '#define USE_MORPHTARGETS' : '',
        e.morphNormals && e.flatShading === !1
          ? '#define USE_MORPHNORMALS'
          : '',
        e.morphColors ? '#define USE_MORPHCOLORS' : '',
        e.morphTargetsCount > 0
          ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + e.morphTextureStride
          : '',
        e.morphTargetsCount > 0
          ? '#define MORPHTARGETS_COUNT ' + e.morphTargetsCount
          : '',
        e.doubleSided ? '#define DOUBLE_SIDED' : '',
        e.flipSided ? '#define FLIP_SIDED' : '',
        e.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        e.shadowMapEnabled ? '#define ' + l : '',
        e.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        e.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        e.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        'uniform mat4 modelMatrix;',
        'uniform mat4 modelViewMatrix;',
        'uniform mat4 projectionMatrix;',
        'uniform mat4 viewMatrix;',
        'uniform mat3 normalMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        '#ifdef USE_INSTANCING',
        '	attribute mat4 instanceMatrix;',
        '#endif',
        '#ifdef USE_INSTANCING_COLOR',
        '	attribute vec3 instanceColor;',
        '#endif',
        '#ifdef USE_INSTANCING_MORPH',
        '	uniform sampler2D morphTexture;',
        '#endif',
        'attribute vec3 position;',
        'attribute vec3 normal;',
        'attribute vec2 uv;',
        '#ifdef USE_UV1',
        '	attribute vec2 uv1;',
        '#endif',
        '#ifdef USE_UV2',
        '	attribute vec2 uv2;',
        '#endif',
        '#ifdef USE_UV3',
        '	attribute vec2 uv3;',
        '#endif',
        '#ifdef USE_TANGENT',
        '	attribute vec4 tangent;',
        '#endif',
        '#if defined( USE_COLOR_ALPHA )',
        '	attribute vec4 color;',
        '#elif defined( USE_COLOR )',
        '	attribute vec3 color;',
        '#endif',
        '#ifdef USE_SKINNING',
        '	attribute vec4 skinIndex;',
        '	attribute vec4 skinWeight;',
        '#endif',
        `
`,
      ].filter(Dd).join(`
`)),
      (m = [
        G2(e),
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        p,
        e.useFog && e.fog ? '#define USE_FOG' : '',
        e.useFog && e.fogExp2 ? '#define FOG_EXP2' : '',
        e.alphaToCoverage ? '#define ALPHA_TO_COVERAGE' : '',
        e.map ? '#define USE_MAP' : '',
        e.matcap ? '#define USE_MATCAP' : '',
        e.envMap ? '#define USE_ENVMAP' : '',
        e.envMap ? '#define ' + u : '',
        e.envMap ? '#define ' + c : '',
        e.envMap ? '#define ' + h : '',
        f ? '#define CUBEUV_TEXEL_WIDTH ' + f.texelWidth : '',
        f ? '#define CUBEUV_TEXEL_HEIGHT ' + f.texelHeight : '',
        f ? '#define CUBEUV_MAX_MIP ' + f.maxMip + '.0' : '',
        e.lightMap ? '#define USE_LIGHTMAP' : '',
        e.aoMap ? '#define USE_AOMAP' : '',
        e.bumpMap ? '#define USE_BUMPMAP' : '',
        e.normalMap ? '#define USE_NORMALMAP' : '',
        e.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        e.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        e.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        e.anisotropy ? '#define USE_ANISOTROPY' : '',
        e.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        e.clearcoat ? '#define USE_CLEARCOAT' : '',
        e.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        e.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        e.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        e.dispersion ? '#define USE_DISPERSION' : '',
        e.iridescence ? '#define USE_IRIDESCENCE' : '',
        e.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        e.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        e.specularMap ? '#define USE_SPECULARMAP' : '',
        e.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        e.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        e.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        e.metalnessMap ? '#define USE_METALNESSMAP' : '',
        e.alphaMap ? '#define USE_ALPHAMAP' : '',
        e.alphaTest ? '#define USE_ALPHATEST' : '',
        e.alphaHash ? '#define USE_ALPHAHASH' : '',
        e.sheen ? '#define USE_SHEEN' : '',
        e.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        e.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        e.transmission ? '#define USE_TRANSMISSION' : '',
        e.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        e.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        e.vertexTangents && e.flatShading === !1 ? '#define USE_TANGENT' : '',
        e.vertexColors || e.instancingColor || e.batchingColor
          ? '#define USE_COLOR'
          : '',
        e.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        e.vertexUv1s ? '#define USE_UV1' : '',
        e.vertexUv2s ? '#define USE_UV2' : '',
        e.vertexUv3s ? '#define USE_UV3' : '',
        e.pointsUvs ? '#define USE_POINTS_UV' : '',
        e.gradientMap ? '#define USE_GRADIENTMAP' : '',
        e.flatShading ? '#define FLAT_SHADED' : '',
        e.doubleSided ? '#define DOUBLE_SIDED' : '',
        e.flipSided ? '#define FLIP_SIDED' : '',
        e.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        e.shadowMapEnabled ? '#define ' + l : '',
        e.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
        e.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        e.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
        e.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        'uniform mat4 viewMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        e.toneMapping !== Ys ? '#define TONE_MAPPING' : '',
        e.toneMapping !== Ys ? me.tonemapping_pars_fragment : '',
        e.toneMapping !== Ys ? qX('toneMapping', e.toneMapping) : '',
        e.dithering ? '#define DITHERING' : '',
        e.opaque ? '#define OPAQUE' : '',
        me.colorspace_pars_fragment,
        $X('linearToOutputTexel', e.outputColorSpace),
        e.useDepthPacking ? '#define DEPTH_PACKING ' + e.depthPacking : '',
        `
`,
      ].filter(Dd).join(`
`))),
    (o = $A(o)),
    (o = z2(o, e)),
    (o = U2(o, e)),
    (s = $A(s)),
    (s = z2(s, e)),
    (s = U2(s, e)),
    (o = V2(o)),
    (s = V2(s)),
    e.isRawShaderMaterial !== !0 &&
      ((y = `#version 300 es
`),
      (v =
        [
          d,
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        v),
      (m =
        [
          '#define varying in',
          e.glslVersion === n2
            ? ''
            : 'layout(location = 0) out highp vec4 pc_fragColor;',
          e.glslVersion === n2 ? '' : '#define gl_FragColor pc_fragColor',
          '#define gl_FragDepthEXT gl_FragDepth',
          '#define texture2D texture',
          '#define textureCube texture',
          '#define texture2DProj textureProj',
          '#define texture2DLodEXT textureLod',
          '#define texture2DProjLodEXT textureProjLod',
          '#define textureCubeLodEXT textureLod',
          '#define texture2DGradEXT textureGrad',
          '#define texture2DProjGradEXT textureProjGrad',
          '#define textureCubeGradEXT textureGrad',
        ].join(`
`) +
        `
` +
        m))
  const _ = y + v + o,
    x = y + m + s,
    A = B2(i, i.VERTEX_SHADER, _),
    S = B2(i, i.FRAGMENT_SHADER, x)
  i.attachShader(g, A),
    i.attachShader(g, S),
    e.index0AttributeName !== void 0
      ? i.bindAttribLocation(g, 0, e.index0AttributeName)
      : e.morphTargets === !0 && i.bindAttribLocation(g, 0, 'position'),
    i.linkProgram(g)
  function b(C) {
    if (r.debug.checkShaderErrors) {
      const E = i.getProgramInfoLog(g).trim(),
        D = i.getShaderInfoLog(A).trim(),
        P = i.getShaderInfoLog(S).trim()
      let L = !0,
        I = !0
      if (i.getProgramParameter(g, i.LINK_STATUS) === !1)
        if (((L = !1), typeof r.debug.onShaderError == 'function'))
          r.debug.onShaderError(i, g, A, S)
        else {
          const F = F2(i, A, 'vertex'),
            k = F2(i, S, 'fragment')
          console.error(
            'THREE.WebGLProgram: Shader Error ' +
              i.getError() +
              ' - VALIDATE_STATUS ' +
              i.getProgramParameter(g, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              C.name +
              `
Material Type: ` +
              C.type +
              `

Program Info Log: ` +
              E +
              `
` +
              F +
              `
` +
              k,
          )
        }
      else
        E !== ''
          ? console.warn('THREE.WebGLProgram: Program Info Log:', E)
          : (D === '' || P === '') && (I = !1)
      I &&
        (C.diagnostics = {
          runnable: L,
          programLog: E,
          vertexShader: {
            log: D,
            prefix: v,
          },
          fragmentShader: {
            log: P,
            prefix: m,
          },
        })
    }
    i.deleteShader(A), i.deleteShader(S), (T = new zm(i, g)), (w = jX(i, g))
  }
  let T
  this.getUniforms = function () {
    return T === void 0 && b(this), T
  }
  let w
  this.getAttributes = function () {
    return w === void 0 && b(this), w
  }
  let M = e.rendererExtensionParallelShaderCompile === !1
  return (
    (this.isReady = function () {
      return M === !1 && (M = i.getProgramParameter(g, HX)), M
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(g),
        (this.program = void 0)
    }),
    (this.type = e.shaderType),
    (this.name = e.shaderName),
    (this.id = WX++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = g),
    (this.vertexShader = A),
    (this.fragmentShader = S),
    this
  )
}
let uY = 0
class cY {
  constructor() {
    ;(this.shaderCache = new Map()), (this.materialCache = new Map())
  }
  update(t) {
    const e = t.vertexShader,
      n = t.fragmentShader,
      i = this._getShaderStage(e),
      a = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(t)
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(a) === !1 && (o.add(a), a.usedTimes++),
      this
    )
  }
  remove(t) {
    const e = this.materialCache.get(t)
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code)
    return this.materialCache.delete(t), this
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear()
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache
    let n = e.get(t)
    return n === void 0 && ((n = new Set()), e.set(t, n)), n
  }
  _getShaderStage(t) {
    const e = this.shaderCache
    let n = e.get(t)
    return n === void 0 && ((n = new hY(t)), e.set(t, n)), n
  }
}
class hY {
  constructor(t) {
    ;(this.id = uY++), (this.code = t), (this.usedTimes = 0)
  }
}
function fY(r, t, e, n, i, a, o) {
  const s = new NM(),
    l = new cY(),
    u = new Set(),
    c = [],
    h = i.logarithmicDepthBuffer,
    f = i.vertexTextures
  let d = i.precision
  const p = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite',
  }
  function g(w) {
    return u.add(w), w === 0 ? 'uv' : `uv${w}`
  }
  function v(w, M, C, E, D) {
    const P = E.fog,
      L = D.geometry,
      I = w.isMeshStandardMaterial ? E.environment : null,
      F = (w.isMeshStandardMaterial ? e : t).get(w.envMap || I),
      k = F && F.mapping === R0 ? F.image.height : null,
      V = p[w.type]
    w.precision !== null &&
      ((d = i.getMaxPrecision(w.precision)),
      d !== w.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          w.precision,
          'not supported, using',
          d,
          'instead.',
        ))
    const H =
        L.morphAttributes.position ||
        L.morphAttributes.normal ||
        L.morphAttributes.color,
      Y = H !== void 0 ? H.length : 0
    let K = 0
    L.morphAttributes.position !== void 0 && (K = 1),
      L.morphAttributes.normal !== void 0 && (K = 2),
      L.morphAttributes.color !== void 0 && (K = 3)
    let ut, W, Z, ft
    if (V) {
      const Ie = qr[V]
      ;(ut = Ie.vertexShader), (W = Ie.fragmentShader)
    } else
      (ut = w.vertexShader),
        (W = w.fragmentShader),
        l.update(w),
        (Z = l.getVertexShaderID(w)),
        (ft = l.getFragmentShaderID(w))
    const lt = r.getRenderTarget(),
      ct = D.isInstancedMesh === !0,
      At = D.isBatchedMesh === !0,
      gt = !!w.map,
      dt = !!w.matcap,
      B = !!F,
      ht = !!w.aoMap,
      it = !!w.lightMap,
      xt = !!w.bumpMap,
      rt = !!w.normalMap,
      kt = !!w.displacementMap,
      Ct = !!w.emissiveMap,
      Lt = !!w.metalnessMap,
      G = !!w.roughnessMap,
      N = w.anisotropy > 0,
      J = w.clearcoat > 0,
      vt = w.dispersion > 0,
      yt = w.iridescence > 0,
      mt = w.sheen > 0,
      Kt = w.transmission > 0,
      It = N && !!w.anisotropyMap,
      Bt = J && !!w.clearcoatMap,
      fe = J && !!w.clearcoatNormalMap,
      Mt = J && !!w.clearcoatRoughnessMap,
      Ot = yt && !!w.iridescenceMap,
      Te = yt && !!w.iridescenceThicknessMap,
      se = mt && !!w.sheenColorMap,
      Gt = mt && !!w.sheenRoughnessMap,
      ue = !!w.specularMap,
      de = !!w.specularColorMap,
      ln = !!w.specularIntensityMap,
      O = Kt && !!w.transmissionMap,
      j = Kt && !!w.thicknessMap,
      tt = !!w.gradientMap,
      ot = !!w.alphaMap,
      St = w.alphaTest > 0,
      jt = !!w.alphaHash,
      ce = !!w.extensions
    let Tn = Ys
    w.toneMapped &&
      (lt === null || lt.isXRRenderTarget === !0) &&
      (Tn = r.toneMapping)
    const Gn = {
      shaderID: V,
      shaderType: w.type,
      shaderName: w.name,
      vertexShader: ut,
      fragmentShader: W,
      defines: w.defines,
      customVertexShaderID: Z,
      customFragmentShaderID: ft,
      isRawShaderMaterial: w.isRawShaderMaterial === !0,
      glslVersion: w.glslVersion,
      precision: d,
      batching: At,
      batchingColor: At && D._colorsTexture !== null,
      instancing: ct,
      instancingColor: ct && D.instanceColor !== null,
      instancingMorph: ct && D.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        lt === null
          ? r.outputColorSpace
          : lt.isXRRenderTarget === !0
          ? lt.texture.colorSpace
          : ar,
      alphaToCoverage: !!w.alphaToCoverage,
      map: gt,
      matcap: dt,
      envMap: B,
      envMapMode: B && F.mapping,
      envMapCubeUVHeight: k,
      aoMap: ht,
      lightMap: it,
      bumpMap: xt,
      normalMap: rt,
      displacementMap: f && kt,
      emissiveMap: Ct,
      normalMapObjectSpace: rt && w.normalMapType === l6,
      normalMapTangentSpace: rt && w.normalMapType === LM,
      metalnessMap: Lt,
      roughnessMap: G,
      anisotropy: N,
      anisotropyMap: It,
      clearcoat: J,
      clearcoatMap: Bt,
      clearcoatNormalMap: fe,
      clearcoatRoughnessMap: Mt,
      dispersion: vt,
      iridescence: yt,
      iridescenceMap: Ot,
      iridescenceThicknessMap: Te,
      sheen: mt,
      sheenColorMap: se,
      sheenRoughnessMap: Gt,
      specularMap: ue,
      specularColorMap: de,
      specularIntensityMap: ln,
      transmission: Kt,
      transmissionMap: O,
      thicknessMap: j,
      gradientMap: tt,
      opaque:
        w.transparent === !1 && w.blending === bh && w.alphaToCoverage === !1,
      alphaMap: ot,
      alphaTest: St,
      alphaHash: jt,
      combine: w.combine,
      mapUv: gt && g(w.map.channel),
      aoMapUv: ht && g(w.aoMap.channel),
      lightMapUv: it && g(w.lightMap.channel),
      bumpMapUv: xt && g(w.bumpMap.channel),
      normalMapUv: rt && g(w.normalMap.channel),
      displacementMapUv: kt && g(w.displacementMap.channel),
      emissiveMapUv: Ct && g(w.emissiveMap.channel),
      metalnessMapUv: Lt && g(w.metalnessMap.channel),
      roughnessMapUv: G && g(w.roughnessMap.channel),
      anisotropyMapUv: It && g(w.anisotropyMap.channel),
      clearcoatMapUv: Bt && g(w.clearcoatMap.channel),
      clearcoatNormalMapUv: fe && g(w.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Mt && g(w.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ot && g(w.iridescenceMap.channel),
      iridescenceThicknessMapUv: Te && g(w.iridescenceThicknessMap.channel),
      sheenColorMapUv: se && g(w.sheenColorMap.channel),
      sheenRoughnessMapUv: Gt && g(w.sheenRoughnessMap.channel),
      specularMapUv: ue && g(w.specularMap.channel),
      specularColorMapUv: de && g(w.specularColorMap.channel),
      specularIntensityMapUv: ln && g(w.specularIntensityMap.channel),
      transmissionMapUv: O && g(w.transmissionMap.channel),
      thicknessMapUv: j && g(w.thicknessMap.channel),
      alphaMapUv: ot && g(w.alphaMap.channel),
      vertexTangents: !!L.attributes.tangent && (rt || N),
      vertexColors: w.vertexColors,
      vertexAlphas:
        w.vertexColors === !0 &&
        !!L.attributes.color &&
        L.attributes.color.itemSize === 4,
      pointsUvs: D.isPoints === !0 && !!L.attributes.uv && (gt || ot),
      fog: !!P,
      useFog: w.fog === !0,
      fogExp2: !!P && P.isFogExp2,
      flatShading: w.flatShading === !0,
      sizeAttenuation: w.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: D.isSkinnedMesh === !0,
      morphTargets: L.morphAttributes.position !== void 0,
      morphNormals: L.morphAttributes.normal !== void 0,
      morphColors: L.morphAttributes.color !== void 0,
      morphTargetsCount: Y,
      morphTextureStride: K,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: w.dithering,
      shadowMapEnabled: r.shadowMap.enabled && C.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Tn,
      decodeVideoTexture:
        gt &&
        w.map.isVideoTexture === !0 &&
        Be.getTransfer(w.map.colorSpace) === an,
      premultipliedAlpha: w.premultipliedAlpha,
      doubleSided: w.side === dr,
      flipSided: w.side === Qr,
      useDepthPacking: w.depthPacking >= 0,
      depthPacking: w.depthPacking || 0,
      index0AttributeName: w.index0AttributeName,
      extensionClipCullDistance:
        ce &&
        w.extensions.clipCullDistance === !0 &&
        n.has('WEBGL_clip_cull_distance'),
      extensionMultiDraw:
        ((ce && w.extensions.multiDraw === !0) || At) &&
        n.has('WEBGL_multi_draw'),
      rendererExtensionParallelShaderCompile: n.has(
        'KHR_parallel_shader_compile',
      ),
      customProgramCacheKey: w.customProgramCacheKey(),
    }
    return (
      (Gn.vertexUv1s = u.has(1)),
      (Gn.vertexUv2s = u.has(2)),
      (Gn.vertexUv3s = u.has(3)),
      u.clear(),
      Gn
    )
  }
  function m(w) {
    const M = []
    if (
      (w.shaderID
        ? M.push(w.shaderID)
        : (M.push(w.customVertexShaderID), M.push(w.customFragmentShaderID)),
      w.defines !== void 0)
    )
      for (const C in w.defines) M.push(C), M.push(w.defines[C])
    return (
      w.isRawShaderMaterial === !1 &&
        (y(M, w), _(M, w), M.push(r.outputColorSpace)),
      M.push(w.customProgramCacheKey),
      M.join()
    )
  }
  function y(w, M) {
    w.push(M.precision),
      w.push(M.outputColorSpace),
      w.push(M.envMapMode),
      w.push(M.envMapCubeUVHeight),
      w.push(M.mapUv),
      w.push(M.alphaMapUv),
      w.push(M.lightMapUv),
      w.push(M.aoMapUv),
      w.push(M.bumpMapUv),
      w.push(M.normalMapUv),
      w.push(M.displacementMapUv),
      w.push(M.emissiveMapUv),
      w.push(M.metalnessMapUv),
      w.push(M.roughnessMapUv),
      w.push(M.anisotropyMapUv),
      w.push(M.clearcoatMapUv),
      w.push(M.clearcoatNormalMapUv),
      w.push(M.clearcoatRoughnessMapUv),
      w.push(M.iridescenceMapUv),
      w.push(M.iridescenceThicknessMapUv),
      w.push(M.sheenColorMapUv),
      w.push(M.sheenRoughnessMapUv),
      w.push(M.specularMapUv),
      w.push(M.specularColorMapUv),
      w.push(M.specularIntensityMapUv),
      w.push(M.transmissionMapUv),
      w.push(M.thicknessMapUv),
      w.push(M.combine),
      w.push(M.fogExp2),
      w.push(M.sizeAttenuation),
      w.push(M.morphTargetsCount),
      w.push(M.morphAttributeCount),
      w.push(M.numDirLights),
      w.push(M.numPointLights),
      w.push(M.numSpotLights),
      w.push(M.numSpotLightMaps),
      w.push(M.numHemiLights),
      w.push(M.numRectAreaLights),
      w.push(M.numDirLightShadows),
      w.push(M.numPointLightShadows),
      w.push(M.numSpotLightShadows),
      w.push(M.numSpotLightShadowsWithMaps),
      w.push(M.numLightProbes),
      w.push(M.shadowMapType),
      w.push(M.toneMapping),
      w.push(M.numClippingPlanes),
      w.push(M.numClipIntersection),
      w.push(M.depthPacking)
  }
  function _(w, M) {
    s.disableAll(),
      M.supportsVertexTextures && s.enable(0),
      M.instancing && s.enable(1),
      M.instancingColor && s.enable(2),
      M.instancingMorph && s.enable(3),
      M.matcap && s.enable(4),
      M.envMap && s.enable(5),
      M.normalMapObjectSpace && s.enable(6),
      M.normalMapTangentSpace && s.enable(7),
      M.clearcoat && s.enable(8),
      M.iridescence && s.enable(9),
      M.alphaTest && s.enable(10),
      M.vertexColors && s.enable(11),
      M.vertexAlphas && s.enable(12),
      M.vertexUv1s && s.enable(13),
      M.vertexUv2s && s.enable(14),
      M.vertexUv3s && s.enable(15),
      M.vertexTangents && s.enable(16),
      M.anisotropy && s.enable(17),
      M.alphaHash && s.enable(18),
      M.batching && s.enable(19),
      M.dispersion && s.enable(20),
      M.batchingColor && s.enable(21),
      w.push(s.mask),
      s.disableAll(),
      M.fog && s.enable(0),
      M.useFog && s.enable(1),
      M.flatShading && s.enable(2),
      M.logarithmicDepthBuffer && s.enable(3),
      M.skinning && s.enable(4),
      M.morphTargets && s.enable(5),
      M.morphNormals && s.enable(6),
      M.morphColors && s.enable(7),
      M.premultipliedAlpha && s.enable(8),
      M.shadowMapEnabled && s.enable(9),
      M.doubleSided && s.enable(10),
      M.flipSided && s.enable(11),
      M.useDepthPacking && s.enable(12),
      M.dithering && s.enable(13),
      M.transmission && s.enable(14),
      M.sheen && s.enable(15),
      M.opaque && s.enable(16),
      M.pointsUvs && s.enable(17),
      M.decodeVideoTexture && s.enable(18),
      M.alphaToCoverage && s.enable(19),
      w.push(s.mask)
  }
  function x(w) {
    const M = p[w.type]
    let C
    if (M) {
      const E = qr[M]
      C = kM.clone(E.uniforms)
    } else C = w.uniforms
    return C
  }
  function A(w, M) {
    let C
    for (let E = 0, D = c.length; E < D; E++) {
      const P = c[E]
      if (P.cacheKey === M) {
        ;(C = P), ++C.usedTimes
        break
      }
    }
    return C === void 0 && ((C = new lY(r, M, w, a)), c.push(C)), C
  }
  function S(w) {
    if (--w.usedTimes === 0) {
      const M = c.indexOf(w)
      ;(c[M] = c[c.length - 1]), c.pop(), w.destroy()
    }
  }
  function b(w) {
    l.remove(w)
  }
  function T() {
    l.dispose()
  }
  return {
    getParameters: v,
    getProgramCacheKey: m,
    getUniforms: x,
    acquireProgram: A,
    releaseProgram: S,
    releaseShaderCache: b,
    programs: c,
    dispose: T,
  }
}
function dY() {
  let r = new WeakMap()
  function t(a) {
    let o = r.get(a)
    return o === void 0 && ((o = {}), r.set(a, o)), o
  }
  function e(a) {
    r.delete(a)
  }
  function n(a, o, s) {
    r.get(a)[o] = s
  }
  function i() {
    r = new WeakMap()
  }
  return {
    get: t,
    remove: e,
    update: n,
    dispose: i,
  }
}
function pY(r, t) {
  return r.groupOrder !== t.groupOrder
    ? r.groupOrder - t.groupOrder
    : r.renderOrder !== t.renderOrder
    ? r.renderOrder - t.renderOrder
    : r.material.id !== t.material.id
    ? r.material.id - t.material.id
    : r.z !== t.z
    ? r.z - t.z
    : r.id - t.id
}
function H2(r, t) {
  return r.groupOrder !== t.groupOrder
    ? r.groupOrder - t.groupOrder
    : r.renderOrder !== t.renderOrder
    ? r.renderOrder - t.renderOrder
    : r.z !== t.z
    ? t.z - r.z
    : r.id - t.id
}
function W2() {
  const r = []
  let t = 0
  const e = [],
    n = [],
    i = []
  function a() {
    ;(t = 0), (e.length = 0), (n.length = 0), (i.length = 0)
  }
  function o(h, f, d, p, g, v) {
    let m = r[t]
    return (
      m === void 0
        ? ((m = {
            id: h.id,
            object: h,
            geometry: f,
            material: d,
            groupOrder: p,
            renderOrder: h.renderOrder,
            z: g,
            group: v,
          }),
          (r[t] = m))
        : ((m.id = h.id),
          (m.object = h),
          (m.geometry = f),
          (m.material = d),
          (m.groupOrder = p),
          (m.renderOrder = h.renderOrder),
          (m.z = g),
          (m.group = v)),
      t++,
      m
    )
  }
  function s(h, f, d, p, g, v) {
    const m = o(h, f, d, p, g, v)
    d.transmission > 0
      ? n.push(m)
      : d.transparent === !0
      ? i.push(m)
      : e.push(m)
  }
  function l(h, f, d, p, g, v) {
    const m = o(h, f, d, p, g, v)
    d.transmission > 0
      ? n.unshift(m)
      : d.transparent === !0
      ? i.unshift(m)
      : e.unshift(m)
  }
  function u(h, f) {
    e.length > 1 && e.sort(h || pY),
      n.length > 1 && n.sort(f || H2),
      i.length > 1 && i.sort(f || H2)
  }
  function c() {
    for (let h = t, f = r.length; h < f; h++) {
      const d = r[h]
      if (d.id === null) break
      ;(d.id = null),
        (d.object = null),
        (d.geometry = null),
        (d.material = null),
        (d.group = null)
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: i,
    init: a,
    push: s,
    unshift: l,
    finish: c,
    sort: u,
  }
}
function vY() {
  let r = new WeakMap()
  function t(n, i) {
    const a = r.get(n)
    let o
    return (
      a === void 0
        ? ((o = new W2()), r.set(n, [o]))
        : i >= a.length
        ? ((o = new W2()), a.push(o))
        : (o = a[i]),
      o
    )
  }
  function e() {
    r = new WeakMap()
  }
  return {
    get: t,
    dispose: e,
  }
}
function gY() {
  const r = {}
  return {
    get: function (t) {
      if (r[t.id] !== void 0) return r[t.id]
      let e
      switch (t.type) {
        case 'DirectionalLight':
          e = {
            direction: new U(),
            color: new qt(),
          }
          break
        case 'SpotLight':
          e = {
            position: new U(),
            direction: new U(),
            color: new qt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          }
          break
        case 'PointLight':
          e = {
            position: new U(),
            color: new qt(),
            distance: 0,
            decay: 0,
          }
          break
        case 'HemisphereLight':
          e = {
            direction: new U(),
            skyColor: new qt(),
            groundColor: new qt(),
          }
          break
        case 'RectAreaLight':
          e = {
            color: new qt(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U(),
          }
          break
      }
      return (r[t.id] = e), e
    },
  }
}
function mY() {
  const r = {}
  return {
    get: function (t) {
      if (r[t.id] !== void 0) return r[t.id]
      let e
      switch (t.type) {
        case 'DirectionalLight':
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new pt(),
          }
          break
        case 'SpotLight':
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new pt(),
          }
          break
        case 'PointLight':
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new pt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          }
          break
      }
      return (r[t.id] = e), e
    },
  }
}
let yY = 0
function _Y(r, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (r.map ? 1 : 0)
  )
}
function xY(r) {
  const t = new gY(),
    e = mY(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    }
  for (let u = 0; u < 9; u++) n.probe.push(new U())
  const i = new U(),
    a = new ae(),
    o = new ae()
  function s(u) {
    let c = 0,
      h = 0,
      f = 0
    for (let w = 0; w < 9; w++) n.probe[w].set(0, 0, 0)
    let d = 0,
      p = 0,
      g = 0,
      v = 0,
      m = 0,
      y = 0,
      _ = 0,
      x = 0,
      A = 0,
      S = 0,
      b = 0
    u.sort(_Y)
    for (let w = 0, M = u.length; w < M; w++) {
      const C = u[w],
        E = C.color,
        D = C.intensity,
        P = C.distance,
        L = C.shadow && C.shadow.map ? C.shadow.map.texture : null
      if (C.isAmbientLight) (c += E.r * D), (h += E.g * D), (f += E.b * D)
      else if (C.isLightProbe) {
        for (let I = 0; I < 9; I++)
          n.probe[I].addScaledVector(C.sh.coefficients[I], D)
        b++
      } else if (C.isDirectionalLight) {
        const I = t.get(C)
        if ((I.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow)) {
          const F = C.shadow,
            k = e.get(C)
          ;(k.shadowIntensity = F.intensity),
            (k.shadowBias = F.bias),
            (k.shadowNormalBias = F.normalBias),
            (k.shadowRadius = F.radius),
            (k.shadowMapSize = F.mapSize),
            (n.directionalShadow[d] = k),
            (n.directionalShadowMap[d] = L),
            (n.directionalShadowMatrix[d] = C.shadow.matrix),
            y++
        }
        ;(n.directional[d] = I), d++
      } else if (C.isSpotLight) {
        const I = t.get(C)
        I.position.setFromMatrixPosition(C.matrixWorld),
          I.color.copy(E).multiplyScalar(D),
          (I.distance = P),
          (I.coneCos = Math.cos(C.angle)),
          (I.penumbraCos = Math.cos(C.angle * (1 - C.penumbra))),
          (I.decay = C.decay),
          (n.spot[g] = I)
        const F = C.shadow
        if (
          (C.map &&
            ((n.spotLightMap[A] = C.map),
            A++,
            F.updateMatrices(C),
            C.castShadow && S++),
          (n.spotLightMatrix[g] = F.matrix),
          C.castShadow)
        ) {
          const k = e.get(C)
          ;(k.shadowIntensity = F.intensity),
            (k.shadowBias = F.bias),
            (k.shadowNormalBias = F.normalBias),
            (k.shadowRadius = F.radius),
            (k.shadowMapSize = F.mapSize),
            (n.spotShadow[g] = k),
            (n.spotShadowMap[g] = L),
            x++
        }
        g++
      } else if (C.isRectAreaLight) {
        const I = t.get(C)
        I.color.copy(E).multiplyScalar(D),
          I.halfWidth.set(C.width * 0.5, 0, 0),
          I.halfHeight.set(0, C.height * 0.5, 0),
          (n.rectArea[v] = I),
          v++
      } else if (C.isPointLight) {
        const I = t.get(C)
        if (
          (I.color.copy(C.color).multiplyScalar(C.intensity),
          (I.distance = C.distance),
          (I.decay = C.decay),
          C.castShadow)
        ) {
          const F = C.shadow,
            k = e.get(C)
          ;(k.shadowIntensity = F.intensity),
            (k.shadowBias = F.bias),
            (k.shadowNormalBias = F.normalBias),
            (k.shadowRadius = F.radius),
            (k.shadowMapSize = F.mapSize),
            (k.shadowCameraNear = F.camera.near),
            (k.shadowCameraFar = F.camera.far),
            (n.pointShadow[p] = k),
            (n.pointShadowMap[p] = L),
            (n.pointShadowMatrix[p] = C.shadow.matrix),
            _++
        }
        ;(n.point[p] = I), p++
      } else if (C.isHemisphereLight) {
        const I = t.get(C)
        I.skyColor.copy(C.color).multiplyScalar(D),
          I.groundColor.copy(C.groundColor).multiplyScalar(D),
          (n.hemi[m] = I),
          m++
      }
    }
    v > 0 &&
      (r.has('OES_texture_float_linear') === !0
        ? ((n.rectAreaLTC1 = Rt.LTC_FLOAT_1), (n.rectAreaLTC2 = Rt.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = Rt.LTC_HALF_1), (n.rectAreaLTC2 = Rt.LTC_HALF_2))),
      (n.ambient[0] = c),
      (n.ambient[1] = h),
      (n.ambient[2] = f)
    const T = n.hash
    ;(T.directionalLength !== d ||
      T.pointLength !== p ||
      T.spotLength !== g ||
      T.rectAreaLength !== v ||
      T.hemiLength !== m ||
      T.numDirectionalShadows !== y ||
      T.numPointShadows !== _ ||
      T.numSpotShadows !== x ||
      T.numSpotMaps !== A ||
      T.numLightProbes !== b) &&
      ((n.directional.length = d),
      (n.spot.length = g),
      (n.rectArea.length = v),
      (n.point.length = p),
      (n.hemi.length = m),
      (n.directionalShadow.length = y),
      (n.directionalShadowMap.length = y),
      (n.pointShadow.length = _),
      (n.pointShadowMap.length = _),
      (n.spotShadow.length = x),
      (n.spotShadowMap.length = x),
      (n.directionalShadowMatrix.length = y),
      (n.pointShadowMatrix.length = _),
      (n.spotLightMatrix.length = x + A - S),
      (n.spotLightMap.length = A),
      (n.numSpotLightShadowsWithMaps = S),
      (n.numLightProbes = b),
      (T.directionalLength = d),
      (T.pointLength = p),
      (T.spotLength = g),
      (T.rectAreaLength = v),
      (T.hemiLength = m),
      (T.numDirectionalShadows = y),
      (T.numPointShadows = _),
      (T.numSpotShadows = x),
      (T.numSpotMaps = A),
      (T.numLightProbes = b),
      (n.version = yY++))
  }
  function l(u, c) {
    let h = 0,
      f = 0,
      d = 0,
      p = 0,
      g = 0
    const v = c.matrixWorldInverse
    for (let m = 0, y = u.length; m < y; m++) {
      const _ = u[m]
      if (_.isDirectionalLight) {
        const x = n.directional[h]
        x.direction.setFromMatrixPosition(_.matrixWorld),
          i.setFromMatrixPosition(_.target.matrixWorld),
          x.direction.sub(i),
          x.direction.transformDirection(v),
          h++
      } else if (_.isSpotLight) {
        const x = n.spot[d]
        x.position.setFromMatrixPosition(_.matrixWorld),
          x.position.applyMatrix4(v),
          x.direction.setFromMatrixPosition(_.matrixWorld),
          i.setFromMatrixPosition(_.target.matrixWorld),
          x.direction.sub(i),
          x.direction.transformDirection(v),
          d++
      } else if (_.isRectAreaLight) {
        const x = n.rectArea[p]
        x.position.setFromMatrixPosition(_.matrixWorld),
          x.position.applyMatrix4(v),
          o.identity(),
          a.copy(_.matrixWorld),
          a.premultiply(v),
          o.extractRotation(a),
          x.halfWidth.set(_.width * 0.5, 0, 0),
          x.halfHeight.set(0, _.height * 0.5, 0),
          x.halfWidth.applyMatrix4(o),
          x.halfHeight.applyMatrix4(o),
          p++
      } else if (_.isPointLight) {
        const x = n.point[f]
        x.position.setFromMatrixPosition(_.matrixWorld),
          x.position.applyMatrix4(v),
          f++
      } else if (_.isHemisphereLight) {
        const x = n.hemi[g]
        x.direction.setFromMatrixPosition(_.matrixWorld),
          x.direction.transformDirection(v),
          g++
      }
    }
  }
  return {
    setup: s,
    setupView: l,
    state: n,
  }
}
function X2(r) {
  const t = new xY(r),
    e = [],
    n = []
  function i(c) {
    ;(u.camera = c), (e.length = 0), (n.length = 0)
  }
  function a(c) {
    e.push(c)
  }
  function o(c) {
    n.push(c)
  }
  function s() {
    t.setup(e)
  }
  function l(c) {
    t.setupView(e, c)
  }
  const u = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
  }
  return {
    init: i,
    state: u,
    setupLights: s,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o,
  }
}
function SY(r) {
  let t = new WeakMap()
  function e(i, a = 0) {
    const o = t.get(i)
    let s
    return (
      o === void 0
        ? ((s = new X2(r)), t.set(i, [s]))
        : a >= o.length
        ? ((s = new X2(r)), o.push(s))
        : (s = o[a]),
      s
    )
  }
  function n() {
    t = new WeakMap()
  }
  return {
    get: e,
    dispose: n,
  }
}
class AY extends ji {
  constructor(t) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = o6),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    )
  }
}
class bY extends ji {
  constructor(t) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    )
  }
}
const wY = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  MY = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`
function TY(r, t, e) {
  let n = new BM()
  const i = new pt(),
    a = new pt(),
    o = new Oe(),
    s = new AY({
      depthPacking: s6,
    }),
    l = new bY(),
    u = {},
    c = e.maxTextureSize,
    h = {
      [$o]: Qr,
      [Qr]: $o,
      [dr]: dr,
    },
    f = new lo({
      defines: {
        VSM_SAMPLES: 8,
      },
      uniforms: {
        shadow_pass: {
          value: null,
        },
        resolution: {
          value: new pt(),
        },
        radius: {
          value: 4,
        },
      },
      vertexShader: wY,
      fragmentShader: MY,
    }),
    d = f.clone()
  d.defines.HORIZONTAL_PASS = 1
  const p = new Mn()
  p.setAttribute(
    'position',
    new ir(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  )
  const g = new De(p, f),
    v = this
  ;(this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Nk)
  let m = this.type
  this.render = function (S, b, T) {
    if (
      v.enabled === !1 ||
      (v.autoUpdate === !1 && v.needsUpdate === !1) ||
      S.length === 0
    )
      return
    const w = r.getRenderTarget(),
      M = r.getActiveCubeFace(),
      C = r.getActiveMipmapLevel(),
      E = r.state
    E.setBlending(Xs),
      E.buffers.color.setClear(1, 1, 1, 1),
      E.buffers.depth.setTest(!0),
      E.setScissorTest(!1)
    const D = m !== Po && this.type === Po,
      P = m === Po && this.type !== Po
    for (let L = 0, I = S.length; L < I; L++) {
      const F = S[L],
        k = F.shadow
      if (k === void 0) {
        console.warn('THREE.WebGLShadowMap:', F, 'has no shadow.')
        continue
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue
      i.copy(k.mapSize)
      const V = k.getFrameExtents()
      if (
        (i.multiply(V),
        a.copy(k.mapSize),
        (i.x > c || i.y > c) &&
          (i.x > c &&
            ((a.x = Math.floor(c / V.x)),
            (i.x = a.x * V.x),
            (k.mapSize.x = a.x)),
          i.y > c &&
            ((a.y = Math.floor(c / V.y)),
            (i.y = a.y * V.y),
            (k.mapSize.y = a.y))),
        k.map === null || D === !0 || P === !0)
      ) {
        const Y =
          this.type !== Po
            ? {
                minFilter: Ur,
                magFilter: Ur,
              }
            : {}
        k.map !== null && k.map.dispose(),
          (k.map = new Vu(i.x, i.y, Y)),
          (k.map.texture.name = F.name + '.shadowMap'),
          k.camera.updateProjectionMatrix()
      }
      r.setRenderTarget(k.map), r.clear()
      const H = k.getViewportCount()
      for (let Y = 0; Y < H; Y++) {
        const K = k.getViewport(Y)
        o.set(a.x * K.x, a.y * K.y, a.x * K.z, a.y * K.w),
          E.viewport(o),
          k.updateMatrices(F, Y),
          (n = k.getFrustum()),
          x(b, T, k.camera, F, this.type)
      }
      k.isPointLightShadow !== !0 && this.type === Po && y(k, T),
        (k.needsUpdate = !1)
    }
    ;(m = this.type), (v.needsUpdate = !1), r.setRenderTarget(w, M, C)
  }
  function y(S, b) {
    const T = t.update(g)
    f.defines.VSM_SAMPLES !== S.blurSamples &&
      ((f.defines.VSM_SAMPLES = S.blurSamples),
      (d.defines.VSM_SAMPLES = S.blurSamples),
      (f.needsUpdate = !0),
      (d.needsUpdate = !0)),
      S.mapPass === null && (S.mapPass = new Vu(i.x, i.y)),
      (f.uniforms.shadow_pass.value = S.map.texture),
      (f.uniforms.resolution.value = S.mapSize),
      (f.uniforms.radius.value = S.radius),
      r.setRenderTarget(S.mapPass),
      r.clear(),
      r.renderBufferDirect(b, null, T, f, g, null),
      (d.uniforms.shadow_pass.value = S.mapPass.texture),
      (d.uniforms.resolution.value = S.mapSize),
      (d.uniforms.radius.value = S.radius),
      r.setRenderTarget(S.map),
      r.clear(),
      r.renderBufferDirect(b, null, T, d, g, null)
  }
  function _(S, b, T, w) {
    let M = null
    const C =
      T.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial
    if (C !== void 0) M = C
    else if (
      ((M = T.isPointLight === !0 ? l : s),
      (r.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0) ||
        (b.map && b.alphaTest > 0))
    ) {
      const E = M.uuid,
        D = b.uuid
      let P = u[E]
      P === void 0 && ((P = {}), (u[E] = P))
      let L = P[D]
      L === void 0 &&
        ((L = M.clone()), (P[D] = L), b.addEventListener('dispose', A)),
        (M = L)
    }
    if (
      ((M.visible = b.visible),
      (M.wireframe = b.wireframe),
      w === Po
        ? (M.side = b.shadowSide !== null ? b.shadowSide : b.side)
        : (M.side = b.shadowSide !== null ? b.shadowSide : h[b.side]),
      (M.alphaMap = b.alphaMap),
      (M.alphaTest = b.alphaTest),
      (M.map = b.map),
      (M.clipShadows = b.clipShadows),
      (M.clippingPlanes = b.clippingPlanes),
      (M.clipIntersection = b.clipIntersection),
      (M.displacementMap = b.displacementMap),
      (M.displacementScale = b.displacementScale),
      (M.displacementBias = b.displacementBias),
      (M.wireframeLinewidth = b.wireframeLinewidth),
      (M.linewidth = b.linewidth),
      T.isPointLight === !0 && M.isMeshDistanceMaterial === !0)
    ) {
      const E = r.properties.get(M)
      E.light = T
    }
    return M
  }
  function x(S, b, T, w, M) {
    if (S.visible === !1) return
    if (
      S.layers.test(b.layers) &&
      (S.isMesh || S.isLine || S.isPoints) &&
      (S.castShadow || (S.receiveShadow && M === Po)) &&
      (!S.frustumCulled || n.intersectsObject(S))
    ) {
      S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, S.matrixWorld)
      const D = t.update(S),
        P = S.material
      if (Array.isArray(P)) {
        const L = D.groups
        for (let I = 0, F = L.length; I < F; I++) {
          const k = L[I],
            V = P[k.materialIndex]
          if (V && V.visible) {
            const H = _(S, V, w, M)
            S.onBeforeShadow(r, S, b, T, D, H, k),
              r.renderBufferDirect(T, null, D, H, S, k),
              S.onAfterShadow(r, S, b, T, D, H, k)
          }
        }
      } else if (P.visible) {
        const L = _(S, P, w, M)
        S.onBeforeShadow(r, S, b, T, D, L, null),
          r.renderBufferDirect(T, null, D, L, S, null),
          S.onAfterShadow(r, S, b, T, D, L, null)
      }
    }
    const E = S.children
    for (let D = 0, P = E.length; D < P; D++) x(E[D], b, T, w, M)
  }
  function A(S) {
    S.target.removeEventListener('dispose', A)
    for (const T in u) {
      const w = u[T],
        M = S.target.uuid
      M in w && (w[M].dispose(), delete w[M])
    }
  }
}
function CY(r) {
  function t() {
    let O = !1
    const j = new Oe()
    let tt = null
    const ot = new Oe(0, 0, 0, 0)
    return {
      setMask: function (St) {
        tt !== St && !O && (r.colorMask(St, St, St, St), (tt = St))
      },
      setLocked: function (St) {
        O = St
      },
      setClear: function (St, jt, ce, Tn, Gn) {
        Gn === !0 && ((St *= Tn), (jt *= Tn), (ce *= Tn)),
          j.set(St, jt, ce, Tn),
          ot.equals(j) === !1 && (r.clearColor(St, jt, ce, Tn), ot.copy(j))
      },
      reset: function () {
        ;(O = !1), (tt = null), ot.set(-1, 0, 0, 0)
      },
    }
  }
  function e() {
    let O = !1,
      j = null,
      tt = null,
      ot = null
    return {
      setTest: function (St) {
        St ? ft(r.DEPTH_TEST) : lt(r.DEPTH_TEST)
      },
      setMask: function (St) {
        j !== St && !O && (r.depthMask(St), (j = St))
      },
      setFunc: function (St) {
        if (tt !== St) {
          switch (St) {
            case V8:
              r.depthFunc(r.NEVER)
              break
            case G8:
              r.depthFunc(r.ALWAYS)
              break
            case H8:
              r.depthFunc(r.LESS)
              break
            case dy:
              r.depthFunc(r.LEQUAL)
              break
            case W8:
              r.depthFunc(r.EQUAL)
              break
            case X8:
              r.depthFunc(r.GEQUAL)
              break
            case Y8:
              r.depthFunc(r.GREATER)
              break
            case $8:
              r.depthFunc(r.NOTEQUAL)
              break
            default:
              r.depthFunc(r.LEQUAL)
          }
          tt = St
        }
      },
      setLocked: function (St) {
        O = St
      },
      setClear: function (St) {
        ot !== St && (r.clearDepth(St), (ot = St))
      },
      reset: function () {
        ;(O = !1), (j = null), (tt = null), (ot = null)
      },
    }
  }
  function n() {
    let O = !1,
      j = null,
      tt = null,
      ot = null,
      St = null,
      jt = null,
      ce = null,
      Tn = null,
      Gn = null
    return {
      setTest: function (Ie) {
        O || (Ie ? ft(r.STENCIL_TEST) : lt(r.STENCIL_TEST))
      },
      setMask: function (Ie) {
        j !== Ie && !O && (r.stencilMask(Ie), (j = Ie))
      },
      setFunc: function (Ie, Hn, On) {
        ;(tt !== Ie || ot !== Hn || St !== On) &&
          (r.stencilFunc(Ie, Hn, On), (tt = Ie), (ot = Hn), (St = On))
      },
      setOp: function (Ie, Hn, On) {
        ;(jt !== Ie || ce !== Hn || Tn !== On) &&
          (r.stencilOp(Ie, Hn, On), (jt = Ie), (ce = Hn), (Tn = On))
      },
      setLocked: function (Ie) {
        O = Ie
      },
      setClear: function (Ie) {
        Gn !== Ie && (r.clearStencil(Ie), (Gn = Ie))
      },
      reset: function () {
        ;(O = !1),
          (j = null),
          (tt = null),
          (ot = null),
          (St = null),
          (jt = null),
          (ce = null),
          (Tn = null),
          (Gn = null)
      },
    }
  }
  const i = new t(),
    a = new e(),
    o = new n(),
    s = new WeakMap(),
    l = new WeakMap()
  let u = {},
    c = {},
    h = new WeakMap(),
    f = [],
    d = null,
    p = !1,
    g = null,
    v = null,
    m = null,
    y = null,
    _ = null,
    x = null,
    A = null,
    S = new qt(0, 0, 0),
    b = 0,
    T = !1,
    w = null,
    M = null,
    C = null,
    E = null,
    D = null
  const P = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
  let L = !1,
    I = 0
  const F = r.getParameter(r.VERSION)
  F.indexOf('WebGL') !== -1
    ? ((I = parseFloat(/^WebGL (\d)/.exec(F)[1])), (L = I >= 1))
    : F.indexOf('OpenGL ES') !== -1 &&
      ((I = parseFloat(/^OpenGL ES (\d)/.exec(F)[1])), (L = I >= 2))
  let k = null,
    V = {}
  const H = r.getParameter(r.SCISSOR_BOX),
    Y = r.getParameter(r.VIEWPORT),
    K = new Oe().fromArray(H),
    ut = new Oe().fromArray(Y)
  function W(O, j, tt, ot) {
    const St = new Uint8Array(4),
      jt = r.createTexture()
    r.bindTexture(O, jt),
      r.texParameteri(O, r.TEXTURE_MIN_FILTER, r.NEAREST),
      r.texParameteri(O, r.TEXTURE_MAG_FILTER, r.NEAREST)
    for (let ce = 0; ce < tt; ce++)
      O === r.TEXTURE_3D || O === r.TEXTURE_2D_ARRAY
        ? r.texImage3D(j, 0, r.RGBA, 1, 1, ot, 0, r.RGBA, r.UNSIGNED_BYTE, St)
        : r.texImage2D(j + ce, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, St)
    return jt
  }
  const Z = {}
  ;(Z[r.TEXTURE_2D] = W(r.TEXTURE_2D, r.TEXTURE_2D, 1)),
    (Z[r.TEXTURE_CUBE_MAP] = W(
      r.TEXTURE_CUBE_MAP,
      r.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (Z[r.TEXTURE_2D_ARRAY] = W(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1)),
    (Z[r.TEXTURE_3D] = W(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)),
    i.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    ft(r.DEPTH_TEST),
    a.setFunc(dy),
    xt(!1),
    rt(qE),
    ft(r.CULL_FACE),
    ht(Xs)
  function ft(O) {
    u[O] !== !0 && (r.enable(O), (u[O] = !0))
  }
  function lt(O) {
    u[O] !== !1 && (r.disable(O), (u[O] = !1))
  }
  function ct(O, j) {
    return c[O] !== j
      ? (r.bindFramebuffer(O, j),
        (c[O] = j),
        O === r.DRAW_FRAMEBUFFER && (c[r.FRAMEBUFFER] = j),
        O === r.FRAMEBUFFER && (c[r.DRAW_FRAMEBUFFER] = j),
        !0)
      : !1
  }
  function At(O, j) {
    let tt = f,
      ot = !1
    if (O) {
      ;(tt = h.get(j)), tt === void 0 && ((tt = []), h.set(j, tt))
      const St = O.textures
      if (tt.length !== St.length || tt[0] !== r.COLOR_ATTACHMENT0) {
        for (let jt = 0, ce = St.length; jt < ce; jt++)
          tt[jt] = r.COLOR_ATTACHMENT0 + jt
        ;(tt.length = St.length), (ot = !0)
      }
    } else tt[0] !== r.BACK && ((tt[0] = r.BACK), (ot = !0))
    ot && r.drawBuffers(tt)
  }
  function gt(O) {
    return d !== O ? (r.useProgram(O), (d = O), !0) : !1
  }
  const dt = {
    [uu]: r.FUNC_ADD,
    [w8]: r.FUNC_SUBTRACT,
    [M8]: r.FUNC_REVERSE_SUBTRACT,
  }
  ;(dt[T8] = r.MIN), (dt[C8] = r.MAX)
  const B = {
    [E8]: r.ZERO,
    [D8]: r.ONE,
    [L8]: r.SRC_COLOR,
    [vA]: r.SRC_ALPHA,
    [k8]: r.SRC_ALPHA_SATURATE,
    [O8]: r.DST_COLOR,
    [R8]: r.DST_ALPHA,
    [P8]: r.ONE_MINUS_SRC_COLOR,
    [gA]: r.ONE_MINUS_SRC_ALPHA,
    [N8]: r.ONE_MINUS_DST_COLOR,
    [I8]: r.ONE_MINUS_DST_ALPHA,
    [B8]: r.CONSTANT_COLOR,
    [F8]: r.ONE_MINUS_CONSTANT_COLOR,
    [z8]: r.CONSTANT_ALPHA,
    [U8]: r.ONE_MINUS_CONSTANT_ALPHA,
  }
  function ht(O, j, tt, ot, St, jt, ce, Tn, Gn, Ie) {
    if (O === Xs) {
      p === !0 && (lt(r.BLEND), (p = !1))
      return
    }
    if ((p === !1 && (ft(r.BLEND), (p = !0)), O !== b8)) {
      if (O !== g || Ie !== T) {
        if (
          ((v !== uu || _ !== uu) &&
            (r.blendEquation(r.FUNC_ADD), (v = uu), (_ = uu)),
          Ie)
        )
          switch (O) {
            case bh:
              r.blendFuncSeparate(
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
              )
              break
            case $r:
              r.blendFunc(r.ONE, r.ONE)
              break
            case ZE:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE)
              break
            case KE:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA)
              break
            default:
              console.error('THREE.WebGLState: Invalid blending: ', O)
              break
          }
        else
          switch (O) {
            case bh:
              r.blendFuncSeparate(
                r.SRC_ALPHA,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
              )
              break
            case $r:
              r.blendFunc(r.SRC_ALPHA, r.ONE)
              break
            case ZE:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE)
              break
            case KE:
              r.blendFunc(r.ZERO, r.SRC_COLOR)
              break
            default:
              console.error('THREE.WebGLState: Invalid blending: ', O)
              break
          }
        ;(m = null),
          (y = null),
          (x = null),
          (A = null),
          S.set(0, 0, 0),
          (b = 0),
          (g = O),
          (T = Ie)
      }
      return
    }
    ;(St = St || j),
      (jt = jt || tt),
      (ce = ce || ot),
      (j !== v || St !== _) &&
        (r.blendEquationSeparate(dt[j], dt[St]), (v = j), (_ = St)),
      (tt !== m || ot !== y || jt !== x || ce !== A) &&
        (r.blendFuncSeparate(B[tt], B[ot], B[jt], B[ce]),
        (m = tt),
        (y = ot),
        (x = jt),
        (A = ce)),
      (Tn.equals(S) === !1 || Gn !== b) &&
        (r.blendColor(Tn.r, Tn.g, Tn.b, Gn), S.copy(Tn), (b = Gn)),
      (g = O),
      (T = !1)
  }
  function it(O, j) {
    O.side === dr ? lt(r.CULL_FACE) : ft(r.CULL_FACE)
    let tt = O.side === Qr
    j && (tt = !tt),
      xt(tt),
      O.blending === bh && O.transparent === !1
        ? ht(Xs)
        : ht(
            O.blending,
            O.blendEquation,
            O.blendSrc,
            O.blendDst,
            O.blendEquationAlpha,
            O.blendSrcAlpha,
            O.blendDstAlpha,
            O.blendColor,
            O.blendAlpha,
            O.premultipliedAlpha,
          ),
      a.setFunc(O.depthFunc),
      a.setTest(O.depthTest),
      a.setMask(O.depthWrite),
      i.setMask(O.colorWrite)
    const ot = O.stencilWrite
    o.setTest(ot),
      ot &&
        (o.setMask(O.stencilWriteMask),
        o.setFunc(O.stencilFunc, O.stencilRef, O.stencilFuncMask),
        o.setOp(O.stencilFail, O.stencilZFail, O.stencilZPass)),
      Ct(O.polygonOffset, O.polygonOffsetFactor, O.polygonOffsetUnits),
      O.alphaToCoverage === !0
        ? ft(r.SAMPLE_ALPHA_TO_COVERAGE)
        : lt(r.SAMPLE_ALPHA_TO_COVERAGE)
  }
  function xt(O) {
    w !== O && (O ? r.frontFace(r.CW) : r.frontFace(r.CCW), (w = O))
  }
  function rt(O) {
    O !== x8
      ? (ft(r.CULL_FACE),
        O !== M &&
          (O === qE
            ? r.cullFace(r.BACK)
            : O === S8
            ? r.cullFace(r.FRONT)
            : r.cullFace(r.FRONT_AND_BACK)))
      : lt(r.CULL_FACE),
      (M = O)
  }
  function kt(O) {
    O !== C && (L && r.lineWidth(O), (C = O))
  }
  function Ct(O, j, tt) {
    O
      ? (ft(r.POLYGON_OFFSET_FILL),
        (E !== j || D !== tt) && (r.polygonOffset(j, tt), (E = j), (D = tt)))
      : lt(r.POLYGON_OFFSET_FILL)
  }
  function Lt(O) {
    O ? ft(r.SCISSOR_TEST) : lt(r.SCISSOR_TEST)
  }
  function G(O) {
    O === void 0 && (O = r.TEXTURE0 + P - 1),
      k !== O && (r.activeTexture(O), (k = O))
  }
  function N(O, j, tt) {
    tt === void 0 && (k === null ? (tt = r.TEXTURE0 + P - 1) : (tt = k))
    let ot = V[tt]
    ot === void 0 &&
      ((ot = {
        type: void 0,
        texture: void 0,
      }),
      (V[tt] = ot)),
      (ot.type !== O || ot.texture !== j) &&
        (k !== tt && (r.activeTexture(tt), (k = tt)),
        r.bindTexture(O, j || Z[O]),
        (ot.type = O),
        (ot.texture = j))
  }
  function J() {
    const O = V[k]
    O !== void 0 &&
      O.type !== void 0 &&
      (r.bindTexture(O.type, null), (O.type = void 0), (O.texture = void 0))
  }
  function vt() {
    try {
      r.compressedTexImage2D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function yt() {
    try {
      r.compressedTexImage3D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function mt() {
    try {
      r.texSubImage2D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function Kt() {
    try {
      r.texSubImage3D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function It() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function Bt() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function fe() {
    try {
      r.texStorage2D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function Mt() {
    try {
      r.texStorage3D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function Ot() {
    try {
      r.texImage2D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function Te() {
    try {
      r.texImage3D.apply(r, arguments)
    } catch (O) {
      console.error('THREE.WebGLState:', O)
    }
  }
  function se(O) {
    K.equals(O) === !1 && (r.scissor(O.x, O.y, O.z, O.w), K.copy(O))
  }
  function Gt(O) {
    ut.equals(O) === !1 && (r.viewport(O.x, O.y, O.z, O.w), ut.copy(O))
  }
  function ue(O, j) {
    let tt = l.get(j)
    tt === void 0 && ((tt = new WeakMap()), l.set(j, tt))
    let ot = tt.get(O)
    ot === void 0 && ((ot = r.getUniformBlockIndex(j, O.name)), tt.set(O, ot))
  }
  function de(O, j) {
    const ot = l.get(j).get(O)
    s.get(j) !== ot &&
      (r.uniformBlockBinding(j, ot, O.__bindingPointIndex), s.set(j, ot))
  }
  function ln() {
    r.disable(r.BLEND),
      r.disable(r.CULL_FACE),
      r.disable(r.DEPTH_TEST),
      r.disable(r.POLYGON_OFFSET_FILL),
      r.disable(r.SCISSOR_TEST),
      r.disable(r.STENCIL_TEST),
      r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),
      r.blendEquation(r.FUNC_ADD),
      r.blendFunc(r.ONE, r.ZERO),
      r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO),
      r.blendColor(0, 0, 0, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(r.LESS),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(r.ALWAYS, 0, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
      r.clearStencil(0),
      r.cullFace(r.BACK),
      r.frontFace(r.CCW),
      r.polygonOffset(0, 0),
      r.activeTexture(r.TEXTURE0),
      r.bindFramebuffer(r.FRAMEBUFFER, null),
      r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
      r.bindFramebuffer(r.READ_FRAMEBUFFER, null),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (u = {}),
      (k = null),
      (V = {}),
      (c = {}),
      (h = new WeakMap()),
      (f = []),
      (d = null),
      (p = !1),
      (g = null),
      (v = null),
      (m = null),
      (y = null),
      (_ = null),
      (x = null),
      (A = null),
      (S = new qt(0, 0, 0)),
      (b = 0),
      (T = !1),
      (w = null),
      (M = null),
      (C = null),
      (E = null),
      (D = null),
      K.set(0, 0, r.canvas.width, r.canvas.height),
      ut.set(0, 0, r.canvas.width, r.canvas.height),
      i.reset(),
      a.reset(),
      o.reset()
  }
  return {
    buffers: {
      color: i,
      depth: a,
      stencil: o,
    },
    enable: ft,
    disable: lt,
    bindFramebuffer: ct,
    drawBuffers: At,
    useProgram: gt,
    setBlending: ht,
    setMaterial: it,
    setFlipSided: xt,
    setCullFace: rt,
    setLineWidth: kt,
    setPolygonOffset: Ct,
    setScissorTest: Lt,
    activeTexture: G,
    bindTexture: N,
    unbindTexture: J,
    compressedTexImage2D: vt,
    compressedTexImage3D: yt,
    texImage2D: Ot,
    texImage3D: Te,
    updateUBOMapping: ue,
    uniformBlockBinding: de,
    texStorage2D: fe,
    texStorage3D: Mt,
    texSubImage2D: mt,
    texSubImage3D: Kt,
    compressedTexSubImage2D: It,
    compressedTexSubImage3D: Bt,
    scissor: se,
    viewport: Gt,
    reset: ln,
  }
}
function Y2(r, t, e, n) {
  const i = EY(n)
  switch (e) {
    case Vk:
      return r * t
    case Hk:
      return r * t
    case Wk:
      return r * t * 2
    case TM:
      return ((r * t) / i.components) * i.byteLength
    case CM:
      return ((r * t) / i.components) * i.byteLength
    case Xk:
      return ((r * t * 2) / i.components) * i.byteLength
    case EM:
      return ((r * t * 2) / i.components) * i.byteLength
    case Gk:
      return ((r * t * 3) / i.components) * i.byteLength
    case Yi:
      return ((r * t * 4) / i.components) * i.byteLength
    case DM:
      return ((r * t * 4) / i.components) * i.byteLength
    case Om:
    case Nm:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 8
    case km:
    case Bm:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16
    case xA:
    case AA:
      return (Math.max(r, 16) * Math.max(t, 8)) / 4
    case _A:
    case SA:
      return (Math.max(r, 8) * Math.max(t, 8)) / 2
    case bA:
    case wA:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 8
    case MA:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16
    case TA:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16
    case CA:
      return Math.floor((r + 4) / 5) * Math.floor((t + 3) / 4) * 16
    case EA:
      return Math.floor((r + 4) / 5) * Math.floor((t + 4) / 5) * 16
    case DA:
      return Math.floor((r + 5) / 6) * Math.floor((t + 4) / 5) * 16
    case LA:
      return Math.floor((r + 5) / 6) * Math.floor((t + 5) / 6) * 16
    case PA:
      return Math.floor((r + 7) / 8) * Math.floor((t + 4) / 5) * 16
    case RA:
      return Math.floor((r + 7) / 8) * Math.floor((t + 5) / 6) * 16
    case IA:
      return Math.floor((r + 7) / 8) * Math.floor((t + 7) / 8) * 16
    case OA:
      return Math.floor((r + 9) / 10) * Math.floor((t + 4) / 5) * 16
    case NA:
      return Math.floor((r + 9) / 10) * Math.floor((t + 5) / 6) * 16
    case kA:
      return Math.floor((r + 9) / 10) * Math.floor((t + 7) / 8) * 16
    case BA:
      return Math.floor((r + 9) / 10) * Math.floor((t + 9) / 10) * 16
    case FA:
      return Math.floor((r + 11) / 12) * Math.floor((t + 9) / 10) * 16
    case zA:
      return Math.floor((r + 11) / 12) * Math.floor((t + 11) / 12) * 16
    case Fm:
    case UA:
    case VA:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 16
    case Yk:
    case GA:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 8
    case HA:
    case WA:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 16
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`)
}
function EY(r) {
  switch (r) {
    case qo:
    case Fk:
      return {
        byteLength: 1,
        components: 1,
      }
    case gp:
    case zk:
    case hv:
      return {
        byteLength: 2,
        components: 1,
      }
    case wM:
    case MM:
      return {
        byteLength: 2,
        components: 4,
      }
    case Uu:
    case bM:
    case ya:
      return {
        byteLength: 4,
        components: 1,
      }
    case Uk:
      return {
        byteLength: 4,
        components: 3,
      }
  }
  throw new Error(`Unknown texture type ${r}.`)
}
function DY(r, t, e, n, i, a, o) {
  const s = t.has('WEBGL_multisampled_render_to_texture')
      ? t.get('WEBGL_multisampled_render_to_texture')
      : null,
    l =
      typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    u = new pt(),
    c = new WeakMap()
  let h
  const f = new WeakMap()
  let d = !1
  try {
    d =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null
  } catch {}
  function p(G, N) {
    return d ? new OffscreenCanvas(G, N) : _p('canvas')
  }
  function g(G, N, J) {
    let vt = 1
    const yt = Lt(G)
    if (
      ((yt.width > J || yt.height > J) &&
        (vt = J / Math.max(yt.width, yt.height)),
      vt < 1)
    )
      if (
        (typeof HTMLImageElement < 'u' && G instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && G instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && G instanceof ImageBitmap) ||
        (typeof VideoFrame < 'u' && G instanceof VideoFrame)
      ) {
        const mt = Math.floor(vt * yt.width),
          Kt = Math.floor(vt * yt.height)
        h === void 0 && (h = p(mt, Kt))
        const It = N ? p(mt, Kt) : h
        return (
          (It.width = mt),
          (It.height = Kt),
          It.getContext('2d').drawImage(G, 0, 0, mt, Kt),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              yt.width +
              'x' +
              yt.height +
              ') to (' +
              mt +
              'x' +
              Kt +
              ').',
          ),
          It
        )
      } else
        return (
          'data' in G &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                yt.width +
                'x' +
                yt.height +
                ').',
            ),
          G
        )
    return G
  }
  function v(G) {
    return G.generateMipmaps && G.minFilter !== Ur && G.minFilter !== gi
  }
  function m(G) {
    r.generateMipmap(G)
  }
  function y(G, N, J, vt, yt = !1) {
    if (G !== null) {
      if (r[G] !== void 0) return r[G]
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          G +
          "'",
      )
    }
    let mt = N
    if (
      (N === r.RED &&
        (J === r.FLOAT && (mt = r.R32F),
        J === r.HALF_FLOAT && (mt = r.R16F),
        J === r.UNSIGNED_BYTE && (mt = r.R8)),
      N === r.RED_INTEGER &&
        (J === r.UNSIGNED_BYTE && (mt = r.R8UI),
        J === r.UNSIGNED_SHORT && (mt = r.R16UI),
        J === r.UNSIGNED_INT && (mt = r.R32UI),
        J === r.BYTE && (mt = r.R8I),
        J === r.SHORT && (mt = r.R16I),
        J === r.INT && (mt = r.R32I)),
      N === r.RG &&
        (J === r.FLOAT && (mt = r.RG32F),
        J === r.HALF_FLOAT && (mt = r.RG16F),
        J === r.UNSIGNED_BYTE && (mt = r.RG8)),
      N === r.RG_INTEGER &&
        (J === r.UNSIGNED_BYTE && (mt = r.RG8UI),
        J === r.UNSIGNED_SHORT && (mt = r.RG16UI),
        J === r.UNSIGNED_INT && (mt = r.RG32UI),
        J === r.BYTE && (mt = r.RG8I),
        J === r.SHORT && (mt = r.RG16I),
        J === r.INT && (mt = r.RG32I)),
      N === r.RGB && J === r.UNSIGNED_INT_5_9_9_9_REV && (mt = r.RGB9_E5),
      N === r.RGBA)
    ) {
      const Kt = yt ? vy : Be.getTransfer(vt)
      J === r.FLOAT && (mt = r.RGBA32F),
        J === r.HALF_FLOAT && (mt = r.RGBA16F),
        J === r.UNSIGNED_BYTE && (mt = Kt === an ? r.SRGB8_ALPHA8 : r.RGBA8),
        J === r.UNSIGNED_SHORT_4_4_4_4 && (mt = r.RGBA4),
        J === r.UNSIGNED_SHORT_5_5_5_1 && (mt = r.RGB5_A1)
    }
    return (
      (mt === r.R16F ||
        mt === r.R32F ||
        mt === r.RG16F ||
        mt === r.RG32F ||
        mt === r.RGBA16F ||
        mt === r.RGBA32F) &&
        t.get('EXT_color_buffer_float'),
      mt
    )
  }
  function _(G, N) {
    let J
    return (
      G
        ? N === null || N === Uu || N === Uh
          ? (J = r.DEPTH24_STENCIL8)
          : N === ya
          ? (J = r.DEPTH32F_STENCIL8)
          : N === gp &&
            ((J = r.DEPTH24_STENCIL8),
            console.warn(
              'DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.',
            ))
        : N === null || N === Uu || N === Uh
        ? (J = r.DEPTH_COMPONENT24)
        : N === ya
        ? (J = r.DEPTH_COMPONENT32F)
        : N === gp && (J = r.DEPTH_COMPONENT16),
      J
    )
  }
  function x(G, N) {
    return v(G) === !0 ||
      (G.isFramebufferTexture && G.minFilter !== Ur && G.minFilter !== gi)
      ? Math.log2(Math.max(N.width, N.height)) + 1
      : G.mipmaps !== void 0 && G.mipmaps.length > 0
      ? G.mipmaps.length
      : G.isCompressedTexture && Array.isArray(G.image)
      ? N.mipmaps.length
      : 1
  }
  function A(G) {
    const N = G.target
    N.removeEventListener('dispose', A), b(N), N.isVideoTexture && c.delete(N)
  }
  function S(G) {
    const N = G.target
    N.removeEventListener('dispose', S), w(N)
  }
  function b(G) {
    const N = n.get(G)
    if (N.__webglInit === void 0) return
    const J = G.source,
      vt = f.get(J)
    if (vt) {
      const yt = vt[N.__cacheKey]
      yt.usedTimes--,
        yt.usedTimes === 0 && T(G),
        Object.keys(vt).length === 0 && f.delete(J)
    }
    n.remove(G)
  }
  function T(G) {
    const N = n.get(G)
    r.deleteTexture(N.__webglTexture)
    const J = G.source,
      vt = f.get(J)
    delete vt[N.__cacheKey], o.memory.textures--
  }
  function w(G) {
    const N = n.get(G)
    if ((G.depthTexture && G.depthTexture.dispose(), G.isWebGLCubeRenderTarget))
      for (let vt = 0; vt < 6; vt++) {
        if (Array.isArray(N.__webglFramebuffer[vt]))
          for (let yt = 0; yt < N.__webglFramebuffer[vt].length; yt++)
            r.deleteFramebuffer(N.__webglFramebuffer[vt][yt])
        else r.deleteFramebuffer(N.__webglFramebuffer[vt])
        N.__webglDepthbuffer && r.deleteRenderbuffer(N.__webglDepthbuffer[vt])
      }
    else {
      if (Array.isArray(N.__webglFramebuffer))
        for (let vt = 0; vt < N.__webglFramebuffer.length; vt++)
          r.deleteFramebuffer(N.__webglFramebuffer[vt])
      else r.deleteFramebuffer(N.__webglFramebuffer)
      if (
        (N.__webglDepthbuffer && r.deleteRenderbuffer(N.__webglDepthbuffer),
        N.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(N.__webglMultisampledFramebuffer),
        N.__webglColorRenderbuffer)
      )
        for (let vt = 0; vt < N.__webglColorRenderbuffer.length; vt++)
          N.__webglColorRenderbuffer[vt] &&
            r.deleteRenderbuffer(N.__webglColorRenderbuffer[vt])
      N.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(N.__webglDepthRenderbuffer)
    }
    const J = G.textures
    for (let vt = 0, yt = J.length; vt < yt; vt++) {
      const mt = n.get(J[vt])
      mt.__webglTexture &&
        (r.deleteTexture(mt.__webglTexture), o.memory.textures--),
        n.remove(J[vt])
    }
    n.remove(G)
  }
  let M = 0
  function C() {
    M = 0
  }
  function E() {
    const G = M
    return (
      G >= i.maxTextures &&
        console.warn(
          'THREE.WebGLTextures: Trying to use ' +
            G +
            ' texture units while this GPU supports only ' +
            i.maxTextures,
        ),
      (M += 1),
      G
    )
  }
  function D(G) {
    const N = []
    return (
      N.push(G.wrapS),
      N.push(G.wrapT),
      N.push(G.wrapR || 0),
      N.push(G.magFilter),
      N.push(G.minFilter),
      N.push(G.anisotropy),
      N.push(G.internalFormat),
      N.push(G.format),
      N.push(G.type),
      N.push(G.generateMipmaps),
      N.push(G.premultiplyAlpha),
      N.push(G.flipY),
      N.push(G.unpackAlignment),
      N.push(G.colorSpace),
      N.join()
    )
  }
  function P(G, N) {
    const J = n.get(G)
    if (
      (G.isVideoTexture && kt(G),
      G.isRenderTargetTexture === !1 &&
        G.version > 0 &&
        J.__version !== G.version)
    ) {
      const vt = G.image
      if (vt === null)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but no image data found.',
        )
      else if (vt.complete === !1)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but image is incomplete',
        )
      else {
        ut(J, G, N)
        return
      }
    }
    e.bindTexture(r.TEXTURE_2D, J.__webglTexture, r.TEXTURE0 + N)
  }
  function L(G, N) {
    const J = n.get(G)
    if (G.version > 0 && J.__version !== G.version) {
      ut(J, G, N)
      return
    }
    e.bindTexture(r.TEXTURE_2D_ARRAY, J.__webglTexture, r.TEXTURE0 + N)
  }
  function I(G, N) {
    const J = n.get(G)
    if (G.version > 0 && J.__version !== G.version) {
      ut(J, G, N)
      return
    }
    e.bindTexture(r.TEXTURE_3D, J.__webglTexture, r.TEXTURE0 + N)
  }
  function F(G, N) {
    const J = n.get(G)
    if (G.version > 0 && J.__version !== G.version) {
      W(J, G, N)
      return
    }
    e.bindTexture(r.TEXTURE_CUBE_MAP, J.__webglTexture, r.TEXTURE0 + N)
  }
  const k = {
      [Jn]: r.REPEAT,
      [Ps]: r.CLAMP_TO_EDGE,
      [py]: r.MIRRORED_REPEAT,
    },
    V = {
      [Ur]: r.NEAREST,
      [Bk]: r.NEAREST_MIPMAP_NEAREST,
      [Cd]: r.NEAREST_MIPMAP_LINEAR,
      [gi]: r.LINEAR,
      [Im]: r.LINEAR_MIPMAP_NEAREST,
      [Fo]: r.LINEAR_MIPMAP_LINEAR,
    },
    H = {
      [u6]: r.NEVER,
      [v6]: r.ALWAYS,
      [c6]: r.LESS,
      [qk]: r.LEQUAL,
      [h6]: r.EQUAL,
      [p6]: r.GEQUAL,
      [f6]: r.GREATER,
      [d6]: r.NOTEQUAL,
    }
  function Y(G, N) {
    if (
      (N.type === ya &&
        t.has('OES_texture_float_linear') === !1 &&
        (N.magFilter === gi ||
          N.magFilter === Im ||
          N.magFilter === Cd ||
          N.magFilter === Fo ||
          N.minFilter === gi ||
          N.minFilter === Im ||
          N.minFilter === Cd ||
          N.minFilter === Fo) &&
        console.warn(
          'THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.',
        ),
      r.texParameteri(G, r.TEXTURE_WRAP_S, k[N.wrapS]),
      r.texParameteri(G, r.TEXTURE_WRAP_T, k[N.wrapT]),
      (G === r.TEXTURE_3D || G === r.TEXTURE_2D_ARRAY) &&
        r.texParameteri(G, r.TEXTURE_WRAP_R, k[N.wrapR]),
      r.texParameteri(G, r.TEXTURE_MAG_FILTER, V[N.magFilter]),
      r.texParameteri(G, r.TEXTURE_MIN_FILTER, V[N.minFilter]),
      N.compareFunction &&
        (r.texParameteri(G, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE),
        r.texParameteri(G, r.TEXTURE_COMPARE_FUNC, H[N.compareFunction])),
      t.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      if (
        N.magFilter === Ur ||
        (N.minFilter !== Cd && N.minFilter !== Fo) ||
        (N.type === ya && t.has('OES_texture_float_linear') === !1)
      )
        return
      if (N.anisotropy > 1 || n.get(N).__currentAnisotropy) {
        const J = t.get('EXT_texture_filter_anisotropic')
        r.texParameterf(
          G,
          J.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(N.anisotropy, i.getMaxAnisotropy()),
        ),
          (n.get(N).__currentAnisotropy = N.anisotropy)
      }
    }
  }
  function K(G, N) {
    let J = !1
    G.__webglInit === void 0 &&
      ((G.__webglInit = !0), N.addEventListener('dispose', A))
    const vt = N.source
    let yt = f.get(vt)
    yt === void 0 && ((yt = {}), f.set(vt, yt))
    const mt = D(N)
    if (mt !== G.__cacheKey) {
      yt[mt] === void 0 &&
        ((yt[mt] = {
          texture: r.createTexture(),
          usedTimes: 0,
        }),
        o.memory.textures++,
        (J = !0)),
        yt[mt].usedTimes++
      const Kt = yt[G.__cacheKey]
      Kt !== void 0 &&
        (yt[G.__cacheKey].usedTimes--, Kt.usedTimes === 0 && T(N)),
        (G.__cacheKey = mt),
        (G.__webglTexture = yt[mt].texture)
    }
    return J
  }
  function ut(G, N, J) {
    let vt = r.TEXTURE_2D
    ;(N.isDataArrayTexture || N.isCompressedArrayTexture) &&
      (vt = r.TEXTURE_2D_ARRAY),
      N.isData3DTexture && (vt = r.TEXTURE_3D)
    const yt = K(G, N),
      mt = N.source
    e.bindTexture(vt, G.__webglTexture, r.TEXTURE0 + J)
    const Kt = n.get(mt)
    if (mt.version !== Kt.__version || yt === !0) {
      e.activeTexture(r.TEXTURE0 + J)
      const It = Be.getPrimaries(Be.workingColorSpace),
        Bt = N.colorSpace === Ls ? null : Be.getPrimaries(N.colorSpace),
        fe = N.colorSpace === Ls || It === Bt ? r.NONE : r.BROWSER_DEFAULT_WEBGL
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, N.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, N.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe)
      let Mt = g(N.image, !1, i.maxTextureSize)
      Mt = Ct(N, Mt)
      const Ot = a.convert(N.format, N.colorSpace),
        Te = a.convert(N.type)
      let se = y(N.internalFormat, Ot, Te, N.colorSpace, N.isVideoTexture)
      Y(vt, N)
      let Gt
      const ue = N.mipmaps,
        de = N.isVideoTexture !== !0,
        ln = Kt.__version === void 0 || yt === !0,
        O = mt.dataReady,
        j = x(N, Mt)
      if (N.isDepthTexture)
        (se = _(N.format === Vh, N.type)),
          ln &&
            (de
              ? e.texStorage2D(r.TEXTURE_2D, 1, se, Mt.width, Mt.height)
              : e.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  se,
                  Mt.width,
                  Mt.height,
                  0,
                  Ot,
                  Te,
                  null,
                ))
      else if (N.isDataTexture)
        if (ue.length > 0) {
          de &&
            ln &&
            e.texStorage2D(r.TEXTURE_2D, j, se, ue[0].width, ue[0].height)
          for (let tt = 0, ot = ue.length; tt < ot; tt++)
            (Gt = ue[tt]),
              de
                ? O &&
                  e.texSubImage2D(
                    r.TEXTURE_2D,
                    tt,
                    0,
                    0,
                    Gt.width,
                    Gt.height,
                    Ot,
                    Te,
                    Gt.data,
                  )
                : e.texImage2D(
                    r.TEXTURE_2D,
                    tt,
                    se,
                    Gt.width,
                    Gt.height,
                    0,
                    Ot,
                    Te,
                    Gt.data,
                  )
          N.generateMipmaps = !1
        } else
          de
            ? (ln && e.texStorage2D(r.TEXTURE_2D, j, se, Mt.width, Mt.height),
              O &&
                e.texSubImage2D(
                  r.TEXTURE_2D,
                  0,
                  0,
                  0,
                  Mt.width,
                  Mt.height,
                  Ot,
                  Te,
                  Mt.data,
                ))
            : e.texImage2D(
                r.TEXTURE_2D,
                0,
                se,
                Mt.width,
                Mt.height,
                0,
                Ot,
                Te,
                Mt.data,
              )
      else if (N.isCompressedTexture)
        if (N.isCompressedArrayTexture) {
          de &&
            ln &&
            e.texStorage3D(
              r.TEXTURE_2D_ARRAY,
              j,
              se,
              ue[0].width,
              ue[0].height,
              Mt.depth,
            )
          for (let tt = 0, ot = ue.length; tt < ot; tt++)
            if (((Gt = ue[tt]), N.format !== Yi))
              if (Ot !== null)
                if (de) {
                  if (O)
                    if (N.layerUpdates.size > 0) {
                      const St = Y2(Gt.width, Gt.height, N.format, N.type)
                      for (const jt of N.layerUpdates) {
                        const ce = Gt.data.subarray(
                          (jt * St) / Gt.data.BYTES_PER_ELEMENT,
                          ((jt + 1) * St) / Gt.data.BYTES_PER_ELEMENT,
                        )
                        e.compressedTexSubImage3D(
                          r.TEXTURE_2D_ARRAY,
                          tt,
                          0,
                          0,
                          jt,
                          Gt.width,
                          Gt.height,
                          1,
                          Ot,
                          ce,
                          0,
                          0,
                        )
                      }
                      N.clearLayerUpdates()
                    } else
                      e.compressedTexSubImage3D(
                        r.TEXTURE_2D_ARRAY,
                        tt,
                        0,
                        0,
                        0,
                        Gt.width,
                        Gt.height,
                        Mt.depth,
                        Ot,
                        Gt.data,
                        0,
                        0,
                      )
                } else
                  e.compressedTexImage3D(
                    r.TEXTURE_2D_ARRAY,
                    tt,
                    se,
                    Gt.width,
                    Gt.height,
                    Mt.depth,
                    0,
                    Gt.data,
                    0,
                    0,
                  )
              else
                console.warn(
                  'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                )
            else
              de
                ? O &&
                  e.texSubImage3D(
                    r.TEXTURE_2D_ARRAY,
                    tt,
                    0,
                    0,
                    0,
                    Gt.width,
                    Gt.height,
                    Mt.depth,
                    Ot,
                    Te,
                    Gt.data,
                  )
                : e.texImage3D(
                    r.TEXTURE_2D_ARRAY,
                    tt,
                    se,
                    Gt.width,
                    Gt.height,
                    Mt.depth,
                    0,
                    Ot,
                    Te,
                    Gt.data,
                  )
        } else {
          de &&
            ln &&
            e.texStorage2D(r.TEXTURE_2D, j, se, ue[0].width, ue[0].height)
          for (let tt = 0, ot = ue.length; tt < ot; tt++)
            (Gt = ue[tt]),
              N.format !== Yi
                ? Ot !== null
                  ? de
                    ? O &&
                      e.compressedTexSubImage2D(
                        r.TEXTURE_2D,
                        tt,
                        0,
                        0,
                        Gt.width,
                        Gt.height,
                        Ot,
                        Gt.data,
                      )
                    : e.compressedTexImage2D(
                        r.TEXTURE_2D,
                        tt,
                        se,
                        Gt.width,
                        Gt.height,
                        0,
                        Gt.data,
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                    )
                : de
                ? O &&
                  e.texSubImage2D(
                    r.TEXTURE_2D,
                    tt,
                    0,
                    0,
                    Gt.width,
                    Gt.height,
                    Ot,
                    Te,
                    Gt.data,
                  )
                : e.texImage2D(
                    r.TEXTURE_2D,
                    tt,
                    se,
                    Gt.width,
                    Gt.height,
                    0,
                    Ot,
                    Te,
                    Gt.data,
                  )
        }
      else if (N.isDataArrayTexture)
        if (de) {
          if (
            (ln &&
              e.texStorage3D(
                r.TEXTURE_2D_ARRAY,
                j,
                se,
                Mt.width,
                Mt.height,
                Mt.depth,
              ),
            O)
          )
            if (N.layerUpdates.size > 0) {
              const tt = Y2(Mt.width, Mt.height, N.format, N.type)
              for (const ot of N.layerUpdates) {
                const St = Mt.data.subarray(
                  (ot * tt) / Mt.data.BYTES_PER_ELEMENT,
                  ((ot + 1) * tt) / Mt.data.BYTES_PER_ELEMENT,
                )
                e.texSubImage3D(
                  r.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  ot,
                  Mt.width,
                  Mt.height,
                  1,
                  Ot,
                  Te,
                  St,
                )
              }
              N.clearLayerUpdates()
            } else
              e.texSubImage3D(
                r.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Mt.width,
                Mt.height,
                Mt.depth,
                Ot,
                Te,
                Mt.data,
              )
        } else
          e.texImage3D(
            r.TEXTURE_2D_ARRAY,
            0,
            se,
            Mt.width,
            Mt.height,
            Mt.depth,
            0,
            Ot,
            Te,
            Mt.data,
          )
      else if (N.isData3DTexture)
        de
          ? (ln &&
              e.texStorage3D(
                r.TEXTURE_3D,
                j,
                se,
                Mt.width,
                Mt.height,
                Mt.depth,
              ),
            O &&
              e.texSubImage3D(
                r.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Mt.width,
                Mt.height,
                Mt.depth,
                Ot,
                Te,
                Mt.data,
              ))
          : e.texImage3D(
              r.TEXTURE_3D,
              0,
              se,
              Mt.width,
              Mt.height,
              Mt.depth,
              0,
              Ot,
              Te,
              Mt.data,
            )
      else if (N.isFramebufferTexture) {
        if (ln)
          if (de) e.texStorage2D(r.TEXTURE_2D, j, se, Mt.width, Mt.height)
          else {
            let tt = Mt.width,
              ot = Mt.height
            for (let St = 0; St < j; St++)
              e.texImage2D(r.TEXTURE_2D, St, se, tt, ot, 0, Ot, Te, null),
                (tt >>= 1),
                (ot >>= 1)
          }
      } else if (ue.length > 0) {
        if (de && ln) {
          const tt = Lt(ue[0])
          e.texStorage2D(r.TEXTURE_2D, j, se, tt.width, tt.height)
        }
        for (let tt = 0, ot = ue.length; tt < ot; tt++)
          (Gt = ue[tt]),
            de
              ? O && e.texSubImage2D(r.TEXTURE_2D, tt, 0, 0, Ot, Te, Gt)
              : e.texImage2D(r.TEXTURE_2D, tt, se, Ot, Te, Gt)
        N.generateMipmaps = !1
      } else if (de) {
        if (ln) {
          const tt = Lt(Mt)
          e.texStorage2D(r.TEXTURE_2D, j, se, tt.width, tt.height)
        }
        O && e.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Ot, Te, Mt)
      } else e.texImage2D(r.TEXTURE_2D, 0, se, Ot, Te, Mt)
      v(N) && m(vt), (Kt.__version = mt.version), N.onUpdate && N.onUpdate(N)
    }
    G.__version = N.version
  }
  function W(G, N, J) {
    if (N.image.length !== 6) return
    const vt = K(G, N),
      yt = N.source
    e.bindTexture(r.TEXTURE_CUBE_MAP, G.__webglTexture, r.TEXTURE0 + J)
    const mt = n.get(yt)
    if (yt.version !== mt.__version || vt === !0) {
      e.activeTexture(r.TEXTURE0 + J)
      const Kt = Be.getPrimaries(Be.workingColorSpace),
        It = N.colorSpace === Ls ? null : Be.getPrimaries(N.colorSpace),
        Bt = N.colorSpace === Ls || Kt === It ? r.NONE : r.BROWSER_DEFAULT_WEBGL
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, N.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, N.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Bt)
      const fe = N.isCompressedTexture || N.image[0].isCompressedTexture,
        Mt = N.image[0] && N.image[0].isDataTexture,
        Ot = []
      for (let ot = 0; ot < 6; ot++)
        !fe && !Mt
          ? (Ot[ot] = g(N.image[ot], !0, i.maxCubemapSize))
          : (Ot[ot] = Mt ? N.image[ot].image : N.image[ot]),
          (Ot[ot] = Ct(N, Ot[ot]))
      const Te = Ot[0],
        se = a.convert(N.format, N.colorSpace),
        Gt = a.convert(N.type),
        ue = y(N.internalFormat, se, Gt, N.colorSpace),
        de = N.isVideoTexture !== !0,
        ln = mt.__version === void 0 || vt === !0,
        O = yt.dataReady
      let j = x(N, Te)
      Y(r.TEXTURE_CUBE_MAP, N)
      let tt
      if (fe) {
        de &&
          ln &&
          e.texStorage2D(r.TEXTURE_CUBE_MAP, j, ue, Te.width, Te.height)
        for (let ot = 0; ot < 6; ot++) {
          tt = Ot[ot].mipmaps
          for (let St = 0; St < tt.length; St++) {
            const jt = tt[St]
            N.format !== Yi
              ? se !== null
                ? de
                  ? O &&
                    e.compressedTexSubImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                      St,
                      0,
                      0,
                      jt.width,
                      jt.height,
                      se,
                      jt.data,
                    )
                  : e.compressedTexImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                      St,
                      ue,
                      jt.width,
                      jt.height,
                      0,
                      jt.data,
                    )
                : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()',
                  )
              : de
              ? O &&
                e.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                  St,
                  0,
                  0,
                  jt.width,
                  jt.height,
                  se,
                  Gt,
                  jt.data,
                )
              : e.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                  St,
                  ue,
                  jt.width,
                  jt.height,
                  0,
                  se,
                  Gt,
                  jt.data,
                )
          }
        }
      } else {
        if (((tt = N.mipmaps), de && ln)) {
          tt.length > 0 && j++
          const ot = Lt(Ot[0])
          e.texStorage2D(r.TEXTURE_CUBE_MAP, j, ue, ot.width, ot.height)
        }
        for (let ot = 0; ot < 6; ot++)
          if (Mt) {
            de
              ? O &&
                e.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                  0,
                  0,
                  0,
                  Ot[ot].width,
                  Ot[ot].height,
                  se,
                  Gt,
                  Ot[ot].data,
                )
              : e.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                  0,
                  ue,
                  Ot[ot].width,
                  Ot[ot].height,
                  0,
                  se,
                  Gt,
                  Ot[ot].data,
                )
            for (let St = 0; St < tt.length; St++) {
              const ce = tt[St].image[ot].image
              de
                ? O &&
                  e.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                    St + 1,
                    0,
                    0,
                    ce.width,
                    ce.height,
                    se,
                    Gt,
                    ce.data,
                  )
                : e.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                    St + 1,
                    ue,
                    ce.width,
                    ce.height,
                    0,
                    se,
                    Gt,
                    ce.data,
                  )
            }
          } else {
            de
              ? O &&
                e.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                  0,
                  0,
                  0,
                  se,
                  Gt,
                  Ot[ot],
                )
              : e.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                  0,
                  ue,
                  se,
                  Gt,
                  Ot[ot],
                )
            for (let St = 0; St < tt.length; St++) {
              const jt = tt[St]
              de
                ? O &&
                  e.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                    St + 1,
                    0,
                    0,
                    se,
                    Gt,
                    jt.image[ot],
                  )
                : e.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + ot,
                    St + 1,
                    ue,
                    se,
                    Gt,
                    jt.image[ot],
                  )
            }
          }
      }
      v(N) && m(r.TEXTURE_CUBE_MAP),
        (mt.__version = yt.version),
        N.onUpdate && N.onUpdate(N)
    }
    G.__version = N.version
  }
  function Z(G, N, J, vt, yt, mt) {
    const Kt = a.convert(J.format, J.colorSpace),
      It = a.convert(J.type),
      Bt = y(J.internalFormat, Kt, It, J.colorSpace)
    if (!n.get(N).__hasExternalTextures) {
      const Mt = Math.max(1, N.width >> mt),
        Ot = Math.max(1, N.height >> mt)
      yt === r.TEXTURE_3D || yt === r.TEXTURE_2D_ARRAY
        ? e.texImage3D(yt, mt, Bt, Mt, Ot, N.depth, 0, Kt, It, null)
        : e.texImage2D(yt, mt, Bt, Mt, Ot, 0, Kt, It, null)
    }
    e.bindFramebuffer(r.FRAMEBUFFER, G),
      rt(N)
        ? s.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            vt,
            yt,
            n.get(J).__webglTexture,
            0,
            xt(N),
          )
        : (yt === r.TEXTURE_2D ||
            (yt >= r.TEXTURE_CUBE_MAP_POSITIVE_X &&
              yt <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          r.framebufferTexture2D(
            r.FRAMEBUFFER,
            vt,
            yt,
            n.get(J).__webglTexture,
            mt,
          ),
      e.bindFramebuffer(r.FRAMEBUFFER, null)
  }
  function ft(G, N, J) {
    if ((r.bindRenderbuffer(r.RENDERBUFFER, G), N.depthBuffer)) {
      const vt = N.depthTexture,
        yt = vt && vt.isDepthTexture ? vt.type : null,
        mt = _(N.stencilBuffer, yt),
        Kt = N.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT,
        It = xt(N)
      rt(N)
        ? s.renderbufferStorageMultisampleEXT(
            r.RENDERBUFFER,
            It,
            mt,
            N.width,
            N.height,
          )
        : J
        ? r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            It,
            mt,
            N.width,
            N.height,
          )
        : r.renderbufferStorage(r.RENDERBUFFER, mt, N.width, N.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, Kt, r.RENDERBUFFER, G)
    } else {
      const vt = N.textures
      for (let yt = 0; yt < vt.length; yt++) {
        const mt = vt[yt],
          Kt = a.convert(mt.format, mt.colorSpace),
          It = a.convert(mt.type),
          Bt = y(mt.internalFormat, Kt, It, mt.colorSpace),
          fe = xt(N)
        J && rt(N) === !1
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              fe,
              Bt,
              N.width,
              N.height,
            )
          : rt(N)
          ? s.renderbufferStorageMultisampleEXT(
              r.RENDERBUFFER,
              fe,
              Bt,
              N.width,
              N.height,
            )
          : r.renderbufferStorage(r.RENDERBUFFER, Bt, N.width, N.height)
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null)
  }
  function lt(G, N) {
    if (N && N.isWebGLCubeRenderTarget)
      throw new Error('Depth Texture with cube render targets is not supported')
    if (
      (e.bindFramebuffer(r.FRAMEBUFFER, G),
      !(N.depthTexture && N.depthTexture.isDepthTexture))
    )
      throw new Error(
        'renderTarget.depthTexture must be an instance of THREE.DepthTexture',
      )
    ;(!n.get(N.depthTexture).__webglTexture ||
      N.depthTexture.image.width !== N.width ||
      N.depthTexture.image.height !== N.height) &&
      ((N.depthTexture.image.width = N.width),
      (N.depthTexture.image.height = N.height),
      (N.depthTexture.needsUpdate = !0)),
      P(N.depthTexture, 0)
    const vt = n.get(N.depthTexture).__webglTexture,
      yt = xt(N)
    if (N.depthTexture.format === wh)
      rt(N)
        ? s.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            vt,
            0,
            yt,
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            vt,
            0,
          )
    else if (N.depthTexture.format === Vh)
      rt(N)
        ? s.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            vt,
            0,
            yt,
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            vt,
            0,
          )
    else throw new Error('Unknown depthTexture format')
  }
  function ct(G) {
    const N = n.get(G),
      J = G.isWebGLCubeRenderTarget === !0
    if (G.depthTexture && !N.__autoAllocateDepthBuffer) {
      if (J)
        throw new Error(
          'target.depthTexture not supported in Cube render targets',
        )
      lt(N.__webglFramebuffer, G)
    } else if (J) {
      N.__webglDepthbuffer = []
      for (let vt = 0; vt < 6; vt++)
        e.bindFramebuffer(r.FRAMEBUFFER, N.__webglFramebuffer[vt]),
          (N.__webglDepthbuffer[vt] = r.createRenderbuffer()),
          ft(N.__webglDepthbuffer[vt], G, !1)
    } else
      e.bindFramebuffer(r.FRAMEBUFFER, N.__webglFramebuffer),
        (N.__webglDepthbuffer = r.createRenderbuffer()),
        ft(N.__webglDepthbuffer, G, !1)
    e.bindFramebuffer(r.FRAMEBUFFER, null)
  }
  function At(G, N, J) {
    const vt = n.get(G)
    N !== void 0 &&
      Z(
        vt.__webglFramebuffer,
        G,
        G.texture,
        r.COLOR_ATTACHMENT0,
        r.TEXTURE_2D,
        0,
      ),
      J !== void 0 && ct(G)
  }
  function gt(G) {
    const N = G.texture,
      J = n.get(G),
      vt = n.get(N)
    G.addEventListener('dispose', S)
    const yt = G.textures,
      mt = G.isWebGLCubeRenderTarget === !0,
      Kt = yt.length > 1
    if (
      (Kt ||
        (vt.__webglTexture === void 0 &&
          (vt.__webglTexture = r.createTexture()),
        (vt.__version = N.version),
        o.memory.textures++),
      mt)
    ) {
      J.__webglFramebuffer = []
      for (let It = 0; It < 6; It++)
        if (N.mipmaps && N.mipmaps.length > 0) {
          J.__webglFramebuffer[It] = []
          for (let Bt = 0; Bt < N.mipmaps.length; Bt++)
            J.__webglFramebuffer[It][Bt] = r.createFramebuffer()
        } else J.__webglFramebuffer[It] = r.createFramebuffer()
    } else {
      if (N.mipmaps && N.mipmaps.length > 0) {
        J.__webglFramebuffer = []
        for (let It = 0; It < N.mipmaps.length; It++)
          J.__webglFramebuffer[It] = r.createFramebuffer()
      } else J.__webglFramebuffer = r.createFramebuffer()
      if (Kt)
        for (let It = 0, Bt = yt.length; It < Bt; It++) {
          const fe = n.get(yt[It])
          fe.__webglTexture === void 0 &&
            ((fe.__webglTexture = r.createTexture()), o.memory.textures++)
        }
      if (G.samples > 0 && rt(G) === !1) {
        ;(J.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (J.__webglColorRenderbuffer = []),
          e.bindFramebuffer(r.FRAMEBUFFER, J.__webglMultisampledFramebuffer)
        for (let It = 0; It < yt.length; It++) {
          const Bt = yt[It]
          ;(J.__webglColorRenderbuffer[It] = r.createRenderbuffer()),
            r.bindRenderbuffer(r.RENDERBUFFER, J.__webglColorRenderbuffer[It])
          const fe = a.convert(Bt.format, Bt.colorSpace),
            Mt = a.convert(Bt.type),
            Ot = y(
              Bt.internalFormat,
              fe,
              Mt,
              Bt.colorSpace,
              G.isXRRenderTarget === !0,
            ),
            Te = xt(G)
          r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            Te,
            Ot,
            G.width,
            G.height,
          ),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + It,
              r.RENDERBUFFER,
              J.__webglColorRenderbuffer[It],
            )
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null),
          G.depthBuffer &&
            ((J.__webglDepthRenderbuffer = r.createRenderbuffer()),
            ft(J.__webglDepthRenderbuffer, G, !0)),
          e.bindFramebuffer(r.FRAMEBUFFER, null)
      }
    }
    if (mt) {
      e.bindTexture(r.TEXTURE_CUBE_MAP, vt.__webglTexture),
        Y(r.TEXTURE_CUBE_MAP, N)
      for (let It = 0; It < 6; It++)
        if (N.mipmaps && N.mipmaps.length > 0)
          for (let Bt = 0; Bt < N.mipmaps.length; Bt++)
            Z(
              J.__webglFramebuffer[It][Bt],
              G,
              N,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_CUBE_MAP_POSITIVE_X + It,
              Bt,
            )
        else
          Z(
            J.__webglFramebuffer[It],
            G,
            N,
            r.COLOR_ATTACHMENT0,
            r.TEXTURE_CUBE_MAP_POSITIVE_X + It,
            0,
          )
      v(N) && m(r.TEXTURE_CUBE_MAP), e.unbindTexture()
    } else if (Kt) {
      for (let It = 0, Bt = yt.length; It < Bt; It++) {
        const fe = yt[It],
          Mt = n.get(fe)
        e.bindTexture(r.TEXTURE_2D, Mt.__webglTexture),
          Y(r.TEXTURE_2D, fe),
          Z(
            J.__webglFramebuffer,
            G,
            fe,
            r.COLOR_ATTACHMENT0 + It,
            r.TEXTURE_2D,
            0,
          ),
          v(fe) && m(r.TEXTURE_2D)
      }
      e.unbindTexture()
    } else {
      let It = r.TEXTURE_2D
      if (
        ((G.isWebGL3DRenderTarget || G.isWebGLArrayRenderTarget) &&
          (It = G.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY),
        e.bindTexture(It, vt.__webglTexture),
        Y(It, N),
        N.mipmaps && N.mipmaps.length > 0)
      )
        for (let Bt = 0; Bt < N.mipmaps.length; Bt++)
          Z(J.__webglFramebuffer[Bt], G, N, r.COLOR_ATTACHMENT0, It, Bt)
      else Z(J.__webglFramebuffer, G, N, r.COLOR_ATTACHMENT0, It, 0)
      v(N) && m(It), e.unbindTexture()
    }
    G.depthBuffer && ct(G)
  }
  function dt(G) {
    const N = G.textures
    for (let J = 0, vt = N.length; J < vt; J++) {
      const yt = N[J]
      if (v(yt)) {
        const mt = G.isWebGLCubeRenderTarget
            ? r.TEXTURE_CUBE_MAP
            : r.TEXTURE_2D,
          Kt = n.get(yt).__webglTexture
        e.bindTexture(mt, Kt), m(mt), e.unbindTexture()
      }
    }
  }
  const B = [],
    ht = []
  function it(G) {
    if (G.samples > 0) {
      if (rt(G) === !1) {
        const N = G.textures,
          J = G.width,
          vt = G.height
        let yt = r.COLOR_BUFFER_BIT
        const mt = G.stencilBuffer
            ? r.DEPTH_STENCIL_ATTACHMENT
            : r.DEPTH_ATTACHMENT,
          Kt = n.get(G),
          It = N.length > 1
        if (It)
          for (let Bt = 0; Bt < N.length; Bt++)
            e.bindFramebuffer(r.FRAMEBUFFER, Kt.__webglMultisampledFramebuffer),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + Bt,
                r.RENDERBUFFER,
                null,
              ),
              e.bindFramebuffer(r.FRAMEBUFFER, Kt.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + Bt,
                r.TEXTURE_2D,
                null,
                0,
              )
        e.bindFramebuffer(
          r.READ_FRAMEBUFFER,
          Kt.__webglMultisampledFramebuffer,
        ),
          e.bindFramebuffer(r.DRAW_FRAMEBUFFER, Kt.__webglFramebuffer)
        for (let Bt = 0; Bt < N.length; Bt++) {
          if (
            (G.resolveDepthBuffer &&
              (G.depthBuffer && (yt |= r.DEPTH_BUFFER_BIT),
              G.stencilBuffer &&
                G.resolveStencilBuffer &&
                (yt |= r.STENCIL_BUFFER_BIT)),
            It)
          ) {
            r.framebufferRenderbuffer(
              r.READ_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              Kt.__webglColorRenderbuffer[Bt],
            )
            const fe = n.get(N[Bt]).__webglTexture
            r.framebufferTexture2D(
              r.DRAW_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_2D,
              fe,
              0,
            )
          }
          r.blitFramebuffer(0, 0, J, vt, 0, 0, J, vt, yt, r.NEAREST),
            l === !0 &&
              ((B.length = 0),
              (ht.length = 0),
              B.push(r.COLOR_ATTACHMENT0 + Bt),
              G.depthBuffer &&
                G.resolveDepthBuffer === !1 &&
                (B.push(mt),
                ht.push(mt),
                r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, ht)),
              r.invalidateFramebuffer(r.READ_FRAMEBUFFER, B))
        }
        if (
          (e.bindFramebuffer(r.READ_FRAMEBUFFER, null),
          e.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
          It)
        )
          for (let Bt = 0; Bt < N.length; Bt++) {
            e.bindFramebuffer(r.FRAMEBUFFER, Kt.__webglMultisampledFramebuffer),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + Bt,
                r.RENDERBUFFER,
                Kt.__webglColorRenderbuffer[Bt],
              )
            const fe = n.get(N[Bt]).__webglTexture
            e.bindFramebuffer(r.FRAMEBUFFER, Kt.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + Bt,
                r.TEXTURE_2D,
                fe,
                0,
              )
          }
        e.bindFramebuffer(r.DRAW_FRAMEBUFFER, Kt.__webglMultisampledFramebuffer)
      } else if (G.depthBuffer && G.resolveDepthBuffer === !1 && l) {
        const N = G.stencilBuffer
          ? r.DEPTH_STENCIL_ATTACHMENT
          : r.DEPTH_ATTACHMENT
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [N])
      }
    }
  }
  function xt(G) {
    return Math.min(i.maxSamples, G.samples)
  }
  function rt(G) {
    const N = n.get(G)
    return (
      G.samples > 0 &&
      t.has('WEBGL_multisampled_render_to_texture') === !0 &&
      N.__useRenderToTexture !== !1
    )
  }
  function kt(G) {
    const N = o.render.frame
    c.get(G) !== N && (c.set(G, N), G.update())
  }
  function Ct(G, N) {
    const J = G.colorSpace,
      vt = G.format,
      yt = G.type
    return (
      G.isCompressedTexture === !0 ||
        G.isVideoTexture === !0 ||
        (J !== ar &&
          J !== Ls &&
          (Be.getTransfer(J) === an
            ? (vt !== Yi || yt !== qo) &&
              console.warn(
                'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.',
              )
            : console.error(
                'THREE.WebGLTextures: Unsupported texture color space:',
                J,
              ))),
      N
    )
  }
  function Lt(G) {
    return (
      typeof HTMLImageElement < 'u' && G instanceof HTMLImageElement
        ? ((u.width = G.naturalWidth || G.width),
          (u.height = G.naturalHeight || G.height))
        : typeof VideoFrame < 'u' && G instanceof VideoFrame
        ? ((u.width = G.displayWidth), (u.height = G.displayHeight))
        : ((u.width = G.width), (u.height = G.height)),
      u
    )
  }
  ;(this.allocateTextureUnit = E),
    (this.resetTextureUnits = C),
    (this.setTexture2D = P),
    (this.setTexture2DArray = L),
    (this.setTexture3D = I),
    (this.setTextureCube = F),
    (this.rebindTextures = At),
    (this.setupRenderTarget = gt),
    (this.updateRenderTargetMipmap = dt),
    (this.updateMultisampleRenderTarget = it),
    (this.setupDepthRenderbuffer = ct),
    (this.setupFrameBufferTexture = Z),
    (this.useMultisampledRTT = rt)
}
function LY(r, t) {
  function e(n, i = Ls) {
    let a
    const o = Be.getTransfer(i)
    if (n === qo) return r.UNSIGNED_BYTE
    if (n === wM) return r.UNSIGNED_SHORT_4_4_4_4
    if (n === MM) return r.UNSIGNED_SHORT_5_5_5_1
    if (n === Uk) return r.UNSIGNED_INT_5_9_9_9_REV
    if (n === Fk) return r.BYTE
    if (n === zk) return r.SHORT
    if (n === gp) return r.UNSIGNED_SHORT
    if (n === bM) return r.INT
    if (n === Uu) return r.UNSIGNED_INT
    if (n === ya) return r.FLOAT
    if (n === hv) return r.HALF_FLOAT
    if (n === Vk) return r.ALPHA
    if (n === Gk) return r.RGB
    if (n === Yi) return r.RGBA
    if (n === Hk) return r.LUMINANCE
    if (n === Wk) return r.LUMINANCE_ALPHA
    if (n === wh) return r.DEPTH_COMPONENT
    if (n === Vh) return r.DEPTH_STENCIL
    if (n === TM) return r.RED
    if (n === CM) return r.RED_INTEGER
    if (n === Xk) return r.RG
    if (n === EM) return r.RG_INTEGER
    if (n === DM) return r.RGBA_INTEGER
    if (n === Om || n === Nm || n === km || n === Bm)
      if (o === an)
        if (((a = t.get('WEBGL_compressed_texture_s3tc_srgb')), a !== null)) {
          if (n === Om) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT
          if (n === Nm) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT
          if (n === km) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT
          if (n === Bm) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
        } else return null
      else if (((a = t.get('WEBGL_compressed_texture_s3tc')), a !== null)) {
        if (n === Om) return a.COMPRESSED_RGB_S3TC_DXT1_EXT
        if (n === Nm) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT
        if (n === km) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT
        if (n === Bm) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
      } else return null
    if (n === _A || n === xA || n === SA || n === AA)
      if (((a = t.get('WEBGL_compressed_texture_pvrtc')), a !== null)) {
        if (n === _A) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
        if (n === xA) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
        if (n === SA) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
        if (n === AA) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
      } else return null
    if (n === bA || n === wA || n === MA)
      if (((a = t.get('WEBGL_compressed_texture_etc')), a !== null)) {
        if (n === bA || n === wA)
          return o === an ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2
        if (n === MA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC
      } else return null
    if (
      n === TA ||
      n === CA ||
      n === EA ||
      n === DA ||
      n === LA ||
      n === PA ||
      n === RA ||
      n === IA ||
      n === OA ||
      n === NA ||
      n === kA ||
      n === BA ||
      n === FA ||
      n === zA
    )
      if (((a = t.get('WEBGL_compressed_texture_astc')), a !== null)) {
        if (n === TA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR
        if (n === CA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR
        if (n === EA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR
        if (n === DA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR
        if (n === LA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR
        if (n === PA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR
        if (n === RA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR
        if (n === IA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR
        if (n === OA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR
        if (n === NA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR
        if (n === kA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR
        if (n === BA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR
        if (n === FA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR
        if (n === zA)
          return o === an
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR
      } else return null
    if (n === Fm || n === UA || n === VA)
      if (((a = t.get('EXT_texture_compression_bptc')), a !== null)) {
        if (n === Fm)
          return o === an
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
        if (n === UA) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT
        if (n === VA) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
      } else return null
    if (n === Yk || n === GA || n === HA || n === WA)
      if (((a = t.get('EXT_texture_compression_rgtc')), a !== null)) {
        if (n === Fm) return a.COMPRESSED_RED_RGTC1_EXT
        if (n === GA) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT
        if (n === HA) return a.COMPRESSED_RED_GREEN_RGTC2_EXT
        if (n === WA) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
      } else return null
    return n === Uh ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null
  }
  return {
    convert: e,
  }
}
class PY extends wr {
  constructor(t = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = t)
  }
}
let un = class extends Fe {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group')
  }
}
const RY = {
  type: 'move',
}
class sx {
  constructor() {
    ;(this._targetRay = null), (this._grip = null), (this._hand = null)
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new un()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = {
          pinching: !1,
        })),
      this._hand
    )
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new un()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new U()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new U())),
      this._targetRay
    )
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new un()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new U()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new U())),
      this._grip
    )
  }
  dispatchEvent(t) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(t),
      this._grip !== null && this._grip.dispatchEvent(t),
      this._hand !== null && this._hand.dispatchEvent(t),
      this
    )
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n)
    }
    return (
      this.dispatchEvent({
        type: 'connected',
        data: t,
      }),
      this
    )
  }
  disconnect(t) {
    return (
      this.dispatchEvent({
        type: 'disconnected',
        data: t,
      }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    )
  }
  update(t, e, n) {
    let i = null,
      a = null,
      o = null
    const s = this._targetRay,
      l = this._grip,
      u = this._hand
    if (t && e.session.visibilityState !== 'visible-blurred') {
      if (u && t.hand) {
        o = !0
        for (const g of t.hand.values()) {
          const v = e.getJointPose(g, n),
            m = this._getHandJoint(u, g)
          v !== null &&
            (m.matrix.fromArray(v.transform.matrix),
            m.matrix.decompose(m.position, m.rotation, m.scale),
            (m.matrixWorldNeedsUpdate = !0),
            (m.jointRadius = v.radius)),
            (m.visible = v !== null)
        }
        const c = u.joints['index-finger-tip'],
          h = u.joints['thumb-tip'],
          f = c.position.distanceTo(h.position),
          d = 0.02,
          p = 0.005
        u.inputState.pinching && f > d + p
          ? ((u.inputState.pinching = !1),
            this.dispatchEvent({
              type: 'pinchend',
              handedness: t.handedness,
              target: this,
            }))
          : !u.inputState.pinching &&
            f <= d - p &&
            ((u.inputState.pinching = !0),
            this.dispatchEvent({
              type: 'pinchstart',
              handedness: t.handedness,
              target: this,
            }))
      } else
        l !== null &&
          t.gripSpace &&
          ((a = e.getPose(t.gripSpace, n)),
          a !== null &&
            (l.matrix.fromArray(a.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            a.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(a.linearVelocity))
              : (l.hasLinearVelocity = !1),
            a.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(a.angularVelocity))
              : (l.hasAngularVelocity = !1)))
      s !== null &&
        ((i = e.getPose(t.targetRaySpace, n)),
        i === null && a !== null && (i = a),
        i !== null &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          (s.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(RY)))
    }
    return (
      s !== null && (s.visible = i !== null),
      l !== null && (l.visible = a !== null),
      u !== null && (u.visible = o !== null),
      this
    )
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new un()
      ;(n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (t.joints[e.jointName] = n),
        t.add(n)
    }
    return t.joints[e.jointName]
  }
}
const IY = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  OY = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`
class NY {
  constructor() {
    ;(this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0)
  }
  init(t, e, n) {
    if (this.texture === null) {
      const i = new Yn(),
        a = t.properties.get(i)
      ;(a.__webglTexture = e.texture),
        (e.depthNear != n.depthNear || e.depthFar != n.depthFar) &&
          ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = i)
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport,
        n = new lo({
          vertexShader: IY,
          fragmentShader: OY,
          uniforms: {
            depthColor: {
              value: this.texture,
            },
            depthWidth: {
              value: e.z,
            },
            depthHeight: {
              value: e.w,
            },
          },
        })
      this.mesh = new De(new Ti(20, 20), n)
    }
    return this.mesh
  }
  reset() {
    ;(this.texture = null), (this.mesh = null)
  }
  getDepthTexture() {
    return this.texture
  }
}
class kY extends Ju {
  constructor(t, e) {
    super()
    const n = this
    let i = null,
      a = 1,
      o = null,
      s = 'local-floor',
      l = 1,
      u = null,
      c = null,
      h = null,
      f = null,
      d = null,
      p = null
    const g = new NY(),
      v = e.getContextAttributes()
    let m = null,
      y = null
    const _ = [],
      x = [],
      A = new pt()
    let S = null
    const b = new wr()
    b.layers.enable(1), (b.viewport = new Oe())
    const T = new wr()
    T.layers.enable(2), (T.viewport = new Oe())
    const w = [b, T],
      M = new PY()
    M.layers.enable(1), M.layers.enable(2)
    let C = null,
      E = null
    ;(this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (W) {
        let Z = _[W]
        return (
          Z === void 0 && ((Z = new sx()), (_[W] = Z)), Z.getTargetRaySpace()
        )
      }),
      (this.getControllerGrip = function (W) {
        let Z = _[W]
        return Z === void 0 && ((Z = new sx()), (_[W] = Z)), Z.getGripSpace()
      }),
      (this.getHand = function (W) {
        let Z = _[W]
        return Z === void 0 && ((Z = new sx()), (_[W] = Z)), Z.getHandSpace()
      })
    function D(W) {
      const Z = x.indexOf(W.inputSource)
      if (Z === -1) return
      const ft = _[Z]
      ft !== void 0 &&
        (ft.update(W.inputSource, W.frame, u || o),
        ft.dispatchEvent({
          type: W.type,
          data: W.inputSource,
        }))
    }
    function P() {
      i.removeEventListener('select', D),
        i.removeEventListener('selectstart', D),
        i.removeEventListener('selectend', D),
        i.removeEventListener('squeeze', D),
        i.removeEventListener('squeezestart', D),
        i.removeEventListener('squeezeend', D),
        i.removeEventListener('end', P),
        i.removeEventListener('inputsourceschange', L)
      for (let W = 0; W < _.length; W++) {
        const Z = x[W]
        Z !== null && ((x[W] = null), _[W].disconnect(Z))
      }
      ;(C = null),
        (E = null),
        g.reset(),
        t.setRenderTarget(m),
        (d = null),
        (f = null),
        (h = null),
        (i = null),
        (y = null),
        ut.stop(),
        (n.isPresenting = !1),
        t.setPixelRatio(S),
        t.setSize(A.width, A.height, !1),
        n.dispatchEvent({
          type: 'sessionend',
        })
    }
    ;(this.setFramebufferScaleFactor = function (W) {
      ;(a = W),
        n.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.',
          )
    }),
      (this.setReferenceSpaceType = function (W) {
        ;(s = W),
          n.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.',
            )
      }),
      (this.getReferenceSpace = function () {
        return u || o
      }),
      (this.setReferenceSpace = function (W) {
        u = W
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : d
      }),
      (this.getBinding = function () {
        return h
      }),
      (this.getFrame = function () {
        return p
      }),
      (this.getSession = function () {
        return i
      }),
      (this.setSession = async function (W) {
        if (((i = W), i !== null)) {
          if (
            ((m = t.getRenderTarget()),
            i.addEventListener('select', D),
            i.addEventListener('selectstart', D),
            i.addEventListener('selectend', D),
            i.addEventListener('squeeze', D),
            i.addEventListener('squeezestart', D),
            i.addEventListener('squeezeend', D),
            i.addEventListener('end', P),
            i.addEventListener('inputsourceschange', L),
            v.xrCompatible !== !0 && (await e.makeXRCompatible()),
            (S = t.getPixelRatio()),
            t.getSize(A),
            i.renderState.layers === void 0)
          ) {
            const Z = {
              antialias: v.antialias,
              alpha: !0,
              depth: v.depth,
              stencil: v.stencil,
              framebufferScaleFactor: a,
            }
            ;(d = new XRWebGLLayer(i, e, Z)),
              i.updateRenderState({
                baseLayer: d,
              }),
              t.setPixelRatio(1),
              t.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (y = new Vu(d.framebufferWidth, d.framebufferHeight, {
                format: Yi,
                type: qo,
                colorSpace: t.outputColorSpace,
                stencilBuffer: v.stencil,
              }))
          } else {
            let Z = null,
              ft = null,
              lt = null
            v.depth &&
              ((lt = v.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
              (Z = v.stencil ? Vh : wh),
              (ft = v.stencil ? Uh : Uu))
            const ct = {
              colorFormat: e.RGBA8,
              depthFormat: lt,
              scaleFactor: a,
            }
            ;(h = new XRWebGLBinding(i, e)),
              (f = h.createProjectionLayer(ct)),
              i.updateRenderState({
                layers: [f],
              }),
              t.setPixelRatio(1),
              t.setSize(f.textureWidth, f.textureHeight, !1),
              (y = new Vu(f.textureWidth, f.textureHeight, {
                format: Yi,
                type: qo,
                depthTexture: new aB(
                  f.textureWidth,
                  f.textureHeight,
                  ft,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  Z,
                ),
                stencilBuffer: v.stencil,
                colorSpace: t.outputColorSpace,
                samples: v.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
              }))
          }
          ;(y.isXRRenderTarget = !0),
            this.setFoveation(l),
            (u = null),
            (o = await i.requestReferenceSpace(s)),
            ut.setContext(i),
            ut.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({
              type: 'sessionstart',
            })
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode
      }),
      (this.getDepthTexture = function () {
        return g.getDepthTexture()
      })
    function L(W) {
      for (let Z = 0; Z < W.removed.length; Z++) {
        const ft = W.removed[Z],
          lt = x.indexOf(ft)
        lt >= 0 && ((x[lt] = null), _[lt].disconnect(ft))
      }
      for (let Z = 0; Z < W.added.length; Z++) {
        const ft = W.added[Z]
        let lt = x.indexOf(ft)
        if (lt === -1) {
          for (let At = 0; At < _.length; At++)
            if (At >= x.length) {
              x.push(ft), (lt = At)
              break
            } else if (x[At] === null) {
              ;(x[At] = ft), (lt = At)
              break
            }
          if (lt === -1) break
        }
        const ct = _[lt]
        ct && ct.connect(ft)
      }
    }
    const I = new U(),
      F = new U()
    function k(W, Z, ft) {
      I.setFromMatrixPosition(Z.matrixWorld),
        F.setFromMatrixPosition(ft.matrixWorld)
      const lt = I.distanceTo(F),
        ct = Z.projectionMatrix.elements,
        At = ft.projectionMatrix.elements,
        gt = ct[14] / (ct[10] - 1),
        dt = ct[14] / (ct[10] + 1),
        B = (ct[9] + 1) / ct[5],
        ht = (ct[9] - 1) / ct[5],
        it = (ct[8] - 1) / ct[0],
        xt = (At[8] + 1) / At[0],
        rt = gt * it,
        kt = gt * xt,
        Ct = lt / (-it + xt),
        Lt = Ct * -it
      Z.matrixWorld.decompose(W.position, W.quaternion, W.scale),
        W.translateX(Lt),
        W.translateZ(Ct),
        W.matrixWorld.compose(W.position, W.quaternion, W.scale),
        W.matrixWorldInverse.copy(W.matrixWorld).invert()
      const G = gt + Ct,
        N = dt + Ct,
        J = rt - Lt,
        vt = kt + (lt - Lt),
        yt = ((B * dt) / N) * G,
        mt = ((ht * dt) / N) * G
      W.projectionMatrix.makePerspective(J, vt, yt, mt, G, N),
        W.projectionMatrixInverse.copy(W.projectionMatrix).invert()
    }
    function V(W, Z) {
      Z === null
        ? W.matrixWorld.copy(W.matrix)
        : W.matrixWorld.multiplyMatrices(Z.matrixWorld, W.matrix),
        W.matrixWorldInverse.copy(W.matrixWorld).invert()
    }
    this.updateCamera = function (W) {
      if (i === null) return
      g.texture !== null && ((W.near = g.depthNear), (W.far = g.depthFar)),
        (M.near = T.near = b.near = W.near),
        (M.far = T.far = b.far = W.far),
        (C !== M.near || E !== M.far) &&
          (i.updateRenderState({
            depthNear: M.near,
            depthFar: M.far,
          }),
          (C = M.near),
          (E = M.far),
          (b.near = C),
          (b.far = E),
          (T.near = C),
          (T.far = E),
          b.updateProjectionMatrix(),
          T.updateProjectionMatrix(),
          W.updateProjectionMatrix())
      const Z = W.parent,
        ft = M.cameras
      V(M, Z)
      for (let lt = 0; lt < ft.length; lt++) V(ft[lt], Z)
      ft.length === 2
        ? k(M, b, T)
        : M.projectionMatrix.copy(b.projectionMatrix),
        H(W, M, Z)
    }
    function H(W, Z, ft) {
      ft === null
        ? W.matrix.copy(Z.matrixWorld)
        : (W.matrix.copy(ft.matrixWorld),
          W.matrix.invert(),
          W.matrix.multiply(Z.matrixWorld)),
        W.matrix.decompose(W.position, W.quaternion, W.scale),
        W.updateMatrixWorld(!0),
        W.projectionMatrix.copy(Z.projectionMatrix),
        W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),
        W.isPerspectiveCamera &&
          ((W.fov = Gh * 2 * Math.atan(1 / W.projectionMatrix.elements[5])),
          (W.zoom = 1))
    }
    ;(this.getCamera = function () {
      return M
    }),
      (this.getFoveation = function () {
        if (!(f === null && d === null)) return l
      }),
      (this.setFoveation = function (W) {
        ;(l = W),
          f !== null && (f.fixedFoveation = W),
          d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = W)
      }),
      (this.hasDepthSensing = function () {
        return g.texture !== null
      }),
      (this.getDepthSensingMesh = function () {
        return g.getMesh(M)
      })
    let Y = null
    function K(W, Z) {
      if (((c = Z.getViewerPose(u || o)), (p = Z), c !== null)) {
        const ft = c.views
        d !== null &&
          (t.setRenderTargetFramebuffer(y, d.framebuffer), t.setRenderTarget(y))
        let lt = !1
        ft.length !== M.cameras.length && ((M.cameras.length = 0), (lt = !0))
        for (let At = 0; At < ft.length; At++) {
          const gt = ft[At]
          let dt = null
          if (d !== null) dt = d.getViewport(gt)
          else {
            const ht = h.getViewSubImage(f, gt)
            ;(dt = ht.viewport),
              At === 0 &&
                (t.setRenderTargetTextures(
                  y,
                  ht.colorTexture,
                  f.ignoreDepthValues ? void 0 : ht.depthStencilTexture,
                ),
                t.setRenderTarget(y))
          }
          let B = w[At]
          B === void 0 &&
            ((B = new wr()),
            B.layers.enable(At),
            (B.viewport = new Oe()),
            (w[At] = B)),
            B.matrix.fromArray(gt.transform.matrix),
            B.matrix.decompose(B.position, B.quaternion, B.scale),
            B.projectionMatrix.fromArray(gt.projectionMatrix),
            B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),
            B.viewport.set(dt.x, dt.y, dt.width, dt.height),
            At === 0 &&
              (M.matrix.copy(B.matrix),
              M.matrix.decompose(M.position, M.quaternion, M.scale)),
            lt === !0 && M.cameras.push(B)
        }
        const ct = i.enabledFeatures
        if (ct && ct.includes('depth-sensing')) {
          const At = h.getDepthInformation(ft[0])
          At && At.isValid && At.texture && g.init(t, At, i.renderState)
        }
      }
      for (let ft = 0; ft < _.length; ft++) {
        const lt = x[ft],
          ct = _[ft]
        lt !== null && ct !== void 0 && ct.update(lt, Z, u || o)
      }
      Y && Y(W, Z),
        Z.detectedPlanes &&
          n.dispatchEvent({
            type: 'planesdetected',
            data: Z,
          }),
        (p = null)
    }
    const ut = new iB()
    ut.setAnimationLoop(K),
      (this.setAnimationLoop = function (W) {
        Y = W
      }),
      (this.dispose = function () {})
  }
}
const Ml = new Ma(),
  BY = new ae()
function FY(r, t) {
  function e(v, m) {
    v.matrixAutoUpdate === !0 && v.updateMatrix(), m.value.copy(v.matrix)
  }
  function n(v, m) {
    m.color.getRGB(v.fogColor.value, eB(r)),
      m.isFog
        ? ((v.fogNear.value = m.near), (v.fogFar.value = m.far))
        : m.isFogExp2 && (v.fogDensity.value = m.density)
  }
  function i(v, m, y, _, x) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? a(v, m)
      : m.isMeshToonMaterial
      ? (a(v, m), h(v, m))
      : m.isMeshPhongMaterial
      ? (a(v, m), c(v, m))
      : m.isMeshStandardMaterial
      ? (a(v, m), f(v, m), m.isMeshPhysicalMaterial && d(v, m, x))
      : m.isMeshMatcapMaterial
      ? (a(v, m), p(v, m))
      : m.isMeshDepthMaterial
      ? a(v, m)
      : m.isMeshDistanceMaterial
      ? (a(v, m), g(v, m))
      : m.isMeshNormalMaterial
      ? a(v, m)
      : m.isLineBasicMaterial
      ? (o(v, m), m.isLineDashedMaterial && s(v, m))
      : m.isPointsMaterial
      ? l(v, m, y, _)
      : m.isSpriteMaterial
      ? u(v, m)
      : m.isShadowMaterial
      ? (v.color.value.copy(m.color), (v.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1)
  }
  function a(v, m) {
    ;(v.opacity.value = m.opacity),
      m.color && v.diffuse.value.copy(m.color),
      m.emissive &&
        v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && ((v.map.value = m.map), e(m.map, v.mapTransform)),
      m.alphaMap &&
        ((v.alphaMap.value = m.alphaMap), e(m.alphaMap, v.alphaMapTransform)),
      m.bumpMap &&
        ((v.bumpMap.value = m.bumpMap),
        e(m.bumpMap, v.bumpMapTransform),
        (v.bumpScale.value = m.bumpScale),
        m.side === Qr && (v.bumpScale.value *= -1)),
      m.normalMap &&
        ((v.normalMap.value = m.normalMap),
        e(m.normalMap, v.normalMapTransform),
        v.normalScale.value.copy(m.normalScale),
        m.side === Qr && v.normalScale.value.negate()),
      m.displacementMap &&
        ((v.displacementMap.value = m.displacementMap),
        e(m.displacementMap, v.displacementMapTransform),
        (v.displacementScale.value = m.displacementScale),
        (v.displacementBias.value = m.displacementBias)),
      m.emissiveMap &&
        ((v.emissiveMap.value = m.emissiveMap),
        e(m.emissiveMap, v.emissiveMapTransform)),
      m.specularMap &&
        ((v.specularMap.value = m.specularMap),
        e(m.specularMap, v.specularMapTransform)),
      m.alphaTest > 0 && (v.alphaTest.value = m.alphaTest)
    const y = t.get(m),
      _ = y.envMap,
      x = y.envMapRotation
    _ &&
      ((v.envMap.value = _),
      Ml.copy(x),
      (Ml.x *= -1),
      (Ml.y *= -1),
      (Ml.z *= -1),
      _.isCubeTexture &&
        _.isRenderTargetTexture === !1 &&
        ((Ml.y *= -1), (Ml.z *= -1)),
      v.envMapRotation.value.setFromMatrix4(BY.makeRotationFromEuler(Ml)),
      (v.flipEnvMap.value =
        _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
      (v.reflectivity.value = m.reflectivity),
      (v.ior.value = m.ior),
      (v.refractionRatio.value = m.refractionRatio)),
      m.lightMap &&
        ((v.lightMap.value = m.lightMap),
        (v.lightMapIntensity.value = m.lightMapIntensity),
        e(m.lightMap, v.lightMapTransform)),
      m.aoMap &&
        ((v.aoMap.value = m.aoMap),
        (v.aoMapIntensity.value = m.aoMapIntensity),
        e(m.aoMap, v.aoMapTransform))
  }
  function o(v, m) {
    v.diffuse.value.copy(m.color),
      (v.opacity.value = m.opacity),
      m.map && ((v.map.value = m.map), e(m.map, v.mapTransform))
  }
  function s(v, m) {
    ;(v.dashSize.value = m.dashSize),
      (v.totalSize.value = m.dashSize + m.gapSize),
      (v.scale.value = m.scale)
  }
  function l(v, m, y, _) {
    v.diffuse.value.copy(m.color),
      (v.opacity.value = m.opacity),
      (v.size.value = m.size * y),
      (v.scale.value = _ * 0.5),
      m.map && ((v.map.value = m.map), e(m.map, v.uvTransform)),
      m.alphaMap &&
        ((v.alphaMap.value = m.alphaMap), e(m.alphaMap, v.alphaMapTransform)),
      m.alphaTest > 0 && (v.alphaTest.value = m.alphaTest)
  }
  function u(v, m) {
    v.diffuse.value.copy(m.color),
      (v.opacity.value = m.opacity),
      (v.rotation.value = m.rotation),
      m.map && ((v.map.value = m.map), e(m.map, v.mapTransform)),
      m.alphaMap &&
        ((v.alphaMap.value = m.alphaMap), e(m.alphaMap, v.alphaMapTransform)),
      m.alphaTest > 0 && (v.alphaTest.value = m.alphaTest)
  }
  function c(v, m) {
    v.specular.value.copy(m.specular),
      (v.shininess.value = Math.max(m.shininess, 1e-4))
  }
  function h(v, m) {
    m.gradientMap && (v.gradientMap.value = m.gradientMap)
  }
  function f(v, m) {
    ;(v.metalness.value = m.metalness),
      m.metalnessMap &&
        ((v.metalnessMap.value = m.metalnessMap),
        e(m.metalnessMap, v.metalnessMapTransform)),
      (v.roughness.value = m.roughness),
      m.roughnessMap &&
        ((v.roughnessMap.value = m.roughnessMap),
        e(m.roughnessMap, v.roughnessMapTransform)),
      m.envMap && (v.envMapIntensity.value = m.envMapIntensity)
  }
  function d(v, m, y) {
    ;(v.ior.value = m.ior),
      m.sheen > 0 &&
        (v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (v.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap &&
          ((v.sheenColorMap.value = m.sheenColorMap),
          e(m.sheenColorMap, v.sheenColorMapTransform)),
        m.sheenRoughnessMap &&
          ((v.sheenRoughnessMap.value = m.sheenRoughnessMap),
          e(m.sheenRoughnessMap, v.sheenRoughnessMapTransform))),
      m.clearcoat > 0 &&
        ((v.clearcoat.value = m.clearcoat),
        (v.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap &&
          ((v.clearcoatMap.value = m.clearcoatMap),
          e(m.clearcoatMap, v.clearcoatMapTransform)),
        m.clearcoatRoughnessMap &&
          ((v.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
          e(m.clearcoatRoughnessMap, v.clearcoatRoughnessMapTransform)),
        m.clearcoatNormalMap &&
          ((v.clearcoatNormalMap.value = m.clearcoatNormalMap),
          e(m.clearcoatNormalMap, v.clearcoatNormalMapTransform),
          v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          m.side === Qr && v.clearcoatNormalScale.value.negate())),
      m.dispersion > 0 && (v.dispersion.value = m.dispersion),
      m.iridescence > 0 &&
        ((v.iridescence.value = m.iridescence),
        (v.iridescenceIOR.value = m.iridescenceIOR),
        (v.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (v.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap &&
          ((v.iridescenceMap.value = m.iridescenceMap),
          e(m.iridescenceMap, v.iridescenceMapTransform)),
        m.iridescenceThicknessMap &&
          ((v.iridescenceThicknessMap.value = m.iridescenceThicknessMap),
          e(m.iridescenceThicknessMap, v.iridescenceThicknessMapTransform))),
      m.transmission > 0 &&
        ((v.transmission.value = m.transmission),
        (v.transmissionSamplerMap.value = y.texture),
        v.transmissionSamplerSize.value.set(y.width, y.height),
        m.transmissionMap &&
          ((v.transmissionMap.value = m.transmissionMap),
          e(m.transmissionMap, v.transmissionMapTransform)),
        (v.thickness.value = m.thickness),
        m.thicknessMap &&
          ((v.thicknessMap.value = m.thicknessMap),
          e(m.thicknessMap, v.thicknessMapTransform)),
        (v.attenuationDistance.value = m.attenuationDistance),
        v.attenuationColor.value.copy(m.attenuationColor)),
      m.anisotropy > 0 &&
        (v.anisotropyVector.value.set(
          m.anisotropy * Math.cos(m.anisotropyRotation),
          m.anisotropy * Math.sin(m.anisotropyRotation),
        ),
        m.anisotropyMap &&
          ((v.anisotropyMap.value = m.anisotropyMap),
          e(m.anisotropyMap, v.anisotropyMapTransform))),
      (v.specularIntensity.value = m.specularIntensity),
      v.specularColor.value.copy(m.specularColor),
      m.specularColorMap &&
        ((v.specularColorMap.value = m.specularColorMap),
        e(m.specularColorMap, v.specularColorMapTransform)),
      m.specularIntensityMap &&
        ((v.specularIntensityMap.value = m.specularIntensityMap),
        e(m.specularIntensityMap, v.specularIntensityMapTransform))
  }
  function p(v, m) {
    m.matcap && (v.matcap.value = m.matcap)
  }
  function g(v, m) {
    const y = t.get(m).light
    v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),
      (v.nearDistance.value = y.shadow.camera.near),
      (v.farDistance.value = y.shadow.camera.far)
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i,
  }
}
function zY(r, t, e, n) {
  let i = {},
    a = {},
    o = []
  const s = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS)
  function l(y, _) {
    const x = _.program
    n.uniformBlockBinding(y, x)
  }
  function u(y, _) {
    let x = i[y.id]
    x === void 0 &&
      (p(y), (x = c(y)), (i[y.id] = x), y.addEventListener('dispose', v))
    const A = _.program
    n.updateUBOMapping(y, A)
    const S = t.render.frame
    a[y.id] !== S && (f(y), (a[y.id] = S))
  }
  function c(y) {
    const _ = h()
    y.__bindingPointIndex = _
    const x = r.createBuffer(),
      A = y.__size,
      S = y.usage
    return (
      r.bindBuffer(r.UNIFORM_BUFFER, x),
      r.bufferData(r.UNIFORM_BUFFER, A, S),
      r.bindBuffer(r.UNIFORM_BUFFER, null),
      r.bindBufferBase(r.UNIFORM_BUFFER, _, x),
      x
    )
  }
  function h() {
    for (let y = 0; y < s; y++) if (o.indexOf(y) === -1) return o.push(y), y
    return (
      console.error(
        'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.',
      ),
      0
    )
  }
  function f(y) {
    const _ = i[y.id],
      x = y.uniforms,
      A = y.__cache
    r.bindBuffer(r.UNIFORM_BUFFER, _)
    for (let S = 0, b = x.length; S < b; S++) {
      const T = Array.isArray(x[S]) ? x[S] : [x[S]]
      for (let w = 0, M = T.length; w < M; w++) {
        const C = T[w]
        if (d(C, S, w, A) === !0) {
          const E = C.__offset,
            D = Array.isArray(C.value) ? C.value : [C.value]
          let P = 0
          for (let L = 0; L < D.length; L++) {
            const I = D[L],
              F = g(I)
            typeof I == 'number' || typeof I == 'boolean'
              ? ((C.__data[0] = I),
                r.bufferSubData(r.UNIFORM_BUFFER, E + P, C.__data))
              : I.isMatrix3
              ? ((C.__data[0] = I.elements[0]),
                (C.__data[1] = I.elements[1]),
                (C.__data[2] = I.elements[2]),
                (C.__data[3] = 0),
                (C.__data[4] = I.elements[3]),
                (C.__data[5] = I.elements[4]),
                (C.__data[6] = I.elements[5]),
                (C.__data[7] = 0),
                (C.__data[8] = I.elements[6]),
                (C.__data[9] = I.elements[7]),
                (C.__data[10] = I.elements[8]),
                (C.__data[11] = 0))
              : (I.toArray(C.__data, P),
                (P += F.storage / Float32Array.BYTES_PER_ELEMENT))
          }
          r.bufferSubData(r.UNIFORM_BUFFER, E, C.__data)
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null)
  }
  function d(y, _, x, A) {
    const S = y.value,
      b = _ + '_' + x
    if (A[b] === void 0)
      return (
        typeof S == 'number' || typeof S == 'boolean'
          ? (A[b] = S)
          : (A[b] = S.clone()),
        !0
      )
    {
      const T = A[b]
      if (typeof S == 'number' || typeof S == 'boolean') {
        if (T !== S) return (A[b] = S), !0
      } else if (T.equals(S) === !1) return T.copy(S), !0
    }
    return !1
  }
  function p(y) {
    const _ = y.uniforms
    let x = 0
    const A = 16
    for (let b = 0, T = _.length; b < T; b++) {
      const w = Array.isArray(_[b]) ? _[b] : [_[b]]
      for (let M = 0, C = w.length; M < C; M++) {
        const E = w[M],
          D = Array.isArray(E.value) ? E.value : [E.value]
        for (let P = 0, L = D.length; P < L; P++) {
          const I = D[P],
            F = g(I),
            k = x % A
          k !== 0 && A - k < F.boundary && (x += A - k),
            (E.__data = new Float32Array(
              F.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (E.__offset = x),
            (x += F.storage)
        }
      }
    }
    const S = x % A
    return S > 0 && (x += A - S), (y.__size = x), (y.__cache = {}), this
  }
  function g(y) {
    const _ = {
      boundary: 0,
      storage: 0,
    }
    return (
      typeof y == 'number' || typeof y == 'boolean'
        ? ((_.boundary = 4), (_.storage = 4))
        : y.isVector2
        ? ((_.boundary = 8), (_.storage = 8))
        : y.isVector3 || y.isColor
        ? ((_.boundary = 16), (_.storage = 12))
        : y.isVector4
        ? ((_.boundary = 16), (_.storage = 16))
        : y.isMatrix3
        ? ((_.boundary = 48), (_.storage = 48))
        : y.isMatrix4
        ? ((_.boundary = 64), (_.storage = 64))
        : y.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.',
          )
        : console.warn(
            'THREE.WebGLRenderer: Unsupported uniform value type.',
            y,
          ),
      _
    )
  }
  function v(y) {
    const _ = y.target
    _.removeEventListener('dispose', v)
    const x = o.indexOf(_.__bindingPointIndex)
    o.splice(x, 1), r.deleteBuffer(i[_.id]), delete i[_.id], delete a[_.id]
  }
  function m() {
    for (const y in i) r.deleteBuffer(i[y])
    ;(o = []), (i = {}), (a = {})
  }
  return {
    bind: l,
    update: u,
    dispose: m,
  }
}
class cB {
  constructor(t = {}) {
    const {
      canvas: e = R6(),
      context: n = null,
      depth: i = !0,
      stencil: a = !1,
      alpha: o = !1,
      antialias: s = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: u = !1,
      powerPreference: c = 'default',
      failIfMajorPerformanceCaveat: h = !1,
    } = t
    this.isWebGLRenderer = !0
    let f
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < 'u' &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          'THREE.WebGLRenderer: WebGL 1 is not supported since r163.',
        )
      f = n.getContextAttributes().alpha
    } else f = o
    const d = new Uint32Array(4),
      p = new Int32Array(4)
    let g = null,
      v = null
    const m = [],
      y = []
    ;(this.domElement = e),
      (this.debug = {
        checkShaderErrors: !0,
        onShaderError: null,
      }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = cn),
      (this.toneMapping = Ys),
      (this.toneMappingExposure = 1)
    const _ = this
    let x = !1,
      A = 0,
      S = 0,
      b = null,
      T = -1,
      w = null
    const M = new Oe(),
      C = new Oe()
    let E = null
    const D = new qt(0)
    let P = 0,
      L = e.width,
      I = e.height,
      F = 1,
      k = null,
      V = null
    const H = new Oe(0, 0, L, I),
      Y = new Oe(0, 0, L, I)
    let K = !1
    const ut = new BM()
    let W = !1,
      Z = !1
    const ft = new ae(),
      lt = new U(),
      ct = new Oe(),
      At = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      }
    let gt = !1
    function dt() {
      return b === null ? F : 1
    }
    let B = n
    function ht(z, $) {
      return e.getContext(z, $)
    }
    try {
      const z = {
        alpha: !0,
        depth: i,
        stencil: a,
        antialias: s,
        premultipliedAlpha: l,
        preserveDrawingBuffer: u,
        powerPreference: c,
        failIfMajorPerformanceCaveat: h,
      }
      if (
        ('setAttribute' in e &&
          e.setAttribute('data-engine', `three.js r${SM}`),
        e.addEventListener('webglcontextlost', tt, !1),
        e.addEventListener('webglcontextrestored', ot, !1),
        e.addEventListener('webglcontextcreationerror', St, !1),
        B === null)
      ) {
        const $ = 'webgl2'
        if (((B = ht($, z)), B === null))
          throw ht($)
            ? new Error(
                'Error creating WebGL context with your selected attributes.',
              )
            : new Error('Error creating WebGL context.')
      }
    } catch (z) {
      throw (console.error('THREE.WebGLRenderer: ' + z.message), z)
    }
    let it,
      xt,
      rt,
      kt,
      Ct,
      Lt,
      G,
      N,
      J,
      vt,
      yt,
      mt,
      Kt,
      It,
      Bt,
      fe,
      Mt,
      Ot,
      Te,
      se,
      Gt,
      ue,
      de,
      ln
    function O() {
      ;(it = new $7(B)),
        it.init(),
        (ue = new LY(B, it)),
        (xt = new V7(B, it, t, ue)),
        (rt = new CY(B)),
        (kt = new K7(B)),
        (Ct = new dY()),
        (Lt = new DY(B, it, rt, Ct, xt, ue, kt)),
        (G = new H7(_)),
        (N = new Y7(_)),
        (J = new rW(B)),
        (de = new z7(B, J)),
        (vt = new q7(B, J, kt, de)),
        (yt = new J7(B, vt, J, kt)),
        (Te = new j7(B, xt, Lt)),
        (fe = new G7(Ct)),
        (mt = new fY(_, G, N, it, xt, de, fe)),
        (Kt = new FY(_, Ct)),
        (It = new vY()),
        (Bt = new SY(it)),
        (Ot = new F7(_, G, N, rt, yt, f, l)),
        (Mt = new TY(_, yt, xt)),
        (ln = new zY(B, kt, xt, rt)),
        (se = new U7(B, it, kt)),
        (Gt = new Z7(B, it, kt)),
        (kt.programs = mt.programs),
        (_.capabilities = xt),
        (_.extensions = it),
        (_.properties = Ct),
        (_.renderLists = It),
        (_.shadowMap = Mt),
        (_.state = rt),
        (_.info = kt)
    }
    O()
    const j = new kY(_, B)
    ;(this.xr = j),
      (this.getContext = function () {
        return B
      }),
      (this.getContextAttributes = function () {
        return B.getContextAttributes()
      }),
      (this.forceContextLoss = function () {
        const z = it.get('WEBGL_lose_context')
        z && z.loseContext()
      }),
      (this.forceContextRestore = function () {
        const z = it.get('WEBGL_lose_context')
        z && z.restoreContext()
      }),
      (this.getPixelRatio = function () {
        return F
      }),
      (this.setPixelRatio = function (z) {
        z !== void 0 && ((F = z), this.setSize(L, I, !1))
      }),
      (this.getSize = function (z) {
        return z.set(L, I)
      }),
      (this.setSize = function (z, $, et = !0) {
        if (j.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          )
          return
        }
        ;(L = z),
          (I = $),
          (e.width = Math.floor(z * F)),
          (e.height = Math.floor($ * F)),
          et === !0 &&
            ((e.style.width = z + 'px'), (e.style.height = $ + 'px')),
          this.setViewport(0, 0, z, $)
      }),
      (this.getDrawingBufferSize = function (z) {
        return z.set(L * F, I * F).floor()
      }),
      (this.setDrawingBufferSize = function (z, $, et) {
        ;(L = z),
          (I = $),
          (F = et),
          (e.width = Math.floor(z * et)),
          (e.height = Math.floor($ * et)),
          this.setViewport(0, 0, z, $)
      }),
      (this.getCurrentViewport = function (z) {
        return z.copy(M)
      }),
      (this.getViewport = function (z) {
        return z.copy(H)
      }),
      (this.setViewport = function (z, $, et, nt) {
        z.isVector4 ? H.set(z.x, z.y, z.z, z.w) : H.set(z, $, et, nt),
          rt.viewport(M.copy(H).multiplyScalar(F).round())
      }),
      (this.getScissor = function (z) {
        return z.copy(Y)
      }),
      (this.setScissor = function (z, $, et, nt) {
        z.isVector4 ? Y.set(z.x, z.y, z.z, z.w) : Y.set(z, $, et, nt),
          rt.scissor(C.copy(Y).multiplyScalar(F).round())
      }),
      (this.getScissorTest = function () {
        return K
      }),
      (this.setScissorTest = function (z) {
        rt.setScissorTest((K = z))
      }),
      (this.setOpaqueSort = function (z) {
        k = z
      }),
      (this.setTransparentSort = function (z) {
        V = z
      }),
      (this.getClearColor = function (z) {
        return z.copy(Ot.getClearColor())
      }),
      (this.setClearColor = function () {
        Ot.setClearColor.apply(Ot, arguments)
      }),
      (this.getClearAlpha = function () {
        return Ot.getClearAlpha()
      }),
      (this.setClearAlpha = function () {
        Ot.setClearAlpha.apply(Ot, arguments)
      }),
      (this.clear = function (z = !0, $ = !0, et = !0) {
        let nt = 0
        if (z) {
          let q = !1
          if (b !== null) {
            const Dt = b.texture.format
            q = Dt === DM || Dt === EM || Dt === CM
          }
          if (q) {
            const Dt = b.texture.type,
              Ft =
                Dt === qo ||
                Dt === Uu ||
                Dt === gp ||
                Dt === Uh ||
                Dt === wM ||
                Dt === MM,
              Xt = Ot.getClearColor(),
              Yt = Ot.getClearAlpha(),
              le = Xt.r,
              he = Xt.g,
              ne = Xt.b
            Ft
              ? ((d[0] = le),
                (d[1] = he),
                (d[2] = ne),
                (d[3] = Yt),
                B.clearBufferuiv(B.COLOR, 0, d))
              : ((p[0] = le),
                (p[1] = he),
                (p[2] = ne),
                (p[3] = Yt),
                B.clearBufferiv(B.COLOR, 0, p))
          } else nt |= B.COLOR_BUFFER_BIT
        }
        $ && (nt |= B.DEPTH_BUFFER_BIT),
          et &&
            ((nt |= B.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          B.clear(nt)
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1)
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1)
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0)
      }),
      (this.dispose = function () {
        e.removeEventListener('webglcontextlost', tt, !1),
          e.removeEventListener('webglcontextrestored', ot, !1),
          e.removeEventListener('webglcontextcreationerror', St, !1),
          It.dispose(),
          Bt.dispose(),
          Ct.dispose(),
          G.dispose(),
          N.dispose(),
          yt.dispose(),
          de.dispose(),
          ln.dispose(),
          mt.dispose(),
          j.dispose(),
          j.removeEventListener('sessionstart', On),
          j.removeEventListener('sessionend', ss),
          sr.stop()
      })
    function tt(z) {
      z.preventDefault(),
        console.log('THREE.WebGLRenderer: Context Lost.'),
        (x = !0)
    }
    function ot() {
      console.log('THREE.WebGLRenderer: Context Restored.'), (x = !1)
      const z = kt.autoReset,
        $ = Mt.enabled,
        et = Mt.autoUpdate,
        nt = Mt.needsUpdate,
        q = Mt.type
      O(),
        (kt.autoReset = z),
        (Mt.enabled = $),
        (Mt.autoUpdate = et),
        (Mt.needsUpdate = nt),
        (Mt.type = q)
    }
    function St(z) {
      console.error(
        'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
        z.statusMessage,
      )
    }
    function jt(z) {
      const $ = z.target
      $.removeEventListener('dispose', jt), ce($)
    }
    function ce(z) {
      Tn(z), Ct.remove(z)
    }
    function Tn(z) {
      const $ = Ct.get(z).programs
      $ !== void 0 &&
        ($.forEach(function (et) {
          mt.releaseProgram(et)
        }),
        z.isShaderMaterial && mt.releaseShaderCache(z))
    }
    this.renderBufferDirect = function (z, $, et, nt, q, Dt) {
      $ === null && ($ = At)
      const Ft = q.isMesh && q.matrixWorld.determinant() < 0,
        Xt = u8(z, $, et, nt, q)
      rt.setMaterial(nt, Ft)
      let Yt = et.index,
        le = 1
      if (nt.wireframe === !0) {
        if (((Yt = vt.getWireframeAttribute(et)), Yt === void 0)) return
        le = 2
      }
      const he = et.drawRange,
        ne = et.attributes.position
      let ze = he.start * le,
        yn = (he.start + he.count) * le
      Dt !== null &&
        ((ze = Math.max(ze, Dt.start * le)),
        (yn = Math.min(yn, (Dt.start + Dt.count) * le))),
        Yt !== null
          ? ((ze = Math.max(ze, 0)), (yn = Math.min(yn, Yt.count)))
          : ne != null &&
            ((ze = Math.max(ze, 0)), (yn = Math.min(yn, ne.count)))
      const _n = yn - ze
      if (_n < 0 || _n === 1 / 0) return
      de.setup(q, nt, Xt, et, Yt)
      let ui,
        Ue = se
      if (
        (Yt !== null && ((ui = J.get(Yt)), (Ue = Gt), Ue.setIndex(ui)),
        q.isMesh)
      )
        nt.wireframe === !0
          ? (rt.setLineWidth(nt.wireframeLinewidth * dt()), Ue.setMode(B.LINES))
          : Ue.setMode(B.TRIANGLES)
      else if (q.isLine) {
        let Jt = nt.linewidth
        Jt === void 0 && (Jt = 1),
          rt.setLineWidth(Jt * dt()),
          q.isLineSegments
            ? Ue.setMode(B.LINES)
            : q.isLineLoop
            ? Ue.setMode(B.LINE_LOOP)
            : Ue.setMode(B.LINE_STRIP)
      } else
        q.isPoints
          ? Ue.setMode(B.POINTS)
          : q.isSprite && Ue.setMode(B.TRIANGLES)
      if (q.isBatchedMesh)
        if (q._multiDrawInstances !== null)
          Ue.renderMultiDrawInstances(
            q._multiDrawStarts,
            q._multiDrawCounts,
            q._multiDrawCount,
            q._multiDrawInstances,
          )
        else if (it.get('WEBGL_multi_draw'))
          Ue.renderMultiDraw(
            q._multiDrawStarts,
            q._multiDrawCounts,
            q._multiDrawCount,
          )
        else {
          const Jt = q._multiDrawStarts,
            lr = q._multiDrawCounts,
            Ve = q._multiDrawCount,
            oa = Yt ? J.get(Yt).bytesPerElement : 1,
            cc = Ct.get(nt).currentProgram.getUniforms()
          for (let ci = 0; ci < Ve; ci++)
            cc.setValue(B, '_gl_DrawID', ci), Ue.render(Jt[ci] / oa, lr[ci])
        }
      else if (q.isInstancedMesh) Ue.renderInstances(ze, _n, q.count)
      else if (et.isInstancedBufferGeometry) {
        const Jt =
            et._maxInstanceCount !== void 0 ? et._maxInstanceCount : 1 / 0,
          lr = Math.min(et.instanceCount, Jt)
        Ue.renderInstances(ze, _n, lr)
      } else Ue.render(ze, _n)
    }
    function Gn(z, $, et) {
      z.transparent === !0 && z.side === dr && z.forceSinglePass === !1
        ? ((z.side = Qr),
          (z.needsUpdate = !0),
          kv(z, $, et),
          (z.side = $o),
          (z.needsUpdate = !0),
          kv(z, $, et),
          (z.side = dr))
        : kv(z, $, et)
    }
    ;(this.compile = function (z, $, et = null) {
      et === null && (et = z),
        (v = Bt.get(et)),
        v.init($),
        y.push(v),
        et.traverseVisible(function (q) {
          q.isLight &&
            q.layers.test($.layers) &&
            (v.pushLight(q), q.castShadow && v.pushShadow(q))
        }),
        z !== et &&
          z.traverseVisible(function (q) {
            q.isLight &&
              q.layers.test($.layers) &&
              (v.pushLight(q), q.castShadow && v.pushShadow(q))
          }),
        v.setupLights()
      const nt = new Set()
      return (
        z.traverse(function (q) {
          const Dt = q.material
          if (Dt)
            if (Array.isArray(Dt))
              for (let Ft = 0; Ft < Dt.length; Ft++) {
                const Xt = Dt[Ft]
                Gn(Xt, et, q), nt.add(Xt)
              }
            else Gn(Dt, et, q), nt.add(Dt)
        }),
        y.pop(),
        (v = null),
        nt
      )
    }),
      (this.compileAsync = function (z, $, et = null) {
        const nt = this.compile(z, $, et)
        return new Promise(q => {
          function Dt() {
            if (
              (nt.forEach(function (Ft) {
                Ct.get(Ft).currentProgram.isReady() && nt.delete(Ft)
              }),
              nt.size === 0)
            ) {
              q(z)
              return
            }
            setTimeout(Dt, 10)
          }
          it.get('KHR_parallel_shader_compile') !== null
            ? Dt()
            : setTimeout(Dt, 10)
        })
      })
    let Ie = null
    function Hn(z) {
      Ie && Ie(z)
    }
    function On() {
      sr.stop()
    }
    function ss() {
      sr.start()
    }
    const sr = new iB()
    sr.setAnimationLoop(Hn),
      typeof self < 'u' && sr.setContext(self),
      (this.setAnimationLoop = function (z) {
        ;(Ie = z), j.setAnimationLoop(z), z === null ? sr.stop() : sr.start()
      }),
      j.addEventListener('sessionstart', On),
      j.addEventListener('sessionend', ss),
      (this.render = function (z, $) {
        if ($ !== void 0 && $.isCamera !== !0) {
          console.error(
            'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.',
          )
          return
        }
        if (x === !0) return
        if (
          (z.matrixWorldAutoUpdate === !0 && z.updateMatrixWorld(),
          $.parent === null &&
            $.matrixWorldAutoUpdate === !0 &&
            $.updateMatrixWorld(),
          j.enabled === !0 &&
            j.isPresenting === !0 &&
            (j.cameraAutoUpdate === !0 && j.updateCamera($),
            ($ = j.getCamera())),
          z.isScene === !0 && z.onBeforeRender(_, z, $, b),
          (v = Bt.get(z, y.length)),
          v.init($),
          y.push(v),
          ft.multiplyMatrices($.projectionMatrix, $.matrixWorldInverse),
          ut.setFromProjectionMatrix(ft),
          (Z = this.localClippingEnabled),
          (W = fe.init(this.clippingPlanes, Z)),
          (g = It.get(z, m.length)),
          g.init(),
          m.push(g),
          j.enabled === !0 && j.isPresenting === !0)
        ) {
          const Dt = _.xr.getDepthSensingMesh()
          Dt !== null && So(Dt, $, -1 / 0, _.sortObjects)
        }
        So(z, $, 0, _.sortObjects),
          g.finish(),
          _.sortObjects === !0 && g.sort(k, V),
          (gt =
            j.enabled === !1 ||
            j.isPresenting === !1 ||
            j.hasDepthSensing() === !1),
          gt && Ot.addToRenderList(g, z),
          this.info.render.frame++,
          W === !0 && fe.beginShadows()
        const et = v.state.shadowsArray
        Mt.render(et, z, $),
          W === !0 && fe.endShadows(),
          this.info.autoReset === !0 && this.info.reset()
        const nt = g.opaque,
          q = g.transmissive
        if ((v.setupLights(), $.isArrayCamera)) {
          const Dt = $.cameras
          if (q.length > 0)
            for (let Ft = 0, Xt = Dt.length; Ft < Xt; Ft++) {
              const Yt = Dt[Ft]
              If(nt, q, z, Yt)
            }
          gt && Ot.render(z)
          for (let Ft = 0, Xt = Dt.length; Ft < Xt; Ft++) {
            const Yt = Dt[Ft]
            _l(g, z, Yt, Yt.viewport)
          }
        } else q.length > 0 && If(nt, q, z, $), gt && Ot.render(z), _l(g, z, $)
        b !== null &&
          (Lt.updateMultisampleRenderTarget(b), Lt.updateRenderTargetMipmap(b)),
          z.isScene === !0 && z.onAfterRender(_, z, $),
          de.resetDefaultState(),
          (T = -1),
          (w = null),
          y.pop(),
          y.length > 0
            ? ((v = y[y.length - 1]),
              W === !0 && fe.setGlobalState(_.clippingPlanes, v.state.camera))
            : (v = null),
          m.pop(),
          m.length > 0 ? (g = m[m.length - 1]) : (g = null)
      })
    function So(z, $, et, nt) {
      if (z.visible === !1) return
      if (z.layers.test($.layers)) {
        if (z.isGroup) et = z.renderOrder
        else if (z.isLOD) z.autoUpdate === !0 && z.update($)
        else if (z.isLight) v.pushLight(z), z.castShadow && v.pushShadow(z)
        else if (z.isSprite) {
          if (!z.frustumCulled || ut.intersectsSprite(z)) {
            nt && ct.setFromMatrixPosition(z.matrixWorld).applyMatrix4(ft)
            const Ft = yt.update(z),
              Xt = z.material
            Xt.visible && g.push(z, Ft, Xt, et, ct.z, null)
          }
        } else if (
          (z.isMesh || z.isLine || z.isPoints) &&
          (!z.frustumCulled || ut.intersectsObject(z))
        ) {
          const Ft = yt.update(z),
            Xt = z.material
          if (
            (nt &&
              (z.boundingSphere !== void 0
                ? (z.boundingSphere === null && z.computeBoundingSphere(),
                  ct.copy(z.boundingSphere.center))
                : (Ft.boundingSphere === null && Ft.computeBoundingSphere(),
                  ct.copy(Ft.boundingSphere.center)),
              ct.applyMatrix4(z.matrixWorld).applyMatrix4(ft)),
            Array.isArray(Xt))
          ) {
            const Yt = Ft.groups
            for (let le = 0, he = Yt.length; le < he; le++) {
              const ne = Yt[le],
                ze = Xt[ne.materialIndex]
              ze && ze.visible && g.push(z, Ft, ze, et, ct.z, ne)
            }
          } else Xt.visible && g.push(z, Ft, Xt, et, ct.z, null)
        }
      }
      const Dt = z.children
      for (let Ft = 0, Xt = Dt.length; Ft < Xt; Ft++) So(Dt[Ft], $, et, nt)
    }
    function _l(z, $, et, nt) {
      const q = z.opaque,
        Dt = z.transmissive,
        Ft = z.transparent
      v.setupLightsView(et),
        W === !0 && fe.setGlobalState(_.clippingPlanes, et),
        nt && rt.viewport(M.copy(nt)),
        q.length > 0 && Nv(q, $, et),
        Dt.length > 0 && Nv(Dt, $, et),
        Ft.length > 0 && Nv(Ft, $, et),
        rt.buffers.depth.setTest(!0),
        rt.buffers.depth.setMask(!0),
        rt.buffers.color.setMask(!0),
        rt.setPolygonOffset(!1)
    }
    function If(z, $, et, nt) {
      if ((et.isScene === !0 ? et.overrideMaterial : null) !== null) return
      v.state.transmissionRenderTarget[nt.id] === void 0 &&
        (v.state.transmissionRenderTarget[nt.id] = new Vu(1, 1, {
          generateMipmaps: !0,
          type:
            it.has('EXT_color_buffer_half_float') ||
            it.has('EXT_color_buffer_float')
              ? hv
              : qo,
          minFilter: Fo,
          samples: 4,
          stencilBuffer: a,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Be.workingColorSpace,
        }))
      const Dt = v.state.transmissionRenderTarget[nt.id],
        Ft = nt.viewport || M
      Dt.setSize(Ft.z, Ft.w)
      const Xt = _.getRenderTarget()
      _.setRenderTarget(Dt),
        _.getClearColor(D),
        (P = _.getClearAlpha()),
        P < 1 && _.setClearColor(16777215, 0.5),
        gt ? Ot.render(et) : _.clear()
      const Yt = _.toneMapping
      _.toneMapping = Ys
      const le = nt.viewport
      if (
        (nt.viewport !== void 0 && (nt.viewport = void 0),
        v.setupLightsView(nt),
        W === !0 && fe.setGlobalState(_.clippingPlanes, nt),
        Nv(z, et, nt),
        Lt.updateMultisampleRenderTarget(Dt),
        Lt.updateRenderTargetMipmap(Dt),
        it.has('WEBGL_multisampled_render_to_texture') === !1)
      ) {
        let he = !1
        for (let ne = 0, ze = $.length; ne < ze; ne++) {
          const yn = $[ne],
            _n = yn.object,
            ui = yn.geometry,
            Ue = yn.material,
            Jt = yn.group
          if (Ue.side === dr && _n.layers.test(nt.layers)) {
            const lr = Ue.side
            ;(Ue.side = Qr),
              (Ue.needsUpdate = !0),
              zE(_n, et, nt, ui, Ue, Jt),
              (Ue.side = lr),
              (Ue.needsUpdate = !0),
              (he = !0)
          }
        }
        he === !0 &&
          (Lt.updateMultisampleRenderTarget(Dt),
          Lt.updateRenderTargetMipmap(Dt))
      }
      _.setRenderTarget(Xt),
        _.setClearColor(D, P),
        le !== void 0 && (nt.viewport = le),
        (_.toneMapping = Yt)
    }
    function Nv(z, $, et) {
      const nt = $.isScene === !0 ? $.overrideMaterial : null
      for (let q = 0, Dt = z.length; q < Dt; q++) {
        const Ft = z[q],
          Xt = Ft.object,
          Yt = Ft.geometry,
          le = nt === null ? Ft.material : nt,
          he = Ft.group
        Xt.layers.test(et.layers) && zE(Xt, $, et, Yt, le, he)
      }
    }
    function zE(z, $, et, nt, q, Dt) {
      z.onBeforeRender(_, $, et, nt, q, Dt),
        z.modelViewMatrix.multiplyMatrices(
          et.matrixWorldInverse,
          z.matrixWorld,
        ),
        z.normalMatrix.getNormalMatrix(z.modelViewMatrix),
        q.transparent === !0 && q.side === dr && q.forceSinglePass === !1
          ? ((q.side = Qr),
            (q.needsUpdate = !0),
            _.renderBufferDirect(et, $, nt, q, z, Dt),
            (q.side = $o),
            (q.needsUpdate = !0),
            _.renderBufferDirect(et, $, nt, q, z, Dt),
            (q.side = dr))
          : _.renderBufferDirect(et, $, nt, q, z, Dt),
        z.onAfterRender(_, $, et, nt, q, Dt)
    }
    function kv(z, $, et) {
      $.isScene !== !0 && ($ = At)
      const nt = Ct.get(z),
        q = v.state.lights,
        Dt = v.state.shadowsArray,
        Ft = q.state.version,
        Xt = mt.getParameters(z, q.state, Dt, $, et),
        Yt = mt.getProgramCacheKey(Xt)
      let le = nt.programs
      ;(nt.environment = z.isMeshStandardMaterial ? $.environment : null),
        (nt.fog = $.fog),
        (nt.envMap = (z.isMeshStandardMaterial ? N : G).get(
          z.envMap || nt.environment,
        )),
        (nt.envMapRotation =
          nt.environment !== null && z.envMap === null
            ? $.environmentRotation
            : z.envMapRotation),
        le === void 0 &&
          (z.addEventListener('dispose', jt),
          (le = new Map()),
          (nt.programs = le))
      let he = le.get(Yt)
      if (he !== void 0) {
        if (nt.currentProgram === he && nt.lightsStateVersion === Ft)
          return VE(z, Xt), he
      } else
        (Xt.uniforms = mt.getUniforms(z)),
          z.onBeforeCompile(Xt, _),
          (he = mt.acquireProgram(Xt, Yt)),
          le.set(Yt, he),
          (nt.uniforms = Xt.uniforms)
      const ne = nt.uniforms
      return (
        ((!z.isShaderMaterial && !z.isRawShaderMaterial) ||
          z.clipping === !0) &&
          (ne.clippingPlanes = fe.uniform),
        VE(z, Xt),
        (nt.needsLights = h8(z)),
        (nt.lightsStateVersion = Ft),
        nt.needsLights &&
          ((ne.ambientLightColor.value = q.state.ambient),
          (ne.lightProbe.value = q.state.probe),
          (ne.directionalLights.value = q.state.directional),
          (ne.directionalLightShadows.value = q.state.directionalShadow),
          (ne.spotLights.value = q.state.spot),
          (ne.spotLightShadows.value = q.state.spotShadow),
          (ne.rectAreaLights.value = q.state.rectArea),
          (ne.ltc_1.value = q.state.rectAreaLTC1),
          (ne.ltc_2.value = q.state.rectAreaLTC2),
          (ne.pointLights.value = q.state.point),
          (ne.pointLightShadows.value = q.state.pointShadow),
          (ne.hemisphereLights.value = q.state.hemi),
          (ne.directionalShadowMap.value = q.state.directionalShadowMap),
          (ne.directionalShadowMatrix.value = q.state.directionalShadowMatrix),
          (ne.spotShadowMap.value = q.state.spotShadowMap),
          (ne.spotLightMatrix.value = q.state.spotLightMatrix),
          (ne.spotLightMap.value = q.state.spotLightMap),
          (ne.pointShadowMap.value = q.state.pointShadowMap),
          (ne.pointShadowMatrix.value = q.state.pointShadowMatrix)),
        (nt.currentProgram = he),
        (nt.uniformsList = null),
        he
      )
    }
    function UE(z) {
      if (z.uniformsList === null) {
        const $ = z.currentProgram.getUniforms()
        z.uniformsList = zm.seqWithValue($.seq, z.uniforms)
      }
      return z.uniformsList
    }
    function VE(z, $) {
      const et = Ct.get(z)
      ;(et.outputColorSpace = $.outputColorSpace),
        (et.batching = $.batching),
        (et.batchingColor = $.batchingColor),
        (et.instancing = $.instancing),
        (et.instancingColor = $.instancingColor),
        (et.instancingMorph = $.instancingMorph),
        (et.skinning = $.skinning),
        (et.morphTargets = $.morphTargets),
        (et.morphNormals = $.morphNormals),
        (et.morphColors = $.morphColors),
        (et.morphTargetsCount = $.morphTargetsCount),
        (et.numClippingPlanes = $.numClippingPlanes),
        (et.numIntersection = $.numClipIntersection),
        (et.vertexAlphas = $.vertexAlphas),
        (et.vertexTangents = $.vertexTangents),
        (et.toneMapping = $.toneMapping)
    }
    function u8(z, $, et, nt, q) {
      $.isScene !== !0 && ($ = At), Lt.resetTextureUnits()
      const Dt = $.fog,
        Ft = nt.isMeshStandardMaterial ? $.environment : null,
        Xt =
          b === null
            ? _.outputColorSpace
            : b.isXRRenderTarget === !0
            ? b.texture.colorSpace
            : ar,
        Yt = (nt.isMeshStandardMaterial ? N : G).get(nt.envMap || Ft),
        le =
          nt.vertexColors === !0 &&
          !!et.attributes.color &&
          et.attributes.color.itemSize === 4,
        he = !!et.attributes.tangent && (!!nt.normalMap || nt.anisotropy > 0),
        ne = !!et.morphAttributes.position,
        ze = !!et.morphAttributes.normal,
        yn = !!et.morphAttributes.color
      let _n = Ys
      nt.toneMapped &&
        (b === null || b.isXRRenderTarget === !0) &&
        (_n = _.toneMapping)
      const ui =
          et.morphAttributes.position ||
          et.morphAttributes.normal ||
          et.morphAttributes.color,
        Ue = ui !== void 0 ? ui.length : 0,
        Jt = Ct.get(nt),
        lr = v.state.lights
      if (W === !0 && (Z === !0 || z !== w)) {
        const Di = z === w && nt.id === T
        fe.setState(nt, z, Di)
      }
      let Ve = !1
      nt.version === Jt.__version
        ? ((Jt.needsLights && Jt.lightsStateVersion !== lr.state.version) ||
            Jt.outputColorSpace !== Xt ||
            (q.isBatchedMesh && Jt.batching === !1) ||
            (!q.isBatchedMesh && Jt.batching === !0) ||
            (q.isBatchedMesh &&
              Jt.batchingColor === !0 &&
              q.colorTexture === null) ||
            (q.isBatchedMesh &&
              Jt.batchingColor === !1 &&
              q.colorTexture !== null) ||
            (q.isInstancedMesh && Jt.instancing === !1) ||
            (!q.isInstancedMesh && Jt.instancing === !0) ||
            (q.isSkinnedMesh && Jt.skinning === !1) ||
            (!q.isSkinnedMesh && Jt.skinning === !0) ||
            (q.isInstancedMesh &&
              Jt.instancingColor === !0 &&
              q.instanceColor === null) ||
            (q.isInstancedMesh &&
              Jt.instancingColor === !1 &&
              q.instanceColor !== null) ||
            (q.isInstancedMesh &&
              Jt.instancingMorph === !0 &&
              q.morphTexture === null) ||
            (q.isInstancedMesh &&
              Jt.instancingMorph === !1 &&
              q.morphTexture !== null) ||
            Jt.envMap !== Yt ||
            (nt.fog === !0 && Jt.fog !== Dt) ||
            (Jt.numClippingPlanes !== void 0 &&
              (Jt.numClippingPlanes !== fe.numPlanes ||
                Jt.numIntersection !== fe.numIntersection)) ||
            Jt.vertexAlphas !== le ||
            Jt.vertexTangents !== he ||
            Jt.morphTargets !== ne ||
            Jt.morphNormals !== ze ||
            Jt.morphColors !== yn ||
            Jt.toneMapping !== _n ||
            Jt.morphTargetsCount !== Ue) &&
          (Ve = !0)
        : ((Ve = !0), (Jt.__version = nt.version))
      let oa = Jt.currentProgram
      Ve === !0 && (oa = kv(nt, $, q))
      let cc = !1,
        ci = !1,
        I_ = !1
      const Nn = oa.getUniforms(),
        ls = Jt.uniforms
      if (
        (rt.useProgram(oa.program) && ((cc = !0), (ci = !0), (I_ = !0)),
        nt.id !== T && ((T = nt.id), (ci = !0)),
        cc || w !== z)
      ) {
        Nn.setValue(B, 'projectionMatrix', z.projectionMatrix),
          Nn.setValue(B, 'viewMatrix', z.matrixWorldInverse)
        const Di = Nn.map.cameraPosition
        Di !== void 0 &&
          Di.setValue(B, lt.setFromMatrixPosition(z.matrixWorld)),
          xt.logarithmicDepthBuffer &&
            Nn.setValue(
              B,
              'logDepthBufFC',
              2 / (Math.log(z.far + 1) / Math.LN2),
            ),
          (nt.isMeshPhongMaterial ||
            nt.isMeshToonMaterial ||
            nt.isMeshLambertMaterial ||
            nt.isMeshBasicMaterial ||
            nt.isMeshStandardMaterial ||
            nt.isShaderMaterial) &&
            Nn.setValue(B, 'isOrthographic', z.isOrthographicCamera === !0),
          w !== z && ((w = z), (ci = !0), (I_ = !0))
      }
      if (q.isSkinnedMesh) {
        Nn.setOptional(B, q, 'bindMatrix'),
          Nn.setOptional(B, q, 'bindMatrixInverse')
        const Di = q.skeleton
        Di &&
          (Di.boneTexture === null && Di.computeBoneTexture(),
          Nn.setValue(B, 'boneTexture', Di.boneTexture, Lt))
      }
      q.isBatchedMesh &&
        (Nn.setOptional(B, q, 'batchingTexture'),
        Nn.setValue(B, 'batchingTexture', q._matricesTexture, Lt),
        Nn.setOptional(B, q, 'batchingIdTexture'),
        Nn.setValue(B, 'batchingIdTexture', q._indirectTexture, Lt),
        Nn.setOptional(B, q, 'batchingColorTexture'),
        q._colorsTexture !== null &&
          Nn.setValue(B, 'batchingColorTexture', q._colorsTexture, Lt))
      const O_ = et.morphAttributes
      if (
        ((O_.position !== void 0 ||
          O_.normal !== void 0 ||
          O_.color !== void 0) &&
          Te.update(q, et, oa),
        (ci || Jt.receiveShadow !== q.receiveShadow) &&
          ((Jt.receiveShadow = q.receiveShadow),
          Nn.setValue(B, 'receiveShadow', q.receiveShadow)),
        nt.isMeshGouraudMaterial &&
          nt.envMap !== null &&
          ((ls.envMap.value = Yt),
          (ls.flipEnvMap.value =
            Yt.isCubeTexture && Yt.isRenderTargetTexture === !1 ? -1 : 1)),
        nt.isMeshStandardMaterial &&
          nt.envMap === null &&
          $.environment !== null &&
          (ls.envMapIntensity.value = $.environmentIntensity),
        ci &&
          (Nn.setValue(B, 'toneMappingExposure', _.toneMappingExposure),
          Jt.needsLights && c8(ls, I_),
          Dt && nt.fog === !0 && Kt.refreshFogUniforms(ls, Dt),
          Kt.refreshMaterialUniforms(
            ls,
            nt,
            F,
            I,
            v.state.transmissionRenderTarget[z.id],
          ),
          zm.upload(B, UE(Jt), ls, Lt)),
        nt.isShaderMaterial &&
          nt.uniformsNeedUpdate === !0 &&
          (zm.upload(B, UE(Jt), ls, Lt), (nt.uniformsNeedUpdate = !1)),
        nt.isSpriteMaterial && Nn.setValue(B, 'center', q.center),
        Nn.setValue(B, 'modelViewMatrix', q.modelViewMatrix),
        Nn.setValue(B, 'normalMatrix', q.normalMatrix),
        Nn.setValue(B, 'modelMatrix', q.matrixWorld),
        nt.isShaderMaterial || nt.isRawShaderMaterial)
      ) {
        const Di = nt.uniformsGroups
        for (let N_ = 0, f8 = Di.length; N_ < f8; N_++) {
          const GE = Di[N_]
          ln.update(GE, oa), ln.bind(GE, oa)
        }
      }
      return oa
    }
    function c8(z, $) {
      ;(z.ambientLightColor.needsUpdate = $),
        (z.lightProbe.needsUpdate = $),
        (z.directionalLights.needsUpdate = $),
        (z.directionalLightShadows.needsUpdate = $),
        (z.pointLights.needsUpdate = $),
        (z.pointLightShadows.needsUpdate = $),
        (z.spotLights.needsUpdate = $),
        (z.spotLightShadows.needsUpdate = $),
        (z.rectAreaLights.needsUpdate = $),
        (z.hemisphereLights.needsUpdate = $)
    }
    function h8(z) {
      return (
        z.isMeshLambertMaterial ||
        z.isMeshToonMaterial ||
        z.isMeshPhongMaterial ||
        z.isMeshStandardMaterial ||
        z.isShadowMaterial ||
        (z.isShaderMaterial && z.lights === !0)
      )
    }
    ;(this.getActiveCubeFace = function () {
      return A
    }),
      (this.getActiveMipmapLevel = function () {
        return S
      }),
      (this.getRenderTarget = function () {
        return b
      }),
      (this.setRenderTargetTextures = function (z, $, et) {
        ;(Ct.get(z.texture).__webglTexture = $),
          (Ct.get(z.depthTexture).__webglTexture = et)
        const nt = Ct.get(z)
        ;(nt.__hasExternalTextures = !0),
          (nt.__autoAllocateDepthBuffer = et === void 0),
          nt.__autoAllocateDepthBuffer ||
            (it.has('WEBGL_multisampled_render_to_texture') === !0 &&
              (console.warn(
                'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided',
              ),
              (nt.__useRenderToTexture = !1)))
      }),
      (this.setRenderTargetFramebuffer = function (z, $) {
        const et = Ct.get(z)
        ;(et.__webglFramebuffer = $),
          (et.__useDefaultFramebuffer = $ === void 0)
      }),
      (this.setRenderTarget = function (z, $ = 0, et = 0) {
        ;(b = z), (A = $), (S = et)
        let nt = !0,
          q = null,
          Dt = !1,
          Ft = !1
        if (z) {
          const Yt = Ct.get(z)
          Yt.__useDefaultFramebuffer !== void 0
            ? (rt.bindFramebuffer(B.FRAMEBUFFER, null), (nt = !1))
            : Yt.__webglFramebuffer === void 0
            ? Lt.setupRenderTarget(z)
            : Yt.__hasExternalTextures &&
              Lt.rebindTextures(
                z,
                Ct.get(z.texture).__webglTexture,
                Ct.get(z.depthTexture).__webglTexture,
              )
          const le = z.texture
          ;(le.isData3DTexture ||
            le.isDataArrayTexture ||
            le.isCompressedArrayTexture) &&
            (Ft = !0)
          const he = Ct.get(z).__webglFramebuffer
          z.isWebGLCubeRenderTarget
            ? (Array.isArray(he[$]) ? (q = he[$][et]) : (q = he[$]), (Dt = !0))
            : z.samples > 0 && Lt.useMultisampledRTT(z) === !1
            ? (q = Ct.get(z).__webglMultisampledFramebuffer)
            : Array.isArray(he)
            ? (q = he[et])
            : (q = he),
            M.copy(z.viewport),
            C.copy(z.scissor),
            (E = z.scissorTest)
        } else
          M.copy(H).multiplyScalar(F).floor(),
            C.copy(Y).multiplyScalar(F).floor(),
            (E = K)
        if (
          (rt.bindFramebuffer(B.FRAMEBUFFER, q) && nt && rt.drawBuffers(z, q),
          rt.viewport(M),
          rt.scissor(C),
          rt.setScissorTest(E),
          Dt)
        ) {
          const Yt = Ct.get(z.texture)
          B.framebufferTexture2D(
            B.FRAMEBUFFER,
            B.COLOR_ATTACHMENT0,
            B.TEXTURE_CUBE_MAP_POSITIVE_X + $,
            Yt.__webglTexture,
            et,
          )
        } else if (Ft) {
          const Yt = Ct.get(z.texture),
            le = $ || 0
          B.framebufferTextureLayer(
            B.FRAMEBUFFER,
            B.COLOR_ATTACHMENT0,
            Yt.__webglTexture,
            et || 0,
            le,
          )
        }
        T = -1
      }),
      (this.readRenderTargetPixels = function (z, $, et, nt, q, Dt, Ft) {
        if (!(z && z.isWebGLRenderTarget)) {
          console.error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.',
          )
          return
        }
        let Xt = Ct.get(z).__webglFramebuffer
        if ((z.isWebGLCubeRenderTarget && Ft !== void 0 && (Xt = Xt[Ft]), Xt)) {
          rt.bindFramebuffer(B.FRAMEBUFFER, Xt)
          try {
            const Yt = z.texture,
              le = Yt.format,
              he = Yt.type
            if (!xt.textureFormatReadable(le)) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.',
              )
              return
            }
            if (!xt.textureTypeReadable(he)) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.',
              )
              return
            }
            $ >= 0 &&
              $ <= z.width - nt &&
              et >= 0 &&
              et <= z.height - q &&
              B.readPixels($, et, nt, q, ue.convert(le), ue.convert(he), Dt)
          } finally {
            const Yt = b !== null ? Ct.get(b).__webglFramebuffer : null
            rt.bindFramebuffer(B.FRAMEBUFFER, Yt)
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        z,
        $,
        et,
        nt,
        q,
        Dt,
        Ft,
      ) {
        if (!(z && z.isWebGLRenderTarget))
          throw new Error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.',
          )
        let Xt = Ct.get(z).__webglFramebuffer
        if ((z.isWebGLCubeRenderTarget && Ft !== void 0 && (Xt = Xt[Ft]), Xt)) {
          rt.bindFramebuffer(B.FRAMEBUFFER, Xt)
          try {
            const Yt = z.texture,
              le = Yt.format,
              he = Yt.type
            if (!xt.textureFormatReadable(le))
              throw new Error(
                'THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.',
              )
            if (!xt.textureTypeReadable(he))
              throw new Error(
                'THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.',
              )
            if ($ >= 0 && $ <= z.width - nt && et >= 0 && et <= z.height - q) {
              const ne = B.createBuffer()
              B.bindBuffer(B.PIXEL_PACK_BUFFER, ne),
                B.bufferData(B.PIXEL_PACK_BUFFER, Dt.byteLength, B.STREAM_READ),
                B.readPixels($, et, nt, q, ue.convert(le), ue.convert(he), 0),
                B.flush()
              const ze = B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE, 0)
              await I6(B, ze, 4)
              try {
                B.bindBuffer(B.PIXEL_PACK_BUFFER, ne),
                  B.getBufferSubData(B.PIXEL_PACK_BUFFER, 0, Dt)
              } finally {
                B.deleteBuffer(ne), B.deleteSync(ze)
              }
              return Dt
            }
          } finally {
            const Yt = b !== null ? Ct.get(b).__webglFramebuffer : null
            rt.bindFramebuffer(B.FRAMEBUFFER, Yt)
          }
        }
      }),
      (this.copyFramebufferToTexture = function (z, $ = null, et = 0) {
        z.isTexture !== !0 &&
          (console.warn(
            'WebGLRenderer: copyFramebufferToTexture function signature has changed.',
          ),
          ($ = arguments[0] || null),
          (z = arguments[1]))
        const nt = Math.pow(2, -et),
          q = Math.floor(z.image.width * nt),
          Dt = Math.floor(z.image.height * nt),
          Ft = $ !== null ? $.x : 0,
          Xt = $ !== null ? $.y : 0
        Lt.setTexture2D(z, 0),
          B.copyTexSubImage2D(B.TEXTURE_2D, et, 0, 0, Ft, Xt, q, Dt),
          rt.unbindTexture()
      }),
      (this.copyTextureToTexture = function (
        z,
        $,
        et = null,
        nt = null,
        q = 0,
      ) {
        z.isTexture !== !0 &&
          (console.warn(
            'WebGLRenderer: copyTextureToTexture function signature has changed.',
          ),
          (nt = arguments[0] || null),
          (z = arguments[1]),
          ($ = arguments[2]),
          (q = arguments[3] || 0),
          (et = null))
        let Dt, Ft, Xt, Yt, le, he
        et !== null
          ? ((Dt = et.max.x - et.min.x),
            (Ft = et.max.y - et.min.y),
            (Xt = et.min.x),
            (Yt = et.min.y))
          : ((Dt = z.image.width), (Ft = z.image.height), (Xt = 0), (Yt = 0)),
          nt !== null ? ((le = nt.x), (he = nt.y)) : ((le = 0), (he = 0))
        const ne = ue.convert($.format),
          ze = ue.convert($.type)
        Lt.setTexture2D($, 0),
          B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL, $.flipY),
          B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $.premultiplyAlpha),
          B.pixelStorei(B.UNPACK_ALIGNMENT, $.unpackAlignment)
        const yn = B.getParameter(B.UNPACK_ROW_LENGTH),
          _n = B.getParameter(B.UNPACK_IMAGE_HEIGHT),
          ui = B.getParameter(B.UNPACK_SKIP_PIXELS),
          Ue = B.getParameter(B.UNPACK_SKIP_ROWS),
          Jt = B.getParameter(B.UNPACK_SKIP_IMAGES),
          lr = z.isCompressedTexture ? z.mipmaps[q] : z.image
        B.pixelStorei(B.UNPACK_ROW_LENGTH, lr.width),
          B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, lr.height),
          B.pixelStorei(B.UNPACK_SKIP_PIXELS, Xt),
          B.pixelStorei(B.UNPACK_SKIP_ROWS, Yt),
          z.isDataTexture
            ? B.texSubImage2D(B.TEXTURE_2D, q, le, he, Dt, Ft, ne, ze, lr.data)
            : z.isCompressedTexture
            ? B.compressedTexSubImage2D(
                B.TEXTURE_2D,
                q,
                le,
                he,
                lr.width,
                lr.height,
                ne,
                lr.data,
              )
            : B.texSubImage2D(B.TEXTURE_2D, q, le, he, Dt, Ft, ne, ze, lr),
          B.pixelStorei(B.UNPACK_ROW_LENGTH, yn),
          B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, _n),
          B.pixelStorei(B.UNPACK_SKIP_PIXELS, ui),
          B.pixelStorei(B.UNPACK_SKIP_ROWS, Ue),
          B.pixelStorei(B.UNPACK_SKIP_IMAGES, Jt),
          q === 0 && $.generateMipmaps && B.generateMipmap(B.TEXTURE_2D),
          rt.unbindTexture()
      }),
      (this.copyTextureToTexture3D = function (
        z,
        $,
        et = null,
        nt = null,
        q = 0,
      ) {
        z.isTexture !== !0 &&
          (console.warn(
            'WebGLRenderer: copyTextureToTexture3D function signature has changed.',
          ),
          (et = arguments[0] || null),
          (nt = arguments[1] || null),
          (z = arguments[2]),
          ($ = arguments[3]),
          (q = arguments[4] || 0))
        let Dt, Ft, Xt, Yt, le, he, ne, ze, yn
        const _n = z.isCompressedTexture ? z.mipmaps[q] : z.image
        et !== null
          ? ((Dt = et.max.x - et.min.x),
            (Ft = et.max.y - et.min.y),
            (Xt = et.max.z - et.min.z),
            (Yt = et.min.x),
            (le = et.min.y),
            (he = et.min.z))
          : ((Dt = _n.width),
            (Ft = _n.height),
            (Xt = _n.depth),
            (Yt = 0),
            (le = 0),
            (he = 0)),
          nt !== null
            ? ((ne = nt.x), (ze = nt.y), (yn = nt.z))
            : ((ne = 0), (ze = 0), (yn = 0))
        const ui = ue.convert($.format),
          Ue = ue.convert($.type)
        let Jt
        if ($.isData3DTexture) Lt.setTexture3D($, 0), (Jt = B.TEXTURE_3D)
        else if ($.isDataArrayTexture || $.isCompressedArrayTexture)
          Lt.setTexture2DArray($, 0), (Jt = B.TEXTURE_2D_ARRAY)
        else {
          console.warn(
            'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.',
          )
          return
        }
        B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL, $.flipY),
          B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $.premultiplyAlpha),
          B.pixelStorei(B.UNPACK_ALIGNMENT, $.unpackAlignment)
        const lr = B.getParameter(B.UNPACK_ROW_LENGTH),
          Ve = B.getParameter(B.UNPACK_IMAGE_HEIGHT),
          oa = B.getParameter(B.UNPACK_SKIP_PIXELS),
          cc = B.getParameter(B.UNPACK_SKIP_ROWS),
          ci = B.getParameter(B.UNPACK_SKIP_IMAGES)
        B.pixelStorei(B.UNPACK_ROW_LENGTH, _n.width),
          B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, _n.height),
          B.pixelStorei(B.UNPACK_SKIP_PIXELS, Yt),
          B.pixelStorei(B.UNPACK_SKIP_ROWS, le),
          B.pixelStorei(B.UNPACK_SKIP_IMAGES, he),
          z.isDataTexture || z.isData3DTexture
            ? B.texSubImage3D(Jt, q, ne, ze, yn, Dt, Ft, Xt, ui, Ue, _n.data)
            : $.isCompressedArrayTexture
            ? B.compressedTexSubImage3D(
                Jt,
                q,
                ne,
                ze,
                yn,
                Dt,
                Ft,
                Xt,
                ui,
                _n.data,
              )
            : B.texSubImage3D(Jt, q, ne, ze, yn, Dt, Ft, Xt, ui, Ue, _n),
          B.pixelStorei(B.UNPACK_ROW_LENGTH, lr),
          B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, Ve),
          B.pixelStorei(B.UNPACK_SKIP_PIXELS, oa),
          B.pixelStorei(B.UNPACK_SKIP_ROWS, cc),
          B.pixelStorei(B.UNPACK_SKIP_IMAGES, ci),
          q === 0 && $.generateMipmaps && B.generateMipmap(Jt),
          rt.unbindTexture()
      }),
      (this.initRenderTarget = function (z) {
        Ct.get(z).__webglFramebuffer === void 0 && Lt.setupRenderTarget(z)
      }),
      (this.initTexture = function (z) {
        z.isCubeTexture
          ? Lt.setTextureCube(z, 0)
          : z.isData3DTexture
          ? Lt.setTexture3D(z, 0)
          : z.isDataArrayTexture || z.isCompressedArrayTexture
          ? Lt.setTexture2DArray(z, 0)
          : Lt.setTexture2D(z, 0),
          rt.unbindTexture()
      }),
      (this.resetState = function () {
        ;(A = 0), (S = 0), (b = null), rt.reset(), de.reset()
      }),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', {
            detail: this,
          }),
        )
  }
  get coordinateSystem() {
    return zo
  }
  get outputColorSpace() {
    return this._outputColorSpace
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t
    const e = this.getContext()
    ;(e.drawingBufferColorSpace = t === PM ? 'display-p3' : 'srgb'),
      (e.unpackColorSpace = Be.workingColorSpace === I0 ? 'display-p3' : 'srgb')
  }
}
class zM {
  constructor(t, e = 1, n = 1e3) {
    ;(this.isFog = !0),
      (this.name = ''),
      (this.color = new qt(t)),
      (this.near = e),
      (this.far = n)
  }
  clone() {
    return new zM(this.color, this.near, this.far)
  }
  toJSON() {
    return {
      type: 'Fog',
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    }
  }
}
class hB extends Fe {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = 'Scene'),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Ma()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Ma()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', {
            detail: this,
          }),
        )
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.background !== null && (this.background = t.background.clone()),
      t.environment !== null && (this.environment = t.environment.clone()),
      t.fog !== null && (this.fog = t.fog.clone()),
      (this.backgroundBlurriness = t.backgroundBlurriness),
      (this.backgroundIntensity = t.backgroundIntensity),
      this.backgroundRotation.copy(t.backgroundRotation),
      (this.environmentIntensity = t.environmentIntensity),
      this.environmentRotation.copy(t.environmentRotation),
      t.overrideMaterial !== null &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    )
  }
  toJSON(t) {
    const e = super.toJSON(t)
    return (
      this.fog !== null && (e.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (e.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (e.object.backgroundIntensity = this.backgroundIntensity),
      (e.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (e.object.environmentIntensity = this.environmentIntensity),
      (e.object.environmentRotation = this.environmentRotation.toArray()),
      e
    )
  }
}
class UM {
  constructor(t, e) {
    ;(this.isInterleavedBuffer = !0),
      (this.array = t),
      (this.stride = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.usage = YA),
      (this._updateRange = {
        offset: 0,
        count: -1,
      }),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = Ki())
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++
  }
  get updateRange() {
    return (
      OM(
        'THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.',
      ),
      this._updateRange
    )
  }
  setUsage(t) {
    return (this.usage = t), this
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({
      start: t,
      count: e,
    })
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0
  }
  copy(t) {
    return (
      (this.array = new t.array.constructor(t.array)),
      (this.count = t.count),
      (this.stride = t.stride),
      (this.usage = t.usage),
      this
    )
  }
  copyAt(t, e, n) {
    ;(t *= this.stride), (n *= e.stride)
    for (let i = 0, a = this.stride; i < a; i++)
      this.array[t + i] = e.array[n + i]
    return this
  }
  set(t, e = 0) {
    return this.array.set(t, e), this
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ki()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer)
    const e = new this.array.constructor(
        t.arrayBuffers[this.array.buffer._uuid],
      ),
      n = new this.constructor(e, this.stride)
    return n.setUsage(this.usage), n
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this
  }
  toJSON(t) {
    return (
      t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ki()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer),
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    )
  }
}
const Lr = new U()
class _a {
  constructor(t, e, n, i = !1) {
    ;(this.isInterleavedBufferAttribute = !0),
      (this.name = ''),
      (this.data = t),
      (this.itemSize = e),
      (this.offset = n),
      (this.normalized = i)
  }
  get count() {
    return this.data.count
  }
  get array() {
    return this.data.array
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Lr.fromBufferAttribute(this, e),
        Lr.applyMatrix4(t),
        this.setXYZ(e, Lr.x, Lr.y, Lr.z)
    return this
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Lr.fromBufferAttribute(this, e),
        Lr.applyNormalMatrix(t),
        this.setXYZ(e, Lr.x, Lr.y, Lr.z)
    return this
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Lr.fromBufferAttribute(this, e),
        Lr.transformDirection(t),
        this.setXYZ(e, Lr.x, Lr.y, Lr.z)
    return this
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e]
    return this.normalized && (n = ma(n, this.array)), n
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = We(n, this.array)),
      (this.data.array[t * this.data.stride + this.offset + e] = n),
      this
    )
  }
  setX(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset] = e),
      this
    )
  }
  setY(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 1] = e),
      this
    )
  }
  setZ(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 2] = e),
      this
    )
  }
  setW(t, e) {
    return (
      this.normalized && (e = We(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 3] = e),
      this
    )
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset]
    return this.normalized && (e = ma(e, this.array)), e
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1]
    return this.normalized && (e = ma(e, this.array)), e
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2]
    return this.normalized && (e = ma(e, this.array)), e
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3]
    return this.normalized && (e = ma(e, this.array)), e
  }
  setXY(t, e, n) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized && ((e = We(e, this.array)), (n = We(n, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      this
    )
  }
  setXYZ(t, e, n, i) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = We(e, this.array)),
        (n = We(n, this.array)),
        (i = We(i, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      this
    )
  }
  setXYZW(t, e, n, i, a) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = We(e, this.array)),
        (n = We(n, this.array)),
        (i = We(i, this.array)),
        (a = We(a, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      (this.data.array[t + 3] = a),
      this
    )
  }
  clone(t) {
    if (t === void 0) {
      console.log(
        'THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.',
      )
      const e = []
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset
        for (let a = 0; a < this.itemSize; a++) e.push(this.data.array[i + a])
      }
      return new ir(
        new this.array.constructor(e),
        this.itemSize,
        this.normalized,
      )
    } else
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new _a(
          t.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized,
        )
      )
  }
  toJSON(t) {
    if (t === void 0) {
      console.log(
        'THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.',
      )
      const e = []
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset
        for (let a = 0; a < this.itemSize; a++) e.push(this.data.array[i + a])
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized,
      }
    } else
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      )
  }
}
class fB extends ji {
  constructor(t) {
    super(),
      (this.isSpriteMaterial = !0),
      (this.type = 'SpriteMaterial'),
      (this.color = new qt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.rotation = t.rotation),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    )
  }
}
let Lc
const Uf = new U(),
  Pc = new U(),
  Rc = new U(),
  Ic = new pt(),
  Vf = new pt(),
  dB = new ae(),
  ig = new U(),
  Gf = new U(),
  ag = new U(),
  $2 = new pt(),
  lx = new pt(),
  q2 = new pt()
class UY extends Fe {
  constructor(t = new fB()) {
    if (
      (super(), (this.isSprite = !0), (this.type = 'Sprite'), Lc === void 0)
    ) {
      Lc = new Mn()
      const e = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new UM(e, 5)
      Lc.setIndex([0, 1, 2, 0, 2, 3]),
        Lc.setAttribute('position', new _a(n, 3, 0, !1)),
        Lc.setAttribute('uv', new _a(n, 2, 3, !1))
    }
    ;(this.geometry = Lc), (this.material = t), (this.center = new pt(0.5, 0.5))
  }
  raycast(t, e) {
    t.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.',
      ),
      Pc.setFromMatrixScale(this.matrixWorld),
      dB.copy(t.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        t.camera.matrixWorldInverse,
        this.matrixWorld,
      ),
      Rc.setFromMatrixPosition(this.modelViewMatrix),
      t.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        Pc.multiplyScalar(-Rc.z)
    const n = this.material.rotation
    let i, a
    n !== 0 && ((a = Math.cos(n)), (i = Math.sin(n)))
    const o = this.center
    og(ig.set(-0.5, -0.5, 0), Rc, o, Pc, i, a),
      og(Gf.set(0.5, -0.5, 0), Rc, o, Pc, i, a),
      og(ag.set(0.5, 0.5, 0), Rc, o, Pc, i, a),
      $2.set(0, 0),
      lx.set(1, 0),
      q2.set(1, 1)
    let s = t.ray.intersectTriangle(ig, Gf, ag, !1, Uf)
    if (
      s === null &&
      (og(Gf.set(-0.5, 0.5, 0), Rc, o, Pc, i, a),
      lx.set(0, 1),
      (s = t.ray.intersectTriangle(ig, ag, Gf, !1, Uf)),
      s === null)
    )
      return
    const l = t.ray.origin.distanceTo(Uf)
    l < t.near ||
      l > t.far ||
      e.push({
        distance: l,
        point: Uf.clone(),
        uv: Ed.getInterpolation(Uf, ig, Gf, ag, $2, lx, q2, new pt()),
        face: null,
        object: this,
      })
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.center !== void 0 && this.center.copy(t.center),
      (this.material = t.material),
      this
    )
  }
}
function og(r, t, e, n, i, a) {
  Ic.subVectors(r, e).addScalar(0.5).multiply(n),
    i !== void 0
      ? ((Vf.x = a * Ic.x - i * Ic.y), (Vf.y = i * Ic.x + a * Ic.y))
      : Vf.copy(Ic),
    r.copy(t),
    (r.x += Vf.x),
    (r.y += Vf.y),
    r.applyMatrix4(dB)
}
const Z2 = new U(),
  K2 = new Oe(),
  j2 = new Oe(),
  VY = new U(),
  J2 = new ae(),
  sg = new U(),
  ux = new na(),
  Q2 = new ae(),
  cx = new hf()
class GY extends De {
  constructor(t, e) {
    super(t, e),
      (this.isSkinnedMesh = !0),
      (this.type = 'SkinnedMesh'),
      (this.bindMode = jE),
      (this.bindMatrix = new ae()),
      (this.bindMatrixInverse = new ae()),
      (this.boundingBox = null),
      (this.boundingSphere = null)
  }
  computeBoundingBox() {
    const t = this.geometry
    this.boundingBox === null && (this.boundingBox = new Ei()),
      this.boundingBox.makeEmpty()
    const e = t.getAttribute('position')
    for (let n = 0; n < e.count; n++)
      this.getVertexPosition(n, sg), this.boundingBox.expandByPoint(sg)
  }
  computeBoundingSphere() {
    const t = this.geometry
    this.boundingSphere === null && (this.boundingSphere = new na()),
      this.boundingSphere.makeEmpty()
    const e = t.getAttribute('position')
    for (let n = 0; n < e.count; n++)
      this.getVertexPosition(n, sg), this.boundingSphere.expandByPoint(sg)
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.bindMode = t.bindMode),
      this.bindMatrix.copy(t.bindMatrix),
      this.bindMatrixInverse.copy(t.bindMatrixInverse),
      (this.skeleton = t.skeleton),
      t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()),
      t.boundingSphere !== null &&
        (this.boundingSphere = t.boundingSphere.clone()),
      this
    )
  }
  raycast(t, e) {
    const n = this.material,
      i = this.matrixWorld
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      ux.copy(this.boundingSphere),
      ux.applyMatrix4(i),
      t.ray.intersectsSphere(ux) !== !1 &&
        (Q2.copy(i).invert(),
        cx.copy(t.ray).applyMatrix4(Q2),
        !(
          this.boundingBox !== null && cx.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(t, e, cx)))
  }
  getVertexPosition(t, e) {
    return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e
  }
  bind(t, e) {
    ;(this.skeleton = t),
      e === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (e = this.matrixWorld)),
      this.bindMatrix.copy(e),
      this.bindMatrixInverse.copy(e).invert()
  }
  pose() {
    this.skeleton.pose()
  }
  normalizeSkinWeights() {
    const t = new Oe(),
      e = this.geometry.attributes.skinWeight
    for (let n = 0, i = e.count; n < i; n++) {
      t.fromBufferAttribute(e, n)
      const a = 1 / t.manhattanLength()
      a !== 1 / 0 ? t.multiplyScalar(a) : t.set(1, 0, 0, 0),
        e.setXYZW(n, t.x, t.y, t.z, t.w)
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.bindMode === jE
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === r6
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            'THREE.SkinnedMesh: Unrecognized bindMode: ' + this.bindMode,
          )
  }
  applyBoneTransform(t, e) {
    const n = this.skeleton,
      i = this.geometry
    K2.fromBufferAttribute(i.attributes.skinIndex, t),
      j2.fromBufferAttribute(i.attributes.skinWeight, t),
      Z2.copy(e).applyMatrix4(this.bindMatrix),
      e.set(0, 0, 0)
    for (let a = 0; a < 4; a++) {
      const o = j2.getComponent(a)
      if (o !== 0) {
        const s = K2.getComponent(a)
        J2.multiplyMatrices(n.bones[s].matrixWorld, n.boneInverses[s]),
          e.addScaledVector(VY.copy(Z2).applyMatrix4(J2), o)
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse)
  }
}
class pB extends Fe {
  constructor() {
    super(), (this.isBone = !0), (this.type = 'Bone')
  }
}
class vB extends Yn {
  constructor(t = null, e = 1, n = 1, i, a, o, s, l, u = Ur, c = Ur, h, f) {
    super(null, o, s, l, u, c, i, a, h, f),
      (this.isDataTexture = !0),
      (this.image = {
        data: t,
        width: e,
        height: n,
      }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1)
  }
}
const tD = new ae(),
  HY = new ae()
class VM {
  constructor(t = [], e = []) {
    ;(this.uuid = Ki()),
      (this.bones = t.slice(0)),
      (this.boneInverses = e),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init()
  }
  init() {
    const t = this.bones,
      e = this.boneInverses
    if (((this.boneMatrices = new Float32Array(t.length * 16)), e.length === 0))
      this.calculateInverses()
    else if (t.length !== e.length) {
      console.warn(
        'THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.',
      ),
        (this.boneInverses = [])
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new ae())
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = new ae()
      this.bones[t] && n.copy(this.bones[t].matrixWorld).invert(),
        this.boneInverses.push(n)
    }
  }
  pose() {
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t]
      n && n.matrixWorld.copy(this.boneInverses[t]).invert()
    }
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t]
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale))
    }
  }
  update() {
    const t = this.bones,
      e = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture
    for (let a = 0, o = t.length; a < o; a++) {
      const s = t[a] ? t[a].matrixWorld : HY
      tD.multiplyMatrices(s, e[a]), tD.toArray(n, a * 16)
    }
    i !== null && (i.needsUpdate = !0)
  }
  clone() {
    return new VM(this.bones, this.boneInverses)
  }
  computeBoneTexture() {
    let t = Math.sqrt(this.bones.length * 4)
    ;(t = Math.ceil(t / 4) * 4), (t = Math.max(t, 4))
    const e = new Float32Array(t * t * 4)
    e.set(this.boneMatrices)
    const n = new vB(e, t, t, Yi, ya)
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = e),
      (this.boneTexture = n),
      this
    )
  }
  getBoneByName(t) {
    for (let e = 0, n = this.bones.length; e < n; e++) {
      const i = this.bones[e]
      if (i.name === t) return i
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null))
  }
  fromJSON(t, e) {
    this.uuid = t.uuid
    for (let n = 0, i = t.bones.length; n < i; n++) {
      const a = t.bones[n]
      let o = e[a]
      o === void 0 &&
        (console.warn('THREE.Skeleton: No bone found with UUID:', a),
        (o = new pB())),
        this.bones.push(o),
        this.boneInverses.push(new ae().fromArray(t.boneInverses[n]))
    }
    return this.init(), this
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: 'Skeleton',
        generator: 'Skeleton.toJSON',
      },
      bones: [],
      boneInverses: [],
    }
    t.uuid = this.uuid
    const e = this.bones,
      n = this.boneInverses
    for (let i = 0, a = e.length; i < a; i++) {
      const o = e[i]
      t.bones.push(o.uuid)
      const s = n[i]
      t.boneInverses.push(s.toArray())
    }
    return t
  }
}
class qA extends ir {
  constructor(t, e, n, i = 1) {
    super(t, e, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i)
  }
  copy(t) {
    return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this
  }
  toJSON() {
    const t = super.toJSON()
    return (
      (t.meshPerAttribute = this.meshPerAttribute),
      (t.isInstancedBufferAttribute = !0),
      t
    )
  }
}
const Oc = new ae(),
  eD = new ae(),
  lg = [],
  nD = new Ei(),
  WY = new ae(),
  Hf = new De(),
  Wf = new na()
class XY extends De {
  constructor(t, e, n) {
    super(t, e),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new qA(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null)
    for (let i = 0; i < n; i++) this.setMatrixAt(i, WY)
  }
  computeBoundingBox() {
    const t = this.geometry,
      e = this.count
    this.boundingBox === null && (this.boundingBox = new Ei()),
      t.boundingBox === null && t.computeBoundingBox(),
      this.boundingBox.makeEmpty()
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Oc),
        nD.copy(t.boundingBox).applyMatrix4(Oc),
        this.boundingBox.union(nD)
  }
  computeBoundingSphere() {
    const t = this.geometry,
      e = this.count
    this.boundingSphere === null && (this.boundingSphere = new na()),
      t.boundingSphere === null && t.computeBoundingSphere(),
      this.boundingSphere.makeEmpty()
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Oc),
        Wf.copy(t.boundingSphere).applyMatrix4(Oc),
        this.boundingSphere.union(Wf)
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.instanceMatrix.copy(t.instanceMatrix),
      t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()),
      t.instanceColor !== null &&
        (this.instanceColor = t.instanceColor.clone()),
      (this.count = t.count),
      t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()),
      t.boundingSphere !== null &&
        (this.boundingSphere = t.boundingSphere.clone()),
      this
    )
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3)
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16)
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences,
      i = this.morphTexture.source.data.data,
      a = n.length + 1,
      o = t * a + 1
    for (let s = 0; s < n.length; s++) n[s] = i[o + s]
  }
  raycast(t, e) {
    const n = this.matrixWorld,
      i = this.count
    if (
      ((Hf.geometry = this.geometry),
      (Hf.material = this.material),
      Hf.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        Wf.copy(this.boundingSphere),
        Wf.applyMatrix4(n),
        t.ray.intersectsSphere(Wf) !== !1))
    )
      for (let a = 0; a < i; a++) {
        this.getMatrixAt(a, Oc),
          eD.multiplyMatrices(n, Oc),
          (Hf.matrixWorld = eD),
          Hf.raycast(t, lg)
        for (let o = 0, s = lg.length; o < s; o++) {
          const l = lg[o]
          ;(l.instanceId = a), (l.object = this), e.push(l)
        }
        lg.length = 0
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null &&
      (this.instanceColor = new qA(
        new Float32Array(this.instanceMatrix.count * 3),
        3,
      )),
      e.toArray(this.instanceColor.array, t * 3)
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16)
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences,
      i = n.length + 1
    this.morphTexture === null &&
      (this.morphTexture = new vB(
        new Float32Array(i * this.count),
        i,
        this.count,
        TM,
        ya,
      ))
    const a = this.morphTexture.source.data.data
    let o = 0
    for (let u = 0; u < n.length; u++) o += n[u]
    const s = this.geometry.morphTargetsRelative ? 1 : 1 - o,
      l = i * t
    ;(a[l] = s), a.set(n, l + 1)
  }
  updateMorphTargets() {}
  dispose() {
    return (
      this.dispatchEvent({
        type: 'dispose',
      }),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null)),
      this
    )
  }
}
class dv extends ji {
  constructor(t) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = 'LineBasicMaterial'),
      (this.color = new qt(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = 'round'),
      (this.linejoin = 'round'),
      (this.fog = !0),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.linewidth = t.linewidth),
      (this.linecap = t.linecap),
      (this.linejoin = t.linejoin),
      (this.fog = t.fog),
      this
    )
  }
}
const _y = new U(),
  xy = new U(),
  rD = new ae(),
  Xf = new hf(),
  ug = new na(),
  hx = new U(),
  iD = new U()
let GM = class extends Fe {
  constructor(t = new Mn(), e = new dv()) {
    super(),
      (this.isLine = !0),
      (this.type = 'Line'),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets()
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    )
  }
  computeLineDistances() {
    const t = this.geometry
    if (t.index === null) {
      const e = t.attributes.position,
        n = [0]
      for (let i = 1, a = e.count; i < a; i++)
        _y.fromBufferAttribute(e, i - 1),
          xy.fromBufferAttribute(e, i),
          (n[i] = n[i - 1]),
          (n[i] += _y.distanceTo(xy))
      t.setAttribute('lineDistance', new nn(n, 1))
    } else
      console.warn(
        'THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.',
      )
    return this
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      a = t.params.Line.threshold,
      o = n.drawRange
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ug.copy(n.boundingSphere),
      ug.applyMatrix4(i),
      (ug.radius += a),
      t.ray.intersectsSphere(ug) === !1)
    )
      return
    rD.copy(i).invert(), Xf.copy(t.ray).applyMatrix4(rD)
    const s = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = s * s,
      u = this.isLineSegments ? 2 : 1,
      c = n.index,
      f = n.attributes.position
    if (c !== null) {
      const d = Math.max(0, o.start),
        p = Math.min(c.count, o.start + o.count)
      for (let g = d, v = p - 1; g < v; g += u) {
        const m = c.getX(g),
          y = c.getX(g + 1),
          _ = cg(this, t, Xf, l, m, y)
        _ && e.push(_)
      }
      if (this.isLineLoop) {
        const g = c.getX(p - 1),
          v = c.getX(d),
          m = cg(this, t, Xf, l, g, v)
        m && e.push(m)
      }
    } else {
      const d = Math.max(0, o.start),
        p = Math.min(f.count, o.start + o.count)
      for (let g = d, v = p - 1; g < v; g += u) {
        const m = cg(this, t, Xf, l, g, g + 1)
        m && e.push(m)
      }
      if (this.isLineLoop) {
        const g = cg(this, t, Xf, l, p - 1, d)
        g && e.push(g)
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      n = Object.keys(e)
    if (n.length > 0) {
      const i = e[n[0]]
      if (i !== void 0) {
        ;(this.morphTargetInfluences = []), (this.morphTargetDictionary = {})
        for (let a = 0, o = i.length; a < o; a++) {
          const s = i[a].name || String(a)
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = a)
        }
      }
    }
  }
}
function cg(r, t, e, n, i, a) {
  const o = r.geometry.attributes.position
  if (
    (_y.fromBufferAttribute(o, i),
    xy.fromBufferAttribute(o, a),
    e.distanceSqToSegment(_y, xy, hx, iD) > n)
  )
    return
  hx.applyMatrix4(r.matrixWorld)
  const l = t.ray.origin.distanceTo(hx)
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      point: iD.clone().applyMatrix4(r.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      object: r,
    }
}
const aD = new U(),
  oD = new U()
class gB extends GM {
  constructor(t, e) {
    super(t, e), (this.isLineSegments = !0), (this.type = 'LineSegments')
  }
  computeLineDistances() {
    const t = this.geometry
    if (t.index === null) {
      const e = t.attributes.position,
        n = []
      for (let i = 0, a = e.count; i < a; i += 2)
        aD.fromBufferAttribute(e, i),
          oD.fromBufferAttribute(e, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + aD.distanceTo(oD))
      t.setAttribute('lineDistance', new nn(n, 1))
    } else
      console.warn(
        'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.',
      )
    return this
  }
}
class mB extends GM {
  constructor(t, e) {
    super(t, e), (this.isLineLoop = !0), (this.type = 'LineLoop')
  }
}
class HM extends ji {
  constructor(t) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = 'PointsMaterial'),
      (this.color = new qt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.size = t.size),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    )
  }
}
const sD = new ae(),
  ZA = new hf(),
  hg = new na(),
  fg = new U()
class yB extends Fe {
  constructor(t = new Mn(), e = new HM()) {
    super(),
      (this.isPoints = !0),
      (this.type = 'Points'),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets()
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    )
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      a = t.params.Points.threshold,
      o = n.drawRange
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      hg.copy(n.boundingSphere),
      hg.applyMatrix4(i),
      (hg.radius += a),
      t.ray.intersectsSphere(hg) === !1)
    )
      return
    sD.copy(i).invert(), ZA.copy(t.ray).applyMatrix4(sD)
    const s = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = s * s,
      u = n.index,
      h = n.attributes.position
    if (u !== null) {
      const f = Math.max(0, o.start),
        d = Math.min(u.count, o.start + o.count)
      for (let p = f, g = d; p < g; p++) {
        const v = u.getX(p)
        fg.fromBufferAttribute(h, v), lD(fg, v, l, i, t, e, this)
      }
    } else {
      const f = Math.max(0, o.start),
        d = Math.min(h.count, o.start + o.count)
      for (let p = f, g = d; p < g; p++)
        fg.fromBufferAttribute(h, p), lD(fg, p, l, i, t, e, this)
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      n = Object.keys(e)
    if (n.length > 0) {
      const i = e[n[0]]
      if (i !== void 0) {
        ;(this.morphTargetInfluences = []), (this.morphTargetDictionary = {})
        for (let a = 0, o = i.length; a < o; a++) {
          const s = i[a].name || String(a)
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = a)
        }
      }
    }
  }
}
function lD(r, t, e, n, i, a, o) {
  const s = ZA.distanceSqToPoint(r)
  if (s < e) {
    const l = new U()
    ZA.closestPointToPoint(r, l), l.applyMatrix4(n)
    const u = i.ray.origin.distanceTo(l)
    if (u < i.near || u > i.far) return
    a.push({
      distance: u,
      distanceToRay: Math.sqrt(s),
      point: l,
      index: t,
      face: null,
      object: o,
    })
  }
}
class go {
  constructor() {
    ;(this.type = 'Curve'), (this.arcLengthDivisions = 200)
  }
  getPoint() {
    return console.warn('THREE.Curve: .getPoint() not implemented.'), null
  }
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t)
    return this.getPoint(n, e)
  }
  getPoints(t = 5) {
    const e = []
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t))
    return e
  }
  getSpacedPoints(t = 5) {
    const e = []
    for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t))
    return e
  }
  getLength() {
    const t = this.getLengths()
    return t[t.length - 1]
  }
  getLengths(t = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === t + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths
    this.needsUpdate = !1
    const e = []
    let n,
      i = this.getPoint(0),
      a = 0
    e.push(0)
    for (let o = 1; o <= t; o++)
      (n = this.getPoint(o / t)), (a += n.distanceTo(i)), e.push(a), (i = n)
    return (this.cacheArcLengths = e), e
  }
  updateArcLengths() {
    ;(this.needsUpdate = !0), this.getLengths()
  }
  getUtoTmapping(t, e) {
    const n = this.getLengths()
    let i = 0
    const a = n.length
    let o
    e ? (o = e) : (o = t * n[a - 1])
    let s = 0,
      l = a - 1,
      u
    for (; s <= l; )
      if (((i = Math.floor(s + (l - s) / 2)), (u = n[i] - o), u < 0)) s = i + 1
      else if (u > 0) l = i - 1
      else {
        l = i
        break
      }
    if (((i = l), n[i] === o)) return i / (a - 1)
    const c = n[i],
      f = n[i + 1] - c,
      d = (o - c) / f
    return (i + d) / (a - 1)
  }
  getTangent(t, e) {
    let i = t - 1e-4,
      a = t + 1e-4
    i < 0 && (i = 0), a > 1 && (a = 1)
    const o = this.getPoint(i),
      s = this.getPoint(a),
      l = e || (o.isVector2 ? new pt() : new U())
    return l.copy(s).sub(o).normalize(), l
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t)
    return this.getTangent(n, e)
  }
  computeFrenetFrames(t, e) {
    const n = new U(),
      i = [],
      a = [],
      o = [],
      s = new U(),
      l = new ae()
    for (let d = 0; d <= t; d++) {
      const p = d / t
      i[d] = this.getTangentAt(p, new U())
    }
    ;(a[0] = new U()), (o[0] = new U())
    let u = Number.MAX_VALUE
    const c = Math.abs(i[0].x),
      h = Math.abs(i[0].y),
      f = Math.abs(i[0].z)
    c <= u && ((u = c), n.set(1, 0, 0)),
      h <= u && ((u = h), n.set(0, 1, 0)),
      f <= u && n.set(0, 0, 1),
      s.crossVectors(i[0], n).normalize(),
      a[0].crossVectors(i[0], s),
      o[0].crossVectors(i[0], a[0])
    for (let d = 1; d <= t; d++) {
      if (
        ((a[d] = a[d - 1].clone()),
        (o[d] = o[d - 1].clone()),
        s.crossVectors(i[d - 1], i[d]),
        s.length() > Number.EPSILON)
      ) {
        s.normalize()
        const p = Math.acos(zn(i[d - 1].dot(i[d]), -1, 1))
        a[d].applyMatrix4(l.makeRotationAxis(s, p))
      }
      o[d].crossVectors(i[d], a[d])
    }
    if (e === !0) {
      let d = Math.acos(zn(a[0].dot(a[t]), -1, 1))
      ;(d /= t), i[0].dot(s.crossVectors(a[0], a[t])) > 0 && (d = -d)
      for (let p = 1; p <= t; p++)
        a[p].applyMatrix4(l.makeRotationAxis(i[p], d * p)),
          o[p].crossVectors(i[p], a[p])
    }
    return {
      tangents: i,
      normals: a,
      binormals: o,
    }
  }
  clone() {
    return new this.constructor().copy(this)
  }
  copy(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: 'Curve',
        generator: 'Curve.toJSON',
      },
    }
    return (
      (t.arcLengthDivisions = this.arcLengthDivisions), (t.type = this.type), t
    )
  }
  fromJSON(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this
  }
}
class WM extends go {
  constructor(
    t = 0,
    e = 0,
    n = 1,
    i = 1,
    a = 0,
    o = Math.PI * 2,
    s = !1,
    l = 0,
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = 'EllipseCurve'),
      (this.aX = t),
      (this.aY = e),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = a),
      (this.aEndAngle = o),
      (this.aClockwise = s),
      (this.aRotation = l)
  }
  getPoint(t, e = new pt()) {
    const n = e,
      i = Math.PI * 2
    let a = this.aEndAngle - this.aStartAngle
    const o = Math.abs(a) < Number.EPSILON
    for (; a < 0; ) a += i
    for (; a > i; ) a -= i
    a < Number.EPSILON && (o ? (a = 0) : (a = i)),
      this.aClockwise === !0 && !o && (a === i ? (a = -i) : (a = a - i))
    const s = this.aStartAngle + t * a
    let l = this.aX + this.xRadius * Math.cos(s),
      u = this.aY + this.yRadius * Math.sin(s)
    if (this.aRotation !== 0) {
      const c = Math.cos(this.aRotation),
        h = Math.sin(this.aRotation),
        f = l - this.aX,
        d = u - this.aY
      ;(l = f * c - d * h + this.aX), (u = f * h + d * c + this.aY)
    }
    return n.set(l, u)
  }
  copy(t) {
    return (
      super.copy(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    )
  }
  toJSON() {
    const t = super.toJSON()
    return (
      (t.aX = this.aX),
      (t.aY = this.aY),
      (t.xRadius = this.xRadius),
      (t.yRadius = this.yRadius),
      (t.aStartAngle = this.aStartAngle),
      (t.aEndAngle = this.aEndAngle),
      (t.aClockwise = this.aClockwise),
      (t.aRotation = this.aRotation),
      t
    )
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    )
  }
}
class YY extends WM {
  constructor(t, e, n, i, a, o) {
    super(t, e, n, n, i, a, o), (this.isArcCurve = !0), (this.type = 'ArcCurve')
  }
}
function XM() {
  let r = 0,
    t = 0,
    e = 0,
    n = 0
  function i(a, o, s, l) {
    ;(r = a),
      (t = s),
      (e = -3 * a + 3 * o - 2 * s - l),
      (n = 2 * a - 2 * o + s + l)
  }
  return {
    initCatmullRom: function (a, o, s, l, u) {
      i(o, s, u * (s - a), u * (l - o))
    },
    initNonuniformCatmullRom: function (a, o, s, l, u, c, h) {
      let f = (o - a) / u - (s - a) / (u + c) + (s - o) / c,
        d = (s - o) / c - (l - o) / (c + h) + (l - s) / h
      ;(f *= c), (d *= c), i(o, s, f, d)
    },
    calc: function (a) {
      const o = a * a,
        s = o * a
      return r + t * a + e * o + n * s
    },
  }
}
const dg = new U(),
  fx = new XM(),
  dx = new XM(),
  px = new XM()
class _B extends go {
  constructor(t = [], e = !1, n = 'centripetal', i = 0.5) {
    super(),
      (this.isCatmullRomCurve3 = !0),
      (this.type = 'CatmullRomCurve3'),
      (this.points = t),
      (this.closed = e),
      (this.curveType = n),
      (this.tension = i)
  }
  getPoint(t, e = new U()) {
    const n = e,
      i = this.points,
      a = i.length,
      o = (a - (this.closed ? 0 : 1)) * t
    let s = Math.floor(o),
      l = o - s
    this.closed
      ? (s += s > 0 ? 0 : (Math.floor(Math.abs(s) / a) + 1) * a)
      : l === 0 && s === a - 1 && ((s = a - 2), (l = 1))
    let u, c
    this.closed || s > 0
      ? (u = i[(s - 1) % a])
      : (dg.subVectors(i[0], i[1]).add(i[0]), (u = dg))
    const h = i[s % a],
      f = i[(s + 1) % a]
    if (
      (this.closed || s + 2 < a
        ? (c = i[(s + 2) % a])
        : (dg.subVectors(i[a - 1], i[a - 2]).add(i[a - 1]), (c = dg)),
      this.curveType === 'centripetal' || this.curveType === 'chordal')
    ) {
      const d = this.curveType === 'chordal' ? 0.5 : 0.25
      let p = Math.pow(u.distanceToSquared(h), d),
        g = Math.pow(h.distanceToSquared(f), d),
        v = Math.pow(f.distanceToSquared(c), d)
      g < 1e-4 && (g = 1),
        p < 1e-4 && (p = g),
        v < 1e-4 && (v = g),
        fx.initNonuniformCatmullRom(u.x, h.x, f.x, c.x, p, g, v),
        dx.initNonuniformCatmullRom(u.y, h.y, f.y, c.y, p, g, v),
        px.initNonuniformCatmullRom(u.z, h.z, f.z, c.z, p, g, v)
    } else
      this.curveType === 'catmullrom' &&
        (fx.initCatmullRom(u.x, h.x, f.x, c.x, this.tension),
        dx.initCatmullRom(u.y, h.y, f.y, c.y, this.tension),
        px.initCatmullRom(u.z, h.z, f.z, c.z, this.tension))
    return n.set(fx.calc(l), dx.calc(l), px.calc(l)), n
  }
  copy(t) {
    super.copy(t), (this.points = [])
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e]
      this.points.push(i.clone())
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    )
  }
  toJSON() {
    const t = super.toJSON()
    t.points = []
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e]
      t.points.push(i.toArray())
    }
    return (
      (t.closed = this.closed),
      (t.curveType = this.curveType),
      (t.tension = this.tension),
      t
    )
  }
  fromJSON(t) {
    super.fromJSON(t), (this.points = [])
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e]
      this.points.push(new U().fromArray(i))
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    )
  }
}
function uD(r, t, e, n, i) {
  const a = (n - t) * 0.5,
    o = (i - e) * 0.5,
    s = r * r,
    l = r * s
  return (
    (2 * e - 2 * n + a + o) * l + (-3 * e + 3 * n - 2 * a - o) * s + a * r + e
  )
}
function $Y(r, t) {
  const e = 1 - r
  return e * e * t
}
function qY(r, t) {
  return 2 * (1 - r) * r * t
}
function ZY(r, t) {
  return r * r * t
}
function qd(r, t, e, n) {
  return $Y(r, t) + qY(r, e) + ZY(r, n)
}
function KY(r, t) {
  const e = 1 - r
  return e * e * e * t
}
function jY(r, t) {
  const e = 1 - r
  return 3 * e * e * r * t
}
function JY(r, t) {
  return 3 * (1 - r) * r * r * t
}
function QY(r, t) {
  return r * r * r * t
}
function Zd(r, t, e, n, i) {
  return KY(r, t) + jY(r, e) + JY(r, n) + QY(r, i)
}
class xB extends go {
  constructor(t = new pt(), e = new pt(), n = new pt(), i = new pt()) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = 'CubicBezierCurve'),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i)
  }
  getPoint(t, e = new pt()) {
    const n = e,
      i = this.v0,
      a = this.v1,
      o = this.v2,
      s = this.v3
    return n.set(Zd(t, i.x, a.x, o.x, s.x), Zd(t, i.y, a.y, o.y, s.y)), n
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    )
  }
  toJSON() {
    const t = super.toJSON()
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    )
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    )
  }
}
class t$ extends go {
  constructor(t = new U(), e = new U(), n = new U(), i = new U()) {
    super(),
      (this.isCubicBezierCurve3 = !0),
      (this.type = 'CubicBezierCurve3'),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i)
  }
  getPoint(t, e = new U()) {
    const n = e,
      i = this.v0,
      a = this.v1,
      o = this.v2,
      s = this.v3
    return (
      n.set(
        Zd(t, i.x, a.x, o.x, s.x),
        Zd(t, i.y, a.y, o.y, s.y),
        Zd(t, i.z, a.z, o.z, s.z),
      ),
      n
    )
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    )
  }
  toJSON() {
    const t = super.toJSON()
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    )
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    )
  }
}
class SB extends go {
  constructor(t = new pt(), e = new pt()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = 'LineCurve'),
      (this.v1 = t),
      (this.v2 = e)
  }
  getPoint(t, e = new pt()) {
    const n = e
    return (
      t === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    )
  }
  getPointAt(t, e) {
    return this.getPoint(t, e)
  }
  getTangent(t, e = new pt()) {
    return e.subVectors(this.v2, this.v1).normalize()
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e)
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }
  toJSON() {
    const t = super.toJSON()
    return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t
  }
  fromJSON(t) {
    return (
      super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    )
  }
}
class e$ extends go {
  constructor(t = new U(), e = new U()) {
    super(),
      (this.isLineCurve3 = !0),
      (this.type = 'LineCurve3'),
      (this.v1 = t),
      (this.v2 = e)
  }
  getPoint(t, e = new U()) {
    const n = e
    return (
      t === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    )
  }
  getPointAt(t, e) {
    return this.getPoint(t, e)
  }
  getTangent(t, e = new U()) {
    return e.subVectors(this.v2, this.v1).normalize()
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e)
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }
  toJSON() {
    const t = super.toJSON()
    return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t
  }
  fromJSON(t) {
    return (
      super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    )
  }
}
class AB extends go {
  constructor(t = new pt(), e = new pt(), n = new pt()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = 'QuadraticBezierCurve'),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n)
  }
  getPoint(t, e = new pt()) {
    const n = e,
      i = this.v0,
      a = this.v1,
      o = this.v2
    return n.set(qd(t, i.x, a.x, o.x), qd(t, i.y, a.y, o.y)), n
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    )
  }
  toJSON() {
    const t = super.toJSON()
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    )
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    )
  }
}
class YM extends go {
  constructor(t = new U(), e = new U(), n = new U()) {
    super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = 'QuadraticBezierCurve3'),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n)
  }
  getPoint(t, e = new U()) {
    const n = e,
      i = this.v0,
      a = this.v1,
      o = this.v2
    return (
      n.set(qd(t, i.x, a.x, o.x), qd(t, i.y, a.y, o.y), qd(t, i.z, a.z, o.z)), n
    )
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    )
  }
  toJSON() {
    const t = super.toJSON()
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    )
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    )
  }
}
class bB extends go {
  constructor(t = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = 'SplineCurve'),
      (this.points = t)
  }
  getPoint(t, e = new pt()) {
    const n = e,
      i = this.points,
      a = (i.length - 1) * t,
      o = Math.floor(a),
      s = a - o,
      l = i[o === 0 ? o : o - 1],
      u = i[o],
      c = i[o > i.length - 2 ? i.length - 1 : o + 1],
      h = i[o > i.length - 3 ? i.length - 1 : o + 2]
    return n.set(uD(s, l.x, u.x, c.x, h.x), uD(s, l.y, u.y, c.y, h.y)), n
  }
  copy(t) {
    super.copy(t), (this.points = [])
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e]
      this.points.push(i.clone())
    }
    return this
  }
  toJSON() {
    const t = super.toJSON()
    t.points = []
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e]
      t.points.push(i.toArray())
    }
    return t
  }
  fromJSON(t) {
    super.fromJSON(t), (this.points = [])
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e]
      this.points.push(new pt().fromArray(i))
    }
    return this
  }
}
var Sy = Object.freeze({
  __proto__: null,
  ArcCurve: YY,
  CatmullRomCurve3: _B,
  CubicBezierCurve: xB,
  CubicBezierCurve3: t$,
  EllipseCurve: WM,
  LineCurve: SB,
  LineCurve3: e$,
  QuadraticBezierCurve: AB,
  QuadraticBezierCurve3: YM,
  SplineCurve: bB,
})
class n$ extends go {
  constructor() {
    super(),
      (this.type = 'CurvePath'),
      (this.curves = []),
      (this.autoClose = !1)
  }
  add(t) {
    this.curves.push(t)
  }
  closePath() {
    const t = this.curves[0].getPoint(0),
      e = this.curves[this.curves.length - 1].getPoint(1)
    if (!t.equals(e)) {
      const n = t.isVector2 === !0 ? 'LineCurve' : 'LineCurve3'
      this.curves.push(new Sy[n](e, t))
    }
    return this
  }
  getPoint(t, e) {
    const n = t * this.getLength(),
      i = this.getCurveLengths()
    let a = 0
    for (; a < i.length; ) {
      if (i[a] >= n) {
        const o = i[a] - n,
          s = this.curves[a],
          l = s.getLength(),
          u = l === 0 ? 0 : 1 - o / l
        return s.getPointAt(u, e)
      }
      a++
    }
    return null
  }
  getLength() {
    const t = this.getCurveLengths()
    return t[t.length - 1]
  }
  updateArcLengths() {
    ;(this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths()
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths
    const t = []
    let e = 0
    for (let n = 0, i = this.curves.length; n < i; n++)
      (e += this.curves[n].getLength()), t.push(e)
    return (this.cacheLengths = t), t
  }
  getSpacedPoints(t = 40) {
    const e = []
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t))
    return this.autoClose && e.push(e[0]), e
  }
  getPoints(t = 12) {
    const e = []
    let n
    for (let i = 0, a = this.curves; i < a.length; i++) {
      const o = a[i],
        s = o.isEllipseCurve
          ? t * 2
          : o.isLineCurve || o.isLineCurve3
          ? 1
          : o.isSplineCurve
          ? t * o.points.length
          : t,
        l = o.getPoints(s)
      for (let u = 0; u < l.length; u++) {
        const c = l[u]
        ;(n && n.equals(c)) || (e.push(c), (n = c))
      }
    }
    return (
      this.autoClose &&
        e.length > 1 &&
        !e[e.length - 1].equals(e[0]) &&
        e.push(e[0]),
      e
    )
  }
  copy(t) {
    super.copy(t), (this.curves = [])
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e]
      this.curves.push(i.clone())
    }
    return (this.autoClose = t.autoClose), this
  }
  toJSON() {
    const t = super.toJSON()
    ;(t.autoClose = this.autoClose), (t.curves = [])
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const i = this.curves[e]
      t.curves.push(i.toJSON())
    }
    return t
  }
  fromJSON(t) {
    super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = [])
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e]
      this.curves.push(new Sy[i.type]().fromJSON(i))
    }
    return this
  }
}
let cD = class extends n$ {
  constructor(t) {
    super(),
      (this.type = 'Path'),
      (this.currentPoint = new pt()),
      t && this.setFromPoints(t)
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y)
    for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y)
    return this
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this
  }
  lineTo(t, e) {
    const n = new SB(this.currentPoint.clone(), new pt(t, e))
    return this.curves.push(n), this.currentPoint.set(t, e), this
  }
  quadraticCurveTo(t, e, n, i) {
    const a = new AB(this.currentPoint.clone(), new pt(t, e), new pt(n, i))
    return this.curves.push(a), this.currentPoint.set(n, i), this
  }
  bezierCurveTo(t, e, n, i, a, o) {
    const s = new xB(
      this.currentPoint.clone(),
      new pt(t, e),
      new pt(n, i),
      new pt(a, o),
    )
    return this.curves.push(s), this.currentPoint.set(a, o), this
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t),
      n = new bB(e)
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this
  }
  arc(t, e, n, i, a, o) {
    const s = this.currentPoint.x,
      l = this.currentPoint.y
    return this.absarc(t + s, e + l, n, i, a, o), this
  }
  absarc(t, e, n, i, a, o) {
    return this.absellipse(t, e, n, n, i, a, o), this
  }
  ellipse(t, e, n, i, a, o, s, l) {
    const u = this.currentPoint.x,
      c = this.currentPoint.y
    return this.absellipse(t + u, e + c, n, i, a, o, s, l), this
  }
  absellipse(t, e, n, i, a, o, s, l) {
    const u = new WM(t, e, n, i, a, o, s, l)
    if (this.curves.length > 0) {
      const h = u.getPoint(0)
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
    }
    this.curves.push(u)
    const c = u.getPoint(1)
    return this.currentPoint.copy(c), this
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this
  }
  toJSON() {
    const t = super.toJSON()
    return (t.currentPoint = this.currentPoint.toArray()), t
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
  }
}
class $M extends Mn {
  constructor(
    t = 1,
    e = 1,
    n = 1,
    i = 32,
    a = 1,
    o = !1,
    s = 0,
    l = Math.PI * 2,
  ) {
    super(),
      (this.type = 'CylinderGeometry'),
      (this.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: n,
        radialSegments: i,
        heightSegments: a,
        openEnded: o,
        thetaStart: s,
        thetaLength: l,
      })
    const u = this
    ;(i = Math.floor(i)), (a = Math.floor(a))
    const c = [],
      h = [],
      f = [],
      d = []
    let p = 0
    const g = [],
      v = n / 2
    let m = 0
    y(),
      o === !1 && (t > 0 && _(!0), e > 0 && _(!1)),
      this.setIndex(c),
      this.setAttribute('position', new nn(h, 3)),
      this.setAttribute('normal', new nn(f, 3)),
      this.setAttribute('uv', new nn(d, 2))
    function y() {
      const x = new U(),
        A = new U()
      let S = 0
      const b = (e - t) / n
      for (let T = 0; T <= a; T++) {
        const w = [],
          M = T / a,
          C = M * (e - t) + t
        for (let E = 0; E <= i; E++) {
          const D = E / i,
            P = D * l + s,
            L = Math.sin(P),
            I = Math.cos(P)
          ;(A.x = C * L),
            (A.y = -M * n + v),
            (A.z = C * I),
            h.push(A.x, A.y, A.z),
            x.set(L, b, I).normalize(),
            f.push(x.x, x.y, x.z),
            d.push(D, 1 - M),
            w.push(p++)
        }
        g.push(w)
      }
      for (let T = 0; T < i; T++)
        for (let w = 0; w < a; w++) {
          const M = g[w][T],
            C = g[w + 1][T],
            E = g[w + 1][T + 1],
            D = g[w][T + 1]
          c.push(M, C, D), c.push(C, E, D), (S += 6)
        }
      u.addGroup(m, S, 0), (m += S)
    }
    function _(x) {
      const A = p,
        S = new pt(),
        b = new U()
      let T = 0
      const w = x === !0 ? t : e,
        M = x === !0 ? 1 : -1
      for (let E = 1; E <= i; E++)
        h.push(0, v * M, 0), f.push(0, M, 0), d.push(0.5, 0.5), p++
      const C = p
      for (let E = 0; E <= i; E++) {
        const P = (E / i) * l + s,
          L = Math.cos(P),
          I = Math.sin(P)
        ;(b.x = w * I),
          (b.y = v * M),
          (b.z = w * L),
          h.push(b.x, b.y, b.z),
          f.push(0, M, 0),
          (S.x = L * 0.5 + 0.5),
          (S.y = I * 0.5 * M + 0.5),
          d.push(S.x, S.y),
          p++
      }
      for (let E = 0; E < i; E++) {
        const D = A + E,
          P = C + E
        x === !0 ? c.push(P, P + 1, D) : c.push(P + 1, P, D), (T += 3)
      }
      u.addGroup(m, T, x === !0 ? 1 : 2), (m += T)
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    )
  }
  static fromJSON(t) {
    return new $M(
      t.radiusTop,
      t.radiusBottom,
      t.height,
      t.radialSegments,
      t.heightSegments,
      t.openEnded,
      t.thetaStart,
      t.thetaLength,
    )
  }
}
class wu extends cD {
  constructor(t) {
    super(t), (this.uuid = Ki()), (this.type = 'Shape'), (this.holes = [])
  }
  getPointsHoles(t) {
    const e = []
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t)
    return e
  }
  extractPoints(t) {
    return {
      shape: this.getPoints(t),
      holes: this.getPointsHoles(t),
    }
  }
  copy(t) {
    super.copy(t), (this.holes = [])
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e]
      this.holes.push(i.clone())
    }
    return this
  }
  toJSON() {
    const t = super.toJSON()
    ;(t.uuid = this.uuid), (t.holes = [])
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const i = this.holes[e]
      t.holes.push(i.toJSON())
    }
    return t
  }
  fromJSON(t) {
    super.fromJSON(t), (this.uuid = t.uuid), (this.holes = [])
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e]
      this.holes.push(new cD().fromJSON(i))
    }
    return this
  }
}
const r$ = {
  triangulate: function (r, t, e = 2) {
    const n = t && t.length,
      i = n ? t[0] * e : r.length
    let a = wB(r, 0, i, e, !0)
    const o = []
    if (!a || a.next === a.prev) return o
    let s, l, u, c, h, f, d
    if ((n && (a = l$(r, t, a, e)), r.length > 80 * e)) {
      ;(s = u = r[0]), (l = c = r[1])
      for (let p = e; p < i; p += e)
        (h = r[p]),
          (f = r[p + 1]),
          h < s && (s = h),
          f < l && (l = f),
          h > u && (u = h),
          f > c && (c = f)
      ;(d = Math.max(u - s, c - l)), (d = d !== 0 ? 32767 / d : 0)
    }
    return xp(a, o, e, s, l, d, 0), o
  },
}
function wB(r, t, e, n, i) {
  let a, o
  if (i === _$(r, t, e, n) > 0)
    for (a = t; a < e; a += n) o = hD(a, r[a], r[a + 1], o)
  else for (a = e - n; a >= t; a -= n) o = hD(a, r[a], r[a + 1], o)
  return o && k0(o, o.next) && (Ap(o), (o = o.next)), o
}
function Gu(r, t) {
  if (!r) return r
  t || (t = r)
  let e = r,
    n
  do
    if (
      ((n = !1), !e.steiner && (k0(e, e.next) || vn(e.prev, e, e.next) === 0))
    ) {
      if ((Ap(e), (e = t = e.prev), e === e.next)) break
      n = !0
    } else e = e.next
  while (n || e !== t)
  return t
}
function xp(r, t, e, n, i, a, o) {
  if (!r) return
  !o && a && d$(r, n, i, a)
  let s = r,
    l,
    u
  for (; r.prev !== r.next; ) {
    if (((l = r.prev), (u = r.next), a ? a$(r, n, i, a) : i$(r))) {
      t.push((l.i / e) | 0),
        t.push((r.i / e) | 0),
        t.push((u.i / e) | 0),
        Ap(r),
        (r = u.next),
        (s = u.next)
      continue
    }
    if (((r = u), r === s)) {
      o
        ? o === 1
          ? ((r = o$(Gu(r), t, e)), xp(r, t, e, n, i, a, 2))
          : o === 2 && s$(r, t, e, n, i, a)
        : xp(Gu(r), t, e, n, i, a, 1)
      break
    }
  }
}
function i$(r) {
  const t = r.prev,
    e = r,
    n = r.next
  if (vn(t, e, n) >= 0) return !1
  const i = t.x,
    a = e.x,
    o = n.x,
    s = t.y,
    l = e.y,
    u = n.y,
    c = i < a ? (i < o ? i : o) : a < o ? a : o,
    h = s < l ? (s < u ? s : u) : l < u ? l : u,
    f = i > a ? (i > o ? i : o) : a > o ? a : o,
    d = s > l ? (s > u ? s : u) : l > u ? l : u
  let p = n.next
  for (; p !== t; ) {
    if (
      p.x >= c &&
      p.x <= f &&
      p.y >= h &&
      p.y <= d &&
      vh(i, s, a, l, o, u, p.x, p.y) &&
      vn(p.prev, p, p.next) >= 0
    )
      return !1
    p = p.next
  }
  return !0
}
function a$(r, t, e, n) {
  const i = r.prev,
    a = r,
    o = r.next
  if (vn(i, a, o) >= 0) return !1
  const s = i.x,
    l = a.x,
    u = o.x,
    c = i.y,
    h = a.y,
    f = o.y,
    d = s < l ? (s < u ? s : u) : l < u ? l : u,
    p = c < h ? (c < f ? c : f) : h < f ? h : f,
    g = s > l ? (s > u ? s : u) : l > u ? l : u,
    v = c > h ? (c > f ? c : f) : h > f ? h : f,
    m = KA(d, p, t, e, n),
    y = KA(g, v, t, e, n)
  let _ = r.prevZ,
    x = r.nextZ
  for (; _ && _.z >= m && x && x.z <= y; ) {
    if (
      (_.x >= d &&
        _.x <= g &&
        _.y >= p &&
        _.y <= v &&
        _ !== i &&
        _ !== o &&
        vh(s, c, l, h, u, f, _.x, _.y) &&
        vn(_.prev, _, _.next) >= 0) ||
      ((_ = _.prevZ),
      x.x >= d &&
        x.x <= g &&
        x.y >= p &&
        x.y <= v &&
        x !== i &&
        x !== o &&
        vh(s, c, l, h, u, f, x.x, x.y) &&
        vn(x.prev, x, x.next) >= 0)
    )
      return !1
    x = x.nextZ
  }
  for (; _ && _.z >= m; ) {
    if (
      _.x >= d &&
      _.x <= g &&
      _.y >= p &&
      _.y <= v &&
      _ !== i &&
      _ !== o &&
      vh(s, c, l, h, u, f, _.x, _.y) &&
      vn(_.prev, _, _.next) >= 0
    )
      return !1
    _ = _.prevZ
  }
  for (; x && x.z <= y; ) {
    if (
      x.x >= d &&
      x.x <= g &&
      x.y >= p &&
      x.y <= v &&
      x !== i &&
      x !== o &&
      vh(s, c, l, h, u, f, x.x, x.y) &&
      vn(x.prev, x, x.next) >= 0
    )
      return !1
    x = x.nextZ
  }
  return !0
}
function o$(r, t, e) {
  let n = r
  do {
    const i = n.prev,
      a = n.next.next
    !k0(i, a) &&
      MB(i, n, n.next, a) &&
      Sp(i, a) &&
      Sp(a, i) &&
      (t.push((i.i / e) | 0),
      t.push((n.i / e) | 0),
      t.push((a.i / e) | 0),
      Ap(n),
      Ap(n.next),
      (n = r = a)),
      (n = n.next)
  } while (n !== r)
  return Gu(n)
}
function s$(r, t, e, n, i, a) {
  let o = r
  do {
    let s = o.next.next
    for (; s !== o.prev; ) {
      if (o.i !== s.i && g$(o, s)) {
        let l = TB(o, s)
        ;(o = Gu(o, o.next)),
          (l = Gu(l, l.next)),
          xp(o, t, e, n, i, a, 0),
          xp(l, t, e, n, i, a, 0)
        return
      }
      s = s.next
    }
    o = o.next
  } while (o !== r)
}
function l$(r, t, e, n) {
  const i = []
  let a, o, s, l, u
  for (a = 0, o = t.length; a < o; a++)
    (s = t[a] * n),
      (l = a < o - 1 ? t[a + 1] * n : r.length),
      (u = wB(r, s, l, n, !1)),
      u === u.next && (u.steiner = !0),
      i.push(v$(u))
  for (i.sort(u$), a = 0; a < i.length; a++) e = c$(i[a], e)
  return e
}
function u$(r, t) {
  return r.x - t.x
}
function c$(r, t) {
  const e = h$(r, t)
  if (!e) return t
  const n = TB(e, r)
  return Gu(n, n.next), Gu(e, e.next)
}
function h$(r, t) {
  let e = t,
    n = -1 / 0,
    i
  const a = r.x,
    o = r.y
  do {
    if (o <= e.y && o >= e.next.y && e.next.y !== e.y) {
      const f = e.x + ((o - e.y) * (e.next.x - e.x)) / (e.next.y - e.y)
      if (
        f <= a &&
        f > n &&
        ((n = f), (i = e.x < e.next.x ? e : e.next), f === a)
      )
        return i
    }
    e = e.next
  } while (e !== t)
  if (!i) return null
  const s = i,
    l = i.x,
    u = i.y
  let c = 1 / 0,
    h
  e = i
  do
    a >= e.x &&
      e.x >= l &&
      a !== e.x &&
      vh(o < u ? a : n, o, l, u, o < u ? n : a, o, e.x, e.y) &&
      ((h = Math.abs(o - e.y) / (a - e.x)),
      Sp(e, r) &&
        (h < c || (h === c && (e.x > i.x || (e.x === i.x && f$(i, e))))) &&
        ((i = e), (c = h))),
      (e = e.next)
  while (e !== s)
  return i
}
function f$(r, t) {
  return vn(r.prev, r, t.prev) < 0 && vn(t.next, r, r.next) < 0
}
function d$(r, t, e, n) {
  let i = r
  do
    i.z === 0 && (i.z = KA(i.x, i.y, t, e, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next)
  while (i !== r)
  ;(i.prevZ.nextZ = null), (i.prevZ = null), p$(i)
}
function p$(r) {
  let t,
    e,
    n,
    i,
    a,
    o,
    s,
    l,
    u = 1
  do {
    for (e = r, r = null, a = null, o = 0; e; ) {
      for (o++, n = e, s = 0, t = 0; t < u && (s++, (n = n.nextZ), !!n); t++);
      for (l = u; s > 0 || (l > 0 && n); )
        s !== 0 && (l === 0 || !n || e.z <= n.z)
          ? ((i = e), (e = e.nextZ), s--)
          : ((i = n), (n = n.nextZ), l--),
          a ? (a.nextZ = i) : (r = i),
          (i.prevZ = a),
          (a = i)
      e = n
    }
    ;(a.nextZ = null), (u *= 2)
  } while (o > 1)
  return r
}
function KA(r, t, e, n, i) {
  return (
    (r = ((r - e) * i) | 0),
    (t = ((t - n) * i) | 0),
    (r = (r | (r << 8)) & 16711935),
    (r = (r | (r << 4)) & 252645135),
    (r = (r | (r << 2)) & 858993459),
    (r = (r | (r << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    r | (t << 1)
  )
}
function v$(r) {
  let t = r,
    e = r
  do (t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next)
  while (t !== r)
  return e
}
function vh(r, t, e, n, i, a, o, s) {
  return (
    (i - o) * (t - s) >= (r - o) * (a - s) &&
    (r - o) * (n - s) >= (e - o) * (t - s) &&
    (e - o) * (a - s) >= (i - o) * (n - s)
  )
}
function g$(r, t) {
  return (
    r.next.i !== t.i &&
    r.prev.i !== t.i &&
    !m$(r, t) &&
    ((Sp(r, t) &&
      Sp(t, r) &&
      y$(r, t) &&
      (vn(r.prev, r, t.prev) || vn(r, t.prev, t))) ||
      (k0(r, t) && vn(r.prev, r, r.next) > 0 && vn(t.prev, t, t.next) > 0))
  )
}
function vn(r, t, e) {
  return (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y)
}
function k0(r, t) {
  return r.x === t.x && r.y === t.y
}
function MB(r, t, e, n) {
  const i = vg(vn(r, t, e)),
    a = vg(vn(r, t, n)),
    o = vg(vn(e, n, r)),
    s = vg(vn(e, n, t))
  return !!(
    (i !== a && o !== s) ||
    (i === 0 && pg(r, e, t)) ||
    (a === 0 && pg(r, n, t)) ||
    (o === 0 && pg(e, r, n)) ||
    (s === 0 && pg(e, t, n))
  )
}
function pg(r, t, e) {
  return (
    t.x <= Math.max(r.x, e.x) &&
    t.x >= Math.min(r.x, e.x) &&
    t.y <= Math.max(r.y, e.y) &&
    t.y >= Math.min(r.y, e.y)
  )
}
function vg(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0
}
function m$(r, t) {
  let e = r
  do {
    if (
      e.i !== r.i &&
      e.next.i !== r.i &&
      e.i !== t.i &&
      e.next.i !== t.i &&
      MB(e, e.next, r, t)
    )
      return !0
    e = e.next
  } while (e !== r)
  return !1
}
function Sp(r, t) {
  return vn(r.prev, r, r.next) < 0
    ? vn(r, t, r.next) >= 0 && vn(r, r.prev, t) >= 0
    : vn(r, t, r.prev) < 0 || vn(r, r.next, t) < 0
}
function y$(r, t) {
  let e = r,
    n = !1
  const i = (r.x + t.x) / 2,
    a = (r.y + t.y) / 2
  do
    e.y > a != e.next.y > a &&
      e.next.y !== e.y &&
      i < ((e.next.x - e.x) * (a - e.y)) / (e.next.y - e.y) + e.x &&
      (n = !n),
      (e = e.next)
  while (e !== r)
  return n
}
function TB(r, t) {
  const e = new jA(r.i, r.x, r.y),
    n = new jA(t.i, t.x, t.y),
    i = r.next,
    a = t.prev
  return (
    (r.next = t),
    (t.prev = r),
    (e.next = i),
    (i.prev = e),
    (n.next = e),
    (e.prev = n),
    (a.next = n),
    (n.prev = a),
    n
  )
}
function hD(r, t, e, n) {
  const i = new jA(r, t, e)
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  )
}
function Ap(r) {
  ;(r.next.prev = r.prev),
    (r.prev.next = r.next),
    r.prevZ && (r.prevZ.nextZ = r.nextZ),
    r.nextZ && (r.nextZ.prevZ = r.prevZ)
}
function jA(r, t, e) {
  ;(this.i = r),
    (this.x = t),
    (this.y = e),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1)
}
function _$(r, t, e, n) {
  let i = 0
  for (let a = t, o = e - n; a < e; a += n)
    (i += (r[o] - r[a]) * (r[a + 1] + r[o + 1])), (o = a)
  return i
}
class $s {
  static area(t) {
    const e = t.length
    let n = 0
    for (let i = e - 1, a = 0; a < e; i = a++)
      n += t[i].x * t[a].y - t[a].x * t[i].y
    return n * 0.5
  }
  static isClockWise(t) {
    return $s.area(t) < 0
  }
  static triangulateShape(t, e) {
    const n = [],
      i = [],
      a = []
    fD(t), dD(n, t)
    let o = t.length
    e.forEach(fD)
    for (let l = 0; l < e.length; l++)
      i.push(o), (o += e[l].length), dD(n, e[l])
    const s = r$.triangulate(n, i)
    for (let l = 0; l < s.length; l += 3) a.push(s.slice(l, l + 3))
    return a
  }
}
function fD(r) {
  const t = r.length
  t > 2 && r[t - 1].equals(r[0]) && r.pop()
}
function dD(r, t) {
  for (let e = 0; e < t.length; e++) r.push(t[e].x), r.push(t[e].y)
}
class B0 extends Mn {
  constructor(
    t = new wu([
      new pt(0.5, 0.5),
      new pt(-0.5, 0.5),
      new pt(-0.5, -0.5),
      new pt(0.5, -0.5),
    ]),
    e = {},
  ) {
    super(),
      (this.type = 'ExtrudeGeometry'),
      (this.parameters = {
        shapes: t,
        options: e,
      }),
      (t = Array.isArray(t) ? t : [t])
    const n = this,
      i = [],
      a = []
    for (let s = 0, l = t.length; s < l; s++) {
      const u = t[s]
      o(u)
    }
    this.setAttribute('position', new nn(i, 3)),
      this.setAttribute('uv', new nn(a, 2)),
      this.computeVertexNormals()
    function o(s) {
      const l = [],
        u = e.curveSegments !== void 0 ? e.curveSegments : 12,
        c = e.steps !== void 0 ? e.steps : 1,
        h = e.depth !== void 0 ? e.depth : 1
      let f = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0,
        d = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2,
        p = e.bevelSize !== void 0 ? e.bevelSize : d - 0.1,
        g = e.bevelOffset !== void 0 ? e.bevelOffset : 0,
        v = e.bevelSegments !== void 0 ? e.bevelSegments : 3
      const m = e.extrudePath,
        y = e.UVGenerator !== void 0 ? e.UVGenerator : x$
      let _,
        x = !1,
        A,
        S,
        b,
        T
      m &&
        ((_ = m.getSpacedPoints(c)),
        (x = !0),
        (f = !1),
        (A = m.computeFrenetFrames(c, !1)),
        (S = new U()),
        (b = new U()),
        (T = new U())),
        f || ((v = 0), (d = 0), (p = 0), (g = 0))
      const w = s.extractPoints(u)
      let M = w.shape
      const C = w.holes
      if (!$s.isClockWise(M)) {
        M = M.reverse()
        for (let B = 0, ht = C.length; B < ht; B++) {
          const it = C[B]
          $s.isClockWise(it) && (C[B] = it.reverse())
        }
      }
      const D = $s.triangulateShape(M, C),
        P = M
      for (let B = 0, ht = C.length; B < ht; B++) {
        const it = C[B]
        M = M.concat(it)
      }
      function L(B, ht, it) {
        return (
          ht || console.error('THREE.ExtrudeGeometry: vec does not exist'),
          B.clone().addScaledVector(ht, it)
        )
      }
      const I = M.length,
        F = D.length
      function k(B, ht, it) {
        let xt, rt, kt
        const Ct = B.x - ht.x,
          Lt = B.y - ht.y,
          G = it.x - B.x,
          N = it.y - B.y,
          J = Ct * Ct + Lt * Lt,
          vt = Ct * N - Lt * G
        if (Math.abs(vt) > Number.EPSILON) {
          const yt = Math.sqrt(J),
            mt = Math.sqrt(G * G + N * N),
            Kt = ht.x - Lt / yt,
            It = ht.y + Ct / yt,
            Bt = it.x - N / mt,
            fe = it.y + G / mt,
            Mt = ((Bt - Kt) * N - (fe - It) * G) / (Ct * N - Lt * G)
          ;(xt = Kt + Ct * Mt - B.x), (rt = It + Lt * Mt - B.y)
          const Ot = xt * xt + rt * rt
          if (Ot <= 2) return new pt(xt, rt)
          kt = Math.sqrt(Ot / 2)
        } else {
          let yt = !1
          Ct > Number.EPSILON
            ? G > Number.EPSILON && (yt = !0)
            : Ct < -Number.EPSILON
            ? G < -Number.EPSILON && (yt = !0)
            : Math.sign(Lt) === Math.sign(N) && (yt = !0),
            yt
              ? ((xt = -Lt), (rt = Ct), (kt = Math.sqrt(J)))
              : ((xt = Ct), (rt = Lt), (kt = Math.sqrt(J / 2)))
        }
        return new pt(xt / kt, rt / kt)
      }
      const V = []
      for (
        let B = 0, ht = P.length, it = ht - 1, xt = B + 1;
        B < ht;
        B++, it++, xt++
      )
        it === ht && (it = 0),
          xt === ht && (xt = 0),
          (V[B] = k(P[B], P[it], P[xt]))
      const H = []
      let Y,
        K = V.concat()
      for (let B = 0, ht = C.length; B < ht; B++) {
        const it = C[B]
        Y = []
        for (
          let xt = 0, rt = it.length, kt = rt - 1, Ct = xt + 1;
          xt < rt;
          xt++, kt++, Ct++
        )
          kt === rt && (kt = 0),
            Ct === rt && (Ct = 0),
            (Y[xt] = k(it[xt], it[kt], it[Ct]))
        H.push(Y), (K = K.concat(Y))
      }
      for (let B = 0; B < v; B++) {
        const ht = B / v,
          it = d * Math.cos((ht * Math.PI) / 2),
          xt = p * Math.sin((ht * Math.PI) / 2) + g
        for (let rt = 0, kt = P.length; rt < kt; rt++) {
          const Ct = L(P[rt], V[rt], xt)
          lt(Ct.x, Ct.y, -it)
        }
        for (let rt = 0, kt = C.length; rt < kt; rt++) {
          const Ct = C[rt]
          Y = H[rt]
          for (let Lt = 0, G = Ct.length; Lt < G; Lt++) {
            const N = L(Ct[Lt], Y[Lt], xt)
            lt(N.x, N.y, -it)
          }
        }
      }
      const ut = p + g
      for (let B = 0; B < I; B++) {
        const ht = f ? L(M[B], K[B], ut) : M[B]
        x
          ? (b.copy(A.normals[0]).multiplyScalar(ht.x),
            S.copy(A.binormals[0]).multiplyScalar(ht.y),
            T.copy(_[0]).add(b).add(S),
            lt(T.x, T.y, T.z))
          : lt(ht.x, ht.y, 0)
      }
      for (let B = 1; B <= c; B++)
        for (let ht = 0; ht < I; ht++) {
          const it = f ? L(M[ht], K[ht], ut) : M[ht]
          x
            ? (b.copy(A.normals[B]).multiplyScalar(it.x),
              S.copy(A.binormals[B]).multiplyScalar(it.y),
              T.copy(_[B]).add(b).add(S),
              lt(T.x, T.y, T.z))
            : lt(it.x, it.y, (h / c) * B)
        }
      for (let B = v - 1; B >= 0; B--) {
        const ht = B / v,
          it = d * Math.cos((ht * Math.PI) / 2),
          xt = p * Math.sin((ht * Math.PI) / 2) + g
        for (let rt = 0, kt = P.length; rt < kt; rt++) {
          const Ct = L(P[rt], V[rt], xt)
          lt(Ct.x, Ct.y, h + it)
        }
        for (let rt = 0, kt = C.length; rt < kt; rt++) {
          const Ct = C[rt]
          Y = H[rt]
          for (let Lt = 0, G = Ct.length; Lt < G; Lt++) {
            const N = L(Ct[Lt], Y[Lt], xt)
            x
              ? lt(N.x, N.y + _[c - 1].y, _[c - 1].x + it)
              : lt(N.x, N.y, h + it)
          }
        }
      }
      W(), Z()
      function W() {
        const B = i.length / 3
        if (f) {
          let ht = 0,
            it = I * ht
          for (let xt = 0; xt < F; xt++) {
            const rt = D[xt]
            ct(rt[2] + it, rt[1] + it, rt[0] + it)
          }
          ;(ht = c + v * 2), (it = I * ht)
          for (let xt = 0; xt < F; xt++) {
            const rt = D[xt]
            ct(rt[0] + it, rt[1] + it, rt[2] + it)
          }
        } else {
          for (let ht = 0; ht < F; ht++) {
            const it = D[ht]
            ct(it[2], it[1], it[0])
          }
          for (let ht = 0; ht < F; ht++) {
            const it = D[ht]
            ct(it[0] + I * c, it[1] + I * c, it[2] + I * c)
          }
        }
        n.addGroup(B, i.length / 3 - B, 0)
      }
      function Z() {
        const B = i.length / 3
        let ht = 0
        ft(P, ht), (ht += P.length)
        for (let it = 0, xt = C.length; it < xt; it++) {
          const rt = C[it]
          ft(rt, ht), (ht += rt.length)
        }
        n.addGroup(B, i.length / 3 - B, 1)
      }
      function ft(B, ht) {
        let it = B.length
        for (; --it >= 0; ) {
          const xt = it
          let rt = it - 1
          rt < 0 && (rt = B.length - 1)
          for (let kt = 0, Ct = c + v * 2; kt < Ct; kt++) {
            const Lt = I * kt,
              G = I * (kt + 1),
              N = ht + xt + Lt,
              J = ht + rt + Lt,
              vt = ht + rt + G,
              yt = ht + xt + G
            At(N, J, vt, yt)
          }
        }
      }
      function lt(B, ht, it) {
        l.push(B), l.push(ht), l.push(it)
      }
      function ct(B, ht, it) {
        gt(B), gt(ht), gt(it)
        const xt = i.length / 3,
          rt = y.generateTopUV(n, i, xt - 3, xt - 2, xt - 1)
        dt(rt[0]), dt(rt[1]), dt(rt[2])
      }
      function At(B, ht, it, xt) {
        gt(B), gt(ht), gt(xt), gt(ht), gt(it), gt(xt)
        const rt = i.length / 3,
          kt = y.generateSideWallUV(n, i, rt - 6, rt - 3, rt - 2, rt - 1)
        dt(kt[0]), dt(kt[1]), dt(kt[3]), dt(kt[1]), dt(kt[2]), dt(kt[3])
      }
      function gt(B) {
        i.push(l[B * 3 + 0]), i.push(l[B * 3 + 1]), i.push(l[B * 3 + 2])
      }
      function dt(B) {
        a.push(B.x), a.push(B.y)
      }
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    )
  }
  toJSON() {
    const t = super.toJSON(),
      e = this.parameters.shapes,
      n = this.parameters.options
    return S$(e, n, t)
  }
  static fromJSON(t, e) {
    const n = []
    for (let a = 0, o = t.shapes.length; a < o; a++) {
      const s = e[t.shapes[a]]
      n.push(s)
    }
    const i = t.options.extrudePath
    return (
      i !== void 0 && (t.options.extrudePath = new Sy[i.type]().fromJSON(i)),
      new B0(n, t.options)
    )
  }
}
const x$ = {
  generateTopUV: function (r, t, e, n, i) {
    const a = t[e * 3],
      o = t[e * 3 + 1],
      s = t[n * 3],
      l = t[n * 3 + 1],
      u = t[i * 3],
      c = t[i * 3 + 1]
    return [new pt(a, o), new pt(s, l), new pt(u, c)]
  },
  generateSideWallUV: function (r, t, e, n, i, a) {
    const o = t[e * 3],
      s = t[e * 3 + 1],
      l = t[e * 3 + 2],
      u = t[n * 3],
      c = t[n * 3 + 1],
      h = t[n * 3 + 2],
      f = t[i * 3],
      d = t[i * 3 + 1],
      p = t[i * 3 + 2],
      g = t[a * 3],
      v = t[a * 3 + 1],
      m = t[a * 3 + 2]
    return Math.abs(s - c) < Math.abs(o - u)
      ? [new pt(o, 1 - l), new pt(u, 1 - h), new pt(f, 1 - p), new pt(g, 1 - m)]
      : [new pt(s, 1 - l), new pt(c, 1 - h), new pt(d, 1 - p), new pt(v, 1 - m)]
  },
}
function S$(r, t, e) {
  if (((e.shapes = []), Array.isArray(r)))
    for (let n = 0, i = r.length; n < i; n++) {
      const a = r[n]
      e.shapes.push(a.uuid)
    }
  else e.shapes.push(r.uuid)
  return (
    (e.options = Object.assign({}, t)),
    t.extrudePath !== void 0 &&
      (e.options.extrudePath = t.extrudePath.toJSON()),
    e
  )
}
class qM extends Mn {
  constructor(
    t = new wu([new pt(0, 0.5), new pt(-0.5, -0.5), new pt(0.5, -0.5)]),
    e = 12,
  ) {
    super(),
      (this.type = 'ShapeGeometry'),
      (this.parameters = {
        shapes: t,
        curveSegments: e,
      })
    const n = [],
      i = [],
      a = [],
      o = []
    let s = 0,
      l = 0
    if (Array.isArray(t) === !1) u(t)
    else
      for (let c = 0; c < t.length; c++)
        u(t[c]), this.addGroup(s, l, c), (s += l), (l = 0)
    this.setIndex(n),
      this.setAttribute('position', new nn(i, 3)),
      this.setAttribute('normal', new nn(a, 3)),
      this.setAttribute('uv', new nn(o, 2))
    function u(c) {
      const h = i.length / 3,
        f = c.extractPoints(e)
      let d = f.shape
      const p = f.holes
      $s.isClockWise(d) === !1 && (d = d.reverse())
      for (let v = 0, m = p.length; v < m; v++) {
        const y = p[v]
        $s.isClockWise(y) === !0 && (p[v] = y.reverse())
      }
      const g = $s.triangulateShape(d, p)
      for (let v = 0, m = p.length; v < m; v++) {
        const y = p[v]
        d = d.concat(y)
      }
      for (let v = 0, m = d.length; v < m; v++) {
        const y = d[v]
        i.push(y.x, y.y, 0), a.push(0, 0, 1), o.push(y.x, y.y)
      }
      for (let v = 0, m = g.length; v < m; v++) {
        const y = g[v],
          _ = y[0] + h,
          x = y[1] + h,
          A = y[2] + h
        n.push(_, x, A), (l += 3)
      }
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    )
  }
  toJSON() {
    const t = super.toJSON(),
      e = this.parameters.shapes
    return A$(e, t)
  }
  static fromJSON(t, e) {
    const n = []
    for (let i = 0, a = t.shapes.length; i < a; i++) {
      const o = e[t.shapes[i]]
      n.push(o)
    }
    return new qM(n, t.curveSegments)
  }
}
function A$(r, t) {
  if (((t.shapes = []), Array.isArray(r)))
    for (let e = 0, n = r.length; e < n; e++) {
      const i = r[e]
      t.shapes.push(i.uuid)
    }
  else t.shapes.push(r.uuid)
  return t
}
class bp extends Mn {
  constructor(
    t = new YM(new U(-1, -1, 0), new U(-1, 1, 0), new U(1, 1, 0)),
    e = 64,
    n = 1,
    i = 8,
    a = !1,
  ) {
    super(),
      (this.type = 'TubeGeometry'),
      (this.parameters = {
        path: t,
        tubularSegments: e,
        radius: n,
        radialSegments: i,
        closed: a,
      })
    const o = t.computeFrenetFrames(e, a)
    ;(this.tangents = o.tangents),
      (this.normals = o.normals),
      (this.binormals = o.binormals)
    const s = new U(),
      l = new U(),
      u = new pt()
    let c = new U()
    const h = [],
      f = [],
      d = [],
      p = []
    g(),
      this.setIndex(p),
      this.setAttribute('position', new nn(h, 3)),
      this.setAttribute('normal', new nn(f, 3)),
      this.setAttribute('uv', new nn(d, 2))
    function g() {
      for (let _ = 0; _ < e; _++) v(_)
      v(a === !1 ? e : 0), y(), m()
    }
    function v(_) {
      c = t.getPointAt(_ / e, c)
      const x = o.normals[_],
        A = o.binormals[_]
      for (let S = 0; S <= i; S++) {
        const b = (S / i) * Math.PI * 2,
          T = Math.sin(b),
          w = -Math.cos(b)
        ;(l.x = w * x.x + T * A.x),
          (l.y = w * x.y + T * A.y),
          (l.z = w * x.z + T * A.z),
          l.normalize(),
          f.push(l.x, l.y, l.z),
          (s.x = c.x + n * l.x),
          (s.y = c.y + n * l.y),
          (s.z = c.z + n * l.z),
          h.push(s.x, s.y, s.z)
      }
    }
    function m() {
      for (let _ = 1; _ <= e; _++)
        for (let x = 1; x <= i; x++) {
          const A = (i + 1) * (_ - 1) + (x - 1),
            S = (i + 1) * _ + (x - 1),
            b = (i + 1) * _ + x,
            T = (i + 1) * (_ - 1) + x
          p.push(A, S, T), p.push(S, b, T)
        }
    }
    function y() {
      for (let _ = 0; _ <= e; _++)
        for (let x = 0; x <= i; x++)
          (u.x = _ / e), (u.y = x / i), d.push(u.x, u.y)
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    )
  }
  toJSON() {
    const t = super.toJSON()
    return (t.path = this.parameters.path.toJSON()), t
  }
  static fromJSON(t) {
    return new bp(
      new Sy[t.path.type]().fromJSON(t.path),
      t.tubularSegments,
      t.radius,
      t.radialSegments,
      t.closed,
    )
  }
}
class b$ extends Mn {
  constructor(t = null) {
    if (
      (super(),
      (this.type = 'WireframeGeometry'),
      (this.parameters = {
        geometry: t,
      }),
      t !== null)
    ) {
      const e = [],
        n = new Set(),
        i = new U(),
        a = new U()
      if (t.index !== null) {
        const o = t.attributes.position,
          s = t.index
        let l = t.groups
        l.length === 0 &&
          (l = [
            {
              start: 0,
              count: s.count,
              materialIndex: 0,
            },
          ])
        for (let u = 0, c = l.length; u < c; ++u) {
          const h = l[u],
            f = h.start,
            d = h.count
          for (let p = f, g = f + d; p < g; p += 3)
            for (let v = 0; v < 3; v++) {
              const m = s.getX(p + v),
                y = s.getX(p + ((v + 1) % 3))
              i.fromBufferAttribute(o, m),
                a.fromBufferAttribute(o, y),
                pD(i, a, n) === !0 &&
                  (e.push(i.x, i.y, i.z), e.push(a.x, a.y, a.z))
            }
        }
      } else {
        const o = t.attributes.position
        for (let s = 0, l = o.count / 3; s < l; s++)
          for (let u = 0; u < 3; u++) {
            const c = 3 * s + u,
              h = 3 * s + ((u + 1) % 3)
            i.fromBufferAttribute(o, c),
              a.fromBufferAttribute(o, h),
              pD(i, a, n) === !0 &&
                (e.push(i.x, i.y, i.z), e.push(a.x, a.y, a.z))
          }
      }
      this.setAttribute('position', new nn(e, 3))
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    )
  }
}
function pD(r, t, e) {
  const n = `${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,
    i = `${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`
  return e.has(n) === !0 || e.has(i) === !0 ? !1 : (e.add(n), e.add(i), !0)
}
class Th extends ji {
  constructor(t) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = {
        STANDARD: '',
      }),
      (this.type = 'MeshStandardMaterial'),
      (this.color = new qt(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new qt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = LM),
      (this.normalScale = new pt(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ma()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = {
        STANDARD: '',
      }),
      this.color.copy(t.color),
      (this.roughness = t.roughness),
      (this.metalness = t.metalness),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.roughnessMap = t.roughnessMap),
      (this.metalnessMap = t.metalnessMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.envMapIntensity = t.envMapIntensity),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    )
  }
}
class mo extends Th {
  constructor(t) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = {
        STANDARD: '',
        PHYSICAL: '',
      }),
      (this.type = 'MeshPhysicalMaterial'),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new pt(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, 'reflectivity', {
        get: function () {
          return zn((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1)
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e)
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new qt(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new qt(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new qt(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(t)
  }
  get anisotropy() {
    return this._anisotropy
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, (this._anisotropy = t)
  }
  get clearcoat() {
    return this._clearcoat
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t)
  }
  get iridescence() {
    return this._iridescence
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, (this._iridescence = t)
  }
  get dispersion() {
    return this._dispersion
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, (this._dispersion = t)
  }
  get sheen() {
    return this._sheen
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, (this._sheen = t)
  }
  get transmission() {
    return this._transmission
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, (this._transmission = t)
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = {
        STANDARD: '',
        PHYSICAL: '',
      }),
      (this.anisotropy = t.anisotropy),
      (this.anisotropyRotation = t.anisotropyRotation),
      (this.anisotropyMap = t.anisotropyMap),
      (this.clearcoat = t.clearcoat),
      (this.clearcoatMap = t.clearcoatMap),
      (this.clearcoatRoughness = t.clearcoatRoughness),
      (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = t.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
      (this.dispersion = t.dispersion),
      (this.ior = t.ior),
      (this.iridescence = t.iridescence),
      (this.iridescenceMap = t.iridescenceMap),
      (this.iridescenceIOR = t.iridescenceIOR),
      (this.iridescenceThicknessRange = [...t.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = t.iridescenceThicknessMap),
      (this.sheen = t.sheen),
      this.sheenColor.copy(t.sheenColor),
      (this.sheenColorMap = t.sheenColorMap),
      (this.sheenRoughness = t.sheenRoughness),
      (this.sheenRoughnessMap = t.sheenRoughnessMap),
      (this.transmission = t.transmission),
      (this.transmissionMap = t.transmissionMap),
      (this.thickness = t.thickness),
      (this.thicknessMap = t.thicknessMap),
      (this.attenuationDistance = t.attenuationDistance),
      this.attenuationColor.copy(t.attenuationColor),
      (this.specularIntensity = t.specularIntensity),
      (this.specularIntensityMap = t.specularIntensityMap),
      this.specularColor.copy(t.specularColor),
      (this.specularColorMap = t.specularColorMap),
      this
    )
  }
}
class CB extends ji {
  constructor(t) {
    super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = 'MeshLambertMaterial'),
      (this.color = new qt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new qt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = LM),
      (this.normalScale = new pt(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ma()),
      (this.combine = AM),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t)
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    )
  }
}
function gg(r, t, e) {
  return !r || (!e && r.constructor === t)
    ? r
    : typeof t.BYTES_PER_ELEMENT == 'number'
    ? new t(r)
    : Array.prototype.slice.call(r)
}
function w$(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView)
}
function M$(r) {
  function t(i, a) {
    return r[i] - r[a]
  }
  const e = r.length,
    n = new Array(e)
  for (let i = 0; i !== e; ++i) n[i] = i
  return n.sort(t), n
}
function vD(r, t, e) {
  const n = r.length,
    i = new r.constructor(n)
  for (let a = 0, o = 0; o !== n; ++a) {
    const s = e[a] * t
    for (let l = 0; l !== t; ++l) i[o++] = r[s + l]
  }
  return i
}
function EB(r, t, e, n) {
  let i = 1,
    a = r[0]
  for (; a !== void 0 && a[n] === void 0; ) a = r[i++]
  if (a === void 0) return
  let o = a[n]
  if (o !== void 0)
    if (Array.isArray(o))
      do
        (o = a[n]),
          o !== void 0 && (t.push(a.time), e.push.apply(e, o)),
          (a = r[i++])
      while (a !== void 0)
    else if (o.toArray !== void 0)
      do
        (o = a[n]),
          o !== void 0 && (t.push(a.time), o.toArray(e, e.length)),
          (a = r[i++])
      while (a !== void 0)
    else
      do (o = a[n]), o !== void 0 && (t.push(a.time), e.push(o)), (a = r[i++])
      while (a !== void 0)
}
class pv {
  constructor(t, e, n, i) {
    ;(this.parameterPositions = t),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new e.constructor(n)),
      (this.sampleValues = e),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {})
  }
  evaluate(t) {
    const e = this.parameterPositions
    let n = this._cachedIndex,
      i = e[n],
      a = e[n - 1]
    t: {
      e: {
        let o
        n: {
          r: if (!(t < i)) {
            for (let s = n + 2; ; ) {
              if (i === void 0) {
                if (t < a) break r
                return (
                  (n = e.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                )
              }
              if (n === s) break
              if (((a = i), (i = e[++n]), t < i)) break e
            }
            o = e.length
            break n
          }
          if (!(t >= a)) {
            const s = e[1]
            t < s && ((n = 2), (a = s))
            for (let l = n - 2; ; ) {
              if (a === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0)
              if (n === l) break
              if (((i = a), (a = e[--n - 1]), t >= a)) break e
            }
            ;(o = n), (n = 0)
            break n
          }
          break t
        }
        for (; n < o; ) {
          const s = (n + o) >>> 1
          t < e[s] ? (o = s) : (n = s + 1)
        }
        if (((i = e[n]), (a = e[n - 1]), a === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0)
        if (i === void 0)
          return (
            (n = e.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          )
      }
      ;(this._cachedIndex = n), this.intervalChanged_(n, a, i)
    }
    return this.interpolate_(n, a, t, i)
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_
  }
  copySampleValue_(t) {
    const e = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      a = t * i
    for (let o = 0; o !== i; ++o) e[o] = n[a + o]
    return e
  }
  interpolate_() {
    throw new Error('call to abstract method')
  }
  intervalChanged_() {}
}
class T$ extends pv {
  constructor(t, e, n, i) {
    super(t, e, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = {
        endingStart: JE,
        endingEnd: JE,
      })
  }
  intervalChanged_(t, e, n) {
    const i = this.parameterPositions
    let a = t - 2,
      o = t + 1,
      s = i[a],
      l = i[o]
    if (s === void 0)
      switch (this.getSettings_().endingStart) {
        case QE:
          ;(a = t), (s = 2 * e - n)
          break
        case t2:
          ;(a = i.length - 2), (s = e + i[a] - i[a + 1])
          break
        default:
          ;(a = t), (s = n)
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case QE:
          ;(o = t), (l = 2 * n - e)
          break
        case t2:
          ;(o = 1), (l = n + i[1] - i[0])
          break
        default:
          ;(o = t - 1), (l = e)
      }
    const u = (n - e) * 0.5,
      c = this.valueSize
    ;(this._weightPrev = u / (e - s)),
      (this._weightNext = u / (l - n)),
      (this._offsetPrev = a * c),
      (this._offsetNext = o * c)
  }
  interpolate_(t, e, n, i) {
    const a = this.resultBuffer,
      o = this.sampleValues,
      s = this.valueSize,
      l = t * s,
      u = l - s,
      c = this._offsetPrev,
      h = this._offsetNext,
      f = this._weightPrev,
      d = this._weightNext,
      p = (n - e) / (i - e),
      g = p * p,
      v = g * p,
      m = -f * v + 2 * f * g - f * p,
      y = (1 + f) * v + (-1.5 - 2 * f) * g + (-0.5 + f) * p + 1,
      _ = (-1 - d) * v + (1.5 + d) * g + 0.5 * p,
      x = d * v - d * g
    for (let A = 0; A !== s; ++A)
      a[A] = m * o[c + A] + y * o[u + A] + _ * o[l + A] + x * o[h + A]
    return a
  }
}
class C$ extends pv {
  constructor(t, e, n, i) {
    super(t, e, n, i)
  }
  interpolate_(t, e, n, i) {
    const a = this.resultBuffer,
      o = this.sampleValues,
      s = this.valueSize,
      l = t * s,
      u = l - s,
      c = (n - e) / (i - e),
      h = 1 - c
    for (let f = 0; f !== s; ++f) a[f] = o[u + f] * h + o[l + f] * c
    return a
  }
}
class E$ extends pv {
  constructor(t, e, n, i) {
    super(t, e, n, i)
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1)
  }
}
class yo {
  constructor(t, e, n, i) {
    if (t === void 0)
      throw new Error('THREE.KeyframeTrack: track name is undefined')
    if (e === void 0 || e.length === 0)
      throw new Error('THREE.KeyframeTrack: no keyframes in track named ' + t)
    ;(this.name = t),
      (this.times = gg(e, this.TimeBufferType)),
      (this.values = gg(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation)
  }
  static toJSON(t) {
    const e = t.constructor
    let n
    if (e.toJSON !== this.toJSON) n = e.toJSON(t)
    else {
      n = {
        name: t.name,
        times: gg(t.times, Array),
        values: gg(t.values, Array),
      }
      const i = t.getInterpolation()
      i !== t.DefaultInterpolation && (n.interpolation = i)
    }
    return (n.type = t.ValueTypeName), n
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new E$(this.times, this.values, this.getValueSize(), t)
  }
  InterpolantFactoryMethodLinear(t) {
    return new C$(this.times, this.values, this.getValueSize(), t)
  }
  InterpolantFactoryMethodSmooth(t) {
    return new T$(this.times, this.values, this.getValueSize(), t)
  }
  setInterpolation(t) {
    let e
    switch (t) {
      case mp:
        e = this.InterpolantFactoryMethodDiscrete
        break
      case yp:
        e = this.InterpolantFactoryMethodLinear
        break
      case k_:
        e = this.InterpolantFactoryMethodSmooth
        break
    }
    if (e === void 0) {
      const n =
        'unsupported interpolation for ' +
        this.ValueTypeName +
        ' keyframe track named ' +
        this.name
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation)
        else throw new Error(n)
      return console.warn('THREE.KeyframeTrack:', n), this
    }
    return (this.createInterpolant = e), this
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return mp
      case this.InterpolantFactoryMethodLinear:
        return yp
      case this.InterpolantFactoryMethodSmooth:
        return k_
    }
  }
  getValueSize() {
    return this.values.length / this.times.length
  }
  shift(t) {
    if (t !== 0) {
      const e = this.times
      for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
    }
    return this
  }
  scale(t) {
    if (t !== 1) {
      const e = this.times
      for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
    }
    return this
  }
  trim(t, e) {
    const n = this.times,
      i = n.length
    let a = 0,
      o = i - 1
    for (; a !== i && n[a] < t; ) ++a
    for (; o !== -1 && n[o] > e; ) --o
    if ((++o, a !== 0 || o !== i)) {
      a >= o && ((o = Math.max(o, 1)), (a = o - 1))
      const s = this.getValueSize()
      ;(this.times = n.slice(a, o)),
        (this.values = this.values.slice(a * s, o * s))
    }
    return this
  }
  validate() {
    let t = !0
    const e = this.getValueSize()
    e - Math.floor(e) !== 0 &&
      (console.error('THREE.KeyframeTrack: Invalid value size in track.', this),
      (t = !1))
    const n = this.times,
      i = this.values,
      a = n.length
    a === 0 &&
      (console.error('THREE.KeyframeTrack: Track is empty.', this), (t = !1))
    let o = null
    for (let s = 0; s !== a; s++) {
      const l = n[s]
      if (typeof l == 'number' && isNaN(l)) {
        console.error(
          'THREE.KeyframeTrack: Time is not a valid number.',
          this,
          s,
          l,
        ),
          (t = !1)
        break
      }
      if (o !== null && o > l) {
        console.error('THREE.KeyframeTrack: Out of order keys.', this, s, l, o),
          (t = !1)
        break
      }
      o = l
    }
    if (i !== void 0 && w$(i))
      for (let s = 0, l = i.length; s !== l; ++s) {
        const u = i[s]
        if (isNaN(u)) {
          console.error(
            'THREE.KeyframeTrack: Value is not a valid number.',
            this,
            s,
            u,
          ),
            (t = !1)
          break
        }
      }
    return t
  }
  optimize() {
    const t = this.times.slice(),
      e = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === k_,
      a = t.length - 1
    let o = 1
    for (let s = 1; s < a; ++s) {
      let l = !1
      const u = t[s],
        c = t[s + 1]
      if (u !== c && (s !== 1 || u !== t[0]))
        if (i) l = !0
        else {
          const h = s * n,
            f = h - n,
            d = h + n
          for (let p = 0; p !== n; ++p) {
            const g = e[h + p]
            if (g !== e[f + p] || g !== e[d + p]) {
              l = !0
              break
            }
          }
        }
      if (l) {
        if (s !== o) {
          t[o] = t[s]
          const h = s * n,
            f = o * n
          for (let d = 0; d !== n; ++d) e[f + d] = e[h + d]
        }
        ++o
      }
    }
    if (a > 0) {
      t[o] = t[a]
      for (let s = a * n, l = o * n, u = 0; u !== n; ++u) e[l + u] = e[s + u]
      ++o
    }
    return (
      o !== t.length
        ? ((this.times = t.slice(0, o)), (this.values = e.slice(0, o * n)))
        : ((this.times = t), (this.values = e)),
      this
    )
  }
  clone() {
    const t = this.times.slice(),
      e = this.values.slice(),
      n = this.constructor,
      i = new n(this.name, t, e)
    return (i.createInterpolant = this.createInterpolant), i
  }
}
yo.prototype.TimeBufferType = Float32Array
yo.prototype.ValueBufferType = Float32Array
yo.prototype.DefaultInterpolation = yp
class df extends yo {
  constructor(t, e, n) {
    super(t, e, n)
  }
}
df.prototype.ValueTypeName = 'bool'
df.prototype.ValueBufferType = Array
df.prototype.DefaultInterpolation = mp
df.prototype.InterpolantFactoryMethodLinear = void 0
df.prototype.InterpolantFactoryMethodSmooth = void 0
class DB extends yo {}
DB.prototype.ValueTypeName = 'color'
class Wh extends yo {}
Wh.prototype.ValueTypeName = 'number'
class D$ extends pv {
  constructor(t, e, n, i) {
    super(t, e, n, i)
  }
  interpolate_(t, e, n, i) {
    const a = this.resultBuffer,
      o = this.sampleValues,
      s = this.valueSize,
      l = (n - e) / (i - e)
    let u = t * s
    for (let c = u + s; u !== c; u += 4) wa.slerpFlat(a, 0, o, u - s, o, u, l)
    return a
  }
}
class Xh extends yo {
  InterpolantFactoryMethodLinear(t) {
    return new D$(this.times, this.values, this.getValueSize(), t)
  }
}
Xh.prototype.ValueTypeName = 'quaternion'
Xh.prototype.InterpolantFactoryMethodSmooth = void 0
class pf extends yo {
  constructor(t, e, n) {
    super(t, e, n)
  }
}
pf.prototype.ValueTypeName = 'string'
pf.prototype.ValueBufferType = Array
pf.prototype.DefaultInterpolation = mp
pf.prototype.InterpolantFactoryMethodLinear = void 0
pf.prototype.InterpolantFactoryMethodSmooth = void 0
class Yh extends yo {}
Yh.prototype.ValueTypeName = 'vector'
class L$ {
  constructor(t = '', e = -1, n = [], i = i6) {
    ;(this.name = t),
      (this.tracks = n),
      (this.duration = e),
      (this.blendMode = i),
      (this.uuid = Ki()),
      this.duration < 0 && this.resetDuration()
  }
  static parse(t) {
    const e = [],
      n = t.tracks,
      i = 1 / (t.fps || 1)
    for (let o = 0, s = n.length; o !== s; ++o) e.push(R$(n[o]).scale(i))
    const a = new this(t.name, t.duration, e, t.blendMode)
    return (a.uuid = t.uuid), a
  }
  static toJSON(t) {
    const e = [],
      n = t.tracks,
      i = {
        name: t.name,
        duration: t.duration,
        tracks: e,
        uuid: t.uuid,
        blendMode: t.blendMode,
      }
    for (let a = 0, o = n.length; a !== o; ++a) e.push(yo.toJSON(n[a]))
    return i
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    const a = e.length,
      o = []
    for (let s = 0; s < a; s++) {
      let l = [],
        u = []
      l.push((s + a - 1) % a, s, (s + 1) % a), u.push(0, 1, 0)
      const c = M$(l)
      ;(l = vD(l, 1, c)),
        (u = vD(u, 1, c)),
        !i && l[0] === 0 && (l.push(a), u.push(u[0])),
        o.push(
          new Wh('.morphTargetInfluences[' + e[s].name + ']', l, u).scale(
            1 / n,
          ),
        )
    }
    return new this(t, -1, o)
  }
  static findByName(t, e) {
    let n = t
    if (!Array.isArray(t)) {
      const i = t
      n = (i.geometry && i.geometry.animations) || i.animations
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === e) return n[i]
    return null
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const i = {},
      a = /^([\w-]*?)([\d]+)$/
    for (let s = 0, l = t.length; s < l; s++) {
      const u = t[s],
        c = u.name.match(a)
      if (c && c.length > 1) {
        const h = c[1]
        let f = i[h]
        f || (i[h] = f = []), f.push(u)
      }
    }
    const o = []
    for (const s in i) o.push(this.CreateFromMorphTargetSequence(s, i[s], e, n))
    return o
  }
  static parseAnimation(t, e) {
    if (!t)
      return (
        console.error('THREE.AnimationClip: No animation in JSONLoader data.'),
        null
      )
    const n = function (h, f, d, p, g) {
        if (d.length !== 0) {
          const v = [],
            m = []
          EB(d, v, m, p), v.length !== 0 && g.push(new h(f, v, m))
        }
      },
      i = [],
      a = t.name || 'default',
      o = t.fps || 30,
      s = t.blendMode
    let l = t.length || -1
    const u = t.hierarchy || []
    for (let h = 0; h < u.length; h++) {
      const f = u[h].keys
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const d = {}
          let p
          for (p = 0; p < f.length; p++)
            if (f[p].morphTargets)
              for (let g = 0; g < f[p].morphTargets.length; g++)
                d[f[p].morphTargets[g]] = -1
          for (const g in d) {
            const v = [],
              m = []
            for (let y = 0; y !== f[p].morphTargets.length; ++y) {
              const _ = f[p]
              v.push(_.time), m.push(_.morphTarget === g ? 1 : 0)
            }
            i.push(new Wh('.morphTargetInfluence[' + g + ']', v, m))
          }
          l = d.length * o
        } else {
          const d = '.bones[' + e[h].name + ']'
          n(Yh, d + '.position', f, 'pos', i),
            n(Xh, d + '.quaternion', f, 'rot', i),
            n(Yh, d + '.scale', f, 'scl', i)
        }
    }
    return i.length === 0 ? null : new this(a, l, i, s)
  }
  resetDuration() {
    const t = this.tracks
    let e = 0
    for (let n = 0, i = t.length; n !== i; ++n) {
      const a = this.tracks[n]
      e = Math.max(e, a.times[a.times.length - 1])
    }
    return (this.duration = e), this
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration)
    return this
  }
  validate() {
    let t = !0
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate()
    return t
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize()
    return this
  }
  clone() {
    const t = []
    for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone())
    return new this.constructor(this.name, this.duration, t, this.blendMode)
  }
  toJSON() {
    return this.constructor.toJSON(this)
  }
}
function P$(r) {
  switch (r.toLowerCase()) {
    case 'scalar':
    case 'double':
    case 'float':
    case 'number':
    case 'integer':
      return Wh
    case 'vector':
    case 'vector2':
    case 'vector3':
    case 'vector4':
      return Yh
    case 'color':
      return DB
    case 'quaternion':
      return Xh
    case 'bool':
    case 'boolean':
      return df
    case 'string':
      return pf
  }
  throw new Error('THREE.KeyframeTrack: Unsupported typeName: ' + r)
}
function R$(r) {
  if (r.type === void 0)
    throw new Error('THREE.KeyframeTrack: track type undefined, can not parse')
  const t = P$(r.type)
  if (r.times === void 0) {
    const e = [],
      n = []
    EB(r.keys, e, n, 'value'), (r.times = e), (r.values = n)
  }
  return t.parse !== void 0
    ? t.parse(r)
    : new t(r.name, r.times, r.values, r.interpolation)
}
const Rs = {
  enabled: !1,
  files: {},
  add: function (r, t) {
    this.enabled !== !1 && (this.files[r] = t)
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r]
  },
  remove: function (r) {
    delete this.files[r]
  },
  clear: function () {
    this.files = {}
  },
}
class LB {
  constructor(t, e, n) {
    const i = this
    let a = !1,
      o = 0,
      s = 0,
      l
    const u = []
    ;(this.onStart = void 0),
      (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = n),
      (this.itemStart = function (c) {
        s++, a === !1 && i.onStart !== void 0 && i.onStart(c, o, s), (a = !0)
      }),
      (this.itemEnd = function (c) {
        o++,
          i.onProgress !== void 0 && i.onProgress(c, o, s),
          o === s && ((a = !1), i.onLoad !== void 0 && i.onLoad())
      }),
      (this.itemError = function (c) {
        i.onError !== void 0 && i.onError(c)
      }),
      (this.resolveURL = function (c) {
        return l ? l(c) : c
      }),
      (this.setURLModifier = function (c) {
        return (l = c), this
      }),
      (this.addHandler = function (c, h) {
        return u.push(c, h), this
      }),
      (this.removeHandler = function (c) {
        const h = u.indexOf(c)
        return h !== -1 && u.splice(h, 2), this
      }),
      (this.getHandler = function (c) {
        for (let h = 0, f = u.length; h < f; h += 2) {
          const d = u[h],
            p = u[h + 1]
          if ((d.global && (d.lastIndex = 0), d.test(c))) return p
        }
        return null
      })
  }
}
const I$ = new LB()
class fl {
  constructor(t) {
    ;(this.manager = t !== void 0 ? t : I$),
      (this.crossOrigin = 'anonymous'),
      (this.withCredentials = !1),
      (this.path = ''),
      (this.resourcePath = ''),
      (this.requestHeader = {})
  }
  load() {}
  loadAsync(t, e) {
    const n = this
    return new Promise(function (i, a) {
      n.load(t, i, e, a)
    })
  }
  parse() {}
  setCrossOrigin(t) {
    return (this.crossOrigin = t), this
  }
  setWithCredentials(t) {
    return (this.withCredentials = t), this
  }
  setPath(t) {
    return (this.path = t), this
  }
  setResourcePath(t) {
    return (this.resourcePath = t), this
  }
  setRequestHeader(t) {
    return (this.requestHeader = t), this
  }
}
fl.DEFAULT_MATERIAL_NAME = '__DEFAULT'
const Co = {}
class O$ extends Error {
  constructor(t, e) {
    super(t), (this.response = e)
  }
}
class wp extends fl {
  constructor(t) {
    super(t)
  }
  load(t, e, n, i) {
    t === void 0 && (t = ''),
      this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t))
    const a = Rs.get(t)
    if (a !== void 0)
      return (
        this.manager.itemStart(t),
        setTimeout(() => {
          e && e(a), this.manager.itemEnd(t)
        }, 0),
        a
      )
    if (Co[t] !== void 0) {
      Co[t].push({
        onLoad: e,
        onProgress: n,
        onError: i,
      })
      return
    }
    ;(Co[t] = []),
      Co[t].push({
        onLoad: e,
        onProgress: n,
        onError: i,
      })
    const o = new Request(t, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? 'include' : 'same-origin',
      }),
      s = this.mimeType,
      l = this.responseType
    fetch(o)
      .then(u => {
        if (u.status === 200 || u.status === 0) {
          if (
            (u.status === 0 &&
              console.warn('THREE.FileLoader: HTTP Status 0 received.'),
            typeof ReadableStream > 'u' ||
              u.body === void 0 ||
              u.body.getReader === void 0)
          )
            return u
          const c = Co[t],
            h = u.body.getReader(),
            f = u.headers.get('X-File-Size') || u.headers.get('Content-Length'),
            d = f ? parseInt(f) : 0,
            p = d !== 0
          let g = 0
          const v = new ReadableStream({
            start(m) {
              y()
              function y() {
                h.read().then(
                  ({done: _, value: x}) => {
                    if (_) m.close()
                    else {
                      g += x.byteLength
                      const A = new ProgressEvent('progress', {
                        lengthComputable: p,
                        loaded: g,
                        total: d,
                      })
                      for (let S = 0, b = c.length; S < b; S++) {
                        const T = c[S]
                        T.onProgress && T.onProgress(A)
                      }
                      m.enqueue(x), y()
                    }
                  },
                  _ => {
                    m.error(_)
                  },
                )
              }
            },
          })
          return new Response(v)
        } else
          throw new O$(
            `fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,
            u,
          )
      })
      .then(u => {
        switch (l) {
          case 'arraybuffer':
            return u.arrayBuffer()
          case 'blob':
            return u.blob()
          case 'document':
            return u.text().then(c => new DOMParser().parseFromString(c, s))
          case 'json':
            return u.json()
          default:
            if (s === void 0) return u.text()
            {
              const h = /charset="?([^;"\s]*)"?/i.exec(s),
                f = h && h[1] ? h[1].toLowerCase() : void 0,
                d = new TextDecoder(f)
              return u.arrayBuffer().then(p => d.decode(p))
            }
        }
      })
      .then(u => {
        Rs.add(t, u)
        const c = Co[t]
        delete Co[t]
        for (let h = 0, f = c.length; h < f; h++) {
          const d = c[h]
          d.onLoad && d.onLoad(u)
        }
      })
      .catch(u => {
        const c = Co[t]
        if (c === void 0) throw (this.manager.itemError(t), u)
        delete Co[t]
        for (let h = 0, f = c.length; h < f; h++) {
          const d = c[h]
          d.onError && d.onError(u)
        }
        this.manager.itemError(t)
      })
      .finally(() => {
        this.manager.itemEnd(t)
      }),
      this.manager.itemStart(t)
  }
  setResponseType(t) {
    return (this.responseType = t), this
  }
  setMimeType(t) {
    return (this.mimeType = t), this
  }
}
class N$ extends fl {
  constructor(t) {
    super(t)
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t))
    const a = this,
      o = Rs.get(t)
    if (o !== void 0)
      return (
        a.manager.itemStart(t),
        setTimeout(function () {
          e && e(o), a.manager.itemEnd(t)
        }, 0),
        o
      )
    const s = _p('img')
    function l() {
      c(), Rs.add(t, this), e && e(this), a.manager.itemEnd(t)
    }
    function u(h) {
      c(), i && i(h), a.manager.itemError(t), a.manager.itemEnd(t)
    }
    function c() {
      s.removeEventListener('load', l, !1),
        s.removeEventListener('error', u, !1)
    }
    return (
      s.addEventListener('load', l, !1),
      s.addEventListener('error', u, !1),
      t.slice(0, 5) !== 'data:' &&
        this.crossOrigin !== void 0 &&
        (s.crossOrigin = this.crossOrigin),
      a.manager.itemStart(t),
      (s.src = t),
      s
    )
  }
}
class ZM extends fl {
  constructor(t) {
    super(t)
  }
  load(t, e, n, i) {
    const a = new Yn(),
      o = new N$(this.manager)
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        t,
        function (s) {
          ;(a.image = s), (a.needsUpdate = !0), e !== void 0 && e(a)
        },
        n,
        i,
      ),
      a
    )
  }
}
class F0 extends Fe {
  constructor(t, e = 1) {
    super(),
      (this.isLight = !0),
      (this.type = 'Light'),
      (this.color = new qt(t)),
      (this.intensity = e)
  }
  dispose() {}
  copy(t, e) {
    return (
      super.copy(t, e),
      this.color.copy(t.color),
      (this.intensity = t.intensity),
      this
    )
  }
  toJSON(t) {
    const e = super.toJSON(t)
    return (
      (e.object.color = this.color.getHex()),
      (e.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (e.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (e.object.distance = this.distance),
      this.angle !== void 0 && (e.object.angle = this.angle),
      this.decay !== void 0 && (e.object.decay = this.decay),
      this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (e.object.target = this.target.uuid),
      e
    )
  }
}
const vx = new ae(),
  gD = new U(),
  mD = new U()
class KM {
  constructor(t) {
    ;(this.camera = t),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new pt(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new ae()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new BM()),
      (this._frameExtents = new pt(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Oe(0, 0, 1, 1)])
  }
  getViewportCount() {
    return this._viewportCount
  }
  getFrustum() {
    return this._frustum
  }
  updateMatrices(t) {
    const e = this.camera,
      n = this.matrix
    gD.setFromMatrixPosition(t.matrixWorld),
      e.position.copy(gD),
      mD.setFromMatrixPosition(t.target.matrixWorld),
      e.lookAt(mD),
      e.updateMatrixWorld(),
      vx.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(vx),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(vx)
  }
  getViewport(t) {
    return this._viewports[t]
  }
  getFrameExtents() {
    return this._frameExtents
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
  }
  copy(t) {
    return (
      (this.camera = t.camera.clone()),
      (this.intensity = t.intensity),
      (this.bias = t.bias),
      (this.radius = t.radius),
      this.mapSize.copy(t.mapSize),
      this
    )
  }
  clone() {
    return new this.constructor().copy(this)
  }
  toJSON() {
    const t = {}
    return (
      this.intensity !== 1 && (t.intensity = this.intensity),
      this.bias !== 0 && (t.bias = this.bias),
      this.normalBias !== 0 && (t.normalBias = this.normalBias),
      this.radius !== 1 && (t.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (t.mapSize = this.mapSize.toArray()),
      (t.camera = this.camera.toJSON(!1).object),
      delete t.camera.matrix,
      t
    )
  }
}
class k$ extends KM {
  constructor() {
    super(new wr(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1)
  }
  updateMatrices(t) {
    const e = this.camera,
      n = Gh * 2 * t.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      a = t.distance || e.far
    ;(n !== e.fov || i !== e.aspect || a !== e.far) &&
      ((e.fov = n), (e.aspect = i), (e.far = a), e.updateProjectionMatrix()),
      super.updateMatrices(t)
  }
  copy(t) {
    return super.copy(t), (this.focus = t.focus), this
  }
}
class B$ extends F0 {
  constructor(t, e, n = 0, i = Math.PI / 3, a = 0, o = 2) {
    super(t, e),
      (this.isSpotLight = !0),
      (this.type = 'SpotLight'),
      this.position.copy(Fe.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Fe()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = a),
      (this.decay = o),
      (this.map = null),
      (this.shadow = new k$())
  }
  get power() {
    return this.intensity * Math.PI
  }
  set power(t) {
    this.intensity = t / Math.PI
  }
  dispose() {
    this.shadow.dispose()
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.distance = t.distance),
      (this.angle = t.angle),
      (this.penumbra = t.penumbra),
      (this.decay = t.decay),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    )
  }
}
const yD = new ae(),
  Yf = new U(),
  gx = new U()
class F$ extends KM {
  constructor() {
    super(new wr(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new pt(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Oe(2, 1, 1, 1),
        new Oe(0, 1, 1, 1),
        new Oe(3, 1, 1, 1),
        new Oe(1, 1, 1, 1),
        new Oe(3, 0, 1, 1),
        new Oe(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new U(1, 0, 0),
        new U(-1, 0, 0),
        new U(0, 0, 1),
        new U(0, 0, -1),
        new U(0, 1, 0),
        new U(0, -1, 0),
      ]),
      (this._cubeUps = [
        new U(0, 1, 0),
        new U(0, 1, 0),
        new U(0, 1, 0),
        new U(0, 1, 0),
        new U(0, 0, 1),
        new U(0, 0, -1),
      ])
  }
  updateMatrices(t, e = 0) {
    const n = this.camera,
      i = this.matrix,
      a = t.distance || n.far
    a !== n.far && ((n.far = a), n.updateProjectionMatrix()),
      Yf.setFromMatrixPosition(t.matrixWorld),
      n.position.copy(Yf),
      gx.copy(n.position),
      gx.add(this._cubeDirections[e]),
      n.up.copy(this._cubeUps[e]),
      n.lookAt(gx),
      n.updateMatrixWorld(),
      i.makeTranslation(-Yf.x, -Yf.y, -Yf.z),
      yD.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(yD)
  }
}
class z$ extends F0 {
  constructor(t, e, n = 0, i = 2) {
    super(t, e),
      (this.isPointLight = !0),
      (this.type = 'PointLight'),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new F$())
  }
  get power() {
    return this.intensity * 4 * Math.PI
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI)
  }
  dispose() {
    this.shadow.dispose()
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.distance = t.distance),
      (this.decay = t.decay),
      (this.shadow = t.shadow.clone()),
      this
    )
  }
}
class U$ extends KM {
  constructor() {
    super(new O0(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0)
  }
}
class Ay extends F0 {
  constructor(t, e) {
    super(t, e),
      (this.isDirectionalLight = !0),
      (this.type = 'DirectionalLight'),
      this.position.copy(Fe.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Fe()),
      (this.shadow = new U$())
  }
  dispose() {
    this.shadow.dispose()
  }
  copy(t) {
    return (
      super.copy(t),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    )
  }
}
class PB extends F0 {
  constructor(t, e) {
    super(t, e), (this.isAmbientLight = !0), (this.type = 'AmbientLight')
  }
}
class Kd {
  static decodeText(t) {
    if (
      (console.warn(
        'THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead.',
      ),
      typeof TextDecoder < 'u')
    )
      return new TextDecoder().decode(t)
    let e = ''
    for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n])
    try {
      return decodeURIComponent(escape(e))
    } catch {
      return e
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf('/')
    return e === -1 ? './' : t.slice(0, e + 1)
  }
  static resolveURL(t, e) {
    return typeof t != 'string' || t === ''
      ? ''
      : (/^https?:\/\//i.test(e) &&
          /^\//.test(t) &&
          (e = e.replace(/(^https?:\/\/[^\/]+).*/i, '$1')),
        /^(https?:)?\/\//i.test(t) ||
        /^data:.*,.*$/i.test(t) ||
        /^blob:.*$/i.test(t)
          ? t
          : e + t)
  }
}
class V$ extends Mn {
  constructor() {
    super(),
      (this.isInstancedBufferGeometry = !0),
      (this.type = 'InstancedBufferGeometry'),
      (this.instanceCount = 1 / 0)
  }
  copy(t) {
    return super.copy(t), (this.instanceCount = t.instanceCount), this
  }
  toJSON() {
    const t = super.toJSON()
    return (
      (t.instanceCount = this.instanceCount),
      (t.isInstancedBufferGeometry = !0),
      t
    )
  }
}
class G$ extends fl {
  constructor(t) {
    super(t),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > 'u' &&
        console.warn(
          'THREE.ImageBitmapLoader: createImageBitmap() not supported.',
        ),
      typeof fetch > 'u' &&
        console.warn('THREE.ImageBitmapLoader: fetch() not supported.'),
      (this.options = {
        premultiplyAlpha: 'none',
      })
  }
  setOptions(t) {
    return (this.options = t), this
  }
  load(t, e, n, i) {
    t === void 0 && (t = ''),
      this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t))
    const a = this,
      o = Rs.get(t)
    if (o !== void 0) {
      if ((a.manager.itemStart(t), o.then)) {
        o.then(u => {
          e && e(u), a.manager.itemEnd(t)
        }).catch(u => {
          i && i(u)
        })
        return
      }
      return (
        setTimeout(function () {
          e && e(o), a.manager.itemEnd(t)
        }, 0),
        o
      )
    }
    const s = {}
    ;(s.credentials =
      this.crossOrigin === 'anonymous' ? 'same-origin' : 'include'),
      (s.headers = this.requestHeader)
    const l = fetch(t, s)
      .then(function (u) {
        return u.blob()
      })
      .then(function (u) {
        return createImageBitmap(
          u,
          Object.assign(a.options, {
            colorSpaceConversion: 'none',
          }),
        )
      })
      .then(function (u) {
        return Rs.add(t, u), e && e(u), a.manager.itemEnd(t), u
      })
      .catch(function (u) {
        i && i(u), Rs.remove(t), a.manager.itemError(t), a.manager.itemEnd(t)
      })
    Rs.add(t, l), a.manager.itemStart(t)
  }
}
class H$ {
  constructor(t = !0) {
    ;(this.autoStart = t),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1)
  }
  start() {
    ;(this.startTime = _D()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0)
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1)
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime
  }
  getDelta() {
    let t = 0
    if (this.autoStart && !this.running) return this.start(), 0
    if (this.running) {
      const e = _D()
      ;(t = (e - this.oldTime) / 1e3),
        (this.oldTime = e),
        (this.elapsedTime += t)
    }
    return t
  }
}
function _D() {
  return (typeof performance > 'u' ? Date : performance).now()
}
const jM = '\\[\\]\\.:\\/',
  W$ = new RegExp('[' + jM + ']', 'g'),
  JM = '[^' + jM + ']',
  X$ = '[^' + jM.replace('\\.', '') + ']',
  Y$ = /((?:WC+[\/:])*)/.source.replace('WC', JM),
  $$ = /(WCOD+)?/.source.replace('WCOD', X$),
  q$ = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace('WC', JM),
  Z$ = /\.(WC+)(?:\[(.+)\])?/.source.replace('WC', JM),
  K$ = new RegExp('^' + Y$ + $$ + q$ + Z$ + '$'),
  j$ = ['material', 'materials', 'bones', 'map']
class J$ {
  constructor(t, e, n) {
    const i = n || Xe.parseTrackName(e)
    ;(this._targetGroup = t), (this._bindings = t.subscribe_(e, i))
  }
  getValue(t, e) {
    this.bind()
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n]
    i !== void 0 && i.getValue(t, e)
  }
  setValue(t, e) {
    const n = this._bindings
    for (let i = this._targetGroup.nCachedObjects_, a = n.length; i !== a; ++i)
      n[i].setValue(t, e)
  }
  bind() {
    const t = this._bindings
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind()
  }
  unbind() {
    const t = this._bindings
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind()
  }
}
class Xe {
  constructor(t, e, n) {
    ;(this.path = e),
      (this.parsedPath = n || Xe.parseTrackName(e)),
      (this.node = Xe.findNode(t, this.parsedPath.nodeName)),
      (this.rootNode = t),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound)
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup
      ? new Xe.Composite(t, e, n)
      : new Xe(t, e, n)
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, '_').replace(W$, '')
  }
  static parseTrackName(t) {
    const e = K$.exec(t)
    if (e === null)
      throw new Error('PropertyBinding: Cannot parse trackName: ' + t)
    const n = {
        nodeName: e[2],
        objectName: e[3],
        objectIndex: e[4],
        propertyName: e[5],
        propertyIndex: e[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf('.')
    if (i !== void 0 && i !== -1) {
      const a = n.nodeName.substring(i + 1)
      j$.indexOf(a) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = a))
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        'PropertyBinding: can not parse propertyName from trackName: ' + t,
      )
    return n
  }
  static findNode(t, e) {
    if (
      e === void 0 ||
      e === '' ||
      e === '.' ||
      e === -1 ||
      e === t.name ||
      e === t.uuid
    )
      return t
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e)
      if (n !== void 0) return n
    }
    if (t.children) {
      const n = function (a) {
          for (let o = 0; o < a.length; o++) {
            const s = a[o]
            if (s.name === e || s.uuid === e) return s
            const l = n(s.children)
            if (l) return l
          }
          return null
        },
        i = n(t.children)
      if (i) return i
    }
    return null
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName]
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty
    for (let i = 0, a = n.length; i !== a; ++i) t[e++] = n[i]
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex]
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e)
  }
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e]
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    ;(this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.needsUpdate = !0)
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    ;(this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0)
  }
  _setValue_array(t, e) {
    const n = this.resolvedProperty
    for (let i = 0, a = n.length; i !== a; ++i) n[i] = t[e++]
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty
    for (let i = 0, a = n.length; i !== a; ++i) n[i] = t[e++]
    this.targetObject.needsUpdate = !0
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty
    for (let i = 0, a = n.length; i !== a; ++i) n[i] = t[e++]
    this.targetObject.matrixWorldNeedsUpdate = !0
  }
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e]
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    ;(this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.needsUpdate = !0)
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    ;(this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0)
  }
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e)
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0)
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e),
      (this.targetObject.matrixWorldNeedsUpdate = !0)
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e)
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e)
  }
  bind() {
    let t = this.node
    const e = this.parsedPath,
      n = e.objectName,
      i = e.propertyName
    let a = e.propertyIndex
    if (
      (t || ((t = Xe.findNode(this.rootNode, e.nodeName)), (this.node = t)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !t)
    ) {
      console.warn(
        'THREE.PropertyBinding: No target node found for track: ' +
          this.path +
          '.',
      )
      return
    }
    if (n) {
      let u = e.objectIndex
      switch (n) {
        case 'materials':
          if (!t.material) {
            console.error(
              'THREE.PropertyBinding: Can not bind to material as node does not have a material.',
              this,
            )
            return
          }
          if (!t.material.materials) {
            console.error(
              'THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.',
              this,
            )
            return
          }
          t = t.material.materials
          break
        case 'bones':
          if (!t.skeleton) {
            console.error(
              'THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.',
              this,
            )
            return
          }
          t = t.skeleton.bones
          for (let c = 0; c < t.length; c++)
            if (t[c].name === u) {
              u = c
              break
            }
          break
        case 'map':
          if ('map' in t) {
            t = t.map
            break
          }
          if (!t.material) {
            console.error(
              'THREE.PropertyBinding: Can not bind to material as node does not have a material.',
              this,
            )
            return
          }
          if (!t.material.map) {
            console.error(
              'THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.',
              this,
            )
            return
          }
          t = t.material.map
          break
        default:
          if (t[n] === void 0) {
            console.error(
              'THREE.PropertyBinding: Can not bind to objectName of node undefined.',
              this,
            )
            return
          }
          t = t[n]
      }
      if (u !== void 0) {
        if (t[u] === void 0) {
          console.error(
            'THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.',
            this,
            t,
          )
          return
        }
        t = t[u]
      }
    }
    const o = t[i]
    if (o === void 0) {
      const u = e.nodeName
      console.error(
        'THREE.PropertyBinding: Trying to update property for track: ' +
          u +
          '.' +
          i +
          " but it wasn't found.",
        t,
      )
      return
    }
    let s = this.Versioning.None
    ;(this.targetObject = t),
      t.needsUpdate !== void 0
        ? (s = this.Versioning.NeedsUpdate)
        : t.matrixWorldNeedsUpdate !== void 0 &&
          (s = this.Versioning.MatrixWorldNeedsUpdate)
    let l = this.BindingType.Direct
    if (a !== void 0) {
      if (i === 'morphTargetInfluences') {
        if (!t.geometry) {
          console.error(
            'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.',
            this,
          )
          return
        }
        if (!t.geometry.morphAttributes) {
          console.error(
            'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.',
            this,
          )
          return
        }
        t.morphTargetDictionary[a] !== void 0 &&
          (a = t.morphTargetDictionary[a])
      }
      ;(l = this.BindingType.ArrayElement),
        (this.resolvedProperty = o),
        (this.propertyIndex = a)
    } else
      o.fromArray !== void 0 && o.toArray !== void 0
        ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
        : Array.isArray(o)
        ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = o))
        : (this.propertyName = i)
    ;(this.getValue = this.GetterByBindingType[l]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[l][s])
  }
  unbind() {
    ;(this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound)
  }
}
Xe.Composite = J$
Xe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
}
Xe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
}
Xe.prototype.GetterByBindingType = [
  Xe.prototype._getValue_direct,
  Xe.prototype._getValue_array,
  Xe.prototype._getValue_arrayElement,
  Xe.prototype._getValue_toArray,
]
Xe.prototype.SetterByBindingTypeAndVersioning = [
  [
    Xe.prototype._setValue_direct,
    Xe.prototype._setValue_direct_setNeedsUpdate,
    Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Xe.prototype._setValue_array,
    Xe.prototype._setValue_array_setNeedsUpdate,
    Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Xe.prototype._setValue_arrayElement,
    Xe.prototype._setValue_arrayElement_setNeedsUpdate,
    Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Xe.prototype._setValue_fromArray,
    Xe.prototype._setValue_fromArray_setNeedsUpdate,
    Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
]
class JA extends UM {
  constructor(t, e, n = 1) {
    super(t, e),
      (this.isInstancedInterleavedBuffer = !0),
      (this.meshPerAttribute = n)
  }
  copy(t) {
    return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this
  }
  clone(t) {
    const e = super.clone(t)
    return (e.meshPerAttribute = this.meshPerAttribute), e
  }
  toJSON(t) {
    const e = super.toJSON(t)
    return (
      (e.isInstancedInterleavedBuffer = !0),
      (e.meshPerAttribute = this.meshPerAttribute),
      e
    )
  }
}
const xD = new ae()
class Q$ {
  constructor(t, e, n = 0, i = 1 / 0) {
    ;(this.ray = new hf(t, e)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new NM()),
      (this.params = {
        Mesh: {},
        Line: {
          threshold: 1,
        },
        LOD: {},
        Points: {
          threshold: 1,
        },
        Sprite: {},
      })
  }
  set(t, e) {
    this.ray.set(t, e)
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction
          .set(t.x, t.y, 0.5)
          .unproject(e)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = e))
      : e.isOrthographicCamera
      ? (this.ray.origin
          .set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
          .unproject(e),
        this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
        (this.camera = e))
      : console.error('THREE.Raycaster: Unsupported camera type: ' + e.type)
  }
  setFromXRController(t) {
    return (
      xD.identity().extractRotation(t.matrixWorld),
      this.ray.origin.setFromMatrixPosition(t.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(xD),
      this
    )
  }
  intersectObject(t, e = !0, n = []) {
    return QA(t, this, n, e), n.sort(SD), n
  }
  intersectObjects(t, e = !0, n = []) {
    for (let i = 0, a = t.length; i < a; i++) QA(t[i], this, n, e)
    return n.sort(SD), n
  }
}
function SD(r, t) {
  return r.distance - t.distance
}
function QA(r, t, e, n) {
  let i = !0
  if (
    (r.layers.test(t.layers) && r.raycast(t, e) === !1 && (i = !1),
    i === !0 && n === !0)
  ) {
    const a = r.children
    for (let o = 0, s = a.length; o < s; o++) QA(a[o], t, e, !0)
  }
}
class AD {
  constructor(t = 1, e = 0, n = 0) {
    return (this.radius = t), (this.phi = e), (this.theta = n), this
  }
  set(t, e, n) {
    return (this.radius = t), (this.phi = e), (this.theta = n), this
  }
  copy(t) {
    return (
      (this.radius = t.radius), (this.phi = t.phi), (this.theta = t.theta), this
    )
  }
  makeSafe() {
    return (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z)
  }
  setFromCartesianCoords(t, e, n) {
    return (
      (this.radius = Math.sqrt(t * t + e * e + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(t, n)),
          (this.phi = Math.acos(zn(e / this.radius, -1, 1)))),
      this
    )
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
const bD = new U(),
  mg = new U()
class tq {
  constructor(t = new U(), e = new U()) {
    ;(this.start = t), (this.end = e)
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5)
  }
  delta(t) {
    return t.subVectors(this.end, this.start)
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end)
  }
  distance() {
    return this.start.distanceTo(this.end)
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start)
  }
  closestPointToPointParameter(t, e) {
    bD.subVectors(t, this.start), mg.subVectors(this.end, this.start)
    const n = mg.dot(mg)
    let a = mg.dot(bD) / n
    return e && (a = zn(a, 0, 1)), a
  }
  closestPointToPoint(t, e, n) {
    const i = this.closestPointToPointParameter(t, e)
    return this.delta(n).multiplyScalar(i).add(this.start)
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end)
  }
  clone() {
    return new this.constructor().copy(this)
  }
}
class RB extends gB {
  constructor(t = 1) {
    const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      i = new Mn()
    i.setAttribute('position', new nn(e, 3)),
      i.setAttribute('color', new nn(n, 3))
    const a = new dv({
      vertexColors: !0,
      toneMapped: !1,
    })
    super(i, a), (this.type = 'AxesHelper')
  }
  setColors(t, e, n) {
    const i = new qt(),
      a = this.geometry.attributes.color.array
    return (
      i.set(t),
      i.toArray(a, 0),
      i.toArray(a, 3),
      i.set(e),
      i.toArray(a, 6),
      i.toArray(a, 9),
      i.set(n),
      i.toArray(a, 12),
      i.toArray(a, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    )
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose()
  }
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent('register', {
      detail: {
        revision: SM,
      },
    }),
  )
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = SM))
function eq(r) {
  let t = null,
    e = !1,
    n = !1
  function i() {
    !e || n || (r(), (t = requestAnimationFrame(i)))
  }
  function a() {
    e || ((e = !0), i())
  }
  function o() {
    e && ((e = !1), (n = !0), cancelAnimationFrame(t))
  }
  function s() {
    !e && n && ((e = !0), (n = !1), i())
  }
  return {
    start: a,
    pause: o,
    resume: s,
    isActive: () => e,
  }
}
class z0 {
  constructor() {
    this.events = new Map()
  }
  on(t, e) {
    let n = this.events.get(t)
    n || ((n = new Set()), this.events.set(t, n)), n.add(e)
  }
  off(t, e) {
    const n = this.events.get(t)
    n && (e ? n.delete(e) : this.events.delete(t))
  }
  emit(t, ...e) {
    const n = this.events.get(t)
    n &&
      n.forEach(i => {
        i(...e)
      })
  }
  once(t, e) {
    const n = (...i) => {
      e(...i), this.off(t, n)
    }
    this.on(t, n)
  }
}
class nq extends z0 {
  constructor({canvas: t}) {
    super(),
      (this.canvas = t),
      (this.pixelRatio = 0),
      this.init(),
      window.addEventListener('resize', () => {
        this.init(), this.emit('resize')
      })
  }
  init() {
    ;(this.width = this.canvas.parentNode.offsetWidth),
      (this.height = this.canvas.parentNode.offsetHeight),
      (this.pixelRatio =
        this.pixelRatio || Math.min(window.devicePixelRatio, 2))
  }
  destroy() {
    this.off('resize')
  }
}
class rq extends z0 {
  constructor() {
    super(),
      (this.start = Date.now()),
      (this.current = this.start),
      (this.elapsed = 0),
      (this.delta = 16),
      (this.clock = new H$()),
      (this.raf = eq(() => this.tick())),
      this.raf.start()
  }
  tick() {
    const t = Date.now()
    ;(this.delta = t - this.current),
      (this.current = t),
      (this.elapsed = this.current - this.start)
    const e = this.clock.getDelta(),
      n = this.clock.getElapsedTime()
    this.emit('tick', e, n)
  }
  destroy() {
    this.pause(), this.off('tick')
  }
  pause() {
    this.raf.pause()
  }
  resume() {
    this.raf.resume()
  }
  isActive() {
    this.raf.isActive()
  }
}
function iq(r, t = !1) {
  const e = r[0].index !== null,
    n = new Set(Object.keys(r[0].attributes)),
    i = new Set(Object.keys(r[0].morphAttributes)),
    a = {},
    o = {},
    s = r[0].morphTargetsRelative,
    l = new Mn()
  let u = 0
  for (let c = 0; c < r.length; ++c) {
    const h = r[c]
    let f = 0
    if (e !== (h.index !== null))
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
            c +
            '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.',
        ),
        null
      )
    for (const d in h.attributes) {
      if (!n.has(d))
        return (
          console.error(
            'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
              c +
              '. All geometries must have compatible attributes; make sure "' +
              d +
              '" attribute exists among all geometries, or in none of them.',
          ),
          null
        )
      a[d] === void 0 && (a[d] = []), a[d].push(h.attributes[d]), f++
    }
    if (f !== n.size)
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
            c +
            '. Make sure all geometries have the same number of attributes.',
        ),
        null
      )
    if (s !== h.morphTargetsRelative)
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
            c +
            '. .morphTargetsRelative must be consistent throughout all geometries.',
        ),
        null
      )
    for (const d in h.morphAttributes) {
      if (!i.has(d))
        return (
          console.error(
            'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
              c +
              '.  .morphAttributes must be consistent throughout all geometries.',
          ),
          null
        )
      o[d] === void 0 && (o[d] = []), o[d].push(h.morphAttributes[d])
    }
    if (t) {
      let d
      if (e) d = h.index.count
      else if (h.attributes.position !== void 0) d = h.attributes.position.count
      else
        return (
          console.error(
            'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' +
              c +
              '. The geometry must have either an index or a position attribute',
          ),
          null
        )
      l.addGroup(u, d, c), (u += d)
    }
  }
  if (e) {
    let c = 0
    const h = []
    for (let f = 0; f < r.length; ++f) {
      const d = r[f].index
      for (let p = 0; p < d.count; ++p) h.push(d.getX(p) + c)
      c += r[f].attributes.position.count
    }
    l.setIndex(h)
  }
  for (const c in a) {
    const h = wD(a[c])
    if (!h)
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' +
            c +
            ' attribute.',
        ),
        null
      )
    l.setAttribute(c, h)
  }
  for (const c in o) {
    const h = o[c][0].length
    if (h === 0) break
    ;(l.morphAttributes = l.morphAttributes || {}), (l.morphAttributes[c] = [])
    for (let f = 0; f < h; ++f) {
      const d = []
      for (let g = 0; g < o[c].length; ++g) d.push(o[c][g][f])
      const p = wD(d)
      if (!p)
        return (
          console.error(
            'THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' +
              c +
              ' morphAttribute.',
          ),
          null
        )
      l.morphAttributes[c].push(p)
    }
  }
  return l
}
function wD(r) {
  let t,
    e,
    n,
    i = -1,
    a = 0
  for (let u = 0; u < r.length; ++u) {
    const c = r[u]
    if ((t === void 0 && (t = c.array.constructor), t !== c.array.constructor))
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.',
        ),
        null
      )
    if ((e === void 0 && (e = c.itemSize), e !== c.itemSize))
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.',
        ),
        null
      )
    if ((n === void 0 && (n = c.normalized), n !== c.normalized))
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.',
        ),
        null
      )
    if ((i === -1 && (i = c.gpuType), i !== c.gpuType))
      return (
        console.error(
          'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.',
        ),
        null
      )
    a += c.count * e
  }
  const o = new t(a),
    s = new ir(o, e, n)
  let l = 0
  for (let u = 0; u < r.length; ++u) {
    const c = r[u]
    if (c.isInterleavedBufferAttribute) {
      const h = l / e
      for (let f = 0, d = c.count; f < d; f++)
        for (let p = 0; p < e; p++) {
          const g = c.getComponent(f, p)
          s.setComponent(f + h, p, g)
        }
    } else o.set(c.array, l)
    l += c.count * e
  }
  return i !== void 0 && (s.gpuType = i), s
}
function MD(r, t) {
  if (t === a6)
    return (
      console.warn(
        'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.',
      ),
      r
    )
  if (t === XA || t === $k) {
    let e = r.getIndex()
    if (e === null) {
      const o = [],
        s = r.getAttribute('position')
      if (s !== void 0) {
        for (let l = 0; l < s.count; l++) o.push(l)
        r.setIndex(o), (e = r.getIndex())
      } else
        return (
          console.error(
            'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.',
          ),
          r
        )
    }
    const n = e.count - 2,
      i = []
    if (t === XA)
      for (let o = 1; o <= n; o++)
        i.push(e.getX(0)), i.push(e.getX(o)), i.push(e.getX(o + 1))
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0
          ? (i.push(e.getX(o)), i.push(e.getX(o + 1)), i.push(e.getX(o + 2)))
          : (i.push(e.getX(o + 2)), i.push(e.getX(o + 1)), i.push(e.getX(o)))
    i.length / 3 !== n &&
      console.error(
        'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.',
      )
    const a = r.clone()
    return a.setIndex(i), a.clearGroups(), a
  } else
    return (
      console.error(
        'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:',
        t,
      ),
      r
    )
}
class aq extends fl {
  constructor(t) {
    super(t),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (e) {
        return new cq(e)
      }),
      this.register(function (e) {
        return new hq(e)
      }),
      this.register(function (e) {
        return new xq(e)
      }),
      this.register(function (e) {
        return new Sq(e)
      }),
      this.register(function (e) {
        return new Aq(e)
      }),
      this.register(function (e) {
        return new dq(e)
      }),
      this.register(function (e) {
        return new pq(e)
      }),
      this.register(function (e) {
        return new vq(e)
      }),
      this.register(function (e) {
        return new gq(e)
      }),
      this.register(function (e) {
        return new uq(e)
      }),
      this.register(function (e) {
        return new mq(e)
      }),
      this.register(function (e) {
        return new fq(e)
      }),
      this.register(function (e) {
        return new _q(e)
      }),
      this.register(function (e) {
        return new yq(e)
      }),
      this.register(function (e) {
        return new sq(e)
      }),
      this.register(function (e) {
        return new bq(e)
      }),
      this.register(function (e) {
        return new wq(e)
      })
  }
  load(t, e, n, i) {
    const a = this
    let o
    if (this.resourcePath !== '') o = this.resourcePath
    else if (this.path !== '') {
      const u = Kd.extractUrlBase(t)
      o = Kd.resolveURL(u, this.path)
    } else o = Kd.extractUrlBase(t)
    this.manager.itemStart(t)
    const s = function (u) {
        i ? i(u) : console.error(u),
          a.manager.itemError(t),
          a.manager.itemEnd(t)
      },
      l = new wp(this.manager)
    l.setPath(this.path),
      l.setResponseType('arraybuffer'),
      l.setRequestHeader(this.requestHeader),
      l.setWithCredentials(this.withCredentials),
      l.load(
        t,
        function (u) {
          try {
            a.parse(
              u,
              o,
              function (c) {
                e(c), a.manager.itemEnd(t)
              },
              s,
            )
          } catch (c) {
            s(c)
          }
        },
        n,
        s,
      )
  }
  setDRACOLoader(t) {
    return (this.dracoLoader = t), this
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".',
    )
  }
  setKTX2Loader(t) {
    return (this.ktx2Loader = t), this
  }
  setMeshoptDecoder(t) {
    return (this.meshoptDecoder = t), this
  }
  register(t) {
    return (
      this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t),
      this
    )
  }
  unregister(t) {
    return (
      this.pluginCallbacks.indexOf(t) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1),
      this
    )
  }
  parse(t, e, n, i) {
    let a
    const o = {},
      s = {},
      l = new TextDecoder()
    if (typeof t == 'string') a = JSON.parse(t)
    else if (t instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(t, 0, 4)) === IB) {
        try {
          o[Me.KHR_BINARY_GLTF] = new Mq(t)
        } catch (h) {
          i && i(h)
          return
        }
        a = JSON.parse(o[Me.KHR_BINARY_GLTF].content)
      } else a = JSON.parse(l.decode(t))
    else a = t
    if (a.asset === void 0 || a.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.',
          ),
        )
      return
    }
    const u = new Fq(a, {
      path: e || this.resourcePath || '',
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    })
    u.fileLoader.setRequestHeader(this.requestHeader)
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const h = this.pluginCallbacks[c](u)
      h.name ||
        console.error('THREE.GLTFLoader: Invalid plugin found: missing name'),
        (s[h.name] = h),
        (o[h.name] = !0)
    }
    if (a.extensionsUsed)
      for (let c = 0; c < a.extensionsUsed.length; ++c) {
        const h = a.extensionsUsed[c],
          f = a.extensionsRequired || []
        switch (h) {
          case Me.KHR_MATERIALS_UNLIT:
            o[h] = new lq()
            break
          case Me.KHR_DRACO_MESH_COMPRESSION:
            o[h] = new Tq(a, this.dracoLoader)
            break
          case Me.KHR_TEXTURE_TRANSFORM:
            o[h] = new Cq()
            break
          case Me.KHR_MESH_QUANTIZATION:
            o[h] = new Eq()
            break
          default:
            f.indexOf(h) >= 0 &&
              s[h] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".')
        }
      }
    u.setExtensions(o), u.setPlugins(s), u.parse(n, i)
  }
  parseAsync(t, e) {
    const n = this
    return new Promise(function (i, a) {
      n.parse(t, e, i, a)
    })
  }
}
function oq() {
  let r = {}
  return {
    get: function (t) {
      return r[t]
    },
    add: function (t, e) {
      r[t] = e
    },
    remove: function (t) {
      delete r[t]
    },
    removeAll: function () {
      r = {}
    },
  }
}
const Me = {
  KHR_BINARY_GLTF: 'KHR_binary_glTF',
  KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
  KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
  KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
  KHR_MATERIALS_DISPERSION: 'KHR_materials_dispersion',
  KHR_MATERIALS_IOR: 'KHR_materials_ior',
  KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
  KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
  KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
  KHR_MATERIALS_IRIDESCENCE: 'KHR_materials_iridescence',
  KHR_MATERIALS_ANISOTROPY: 'KHR_materials_anisotropy',
  KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
  KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
  KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
  KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
  KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
  KHR_MATERIALS_EMISSIVE_STRENGTH: 'KHR_materials_emissive_strength',
  EXT_MATERIALS_BUMP: 'EXT_materials_bump',
  EXT_TEXTURE_WEBP: 'EXT_texture_webp',
  EXT_TEXTURE_AVIF: 'EXT_texture_avif',
  EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression',
  EXT_MESH_GPU_INSTANCING: 'EXT_mesh_gpu_instancing',
}
class sq {
  constructor(t) {
    ;(this.parser = t),
      (this.name = Me.KHR_LIGHTS_PUNCTUAL),
      (this.cache = {
        refs: {},
        uses: {},
      })
  }
  _markDefs() {
    const t = this.parser,
      e = this.parser.json.nodes || []
    for (let n = 0, i = e.length; n < i; n++) {
      const a = e[n]
      a.extensions &&
        a.extensions[this.name] &&
        a.extensions[this.name].light !== void 0 &&
        t._addNodeRef(this.cache, a.extensions[this.name].light)
    }
  }
  _loadLight(t) {
    const e = this.parser,
      n = 'light:' + t
    let i = e.cache.get(n)
    if (i) return i
    const a = e.json,
      l = (((a.extensions && a.extensions[this.name]) || {}).lights || [])[t]
    let u
    const c = new qt(16777215)
    l.color !== void 0 && c.setRGB(l.color[0], l.color[1], l.color[2], ar)
    const h = l.range !== void 0 ? l.range : 0
    switch (l.type) {
      case 'directional':
        ;(u = new Ay(c)), u.target.position.set(0, 0, -1), u.add(u.target)
        break
      case 'point':
        ;(u = new z$(c)), (u.distance = h)
        break
      case 'spot':
        ;(u = new B$(c)),
          (u.distance = h),
          (l.spot = l.spot || {}),
          (l.spot.innerConeAngle =
            l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0),
          (l.spot.outerConeAngle =
            l.spot.outerConeAngle !== void 0
              ? l.spot.outerConeAngle
              : Math.PI / 4),
          (u.angle = l.spot.outerConeAngle),
          (u.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle),
          u.target.position.set(0, 0, -1),
          u.add(u.target)
        break
      default:
        throw new Error('THREE.GLTFLoader: Unexpected light type: ' + l.type)
    }
    return (
      u.position.set(0, 0, 0),
      (u.decay = 2),
      Ro(u, l),
      l.intensity !== void 0 && (u.intensity = l.intensity),
      (u.name = e.createUniqueName(l.name || 'light_' + t)),
      (i = Promise.resolve(u)),
      e.cache.add(n, i),
      i
    )
  }
  getDependency(t, e) {
    if (t === 'light') return this._loadLight(e)
  }
  createNodeAttachment(t) {
    const e = this,
      n = this.parser,
      a = n.json.nodes[t],
      s = ((a.extensions && a.extensions[this.name]) || {}).light
    return s === void 0
      ? null
      : this._loadLight(s).then(function (l) {
          return n._getNodeRef(e.cache, s, l)
        })
  }
}
class lq {
  constructor() {
    this.name = Me.KHR_MATERIALS_UNLIT
  }
  getMaterialType() {
    return on
  }
  extendParams(t, e, n) {
    const i = []
    ;(t.color = new qt(1, 1, 1)), (t.opacity = 1)
    const a = e.pbrMetallicRoughness
    if (a) {
      if (Array.isArray(a.baseColorFactor)) {
        const o = a.baseColorFactor
        t.color.setRGB(o[0], o[1], o[2], ar), (t.opacity = o[3])
      }
      a.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(t, 'map', a.baseColorTexture, cn))
    }
    return Promise.all(i)
  }
}
class uq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_EMISSIVE_STRENGTH)
  }
  extendMaterialParams(t, e) {
    const i = this.parser.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = i.extensions[this.name].emissiveStrength
    return a !== void 0 && (e.emissiveIntensity = a), Promise.resolve()
  }
}
class cq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_CLEARCOAT)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = [],
      o = i.extensions[this.name]
    if (
      (o.clearcoatFactor !== void 0 && (e.clearcoat = o.clearcoatFactor),
      o.clearcoatTexture !== void 0 &&
        a.push(n.assignTexture(e, 'clearcoatMap', o.clearcoatTexture)),
      o.clearcoatRoughnessFactor !== void 0 &&
        (e.clearcoatRoughness = o.clearcoatRoughnessFactor),
      o.clearcoatRoughnessTexture !== void 0 &&
        a.push(
          n.assignTexture(
            e,
            'clearcoatRoughnessMap',
            o.clearcoatRoughnessTexture,
          ),
        ),
      o.clearcoatNormalTexture !== void 0 &&
        (a.push(
          n.assignTexture(e, 'clearcoatNormalMap', o.clearcoatNormalTexture),
        ),
        o.clearcoatNormalTexture.scale !== void 0))
    ) {
      const s = o.clearcoatNormalTexture.scale
      e.clearcoatNormalScale = new pt(s, s)
    }
    return Promise.all(a)
  }
}
class hq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_DISPERSION)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const i = this.parser.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = i.extensions[this.name]
    return (
      (e.dispersion = a.dispersion !== void 0 ? a.dispersion : 0),
      Promise.resolve()
    )
  }
}
class fq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_IRIDESCENCE)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = [],
      o = i.extensions[this.name]
    return (
      o.iridescenceFactor !== void 0 && (e.iridescence = o.iridescenceFactor),
      o.iridescenceTexture !== void 0 &&
        a.push(n.assignTexture(e, 'iridescenceMap', o.iridescenceTexture)),
      o.iridescenceIor !== void 0 && (e.iridescenceIOR = o.iridescenceIor),
      e.iridescenceThicknessRange === void 0 &&
        (e.iridescenceThicknessRange = [100, 400]),
      o.iridescenceThicknessMinimum !== void 0 &&
        (e.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum),
      o.iridescenceThicknessMaximum !== void 0 &&
        (e.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum),
      o.iridescenceThicknessTexture !== void 0 &&
        a.push(
          n.assignTexture(
            e,
            'iridescenceThicknessMap',
            o.iridescenceThicknessTexture,
          ),
        ),
      Promise.all(a)
    )
  }
}
class dq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_SHEEN)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = []
    ;(e.sheenColor = new qt(0, 0, 0)), (e.sheenRoughness = 0), (e.sheen = 1)
    const o = i.extensions[this.name]
    if (o.sheenColorFactor !== void 0) {
      const s = o.sheenColorFactor
      e.sheenColor.setRGB(s[0], s[1], s[2], ar)
    }
    return (
      o.sheenRoughnessFactor !== void 0 &&
        (e.sheenRoughness = o.sheenRoughnessFactor),
      o.sheenColorTexture !== void 0 &&
        a.push(n.assignTexture(e, 'sheenColorMap', o.sheenColorTexture, cn)),
      o.sheenRoughnessTexture !== void 0 &&
        a.push(
          n.assignTexture(e, 'sheenRoughnessMap', o.sheenRoughnessTexture),
        ),
      Promise.all(a)
    )
  }
}
class pq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_TRANSMISSION)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = [],
      o = i.extensions[this.name]
    return (
      o.transmissionFactor !== void 0 &&
        (e.transmission = o.transmissionFactor),
      o.transmissionTexture !== void 0 &&
        a.push(n.assignTexture(e, 'transmissionMap', o.transmissionTexture)),
      Promise.all(a)
    )
  }
}
class vq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_VOLUME)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = [],
      o = i.extensions[this.name]
    ;(e.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0),
      o.thicknessTexture !== void 0 &&
        a.push(n.assignTexture(e, 'thicknessMap', o.thicknessTexture)),
      (e.attenuationDistance = o.attenuationDistance || 1 / 0)
    const s = o.attenuationColor || [1, 1, 1]
    return (
      (e.attenuationColor = new qt().setRGB(s[0], s[1], s[2], ar)),
      Promise.all(a)
    )
  }
}
class gq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_IOR)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const i = this.parser.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = i.extensions[this.name]
    return (e.ior = a.ior !== void 0 ? a.ior : 1.5), Promise.resolve()
  }
}
class mq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_SPECULAR)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = [],
      o = i.extensions[this.name]
    ;(e.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1),
      o.specularTexture !== void 0 &&
        a.push(n.assignTexture(e, 'specularIntensityMap', o.specularTexture))
    const s = o.specularColorFactor || [1, 1, 1]
    return (
      (e.specularColor = new qt().setRGB(s[0], s[1], s[2], ar)),
      o.specularColorTexture !== void 0 &&
        a.push(
          n.assignTexture(e, 'specularColorMap', o.specularColorTexture, cn),
        ),
      Promise.all(a)
    )
  }
}
class yq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.EXT_MATERIALS_BUMP)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = [],
      o = i.extensions[this.name]
    return (
      (e.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1),
      o.bumpTexture !== void 0 &&
        a.push(n.assignTexture(e, 'bumpMap', o.bumpTexture)),
      Promise.all(a)
    )
  }
}
class _q {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_MATERIALS_ANISOTROPY)
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t]
    return !n.extensions || !n.extensions[this.name] ? null : mo
  }
  extendMaterialParams(t, e) {
    const n = this.parser,
      i = n.json.materials[t]
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve()
    const a = [],
      o = i.extensions[this.name]
    return (
      o.anisotropyStrength !== void 0 && (e.anisotropy = o.anisotropyStrength),
      o.anisotropyRotation !== void 0 &&
        (e.anisotropyRotation = o.anisotropyRotation),
      o.anisotropyTexture !== void 0 &&
        a.push(n.assignTexture(e, 'anisotropyMap', o.anisotropyTexture)),
      Promise.all(a)
    )
  }
}
class xq {
  constructor(t) {
    ;(this.parser = t), (this.name = Me.KHR_TEXTURE_BASISU)
  }
  loadTexture(t) {
    const e = this.parser,
      n = e.json,
      i = n.textures[t]
    if (!i.extensions || !i.extensions[this.name]) return null
    const a = i.extensions[this.name],
      o = e.options.ktx2Loader
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures',
        )
      return null
    }
    return e.loadTextureImage(t, a.source, o)
  }
}
class Sq {
  constructor(t) {
    ;(this.parser = t),
      (this.name = Me.EXT_TEXTURE_WEBP),
      (this.isSupported = null)
  }
  loadTexture(t) {
    const e = this.name,
      n = this.parser,
      i = n.json,
      a = i.textures[t]
    if (!a.extensions || !a.extensions[e]) return null
    const o = a.extensions[e],
      s = i.images[o.source]
    let l = n.textureLoader
    if (s.uri) {
      const u = n.options.manager.getHandler(s.uri)
      u !== null && (l = u)
    }
    return this.detectSupport().then(function (u) {
      if (u) return n.loadTextureImage(t, o.source, l)
      if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0)
        throw new Error(
          'THREE.GLTFLoader: WebP required by asset but unsupported.',
        )
      return n.loadTexture(t)
    })
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (t) {
          const e = new Image()
          ;(e.src =
            'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'),
            (e.onload = e.onerror =
              function () {
                t(e.height === 1)
              })
        })),
      this.isSupported
    )
  }
}
class Aq {
  constructor(t) {
    ;(this.parser = t),
      (this.name = Me.EXT_TEXTURE_AVIF),
      (this.isSupported = null)
  }
  loadTexture(t) {
    const e = this.name,
      n = this.parser,
      i = n.json,
      a = i.textures[t]
    if (!a.extensions || !a.extensions[e]) return null
    const o = a.extensions[e],
      s = i.images[o.source]
    let l = n.textureLoader
    if (s.uri) {
      const u = n.options.manager.getHandler(s.uri)
      u !== null && (l = u)
    }
    return this.detectSupport().then(function (u) {
      if (u) return n.loadTextureImage(t, o.source, l)
      if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0)
        throw new Error(
          'THREE.GLTFLoader: AVIF required by asset but unsupported.',
        )
      return n.loadTexture(t)
    })
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (t) {
          const e = new Image()
          ;(e.src =
            'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI='),
            (e.onload = e.onerror =
              function () {
                t(e.height === 1)
              })
        })),
      this.isSupported
    )
  }
}
class bq {
  constructor(t) {
    ;(this.name = Me.EXT_MESHOPT_COMPRESSION), (this.parser = t)
  }
  loadBufferView(t) {
    const e = this.parser.json,
      n = e.bufferViews[t]
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        a = this.parser.getDependency('buffer', i.buffer),
        o = this.parser.options.meshoptDecoder
      if (!o || !o.supported) {
        if (
          e.extensionsRequired &&
          e.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files',
          )
        return null
      }
      return a.then(function (s) {
        const l = i.byteOffset || 0,
          u = i.byteLength || 0,
          c = i.count,
          h = i.byteStride,
          f = new Uint8Array(s, l, u)
        return o.decodeGltfBufferAsync
          ? o
              .decodeGltfBufferAsync(c, h, f, i.mode, i.filter)
              .then(function (d) {
                return d.buffer
              })
          : o.ready.then(function () {
              const d = new ArrayBuffer(c * h)
              return (
                o.decodeGltfBuffer(
                  new Uint8Array(d),
                  c,
                  h,
                  f,
                  i.mode,
                  i.filter,
                ),
                d
              )
            })
      })
    } else return null
  }
}
class wq {
  constructor(t) {
    ;(this.name = Me.EXT_MESH_GPU_INSTANCING), (this.parser = t)
  }
  createNodeMesh(t) {
    const e = this.parser.json,
      n = e.nodes[t]
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null
    const i = e.meshes[n.mesh]
    for (const u of i.primitives)
      if (
        u.mode !== Bi.TRIANGLES &&
        u.mode !== Bi.TRIANGLE_STRIP &&
        u.mode !== Bi.TRIANGLE_FAN &&
        u.mode !== void 0
      )
        return null
    const o = n.extensions[this.name].attributes,
      s = [],
      l = {}
    for (const u in o)
      s.push(
        this.parser
          .getDependency('accessor', o[u])
          .then(c => ((l[u] = c), l[u])),
      )
    return s.length < 1
      ? null
      : (s.push(this.parser.createNodeMesh(t)),
        Promise.all(s).then(u => {
          const c = u.pop(),
            h = c.isGroup ? c.children : [c],
            f = u[0].count,
            d = []
          for (const p of h) {
            const g = new ae(),
              v = new U(),
              m = new wa(),
              y = new U(1, 1, 1),
              _ = new XY(p.geometry, p.material, f)
            for (let x = 0; x < f; x++)
              l.TRANSLATION && v.fromBufferAttribute(l.TRANSLATION, x),
                l.ROTATION && m.fromBufferAttribute(l.ROTATION, x),
                l.SCALE && y.fromBufferAttribute(l.SCALE, x),
                _.setMatrixAt(x, g.compose(v, m, y))
            for (const x in l)
              if (x === '_COLOR_0') {
                const A = l[x]
                _.instanceColor = new qA(A.array, A.itemSize, A.normalized)
              } else
                x !== 'TRANSLATION' &&
                  x !== 'ROTATION' &&
                  x !== 'SCALE' &&
                  p.geometry.setAttribute(x, l[x])
            Fe.prototype.copy.call(_, p),
              this.parser.assignFinalMaterial(_),
              d.push(_)
          }
          return c.isGroup ? (c.clear(), c.add(...d), c) : d[0]
        }))
  }
}
const IB = 'glTF',
  $f = 12,
  TD = {
    JSON: 1313821514,
    BIN: 5130562,
  }
class Mq {
  constructor(t) {
    ;(this.name = Me.KHR_BINARY_GLTF), (this.content = null), (this.body = null)
    const e = new DataView(t, 0, $f),
      n = new TextDecoder()
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(t.slice(0, 4))),
        version: e.getUint32(4, !0),
        length: e.getUint32(8, !0),
      }),
      this.header.magic !== IB)
    )
      throw new Error('THREE.GLTFLoader: Unsupported glTF-Binary header.')
    if (this.header.version < 2)
      throw new Error('THREE.GLTFLoader: Legacy binary file detected.')
    const i = this.header.length - $f,
      a = new DataView(t, $f)
    let o = 0
    for (; o < i; ) {
      const s = a.getUint32(o, !0)
      o += 4
      const l = a.getUint32(o, !0)
      if (((o += 4), l === TD.JSON)) {
        const u = new Uint8Array(t, $f + o, s)
        this.content = n.decode(u)
      } else if (l === TD.BIN) {
        const u = $f + o
        this.body = t.slice(u, u + s)
      }
      o += s
    }
    if (this.content === null)
      throw new Error('THREE.GLTFLoader: JSON content not found.')
  }
}
class Tq {
  constructor(t, e) {
    if (!e)
      throw new Error('THREE.GLTFLoader: No DRACOLoader instance provided.')
    ;(this.name = Me.KHR_DRACO_MESH_COMPRESSION),
      (this.json = t),
      (this.dracoLoader = e),
      this.dracoLoader.preload()
  }
  decodePrimitive(t, e) {
    const n = this.json,
      i = this.dracoLoader,
      a = t.extensions[this.name].bufferView,
      o = t.extensions[this.name].attributes,
      s = {},
      l = {},
      u = {}
    for (const c in o) {
      const h = tb[c] || c.toLowerCase()
      s[h] = o[c]
    }
    for (const c in t.attributes) {
      const h = tb[c] || c.toLowerCase()
      if (o[c] !== void 0) {
        const f = n.accessors[t.attributes[c]],
          d = Ch[f.componentType]
        ;(u[h] = d.name), (l[h] = f.normalized === !0)
      }
    }
    return e.getDependency('bufferView', a).then(function (c) {
      return new Promise(function (h, f) {
        i.decodeDracoFile(
          c,
          function (d) {
            for (const p in d.attributes) {
              const g = d.attributes[p],
                v = l[p]
              v !== void 0 && (g.normalized = v)
            }
            h(d)
          },
          s,
          u,
          ar,
          f,
        )
      })
    })
  }
}
class Cq {
  constructor() {
    this.name = Me.KHR_TEXTURE_TRANSFORM
  }
  extendTexture(t, e) {
    return (
      ((e.texCoord === void 0 || e.texCoord === t.channel) &&
        e.offset === void 0 &&
        e.rotation === void 0 &&
        e.scale === void 0) ||
        ((t = t.clone()),
        e.texCoord !== void 0 && (t.channel = e.texCoord),
        e.offset !== void 0 && t.offset.fromArray(e.offset),
        e.rotation !== void 0 && (t.rotation = e.rotation),
        e.scale !== void 0 && t.repeat.fromArray(e.scale),
        (t.needsUpdate = !0)),
      t
    )
  }
}
class Eq {
  constructor() {
    this.name = Me.KHR_MESH_QUANTIZATION
  }
}
class OB extends pv {
  constructor(t, e, n, i) {
    super(t, e, n, i)
  }
  copySampleValue_(t) {
    const e = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      a = t * i * 3 + i
    for (let o = 0; o !== i; o++) e[o] = n[a + o]
    return e
  }
  interpolate_(t, e, n, i) {
    const a = this.resultBuffer,
      o = this.sampleValues,
      s = this.valueSize,
      l = s * 2,
      u = s * 3,
      c = i - e,
      h = (n - e) / c,
      f = h * h,
      d = f * h,
      p = t * u,
      g = p - u,
      v = -2 * d + 3 * f,
      m = d - f,
      y = 1 - v,
      _ = m - f + h
    for (let x = 0; x !== s; x++) {
      const A = o[g + x + s],
        S = o[g + x + l] * c,
        b = o[p + x + s],
        T = o[p + x] * c
      a[x] = y * A + _ * S + v * b + m * T
    }
    return a
  }
}
const Dq = new wa()
class Lq extends OB {
  interpolate_(t, e, n, i) {
    const a = super.interpolate_(t, e, n, i)
    return Dq.fromArray(a).normalize().toArray(a), a
  }
}
const Bi = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Ch = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  CD = {
    9728: Ur,
    9729: gi,
    9984: Bk,
    9985: Im,
    9986: Cd,
    9987: Fo,
  },
  ED = {
    33071: Ps,
    33648: py,
    10497: Jn,
  },
  mx = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16,
  },
  tb = {
    POSITION: 'position',
    NORMAL: 'normal',
    TANGENT: 'tangent',
    TEXCOORD_0: 'uv',
    TEXCOORD_1: 'uv1',
    TEXCOORD_2: 'uv2',
    TEXCOORD_3: 'uv3',
    COLOR_0: 'color',
    WEIGHTS_0: 'skinWeight',
    JOINTS_0: 'skinIndex',
  },
  vs = {
    scale: 'scale',
    translation: 'position',
    rotation: 'quaternion',
    weights: 'morphTargetInfluences',
  },
  Pq = {
    CUBICSPLINE: void 0,
    LINEAR: yp,
    STEP: mp,
  },
  yx = {
    OPAQUE: 'OPAQUE',
    MASK: 'MASK',
    BLEND: 'BLEND',
  }
function Rq(r) {
  return (
    r.DefaultMaterial === void 0 &&
      (r.DefaultMaterial = new Th({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: $o,
      })),
    r.DefaultMaterial
  )
}
function Tl(r, t, e) {
  for (const n in e.extensions)
    r[n] === void 0 &&
      ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
      (t.userData.gltfExtensions[n] = e.extensions[n]))
}
function Ro(r, t) {
  t.extras !== void 0 &&
    (typeof t.extras == 'object'
      ? Object.assign(r.userData, t.extras)
      : console.warn(
          'THREE.GLTFLoader: Ignoring primitive type .extras, ' + t.extras,
        ))
}
function Iq(r, t, e) {
  let n = !1,
    i = !1,
    a = !1
  for (let u = 0, c = t.length; u < c; u++) {
    const h = t[u]
    if (
      (h.POSITION !== void 0 && (n = !0),
      h.NORMAL !== void 0 && (i = !0),
      h.COLOR_0 !== void 0 && (a = !0),
      n && i && a)
    )
      break
  }
  if (!n && !i && !a) return Promise.resolve(r)
  const o = [],
    s = [],
    l = []
  for (let u = 0, c = t.length; u < c; u++) {
    const h = t[u]
    if (n) {
      const f =
        h.POSITION !== void 0
          ? e.getDependency('accessor', h.POSITION)
          : r.attributes.position
      o.push(f)
    }
    if (i) {
      const f =
        h.NORMAL !== void 0
          ? e.getDependency('accessor', h.NORMAL)
          : r.attributes.normal
      s.push(f)
    }
    if (a) {
      const f =
        h.COLOR_0 !== void 0
          ? e.getDependency('accessor', h.COLOR_0)
          : r.attributes.color
      l.push(f)
    }
  }
  return Promise.all([Promise.all(o), Promise.all(s), Promise.all(l)]).then(
    function (u) {
      const c = u[0],
        h = u[1],
        f = u[2]
      return (
        n && (r.morphAttributes.position = c),
        i && (r.morphAttributes.normal = h),
        a && (r.morphAttributes.color = f),
        (r.morphTargetsRelative = !0),
        r
      )
    },
  )
}
function Oq(r, t) {
  if ((r.updateMorphTargets(), t.weights !== void 0))
    for (let e = 0, n = t.weights.length; e < n; e++)
      r.morphTargetInfluences[e] = t.weights[e]
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const e = t.extras.targetNames
    if (r.morphTargetInfluences.length === e.length) {
      r.morphTargetDictionary = {}
      for (let n = 0, i = e.length; n < i; n++)
        r.morphTargetDictionary[e[n]] = n
    } else
      console.warn(
        'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.',
      )
  }
}
function Nq(r) {
  let t
  const e = r.extensions && r.extensions[Me.KHR_DRACO_MESH_COMPRESSION]
  if (
    (e
      ? (t = 'draco:' + e.bufferView + ':' + e.indices + ':' + _x(e.attributes))
      : (t = r.indices + ':' + _x(r.attributes) + ':' + r.mode),
    r.targets !== void 0)
  )
    for (let n = 0, i = r.targets.length; n < i; n++)
      t += ':' + _x(r.targets[n])
  return t
}
function _x(r) {
  let t = ''
  const e = Object.keys(r).sort()
  for (let n = 0, i = e.length; n < i; n++) t += e[n] + ':' + r[e[n]] + ';'
  return t
}
function eb(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127
    case Uint8Array:
      return 1 / 255
    case Int16Array:
      return 1 / 32767
    case Uint16Array:
      return 1 / 65535
    default:
      throw new Error(
        'THREE.GLTFLoader: Unsupported normalized accessor component type.',
      )
  }
}
function kq(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0
    ? 'image/jpeg'
    : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0
    ? 'image/webp'
    : 'image/png'
}
const Bq = new ae()
class Fq {
  constructor(t = {}, e = {}) {
    ;(this.json = t),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = e),
      (this.cache = new oq()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = {
        refs: {},
        uses: {},
      }),
      (this.cameraCache = {
        refs: {},
        uses: {},
      }),
      (this.lightCache = {
        refs: {},
        uses: {},
      }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {})
    let n = !1,
      i = -1,
      a = !1,
      o = -1
    if (typeof navigator < 'u') {
      const s = navigator.userAgent
      n = /^((?!chrome|android).)*safari/i.test(s) === !0
      const l = s.match(/Version\/(\d+)/)
      ;(i = n && l ? parseInt(l[1], 10) : -1),
        (a = s.indexOf('Firefox') > -1),
        (o = a ? s.match(/Firefox\/([0-9]+)\./)[1] : -1)
    }
    typeof createImageBitmap > 'u' || (n && i < 17) || (a && o < 98)
      ? (this.textureLoader = new ZM(this.options.manager))
      : (this.textureLoader = new G$(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new wp(this.options.manager)),
      this.fileLoader.setResponseType('arraybuffer'),
      this.options.crossOrigin === 'use-credentials' &&
        this.fileLoader.setWithCredentials(!0)
  }
  setExtensions(t) {
    this.extensions = t
  }
  setPlugins(t) {
    this.plugins = t
  }
  parse(t, e) {
    const n = this,
      i = this.json,
      a = this.extensions
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (o) {
        return o._markDefs && o._markDefs()
      }),
      Promise.all(
        this._invokeAll(function (o) {
          return o.beforeRoot && o.beforeRoot()
        }),
      )
        .then(function () {
          return Promise.all([
            n.getDependencies('scene'),
            n.getDependencies('animation'),
            n.getDependencies('camera'),
          ])
        })
        .then(function (o) {
          const s = {
            scene: o[0][i.scene || 0],
            scenes: o[0],
            animations: o[1],
            cameras: o[2],
            asset: i.asset,
            parser: n,
            userData: {},
          }
          return (
            Tl(a, s, i),
            Ro(s, i),
            Promise.all(
              n._invokeAll(function (l) {
                return l.afterRoot && l.afterRoot(s)
              }),
            ).then(function () {
              for (const l of s.scenes) l.updateMatrixWorld()
              t(s)
            })
          )
        })
        .catch(e)
  }
  _markDefs() {
    const t = this.json.nodes || [],
      e = this.json.skins || [],
      n = this.json.meshes || []
    for (let i = 0, a = e.length; i < a; i++) {
      const o = e[i].joints
      for (let s = 0, l = o.length; s < l; s++) t[o[s]].isBone = !0
    }
    for (let i = 0, a = t.length; i < a; i++) {
      const o = t[i]
      o.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, o.mesh),
        o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)),
        o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera)
    }
  }
  _addNodeRef(t, e) {
    e !== void 0 &&
      (t.refs[e] === void 0 && (t.refs[e] = t.uses[e] = 0), t.refs[e]++)
  }
  _getNodeRef(t, e, n) {
    if (t.refs[e] <= 1) return n
    const i = n.clone(),
      a = (o, s) => {
        const l = this.associations.get(o)
        l != null && this.associations.set(s, l)
        for (const [u, c] of o.children.entries()) a(c, s.children[u])
      }
    return a(n, i), (i.name += '_instance_' + t.uses[e]++), i
  }
  _invokeOne(t) {
    const e = Object.values(this.plugins)
    e.push(this)
    for (let n = 0; n < e.length; n++) {
      const i = t(e[n])
      if (i) return i
    }
    return null
  }
  _invokeAll(t) {
    const e = Object.values(this.plugins)
    e.unshift(this)
    const n = []
    for (let i = 0; i < e.length; i++) {
      const a = t(e[i])
      a && n.push(a)
    }
    return n
  }
  getDependency(t, e) {
    const n = t + ':' + e
    let i = this.cache.get(n)
    if (!i) {
      switch (t) {
        case 'scene':
          i = this.loadScene(e)
          break
        case 'node':
          i = this._invokeOne(function (a) {
            return a.loadNode && a.loadNode(e)
          })
          break
        case 'mesh':
          i = this._invokeOne(function (a) {
            return a.loadMesh && a.loadMesh(e)
          })
          break
        case 'accessor':
          i = this.loadAccessor(e)
          break
        case 'bufferView':
          i = this._invokeOne(function (a) {
            return a.loadBufferView && a.loadBufferView(e)
          })
          break
        case 'buffer':
          i = this.loadBuffer(e)
          break
        case 'material':
          i = this._invokeOne(function (a) {
            return a.loadMaterial && a.loadMaterial(e)
          })
          break
        case 'texture':
          i = this._invokeOne(function (a) {
            return a.loadTexture && a.loadTexture(e)
          })
          break
        case 'skin':
          i = this.loadSkin(e)
          break
        case 'animation':
          i = this._invokeOne(function (a) {
            return a.loadAnimation && a.loadAnimation(e)
          })
          break
        case 'camera':
          i = this.loadCamera(e)
          break
        default:
          if (
            ((i = this._invokeOne(function (a) {
              return a != this && a.getDependency && a.getDependency(t, e)
            })),
            !i)
          )
            throw new Error('Unknown type: ' + t)
          break
      }
      this.cache.add(n, i)
    }
    return i
  }
  getDependencies(t) {
    let e = this.cache.get(t)
    if (!e) {
      const n = this,
        i = this.json[t + (t === 'mesh' ? 'es' : 's')] || []
      ;(e = Promise.all(
        i.map(function (a, o) {
          return n.getDependency(t, o)
        }),
      )),
        this.cache.add(t, e)
    }
    return e
  }
  loadBuffer(t) {
    const e = this.json.buffers[t],
      n = this.fileLoader
    if (e.type && e.type !== 'arraybuffer')
      throw new Error(
        'THREE.GLTFLoader: ' + e.type + ' buffer type is not supported.',
      )
    if (e.uri === void 0 && t === 0)
      return Promise.resolve(this.extensions[Me.KHR_BINARY_GLTF].body)
    const i = this.options
    return new Promise(function (a, o) {
      n.load(Kd.resolveURL(e.uri, i.path), a, void 0, function () {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'))
      })
    })
  }
  loadBufferView(t) {
    const e = this.json.bufferViews[t]
    return this.getDependency('buffer', e.buffer).then(function (n) {
      const i = e.byteLength || 0,
        a = e.byteOffset || 0
      return n.slice(a, a + i)
    })
  }
  loadAccessor(t) {
    const e = this,
      n = this.json,
      i = this.json.accessors[t]
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = mx[i.type],
        s = Ch[i.componentType],
        l = i.normalized === !0,
        u = new s(i.count * o)
      return Promise.resolve(new ir(u, o, l))
    }
    const a = []
    return (
      i.bufferView !== void 0
        ? a.push(this.getDependency('bufferView', i.bufferView))
        : a.push(null),
      i.sparse !== void 0 &&
        (a.push(this.getDependency('bufferView', i.sparse.indices.bufferView)),
        a.push(this.getDependency('bufferView', i.sparse.values.bufferView))),
      Promise.all(a).then(function (o) {
        const s = o[0],
          l = mx[i.type],
          u = Ch[i.componentType],
          c = u.BYTES_PER_ELEMENT,
          h = c * l,
          f = i.byteOffset || 0,
          d =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          p = i.normalized === !0
        let g, v
        if (d && d !== h) {
          const m = Math.floor(f / d),
            y =
              'InterleavedBuffer:' +
              i.bufferView +
              ':' +
              i.componentType +
              ':' +
              m +
              ':' +
              i.count
          let _ = e.cache.get(y)
          _ ||
            ((g = new u(s, m * d, (i.count * d) / c)),
            (_ = new UM(g, d / c)),
            e.cache.add(y, _)),
            (v = new _a(_, l, (f % d) / c, p))
        } else s === null ? (g = new u(i.count * l)) : (g = new u(s, f, i.count * l)), (v = new ir(g, l, p))
        if (i.sparse !== void 0) {
          const m = mx.SCALAR,
            y = Ch[i.sparse.indices.componentType],
            _ = i.sparse.indices.byteOffset || 0,
            x = i.sparse.values.byteOffset || 0,
            A = new y(o[1], _, i.sparse.count * m),
            S = new u(o[2], x, i.sparse.count * l)
          s !== null && (v = new ir(v.array.slice(), v.itemSize, v.normalized))
          for (let b = 0, T = A.length; b < T; b++) {
            const w = A[b]
            if (
              (v.setX(w, S[b * l]),
              l >= 2 && v.setY(w, S[b * l + 1]),
              l >= 3 && v.setZ(w, S[b * l + 2]),
              l >= 4 && v.setW(w, S[b * l + 3]),
              l >= 5)
            )
              throw new Error(
                'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.',
              )
          }
        }
        return v
      })
    )
  }
  loadTexture(t) {
    const e = this.json,
      n = this.options,
      a = e.textures[t].source,
      o = e.images[a]
    let s = this.textureLoader
    if (o.uri) {
      const l = n.manager.getHandler(o.uri)
      l !== null && (s = l)
    }
    return this.loadTextureImage(t, a, s)
  }
  loadTextureImage(t, e, n) {
    const i = this,
      a = this.json,
      o = a.textures[t],
      s = a.images[e],
      l = (s.uri || s.bufferView) + ':' + o.sampler
    if (this.textureCache[l]) return this.textureCache[l]
    const u = this.loadImageSource(e, n)
      .then(function (c) {
        ;(c.flipY = !1),
          (c.name = o.name || s.name || ''),
          c.name === '' &&
            typeof s.uri == 'string' &&
            s.uri.startsWith('data:image/') === !1 &&
            (c.name = s.uri)
        const f = (a.samplers || {})[o.sampler] || {}
        return (
          (c.magFilter = CD[f.magFilter] || gi),
          (c.minFilter = CD[f.minFilter] || Fo),
          (c.wrapS = ED[f.wrapS] || Jn),
          (c.wrapT = ED[f.wrapT] || Jn),
          i.associations.set(c, {
            textures: t,
          }),
          c
        )
      })
      .catch(function () {
        return null
      })
    return (this.textureCache[l] = u), u
  }
  loadImageSource(t, e) {
    const n = this,
      i = this.json,
      a = this.options
    if (this.sourceCache[t] !== void 0)
      return this.sourceCache[t].then(h => h.clone())
    const o = i.images[t],
      s = self.URL || self.webkitURL
    let l = o.uri || '',
      u = !1
    if (o.bufferView !== void 0)
      l = n.getDependency('bufferView', o.bufferView).then(function (h) {
        u = !0
        const f = new Blob([h], {
          type: o.mimeType,
        })
        return (l = s.createObjectURL(f)), l
      })
    else if (o.uri === void 0)
      throw new Error(
        'THREE.GLTFLoader: Image ' + t + ' is missing URI and bufferView',
      )
    const c = Promise.resolve(l)
      .then(function (h) {
        return new Promise(function (f, d) {
          let p = f
          e.isImageBitmapLoader === !0 &&
            (p = function (g) {
              const v = new Yn(g)
              ;(v.needsUpdate = !0), f(v)
            }),
            e.load(Kd.resolveURL(h, a.path), p, void 0, d)
        })
      })
      .then(function (h) {
        return (
          u === !0 && s.revokeObjectURL(l),
          Ro(h, o),
          (h.userData.mimeType = o.mimeType || kq(o.uri)),
          h
        )
      })
      .catch(function (h) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", l), h)
      })
    return (this.sourceCache[t] = c), c
  }
  assignTexture(t, e, n, i) {
    const a = this
    return this.getDependency('texture', n.index).then(function (o) {
      if (!o) return null
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((o = o.clone()), (o.channel = n.texCoord)),
        a.extensions[Me.KHR_TEXTURE_TRANSFORM])
      ) {
        const s =
          n.extensions !== void 0
            ? n.extensions[Me.KHR_TEXTURE_TRANSFORM]
            : void 0
        if (s) {
          const l = a.associations.get(o)
          ;(o = a.extensions[Me.KHR_TEXTURE_TRANSFORM].extendTexture(o, s)),
            a.associations.set(o, l)
        }
      }
      return i !== void 0 && (o.colorSpace = i), (t[e] = o), o
    })
  }
  assignFinalMaterial(t) {
    const e = t.geometry
    let n = t.material
    const i = e.attributes.tangent === void 0,
      a = e.attributes.color !== void 0,
      o = e.attributes.normal === void 0
    if (t.isPoints) {
      const s = 'PointsMaterial:' + n.uuid
      let l = this.cache.get(s)
      l ||
        ((l = new HM()),
        ji.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        (l.sizeAttenuation = !1),
        this.cache.add(s, l)),
        (n = l)
    } else if (t.isLine) {
      const s = 'LineBasicMaterial:' + n.uuid
      let l = this.cache.get(s)
      l ||
        ((l = new dv()),
        ji.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        this.cache.add(s, l)),
        (n = l)
    }
    if (i || a || o) {
      let s = 'ClonedMaterial:' + n.uuid + ':'
      i && (s += 'derivative-tangents:'),
        a && (s += 'vertex-colors:'),
        o && (s += 'flat-shading:')
      let l = this.cache.get(s)
      l ||
        ((l = n.clone()),
        a && (l.vertexColors = !0),
        o && (l.flatShading = !0),
        i &&
          (l.normalScale && (l.normalScale.y *= -1),
          l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)),
        this.cache.add(s, l),
        this.associations.set(l, this.associations.get(n))),
        (n = l)
    }
    t.material = n
  }
  getMaterialType() {
    return Th
  }
  loadMaterial(t) {
    const e = this,
      n = this.json,
      i = this.extensions,
      a = n.materials[t]
    let o
    const s = {},
      l = a.extensions || {},
      u = []
    if (l[Me.KHR_MATERIALS_UNLIT]) {
      const h = i[Me.KHR_MATERIALS_UNLIT]
      ;(o = h.getMaterialType()), u.push(h.extendParams(s, a, e))
    } else {
      const h = a.pbrMetallicRoughness || {}
      if (
        ((s.color = new qt(1, 1, 1)),
        (s.opacity = 1),
        Array.isArray(h.baseColorFactor))
      ) {
        const f = h.baseColorFactor
        s.color.setRGB(f[0], f[1], f[2], ar), (s.opacity = f[3])
      }
      h.baseColorTexture !== void 0 &&
        u.push(e.assignTexture(s, 'map', h.baseColorTexture, cn)),
        (s.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1),
        (s.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1),
        h.metallicRoughnessTexture !== void 0 &&
          (u.push(
            e.assignTexture(s, 'metalnessMap', h.metallicRoughnessTexture),
          ),
          u.push(
            e.assignTexture(s, 'roughnessMap', h.metallicRoughnessTexture),
          )),
        (o = this._invokeOne(function (f) {
          return f.getMaterialType && f.getMaterialType(t)
        })),
        u.push(
          Promise.all(
            this._invokeAll(function (f) {
              return f.extendMaterialParams && f.extendMaterialParams(t, s)
            }),
          ),
        )
    }
    a.doubleSided === !0 && (s.side = dr)
    const c = a.alphaMode || yx.OPAQUE
    if (
      (c === yx.BLEND
        ? ((s.transparent = !0), (s.depthWrite = !1))
        : ((s.transparent = !1),
          c === yx.MASK &&
            (s.alphaTest = a.alphaCutoff !== void 0 ? a.alphaCutoff : 0.5)),
      a.normalTexture !== void 0 &&
        o !== on &&
        (u.push(e.assignTexture(s, 'normalMap', a.normalTexture)),
        (s.normalScale = new pt(1, 1)),
        a.normalTexture.scale !== void 0))
    ) {
      const h = a.normalTexture.scale
      s.normalScale.set(h, h)
    }
    if (
      (a.occlusionTexture !== void 0 &&
        o !== on &&
        (u.push(e.assignTexture(s, 'aoMap', a.occlusionTexture)),
        a.occlusionTexture.strength !== void 0 &&
          (s.aoMapIntensity = a.occlusionTexture.strength)),
      a.emissiveFactor !== void 0 && o !== on)
    ) {
      const h = a.emissiveFactor
      s.emissive = new qt().setRGB(h[0], h[1], h[2], ar)
    }
    return (
      a.emissiveTexture !== void 0 &&
        o !== on &&
        u.push(e.assignTexture(s, 'emissiveMap', a.emissiveTexture, cn)),
      Promise.all(u).then(function () {
        const h = new o(s)
        return (
          a.name && (h.name = a.name),
          Ro(h, a),
          e.associations.set(h, {
            materials: t,
          }),
          a.extensions && Tl(i, h, a),
          h
        )
      })
    )
  }
  createUniqueName(t) {
    const e = Xe.sanitizeNodeName(t || '')
    return e in this.nodeNamesUsed
      ? e + '_' + ++this.nodeNamesUsed[e]
      : ((this.nodeNamesUsed[e] = 0), e)
  }
  loadGeometries(t) {
    const e = this,
      n = this.extensions,
      i = this.primitiveCache
    function a(s) {
      return n[Me.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(s, e)
        .then(function (l) {
          return DD(l, s, e)
        })
    }
    const o = []
    for (let s = 0, l = t.length; s < l; s++) {
      const u = t[s],
        c = Nq(u),
        h = i[c]
      if (h) o.push(h.promise)
      else {
        let f
        u.extensions && u.extensions[Me.KHR_DRACO_MESH_COMPRESSION]
          ? (f = a(u))
          : (f = DD(new Mn(), u, e)),
          (i[c] = {
            primitive: u,
            promise: f,
          }),
          o.push(f)
      }
    }
    return Promise.all(o)
  }
  loadMesh(t) {
    const e = this,
      n = this.json,
      i = this.extensions,
      a = n.meshes[t],
      o = a.primitives,
      s = []
    for (let l = 0, u = o.length; l < u; l++) {
      const c =
        o[l].material === void 0
          ? Rq(this.cache)
          : this.getDependency('material', o[l].material)
      s.push(c)
    }
    return (
      s.push(e.loadGeometries(o)),
      Promise.all(s).then(function (l) {
        const u = l.slice(0, l.length - 1),
          c = l[l.length - 1],
          h = []
        for (let d = 0, p = c.length; d < p; d++) {
          const g = c[d],
            v = o[d]
          let m
          const y = u[d]
          if (
            v.mode === Bi.TRIANGLES ||
            v.mode === Bi.TRIANGLE_STRIP ||
            v.mode === Bi.TRIANGLE_FAN ||
            v.mode === void 0
          )
            (m = a.isSkinnedMesh === !0 ? new GY(g, y) : new De(g, y)),
              m.isSkinnedMesh === !0 && m.normalizeSkinWeights(),
              v.mode === Bi.TRIANGLE_STRIP
                ? (m.geometry = MD(m.geometry, $k))
                : v.mode === Bi.TRIANGLE_FAN &&
                  (m.geometry = MD(m.geometry, XA))
          else if (v.mode === Bi.LINES) m = new gB(g, y)
          else if (v.mode === Bi.LINE_STRIP) m = new GM(g, y)
          else if (v.mode === Bi.LINE_LOOP) m = new mB(g, y)
          else if (v.mode === Bi.POINTS) m = new yB(g, y)
          else
            throw new Error(
              'THREE.GLTFLoader: Primitive mode unsupported: ' + v.mode,
            )
          Object.keys(m.geometry.morphAttributes).length > 0 && Oq(m, a),
            (m.name = e.createUniqueName(a.name || 'mesh_' + t)),
            Ro(m, a),
            v.extensions && Tl(i, m, v),
            e.assignFinalMaterial(m),
            h.push(m)
        }
        for (let d = 0, p = h.length; d < p; d++)
          e.associations.set(h[d], {
            meshes: t,
            primitives: d,
          })
        if (h.length === 1) return a.extensions && Tl(i, h[0], a), h[0]
        const f = new un()
        a.extensions && Tl(i, f, a),
          e.associations.set(f, {
            meshes: t,
          })
        for (let d = 0, p = h.length; d < p; d++) f.add(h[d])
        return f
      })
    )
  }
  loadCamera(t) {
    let e
    const n = this.json.cameras[t],
      i = n[n.type]
    if (!i) {
      console.warn('THREE.GLTFLoader: Missing camera parameters.')
      return
    }
    return (
      n.type === 'perspective'
        ? (e = new wr(
            IM.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6,
          ))
        : n.type === 'orthographic' &&
          (e = new O0(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (e.name = this.createUniqueName(n.name)),
      Ro(e, n),
      Promise.resolve(e)
    )
  }
  loadSkin(t) {
    const e = this.json.skins[t],
      n = []
    for (let i = 0, a = e.joints.length; i < a; i++)
      n.push(this._loadNodeShallow(e.joints[i]))
    return (
      e.inverseBindMatrices !== void 0
        ? n.push(this.getDependency('accessor', e.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const a = i.pop(),
          o = i,
          s = [],
          l = []
        for (let u = 0, c = o.length; u < c; u++) {
          const h = o[u]
          if (h) {
            s.push(h)
            const f = new ae()
            a !== null && f.fromArray(a.array, u * 16), l.push(f)
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              e.joints[u],
            )
        }
        return new VM(s, l)
      })
    )
  }
  loadAnimation(t) {
    const e = this.json,
      n = this,
      i = e.animations[t],
      a = i.name ? i.name : 'animation_' + t,
      o = [],
      s = [],
      l = [],
      u = [],
      c = []
    for (let h = 0, f = i.channels.length; h < f; h++) {
      const d = i.channels[h],
        p = i.samplers[d.sampler],
        g = d.target,
        v = g.node,
        m = i.parameters !== void 0 ? i.parameters[p.input] : p.input,
        y = i.parameters !== void 0 ? i.parameters[p.output] : p.output
      g.node !== void 0 &&
        (o.push(this.getDependency('node', v)),
        s.push(this.getDependency('accessor', m)),
        l.push(this.getDependency('accessor', y)),
        u.push(p),
        c.push(g))
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(s),
      Promise.all(l),
      Promise.all(u),
      Promise.all(c),
    ]).then(function (h) {
      const f = h[0],
        d = h[1],
        p = h[2],
        g = h[3],
        v = h[4],
        m = []
      for (let y = 0, _ = f.length; y < _; y++) {
        const x = f[y],
          A = d[y],
          S = p[y],
          b = g[y],
          T = v[y]
        if (x === void 0) continue
        x.updateMatrix && x.updateMatrix()
        const w = n._createAnimationTracks(x, A, S, b, T)
        if (w) for (let M = 0; M < w.length; M++) m.push(w[M])
      }
      return new L$(a, void 0, m)
    })
  }
  createNodeMesh(t) {
    const e = this.json,
      n = this,
      i = e.nodes[t]
    return i.mesh === void 0
      ? null
      : n.getDependency('mesh', i.mesh).then(function (a) {
          const o = n._getNodeRef(n.meshCache, i.mesh, a)
          return (
            i.weights !== void 0 &&
              o.traverse(function (s) {
                if (s.isMesh)
                  for (let l = 0, u = i.weights.length; l < u; l++)
                    s.morphTargetInfluences[l] = i.weights[l]
              }),
            o
          )
        })
  }
  loadNode(t) {
    const e = this.json,
      n = this,
      i = e.nodes[t],
      a = n._loadNodeShallow(t),
      o = [],
      s = i.children || []
    for (let u = 0, c = s.length; u < c; u++)
      o.push(n.getDependency('node', s[u]))
    const l =
      i.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency('skin', i.skin)
    return Promise.all([a, Promise.all(o), l]).then(function (u) {
      const c = u[0],
        h = u[1],
        f = u[2]
      f !== null &&
        c.traverse(function (d) {
          d.isSkinnedMesh && d.bind(f, Bq)
        })
      for (let d = 0, p = h.length; d < p; d++) c.add(h[d])
      return c
    })
  }
  _loadNodeShallow(t) {
    const e = this.json,
      n = this.extensions,
      i = this
    if (this.nodeCache[t] !== void 0) return this.nodeCache[t]
    const a = e.nodes[t],
      o = a.name ? i.createUniqueName(a.name) : '',
      s = [],
      l = i._invokeOne(function (u) {
        return u.createNodeMesh && u.createNodeMesh(t)
      })
    return (
      l && s.push(l),
      a.camera !== void 0 &&
        s.push(
          i.getDependency('camera', a.camera).then(function (u) {
            return i._getNodeRef(i.cameraCache, a.camera, u)
          }),
        ),
      i
        ._invokeAll(function (u) {
          return u.createNodeAttachment && u.createNodeAttachment(t)
        })
        .forEach(function (u) {
          s.push(u)
        }),
      (this.nodeCache[t] = Promise.all(s).then(function (u) {
        let c
        if (
          (a.isBone === !0
            ? (c = new pB())
            : u.length > 1
            ? (c = new un())
            : u.length === 1
            ? (c = u[0])
            : (c = new Fe()),
          c !== u[0])
        )
          for (let h = 0, f = u.length; h < f; h++) c.add(u[h])
        if (
          (a.name && ((c.userData.name = a.name), (c.name = o)),
          Ro(c, a),
          a.extensions && Tl(n, c, a),
          a.matrix !== void 0)
        ) {
          const h = new ae()
          h.fromArray(a.matrix), c.applyMatrix4(h)
        } else a.translation !== void 0 && c.position.fromArray(a.translation), a.rotation !== void 0 && c.quaternion.fromArray(a.rotation), a.scale !== void 0 && c.scale.fromArray(a.scale)
        return (
          i.associations.has(c) || i.associations.set(c, {}),
          (i.associations.get(c).nodes = t),
          c
        )
      })),
      this.nodeCache[t]
    )
  }
  loadScene(t) {
    const e = this.extensions,
      n = this.json.scenes[t],
      i = this,
      a = new un()
    n.name && (a.name = i.createUniqueName(n.name)),
      Ro(a, n),
      n.extensions && Tl(e, a, n)
    const o = n.nodes || [],
      s = []
    for (let l = 0, u = o.length; l < u; l++)
      s.push(i.getDependency('node', o[l]))
    return Promise.all(s).then(function (l) {
      for (let c = 0, h = l.length; c < h; c++) a.add(l[c])
      const u = c => {
        const h = new Map()
        for (const [f, d] of i.associations)
          (f instanceof ji || f instanceof Yn) && h.set(f, d)
        return (
          c.traverse(f => {
            const d = i.associations.get(f)
            d != null && h.set(f, d)
          }),
          h
        )
      }
      return (i.associations = u(a)), a
    })
  }
  _createAnimationTracks(t, e, n, i, a) {
    const o = [],
      s = t.name ? t.name : t.uuid,
      l = []
    vs[a.path] === vs.weights
      ? t.traverse(function (f) {
          f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid)
        })
      : l.push(s)
    let u
    switch (vs[a.path]) {
      case vs.weights:
        u = Wh
        break
      case vs.rotation:
        u = Xh
        break
      case vs.position:
      case vs.scale:
        u = Yh
        break
      default:
        switch (n.itemSize) {
          case 1:
            u = Wh
            break
          case 2:
          case 3:
          default:
            u = Yh
            break
        }
        break
    }
    const c = i.interpolation !== void 0 ? Pq[i.interpolation] : yp,
      h = this._getArrayFromAccessor(n)
    for (let f = 0, d = l.length; f < d; f++) {
      const p = new u(l[f] + '.' + vs[a.path], e.array, h, c)
      i.interpolation === 'CUBICSPLINE' &&
        this._createCubicSplineTrackInterpolant(p),
        o.push(p)
    }
    return o
  }
  _getArrayFromAccessor(t) {
    let e = t.array
    if (t.normalized) {
      const n = eb(e.constructor),
        i = new Float32Array(e.length)
      for (let a = 0, o = e.length; a < o; a++) i[a] = e[a] * n
      e = i
    }
    return e
  }
  _createCubicSplineTrackInterpolant(t) {
    ;(t.createInterpolant = function (n) {
      const i = this instanceof Xh ? Lq : OB
      return new i(this.times, this.values, this.getValueSize() / 3, n)
    }),
      (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0)
  }
}
function zq(r, t, e) {
  const n = t.attributes,
    i = new Ei()
  if (n.POSITION !== void 0) {
    const s = e.json.accessors[n.POSITION],
      l = s.min,
      u = s.max
    if (l !== void 0 && u !== void 0) {
      if (
        (i.set(new U(l[0], l[1], l[2]), new U(u[0], u[1], u[2])), s.normalized)
      ) {
        const c = eb(Ch[s.componentType])
        i.min.multiplyScalar(c), i.max.multiplyScalar(c)
      }
    } else {
      console.warn(
        'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.',
      )
      return
    }
  } else return
  const a = t.targets
  if (a !== void 0) {
    const s = new U(),
      l = new U()
    for (let u = 0, c = a.length; u < c; u++) {
      const h = a[u]
      if (h.POSITION !== void 0) {
        const f = e.json.accessors[h.POSITION],
          d = f.min,
          p = f.max
        if (d !== void 0 && p !== void 0) {
          if (
            (l.setX(Math.max(Math.abs(d[0]), Math.abs(p[0]))),
            l.setY(Math.max(Math.abs(d[1]), Math.abs(p[1]))),
            l.setZ(Math.max(Math.abs(d[2]), Math.abs(p[2]))),
            f.normalized)
          ) {
            const g = eb(Ch[f.componentType])
            l.multiplyScalar(g)
          }
          s.max(l)
        } else
          console.warn(
            'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.',
          )
      }
    }
    i.expandByVector(s)
  }
  r.boundingBox = i
  const o = new na()
  i.getCenter(o.center),
    (o.radius = i.min.distanceTo(i.max) / 2),
    (r.boundingSphere = o)
}
function DD(r, t, e) {
  const n = t.attributes,
    i = []
  function a(o, s) {
    return e.getDependency('accessor', o).then(function (l) {
      r.setAttribute(s, l)
    })
  }
  for (const o in n) {
    const s = tb[o] || o.toLowerCase()
    s in r.attributes || i.push(a(n[o], s))
  }
  if (t.indices !== void 0 && !r.index) {
    const o = e.getDependency('accessor', t.indices).then(function (s) {
      r.setIndex(s)
    })
    i.push(o)
  }
  return (
    Be.workingColorSpace !== ar &&
      'COLOR_0' in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Be.workingColorSpace}" not supported.`,
      ),
    Ro(r, t),
    zq(r, t, e),
    Promise.all(i).then(function () {
      return t.targets !== void 0 ? Iq(r, t.targets, e) : r
    })
  )
}
const xx = new WeakMap()
class Uq extends fl {
  constructor(t) {
    super(t),
      (this.decoderPath = ''),
      (this.decoderConfig = {}),
      (this.decoderBinary = null),
      (this.decoderPending = null),
      (this.workerLimit = 4),
      (this.workerPool = []),
      (this.workerNextTaskID = 1),
      (this.workerSourceURL = ''),
      (this.defaultAttributeIDs = {
        position: 'POSITION',
        normal: 'NORMAL',
        color: 'COLOR',
        uv: 'TEX_COORD',
      }),
      (this.defaultAttributeTypes = {
        position: 'Float32Array',
        normal: 'Float32Array',
        color: 'Float32Array',
        uv: 'Float32Array',
      })
  }
  setDecoderPath(t) {
    return (this.decoderPath = t), this
  }
  setDecoderConfig(t) {
    return (this.decoderConfig = t), this
  }
  setWorkerLimit(t) {
    return (this.workerLimit = t), this
  }
  load(t, e, n, i) {
    const a = new wp(this.manager)
    a.setPath(this.path),
      a.setResponseType('arraybuffer'),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        t,
        o => {
          this.parse(o, e, i)
        },
        n,
        i,
      )
  }
  parse(t, e, n = () => {}) {
    this.decodeDracoFile(t, e, null, null, cn, n).catch(n)
  }
  decodeDracoFile(t, e, n, i, a = ar, o = () => {}) {
    const s = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: a,
    }
    return this.decodeGeometry(t, s).then(e).catch(o)
  }
  decodeGeometry(t, e) {
    const n = JSON.stringify(e)
    if (xx.has(t)) {
      const l = xx.get(t)
      if (l.key === n) return l.promise
      if (t.byteLength === 0)
        throw new Error(
          'THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.',
        )
    }
    let i
    const a = this.workerNextTaskID++,
      o = t.byteLength,
      s = this._getWorker(a, o)
        .then(
          l => (
            (i = l),
            new Promise((u, c) => {
              ;(i._callbacks[a] = {
                resolve: u,
                reject: c,
              }),
                i.postMessage(
                  {
                    type: 'decode',
                    id: a,
                    taskConfig: e,
                    buffer: t,
                  },
                  [t],
                )
            })
          ),
        )
        .then(l => this._createGeometry(l.geometry))
    return (
      s
        .catch(() => !0)
        .then(() => {
          i && a && this._releaseTask(i, a)
        }),
      xx.set(t, {
        key: n,
        promise: s,
      }),
      s
    )
  }
  _createGeometry(t) {
    const e = new Mn()
    t.index && e.setIndex(new ir(t.index.array, 1))
    for (let n = 0; n < t.attributes.length; n++) {
      const i = t.attributes[n],
        a = i.name,
        o = i.array,
        s = i.itemSize,
        l = new ir(o, s)
      a === 'color' &&
        (this._assignVertexColorSpace(l, i.vertexColorSpace),
        (l.normalized = !(o instanceof Float32Array))),
        e.setAttribute(a, l)
    }
    return e
  }
  _assignVertexColorSpace(t, e) {
    if (e !== cn) return
    const n = new qt()
    for (let i = 0, a = t.count; i < a; i++)
      n.fromBufferAttribute(t, i).convertSRGBToLinear(),
        t.setXYZ(i, n.r, n.g, n.b)
  }
  _loadLibrary(t, e) {
    const n = new wp(this.manager)
    return (
      n.setPath(this.decoderPath),
      n.setResponseType(e),
      n.setWithCredentials(this.withCredentials),
      new Promise((i, a) => {
        n.load(t, i, void 0, a)
      })
    )
  }
  preload() {
    return this._initDecoder(), this
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending
    const t =
        typeof WebAssembly != 'object' || this.decoderConfig.type === 'js',
      e = []
    return (
      t
        ? e.push(this._loadLibrary('draco_decoder.js', 'text'))
        : (e.push(this._loadLibrary('draco_wasm_wrapper.js', 'text')),
          e.push(this._loadLibrary('draco_decoder.wasm', 'arraybuffer'))),
      (this.decoderPending = Promise.all(e).then(n => {
        const i = n[0]
        t || (this.decoderConfig.wasmBinary = n[1])
        const a = Vq.toString(),
          o = [
            '/* draco decoder */',
            i,
            '',
            '/* worker */',
            a.substring(a.indexOf('{') + 1, a.lastIndexOf('}')),
          ].join(`
`)
        this.workerSourceURL = URL.createObjectURL(new Blob([o]))
      })),
      this.decoderPending
    )
  }
  _getWorker(t, e) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL)
        ;(i._callbacks = {}),
          (i._taskCosts = {}),
          (i._taskLoad = 0),
          i.postMessage({
            type: 'init',
            decoderConfig: this.decoderConfig,
          }),
          (i.onmessage = function (a) {
            const o = a.data
            switch (o.type) {
              case 'decode':
                i._callbacks[o.id].resolve(o)
                break
              case 'error':
                i._callbacks[o.id].reject(o)
                break
              default:
                console.error(
                  'THREE.DRACOLoader: Unexpected message, "' + o.type + '"',
                )
            }
          }),
          this.workerPool.push(i)
      } else
        this.workerPool.sort(function (i, a) {
          return i._taskLoad > a._taskLoad ? -1 : 1
        })
      const n = this.workerPool[this.workerPool.length - 1]
      return (n._taskCosts[t] = e), (n._taskLoad += e), n
    })
  }
  _releaseTask(t, e) {
    ;(t._taskLoad -= t._taskCosts[e]),
      delete t._callbacks[e],
      delete t._taskCosts[e]
  }
  debug() {
    console.log(
      'Task load: ',
      this.workerPool.map(t => t._taskLoad),
    )
  }
  dispose() {
    for (let t = 0; t < this.workerPool.length; ++t)
      this.workerPool[t].terminate()
    return (
      (this.workerPool.length = 0),
      this.workerSourceURL !== '' && URL.revokeObjectURL(this.workerSourceURL),
      this
    )
  }
}
// DRACOWorker
function Vq() {
  let r, t
  onmessage = function (o) {
    const s = o.data
    switch (s.type) {
      case 'init':
        ;(r = s.decoderConfig),
          (t = new Promise(function (c) {
            ;(r.onModuleLoaded = function (h) {
              c({
                draco: h,
              })
            }),
              DracoDecoderModule(r)
          }))
        break
      case 'decode':
        const l = s.buffer,
          u = s.taskConfig
        t.then(c => {
          const h = c.draco,
            f = new h.Decoder()
          try {
            const d = e(h, f, new Int8Array(l), u),
              p = d.attributes.map(g => g.array.buffer)
            d.index && p.push(d.index.array.buffer),
              self.postMessage(
                {
                  type: 'decode',
                  id: s.id,
                  geometry: d,
                },
                p,
              )
          } catch (d) {
            console.error(d),
              self.postMessage({
                type: 'error',
                id: s.id,
                error: d.message,
              })
          } finally {
            h.destroy(f)
          }
        })
        break
    }
  }
  function e(o, s, l, u) {
    const c = u.attributeIDs,
      h = u.attributeTypes
    let f, d
    const p = s.GetEncodedGeometryType(l)
    if (p === o.TRIANGULAR_MESH)
      (f = new o.Mesh()), (d = s.DecodeArrayToMesh(l, l.byteLength, f))
    else if (p === o.POINT_CLOUD)
      (f = new o.PointCloud()),
        (d = s.DecodeArrayToPointCloud(l, l.byteLength, f))
    else throw new Error('THREE.DRACOLoader: Unexpected geometry type.')
    if (!d.ok() || f.ptr === 0)
      throw new Error('THREE.DRACOLoader: Decoding failed: ' + d.error_msg())
    const g = {
      index: null,
      attributes: [],
    }
    for (const v in c) {
      const m = self[h[v]]
      let y, _
      if (u.useUniqueIDs) (_ = c[v]), (y = s.GetAttributeByUniqueId(f, _))
      else {
        if (((_ = s.GetAttributeId(f, o[c[v]])), _ === -1)) continue
        y = s.GetAttribute(f, _)
      }
      const x = i(o, s, f, v, m, y)
      v === 'color' && (x.vertexColorSpace = u.vertexColorSpace),
        g.attributes.push(x)
    }
    return p === o.TRIANGULAR_MESH && (g.index = n(o, s, f)), o.destroy(f), g
  }
  function n(o, s, l) {
    const c = l.num_faces() * 3,
      h = c * 4,
      f = o._malloc(h)
    s.GetTrianglesUInt32Array(l, h, f)
    const d = new Uint32Array(o.HEAPF32.buffer, f, c).slice()
    return (
      o._free(f),
      {
        array: d,
        itemSize: 1,
      }
    )
  }
  function i(o, s, l, u, c, h) {
    const f = h.num_components(),
      p = l.num_points() * f,
      g = p * c.BYTES_PER_ELEMENT,
      v = a(o, c),
      m = o._malloc(g)
    s.GetAttributeDataArrayForAllPoints(l, h, v, g, m)
    const y = new c(o.HEAPF32.buffer, m, p).slice()
    return (
      o._free(m),
      {
        name: u,
        array: y,
        itemSize: f,
      }
    )
  }
  function a(o, s) {
    switch (s) {
      case Float32Array:
        return o.DT_FLOAT32
      case Int8Array:
        return o.DT_INT8
      case Int16Array:
        return o.DT_INT16
      case Int32Array:
        return o.DT_INT32
      case Uint8Array:
        return o.DT_UINT8
      case Uint16Array:
        return o.DT_UINT16
      case Uint32Array:
        return o.DT_UINT32
    }
  }
}

// 业务代码
let nb = {
  GLTFLoader: 'GLTF',
  TextureLoader: 'Texture',
  FontLoader: 'Font',
  MMDLoader: 'MMD',
  MTLLoader: 'MTL',
  OBJLoader: 'OBJ',
  PCDLoader: 'PCD',
  FileLoader: 'File',
  ImageLoader: 'Image',
  ObjectLoader: 'Object',
  MaterialLoader: 'Material',
  CubeTextureLoader: 'CubeTexture',
  RGBELoader: 'RGBELoader',
  FBXLoader: 'FBX',
}
const Gq = Object.values(nb)
class Hq extends z0 {
  constructor({dracoPath: t} = {}) {
    super(),
      (this.dracoPath = t || './draco/gltf/'),
      (this.itemsLoaded = 0),
      (this.itemsTotal = 0),
      (this.assets = []),
      (this.loaders = {}),
      this.initDefaultLoader()
  }
  initManager() {
    const t = new LB()
    return (
      (t.onProgress = (e, n, i) => {
        ;(this.itemsLoaded = n),
          (this.itemsTotal = i),
          this.emit('onProgress', e, n, i)
      }),
      (t.onError = e => {
        this.emit('onError', e)
      }),
      t
    )
  }
  initDefaultLoader() {
    ;[
      {
        loader: aq,
        name: 'GLTFLoader',
      },
      {
        loader: ZM,
        name: 'TextureLoader',
      },
    ].map(t => this.addLoader(t.loader, t.name))
  }
  initDraco(t) {
    const e = new Uq()
    e.setDecoderPath(this.dracoPath), e.preload(), t.setDRACOLoader(e)
  }
  addLoader(t, e = '') {
    if (t.name && nb[e]) {
      if (!this.loaders[e]) {
        let i = new t(this.manager),
          a = e
        i instanceof fl &&
          (a === 'GLTFLoader' && this.initDraco(i), (this.loaders[nb[a]] = i))
      }
    } else throw new Error('请配置正确的加载器')
  }
  loadItem(t) {
    return new Promise((e, n) => {
      if (!this.loaders[t.type]) throw new Error(`资源${t.path}没有配置加载器`)
      this.loaders[t.type].load(
        t.path,
        i => {
          this.itemsLoaded++,
            this.emit('onProgress', t.path, this.itemsLoaded, this.itemsTotal),
            e({
              ...t,
              data: i,
            })
        },
        null,
        i => {
          this.emit('onError', i), n(i)
        },
      )
    })
  }
  loadAll(t) {
    return (
      (this.itemsLoaded = 0),
      (this.itemsTotal = 0),
      new Promise((e, n) => {
        let i = this.matchType(t),
          a = []
        ;(this.itemsTotal = i.length),
          i.map(o => {
            let s = this.loadItem(o)
            a.push(s)
          }),
          Promise.all(a)
            .then(o => {
              ;(this.assets = o), this.emit('onLoad'), e(o)
            })
            .catch(o => {
              this.emit('onError', o), n(o)
            })
      })
    )
  }
  matchType(t) {
    return (
      (this.assets = t
        .map(e => ({
          type: Gq.includes(e.type) ? e.type : '',
          path: e.path,
          name: e.name,
          data: null,
        }))
        .filter(e => {
          if (!e.type) throw new Error(`资源${e.path},type不正确`)
          return e.type
        })),
      this.assets
    )
  }
  getResource(t) {
    let e = this.assets.find(n => n.name === t)
    if (!e) throw new Error(`资源${t}不存在`)
    return e.data
  }
  destroy() {
    this.off('onProgress'),
      this.off('onLoad'),
      this.off('onError'),
      (this.assets = [])
  }
}
class LD {
  constructor(t, e) {
    ;(this.wasIntersected = !1),
      (this.wasIntersectedOnMouseDown = !1),
      (this.target = t),
      (this.name = e),
      (this.intersected = !1),
      (this.distance = 0)
  }
}
class Wr {
  constructor(t, e = null) {
    ;(this.coords = new pt(0, 0)),
      (this.distance = 0),
      (this.intersected = !1),
      (this.wasIntersected = !1),
      (this.wasIntersectedOnMouseDown = !1),
      (this.cancelBubble = !1),
      (this.type = t),
      (this.originalEvent = e)
  }
  stopPropagation() {
    this.cancelBubble = !0
  }
}
class Wq {
  constructor(t, e, n, i) {
    ;(this.dispose = () => {
      this.domElement.removeEventListener('click', this.onMouseClick),
        this.supportsPointerEvents &&
          (this.bindEventsOnBodyElement
            ? this.domElement.ownerDocument.removeEventListener(
                'pointermove',
                this.onDocumentPointerMove,
              )
            : this.domElement.removeEventListener(
                'pointermove',
                this.onDocumentPointerMove,
              ),
          this.domElement.removeEventListener(
            'pointerdown',
            this.onPointerDown,
          ),
          this.domElement.removeEventListener('pointerup', this.onPointerUp)),
        this.bindEventsOnBodyElement
          ? this.domElement.ownerDocument.removeEventListener(
              'mousemove',
              this.onDocumentMouseMove,
            )
          : this.domElement.removeEventListener(
              'mousemove',
              this.onDocumentMouseMove,
            ),
        this.domElement.removeEventListener('mousedown', this.onMouseDown),
        this.domElement.removeEventListener('mouseup', this.onMouseUp),
        this.domElement.removeEventListener('touchstart', this.onTouchStart),
        this.domElement.removeEventListener('touchmove', this.onTouchMove),
        this.domElement.removeEventListener('touchend', this.onTouchEnd)
    }),
      (this.add = (a, o = []) => {
        if (a && !this.interactiveObjects.find(s => s.target === a))
          if (o.length > 0)
            o.forEach(s => {
              const l = a.getObjectByName(s)
              if (l) {
                const u = new LD(l, s)
                this.interactiveObjects.push(u)
              }
            })
          else {
            const s = new LD(a, a.name)
            this.interactiveObjects.push(s)
          }
      }),
      (this.remove = (a, o = []) => {
        a &&
          (o.length > 0
            ? o.forEach(s => {
                const l = a.getObjectByName(s)
                l &&
                  (this.interactiveObjects = this.interactiveObjects.filter(
                    u => u.target !== l,
                  ))
              })
            : (this.interactiveObjects = this.interactiveObjects.filter(
                s => s.target !== a,
              )))
      }),
      (this.update = () => {
        var a
        this.raycaster.setFromCamera(this.mouse, this.camera),
          this.interactiveObjects.forEach(u => {
            u.target && this.checkIntersection(u)
          }),
          this.interactiveObjects.sort(function (u, c) {
            return u.distance - c.distance
          })
        const o =
          (a = this.interactiveObjects.find(u => u.intersected)) !== null &&
          a !== void 0
            ? a
            : null
        if (o != this.closestObject) {
          if (this.closestObject) {
            const u = new Wr('mouseout')
            this.dispatch(this.closestObject, u)
          }
          if (o) {
            const u = new Wr('mouseover')
            this.dispatch(o, u)
          }
          this.closestObject = o
        }
        let s
        this.interactiveObjects.forEach(u => {
          !u.intersected &&
            u.wasIntersected &&
            (s || (s = new Wr('mouseleave')), this.dispatch(u, s))
        })
        let l
        this.interactiveObjects.forEach(u => {
          u.intersected &&
            !u.wasIntersected &&
            (l || (l = new Wr('mouseenter')), this.dispatch(u, l))
        })
      }),
      (this.checkIntersection = a => {
        const o = this.raycaster.intersectObjects([a.target], !0)
        if (((a.wasIntersected = a.intersected), o.length > 0)) {
          let s = o[0].distance
          o.forEach(l => {
            l.distance < s && (s = l.distance)
          }),
            (a.intersected = !0),
            (a.distance = s)
        } else a.intersected = !1
      }),
      (this.onDocumentMouseMove = a => {
        this.mapPositionToPoint(this.mouse, a.clientX, a.clientY)
        const o = new Wr('mousemove', a)
        this.interactiveObjects.forEach(s => {
          this.dispatch(s, o)
        })
      }),
      (this.onDocumentPointerMove = a => {
        this.mapPositionToPoint(this.mouse, a.clientX, a.clientY)
        const o = new Wr('pointermove', a)
        this.interactiveObjects.forEach(s => {
          this.dispatch(s, o)
        })
      }),
      (this.onTouchMove = a => {
        a.touches.length > 0 &&
          this.mapPositionToPoint(
            this.mouse,
            a.touches[0].clientX,
            a.touches[0].clientY,
          )
        const o = new Wr(
          this.treatTouchEventsAsMouseEvents ? 'mousemove' : 'touchmove',
          a,
        )
        this.interactiveObjects.forEach(s => {
          this.dispatch(s, o)
        })
      }),
      (this.onMouseClick = a => {
        this.update()
        const o = new Wr('click', a)
        this.interactiveObjects.forEach(s => {
          s.intersected && this.dispatch(s, o)
        })
      }),
      (this.onMouseDown = a => {
        this.mapPositionToPoint(this.mouse, a.clientX, a.clientY), this.update()
        const o = new Wr('mousedown', a)
        this.interactiveObjects.forEach(s => {
          s.intersected
            ? ((s.wasIntersectedOnMouseDown = !0), this.dispatch(s, o))
            : (s.wasIntersectedOnMouseDown = !1)
        })
      }),
      (this.onPointerDown = a => {
        this.mapPositionToPoint(this.mouse, a.clientX, a.clientY), this.update()
        const o = new Wr('pointerdown', a)
        this.interactiveObjects.forEach(s => {
          s.intersected && this.dispatch(s, o)
        })
      }),
      (this.onTouchStart = a => {
        a.touches.length > 0 &&
          this.mapPositionToPoint(
            this.mouse,
            a.touches[0].clientX,
            a.touches[0].clientY,
          ),
          this.update()
        const o = new Wr(
          this.treatTouchEventsAsMouseEvents ? 'mousedown' : 'touchstart',
          a,
        )
        this.interactiveObjects.forEach(s => {
          s.intersected && this.dispatch(s, o)
        })
      }),
      (this.onMouseUp = a => {
        const o = new Wr('mouseup', a)
        this.interactiveObjects.forEach(s => {
          this.dispatch(s, o)
        })
      }),
      (this.onPointerUp = a => {
        const o = new Wr('pointerup', a)
        this.interactiveObjects.forEach(s => {
          this.dispatch(s, o)
        })
      }),
      (this.onTouchEnd = a => {
        a.touches.length > 0 &&
          this.mapPositionToPoint(
            this.mouse,
            a.touches[0].clientX,
            a.touches[0].clientY,
          ),
          this.update()
        const o = new Wr(
          this.treatTouchEventsAsMouseEvents ? 'mouseup' : 'touchend',
          a,
        )
        this.interactiveObjects.forEach(s => {
          this.dispatch(s, o)
        })
      }),
      (this.dispatch = (a, o) => {
        a.target &&
          !o.cancelBubble &&
          ((o.coords = this.mouse),
          (o.distance = a.distance),
          (o.intersected = a.intersected),
          (o.wasIntersected = a.wasIntersected),
          (o.wasIntersectedOnMouseDown = a.wasIntersectedOnMouseDown),
          a.target.dispatchEvent(o))
      }),
      (this.mapPositionToPoint = (a, o, s) => {
        const l = this.renderer.domElement.getBoundingClientRect()
        ;(a.x = ((o - l.left) / l.width) * 2 - 1),
          (a.y = -((s - l.top) / l.height) * 2 + 1)
      }),
      (this.renderer = t),
      (this.camera = e),
      (this.domElement = n),
      (this.bindEventsOnBodyElement =
        i && typeof i.bindEventsOnBodyElement < 'u'
          ? i.bindEventsOnBodyElement
          : !0),
      (this.scene = i && typeof i.scene < 'u' ? i.scene : null),
      this.scene &&
        (this.scene.onBeforeRender = () => {
          this.autoAdd &&
            this.scene !== null &&
            this.scene.traverse(a => {
              this.add(a),
                a.addEventListener('removed', o => {
                  this.remove(o.target)
                })
            }),
            this.update()
        }),
      (this.autoAdd = i && typeof i.autoAdd < 'u' ? i.autoAdd : !1),
      this.autoAdd &&
        this.scene === null &&
        console.error(
          'Attention: Options.scene needs to be set when using options.autoAdd',
        ),
      (this.mouse = new pt(-1, 1)),
      (this.supportsPointerEvents = !!window.PointerEvent),
      (this.interactiveObjects = []),
      (this.closestObject = null),
      (this.raycaster = new Q$()),
      n.addEventListener('click', this.onMouseClick),
      this.supportsPointerEvents &&
        (this.bindEventsOnBodyElement
          ? n.ownerDocument.addEventListener(
              'pointermove',
              this.onDocumentPointerMove,
            )
          : n.addEventListener('pointermove', this.onDocumentPointerMove),
        n.addEventListener('pointerdown', this.onPointerDown),
        n.addEventListener('pointerup', this.onPointerUp)),
      this.bindEventsOnBodyElement
        ? n.ownerDocument.addEventListener(
            'mousemove',
            this.onDocumentMouseMove,
          )
        : n.addEventListener('mousemove', this.onDocumentMouseMove),
      n.addEventListener('mousedown', this.onMouseDown),
      n.addEventListener('mouseup', this.onMouseUp),
      n.addEventListener('touchstart', this.onTouchStart, {
        passive: !0,
      }),
      n.addEventListener('touchmove', this.onTouchMove, {
        passive: !0,
      }),
      n.addEventListener('touchend', this.onTouchEnd, {
        passive: !0,
      }),
      (this.treatTouchEventsAsMouseEvents = !0)
  }
}
const NB = r => {
    r instanceof Array ? r.forEach(NB) : (r.map && r.map.dispose(), r.dispose())
  },
  kB = r => {
    r.geometry && r.geometry.dispose(),
      r.material && NB(r.material),
      r.texture && r.texture.dispose(),
      r.children && r.children.forEach(kB)
  },
  va = r => {
    if (r && r.children)
      for (; r.children.length; ) {
        const t = r.children[0]
        r.remove(t), kB(t)
      }
  }
function BB(r = 10, t = 62) {
  var e =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        '',
      ),
    n = [],
    i
  if (((t = t || e.length), r))
    for (i = 0; i < r; i++) n[i] = e[0 | (Math.random() * t)]
  else {
    var a
    for (n[8] = n[13] = n[18] = n[23] = '-', n[14] = '4', i = 0; i < 36; i++)
      n[i] ||
        ((a = 0 | (Math.random() * 16)), (n[i] = e[i == 19 ? (a & 3) | 8 : a]))
  }
  return n.join('')
}
function PD(r) {
  var t = new U(),
    e = new Ei()
  e.expandByObject(r)
  var n = new U()
  e.getSize(n)
  var i = new U()
  e.getCenter(i)
  let a = {
    box3: e,
    boxSize: n,
    center: i,
  }
  if (r.geometry) {
    r.geometry.computeBoundingBox(), r.geometry.computeBoundingSphere()
    const {max: o, min: s} = r.geometry.boundingBox
    ;(t.x = o.x - s.x), (t.y = o.y - s.y), (t.z = o.z - s.z), (a.size = t)
  }
  return a
}
function Xq(r) {
  let t = r,
    e = 0
  for (; Array.isArray(t); ) e++, (t = t[0])
  for (; e < 4; ) (r = [r]), e++
  return r
}
const QM = r => {
  let t = JSON.parse(r),
    e = t.features
  for (let n = 0; n < e.length; n++) {
    const i = e[n]
    i.geometry.coordinates = Xq(i.geometry.coordinates)
  }
  return t
}
function Yq(r, t) {
  let e = r[0]
  for (let n = 1; n < r.length; n++) {
    const i = r[n]
    t(i) < t(e) && (e = i)
  }
  return e
}
function $q(r, t) {
  let e = r[0]
  for (let n = 1; n < r.length; n++) {
    const i = r[n]
    t(i) > t(e) && (e = i)
  }
  return e
}
class qq {
  constructor({
    canvas: t,
    sizes: e,
    scene: n,
    camera: i,
    postprocessing: a = !1,
    composer: o = null,
  }) {
    ;(this.canvas = t),
      (this.sizes = e),
      (this.scene = n),
      (this.camera = i),
      (this.postprocessing = a),
      (this.composer = o),
      this.setInstance()
  }
  setInstance() {
    ;(this.instance = new cB({
      alpha: !1,
      antialias: !0,
      canvas: this.canvas,
    })),
      this.instance.setSize(this.sizes.width, this.sizes.height),
      this.instance.setPixelRatio(this.sizes.pixelRatio)
  }
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height),
      this.instance.setPixelRatio(this.sizes.pixelRatio)
  }
  update() {
    this.postprocessing && this.composer
      ? this.composer.render()
      : this.instance.render(this.scene, this.camera.instance)
  }
  destroy() {
    this.instance.dispose(), this.instance.forceContextLoss()
  }
}
const RD = {
    type: 'change',
  },
  Sx = {
    type: 'start',
  },
  ID = {
    type: 'end',
  },
  yg = new hf(),
  OD = new Cs(),
  Zq = Math.cos(70 * IM.DEG2RAD)
class FB extends Ju {
  constructor(t, e) {
    super(),
      (this.object = t),
      (this.domElement = e),
      (this.domElement.style.touchAction = 'none'),
      (this.enabled = !0),
      (this.target = new U()),
      (this.cursor = new U()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: 'ArrowLeft',
        UP: 'ArrowUp',
        RIGHT: 'ArrowRight',
        BOTTOM: 'ArrowDown',
      }),
      (this.mouseButtons = {
        LEFT: hc.ROTATE,
        MIDDLE: hc.DOLLY,
        RIGHT: hc.PAN,
      }),
      (this.touches = {
        ONE: fc.ROTATE,
        TWO: fc.DOLLY_PAN,
      }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return s.phi
      }),
      (this.getAzimuthalAngle = function () {
        return s.theta
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target)
      }),
      (this.listenToKeyEvents = function (O) {
        O.addEventListener('keydown', Bt), (this._domElementKeyEvents = O)
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener('keydown', Bt),
          (this._domElementKeyEvents = null)
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom)
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(RD),
          n.update(),
          (a = i.NONE)
      }),
      (this.update = (function () {
        const O = new U(),
          j = new wa().setFromUnitVectors(t.up, new U(0, 1, 0)),
          tt = j.clone().invert(),
          ot = new U(),
          St = new wa(),
          jt = new U(),
          ce = 2 * Math.PI
        return function (Gn = null) {
          const Ie = n.object.position
          O.copy(Ie).sub(n.target),
            O.applyQuaternion(j),
            s.setFromVector3(O),
            n.autoRotate && a === i.NONE && E(M(Gn)),
            n.enableDamping
              ? ((s.theta += l.theta * n.dampingFactor),
                (s.phi += l.phi * n.dampingFactor))
              : ((s.theta += l.theta), (s.phi += l.phi))
          let Hn = n.minAzimuthAngle,
            On = n.maxAzimuthAngle
          isFinite(Hn) &&
            isFinite(On) &&
            (Hn < -Math.PI ? (Hn += ce) : Hn > Math.PI && (Hn -= ce),
            On < -Math.PI ? (On += ce) : On > Math.PI && (On -= ce),
            Hn <= On
              ? (s.theta = Math.max(Hn, Math.min(On, s.theta)))
              : (s.theta =
                  s.theta > (Hn + On) / 2
                    ? Math.max(Hn, s.theta)
                    : Math.min(On, s.theta))),
            (s.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, s.phi),
            )),
            s.makeSafe(),
            n.enableDamping === !0
              ? n.target.addScaledVector(c, n.dampingFactor)
              : n.target.add(c),
            n.target.sub(n.cursor),
            n.target.clampLength(n.minTargetRadius, n.maxTargetRadius),
            n.target.add(n.cursor)
          let ss = !1
          if ((n.zoomToCursor && S) || n.object.isOrthographicCamera)
            s.radius = H(s.radius)
          else {
            const sr = s.radius
            ;(s.radius = H(s.radius * u)), (ss = sr != s.radius)
          }
          if (
            (O.setFromSpherical(s),
            O.applyQuaternion(tt),
            Ie.copy(n.target).add(O),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                c.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), c.set(0, 0, 0)),
            n.zoomToCursor && S)
          ) {
            let sr = null
            if (n.object.isPerspectiveCamera) {
              const So = O.length()
              sr = H(So * u)
              const _l = So - sr
              n.object.position.addScaledVector(x, _l),
                n.object.updateMatrixWorld(),
                (ss = !!_l)
            } else if (n.object.isOrthographicCamera) {
              const So = new U(A.x, A.y, 0)
              So.unproject(n.object)
              const _l = n.object.zoom
              ;(n.object.zoom = Math.max(
                n.minZoom,
                Math.min(n.maxZoom, n.object.zoom / u),
              )),
                n.object.updateProjectionMatrix(),
                (ss = _l !== n.object.zoom)
              const If = new U(A.x, A.y, 0)
              If.unproject(n.object),
                n.object.position.sub(If).add(So),
                n.object.updateMatrixWorld(),
                (sr = O.length())
            } else
              console.warn(
                'WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.',
              ),
                (n.zoomToCursor = !1)
            sr !== null &&
              (this.screenSpacePanning
                ? n.target
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix)
                    .multiplyScalar(sr)
                    .add(n.object.position)
                : (yg.origin.copy(n.object.position),
                  yg.direction
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(yg.direction)) < Zq
                    ? t.lookAt(n.target)
                    : (OD.setFromNormalAndCoplanarPoint(n.object.up, n.target),
                      yg.intersectPlane(OD, n.target))))
          } else if (n.object.isOrthographicCamera) {
            const sr = n.object.zoom
            ;(n.object.zoom = Math.max(
              n.minZoom,
              Math.min(n.maxZoom, n.object.zoom / u),
            )),
              sr !== n.object.zoom &&
                (n.object.updateProjectionMatrix(), (ss = !0))
          }
          return (
            (u = 1),
            (S = !1),
            ss ||
            ot.distanceToSquared(n.object.position) > o ||
            8 * (1 - St.dot(n.object.quaternion)) > o ||
            jt.distanceToSquared(n.target) > o
              ? (n.dispatchEvent(RD),
                ot.copy(n.object.position),
                St.copy(n.object.quaternion),
                jt.copy(n.target),
                !0)
              : !1
          )
        }
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener('contextmenu', Ot),
          n.domElement.removeEventListener('pointerdown', Lt),
          n.domElement.removeEventListener('pointercancel', N),
          n.domElement.removeEventListener('wheel', yt),
          n.domElement.removeEventListener('pointermove', G),
          n.domElement.removeEventListener('pointerup', N),
          n.domElement.getRootNode().removeEventListener('keydown', Kt, {
            capture: !0,
          }),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener('keydown', Bt),
            (n._domElementKeyEvents = null))
      })
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      }
    let a = i.NONE
    const o = 1e-6,
      s = new AD(),
      l = new AD()
    let u = 1
    const c = new U(),
      h = new pt(),
      f = new pt(),
      d = new pt(),
      p = new pt(),
      g = new pt(),
      v = new pt(),
      m = new pt(),
      y = new pt(),
      _ = new pt(),
      x = new U(),
      A = new pt()
    let S = !1
    const b = [],
      T = {}
    let w = !1
    function M(O) {
      return O !== null
        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * O
        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed
    }
    function C(O) {
      const j = Math.abs(O * 0.01)
      return Math.pow(0.95, n.zoomSpeed * j)
    }
    function E(O) {
      l.theta -= O
    }
    function D(O) {
      l.phi -= O
    }
    const P = (function () {
        const O = new U()
        return function (tt, ot) {
          O.setFromMatrixColumn(ot, 0), O.multiplyScalar(-tt), c.add(O)
        }
      })(),
      L = (function () {
        const O = new U()
        return function (tt, ot) {
          n.screenSpacePanning === !0
            ? O.setFromMatrixColumn(ot, 1)
            : (O.setFromMatrixColumn(ot, 0), O.crossVectors(n.object.up, O)),
            O.multiplyScalar(tt),
            c.add(O)
        }
      })(),
      I = (function () {
        const O = new U()
        return function (tt, ot) {
          const St = n.domElement
          if (n.object.isPerspectiveCamera) {
            const jt = n.object.position
            O.copy(jt).sub(n.target)
            let ce = O.length()
            ;(ce *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              P((2 * tt * ce) / St.clientHeight, n.object.matrix),
              L((2 * ot * ce) / St.clientHeight, n.object.matrix)
          } else
            n.object.isOrthographicCamera
              ? (P(
                  (tt * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    St.clientWidth,
                  n.object.matrix,
                ),
                L(
                  (ot * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    St.clientHeight,
                  n.object.matrix,
                ))
              : (console.warn(
                  'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.',
                ),
                (n.enablePan = !1))
        }
      })()
    function F(O) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (u /= O)
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.',
          ),
          (n.enableZoom = !1))
    }
    function k(O) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (u *= O)
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.',
          ),
          (n.enableZoom = !1))
    }
    function V(O, j) {
      if (!n.zoomToCursor) return
      S = !0
      const tt = n.domElement.getBoundingClientRect(),
        ot = O - tt.left,
        St = j - tt.top,
        jt = tt.width,
        ce = tt.height
      ;(A.x = (ot / jt) * 2 - 1),
        (A.y = -(St / ce) * 2 + 1),
        x
          .set(A.x, A.y, 1)
          .unproject(n.object)
          .sub(n.object.position)
          .normalize()
    }
    function H(O) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, O))
    }
    function Y(O) {
      h.set(O.clientX, O.clientY)
    }
    function K(O) {
      V(O.clientX, O.clientX), m.set(O.clientX, O.clientY)
    }
    function ut(O) {
      p.set(O.clientX, O.clientY)
    }
    function W(O) {
      f.set(O.clientX, O.clientY),
        d.subVectors(f, h).multiplyScalar(n.rotateSpeed)
      const j = n.domElement
      E((2 * Math.PI * d.x) / j.clientHeight),
        D((2 * Math.PI * d.y) / j.clientHeight),
        h.copy(f),
        n.update()
    }
    function Z(O) {
      y.set(O.clientX, O.clientY),
        _.subVectors(y, m),
        _.y > 0 ? F(C(_.y)) : _.y < 0 && k(C(_.y)),
        m.copy(y),
        n.update()
    }
    function ft(O) {
      g.set(O.clientX, O.clientY),
        v.subVectors(g, p).multiplyScalar(n.panSpeed),
        I(v.x, v.y),
        p.copy(g),
        n.update()
    }
    function lt(O) {
      V(O.clientX, O.clientY),
        O.deltaY < 0 ? k(C(O.deltaY)) : O.deltaY > 0 && F(C(O.deltaY)),
        n.update()
    }
    function ct(O) {
      let j = !1
      switch (O.code) {
        case n.keys.UP:
          O.ctrlKey || O.metaKey || O.shiftKey
            ? D((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(0, n.keyPanSpeed),
            (j = !0)
          break
        case n.keys.BOTTOM:
          O.ctrlKey || O.metaKey || O.shiftKey
            ? D((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(0, -n.keyPanSpeed),
            (j = !0)
          break
        case n.keys.LEFT:
          O.ctrlKey || O.metaKey || O.shiftKey
            ? E((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(n.keyPanSpeed, 0),
            (j = !0)
          break
        case n.keys.RIGHT:
          O.ctrlKey || O.metaKey || O.shiftKey
            ? E((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : I(-n.keyPanSpeed, 0),
            (j = !0)
          break
      }
      j && (O.preventDefault(), n.update())
    }
    function At(O) {
      if (b.length === 1) h.set(O.pageX, O.pageY)
      else {
        const j = de(O),
          tt = 0.5 * (O.pageX + j.x),
          ot = 0.5 * (O.pageY + j.y)
        h.set(tt, ot)
      }
    }
    function gt(O) {
      if (b.length === 1) p.set(O.pageX, O.pageY)
      else {
        const j = de(O),
          tt = 0.5 * (O.pageX + j.x),
          ot = 0.5 * (O.pageY + j.y)
        p.set(tt, ot)
      }
    }
    function dt(O) {
      const j = de(O),
        tt = O.pageX - j.x,
        ot = O.pageY - j.y,
        St = Math.sqrt(tt * tt + ot * ot)
      m.set(0, St)
    }
    function B(O) {
      n.enableZoom && dt(O), n.enablePan && gt(O)
    }
    function ht(O) {
      n.enableZoom && dt(O), n.enableRotate && At(O)
    }
    function it(O) {
      if (b.length == 1) f.set(O.pageX, O.pageY)
      else {
        const tt = de(O),
          ot = 0.5 * (O.pageX + tt.x),
          St = 0.5 * (O.pageY + tt.y)
        f.set(ot, St)
      }
      d.subVectors(f, h).multiplyScalar(n.rotateSpeed)
      const j = n.domElement
      E((2 * Math.PI * d.x) / j.clientHeight),
        D((2 * Math.PI * d.y) / j.clientHeight),
        h.copy(f)
    }
    function xt(O) {
      if (b.length === 1) g.set(O.pageX, O.pageY)
      else {
        const j = de(O),
          tt = 0.5 * (O.pageX + j.x),
          ot = 0.5 * (O.pageY + j.y)
        g.set(tt, ot)
      }
      v.subVectors(g, p).multiplyScalar(n.panSpeed), I(v.x, v.y), p.copy(g)
    }
    function rt(O) {
      const j = de(O),
        tt = O.pageX - j.x,
        ot = O.pageY - j.y,
        St = Math.sqrt(tt * tt + ot * ot)
      y.set(0, St),
        _.set(0, Math.pow(y.y / m.y, n.zoomSpeed)),
        F(_.y),
        m.copy(y)
      const jt = (O.pageX + j.x) * 0.5,
        ce = (O.pageY + j.y) * 0.5
      V(jt, ce)
    }
    function kt(O) {
      n.enableZoom && rt(O), n.enablePan && xt(O)
    }
    function Ct(O) {
      n.enableZoom && rt(O), n.enableRotate && it(O)
    }
    function Lt(O) {
      n.enabled !== !1 &&
        (b.length === 0 &&
          (n.domElement.setPointerCapture(O.pointerId),
          n.domElement.addEventListener('pointermove', G),
          n.domElement.addEventListener('pointerup', N)),
        !Gt(O) && (Te(O), O.pointerType === 'touch' ? fe(O) : J(O)))
    }
    function G(O) {
      n.enabled !== !1 && (O.pointerType === 'touch' ? Mt(O) : vt(O))
    }
    function N(O) {
      switch ((se(O), b.length)) {
        case 0:
          n.domElement.releasePointerCapture(O.pointerId),
            n.domElement.removeEventListener('pointermove', G),
            n.domElement.removeEventListener('pointerup', N),
            n.dispatchEvent(ID),
            (a = i.NONE)
          break
        case 1:
          const j = b[0],
            tt = T[j]
          fe({
            pointerId: j,
            pageX: tt.x,
            pageY: tt.y,
          })
          break
      }
    }
    function J(O) {
      let j
      switch (O.button) {
        case 0:
          j = n.mouseButtons.LEFT
          break
        case 1:
          j = n.mouseButtons.MIDDLE
          break
        case 2:
          j = n.mouseButtons.RIGHT
          break
        default:
          j = -1
      }
      switch (j) {
        case hc.DOLLY:
          if (n.enableZoom === !1) return
          K(O), (a = i.DOLLY)
          break
        case hc.ROTATE:
          if (O.ctrlKey || O.metaKey || O.shiftKey) {
            if (n.enablePan === !1) return
            ut(O), (a = i.PAN)
          } else {
            if (n.enableRotate === !1) return
            Y(O), (a = i.ROTATE)
          }
          break
        case hc.PAN:
          if (O.ctrlKey || O.metaKey || O.shiftKey) {
            if (n.enableRotate === !1) return
            Y(O), (a = i.ROTATE)
          } else {
            if (n.enablePan === !1) return
            ut(O), (a = i.PAN)
          }
          break
        default:
          a = i.NONE
      }
      a !== i.NONE && n.dispatchEvent(Sx)
    }
    function vt(O) {
      switch (a) {
        case i.ROTATE:
          if (n.enableRotate === !1) return
          W(O)
          break
        case i.DOLLY:
          if (n.enableZoom === !1) return
          Z(O)
          break
        case i.PAN:
          if (n.enablePan === !1) return
          ft(O)
          break
      }
    }
    function yt(O) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        a !== i.NONE ||
        (O.preventDefault(),
        n.dispatchEvent(Sx),
        lt(mt(O)),
        n.dispatchEvent(ID))
    }
    function mt(O) {
      const j = O.deltaMode,
        tt = {
          clientX: O.clientX,
          clientY: O.clientY,
          deltaY: O.deltaY,
        }
      switch (j) {
        case 1:
          tt.deltaY *= 16
          break
        case 2:
          tt.deltaY *= 100
          break
      }
      return O.ctrlKey && !w && (tt.deltaY *= 10), tt
    }
    function Kt(O) {
      O.key === 'Control' &&
        ((w = !0),
        n.domElement.getRootNode().addEventListener('keyup', It, {
          passive: !0,
          capture: !0,
        }))
    }
    function It(O) {
      O.key === 'Control' &&
        ((w = !1),
        n.domElement.getRootNode().removeEventListener('keyup', It, {
          passive: !0,
          capture: !0,
        }))
    }
    function Bt(O) {
      n.enabled === !1 || n.enablePan === !1 || ct(O)
    }
    function fe(O) {
      switch ((ue(O), b.length)) {
        case 1:
          switch (n.touches.ONE) {
            case fc.ROTATE:
              if (n.enableRotate === !1) return
              At(O), (a = i.TOUCH_ROTATE)
              break
            case fc.PAN:
              if (n.enablePan === !1) return
              gt(O), (a = i.TOUCH_PAN)
              break
            default:
              a = i.NONE
          }
          break
        case 2:
          switch (n.touches.TWO) {
            case fc.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return
              B(O), (a = i.TOUCH_DOLLY_PAN)
              break
            case fc.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return
              ht(O), (a = i.TOUCH_DOLLY_ROTATE)
              break
            default:
              a = i.NONE
          }
          break
        default:
          a = i.NONE
      }
      a !== i.NONE && n.dispatchEvent(Sx)
    }
    function Mt(O) {
      switch ((ue(O), a)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return
          it(O), n.update()
          break
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return
          xt(O), n.update()
          break
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return
          kt(O), n.update()
          break
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return
          Ct(O), n.update()
          break
        default:
          a = i.NONE
      }
    }
    function Ot(O) {
      n.enabled !== !1 && O.preventDefault()
    }
    function Te(O) {
      b.push(O.pointerId)
    }
    function se(O) {
      delete T[O.pointerId]
      for (let j = 0; j < b.length; j++)
        if (b[j] == O.pointerId) {
          b.splice(j, 1)
          return
        }
    }
    function Gt(O) {
      for (let j = 0; j < b.length; j++) if (b[j] == O.pointerId) return !0
      return !1
    }
    function ue(O) {
      let j = T[O.pointerId]
      j === void 0 && ((j = new pt()), (T[O.pointerId] = j)),
        j.set(O.pageX, O.pageY)
    }
    function de(O) {
      const j = O.pointerId === b[0] ? b[1] : b[0]
      return T[j]
    }
    n.domElement.addEventListener('contextmenu', Ot),
      n.domElement.addEventListener('pointerdown', Lt),
      n.domElement.addEventListener('pointercancel', N),
      n.domElement.addEventListener('wheel', yt, {
        passive: !1,
      }),
      n.domElement.getRootNode().addEventListener('keydown', Kt, {
        passive: !0,
        capture: !0,
      }),
      this.update()
  }
}
class Kq {
  constructor(
    {sizes: t, scene: e, canvas: n},
    i = {
      isOrthographic: !1,
    },
  ) {
    ;(this.sizes = t),
      (this.scene = e),
      (this.canvas = n),
      (this.options = Object.assign(
        {
          isOrthographic: !1,
        },
        i,
      )),
      this.setInstance()
  }
  setInstance() {
    ;(this.instance = null),
      this.setCamera(this.options.isOrthographic),
      this.instance.position.set(10, 10, 10),
      this.scene.add(this.instance)
  }
  setCamera(t = !0) {
    let e = this.sizes.width / this.sizes.height
    if (t) {
      let n = 120
      this.instance = new O0(-n * e, n * e, n, -n, 1, 1e4)
    } else this.instance = new wr(45, e, 1, 1e4)
    this.setControls()
  }
  setControls() {
    ;(this.controls = new FB(this.instance, this.canvas)),
      (this.controls.enableDamping = !0),
      this.controls.update()
  }
  resize() {
    let t = this.sizes.width / this.sizes.height
    if (this.options.isOrthographic) {
      let e = 120
      ;(this.instance.left = -e * t),
        (this.instance.right = e * t),
        (this.instance.top = e),
        (this.instance.bottom = -e)
    } else this.instance.aspect = t
    this.instance.updateProjectionMatrix()
  }
  update() {
    this.controls.update()
  }
  destroy() {
    this.controls.dispose()
  }
}
class jq {
  constructor() {
    ;(this._partials = new Float64Array(32)), (this._n = 0)
  }
  add(t) {
    const e = this._partials
    let n = 0
    for (let i = 0; i < this._n && i < 32; i++) {
      const a = e[i],
        o = t + a,
        s = Math.abs(t) < Math.abs(a) ? t - (o - a) : a - (o - t)
      s && (e[n++] = s), (t = o)
    }
    return (e[n] = t), (this._n = n + 1), this
  }
  valueOf() {
    const t = this._partials
    let e = this._n,
      n,
      i,
      a,
      o = 0
    if (e > 0) {
      for (
        o = t[--e];
        e > 0 && ((n = o), (i = t[--e]), (o = n + i), (a = i - (o - n)), !a);

      );
      e > 0 &&
        ((a < 0 && t[e - 1] < 0) || (a > 0 && t[e - 1] > 0)) &&
        ((i = a * 2), (n = o + i), i == n - o && (o = n))
    }
    return o
  }
}
function* Jq(r) {
  for (const t of r) yield* t
}
function zB(r) {
  return Array.from(Jq(r))
}
var tn = 1e-6,
  Qq = 1e-12,
  Pe = Math.PI,
  Jr = Pe / 2,
  ND = Pe / 4,
  Qi = Pe * 2,
  pi = 180 / Pe,
  Bn = Pe / 180,
  An = Math.abs,
  UB = Math.atan,
  Mp = Math.atan2,
  Dn = Math.cos,
  tZ = Math.exp,
  eZ = Math.log,
  Ln = Math.sin,
  nZ =
    Math.sign ||
    function (r) {
      return r > 0 ? 1 : r < 0 ? -1 : 0
    },
  U0 = Math.sqrt,
  rZ = Math.tan
function iZ(r) {
  return r > 1 ? 0 : r < -1 ? Pe : Math.acos(r)
}
function Tp(r) {
  return r > 1 ? Jr : r < -1 ? -Jr : Math.asin(r)
}
function Ld() {}
function by(r, t) {
  r && BD.hasOwnProperty(r.type) && BD[r.type](r, t)
}
var kD = {
    Feature: function (r, t) {
      by(r.geometry, t)
    },
    FeatureCollection: function (r, t) {
      for (var e = r.features, n = -1, i = e.length; ++n < i; )
        by(e[n].geometry, t)
    },
  },
  BD = {
    Sphere: function (r, t) {
      t.sphere()
    },
    Point: function (r, t) {
      ;(r = r.coordinates), t.point(r[0], r[1], r[2])
    },
    MultiPoint: function (r, t) {
      for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
        (r = e[n]), t.point(r[0], r[1], r[2])
    },
    LineString: function (r, t) {
      rb(r.coordinates, t, 0)
    },
    MultiLineString: function (r, t) {
      for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
        rb(e[n], t, 0)
    },
    Polygon: function (r, t) {
      FD(r.coordinates, t)
    },
    MultiPolygon: function (r, t) {
      for (var e = r.coordinates, n = -1, i = e.length; ++n < i; ) FD(e[n], t)
    },
    GeometryCollection: function (r, t) {
      for (var e = r.geometries, n = -1, i = e.length; ++n < i; ) by(e[n], t)
    },
  }
function rb(r, t, e) {
  var n = -1,
    i = r.length - e,
    a
  for (t.lineStart(); ++n < i; ) (a = r[n]), t.point(a[0], a[1], a[2])
  t.lineEnd()
}
function FD(r, t) {
  var e = -1,
    n = r.length
  for (t.polygonStart(); ++e < n; ) rb(r[e], t, 1)
  t.polygonEnd()
}
function aZ(r, t) {
  r && kD.hasOwnProperty(r.type) ? kD[r.type](r, t) : by(r, t)
}
function ib(r) {
  return [Mp(r[1], r[0]), Tp(r[2])]
}
function $h(r) {
  var t = r[0],
    e = r[1],
    n = Dn(e)
  return [n * Dn(t), n * Ln(t), Ln(e)]
}
function _g(r, t) {
  return r[0] * t[0] + r[1] * t[1] + r[2] * t[2]
}
function wy(r, t) {
  return [
    r[1] * t[2] - r[2] * t[1],
    r[2] * t[0] - r[0] * t[2],
    r[0] * t[1] - r[1] * t[0],
  ]
}
function Ax(r, t) {
  ;(r[0] += t[0]), (r[1] += t[1]), (r[2] += t[2])
}
function xg(r, t) {
  return [r[0] * t, r[1] * t, r[2] * t]
}
function ab(r) {
  var t = U0(r[0] * r[0] + r[1] * r[1] + r[2] * r[2])
  ;(r[0] /= t), (r[1] /= t), (r[2] /= t)
}
function ob(r, t) {
  function e(n, i) {
    return (n = r(n, i)), t(n[0], n[1])
  }
  return (
    r.invert &&
      t.invert &&
      (e.invert = function (n, i) {
        return (n = t.invert(n, i)), n && r.invert(n[0], n[1])
      }),
    e
  )
}
function sb(r, t) {
  return An(r) > Pe && (r -= Math.round(r / Qi) * Qi), [r, t]
}
sb.invert = sb
function VB(r, t, e) {
  return (r %= Qi)
    ? t || e
      ? ob(UD(r), VD(t, e))
      : UD(r)
    : t || e
    ? VD(t, e)
    : sb
}
function zD(r) {
  return function (t, e) {
    return (t += r), An(t) > Pe && (t -= Math.round(t / Qi) * Qi), [t, e]
  }
}
function UD(r) {
  var t = zD(r)
  return (t.invert = zD(-r)), t
}
function VD(r, t) {
  var e = Dn(r),
    n = Ln(r),
    i = Dn(t),
    a = Ln(t)
  function o(s, l) {
    var u = Dn(l),
      c = Dn(s) * u,
      h = Ln(s) * u,
      f = Ln(l),
      d = f * e + c * n
    return [Mp(h * i - d * a, c * e - f * n), Tp(d * i + h * a)]
  }
  return (
    (o.invert = function (s, l) {
      var u = Dn(l),
        c = Dn(s) * u,
        h = Ln(s) * u,
        f = Ln(l),
        d = f * i - h * a
      return [Mp(h * i + f * a, c * e + d * n), Tp(d * e - c * n)]
    }),
    o
  )
}
function oZ(r) {
  r = VB(r[0] * Bn, r[1] * Bn, r.length > 2 ? r[2] * Bn : 0)
  function t(e) {
    return (e = r(e[0] * Bn, e[1] * Bn)), (e[0] *= pi), (e[1] *= pi), e
  }
  return (
    (t.invert = function (e) {
      return (e = r.invert(e[0] * Bn, e[1] * Bn)), (e[0] *= pi), (e[1] *= pi), e
    }),
    t
  )
}
function sZ(r, t, e, n, i, a) {
  if (e) {
    var o = Dn(t),
      s = Ln(t),
      l = n * e
    i == null
      ? ((i = t + n * Qi), (a = t - l / 2))
      : ((i = GD(o, i)),
        (a = GD(o, a)),
        (n > 0 ? i < a : i > a) && (i += n * Qi))
    for (var u, c = i; n > 0 ? c > a : c < a; c -= l)
      (u = ib([o, -s * Dn(c), -s * Ln(c)])), r.point(u[0], u[1])
  }
}
function GD(r, t) {
  ;(t = $h(t)), (t[0] -= r), ab(t)
  var e = iZ(-t[1])
  return ((-t[2] < 0 ? -e : e) + Qi - tn) % Qi
}
function GB() {
  var r = [],
    t
  return {
    point: function (e, n, i) {
      t.push([e, n, i])
    },
    lineStart: function () {
      r.push((t = []))
    },
    lineEnd: Ld,
    rejoin: function () {
      r.length > 1 && r.push(r.pop().concat(r.shift()))
    },
    result: function () {
      var e = r
      return (r = []), (t = null), e
    },
  }
}
function Um(r, t) {
  return An(r[0] - t[0]) < tn && An(r[1] - t[1]) < tn
}
function Sg(r, t, e, n) {
  ;(this.x = r),
    (this.z = t),
    (this.o = e),
    (this.e = n),
    (this.v = !1),
    (this.n = this.p = null)
}
function HB(r, t, e, n, i) {
  var a = [],
    o = [],
    s,
    l
  if (
    (r.forEach(function (p) {
      if (!((g = p.length - 1) <= 0)) {
        var g,
          v = p[0],
          m = p[g],
          y
        if (Um(v, m)) {
          if (!v[2] && !m[2]) {
            for (i.lineStart(), s = 0; s < g; ++s) i.point((v = p[s])[0], v[1])
            i.lineEnd()
            return
          }
          m[0] += 2 * tn
        }
        a.push((y = new Sg(v, p, null, !0))),
          o.push((y.o = new Sg(v, null, y, !1))),
          a.push((y = new Sg(m, p, null, !1))),
          o.push((y.o = new Sg(m, null, y, !0)))
      }
    }),
    !!a.length)
  ) {
    for (o.sort(t), HD(a), HD(o), s = 0, l = o.length; s < l; ++s)
      o[s].e = e = !e
    for (var u = a[0], c, h; ; ) {
      for (var f = u, d = !0; f.v; ) if ((f = f.n) === u) return
      ;(c = f.z), i.lineStart()
      do {
        if (((f.v = f.o.v = !0), f.e)) {
          if (d)
            for (s = 0, l = c.length; s < l; ++s) i.point((h = c[s])[0], h[1])
          else n(f.x, f.n.x, 1, i)
          f = f.n
        } else {
          if (d)
            for (c = f.p.z, s = c.length - 1; s >= 0; --s)
              i.point((h = c[s])[0], h[1])
          else n(f.x, f.p.x, -1, i)
          f = f.p
        }
        ;(f = f.o), (c = f.z), (d = !d)
      } while (!f.v)
      i.lineEnd()
    }
  }
}
function HD(r) {
  if ((t = r.length)) {
    for (var t, e = 0, n = r[0], i; ++e < t; )
      (n.n = i = r[e]), (i.p = n), (n = i)
    ;(n.n = i = r[0]), (i.p = n)
  }
}
function bx(r) {
  return An(r[0]) <= Pe ? r[0] : nZ(r[0]) * (((An(r[0]) + Pe) % Qi) - Pe)
}
function lZ(r, t) {
  var e = bx(t),
    n = t[1],
    i = Ln(n),
    a = [Ln(e), -Dn(e), 0],
    o = 0,
    s = 0,
    l = new jq()
  i === 1 ? (n = Jr + tn) : i === -1 && (n = -Jr - tn)
  for (var u = 0, c = r.length; u < c; ++u)
    if ((f = (h = r[u]).length))
      for (
        var h,
          f,
          d = h[f - 1],
          p = bx(d),
          g = d[1] / 2 + ND,
          v = Ln(g),
          m = Dn(g),
          y = 0;
        y < f;
        ++y, p = x, v = S, m = b, d = _
      ) {
        var _ = h[y],
          x = bx(_),
          A = _[1] / 2 + ND,
          S = Ln(A),
          b = Dn(A),
          T = x - p,
          w = T >= 0 ? 1 : -1,
          M = w * T,
          C = M > Pe,
          E = v * S
        if (
          (l.add(Mp(E * w * Ln(M), m * b + E * Dn(M))),
          (o += C ? T + w * Qi : T),
          C ^ (p >= e) ^ (x >= e))
        ) {
          var D = wy($h(d), $h(_))
          ab(D)
          var P = wy(a, D)
          ab(P)
          var L = (C ^ (T >= 0) ? -1 : 1) * Tp(P[2])
          ;(n > L || (n === L && (D[0] || D[1]))) &&
            (s += C ^ (T >= 0) ? 1 : -1)
        }
      }
  return (o < -tn || (o < tn && l < -Qq)) ^ (s & 1)
}
function WB(r, t, e, n) {
  return function (i) {
    var a = t(i),
      o = GB(),
      s = t(o),
      l = !1,
      u,
      c,
      h,
      f = {
        point: d,
        lineStart: g,
        lineEnd: v,
        polygonStart: function () {
          ;(f.point = m), (f.lineStart = y), (f.lineEnd = _), (c = []), (u = [])
        },
        polygonEnd: function () {
          ;(f.point = d), (f.lineStart = g), (f.lineEnd = v), (c = zB(c))
          var x = lZ(u, n)
          c.length
            ? (l || (i.polygonStart(), (l = !0)), HB(c, cZ, x, e, i))
            : x &&
              (l || (i.polygonStart(), (l = !0)),
              i.lineStart(),
              e(null, null, 1, i),
              i.lineEnd()),
            l && (i.polygonEnd(), (l = !1)),
            (c = u = null)
        },
        sphere: function () {
          i.polygonStart(),
            i.lineStart(),
            e(null, null, 1, i),
            i.lineEnd(),
            i.polygonEnd()
        },
      }
    function d(x, A) {
      r(x, A) && i.point(x, A)
    }
    function p(x, A) {
      a.point(x, A)
    }
    function g() {
      ;(f.point = p), a.lineStart()
    }
    function v() {
      ;(f.point = d), a.lineEnd()
    }
    function m(x, A) {
      h.push([x, A]), s.point(x, A)
    }
    function y() {
      s.lineStart(), (h = [])
    }
    function _() {
      m(h[0][0], h[0][1]), s.lineEnd()
      var x = s.clean(),
        A = o.result(),
        S,
        b = A.length,
        T,
        w,
        M
      if ((h.pop(), u.push(h), (h = null), !!b)) {
        if (x & 1) {
          if (((w = A[0]), (T = w.length - 1) > 0)) {
            for (
              l || (i.polygonStart(), (l = !0)), i.lineStart(), S = 0;
              S < T;
              ++S
            )
              i.point((M = w[S])[0], M[1])
            i.lineEnd()
          }
          return
        }
        b > 1 && x & 2 && A.push(A.pop().concat(A.shift())),
          c.push(A.filter(uZ))
      }
    }
    return f
  }
}
function uZ(r) {
  return r.length > 1
}
function cZ(r, t) {
  return (
    ((r = r.x)[0] < 0 ? r[1] - Jr - tn : Jr - r[1]) -
    ((t = t.x)[0] < 0 ? t[1] - Jr - tn : Jr - t[1])
  )
}
const WD = WB(
  function () {
    return !0
  },
  hZ,
  dZ,
  [-Pe, -Jr],
)
function hZ(r) {
  var t = NaN,
    e = NaN,
    n = NaN,
    i
  return {
    lineStart: function () {
      r.lineStart(), (i = 1)
    },
    point: function (a, o) {
      var s = a > 0 ? Pe : -Pe,
        l = An(a - t)
      An(l - Pe) < tn
        ? (r.point(t, (e = (e + o) / 2 > 0 ? Jr : -Jr)),
          r.point(n, e),
          r.lineEnd(),
          r.lineStart(),
          r.point(s, e),
          r.point(a, e),
          (i = 0))
        : n !== s &&
          l >= Pe &&
          (An(t - n) < tn && (t -= n * tn),
          An(a - s) < tn && (a -= s * tn),
          (e = fZ(t, e, a, o)),
          r.point(n, e),
          r.lineEnd(),
          r.lineStart(),
          r.point(s, e),
          (i = 0)),
        r.point((t = a), (e = o)),
        (n = s)
    },
    lineEnd: function () {
      r.lineEnd(), (t = e = NaN)
    },
    clean: function () {
      return 2 - i
    },
  }
}
function fZ(r, t, e, n) {
  var i,
    a,
    o = Ln(r - e)
  return An(o) > tn
    ? UB(
        (Ln(t) * (a = Dn(n)) * Ln(e) - Ln(n) * (i = Dn(t)) * Ln(r)) /
          (i * a * o),
      )
    : (t + n) / 2
}
function dZ(r, t, e, n) {
  var i
  if (r == null)
    (i = e * Jr),
      n.point(-Pe, i),
      n.point(0, i),
      n.point(Pe, i),
      n.point(Pe, 0),
      n.point(Pe, -i),
      n.point(0, -i),
      n.point(-Pe, -i),
      n.point(-Pe, 0),
      n.point(-Pe, i)
  else if (An(r[0] - t[0]) > tn) {
    var a = r[0] < t[0] ? Pe : -Pe
    ;(i = (e * a) / 2), n.point(-a, i), n.point(0, i), n.point(a, i)
  } else n.point(t[0], t[1])
}
function pZ(r) {
  var t = Dn(r),
    e = 2 * Bn,
    n = t > 0,
    i = An(t) > tn
  function a(c, h, f, d) {
    sZ(d, r, e, f, c, h)
  }
  function o(c, h) {
    return Dn(c) * Dn(h) > t
  }
  function s(c) {
    var h, f, d, p, g
    return {
      lineStart: function () {
        ;(p = d = !1), (g = 1)
      },
      point: function (v, m) {
        var y = [v, m],
          _,
          x = o(v, m),
          A = n ? (x ? 0 : u(v, m)) : x ? u(v + (v < 0 ? Pe : -Pe), m) : 0
        if (
          (!h && (p = d = x) && c.lineStart(),
          x !== d &&
            ((_ = l(h, y)), (!_ || Um(h, _) || Um(y, _)) && (y[2] = 1)),
          x !== d)
        )
          (g = 0),
            x
              ? (c.lineStart(), (_ = l(y, h)), c.point(_[0], _[1]))
              : ((_ = l(h, y)), c.point(_[0], _[1], 2), c.lineEnd()),
            (h = _)
        else if (i && h && n ^ x) {
          var S
          !(A & f) &&
            (S = l(y, h, !0)) &&
            ((g = 0),
            n
              ? (c.lineStart(),
                c.point(S[0][0], S[0][1]),
                c.point(S[1][0], S[1][1]),
                c.lineEnd())
              : (c.point(S[1][0], S[1][1]),
                c.lineEnd(),
                c.lineStart(),
                c.point(S[0][0], S[0][1], 3)))
        }
        x && (!h || !Um(h, y)) && c.point(y[0], y[1]), (h = y), (d = x), (f = A)
      },
      lineEnd: function () {
        d && c.lineEnd(), (h = null)
      },
      clean: function () {
        return g | ((p && d) << 1)
      },
    }
  }
  function l(c, h, f) {
    var d = $h(c),
      p = $h(h),
      g = [1, 0, 0],
      v = wy(d, p),
      m = _g(v, v),
      y = v[0],
      _ = m - y * y
    if (!_) return !f && c
    var x = (t * m) / _,
      A = (-t * y) / _,
      S = wy(g, v),
      b = xg(g, x),
      T = xg(v, A)
    Ax(b, T)
    var w = S,
      M = _g(b, w),
      C = _g(w, w),
      E = M * M - C * (_g(b, b) - 1)
    if (!(E < 0)) {
      var D = U0(E),
        P = xg(w, (-M - D) / C)
      if ((Ax(P, b), (P = ib(P)), !f)) return P
      var L = c[0],
        I = h[0],
        F = c[1],
        k = h[1],
        V
      I < L && ((V = L), (L = I), (I = V))
      var H = I - L,
        Y = An(H - Pe) < tn,
        K = Y || H < tn
      if (
        (!Y && k < F && ((V = F), (F = k), (k = V)),
        K
          ? Y
            ? (F + k > 0) ^ (P[1] < (An(P[0] - L) < tn ? F : k))
            : F <= P[1] && P[1] <= k
          : (H > Pe) ^ (L <= P[0] && P[0] <= I))
      ) {
        var ut = xg(w, (-M + D) / C)
        return Ax(ut, b), [P, ib(ut)]
      }
    }
  }
  function u(c, h) {
    var f = n ? r : Pe - r,
      d = 0
    return (
      c < -f ? (d |= 1) : c > f && (d |= 2),
      h < -f ? (d |= 4) : h > f && (d |= 8),
      d
    )
  }
  return WB(o, s, a, n ? [0, -r] : [-Pe, r - Pe])
}
function vZ(r, t, e, n, i, a) {
  var o = r[0],
    s = r[1],
    l = t[0],
    u = t[1],
    c = 0,
    h = 1,
    f = l - o,
    d = u - s,
    p
  if (((p = e - o), !(!f && p > 0))) {
    if (((p /= f), f < 0)) {
      if (p < c) return
      p < h && (h = p)
    } else if (f > 0) {
      if (p > h) return
      p > c && (c = p)
    }
    if (((p = i - o), !(!f && p < 0))) {
      if (((p /= f), f < 0)) {
        if (p > h) return
        p > c && (c = p)
      } else if (f > 0) {
        if (p < c) return
        p < h && (h = p)
      }
      if (((p = n - s), !(!d && p > 0))) {
        if (((p /= d), d < 0)) {
          if (p < c) return
          p < h && (h = p)
        } else if (d > 0) {
          if (p > h) return
          p > c && (c = p)
        }
        if (((p = a - s), !(!d && p < 0))) {
          if (((p /= d), d < 0)) {
            if (p > h) return
            p > c && (c = p)
          } else if (d > 0) {
            if (p < c) return
            p < h && (h = p)
          }
          return (
            c > 0 && ((r[0] = o + c * f), (r[1] = s + c * d)),
            h < 1 && ((t[0] = o + h * f), (t[1] = s + h * d)),
            !0
          )
        }
      }
    }
  }
}
var Pd = 1e9,
  Ag = -Pd
function gZ(r, t, e, n) {
  function i(u, c) {
    return r <= u && u <= e && t <= c && c <= n
  }
  function a(u, c, h, f) {
    var d = 0,
      p = 0
    if (u == null || (d = o(u, h)) !== (p = o(c, h)) || (l(u, c) < 0) ^ (h > 0))
      do f.point(d === 0 || d === 3 ? r : e, d > 1 ? n : t)
      while ((d = (d + h + 4) % 4) !== p)
    else f.point(c[0], c[1])
  }
  function o(u, c) {
    return An(u[0] - r) < tn
      ? c > 0
        ? 0
        : 3
      : An(u[0] - e) < tn
      ? c > 0
        ? 2
        : 1
      : An(u[1] - t) < tn
      ? c > 0
        ? 1
        : 0
      : c > 0
      ? 3
      : 2
  }
  function s(u, c) {
    return l(u.x, c.x)
  }
  function l(u, c) {
    var h = o(u, 1),
      f = o(c, 1)
    return h !== f
      ? h - f
      : h === 0
      ? c[1] - u[1]
      : h === 1
      ? u[0] - c[0]
      : h === 2
      ? u[1] - c[1]
      : c[0] - u[0]
  }
  return function (u) {
    var c = u,
      h = GB(),
      f,
      d,
      p,
      g,
      v,
      m,
      y,
      _,
      x,
      A,
      S,
      b = {
        point: T,
        lineStart: E,
        lineEnd: D,
        polygonStart: M,
        polygonEnd: C,
      }
    function T(L, I) {
      i(L, I) && c.point(L, I)
    }
    function w() {
      for (var L = 0, I = 0, F = d.length; I < F; ++I)
        for (
          var k = d[I],
            V = 1,
            H = k.length,
            Y = k[0],
            K,
            ut,
            W = Y[0],
            Z = Y[1];
          V < H;
          ++V
        )
          (K = W),
            (ut = Z),
            (Y = k[V]),
            (W = Y[0]),
            (Z = Y[1]),
            ut <= n
              ? Z > n && (W - K) * (n - ut) > (Z - ut) * (r - K) && ++L
              : Z <= n && (W - K) * (n - ut) < (Z - ut) * (r - K) && --L
      return L
    }
    function M() {
      ;(c = h), (f = []), (d = []), (S = !0)
    }
    function C() {
      var L = w(),
        I = S && L,
        F = (f = zB(f)).length
      ;(I || F) &&
        (u.polygonStart(),
        I && (u.lineStart(), a(null, null, 1, u), u.lineEnd()),
        F && HB(f, s, L, a, u),
        u.polygonEnd()),
        (c = u),
        (f = d = p = null)
    }
    function E() {
      ;(b.point = P), d && d.push((p = [])), (A = !0), (x = !1), (y = _ = NaN)
    }
    function D() {
      f && (P(g, v), m && x && h.rejoin(), f.push(h.result())),
        (b.point = T),
        x && c.lineEnd()
    }
    function P(L, I) {
      var F = i(L, I)
      if ((d && p.push([L, I]), A))
        (g = L), (v = I), (m = F), (A = !1), F && (c.lineStart(), c.point(L, I))
      else if (F && x) c.point(L, I)
      else {
        var k = [
            (y = Math.max(Ag, Math.min(Pd, y))),
            (_ = Math.max(Ag, Math.min(Pd, _))),
          ],
          V = [
            (L = Math.max(Ag, Math.min(Pd, L))),
            (I = Math.max(Ag, Math.min(Pd, I))),
          ]
        vZ(k, V, r, t, e, n)
          ? (x || (c.lineStart(), c.point(k[0], k[1])),
            c.point(V[0], V[1]),
            F || c.lineEnd(),
            (S = !1))
          : F && (c.lineStart(), c.point(L, I), (S = !1))
      }
      ;(y = L), (_ = I), (x = F)
    }
    return b
  }
}
const XD = r => r
var qh = 1 / 0,
  My = qh,
  Cp = -qh,
  Ty = Cp,
  mZ = {
    point: yZ,
    lineStart: Ld,
    lineEnd: Ld,
    polygonStart: Ld,
    polygonEnd: Ld,
    result: function () {
      var r = [
        [qh, My],
        [Cp, Ty],
      ]
      return (Cp = Ty = -(My = qh = 1 / 0)), r
    },
  }
function yZ(r, t) {
  r < qh && (qh = r), r > Cp && (Cp = r), t < My && (My = t), t > Ty && (Ty = t)
}
const YD = mZ
function tT(r) {
  return function (t) {
    var e = new lb()
    for (var n in r) e[n] = r[n]
    return (e.stream = t), e
  }
}
function lb() {}
lb.prototype = {
  constructor: lb,
  point: function (r, t) {
    this.stream.point(r, t)
  },
  sphere: function () {
    this.stream.sphere()
  },
  lineStart: function () {
    this.stream.lineStart()
  },
  lineEnd: function () {
    this.stream.lineEnd()
  },
  polygonStart: function () {
    this.stream.polygonStart()
  },
  polygonEnd: function () {
    this.stream.polygonEnd()
  },
}
function eT(r, t, e) {
  var n = r.clipExtent && r.clipExtent()
  return (
    r.scale(150).translate([0, 0]),
    n != null && r.clipExtent(null),
    aZ(e, r.stream(YD)),
    t(YD.result()),
    n != null && r.clipExtent(n),
    r
  )
}
function XB(r, t, e) {
  return eT(
    r,
    function (n) {
      var i = t[1][0] - t[0][0],
        a = t[1][1] - t[0][1],
        o = Math.min(i / (n[1][0] - n[0][0]), a / (n[1][1] - n[0][1])),
        s = +t[0][0] + (i - o * (n[1][0] + n[0][0])) / 2,
        l = +t[0][1] + (a - o * (n[1][1] + n[0][1])) / 2
      r.scale(150 * o).translate([s, l])
    },
    e,
  )
}
function _Z(r, t, e) {
  return XB(r, [[0, 0], t], e)
}
function xZ(r, t, e) {
  return eT(
    r,
    function (n) {
      var i = +t,
        a = i / (n[1][0] - n[0][0]),
        o = (i - a * (n[1][0] + n[0][0])) / 2,
        s = -a * n[0][1]
      r.scale(150 * a).translate([o, s])
    },
    e,
  )
}
function SZ(r, t, e) {
  return eT(
    r,
    function (n) {
      var i = +t,
        a = i / (n[1][1] - n[0][1]),
        o = -a * n[0][0],
        s = (i - a * (n[1][1] + n[0][1])) / 2
      r.scale(150 * a).translate([o, s])
    },
    e,
  )
}
var $D = 16,
  AZ = Dn(30 * Bn)
function qD(r, t) {
  return +t ? wZ(r, t) : bZ(r)
}
function bZ(r) {
  return tT({
    point: function (t, e) {
      ;(t = r(t, e)), this.stream.point(t[0], t[1])
    },
  })
}
function wZ(r, t) {
  function e(n, i, a, o, s, l, u, c, h, f, d, p, g, v) {
    var m = u - n,
      y = c - i,
      _ = m * m + y * y
    if (_ > 4 * t && g--) {
      var x = o + f,
        A = s + d,
        S = l + p,
        b = U0(x * x + A * A + S * S),
        T = Tp((S /= b)),
        w = An(An(S) - 1) < tn || An(a - h) < tn ? (a + h) / 2 : Mp(A, x),
        M = r(w, T),
        C = M[0],
        E = M[1],
        D = C - n,
        P = E - i,
        L = y * D - m * P
      ;((L * L) / _ > t ||
        An((m * D + y * P) / _ - 0.5) > 0.3 ||
        o * f + s * d + l * p < AZ) &&
        (e(n, i, a, o, s, l, C, E, w, (x /= b), (A /= b), S, g, v),
        v.point(C, E),
        e(C, E, w, x, A, S, u, c, h, f, d, p, g, v))
    }
  }
  return function (n) {
    var i,
      a,
      o,
      s,
      l,
      u,
      c,
      h,
      f,
      d,
      p,
      g,
      v = {
        point: m,
        lineStart: y,
        lineEnd: x,
        polygonStart: function () {
          n.polygonStart(), (v.lineStart = A)
        },
        polygonEnd: function () {
          n.polygonEnd(), (v.lineStart = y)
        },
      }
    function m(T, w) {
      ;(T = r(T, w)), n.point(T[0], T[1])
    }
    function y() {
      ;(h = NaN), (v.point = _), n.lineStart()
    }
    function _(T, w) {
      var M = $h([T, w]),
        C = r(T, w)
      e(
        h,
        f,
        c,
        d,
        p,
        g,
        (h = C[0]),
        (f = C[1]),
        (c = T),
        (d = M[0]),
        (p = M[1]),
        (g = M[2]),
        $D,
        n,
      ),
        n.point(h, f)
    }
    function x() {
      ;(v.point = m), n.lineEnd()
    }
    function A() {
      y(), (v.point = S), (v.lineEnd = b)
    }
    function S(T, w) {
      _((i = T), w), (a = h), (o = f), (s = d), (l = p), (u = g), (v.point = _)
    }
    function b() {
      e(h, f, c, d, p, g, a, o, i, s, l, u, $D, n), (v.lineEnd = x), x()
    }
    return v
  }
}
var MZ = tT({
  point: function (r, t) {
    this.stream.point(r * Bn, t * Bn)
  },
})
function TZ(r) {
  return tT({
    point: function (t, e) {
      var n = r(t, e)
      return this.stream.point(n[0], n[1])
    },
  })
}
function CZ(r, t, e, n, i) {
  function a(o, s) {
    return (o *= n), (s *= i), [t + r * o, e - r * s]
  }
  return (
    (a.invert = function (o, s) {
      return [((o - t) / r) * n, ((e - s) / r) * i]
    }),
    a
  )
}
function ZD(r, t, e, n, i, a) {
  if (!a) return CZ(r, t, e, n, i)
  var o = Dn(a),
    s = Ln(a),
    l = o * r,
    u = s * r,
    c = o / r,
    h = s / r,
    f = (s * e - o * t) / r,
    d = (s * t + o * e) / r
  function p(g, v) {
    return (g *= n), (v *= i), [l * g - u * v + t, e - u * g - l * v]
  }
  return (
    (p.invert = function (g, v) {
      return [n * (c * g - h * v + f), i * (d - h * g - c * v)]
    }),
    p
  )
}
function EZ(r) {
  return DZ(function () {
    return r
  })()
}
function DZ(r) {
  var t,
    e = 150,
    n = 480,
    i = 250,
    a = 0,
    o = 0,
    s = 0,
    l = 0,
    u = 0,
    c,
    h = 0,
    f = 1,
    d = 1,
    p = null,
    g = WD,
    v = null,
    m,
    y,
    _,
    x = XD,
    A = 0.5,
    S,
    b,
    T,
    w,
    M
  function C(L) {
    return T(L[0] * Bn, L[1] * Bn)
  }
  function E(L) {
    return (L = T.invert(L[0], L[1])), L && [L[0] * pi, L[1] * pi]
  }
  ;(C.stream = function (L) {
    return w && M === L ? w : (w = MZ(TZ(c)(g(S(x((M = L)))))))
  }),
    (C.preclip = function (L) {
      return arguments.length ? ((g = L), (p = void 0), P()) : g
    }),
    (C.postclip = function (L) {
      return arguments.length ? ((x = L), (v = m = y = _ = null), P()) : x
    }),
    (C.clipAngle = function (L) {
      return arguments.length
        ? ((g = +L ? pZ((p = L * Bn)) : ((p = null), WD)), P())
        : p * pi
    }),
    (C.clipExtent = function (L) {
      return arguments.length
        ? ((x =
            L == null
              ? ((v = m = y = _ = null), XD)
              : gZ(
                  (v = +L[0][0]),
                  (m = +L[0][1]),
                  (y = +L[1][0]),
                  (_ = +L[1][1]),
                )),
          P())
        : v == null
        ? null
        : [
            [v, m],
            [y, _],
          ]
    }),
    (C.scale = function (L) {
      return arguments.length ? ((e = +L), D()) : e
    }),
    (C.translate = function (L) {
      return arguments.length ? ((n = +L[0]), (i = +L[1]), D()) : [n, i]
    }),
    (C.center = function (L) {
      return arguments.length
        ? ((a = (L[0] % 360) * Bn), (o = (L[1] % 360) * Bn), D())
        : [a * pi, o * pi]
    }),
    (C.rotate = function (L) {
      return arguments.length
        ? ((s = (L[0] % 360) * Bn),
          (l = (L[1] % 360) * Bn),
          (u = L.length > 2 ? (L[2] % 360) * Bn : 0),
          D())
        : [s * pi, l * pi, u * pi]
    }),
    (C.angle = function (L) {
      return arguments.length ? ((h = (L % 360) * Bn), D()) : h * pi
    }),
    (C.reflectX = function (L) {
      return arguments.length ? ((f = L ? -1 : 1), D()) : f < 0
    }),
    (C.reflectY = function (L) {
      return arguments.length ? ((d = L ? -1 : 1), D()) : d < 0
    }),
    (C.precision = function (L) {
      return arguments.length ? ((S = qD(b, (A = L * L))), P()) : U0(A)
    }),
    (C.fitExtent = function (L, I) {
      return XB(C, L, I)
    }),
    (C.fitSize = function (L, I) {
      return _Z(C, L, I)
    }),
    (C.fitWidth = function (L, I) {
      return xZ(C, L, I)
    }),
    (C.fitHeight = function (L, I) {
      return SZ(C, L, I)
    })
  function D() {
    var L = ZD(e, 0, 0, f, d, h).apply(null, t(a, o)),
      I = ZD(e, n - L[0], i - L[1], f, d, h)
    return (
      (c = VB(s, l, u)), (b = ob(t, I)), (T = ob(c, b)), (S = qD(b, A)), P()
    )
  }
  function P() {
    return (w = M = null), C
  }
  return function () {
    return (t = r.apply(this, arguments)), (C.invert = t.invert && E), D()
  }
}
function nT(r, t) {
  return [r, eZ(rZ((Jr + t) / 2))]
}
nT.invert = function (r, t) {
  return [r, 2 * UB(tZ(t)) - Jr]
}
function V0() {
  return LZ(nT).scale(961 / Qi)
}
function LZ(r) {
  var t = EZ(r),
    e = t.center,
    n = t.scale,
    i = t.translate,
    a = t.clipExtent,
    o = null,
    s,
    l,
    u
  ;(t.scale = function (h) {
    return arguments.length ? (n(h), c()) : n()
  }),
    (t.translate = function (h) {
      return arguments.length ? (i(h), c()) : i()
    }),
    (t.center = function (h) {
      return arguments.length ? (e(h), c()) : e()
    }),
    (t.clipExtent = function (h) {
      return arguments.length
        ? (h == null
            ? (o = s = l = u = null)
            : ((o = +h[0][0]), (s = +h[0][1]), (l = +h[1][0]), (u = +h[1][1])),
          c())
        : o == null
        ? null
        : [
            [o, s],
            [l, u],
          ]
    })
  function c() {
    var h = Pe * n(),
      f = t(oZ(t.rotate()).invert([0, 0]))
    return a(
      o == null
        ? [
            [f[0] - h, f[1] - h],
            [f[0] + h, f[1] + h],
          ]
        : r === nT
        ? [
            [Math.max(f[0] - h, o), s],
            [Math.min(f[0] + h, l), u],
          ]
        : [
            [o, Math.max(f[1] - h, s)],
            [l, Math.min(f[1] + h, u)],
          ],
    )
  }
  return c()
}
class PZ extends z0 {
  constructor(t, e = {}) {
    super()
    let n = {
      isOrthographic: !1,
    }
    ;(this.config = Object.assign({}, n, e)),
      (this.canvas = t),
      (this.scene = new hB()),
      (this.sizes = new nq(this)),
      (this.time = new rq(this)),
      (this.camera = new Kq(this, {
        isOrthographic: this.config.isOrthographic,
      })),
      (this.renderer = new qq(this)),
      this.sizes.on('resize', () => {
        this.resize()
      }),
      this.time.on('tick', i => {
        this.update(i)
      })
  }
  setAxesHelper(t = 250) {
    if (!t) return !1
    let e = new RB(t)
    this.scene.add(e)
  }
  resize() {
    this.camera.resize(), this.renderer.resize()
  }
  update(t) {
    this.camera.update(t), this.renderer.update(t)
  }
  destroy() {
    this.sizes.destroy(),
      this.time.destroy(),
      this.camera.destroy(),
      this.renderer.destroy(),
      this.scene.traverse(t => {
        if (t instanceof De) {
          t.geometry.dispose()
          for (const e in t.material) {
            const n = t.material[e]
            n && typeof n.dispose == 'function' && n.dispose()
          }
        }
      }),
      this.canvas.parentNode.removeChild(this.canvas)
  }
}
