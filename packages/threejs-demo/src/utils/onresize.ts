import * as THREE from 'three'

export function initReSize(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.Renderer,
  render: () => void,
) {
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
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
