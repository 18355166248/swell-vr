import React, {useState} from 'react'
import {useLayoutEffect} from 'react'
import * as THREE from 'three'
import {disposeList} from '../../../utils/three.dispose'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
//引入性能监视器stats.js
import Stats from 'three/addons/libs/stats.module.js'
import {Slider} from 'antd'
import * as dat from 'dat.gui'

const cameraPosition = {
  x: 150,
  y: 150,
  z: 150,
}

function One() {
  const oneRef = React.useRef<HTMLDivElement>(null)
  const requestAnimationNumberRef = React.useRef<number>()
  // TODO 手动设置相机的 lookAt 位置, 需要注释 controls, 两个是互斥的
  const [lookAt, setLookAt] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  useLayoutEffect(() => {
    if (!oneRef.current) return
    const width = oneRef.current.clientWidth
    const height = oneRef.current.clientHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(100, width / height, 0.5, 3000)
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z)
    // camera.position.set(10, 0, 0)
    camera.lookAt(lookAt.x, lookAt.y, lookAt.z)

    const size = 5
    const distance = 20
    const geometry = new THREE.BoxGeometry(5, 5, 5)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      side: THREE.FrontSide, // 默认只有正面可见 FrontSide DoubleSide //两面可见
    })

    // SphereGeometry：球体
    const geometrySphere = new THREE.SphereGeometry(4) // PlaneGeometry：矩形平面
    const geometryPlane = new THREE.PlaneGeometry(5, 5)

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        for (let k = 0; k < size; k++) {
          const isInner = i >= 2 && j >= 2 && k >= 2
          const isPlane = i === 0 || j === 0 || k === 0
          const mesh = new THREE.Mesh(
            isPlane ? geometryPlane : isInner ? geometrySphere : geometry,
            material,
          )
          mesh.position.set(i * distance, j * distance, k * distance)
          scene.add(mesh)
        }
      }
    }

    const axesHelper = new THREE.AxesHelper(150)
    scene.add(axesHelper)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    renderer.setClearColor(0x777777, 1) //设置背景颜色
    renderer.render(scene, camera)

    oneRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    const gui = new dat.GUI()
    gui.domElement.style.position = 'fixed'
    gui.domElement.style.right = '200px'

    const obj = {...cameraPosition}
    // gui界面上增加交互界面，改变obj对应属性
    gui
      .add(obj, 'x', 0, 300)
      .name('相机X')
      .onChange(function (value: number) {
        cameraPosition.x = value
        camera.position.x = value
      })
    gui
      .add(obj, 'y', 0, 300)
      .name('相机Y')
      .onChange(function (value: number) {
        cameraPosition.y = value
        camera.position.y = value
      })
    gui
      .add(obj, 'z', 0, 300)
      .name('相机Z')
      .onChange(function (value: number) {
        cameraPosition.z = value
        camera.position.z = value
      })
    const obj1 = {
      color: 0x00ffff,
    }
    // .addColor()生成颜色值改变的交互界面
    gui.addColor(obj1, 'color').onChange(function (value) {
      material.color.set(value)
    })

    // const clock = new THREE.Clock()

    function render() {
      // const spt = clock.getDelta() * 1000 //毫秒
      // console.log('两帧渲染时间间隔(毫秒)', spt)
      // console.log('帧率FPS', 1000 / spt)

      requestAnimationFrame(render)
      // 如果你使用诸如 OrbitControls 等控件，这些控件可能会覆盖你手动设置的相机方向。在这种情况下，你需要确保控件的目标位置与 lookAt 一致
      controls.target.set(lookAt.x, lookAt.y, lookAt.z)
      controls.update()
      stats.update()
      renderer.render(scene, camera)
    }

    //创建stats对象
    const stats = new Stats()
    //stats.domElement:web页面上输出计算结果,一个div元素，
    stats.dom.style.zIndex = '998'
    document.body.appendChild(stats.dom)

    render()

    function onResize() {
      if (!oneRef.current) return
      const width = oneRef.current.clientWidth
      const height = oneRef.current.clientHeight
      // 重置渲染器输出画布canvas尺寸
      renderer.setSize(width, height)
      // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
      camera.aspect = width / height
      // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
      // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
      // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', onResize)

    const dispose = () => {
      window.removeEventListener('resize', onResize)
      stats.end()
      stats.dom.remove()
      gui.destroy()
    }

    return () => {
      disposeList({
        scene,
        renderer,
        controls,
        requestAnimationNumber: requestAnimationNumberRef.current,
        dispose,
      })
    }
  }, [lookAt.x, lookAt.y, lookAt.z])

  function onChange(v: number, type: 'x' | 'y' | 'z') {
    setLookAt({
      ...lookAt,
      [type]: v,
    })
  }

  return (
    <>
      <div className="fixed right-10 top-0 w-[160px] bg-slate-400">
        <div>
          x
          <Slider
            value={lookAt.x}
            min={-100}
            max={100}
            onChange={v => onChange(v, 'x')}
          />
        </div>
        <div>
          y
          <Slider
            value={lookAt.y}
            min={-100}
            max={100}
            onChange={v => onChange(v, 'y')}
          />
        </div>
        <div>
          z
          <Slider
            value={lookAt.z}
            min={-100}
            max={100}
            onChange={v => onChange(v, 'z')}
          />
        </div>
      </div>
      <div ref={oneRef} className="w-full h-full" />
    </>
  )
}

export default One
