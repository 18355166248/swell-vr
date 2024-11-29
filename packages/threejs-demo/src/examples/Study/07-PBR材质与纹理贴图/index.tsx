import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
// 引入gltf模型加载库GLTFLoader.js
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import Su7Gltf from '../../../assets/gltf/su7/scene.gltf'
import posx from '../../../assets/Bridge2/posx.jpg'
import negx from '../../../assets/Bridge2/negx.jpg'
import posy from '../../../assets/Bridge2/posy.jpg'
import negy from '../../../assets/Bridge2/negy.jpg'
import posz from '../../../assets/Bridge2/posz.jpg'
import negz from '../../../assets/Bridge2/negz.jpg'
import {GUISetting} from '../../../types/three.type'
import th1Img from '../../../assets/images/th-1.jpeg'
import {Button} from 'antd'

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 4
        this.isAxesHelper = true
        this.isGui = true
        this.rendererSettings = {
          //想把canvas画布上内容下载到本地，需要设置为true
          preserveDrawingBuffer: true,
        }
        // this.dataObj = {
        //   metalness: 1.0, //金属度属性
        // }
        // this.guiSettings = [
        //   {
        //     type: 'number',
        //     key: 'metalness',
        //     min: 0,
        //     max: 1,
        //     step: 0.1,
        //   },
        // ]
      }

      createChart() {
        // this.scene?.add(new THREE.AmbientLight(0xffffff, 1.5))

        const dirLight = new THREE.DirectionalLight(0xffffff, 3)
        dirLight.position.set(5, 10, 7.5)
        dirLight.castShadow = true
        dirLight.shadow.camera.right = 2
        dirLight.shadow.camera.left = -2
        dirLight.shadow.camera.top = 2
        dirLight.shadow.camera.bottom = -2

        dirLight.shadow.mapSize.width = 1024
        dirLight.shadow.mapSize.height = 1024
        this.scene?.add(dirLight)

        const geometry = new THREE.BoxGeometry(10, 10, 10)
        const material = new THREE.MeshStandardMaterial({
          color: 0x049ef4,
          metalness: 1.0, //金属度属性
          roughness: 0.5, //粗糙度属性
          fog: true,
        })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene?.add(mesh)
      }
      createChart2() {
        const dirLight = new THREE.DirectionalLight(0xffffff, 3)
        dirLight.position.set(5, 10, 7.5)
        dirLight.castShadow = true
        dirLight.shadow.camera.right = 2
        dirLight.shadow.camera.left = -2
        dirLight.shadow.camera.top = 2
        dirLight.shadow.camera.bottom = -2

        dirLight.shadow.mapSize.width = 1024
        dirLight.shadow.mapSize.height = 1024
        this.scene?.add(dirLight)

        const geometry = new THREE.BoxGeometry(10, 10, 10)
        const material = new THREE.MeshPhysicalMaterial({
          color: 0x049ef4,
          clearcoat: 1.0, //物体表面清漆层或者说透明涂层的厚度
          clearcoatRoughness: 1.0, //表面粗糙度
          metalness: 1.0, //金属度属性
          roughness: 0.5, //粗糙度属性
          fog: true,
        })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene?.add(mesh)
      }
      // su7加载
      createChart3() {
        // 加载环境贴图
        const textureCube = new THREE.CubeTextureLoader().load([
          posx,
          negx,
          posy,
          negy,
          posz,
          negz,
        ])

        const loader = new GLTFLoader()
        loader.load(Su7Gltf, su7 => {
          // su7.scene.traverse(obj => {
          //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //   // @ts-ignore
          //   if (obj.isMesh) {
          //     const o = obj as THREE.Mesh
          //     console.log(
          //       '🚀 ~ MyThree ~ createChart3 ~ o.isMesh:',
          //       o.material,
          //       o,
          //     )
          //     // o.material.envMap
          //   }
          // })
          const carBodyParent = su7.scene.getObjectByName('Object_18')
          if (carBodyParent) {
            const m = carBodyParent as THREE.Mesh
            // 车外壳PBR材质设置
            // m.material = new THREE.MeshPhysicalMaterial({
            //   // eslint-disable-next-line no-extra-semi, @typescript-eslint/ban-ts-comment
            //   // @ts-ignore
            //   color: m.material.color, //默认颜色
            //   metalness: 1, //车外壳金属度
            //   roughness: 0.1, //车外壳粗糙度
            //   // envMap: textureCube, //环境贴图
            //   envMapIntensity: 2.5, //环境贴图对Mesh表面影响程度
            // })
            // 车外壳油漆效果
            m.material = new THREE.MeshPhysicalMaterial({
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              color: m.material.color, //默认颜色
              clearcoat: 1.0, //物体表面清漆层或者说透明涂层的厚度
              clearcoatRoughness: 0.1, //透明涂层表面的粗糙度
            })
            this.dataObj = m.material
            const guiSettings: GUISetting[] = [
              {
                type: 'folder',
                key: 'Su7',
                children: [
                  {
                    type: 'number',
                    key: 'metalness',
                    min: 0,
                    max: 1,
                    step: 0.1,
                  },
                  {
                    type: 'number',
                    key: 'roughness',
                    min: 0,
                    max: 1,
                    step: 0.1,
                  },
                  {
                    type: 'number',
                    key: 'clearcoat',
                    min: 0,
                    max: 1,
                    step: 0.1,
                  },
                  {
                    type: 'number',
                    key: 'clearcoatRoughness',
                    min: 0,
                    max: 1,
                    step: 0.1,
                  },
                  {
                    type: 'number',
                    key: 'envMapIntensity',
                    min: 0,
                    max: 1,
                    step: 0.1,
                  },
                ],
              },
            ]
            this.guiSettings = [...this.guiSettings, ...guiSettings]
            this.initGui()
            console.log(666)
          }

          const light = new THREE.AmbientLight(0xffffff) // 柔和的白光

          if (this.scene) {
            this.scene.add(light)
            this.scene.environment = textureCube

            this.scene?.add(su7.scene)
          }
          this.camera?.position.set(5, 5, 5)
          this.renderer?.setClearAlpha(0.2)
        })
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    // myThree.createChart()
    // myThree.createChart2()
    myThree.createChart3()

    threeReal.current = myThree

    return () => {
      myThree.destroy()
    }
  }, [])

  function downLoadImage() {
    threeReal.current?.downLoadImage()
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute left-0 top-0 w-full h-full flex items-center">
        <img src={th1Img} alt="" className="w-full" />
      </div>
      <div className="absolute left-20 top-10 z-20">
        <Button type="primary" onClick={downLoadImage}>
          下载
        </Button>
      </div>
      <div ref={canvas} className="w-full h-full relative z-10" />
    </div>
  )
}

export default Three
