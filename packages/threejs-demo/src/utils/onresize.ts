import * as THREE from 'three'

export function initReSize(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  render: (num?: number) => void,
) {
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    render()
  }

  function addEventListenerResize() {
    window.addEventListener('resize', onWindowResize)
  }

  function removeEventListenerResize() {
    window.removeEventListener('resize', onWindowResize)
  }

  return {
    addEventListenerResize,
    removeEventListenerResize,
  }
}
