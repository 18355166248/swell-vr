import * as THREE from 'three'
import {initReSize} from '../../../utils/onresize'
import {useLayoutEffect, useRef} from 'react'
import {createParticles} from './createParticles'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

function initParticles(dom: HTMLElement) {
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

  // const particles = createParticlesByPoints()

  // camera
  camera.position.set(0, 0, 100)
  camera.rotation.set(0, 0, 0.4)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  // const {gui, ctrls} = initGUI(dom, scene)

  createParticles(40, true, 1, true, 0xffffff, scene)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.autoRotate = true

  // 销毁函数
  destroyTasks.push(() => {
    scene.remove(...scene.children)

    controls.dispose()
  })
  destroyTasks.push(() => {
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  })
  // destroyTasks.push(() => {
  //   gui.destroy()
  // })

  const render = () => {
    controls && controls.update()
    renderer.render(scene, camera)
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(render)
  // renderer.setClearColor(0x7ec0ee, 1)

  dom.appendChild(renderer.domElement)

  const {addEventListenerResize} = initReSize(camera, renderer, render)

  addEventListenerResize()

  return {destroyTasks}
}

export default function Particles() {
  const domRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let destroyTasks: unknown[] = []
    if (domRef.current) {
      const res = initParticles(domRef.current)
      destroyTasks = res.destroyTasks
    }

    return () => {
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  return <div ref={domRef}></div>
}
