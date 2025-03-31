
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
