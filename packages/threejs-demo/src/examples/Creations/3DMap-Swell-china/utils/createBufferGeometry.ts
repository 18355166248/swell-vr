import * as THREE from 'three'

/**
 * 创建并配置THREE.BufferGeometry对象
 * @param t 包含几何体数据的对象（顶点索引、位置、法线和UV坐标）
 * @returns 配置好的BufferGeometry对象
 */
function createBufferGeometry(t: {
  index: number[]
  position: number[]
  normal: number[]
  uv: number[]
}): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry()

  geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(t.index), 1))
  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(t.position), 3),
  )
  geometry.setAttribute(
    'normal',
    new THREE.BufferAttribute(new Float32Array(t.normal), 3),
  )
  geometry.setAttribute(
    'uv',
    new THREE.BufferAttribute(new Float32Array(t.uv), 2),
  )

  geometry.computeBoundingSphere()
  geometry.computeBoundingBox()

  return geometry
}

export default createBufferGeometry
