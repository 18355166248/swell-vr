import * as THREE from 'three'

export function initLight() {
  const dirLight = new THREE.DirectionalLight(0xffffff, 3)
  dirLight.position.set(-100, 0, -100)

  // 点光源
  const pointLight = new THREE.PointLight(0x88ffee, 1, 100, 3)
  pointLight.position.set(0, 3, 3)

  return {dirLight, pointLight}
}
