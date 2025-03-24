import * as THREE from 'three'

function RV(t: {
  index: number[]
  position: number[]
  normal: number[]
  uv: number[]
}) {
  const e = new THREE.BufferGeometry()
  return (
    e.setIndex(new THREE.BufferAttribute(new Uint32Array(t.index), 1)),
    e.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(t.position), 3),
    ),
    e.setAttribute(
      'normal',
      new THREE.BufferAttribute(new Float32Array(t.normal), 3),
    ),
    e.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(t.uv), 2)),
    e.computeBoundingSphere(),
    e.computeBoundingBox(),
    e
  )
}

export default RV
