/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CSS3DRenderer,
  CSS3DSprite,
  CSS3DObject,
} from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import {uuid} from '../utils/base'
import * as THREE from 'three'
import {SizeManager, TimeManager, CameraManager} from '../MapApplication'

export type Label3DProps = Omit<CSS3DSprite, 'remove'> &
  Required<{
    init?: (a: string, y: THREE.Vector3) => void
    hide?: () => void
    show?: () => void
    setParent?: (a: THREE.Object3D) => void
    remove?: () => void
  }>

class Label3D {
  scene: THREE.Scene
  camera: CameraManager
  time: TimeManager
  sizes: SizeManager
  canvas: HTMLCanvasElement
  parent: THREE.Object3D | null
  css3dRender: CSS3DRenderer
  constructor({
    scene,
    camera,
    time,
    sizes,
    canvas,
  }: {
    scene: THREE.Scene
    camera: CameraManager
    time: TimeManager
    sizes: SizeManager
    canvas: HTMLCanvasElement
  }) {
    this.scene = scene
    this.camera = camera
    this.time = time
    this.sizes = sizes
    this.canvas = canvas
    this.parent = null
    const {width: a, height: y} = this.sizes
    const o = new CSS3DRenderer()
    o.setSize(a!, y!)
    o.domElement.style.position = 'absolute'
    o.domElement.style.left = '0px'
    o.domElement.style.top = '0px'
    o.domElement.style.pointerEvents = 'none'
    o.domElement.className = 'label3d-' + uuid()
    this.canvas.parentNode?.appendChild(o.domElement)
    this.css3dRender = o
    this.time.on('tick', () => {
      this.update()
    })
    this.sizes.on('resize', () => {
      this.resize()
    })
  }
  create(i = '', n = '', d = !1) {
    const r = document.createElement('div')
    r.innerHTML = i
    r.className = n
    r.style.visibility = 'hidden'
    r.style.position = 'absolute'
    if (n) {
      r.style.padding = '10px'
      r.style.color = '#fff'
      r.style.fontSize = '12px'
      r.style.textAlign = 'center'
      r.style.background = 'rgba(0,0,0,0.6)'
      r.style.borderRadius = '4px'
    }

    let l:
      | (Omit<CSS3DSprite, 'remove'> & {
          init?: (a: string, y: THREE.Vector3) => void
          hide?: () => void
          show?: () => void
          setParent?: (a: THREE.Object3D) => void
          remove?: () => void
        })
      | null = null

    d ? (l = new CSS3DSprite(r)) : (l = new CSS3DObject(r))
    l.init = (a, y) => {
      l.element.innerHTML = a
      l.element.style.visibility = 'visible'
      l.position.copy(y)
    }
    l.hide = () => {
      l.element.style.visibility = 'hidden'
    }
    l.show = () => {
      l.element.style.visibility = 'visible'
    }
    l.setParent = a => {
      this.parent = a
      a.add(l as unknown as THREE.Object3D)
    }
    l.remove = () => {
      this.parent?.remove(l as unknown as THREE.Object3D)
    }

    return l as Label3DProps
  }
  setLabelStyle(i: any, n = 0.1, d = 'x', r = Math.PI / 2, l = 'none') {
    i.element.style.pointerEvents = l
    i.scale.set(n, n, n)
    i.rotation[d] = r
  }
  update() {
    this.css3dRender.render(this.scene, this.camera.instance)
  }
  destroy() {
    if (this.css3dRender) {
      const i = this.css3dRender.domElement
      i.parentNode?.removeChild(i)
    }
  }
  resize() {
    const {width: i, height: n} = this.sizes
    this.css3dRender.setSize(i!, n!)
  }
}
export {Label3D}
