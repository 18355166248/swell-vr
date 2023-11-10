import * as THREE from 'three'
import {useLayoutEffect, useRef} from 'react'
import {initReSize} from '../../utils/onresize'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {initLight} from './light'
import {initSphere} from './Shpere'
import {initTorus} from './Torus'
import {initIcosahedron} from './Icosahedron'
import {initStars} from './Stars'

export default function Css2DLabel() {
  const domRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let destroyTasks: unknown[] = []
    if (domRef.current) {
      destroyTasks = initCss2DLabel(domRef.current).destroyTasks
    }

    return () => {
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  return <div ref={domRef} />
}

function initCss2DLabel(dom: HTMLElement) {
  const destroyTasks = []

  // init
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10_00,
  )
  const renderer = new THREE.WebGLRenderer()
  const textureLoader = new THREE.TextureLoader()

  camera.layers.enableAll()

  // scene
  scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000)
  const light = initLight()
  light.layers.enableAll()
  scene.add(light)
  const sphere = initSphere()
  scene.add(sphere)
  const torus = initTorus()
  scene.add(torus)
  const icosahedronGroup = initIcosahedron()
  scene.add(icosahedronGroup)
  const stars = initStars()
  scene.add(stars)

  // camera
  camera.position.set(40, 40, 400)
  // camera.lookAt(new THREE.Vector3(0, 0, 0))

  dom.appendChild(renderer.domElement)

  const axis = new THREE.Vector3(0, 0, 1)
  let rot = 0
  // 动画
  const render = () => {
    renderer.render(scene, camera)

    sphere.rotation.y += 0.005

    torus.rotateOnAxis(axis, Math.PI / 400)

    // 给网格模型添加一个转动动画
    rot += Math.random() * 0.8
    const radian = (rot * Math.PI) / 180
    icosahedronGroup.position.x = 250 * Math.sin(radian)
    icosahedronGroup.position.y = 100 * Math.sin(radian)
    icosahedronGroup.position.z = -1000 * Math.sin(radian)
    icosahedronGroup.rotation.x += 0.005
    icosahedronGroup.rotation.y += 0.005
    icosahedronGroup.rotation.z += 0.005

    stars.rotation.y += 0.0009
    stars.rotation.z += 0.0003
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(render)
  // renderer.setClearColor(0x7ec0ee, 1)

  // control  注意: 这里的控制器交给 CSSRender 因为层级更高
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 100
  controls.maxDistance = 800
  controls.enableDamping = true

  const {addEventListenerResize} = initReSize(camera, renderer, render)

  addEventListenerResize()

  // 销毁函数
  destroyTasks.push(() => {
    scene.remove(...scene.children)
  })
  destroyTasks.push(() => {
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  })

  return {destroyTasks}
}
