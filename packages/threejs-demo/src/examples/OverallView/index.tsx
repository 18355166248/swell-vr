import * as THREE from 'three'
import {useLayoutEffect, useRef} from 'react'
import {initReSize} from '../../utils/onresize'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import initGUI from './GUI'
import XmCenterImg from './xm-center1.jpg'
import demoImg from './demo1.jpg'
import posx from './Bridge2/posx.jpg'
import negx from './Bridge2/negx.jpg'
import posy from './Bridge2/posy.jpg'
import negy from './Bridge2/negy.jpg'
import posz from './Bridge2/posz.jpg'
import negz from './Bridge2/negz.jpg'

import front from './xima-center/front.jpg'
import back from './xima-center/back.jpg'
import left from './xima-center/left.jpg'
import right from './xima-center/right.jpg'
import top from './xima-center/top.jpg'
import bottom from './xima-center/bottom.jpg'

export default function OverallView() {
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
    1,
    1000,
  )
  const renderer = new THREE.WebGLRenderer()
  const textureLoader = new THREE.TextureLoader()

  // 背景图1
  const equirectAngularTexture = textureLoader.load(XmCenterImg)
  equirectAngularTexture.colorSpace = THREE.SRGBColorSpace
  // 用于等距圆柱投影的环境贴图，也被叫做经纬线映射贴图。等距圆柱投影贴图表示沿着其水平中线360°的视角，以及沿着其垂直轴向180°的视角。贴图顶部和底部的边缘分别对应于它所映射的球体的北极和南极。
  equirectAngularTexture.mapping = THREE.EquirectangularReflectionMapping
  scene.background = equirectAngularTexture

  // 背景图2
  const equirectAngularTexture2 = textureLoader.load(demoImg)
  equirectAngularTexture2.colorSpace = THREE.SRGBColorSpace
  // 用于等距圆柱投影的环境贴图，也被叫做经纬线映射贴图。等距圆柱投影贴图表示沿着其水平中线360°的视角，以及沿着其垂直轴向180°的视角。贴图顶部和底部的边缘分别对应于它所映射的球体的北极和南极。
  equirectAngularTexture2.mapping = THREE.EquirectangularReflectionMapping

  // 背景图2
  const loader = new THREE.CubeTextureLoader()
  const textureCube = loader.load([posx, negx, posy, negy, posz, negz])
  scene.background = textureCube

  const textureCube1 = loader.load([front, back, top, bottom, left, right])

  // camera
  camera.position.set(1, 0, 0)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  dom.appendChild(renderer.domElement)

  const render = () => {
    renderer.render(scene, camera)
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(render)
  // renderer.setClearColor(0x7ec0ee, 1)

  const gui = initGUI(
    scene,
    dom,
    equirectAngularTexture,
    equirectAngularTexture2,
    textureCube,
    textureCube1,
  )

  // control  注意: 这里的控制器交给 CSSRender 因为层级更高
  const controls = new OrbitControls(camera, renderer.domElement)
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

  return {destroyTasks}
}
