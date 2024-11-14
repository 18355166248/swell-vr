import * as THREE from 'three'
import {useLayoutEffect, useRef} from 'react'
import './index.less'
import {initReSize} from '../../../utils/onresize'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {initEarth} from './earth'
import {initLight} from './light'
import {initMoon} from './moon'
import initCSSRender from './CSS2D'
import initGUI from './GUI'

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
  const clock = new THREE.Clock()

  camera.layers.enableAll()

  // scene
  const axesHelper = new THREE.AxesHelper(5)
  axesHelper.layers.enableAll()
  scene.add(axesHelper)
  const earth = initEarth({textureLoader})
  earth.layers.enableAll()
  scene.add(earth)
  const moon = initMoon({textureLoader})
  scene.add(moon)
  const light = initLight()
  light.layers.enableAll()
  scene.add(light)
  moon.layers.enableAll()

  // camera
  camera.position.set(6, 3, -10)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  // 初始化文字容器
  const {CSSRender, destroy: destroyCssRender} = initCSSRender()
  dom.appendChild(CSSRender.domElement)

  dom.appendChild(renderer.domElement)

  const render = () => {
    const elapsed = clock.getElapsedTime()
    moon.position.set(Math.sin(elapsed) * 5, 0, Math.cos(elapsed) * 5)
    renderer.render(scene, camera)
    // 循环渲染
    CSSRender.render(scene, camera)
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(render)
  // renderer.setClearColor(0x7ec0ee, 1)

  const gui = initGUI(camera, dom)

  // control  注意: 这里的控制器交给 CSSRender 因为层级更高
  const controls = new OrbitControls(camera, CSSRender.domElement)
  controls.minDistance = 5
  controls.maxDistance = 100

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
  destroyTasks.push(() => {
    gui.destroy()
  })
  destroyTasks.push(destroyCssRender)

  return {destroyTasks}
}
