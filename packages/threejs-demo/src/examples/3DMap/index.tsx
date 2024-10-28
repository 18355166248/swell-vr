import * as THREE from 'three'
import {initReSize} from '../../utils/onresize'
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'
import {useLayoutEffect, useRef} from 'react'

export default function Map3DExample() {
  const textureRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let destroyTasks: unknown[] = []
    if (textureRef.current) {
      destroyTasks = initTexture(textureRef.current).destroyTasks
    }

    return () => {
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  return <div ref={textureRef} />
}

function initTexture(dom: HTMLElement) {
  const destroyTasks = []
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x808080)
  destroyTasks.push(() => {
    scene.remove(...scene.children)
  })
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10_00,
  )
  const renderer = new THREE.WebGLRenderer()
  destroyTasks.push(() => {
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  dom.appendChild(renderer.domElement)

  const group = new THREE.Group()
  scene.add(group)

  camera.position.set(0, 0, 2)

  new RGBELoader().load('/royal_esplanade_1k.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping

    scene.environment = texture
  })

  // 引入外部纹理
  const geometries = [
    new THREE.BoxGeometry(0.2, 0.2, 0.2), // 正方体
    new THREE.ConeGeometry(0.2, 0.2, 64), // 圆锥
    new THREE.CylinderGeometry(0.2, 0.2, 0.2, 64), // 长方体
    new THREE.IcosahedronGeometry(0.2, 8), // 球
    new THREE.TorusGeometry(0.2, 0.04, 64, 32), // 圆环
  ]
  const geometry = geometries[3]

  const material = new THREE.MeshStandardMaterial({
    color: 0xdddddd,
    metalness: 1,
    roughness: 0,
  })
  const cube = new THREE.Mesh(geometry, material)

  cube.scale.setScalar(Math.random() + 0.5)

  group.add(cube)

  const render = () => {
    cube.rotation.x += 0.005
    cube.rotation.y += 0.005

    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(render)

  const {addEventListenerResize} = initReSize(camera, renderer, render)

  addEventListenerResize()

  return {destroyTasks}
}
