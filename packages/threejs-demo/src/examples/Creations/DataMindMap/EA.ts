import {pd} from './utils'
import wA from './wA'

const AA = new Map()

export function EA(t) {
  let e
  const i = AA.get(t)
  if (i) return pd(i)
  {
    let i
    ;/^(rgba|RGBA)/.test(t) &&
      (i = (function (t) {
        const e = t.replace(/(?:\(|\)|rgba|RGBA)*/g, '').split(',')
        return {
          r: Number(e[0]),
          g: Number(e[1]),
          b: Number(e[2]),
          a: Number(e[3]),
        }
      })(t))
    const n = {
      color: new wA(t),
      transparent: !(!i || 1 === i.a),
      opacity: null != (e = null == i ? void 0 : i.a) ? e : 1,
    }
    return AA.set(t, n), n
  }
}
