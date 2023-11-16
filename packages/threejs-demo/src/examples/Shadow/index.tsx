import * as THREE from 'three'
import {useLayoutEffect, useRef, useState} from 'react'
import {initReSize} from '../../utils/onresize'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import {GLTFLoader} from 'three/addons/loaders/GlTFLoader.js'
import * as TWEEN from 'three/addons/libs/tween.module.js'
import {initLight} from './light'
import './index.less'
import Loading from '../../components/Loading'
import DavidHeadGlb from './DavidHead.glb'
import StatueGlb from './statue.glb'
import initGUI from './GUI'

export default function Shadow() {
  const [loading, setLoading] = useState(true)
  const domRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const cursorParamsRef = useRef({x: 0, y: 0})

  // 鼠标移动时添加虚拟光标
  useLayoutEffect(() => {
    document.body.style.cursor = 'none'
    document.addEventListener('mousemove', e => {
      e.preventDefault()
      if (cursorRef.current) {
        cursorParamsRef.current = {x: e.clientX, y: e.clientY}
        cursorRef.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
      }
    })
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  // 鼠标悬停菜单动画
  useLayoutEffect(() => {
    function update(e) {
      const span = e.target.querySelector('span')
      if (e.type === 'mouseleave') {
        span.style = ''
      } else {
        const {offsetWidth, offsetHeight} = e.target

        const halfW = offsetWidth / 2
        const halfH = offsetHeight / 2
        span.style = `transform: translate(${e.offsetX - halfW}px, ${
          e.offsetY - halfH
        }px);`
      }
    }

    const menusDom = document.querySelectorAll('.header > .a')
    if (menusDom) {
      menusDom.forEach(menu => menu.addEventListener('mousemove', update))
      menusDom.forEach(menu => menu.addEventListener('mouseleave', update))
    }
    return () => {
      menusDom.forEach(menu => menu.removeEventListener('mousemove', update))
      menusDom.forEach(menu => menu.removeEventListener('mouseleave', update))
    }
  }, [])

  useLayoutEffect(() => {
    let destroyTasks: unknown[] = []
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    if (domRef.current) {
      const res = initShadow(domRef.current)
      destroyTasks = res.destroyTasks
      scene = res.scene
      camera = res.camera
      renderer = res.renderer

      const loadingManager = new THREE.LoadingManager()

      const ldsRoller = document.querySelector('.lds-roller')
      const loadingTextIntro = document.querySelector(
        '.loading-text-intro',
      ) as HTMLDivElement

      loadingManager.onLoad = () => {
        console.log('加载完成')
        const yPosition = {y: 0}
        // 隐藏loading的动画效果
        const tween = new TWEEN.Tween(yPosition)
          .to({y: 100}, 900)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .start()
          .onUpdate(() => {
            loadingTextIntro?.style.setProperty(
              'transform',
              `translate(0, ${yPosition.y}%)`,
            )
          })
          .onComplete(() => {
            loadingTextIntro.parentNode?.removeChild(loadingTextIntro)
            TWEEN.remove(tween)
          })
        // 给相加加入入场动画
        const tween1 = new TWEEN.Tween(camera.position.set(0, 3.5, 2))
          .to({x: 0, y: 2, z: 5}, 3000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .start()
          .onComplete(() => {
            TWEEN.remove(tween1)
          })

        ldsRoller?.parentNode?.removeChild(ldsRoller)
      }

      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('/draco/')
      dracoLoader.setDecoderConfig({type: 'js'})
      const loader = new GLTFLoader(loadingManager)
      loader.setDRACOLoader(dracoLoader)

      loader.load(StatueGlb, glb => {
        scene.add(glb.scene)
      })
    }

    return () => {
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  return (
    <div className="shadow">
      {loading ? <Loading /> : null}
      <nav className="header">
        <a href="" className="a">
          <span>首页</span>
        </a>
        <a href="" className="a">
          <span>关于</span>
        </a>
        <a href="" className="a">
          <span>我的</span>
        </a>
        <a href="" className="a">
          <span>作品</span>
        </a>
        <a href="" className="a">
          <span>更多</span>
        </a>
        {/* 虚拟鼠标光标 */}
        <span className="cursor" ref={cursorRef} />
      </nav>
      <div className="first" ref={domRef}>
        <div className="info">
          <h1 className="info-name">DRAGONIR</h1>
          <h2 className="info-title">THREE.JS ODESSEY</h2>
          <p className="description">&nbsp;</p>
        </div>
      </div>
      <div className="second" ref={secondRef}></div>
    </div>
  )
}

function initShadow(dom: HTMLElement) {
  const destroyTasks = []

  const width = dom.clientWidth
  const height = dom.clientHeight
  // init
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, width / height, 1, 100)
  const renderer = new THREE.WebGLRenderer()

  // scene
  scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000)
  const {dirLight, pointLight} = initLight()
  scene.add(dirLight)
  scene.add(pointLight)

  // camera
  // camera.position.set(0, 10, 12)

  dom.appendChild(renderer.domElement)

  // 动画
  const render = () => {
    TWEEN.update()
    renderer.render(scene, camera)
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  renderer.setAnimationLoop(render)
  // renderer.setClearColor(0x7ec0ee, 1)

  const {addEventListenerResize} = initReSize(camera, renderer, render)

  addEventListenerResize()

  const gui = initGUI(camera, dom)

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

  return {destroyTasks, scene, camera, renderer}
}
