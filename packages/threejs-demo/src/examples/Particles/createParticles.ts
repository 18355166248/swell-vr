import * as THREE from 'three'
import heartImg from './heart.png'

export const createParticlesByPoints = () => {
  const geom = new THREE.BufferGeometry()
  const material = new THREE.PointsMaterial({
    size: 3,
    vertexColors: true,
    color: 0xffffff,
  })
  const meticsFloat32Array = []
  const meticsColors = []
  for (let x = -15; x < 15; x++) {
    for (let y = -10; y < 10; y++) {
      meticsFloat32Array.push(x * 4, y * 4, 0)
      const randomColor = new THREE.Color(Math.random() * 0xffffff)
      meticsColors.push(randomColor.r, randomColor.g, randomColor.b)
    }
  }
  const vertices = new THREE.Float32BufferAttribute(meticsFloat32Array, 3)
  const colors = new THREE.Float32BufferAttribute(meticsColors, 3)
  geom.attributes.position = vertices
  geom.attributes.color = colors
  const particles = new THREE.Points(geom, material)
  return particles
}

const texture = new THREE.TextureLoader().load(heartImg)

export const createParticles = (
  size: number,
  transparent: boolean,
  opacity: number,
  sizeAttenuation: boolean,
  color: THREE.ColorRepresentation,
  scene: THREE.Scene,
) => {
  const geom = new THREE.BufferGeometry()
  const material = new THREE.PointsMaterial({
    size: size,
    transparent: transparent,
    opacity: opacity,
    // 'map': createCanvasTexture(),
    map: texture,
    sizeAttenuation: sizeAttenuation,
    color: color,
    depthTest: true,
    depthWrite: false,
  })
  const veticsFloat32Array = []
  const range = 500
  for (let i = 0; i < 500; i++) {
    const particle = new THREE.Vector3(
      Math.random() * range - range / 2,
      Math.random() * range - range / 2,
      Math.random() * range - range / 2,
    )
    veticsFloat32Array.push(particle.x, particle.y, particle.z)
  }
  const vertices = new THREE.Float32BufferAttribute(veticsFloat32Array, 3)
  geom.attributes.position = vertices
  const particles = new THREE.Points(geom, material)
  scene.add(particles)
}

