import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      angle: number
      R: number
      mapCenter = {x: 0, y: 0, z: 0}
      pointsArr: THREE.Vector3[] = []
      i = 0 // 管道累加数
      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 20
        this.isAxesHelper = true
        this.isGui = true
        this.rendererSettings = {
          //想把canvas画布上内容下载到本地，需要设置为true
          preserveDrawingBuffer: true,
        }
        this.cameraConfig.fov = 10
        this.cameraConfig.far = 5000

        this.angle = 0 // 用于圆周运动计算的角度值
        this.R = 100 // 相机圆周运动的半径
      }
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xe0eeee, 1.0)
        directionalLight.position.set(30, 20, 0)
        directionalLight.castShadow = true // 开启阴影

        directionalLight.shadow.camera.left = -5
        directionalLight.shadow.camera.right = 5
        directionalLight.shadow.camera.top = 20
        directionalLight.shadow.camera.bottom = -10
        directionalLight.shadow.camera.near = 0.5
        directionalLight.shadow.camera.far = 6000

        this.scene?.add(directionalLight)

        // CameraHelper可视化.shadow.camera
        const cameraHelper = new THREE.CameraHelper(
          directionalLight.shadow.camera,
        )
        this.scene?.add(cameraHelper)
      }
      // 聚光源SpotLight
      createChart() {
        // Shape表示一个平面多边形轮廓
        const shape = new THREE.Shape([
          // 按照特定顺序，依次书写多边形顶点坐标
          new THREE.Vector2(0, 0), //多边形起点
          new THREE.Vector2(0, 15),
          new THREE.Vector2(5, 15),
          new THREE.Vector2(5, 0),
        ])
        const geometry = new THREE.ExtrudeGeometry(
          shape, //二维轮廓
          {
            depth: 5, //拉伸长度
          },
        )

        const material = new THREE.MeshLambertMaterial({
          color: 0xe0eeee,
        })
        const mesh = new THREE.Mesh(geometry, material)
        // 开启支持投影
        mesh.castShadow = true

        this.scene?.add(mesh)
        this.camera?.position.set(300, 300, 400)

        if (this.renderer) {
          // 设置渲染器，允许光源阴影渲染
          this.renderer.shadowMap.enabled = true
        }
      }
      createPlane() {
        const geometry = new THREE.PlaneGeometry(50, 40)
        const material = new THREE.MeshLambertMaterial({
          color: 0x8b8970,
          // side: THREE.DoubleSide,
        })
        const plane = new THREE.Mesh(geometry, material)
        plane.rotateX(-Math.PI / 2)
        plane.receiveShadow = true // 设置接收阴影的投影面
        this.scene?.add(plane)
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    myThree.createChart()
    myThree.createPlane()

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
