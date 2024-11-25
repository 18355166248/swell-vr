import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import WordMap from './images/world-296692_1920.png'
import WordMapLight from './images/world-map-sea.jpg'
import WenLi from './images/wenli.jpg'
import ArrowWhite from './images/arrow-white.png'

function Three() {
  const canvas = useRef(null)

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      constructor() {
        super()
        this.isControl = true
        this.isAxesHelper = true
        this.cameraConfig.far = 4000
      }
      // 地球贴图
      createChart() {
        // const geometry = new THREE.PlaneGeometry(200, 100)
        // const geometry = new THREE.CircleGeometry(60, 100)
        const geometry = new THREE.SphereGeometry(50)
        console.log(
          '🚀 ~ MyThree ~ createChart ~ geometry.attributes.uv:',
          geometry.attributes.uv,
        )
        // 自定义顶点UV geometry.attributes.uv
        // const uvs = new Float32Array([
        //   0, 1,

        //   1, 1,

        //   0, 0,

        //   1, 0,
        // ])
        // geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))

        // 纹理贴图加载器
        const texLoader = new THREE.TextureLoader()
        const texture = texLoader.load(WordMap)
        // const texture = texLoader.load(WordMapLight)
        // 为了避免色差，纹理对象编码方式要修改为THREE.SRGBColorSpace
        texture.colorSpace = THREE.SRGBColorSpace //设置为SRGB颜色空间
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
        })
        const mesh = new THREE.Mesh(geometry, material)

        this.scene?.add(mesh)

        const light = new THREE.DirectionalLight(0xffffff, 1)

        light.position.set(100, 100, 100)
        this.scene?.add(light)

        this.camera?.position.set(150, 0, 300)
      }
      // 纹理贴图
      createChart2() {
        const geometry = new THREE.PlaneGeometry(500, 500)
        const texLoader = new THREE.TextureLoader()
        const texture = texLoader.load(WenLi)
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(5, 5)
        const material = new THREE.MeshBasicMaterial({
          map: texture,
        })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene?.add(mesh)
        mesh.rotateY(Math.PI / 8)
        this.camera?.position.set(300, 0, 700)
      }
      // 矩形Mesh+背景透明png贴图
      createChart3() {
        const gridHelper = new THREE.GridHelper(600, 30)
        this.scene?.add(gridHelper)

        const geometry = new THREE.PlaneGeometry(40, 40)
        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(ArrowWhite)
        // 设置贴图偏移
        // texture.offset.y = 1
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(1, 1)
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotateX(Math.PI / 2)
        mesh.rotateZ(-Math.PI / 2)
        mesh.position.y = 1

        this.scene?.add(mesh)

        this.scene?.rotateY(Math.PI / 4)
        this.camera?.position.set(200, 200, 200)

        this.animate = () => {
          // texture.offset.y += 0.01
          texture.offset.x -= 0.01
        }
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    // myThree.createChart()

    // myThree.createChart2()

    myThree.createChart3()

    return () => {
      myThree.destroy()
    }
  }, [])

  return <div ref={canvas} className="w-full h-full" />
}

export default Three
