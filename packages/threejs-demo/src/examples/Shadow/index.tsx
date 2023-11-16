import * as THREE from 'three'
import {useLayoutEffect, useRef} from 'react'
import {initReSize} from '../../utils/onresize'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {initLight} from './light'

export default function Shadow() {
  const domRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let destroyTasks: unknown[] = []
    if (domRef.current) {
      destroyTasks = initShadow(domRef.current).destroyTasks
    }

    return () => {
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  return <div ref={domRef} />
}

function initShadow(dom: HTMLElement) {
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

  camera.layers.enableAll()

  // scene
  scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000)
  const light = initLight()
  light.layers.enableAll()
  scene.add(light)

  // camera
  camera.position.set(40, 40, 400)
  // camera.lookAt(new THREE.Vector3(0, 0, 0))

  dom.appendChild(renderer.domElement)

  // 动画
  const render = () => {
    renderer.render(scene, camera)
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
