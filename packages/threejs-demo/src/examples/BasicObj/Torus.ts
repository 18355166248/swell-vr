import * as THREE from 'three'

export function initTorus() {
  const TorusGeometry = new THREE.TorusGeometry(150, 8, 2, 120)
  const TorusMaterial = new THREE.MeshLambertMaterial({
    color: 0x40a9ff,
    wireframe: true,
  })
  const mesh = new THREE.Mesh(TorusGeometry, TorusMaterial)
  mesh.rotation.x = Math.PI / 2
  mesh.rotation.y = -0.5 * (Math.PI / 2)

  return mesh
}
