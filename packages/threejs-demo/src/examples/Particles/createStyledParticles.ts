import * as THREE from 'three'
import {Ctrls} from './GUI'

type CtrlsProps = typeof Ctrls

export const createStyledParticlesByPoints = (
  ctrls: Omit<CtrlsProps, 'prototype'>,
  scene: THREE.Scene,
) => {
  const geom = new THREE.BufferGeometry()
  const material = new THREE.PointsMaterial({
    size: ctrls.size,
    transparent: ctrls.transparent,
    opacity: ctrls.opacity,
    color: new THREE.Color(ctrls.color),
    vertexColors: ctrls.vertexColors,
    sizeAttenuation: ctrls.sizeAttenuation,
  })
  const veticsFloat32Array = []
  const veticsColors = []
  for (let x = -15; x < 15; x++) {
    for (let y = -10; y < 10; y++) {
      veticsFloat32Array.push(x * 4, y * 4, 0)
      const randomColor = new THREE.Color(Math.random() * ctrls.vertexColor)
      veticsColors.push(randomColor.r, randomColor.g, randomColor.b)
    }
  }
  const vertices = new THREE.Float32BufferAttribute(veticsFloat32Array, 3)
  const colors = new THREE.Float32BufferAttribute(veticsColors, 3)
  geom.attributes.position = vertices
  geom.attributes.color = colors
  const particles = new THREE.Points(geom, material)
  particles.name = 'particles'

  scene.add(particles)
}
