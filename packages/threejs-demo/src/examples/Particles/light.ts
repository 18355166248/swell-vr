import * as THREE from 'three'

export function initLight() {
  const dirLight = new THREE.DirectionalLight(0xffffff, 3)
  dirLight.position.set(-100, 0, -100)

  // 点光源
  const pointLight = new THREE.PointLight(0x88ffee, 3.14, 18, 3)
  pointLight.position.set(0, 5, 1.2)

  function lightDispose() {
    dirLight.dispose()
    pointLight.dispose()
  }

  return {dirLight, pointLight, lightDispose}
}
