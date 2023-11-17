import * as THREE from 'three'
import {useLayoutEffect, useRef, useState} from 'react'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'
import {GLTFLoader} from 'three/addons/loaders/GlTFLoader.js'
import * as TWEEN from 'three/addons/libs/tween.module.js'
import {initLight} from './light'
import './index.less'
import Loading from '../../components/Loading'
// import DavidHeadGlb from './DavidHead.glb'
import StatueGlb from './statue.glb'
import initGUI from './GUI'
import {SecondDataKeys, secondData} from './data'

function initShadow(
  dom: HTMLElement,
  secondDom: HTMLDivElement,
  cursorParams: {x: number; y: number},
) {
  const destroyTasks = []

  const width = dom.clientWidth
  const height = dom.clientHeight
  const width2 = secondDom.clientWidth
  const height2 = secondDom.clientHeight
  // init
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, width / height, 1, 100)
  const renderer = new THREE.WebGLRenderer()
  // 相机2
  const camera2 = new THREE.PerspectiveCamera(35, width2 / height2, 1, 100)
  const renderer2 = new THREE.WebGLRenderer()
  camera2.lookAt(0, 5, 0)
  camera2.position.set(6.6, 2.2, 6.6)
  camera2.rotation.set(0, 0.9, 0)
  scene.add(camera2)

  // scene
  scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000)
  const {dirLight, pointLight, lightDispose} = initLight()
  scene.add(dirLight)
  scene.add(pointLight)

  dom.appendChild(renderer.domElement)
  secondDom.appendChild(renderer2.domElement)

  // 监听二屏是否展示出来
  let showSecond = false // 是否展示二屏视图
  const second = document.querySelector('.second')
  if (second) {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        showSecond = entries[0].intersectionRatio >= 0.3
      },
      {
        threshold: 0.3,
      },
    )
    // 开始监听
    intersectionObserver.observe(second)
  }

  // 动画
  // 页面重绘动画
  const render = () => {
    const parallaxX = cursorParams.x
    const parallaxY = cursorParams.y
    // 修改光源跟随鼠标
    const x = parallaxX * 5
    const y = parallaxY * -6 + 2
    pointLight.position.x = x
    pointLight.position.y = y
    // 修改相机跟随鼠标
    camera.position.x = Number((parallaxX * 0.1).toFixed(4))
    camera.position.z = Number((parallaxY * 0.1).toFixed(4)) + 5

    TWEEN.update()

    showSecond
      ? renderer2.render(scene, camera2)
      : renderer.render(scene, camera)
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  renderer.setAnimationLoop(render)

  renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer2.setSize(width2, height2)
  renderer2.setAnimationLoop(render)

  // const gui = initGUI(camera2, secondDom, pointLight)

  // 销毁函数
  destroyTasks.push(lightDispose)
  destroyTasks.push(() => {
    scene.remove(...scene.children)
  })
  destroyTasks.push(() => {
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()

    renderer2.dispose()
    renderer2.forceContextLoss()
    renderer2.domElement.remove()
  })
  // destroyTasks.push(() => {
  //   gui.destroy()
  // })

  return {destroyTasks, scene, camera, renderer, camera2, renderer2}
}

export default function Shadow() {
  const [secondKey, setSecondKey] = useState<SecondDataKeys>('one')

  const firstDomRef = useRef<HTMLDivElement>(null)
  const secondDomRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const camera2Ref = useRef<THREE.PerspectiveCamera>()

  const cursorParamsRef = useRef({x: 0, y: 0})

  // 鼠标移动时添加虚拟光标
  useLayoutEffect(() => {
    document.body.style.cursor = 'none'
    document.addEventListener('mousemove', e => {
      e.preventDefault()
      if (cursorRef.current) {
        cursorParamsRef.current.x = e.clientX / window.innerWidth - 0.5
        cursorParamsRef.current.y = e.clientY / window.innerHeight - 0.5
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
    const firstDom = firstDomRef.current as HTMLDivElement
    const secondDom = secondDomRef.current as HTMLDivElement

    // eslint-disable-next-line no-inner-declarations
    function onWindowResize() {
      camera.aspect = firstDom.clientWidth / firstDom.clientHeight
      camera.updateProjectionMatrix()

      renderer.setSize(firstDom.clientWidth, firstDom.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      camera2.aspect = secondDom.clientWidth / secondDom.clientHeight
      camera2.updateProjectionMatrix()

      renderer2.setSize(secondDom.clientWidth, secondDom.clientHeight)
      renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    const res = initShadow(firstDom, secondDom, cursorParamsRef.current)
    destroyTasks = res.destroyTasks
    const scene = res.scene
    const camera = res.camera
    const renderer = res.renderer
    const camera2 = res.camera2
    const renderer2 = res.renderer2

    camera2Ref.current = camera2

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
          loadingTextIntro?.parentNode?.removeChild(loadingTextIntro)
          TWEEN.remove(tween)
        })
      // 给相加加入入场动画
      const tween1 = new TWEEN.Tween(camera.position.set(0, 3.5, 2))
        .to({x: 0, y: 2, z: 5}, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
        .onComplete(() => {
          // 显示头部
          const header = document.querySelector('.header')
          if (header) header.classList.add('active')
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

    window.addEventListener('resize', onWindowResize)

    return () => {
      window.removeEventListener('resize', onWindowResize)
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  function setSecondTitle(key: SecondDataKeys) {
    setSecondKey(key)
    switch (key) {
      case 'one':
        animateCamera2({x: 6.6, y: 2.2, z: 6.6}, {x: 0, y: 0.9, z: 0})
        break
      case 'two':
        animateCamera2({x: -2.1, y: 2.2, z: 6.6}, {y: -0.2})
        break
      case 'three':
        animateCamera2({x: -7.7, y: 2.2, z: 3.6}, {y: -1})
        break
      default:
        animateCamera2({x: 8.6, y: 2.2, z: 6.6}, {y: -0.9})
        break
    }
  }

  function animateCamera2(
    position: {
      x: number
      y: number
      z: number
    },
    rotation: {
      y: number
    },
  ) {
    const camera2 = camera2Ref.current as THREE.PerspectiveCamera
    const tween = new TWEEN.Tween(camera2.position)
      .to(position, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start()
      .onComplete(() => {
        TWEEN.remove(tween)
      })
    const tween2 = new TWEEN.Tween(camera2.rotation)
      .to(rotation, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start()
      .onComplete(() => {
        TWEEN.remove(tween2)
      })
  }

  return (
    <div className="shadow">
      <Loading />

      <div className="first" ref={firstDomRef}>
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
        <div className="info">
          <h1 className="info-name">DRAGONIR</h1>
          <h2 className="info-title">THREE.JS SHADOW</h2>
        </div>
      </div>
      <div className="second" ref={secondDomRef}>
        <div className="left-content">
          <div className="tab-second">
            {Object.values(secondData).map(data => (
              <div
                key={data.key}
                className={`title ${secondKey === data.key ? 'active' : ''}`}
                onClick={() => setSecondTitle(data.key)}
              >
                {data.title}
              </div>
            ))}
          </div>
          <div className="tab-content">{secondData[secondKey].content}</div>
        </div>
      </div>
    </div>
  )
}
