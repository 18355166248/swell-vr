import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import MountainGltf from '../../../assets/gltf/low_poly_mountain/scene.gltf'

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
      // 多边形轮廓Shape(圆弧)
      createChart6() {
        // 下面代码绘制了一个矩形+扇形的轮廓，圆心在(100, 0),半径50。
        const shape = new THREE.Shape()
        shape.lineTo(100, 0) //.currentPoint变为(100+50,0)
        // 圆弧.arc参数的圆心0,0坐标是相对当前.currentPoint而言，而不是坐标原点
        shape.arc(0, 0, 50, 0, Math.PI / 2) //.currentPoint变为圆弧线结束点坐标
        console.log('currentPoint', shape.currentPoint)
        // 绘制直线，直线起点：圆弧绘制结束的点  直线结束点：(0, 0)
        shape.lineTo(0, 50)

        // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
        // const geometry = new THREE.ShapeGeometry(
        //   shape, //二维轮廓
        // )
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 20, //拉伸长度
          bevelEnabled: false, //禁止倒角
          curveSegments: 20, //shape曲线对应曲线细分数
        })
        const material = new THREE.MeshLambertMaterial({
          color: 0x0000c0,
        })
        const mesh = new THREE.Mesh(geometry, material)

        this.scene?.add(mesh)

        this.camera?.position.set(300, 300, 300)
      }
      // 多边形Shape(内孔.holes)
      createChart7() {
        const shape = new THREE.Shape()
        // .lineTo(100, 0)绘制直线线段，线段起点：.currentPoint，线段结束点：(100,0)
        shape.lineTo(100, 0)
        shape.lineTo(100, 100)
        shape.lineTo(0, 100)

        // Shape内孔轮廓
        const path1 = new THREE.Path() // 圆孔1
        path1.absarc(30, 80, 10, Math.PI * 1, Math.PI * 2)
        const path2 = new THREE.Path() // 圆孔2
        path2.absarc(80, 80, 10, Math.PI * 1, Math.PI * 2)
        const path3 = new THREE.Path() // 方形孔
        path3.moveTo(50, 50)
        path3.lineTo(60, 50)
        path3.lineTo(60, 60)
        path3.lineTo(50, 60)
        //三个内孔轮廓分别插入到holes属性中
        shape.holes.push(path1, path2, path3)

        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 20, //拉伸长度
          bevelEnabled: false, //禁止倒角
          curveSegments: 20, //shape曲线对应曲线细分数
        })
        const material = new THREE.MeshLambertMaterial({
          color: 0x0000c0,
        })
        const mesh = new THREE.Mesh(geometry, material)

        this.scene?.add(mesh)

        this.camera?.position.set(300, 300, 300)
      }
      // 模型边界线EdgesGeometry
      createChart8() {
        const geometry = new THREE.BoxGeometry(50, 50, 50)
        const material = new THREE.MeshLambertMaterial({
          color: 0x004444,
          transparent: true,
          opacity: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)

        // 长方体作为EdgesGeometry参数创建一个新的几何体
        const edges = new THREE.EdgesGeometry(geometry)
        const edgesMaterial = new THREE.LineBasicMaterial({
          color: 0x00ffff,
        })
        const line = new THREE.LineSegments(edges, edgesMaterial)

        mesh.add(line)

        this.scene?.add(mesh)

        this.camera?.position.set(300, 300, 300)
      }
      // 加载山体模型修改渐变色
      createChart9() {
        const loader = new GLTFLoader()
        loader.load(MountainGltf, gltf => {
          gltf.scene.traverse(child => {
            const mm = child as THREE.Mesh
            if (mm.isMesh) {
              const pos = mm.geometry.attributes.position
              const count = pos.count

              const yArr = []
              let min = Infinity
              let max = -Infinity
              for (let i = 0; i < count; i++) {
                const y = pos.getY(i)
                if (min > y) min = y
                if (max < y) max = y
                yArr.push(y)
              }
              const height = max - min

              console.log('🚀 ~ MyThree ~ createChart9 ~ height:', height)
              mm.position.set(500, -100, 450)

              const colorsArr = []
              const color1 = new THREE.Color(0x0000ff)
              const color2 = new THREE.Color(0x00ff00)
              const color3 = new THREE.Color(0xff0000)

              for (let i = 0; i < count; i++) {
                const percent = (yArr[i] - min) / height

                let c: THREE.Color | null = null
                if (percent <= 0.5) {
                  c = color1.clone().lerp(color2, percent * 2)
                } else {
                  c = color2.clone().lerp(color3, (percent - 0.5) * 2)
                }

                if (c) colorsArr.push(c.r, c.g, c.b)
              }
              const colors = new Float32Array(colorsArr)
              mm.geometry.attributes.color = new THREE.BufferAttribute(
                colors,
                3,
              )
              mm.material = new THREE.MeshLambertMaterial({vertexColors: true})
            }
          })

          // 修改模型材质颜色渐变
          this.scene?.add(gltf.scene)
          this.camera?.position.set(400, 100, 0)
        })
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    myThree.createChart9()

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
