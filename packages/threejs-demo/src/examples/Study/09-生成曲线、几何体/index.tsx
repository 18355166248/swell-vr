import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      constructor() {
        super()
        this.isControl = true
        // this.axesHelperSize = 4
        this.isAxesHelper = true
      }

      createChart() {
        const geometry = new THREE.BufferGeometry()
        const R = 100 // 半径
        const N = 50 // 分段数
        const sp = (Math.PI * 2) / N // 每段弧度
        const arr = []
        for (let i = 0; i < N; i++) {
          const x = R * Math.cos(i * sp)
          const y = R * Math.sin(i * sp)
          const z = 0
          arr.push(x, y, z)
        }
        //类型数组创建顶点数据
        const vertices = new Float32Array(arr)
        // 创建属性缓冲区对象
        //3个为一组，表示一个顶点的xyz坐标
        const attributes = new THREE.BufferAttribute(vertices, 3)
        geometry.attributes.position = attributes
        // 线条材质对象
        const material = new THREE.LineBasicMaterial({
          color: 0xff0000,
        })
        const line = new THREE.Line(geometry, material)
        this.scene?.add(line)
        this.camera?.position.set(0, 300, 200)
        this.camera?.rotateX(Math.PI / 6)
        // this.camera?.rotateY(Math.PI / 2)
        // this.camera?.rotateZ(0)
      }

      // createChart2() {
      //   // Vector2表示的三个点坐标，三个点构成的轮廓相当于两端直线相连接
      //   // const pointsArr = [
      //   //   new THREE.Vector2(50, 60),
      //   //   new THREE.Vector2(25, 0),
      //   //   new THREE.Vector2(50, -60),
      //   // ]
      //   // // LatheGeometry：pointsArr轮廓绕y轴旋转生成几何体曲面
      //   // // pointsArr：旋转几何体的旋转轮廓形状
      //   // const geometry = new THREE.LatheGeometry(pointsArr, 10, 0, 1 * Math.PI)

      //   const curve = new THREE.SplineCurve([
      //     new THREE.Vector2(50, 60),
      //     new THREE.Vector2(25, 0),
      //     new THREE.Vector2(50, -60),
      //   ])
      //   //曲线上获取点,作为旋转几何体的旋转轮廓
      //   const pointsArr = curve.getPoints(40)
      //   // LatheGeometry：pointsArr轮廓绕y轴旋转生成几何体曲面
      //   const geometry = new THREE.LatheGeometry(pointsArr, 30)

      //   // 线条材质对象
      //   const material = new THREE.MeshLambertMaterial({
      //     color: 0x0000ff,
      //     side: THREE.DoubleSide,
      //   })
      //   const mesh = new THREE.Mesh(geometry, material)
      //   this.scene?.add(mesh)
      //   this.camera?.position.set(200, 200, 200)
      //   this.renderer?.setClearColor(0x000000)

      //   const light = new THREE.DirectionalLight(0xffffff, 1)
      //   light.position.set(0, 500, 500)
      //   this.scene?.add(light)
      // }

      createChart3() {
        const pointsArr = [
          new THREE.Vector2(-50, -50),
          new THREE.Vector2(-60, 0),
          new THREE.Vector2(0, 50),
          new THREE.Vector2(60, 0),
          new THREE.Vector2(50, -50),
        ]
        // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
        const shape = new THREE.Shape(pointsArr)
        const geometry = new THREE.ShapeGeometry(shape)
        const material = new THREE.MeshLambertMaterial({
          color: 0x00ff00,
          // wireframe: true,
        })
        const mesh = new THREE.Mesh(geometry, material)

        this.scene?.add(mesh)

        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(0, 500, 500)
        this.scene?.add(light)

        this.camera?.position.set(200, 40, 200)
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

  return (
    <div className="relative w-full h-full">
      <div ref={canvas} className="w-full h-full relative z-10" />
    </div>
  )
}

export default Three
