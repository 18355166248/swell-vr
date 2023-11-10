import * as THREE from 'three'

export function initIcosahedron() {
  const icosahedronGroup = new THREE.Group()
  const material = new THREE.MeshToonMaterial({
    color: 0x63b8ff,
  })
  const geometry = new THREE.IcosahedronGeometry(16, 0)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(160, 160, 160)

  const material2 = new THREE.MeshToonMaterial({
    color: 0xffffff,
  })
  const geometry2 = new THREE.IcosahedronGeometry(10, 0)
  const mesh2 = new THREE.Mesh(geometry2, material2)
  mesh2.position.set(-100, 0, 200)

  icosahedronGroup.add(mesh)
  icosahedronGroup.add(mesh2)
  return icosahedronGroup
}
