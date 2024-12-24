import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import CartoonGltf from '../../../assets/gltf/cartoon_plane/scene.gltf'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import createBackground from '../../../utils/three-vignette-background/three-vignette.js'

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      mapCenter = {x: 0, y: 0, z: 0}
      pointsArr: THREE.Vector3[] = []
      i = 0 // 管道累加数
      group?: THREE.Group<THREE.Object3DEventMap>
      box?: THREE.Mesh<
        THREE.BoxGeometry,
        THREE.MeshLambertMaterial,
        THREE.Object3DEventMap
      >
      mesh?: THREE.Mesh<
        THREE.BoxGeometry,
        THREE.MeshLambertMaterial,
        THREE.Object3DEventMap
      >
      constructor() {
        super()
        this.isControl = true
        // this.axesHelperSize = 5
        // this.isAxesHelper = true
        this.cameraConfig.fov = 450
        this.cameraConfig.far = 20000
        this.isCSS2Renderer = true
      }
      animate(): void {
        if (this.camera && this.scene && this.css2Renderer) {
          this.css2Renderer.render(this.scene, this.camera)
        }
      }
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
        directionalLight.position.set(0, 30, 0)
        directionalLight.castShadow = true // 开启阴影

        // 方向光阴影的投射范围
        directionalLight.shadow.camera.left = -10
        directionalLight.shadow.camera.right = 10
        directionalLight.shadow.camera.top = 10
        directionalLight.shadow.camera.bottom = -10
        directionalLight.shadow.camera.near = 0.5
        directionalLight.shadow.camera.far = 6000

        // directionalLight.shadow.mapSize.set(1020, 1020)

        directionalLight.shadow.radius = 3

        this.scene?.add(directionalLight)

        // CameraHelper可视化.shadow.camera
        // const cameraHelper = new THREE.CameraHelper(
        //   directionalLight.shadow.camera,
        // )
        // this.scene?.add(cameraHelper)

        const ambient = new THREE.AmbientLight(0xffffff, 0.2)
        this.scene?.add(ambient)
      }
      initPlane() {
        // 创建一个虚拟平面并放置在远处
        const planeGeometry = new THREE.CircleGeometry(15, 50)
        const planeMaterial = new THREE.MeshLambertMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.3,
        })

        const mesh = new THREE.Mesh(planeGeometry, planeMaterial)
        mesh.receiveShadow = true // 设置接收阴影的投影面
        mesh.position.set(0, -8, -5)
        mesh.rotateX(-Math.PI / 2) // 旋转90度
        this.scene?.add(mesh)
      }

      createChart() {
        if (this.scene && this.camera) {
          // this.scene.background = new THREE.Color(0xfffaf0)
          const background = createBackground({
            aspect: this.camera.aspect,
            grainScale: 0.001,
            colors: ['#ffffff', '#353535'],
          })
          this.scene.add(background)
        }
        if (this.controls) {
          this.controls.maxDistance = 200
          this.controls.minDistance = 20
        }
        const loader = new GLTFLoader()
        loader.load(CartoonGltf, gltf => {
          console.log(gltf.scene)
          gltf.scene.traverse(obj => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (obj.isMesh) {
              const o = obj as THREE.Mesh
              o.castShadow = true // 开启阴影
            }
          })

          this.scene?.add(gltf.scene)
        })

        if (this.renderer) {
          // 设置渲染器，允许光源阴影渲染
          this.renderer.shadowMap.enabled = true
        }
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initPlane()
    myThree.initLight()
    myThree.createChart()

    threeReal.current = myThree

    return () => {
      myThree.destroy()
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <div ref={canvas} className="w-full h-full relative z-10" />
    </div>
  )
}

export default Three
