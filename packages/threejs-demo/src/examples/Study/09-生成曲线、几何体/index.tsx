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
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
        directionalLight.position.set(100, 60, 50)
        this.scene?.add(directionalLight)
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5)
        directionalLight2.position.set(-100, -60, -50)
        this.scene?.add(directionalLight2)
        const ambient = new THREE.AmbientLight(0xffffff, 0.2)
        this.scene?.add(ambient)
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

      createChart2() {
        // Vector2表示的三个点坐标，三个点构成的轮廓相当于两端直线相连接
        // const pointsArr = [
        //   new THREE.Vector2(50, 60),
        //   new THREE.Vector2(25, 0),
        //   new THREE.Vector2(50, -60),
        // ]
        // // LatheGeometry：pointsArr轮廓绕y轴旋转生成几何体曲面
        // // pointsArr：旋转几何体的旋转轮廓形状
        // const geometry = new THREE.LatheGeometry(pointsArr, 10, 0, 1 * Math.PI)

        const curve = new THREE.SplineCurve([
          new THREE.Vector2(50, 60),
          new THREE.Vector2(25, 0),
          new THREE.Vector2(50, -60),
        ])
        //曲线上获取点,作为旋转几何体的旋转轮廓
        const pointsArr = curve.getPoints(40)
        // LatheGeometry：pointsArr轮廓绕y轴旋转生成几何体曲面
        const geometry = new THREE.LatheGeometry(pointsArr, 30)

        // 线条材质对象
        const material = new THREE.MeshLambertMaterial({
          color: 0x0000ff,
          side: THREE.DoubleSide,
        })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene?.add(mesh)
        this.camera?.position.set(200, 200, 200)
        this.renderer?.setClearColor(0x000000)

        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(0, 500, 500)
        this.scene?.add(light)
      }

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

      // 拉伸ExtrudeGeometry
      createChart4() {
        const shape = new THREE.Shape([
          // 按照特定顺序，依次书写多边形顶点坐标
          new THREE.Vector2(-50, -50), //多边形起点
          new THREE.Vector2(-50, 50),
          new THREE.Vector2(50, 50),
          new THREE.Vector2(50, -50),
        ])
        // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
        const geometry = new THREE.ExtrudeGeometry(
          shape, //二维轮廓
          {
            depth: 40, //拉伸长度
            bevelThickness: 20, //倒角尺寸:拉伸方向
            bevelSize: 10, //倒角尺寸:垂直拉伸方向
            bevelSegments: 20, //倒圆角：倒角细分精度，默认3
            bevelEnabled: true, //禁止倒角,默认true
          },
        )
        const material = new THREE.MeshBasicMaterial({
          color: 0x0000cc,
          // wireframe: true,
        })
        const mesh = new THREE.Mesh(geometry, material)

        this.scene?.add(mesh)

        this.camera?.position.set(200, 40, 200)
      }
      // 扫描ExtrudeGeometry
      createChart5() {
        // 扫描轮廓：Shape表示一个平面多边形轮廓
        const shape = new THREE.Shape([
          // 按照特定顺序，依次书写多边形顶点坐标
          new THREE.Vector2(0, 0), //多边形起点
          new THREE.Vector2(0, 10),
          new THREE.Vector2(10, 10),
          new THREE.Vector2(10, 0),
        ])
        // 扫描轨迹：创建轮廓的扫描轨迹(3D样条曲线)
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-10, -50, -50),
          new THREE.Vector3(10, 0, 0),
          new THREE.Vector3(8, 50, 50),
          new THREE.Vector3(-5, 0, 100),
        ])

        // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
        const geometry = new THREE.ExtrudeGeometry(
          shape, //二维轮廓
          {
            extrudePath: curve, //三维扫描路径
            steps: 100, // 沿着路径细分精度，越大越光滑
            depth: 40, //拉伸长度
            bevelThickness: 20, //倒角尺寸:拉伸方向
            bevelSize: 10, //倒角尺寸:垂直拉伸方向
            bevelSegments: 20, //倒圆角：倒角细分精度，默认3
            bevelEnabled: true, //禁止倒角,默认true
          },
        )
        const material = new THREE.MeshLambertMaterial({
          color: 0x0000cc,
        })
        const mesh = new THREE.Mesh(geometry, material)

        this.scene?.add(mesh)

        this.camera?.position.set(300, 300, 300)
      }
      // 多边形轮廓Shape简介
      createChart6() {
        const shape = new THREE.Shape()
        shape.moveTo(10, 0) //.currentPoint变为(10,0)
        // 绘制直线线段，起点(10,0)，结束点(100,0)
        shape.lineTo(100, 0) //.currentPoint变为(100, 0)
        shape.lineTo(100, 100) //.currentPoint变为(100, 100)
        shape.lineTo(10, 100) //.currentPoint变为(10, 100)
        // 扫描轨迹：创建轮廓的扫描轨迹(3D样条曲线)
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-10, -50, -50),
          new THREE.Vector3(10, 0, 0),
          new THREE.Vector3(8, 50, 50),
          new THREE.Vector3(-5, 0, 100),
        ])

        // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
        const geometry = new THREE.ShapeGeometry(
          shape, //二维轮廓
        )
        const material = new THREE.MeshLambertMaterial({
          color: 0x0000cc,
        })
        const mesh = new THREE.Mesh(geometry, material)

        this.scene?.add(mesh)

        this.camera?.position.set(300, 300, 300)
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    myThree.createChart6()

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
