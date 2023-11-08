import * as THREE from 'three'
import earth_atmos_2048 from './assets/moon_1024.jpg'

export type MoonProps = {
  textureLoader: THREE.TextureLoader
}

const MOON_RADIUS = 0.1

export function initMoon({textureLoader}: MoonProps) {
  const moonGeometry = new THREE.SphereGeometry(MOON_RADIUS, 16, 16)
  const moonMaterial = new THREE.MeshPhongMaterial({
    shininess: 5,
    map: textureLoader.load(earth_atmos_2048),
  })
  // moonMaterial.map && (moonMaterial.map.colorSpace = THREE.SRGBColorSpace)
  const moon = new THREE.Mesh(moonGeometry, moonMaterial)

  return moon
}
