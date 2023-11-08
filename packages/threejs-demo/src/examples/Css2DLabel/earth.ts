import * as THREE from 'three'
import earth_atmos_2048 from './assets/earth_atmos_2048.jpg'
import earth_specular_2048 from './assets/earth_specular_2048.jpg'
import earth_normal_2048 from './assets/earth_normal_2048.jpg'
import {CSS2DObject} from 'three/addons/renderers/CSS2DRenderer.js'

export const EARTH_RADIUS = 1

export type EarthProps = {
  textureLoader: THREE.TextureLoader
}

export function initEarth({textureLoader}: EarthProps) {
  const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 16, 16)
  const earthMaterial = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 5,
    map: textureLoader.load(earth_atmos_2048),
    specularMap: textureLoader.load(earth_specular_2048),
    normalMap: textureLoader.load(earth_normal_2048),
    normalScale: new THREE.Vector2(0.85, 0.85),
  })
  // earthMaterial.map && (earthMaterial.map.colorSpace = THREE.SRGBColorSpace)
  const earth = new THREE.Mesh(earthGeometry, earthMaterial)

  // 生成文字
  const earthDiv = document.createElement('div')
  earthDiv.className = 'label'
  earthDiv.textContent = '地球'
  const earthLabel = new CSS2DObject(earthDiv)
  earthLabel.position.set(1 * EARTH_RADIUS, 0, 0)
  earthLabel.center.set(0, 3)
  earthLabel.layers.set(0)
  earth.add(earthLabel)

  const earthContentDiv = document.createElement('div')
  earthContentDiv.className = 'label'
  earthContentDiv.textContent = '5.97237e24 kg'
  earthContentDiv.style.fontSize = '12px'
  const earthContentLabel = new CSS2DObject(earthContentDiv)
  earthContentLabel.position.set(1 * EARTH_RADIUS, 0, 0)
  earthContentLabel.center.set(0, 2.8)
  earthContentLabel.layers.set(1)

  earth.add(earthContentLabel)

  return earth
}
