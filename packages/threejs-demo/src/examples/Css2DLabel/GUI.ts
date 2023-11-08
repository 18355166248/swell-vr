import * as THREE from 'three'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'

export default function initGUI(camera: THREE.PerspectiveCamera) {
  const layers = {
    'Toggle Name': function () {
      camera.layers.toggle(0)
    },
    'Toggle Mass': function () {
      camera.layers.toggle(1)
    },
    'Enable All': function () {
      camera.layers.enableAll()
    },

    'Disable All': function () {
      camera.layers.disableAll()
    },
  }

  const gui = new GUI()

  gui.title('Camera Layers')

  gui.add(layers, 'Toggle Name')
  gui.add(layers, 'Toggle Mass')
  gui.add(layers, 'Enable All')
  gui.add(layers, 'Disable All')

  gui.open()

  return gui
}
