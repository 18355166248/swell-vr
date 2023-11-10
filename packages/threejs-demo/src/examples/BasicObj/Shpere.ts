import * as THREE from 'three'

export function initSphere() {
  const SphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x03c03c,
    wireframe: true,
  })
  const SphereGeometry = new THREE.SphereGeometry(80, 32, 32)
  const mesh = new THREE.Mesh(SphereGeometry, SphereMaterial)
  return mesh
}
