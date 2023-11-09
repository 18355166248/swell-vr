import * as THREE from 'three'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'

export default function initGUI(
  scene: THREE.Scene,
  container: HTMLElement,
  texture: THREE.Texture,
  texture2: THREE.Texture,
  textureCube: THREE.CubeTexture,
  textureCube1: THREE.CubeTexture,
) {
  const layers = {
    Cube: function () {
      scene.background = textureCube
    },
    Cube2: function () {
      scene.background = textureCube1
    },
    Equirectangular: function () {
      scene.background = texture
    },
    Equirectangular2: function () {
      scene.background = texture2
    },
  }

  const div = document.createElement('div')
  container.appendChild(div)
  div.style.position = 'absolute'
  div.style.right = '0'
  div.style.top = '0'

  const gui = new GUI({container: div, title: 'Camera Layers'})

  gui.add(layers, 'Cube')
  gui.add(layers, 'Cube2')
  gui.add(layers, 'Equirectangular')
  gui.add(layers, 'Equirectangular2')

  gui.open()

  return gui
}
