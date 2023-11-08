import * as THREE from 'three'

export function initLight() {
  const dirLight = new THREE.DirectionalLight(0xffffff, 3)
  dirLight.position.set(0, 0, 1)
  return dirLight
}
