import * as THREE from 'three'

export function initStars() {
  const group = new THREE.Group()
  const material = new THREE.MeshToonMaterial({
    color: 0xffffff,
  })
  for (let i = 0; i < 100; i++) {
    const geometry = new THREE.IcosahedronGeometry(
      Math.ceil(Math.random() * 2),
      0,
    )
    const mesh = new THREE.Mesh(geometry, material)
    const x = Number(`${(Math.random() - 0.5) * 800}`)
    const y = Number(`${(Math.random() - 0.5) * 800}`)
    const z = Number(`${(Math.random() - 0.5) * 800}`)
    mesh.position.set(x, y, z)
    mesh.rotation.set(
      Math.random() * 2 * Math.PI,
      Math.random() * 2 * Math.PI,
      Math.random() * 2 * Math.PI,
    )
    group.add(mesh)
  }
  return group
}
