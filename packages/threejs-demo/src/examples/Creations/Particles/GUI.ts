import * as THREE from 'three'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import {createStyledParticlesByPoints} from './createStyledParticles'

export class Ctrls {
  static size: number | undefined
  static transparent: boolean | undefined
  static opacity: number | undefined
  static vertexColors: boolean | undefined
  static color: number | undefined
  static vertexColor: number
  static sizeAttenuation: boolean | undefined

  size: number
  transparent: boolean
  opacity: number
  vertexColors: boolean
  color: number
  vertexColor: number
  sizeAttenuation: boolean
  rotate: boolean
  redraw: () => void

  constructor(scene: THREE.Scene, callback: () => void) {
    this.size = 5
    this.transparent = true
    this.opacity = 0.6
    this.vertexColors = true
    this.color = 0xffffff
    this.vertexColor = 0x00ff00
    this.sizeAttenuation = true
    this.rotate = true
    this.redraw = function () {
      if (scene.getObjectByName('particles')) {
        scene.remove(
          scene.getObjectByName(
            'particles',
          ) as THREE.Object3D<THREE.Object3DEventMap>,
        )
      }
      callback()
    }
  }
}

export default function initGUI(container: HTMLElement, scene: THREE.Scene) {
  // 创建属性控制器
  const ctrls = new Ctrls(scene, () => {
    createStyledParticlesByPoints(
      {
        size: ctrls.size,
        transparent: ctrls.transparent,
        opacity: ctrls.opacity,
        vertexColors: ctrls.vertexColors,
        sizeAttenuation: ctrls.sizeAttenuation,
        color: ctrls.color,
        vertexColor: ctrls.vertexColor,
      },
      scene,
    )
  })

  const div = document.createElement('div')
  container.appendChild(div)
  div.style.position = 'absolute'
  div.style.zIndex = '9'
  div.style.right = '0'
  div.style.top = '0'

  const gui = new GUI({container: div, title: 'Camera Layers'})

  gui.add(ctrls, 'size', 0, 10).onChange(ctrls.redraw)
  gui.add(ctrls, 'transparent').onChange(ctrls.redraw)
  gui.add(ctrls, 'opacity', 0, 1).onChange(ctrls.redraw)
  gui.add(ctrls, 'vertexColors').onChange(ctrls.redraw)
  gui.addColor(ctrls, 'color').onChange(ctrls.redraw)
  gui.addColor(ctrls, 'vertexColor').onChange(ctrls.redraw)
  gui.add(ctrls, 'sizeAttenuation').onChange(ctrls.redraw)

  gui.open()

  return {gui, ctrls}
}
