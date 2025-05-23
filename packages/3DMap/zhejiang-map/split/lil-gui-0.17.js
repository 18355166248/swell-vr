/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */
class ro {
  constructor(t, e, n, i, a = 'div') {
    ;(this.parent = t),
      (this.object = e),
      (this.property = n),
      (this._disabled = !1),
      (this._hidden = !1),
      (this.initialValue = this.getValue()),
      (this.domElement = document.createElement('div')),
      this.domElement.classList.add('controller'),
      this.domElement.classList.add(i),
      (this.$name = document.createElement('div')),
      this.$name.classList.add('name'),
      (ro.nextNameID = ro.nextNameID || 0),
      (this.$name.id = 'lil-gui-name-' + ++ro.nextNameID),
      (this.$widget = document.createElement(a)),
      this.$widget.classList.add('widget'),
      (this.$disable = this.$widget),
      this.domElement.appendChild(this.$name),
      this.domElement.appendChild(this.$widget),
      this.parent.children.push(this),
      this.parent.controllers.push(this),
      this.parent.$children.appendChild(this.domElement),
      (this._listenCallback = this._listenCallback.bind(this)),
      this.name(n)
  }
  name(t) {
    return (this._name = t), (this.$name.innerHTML = t), this
  }
  onChange(t) {
    return (this._onChange = t), this
  }
  _callOnChange() {
    this.parent._callOnChange(this),
      this._onChange !== void 0 && this._onChange.call(this, this.getValue()),
      (this._changed = !0)
  }
  onFinishChange(t) {
    return (this._onFinishChange = t), this
  }
  _callOnFinishChange() {
    this._changed &&
      (this.parent._callOnFinishChange(this),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, this.getValue())),
      (this._changed = !1)
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this
  }
  enable(t = !0) {
    return this.disable(!t)
  }
  disable(t = !0) {
    return (
      t === this._disabled ||
        ((this._disabled = t),
        this.domElement.classList.toggle('disabled', t),
        this.$disable.toggleAttribute('disabled', t)),
      this
    )
  }
  show(t = !0) {
    return (
      (this._hidden = !t),
      (this.domElement.style.display = this._hidden ? 'none' : ''),
      this
    )
  }
  hide() {
    return this.show(!1)
  }
  options(t) {
    const e = this.parent.add(this.object, this.property, t)
    return e.name(this._name), this.destroy(), e
  }
  min(t) {
    return this
  }
  max(t) {
    return this
  }
  step(t) {
    return this
  }
  decimals(t) {
    return this
  }
  listen(t = !0) {
    return (
      (this._listening = t),
      this._listenCallbackID !== void 0 &&
        (cancelAnimationFrame(this._listenCallbackID),
        (this._listenCallbackID = void 0)),
      this._listening && this._listenCallback(),
      this
    )
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback)
    const t = this.save()
    t !== this._listenPrevValue && this.updateDisplay(),
      (this._listenPrevValue = t)
  }
  getValue() {
    return this.object[this.property]
  }
  setValue(t) {
    return (
      (this.object[this.property] = t),
      this._callOnChange(),
      this.updateDisplay(),
      this
    )
  }
  updateDisplay() {
    return this
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this
  }
  save() {
    return this.getValue()
  }
  destroy() {
    this.listen(!1),
      this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
      this.parent.$children.removeChild(this.domElement)
  }
}
let RZ = class extends ro {
  constructor(t, e, n) {
    super(t, e, n, 'boolean', 'label'),
      (this.$input = document.createElement('input')),
      this.$input.setAttribute('type', 'checkbox'),
      this.$input.setAttribute('aria-labelledby', this.$name.id),
      this.$widget.appendChild(this.$input),
      this.$input.addEventListener('change', () => {
        this.setValue(this.$input.checked), this._callOnFinishChange()
      }),
      (this.$disable = this.$input),
      this.updateDisplay()
  }
  updateDisplay() {
    return (this.$input.checked = this.getValue()), this
  }
}
function ub(r) {
  let t, e
  return (
    (t = r.match(/(#|0x)?([a-f0-9]{6})/i))
      ? (e = t[2])
      : (t = r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
      ? (e =
          parseInt(t[1]).toString(16).padStart(2, 0) +
          parseInt(t[2]).toString(16).padStart(2, 0) +
          parseInt(t[3]).toString(16).padStart(2, 0))
      : (t = r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
        (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]),
    !!e && '#' + e
  )
}
const IZ = {
    isPrimitive: !0,
    match: r => typeof r == 'string',
    fromHexString: ub,
    toHexString: ub,
  },
  Ep = {
    isPrimitive: !0,
    match: r => typeof r == 'number',
    fromHexString: r => parseInt(r.substring(1), 16),
    toHexString: r => '#' + r.toString(16).padStart(6, 0),
  },
  OZ = {
    isPrimitive: !1,
    match: Array.isArray,
    fromHexString(r, t, e = 1) {
      const n = Ep.fromHexString(r)
      ;(t[0] = (((n >> 16) & 255) / 255) * e),
        (t[1] = (((n >> 8) & 255) / 255) * e),
        (t[2] = ((255 & n) / 255) * e)
    },
    toHexString: ([r, t, e], n = 1) =>
      Ep.toHexString(
        ((r * (n = 255 / n)) << 16) ^ ((t * n) << 8) ^ ((e * n) << 0),
      ),
  },
  NZ = {
    isPrimitive: !1,
    match: r => Object(r) === r,
    fromHexString(r, t, e = 1) {
      const n = Ep.fromHexString(r)
      ;(t.r = (((n >> 16) & 255) / 255) * e),
        (t.g = (((n >> 8) & 255) / 255) * e),
        (t.b = ((255 & n) / 255) * e)
    },
    toHexString: ({r, g: t, b: e}, n = 1) =>
      Ep.toHexString(
        ((r * (n = 255 / n)) << 16) ^ ((t * n) << 8) ^ ((e * n) << 0),
      ),
  },
  kZ = [IZ, Ep, OZ, NZ]
class BZ extends ro {
  constructor(t, e, n, i) {
    var a
    super(t, e, n, 'color'),
      (this.$input = document.createElement('input')),
      this.$input.setAttribute('type', 'color'),
      this.$input.setAttribute('tabindex', -1),
      this.$input.setAttribute('aria-labelledby', this.$name.id),
      (this.$text = document.createElement('input')),
      this.$text.setAttribute('type', 'text'),
      this.$text.setAttribute('spellcheck', 'false'),
      this.$text.setAttribute('aria-labelledby', this.$name.id),
      (this.$display = document.createElement('div')),
      this.$display.classList.add('display'),
      this.$display.appendChild(this.$input),
      this.$widget.appendChild(this.$display),
      this.$widget.appendChild(this.$text),
      (this._format = ((a = this.initialValue), kZ.find(o => o.match(a)))),
      (this._rgbScale = i),
      (this._initialValueHexString = this.save()),
      (this._textFocused = !1),
      this.$input.addEventListener('input', () => {
        this._setValueFromHexString(this.$input.value)
      }),
      this.$input.addEventListener('blur', () => {
        this._callOnFinishChange()
      }),
      this.$text.addEventListener('input', () => {
        const o = ub(this.$text.value)
        o && this._setValueFromHexString(o)
      }),
      this.$text.addEventListener('focus', () => {
        ;(this._textFocused = !0), this.$text.select()
      }),
      this.$text.addEventListener('blur', () => {
        ;(this._textFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange()
      }),
      (this.$disable = this.$text),
      this.updateDisplay()
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const e = this._format.fromHexString(t)
      this.setValue(e)
    } else
      this._format.fromHexString(t, this.getValue(), this._rgbScale),
        this._callOnChange(),
        this.updateDisplay()
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale)
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this
  }
  updateDisplay() {
    return (
      (this.$input.value = this._format.toHexString(
        this.getValue(),
        this._rgbScale,
      )),
      this._textFocused || (this.$text.value = this.$input.value.substring(1)),
      (this.$display.style.backgroundColor = this.$input.value),
      this
    )
  }
}
class Mx extends ro {
  constructor(t, e, n) {
    super(t, e, n, 'function'),
      (this.$button = document.createElement('button')),
      this.$button.appendChild(this.$name),
      this.$widget.appendChild(this.$button),
      this.$button.addEventListener('click', i => {
        i.preventDefault(), this.getValue().call(this.object)
      }),
      this.$button.addEventListener('touchstart', () => {}, {
        passive: !0,
      }),
      (this.$disable = this.$button)
  }
}
class FZ extends ro {
  constructor(t, e, n, i, a, o) {
    super(t, e, n, 'number'), this._initInput(), this.min(i), this.max(a)
    const s = o !== void 0
    this.step(s ? o : this._getImplicitStep(), s), this.updateDisplay()
  }
  decimals(t) {
    return (this._decimals = t), this.updateDisplay(), this
  }
  min(t) {
    return (this._min = t), this._onUpdateMinMax(), this
  }
  max(t) {
    return (this._max = t), this._onUpdateMinMax(), this
  }
  step(t, e = !0) {
    return (this._step = t), (this._stepExplicit = e), this
  }
  updateDisplay() {
    const t = this.getValue()
    if (this._hasSlider) {
      let e = (t - this._min) / (this._max - this._min)
      ;(e = Math.max(0, Math.min(e, 1))),
        (this.$fill.style.width = 100 * e + '%')
    }
    return (
      this._inputFocused ||
        (this.$input.value =
          this._decimals === void 0 ? t : t.toFixed(this._decimals)),
      this
    )
  }
  _initInput() {
    ;(this.$input = document.createElement('input')),
      this.$input.setAttribute('type', 'number'),
      this.$input.setAttribute('step', 'any'),
      this.$input.setAttribute('aria-labelledby', this.$name.id),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input)
    const t = c => {
      const h = parseFloat(this.$input.value)
      isNaN(h) ||
        (this._snapClampSetValue(h + c), (this.$input.value = this.getValue()))
    }
    let e,
      n,
      i,
      a,
      o,
      s = !1
    const l = c => {
        if (s) {
          const h = c.clientX - e,
            f = c.clientY - n
          Math.abs(f) > 5
            ? (c.preventDefault(),
              this.$input.blur(),
              (s = !1),
              this._setDraggingStyle(!0, 'vertical'))
            : Math.abs(h) > 5 && u()
        }
        if (!s) {
          const h = c.clientY - i
          ;(o -= h * this._step * this._arrowKeyMultiplier(c)),
            a + o > this._max
              ? (o = this._max - a)
              : a + o < this._min && (o = this._min - a),
            this._snapClampSetValue(a + o)
        }
        i = c.clientY
      },
      u = () => {
        this._setDraggingStyle(!1, 'vertical'),
          this._callOnFinishChange(),
          window.removeEventListener('mousemove', l),
          window.removeEventListener('mouseup', u)
      }
    this.$input.addEventListener('input', () => {
      let c = parseFloat(this.$input.value)
      isNaN(c) ||
        (this._stepExplicit && (c = this._snap(c)),
        this.setValue(this._clamp(c)))
    }),
      this.$input.addEventListener('keydown', c => {
        c.code === 'Enter' && this.$input.blur(),
          c.code === 'ArrowUp' &&
            (c.preventDefault(), t(this._step * this._arrowKeyMultiplier(c))),
          c.code === 'ArrowDown' &&
            (c.preventDefault(),
            t(this._step * this._arrowKeyMultiplier(c) * -1))
      }),
      this.$input.addEventListener(
        'wheel',
        c => {
          this._inputFocused &&
            (c.preventDefault(), t(this._step * this._normalizeMouseWheel(c)))
        },
        {
          passive: !1,
        },
      ),
      this.$input.addEventListener('mousedown', c => {
        ;(e = c.clientX),
          (n = i = c.clientY),
          (s = !0),
          (a = this.getValue()),
          (o = 0),
          window.addEventListener('mousemove', l),
          window.addEventListener('mouseup', u)
      }),
      this.$input.addEventListener('focus', () => {
        this._inputFocused = !0
      }),
      this.$input.addEventListener('blur', () => {
        ;(this._inputFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange()
      })
  }
  _initSlider() {
    ;(this._hasSlider = !0),
      (this.$slider = document.createElement('div')),
      this.$slider.classList.add('slider'),
      (this.$fill = document.createElement('div')),
      this.$fill.classList.add('fill'),
      this.$slider.appendChild(this.$fill),
      this.$widget.insertBefore(this.$slider, this.$input),
      this.domElement.classList.add('hasSlider')
    const t = f => {
        const d = this.$slider.getBoundingClientRect()
        let p =
          ((g = f),
          (v = d.left),
          (m = d.right),
          (y = this._min),
          (_ = this._max),
          ((g - v) / (m - v)) * (_ - y) + y)
        var g, v, m, y, _
        this._snapClampSetValue(p)
      },
      e = f => {
        t(f.clientX)
      },
      n = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener('mousemove', e),
          window.removeEventListener('mouseup', n)
      }
    let i,
      a,
      o = !1
    const s = f => {
        f.preventDefault(),
          this._setDraggingStyle(!0),
          t(f.touches[0].clientX),
          (o = !1)
      },
      l = f => {
        if (o) {
          const d = f.touches[0].clientX - i,
            p = f.touches[0].clientY - a
          Math.abs(d) > Math.abs(p)
            ? s(f)
            : (window.removeEventListener('touchmove', l),
              window.removeEventListener('touchend', u))
        } else f.preventDefault(), t(f.touches[0].clientX)
      },
      u = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener('touchmove', l),
          window.removeEventListener('touchend', u)
      },
      c = this._callOnFinishChange.bind(this)
    let h
    this.$slider.addEventListener('mousedown', f => {
      this._setDraggingStyle(!0),
        t(f.clientX),
        window.addEventListener('mousemove', e),
        window.addEventListener('mouseup', n)
    }),
      this.$slider.addEventListener(
        'touchstart',
        f => {
          f.touches.length > 1 ||
            (this._hasScrollBar
              ? ((i = f.touches[0].clientX),
                (a = f.touches[0].clientY),
                (o = !0))
              : s(f),
            window.addEventListener('touchmove', l, {
              passive: !1,
            }),
            window.addEventListener('touchend', u))
        },
        {
          passive: !1,
        },
      ),
      this.$slider.addEventListener(
        'wheel',
        f => {
          if (Math.abs(f.deltaX) < Math.abs(f.deltaY) && this._hasScrollBar)
            return
          f.preventDefault()
          const d = this._normalizeMouseWheel(f) * this._step
          this._snapClampSetValue(this.getValue() + d),
            (this.$input.value = this.getValue()),
            clearTimeout(h),
            (h = setTimeout(c, 400))
        },
        {
          passive: !1,
        },
      )
  }
  _setDraggingStyle(t, e = 'horizontal') {
    this.$slider && this.$slider.classList.toggle('active', t),
      document.body.classList.toggle('lil-gui-dragging', t),
      document.body.classList.toggle('lil-gui-' + e, t)
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1
  }
  _onUpdateMinMax() {
    !this._hasSlider &&
      this._hasMin &&
      this._hasMax &&
      (this._stepExplicit || this.step(this._getImplicitStep(), !1),
      this._initSlider(),
      this.updateDisplay())
  }
  _normalizeMouseWheel(t) {
    let {deltaX: e, deltaY: n} = t
    return (
      Math.floor(t.deltaY) !== t.deltaY &&
        t.wheelDelta &&
        ((e = 0),
        (n = -t.wheelDelta / 120),
        (n *= this._stepExplicit ? 1 : 10)),
      e + -n
    )
  }
  _arrowKeyMultiplier(t) {
    let e = this._stepExplicit ? 1 : 10
    return t.shiftKey ? (e *= 10) : t.altKey && (e /= 10), e
  }
  _snap(t) {
    const e = Math.round(t / this._step) * this._step
    return parseFloat(e.toPrecision(15))
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)))
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children
    return t.scrollHeight > t.clientHeight
  }
  get _hasMin() {
    return this._min !== void 0
  }
  get _hasMax() {
    return this._max !== void 0
  }
}
class zZ extends ro {
  constructor(t, e, n, i) {
    super(t, e, n, 'option'),
      (this.$select = document.createElement('select')),
      this.$select.setAttribute('aria-labelledby', this.$name.id),
      (this.$display = document.createElement('div')),
      this.$display.classList.add('display'),
      (this._values = Array.isArray(i) ? i : Object.values(i)),
      (this._names = Array.isArray(i) ? i : Object.keys(i)),
      this._names.forEach(a => {
        const o = document.createElement('option')
        ;(o.innerHTML = a), this.$select.appendChild(o)
      }),
      this.$select.addEventListener('change', () => {
        this.setValue(this._values[this.$select.selectedIndex]),
          this._callOnFinishChange()
      }),
      this.$select.addEventListener('focus', () => {
        this.$display.classList.add('focus')
      }),
      this.$select.addEventListener('blur', () => {
        this.$display.classList.remove('focus')
      }),
      this.$widget.appendChild(this.$select),
      this.$widget.appendChild(this.$display),
      (this.$disable = this.$select),
      this.updateDisplay()
  }
  updateDisplay() {
    const t = this.getValue(),
      e = this._values.indexOf(t)
    return (
      (this.$select.selectedIndex = e),
      (this.$display.innerHTML = e === -1 ? t : this._names[e]),
      this
    )
  }
}
class UZ extends ro {
  constructor(t, e, n) {
    super(t, e, n, 'string'),
      (this.$input = document.createElement('input')),
      this.$input.setAttribute('type', 'text'),
      this.$input.setAttribute('aria-labelledby', this.$name.id),
      this.$input.addEventListener('input', () => {
        this.setValue(this.$input.value)
      }),
      this.$input.addEventListener('keydown', i => {
        i.code === 'Enter' && this.$input.blur()
      }),
      this.$input.addEventListener('blur', () => {
        this._callOnFinishChange()
      }),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input),
      this.updateDisplay()
  }
  updateDisplay() {
    return (this.$input.value = this.getValue()), this
  }
}
let KD = !1
class rT {
  constructor({
    parent: t,
    autoPlace: e = t === void 0,
    container: n,
    width: i,
    title: a = 'Controls',
    injectStyles: o = !0,
    touchStyles: s = !0,
  } = {}) {
    if (
      ((this.parent = t),
      (this.root = t ? t.root : this),
      (this.children = []),
      (this.controllers = []),
      (this.folders = []),
      (this._closed = !1),
      (this._hidden = !1),
      (this.domElement = document.createElement('div')),
      this.domElement.classList.add('lil-gui'),
      (this.$title = document.createElement('div')),
      this.$title.classList.add('title'),
      this.$title.setAttribute('role', 'button'),
      this.$title.setAttribute('aria-expanded', !0),
      this.$title.setAttribute('tabindex', 0),
      this.$title.addEventListener('click', () =>
        this.openAnimated(this._closed),
      ),
      this.$title.addEventListener('keydown', l => {
        ;(l.code !== 'Enter' && l.code !== 'Space') ||
          (l.preventDefault(), this.$title.click())
      }),
      this.$title.addEventListener('touchstart', () => {}, {
        passive: !0,
      }),
      (this.$children = document.createElement('div')),
      this.$children.classList.add('children'),
      this.domElement.appendChild(this.$title),
      this.domElement.appendChild(this.$children),
      this.title(a),
      s && this.domElement.classList.add('allow-touch-styles'),
      this.parent)
    )
      return (
        this.parent.children.push(this),
        this.parent.folders.push(this),
        void this.parent.$children.appendChild(this.domElement)
      )
    this.domElement.classList.add('root'),
      !KD &&
        o &&
        ((function (l) {
          const u = document.createElement('style')
          u.innerHTML = l
          const c = document.querySelector(
            'head link[rel=stylesheet], head style',
          )
          c ? document.head.insertBefore(u, c) : document.head.appendChild(u)
        })(
          '.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}',
        ),
        (KD = !0)),
      n
        ? n.appendChild(this.domElement)
        : e &&
          (this.domElement.classList.add('autoPlace'),
          document.body.appendChild(this.domElement)),
      i && this.domElement.style.setProperty('--width', i + 'px'),
      this.domElement.addEventListener('keydown', l => l.stopPropagation()),
      this.domElement.addEventListener('keyup', l => l.stopPropagation())
  }
  add(t, e, n, i, a) {
    if (Object(n) === n) return new zZ(this, t, e, n)
    const o = t[e]
    switch (typeof o) {
      case 'number':
        return new FZ(this, t, e, n, i, a)
      case 'boolean':
        return new RZ(this, t, e)
      case 'string':
        return new UZ(this, t, e)
      case 'function':
        return new Mx(this, t, e)
    }
    console.error(
      `gui.add failed
	property:`,
      e,
      `
	object:`,
      t,
      `
	value:`,
      o,
    )
  }
  addColor(t, e, n = 1) {
    return new BZ(this, t, e, n)
  }
  addFolder(t) {
    return new rT({
      parent: this,
      title: t,
    })
  }
  load(t, e = !0) {
    return (
      t.controllers &&
        this.controllers.forEach(n => {
          n instanceof Mx ||
            (n._name in t.controllers && n.load(t.controllers[n._name]))
        }),
      e &&
        t.folders &&
        this.folders.forEach(n => {
          n._title in t.folders && n.load(t.folders[n._title])
        }),
      this
    )
  }
  save(t = !0) {
    const e = {
      controllers: {},
      folders: {},
    }
    return (
      this.controllers.forEach(n => {
        if (!(n instanceof Mx)) {
          if (n._name in e.controllers)
            throw new Error(
              `Cannot save GUI with duplicate property "${n._name}"`,
            )
          e.controllers[n._name] = n.save()
        }
      }),
      t &&
        this.folders.forEach(n => {
          if (n._title in e.folders)
            throw new Error(
              `Cannot save GUI with duplicate folder "${n._title}"`,
            )
          e.folders[n._title] = n.save()
        }),
      e
    )
  }
  open(t = !0) {
    return (
      (this._closed = !t),
      this.$title.setAttribute('aria-expanded', !this._closed),
      this.domElement.classList.toggle('closed', this._closed),
      this
    )
  }
  close() {
    return this.open(!1)
  }
  show(t = !0) {
    return (
      (this._hidden = !t),
      (this.domElement.style.display = this._hidden ? 'none' : ''),
      this
    )
  }
  hide() {
    return this.show(!1)
  }
  openAnimated(t = !0) {
    return (
      (this._closed = !t),
      this.$title.setAttribute('aria-expanded', !this._closed),
      requestAnimationFrame(() => {
        const e = this.$children.clientHeight
        ;(this.$children.style.height = e + 'px'),
          this.domElement.classList.add('transition')
        const n = a => {
          a.target === this.$children &&
            ((this.$children.style.height = ''),
            this.domElement.classList.remove('transition'),
            this.$children.removeEventListener('transitionend', n))
        }
        this.$children.addEventListener('transitionend', n)
        const i = t ? this.$children.scrollHeight : 0
        this.domElement.classList.toggle('closed', !t),
          requestAnimationFrame(() => {
            this.$children.style.height = i + 'px'
          })
      }),
      this
    )
  }
  title(t) {
    return (this._title = t), (this.$title.innerHTML = t), this
  }
  reset(t = !0) {
    return (
      (t ? this.controllersRecursive() : this.controllers).forEach(e =>
        e.reset(),
      ),
      this
    )
  }
  onChange(t) {
    return (this._onChange = t), this
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t),
      this._onChange !== void 0 &&
        this._onChange.call(this, {
          object: t.object,
          property: t.property,
          value: t.getValue(),
          controller: t,
        })
  }
  onFinishChange(t) {
    return (this._onFinishChange = t), this
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, {
          object: t.object,
          property: t.property,
          value: t.getValue(),
          controller: t,
        })
  }
  destroy() {
    this.parent &&
      (this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
      this.domElement.parentElement &&
        this.domElement.parentElement.removeChild(this.domElement),
      Array.from(this.children).forEach(t => t.destroy())
  }
  controllersRecursive() {
    let t = Array.from(this.controllers)
    return (
      this.folders.forEach(e => {
        t = t.concat(e.controllersRecursive())
      }),
      t
    )
  }
  foldersRecursive() {
    let t = Array.from(this.folders)
    return (
      this.folders.forEach(e => {
        t = t.concat(e.foldersRecursive())
      }),
      t
    )
  }
}
