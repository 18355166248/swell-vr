import * as THREE from 'three'
import {initReSize} from './onresize'
import SeedScene from '../examples/Seed/scene'
import {useLayoutEffect, useRef} from 'react'

export default function Seed() {
  const domRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let destroyTasks: unknown[] = []
    if (domRef.current) {
      destroyTasks = initSeed(domRef.current).destroyTasks
    }

    return () => {
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  return <div ref={domRef} />
}

function initSeed(dom: HTMLElement) {
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
  const seedScene = new SeedScene()

  // scene
  scene.add(seedScene)

  // camera
  camera.position.set(6, 3, -10)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  // 销毁函数
  destroyTasks.push(() => {
    scene.remove(...scene.children)
  })
  destroyTasks.push(() => {
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  })

  const render = (time?: number) => {
    time && seedScene.update(time)
    renderer.render(scene, camera)
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(render)
  renderer.setClearColor(0x7ec0ee, 1)

  dom.appendChild(renderer.domElement)

  const {addEventListenerResize} = initReSize(camera, renderer, render)

  addEventListenerResize()

  return {destroyTasks}
}
