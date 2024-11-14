import * as THREE from 'three'
import earth_atmos_2048 from './assets/moon_1024.jpg'
import {CSS2DObject} from 'three/addons/renderers/CSS2DRenderer.js'

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

  // 生成文字
  const moonDiv = document.createElement('div')
  moonDiv.className = 'label'
  moonDiv.textContent = '月球'
  const moonLabel = new CSS2DObject(moonDiv)
  moonLabel.position.set(1 * MOON_RADIUS, 0, 0)
  moonLabel.center.set(0, 3)
  moonLabel.layers.set(0)
  moon.add(moonLabel)

  const moonContentDiv = document.createElement('div')
  moonContentDiv.className = 'label'
  moonContentDiv.textContent = '5.97237e24 kg'
  moonContentDiv.style.fontSize = '12px'
  const moonContentLabel = new CSS2DObject(moonContentDiv)
  moonContentLabel.position.set(1 * MOON_RADIUS, 0, 0)
  moonContentLabel.center.set(0, 2.8)
  moonContentLabel.layers.set(1)
  moon.add(moonContentLabel)

  return moon
}
