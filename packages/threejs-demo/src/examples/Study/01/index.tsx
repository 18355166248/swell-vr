import React from 'react'
import {useLayoutEffect} from 'react'
import * as THREE from 'three'
import {disposeList} from '../../../utils/three.dispose'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
//引入性能监视器stats.js
import Stats from 'three/addons/libs/stats.module.js'

function One() {
  const oneRef = React.useRef<HTMLDivElement>(null)
  const requestAnimationNumberRef = React.useRef<number>()

  useLayoutEffect(() => {
    if (!oneRef.current) return
    const width = oneRef.current.clientWidth
    const height = oneRef.current.clientHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(100, width / height, 0.5, 3000)
    // camera.position.set(150, 150, 150)
    camera.position.set(10, 0, 0)
    camera.lookAt(100, 0, 0)

    const size = 5
    const distance = 20
    const geometry = new THREE.BoxGeometry(5, 5, 5)
    const material = new THREE.MeshBasicMaterial({color: 0x00ffff})

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        for (let k = 0; k < size; k++) {
          const mesh = new THREE.Mesh(geometry, material)
          mesh.position.set(i * distance, j * distance, k * distance)
          scene.add(mesh)
        }
      }
    }

    const axesHelper = new THREE.AxesHelper(150)
    scene.add(axesHelper)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    renderer.render(scene, camera)
    oneRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    // const clock = new THREE.Clock()

    function render() {
      // const spt = clock.getDelta() * 1000 //毫秒
      // console.log('两帧渲染时间间隔(毫秒)', spt)
      // console.log('帧率FPS', 1000 / spt)

      requestAnimationFrame(render)
      controls.update()
      stats.update()
      renderer.render(scene, camera)
    }

    //创建stats对象
    const stats = new Stats()
    //stats.domElement:web页面上输出计算结果,一个div元素，
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
  }, [])
  return <div ref={oneRef} className="w-full h-full" />
}

export default One
