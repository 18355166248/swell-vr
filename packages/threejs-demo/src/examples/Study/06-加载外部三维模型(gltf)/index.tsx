import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
// 引入gltf模型加载库GLTFLoader.js
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import DogGltf from './shiba/scene.gltf'

function Three() {
  const canvas = useRef(null)

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 10
        this.isAxesHelper = true
        this.cameraConfig.far = 4000
      }
      animate() {
        // console.log(this.controls?.target)
      }
      createChart() {
        // 创建GLTF加载器对象
        const loader = new GLTFLoader()
        loader.load(DogGltf, dog => {
          console.log('🚀 ~ MyThree ~ loader.load ~ dog:', dog)
          console.log('gltf对象场景属性', dog.scene)
          dog.scene.name = '小黄狗'
          dog.scene.position.set(5, 3, 5)
          dog.scene.scale.set(3, 3, 3)
          // 返回的场景对象gltf.scene插入到threejs场景中
          this.scene?.add(dog.scene)
        })

        this.controls?.target.set(1.33, -10, 1.5)
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.createChart()

    return () => {
      myThree.destroy()
    }
  }, [])

  return <div ref={canvas} className="w-full h-full" />
}

export default Three
