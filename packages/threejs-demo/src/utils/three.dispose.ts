import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

export function disposeList({
  scene,
  renderer,
  controls,
  requestAnimationNumber,
  dispose,
}: {
  scene: THREE.Scene
  renderer: THREE.WebGLRenderer
  controls?: OrbitControls
  requestAnimationNumber?: number
  dispose?: () => void
}) {
  scene && scene.remove(...scene.children)
  controls && controls.dispose()
  if (renderer) {
    renderer.renderLists && renderer.renderLists.dispose()
    renderer.dispose && renderer.dispose()
    renderer.forceContextLoss()
    renderer?.domElement.remove()
  }
  if (requestAnimationNumber) {
    cancelAnimationFrame(requestAnimationNumber)
  }
  dispose?.()
}
