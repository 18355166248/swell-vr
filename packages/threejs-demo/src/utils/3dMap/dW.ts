/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import EventEmitter from 'eventemitter3'
import {cloneDeep, isNull, merge} from 'lodash-es'
import {Tween} from 'three/examples/jsm/libs/tween.module.js'

const uW = Object.defineProperties(
  Object.assign(
    {},
    Object.getOwnPropertyDescriptors({
      duration: 1e3,
      loop: 0,
      yoyo: !1,
    }),
  ),
  {
    type: 'straight' as any,
  },
)

let AG, EG
;((EG = AG || (AG = {})).WebGis = 'webGis'),
  (EG.XGis = 'xGis'),
  (EG.Engine = 'engine')

export class dW {
  constructor(t) {
    this.props = t
    ;(this.ee = new EventEmitter()),
      (this.__isRenderHeightZero = () =>
        0 === this.props.renderSystem.getSize().y),
      (this.state = this.props.config)
    const {gisStateApi: e, controls: i} = this.props.controlsSystem
    e.subscribe(AG.WebGis, () => {
      this.props.gis.ee.emit('viewportChange', this.get())
    }),
      [
        ['pan', 'pan'],
        ['panStart', 'panStart'],
        ['panEnd', 'panEnd'],
        ['zoom', 'zoom'],
        ['zoomStart', 'zoomStart'],
        ['zoomEnd', 'zoomEnd'],
        ['rotate', 'rotate'],
        ['rotateStart', 'rotateStart'],
        ['rotateEnd', 'rotateEnd'],
        ['pitch', 'pitch'],
        ['pitchStart', 'pitchStart'],
        ['pitchEnd', 'pitchEnd'],
      ].forEach(([t, e]) => {
        i.addEventListener(t, () => {
          this.props.gis.ee.emit(e, this.get())
        })
      })
  }
  init(t = this.state.mode) {
    switch (t) {
      case 'xgis':
        this.set(this.state)
        break
      case 'webgis':
        this.setWebGisCameraState(this.state)
        break
      case 'engine':
        this.setCameraState(this.state)
        break
      default:
        this.logService.error('视角初始化参数不合理')
    }
  }
  get() {
    const {gisStateApi: t} = this.props.controlsSystem
    return {
      zoom: t.getSourceState().zoom,
      center: t.getSourceState().center,
      pitch: t.getSourceState().pitch,
      rotation: t.getSourceState().rotation,
      enableZoom: t.getSourceState().enableZoom,
      enablePitch: t.getSourceState().enablePitch,
      enableRotate: t.getSourceState().enableRotate,
      enablePan: t.getSourceState().enablePan,
      lock: t.getSourceState().lock,
      zoomSpeed: t.getSourceState().zoomSpeed,
      rotateSpeed: t.getSourceState().rotateSpeed,
      panSpeed: t.getSourceState().panSpeed,
      maxPitch: t.getSourceState().maxPitch,
      minPitch: t.getSourceState().minPitch,
      maxRotation: t.getSourceState().maxRotation,
      minRotation: t.getSourceState().minRotation,
      minZoom: t.getSourceState().minZoom,
      maxZoom: t.getSourceState().maxZoom,
      drillSave: t.getSourceState().drillSave,
      offset: t.get(AG.XGis).offset,
    }
  }
  set(t, e) {
    if (((this.state = cloneDeep(this.state, t)), this.__isRenderHeightZero()))
      return this.logService.warn('画布的高度为0', '跳过 set'), this
    const {gisStateApi: i} = this.props.controlsSystem,
      n = merge(
        {
          offset: isNull(t.offset) ? i.get(AG.XGis).offset : t.offset,
          pitch: isNull(t.pitch) ? i.getSourceState().pitch : t.pitch,
          rotation: isNull(t.rotation)
            ? i.getSourceState().rotation
            : t.rotation,
        },
        this.getBaseCameraState(t),
      )
    if (e) {
      const t = cloneDeep(uW, e),
        {type: r, loop: o, yoyo: a, duration: s, delay: l} = t,
        u = new Tween()
      let c
      switch (r) {
        case 'orbit':
          i.set(AG.XGis, n),
            (c = {
              name: '相机环绕轨道动画',
              loop: o,
              yoyo: a,
              onStart: () => {
                this.props.controlsSystem.lock()
              },
              onComplete: () => {
                this.props.controlsSystem.unlock(),
                  this.props.controlsSystem.controls.dispatchEvent({
                    type: 'end',
                  })
              },
              onUpdate: t => {
                i.set(AG.WebGis, t),
                  this.props.controlsSystem.controls.dispatchEvent({
                    type: 'change',
                  })
              },
              animation: [
                {
                  from: {
                    rotation: i.getSourceState().minRotation,
                  },
                  to: {
                    rotation: i.getSourceState().maxRotation,
                  },
                  duration: s,
                  delay: l,
                },
              ],
            })
          break
        case 'straight':
          c = {
            name: '相机两点直线动画',
            loop: o,
            yoyo: a,
            onStart: () => {
              this.props.controlsSystem.lock()
            },
            onComplete: () => {
              this.props.controlsSystem.unlock(),
                this.props.controlsSystem.controls.dispatchEvent({
                  type: 'end',
                })
            },
            onUpdate: t => {
              i.set(AG.XGis, t),
                this.props.controlsSystem.controls.dispatchEvent({
                  type: 'change',
                })
            },
            animation: [
              {
                from: {
                  offset: i.get(AG.XGis).offset,
                  pitch: i.getSourceState().pitch,
                  rotation: i.getSourceState().rotation,
                },
                to: n,
                duration: s,
                delay: l,
              },
            ],
          }
      }
      u.run(c)
    } else
      i.set(AG.XGis, n),
        this.props.controlsSystem.controls.dispatchEvent({
          type: 'end',
        })
    return this
  }
  getCameraState() {
    return {
      position: this.props.cameraSystem.coreCamera.position.toArray(),
      target: this.props.controlsSystem.controls.target.toArray(),
      up: this.props.cameraSystem.coreCamera.up.toArray(),
    }
  }
  setCameraState(t, e) {
    this.state = cloneDeep(this.state, t)
    const {gisStateApi: i} = this.props.controlsSystem
    if (this.__isRenderHeightZero())
      return this.logService.warn('画布的高度为0', '跳过 setCameraState'), this
    if (e) {
      const n = cloneDeep(uW, e),
        {type: r, loop: o, yoyo: a, duration: s, delay: l} = n,
        u = new Tween()
      let c
      switch (r) {
        case 'orbit':
          i.set(AG.Engine, t),
            (c = {
              name: '相机环绕轨道动画',
              loop: o,
              yoyo: a,
              onStart: () => {
                this.props.controlsSystem.lock()
              },
              onComplete: () => {
                this.props.controlsSystem.unlock(),
                  this.props.controlsSystem.controls.dispatchEvent({
                    type: 'end',
                  })
              },
              onUpdate: t => {
                i.set(AG.WebGis, t),
                  this.props.controlsSystem.controls.dispatchEvent({
                    type: 'change',
                  })
              },
              animation: [
                {
                  from: {
                    rotation: i.getSourceState().rotation,
                  },
                  to: {
                    rotation: 360 + i.getSourceState().rotation,
                  },
                  duration: s,
                  delay: l,
                },
              ],
            })
          break
        case 'straight':
          c = {
            name: '相机两点直线动画',
            loop: o,
            yoyo: a,
            onStart: () => {
              this.props.controlsSystem.lock()
            },
            onComplete: () => {
              this.props.controlsSystem.unlock(),
                this.props.controlsSystem.controls.dispatchEvent({
                  type: 'end',
                })
            },
            onUpdate: t => {
              i.set(AG.Engine, t),
                this.props.controlsSystem.controls.dispatchEvent({
                  type: 'change',
                })
            },
            animation: [
              {
                from: {
                  position:
                    this.props.cameraSystem.coreCamera.position.toArray(),
                  target: this.props.controlsSystem.controls.target.toArray(),
                  up: this.props.cameraSystem.coreCamera.up.toArray(),
                },
                to: t,
                duration: s,
                delay: l,
              },
            ],
          }
      }
      u.run(c)
    } else
      i.set(AG.Engine, t),
        this.props.controlsSystem.controls.dispatchEvent({
          type: 'end',
        })
    return this
  }
  getWebGisCameraState() {
    const {gisStateApi: t} = this.props.controlsSystem
    return t.get(AG.WebGis)
  }
  setWebGisCameraState(t, e) {
    if (((this.state = cloneDeep(this.state, t)), this.__isRenderHeightZero()))
      return (
        this.logService.warn('画布的高度为0', '跳过 setWebGisCameraState'), this
      )
    const {gisStateApi: i} = this.props.controlsSystem,
      n = merge(
        {
          zoom: isNull(t.zoom) ? i.getSourceState().zoom : t.zoom,
          center: isNull(t.center) ? i.getSourceState().center : t.center,
          pitch: isNull(t.pitch) ? i.getSourceState().pitch : t.pitch,
          rotation: isNull(t.rotation)
            ? i.getSourceState().rotation
            : t.rotation,
        },
        this.getBaseCameraState(t),
      )
    if (e) {
      const t = cloneDeep(uW, e),
        {type: r, loop: o, yoyo: a, duration: s, delay: l} = t,
        u = new Tween()
      let c
      switch (r) {
        case 'orbit':
          i.set(AG.WebGis, n),
            (c = {
              name: '相机环绕轨道动画',
              loop: o,
              yoyo: a,
              onStart: () => {
                this.props.controlsSystem.lock()
              },
              onComplete: () => {
                this.props.controlsSystem.unlock(),
                  this.props.controlsSystem.controls.dispatchEvent({
                    type: 'end',
                  })
              },
              onUpdate: t => {
                i.set(AG.WebGis, t),
                  this.props.controlsSystem.controls.dispatchEvent({
                    type: 'change',
                  })
              },
              animation: [
                {
                  from: {
                    rotation: i.getSourceState().minRotation,
                  },
                  to: {
                    rotation: i.getSourceState().maxRotation,
                  },
                  duration: s,
                  delay: l,
                },
              ],
            })
          break
        case 'straight':
          c = {
            name: '相机两点直线动画',
            loop: o,
            yoyo: a,
            onStart: () => {
              this.props.controlsSystem.lock()
            },
            onComplete: () => {
              this.props.controlsSystem.unlock(),
                this.props.controlsSystem.controls.dispatchEvent({
                  type: 'end',
                })
            },
            onUpdate: t => {
              i.set(AG.WebGis, t),
                this.props.controlsSystem.controls.dispatchEvent({
                  type: 'change',
                })
            },
            animation: [
              {
                from: {
                  zoom: i.getSourceState().zoom,
                  center: i.getSourceState().center,
                  pitch: i.getSourceState().pitch,
                  rotation: i.getSourceState().rotation,
                },
                to: n,
                duration: s,
                delay: l,
              },
            ],
          }
      }
      u.run(c)
    } else
      i.set(AG.WebGis, n),
        this.props.controlsSystem.controls.dispatchEvent({
          type: 'end',
        })
    return this
  }
  getBaseCameraState(t) {
    const {gisStateApi: e} = this.props.controlsSystem
    return {
      enablePan: isNull(t.enablePan)
        ? e.getSourceState().enablePan
        : t.enablePan,
      enablePitch: isNull(t.enablePitch)
        ? e.getSourceState().enablePitch
        : t.enablePitch,
      enableRotate: isNull(t.enableRotate)
        ? e.getSourceState().enableRotate
        : t.enableRotate,
      enableZoom: isNull(t.enableZoom)
        ? e.getSourceState().enableZoom
        : t.enableZoom,
      lock: isNull(t.lock) ? e.getSourceState().lock : t.lock,
      zoomSpeed: isNull(t.zoomSpeed)
        ? e.getSourceState().zoomSpeed
        : t.zoomSpeed,
      rotateSpeed: isNull(t.rotateSpeed)
        ? e.getSourceState().rotateSpeed
        : t.rotateSpeed,
      panSpeed: isNull(t.panSpeed) ? e.getSourceState().panSpeed : t.panSpeed,
      maxPitch: isNull(t.maxPitch) ? e.getSourceState().maxPitch : t.maxPitch,
      minPitch: isNull(t.minPitch) ? e.getSourceState().minPitch : t.minPitch,
      maxRotation: isNull(t.maxRotation)
        ? e.getSourceState().maxRotation
        : t.maxRotation,
      minRotation: isNull(t.minRotation)
        ? e.getSourceState().minRotation
        : t.minRotation,
      maxZoom: isNull(t.maxZoom) ? e.getSourceState().maxZoom : t.maxZoom,
      minZoom: isNull(t.minZoom) ? e.getSourceState().minZoom : t.minZoom,
      drillSave: isNull(t.drillSave)
        ? e.getSourceState().drillSave
        : t.drillSave,
    }
  }
  setSize(t, e) {
    this.props.cameraSystem.update(t, e)
  }
  destroy() {
    this.ee.removeAllListeners()
  }
}
