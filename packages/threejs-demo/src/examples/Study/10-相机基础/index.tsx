import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import AnHuiJson from '../../../data/map/anhui.json'
import guanDaoImg from '../../../assets/images/guandao-caizhi.jpg'

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
        this.axesHelperSize = 2
        this.isAxesHelper = true
        this.isGui = true
        this.rendererSettings = {
          //想把canvas画布上内容下载到本地，需要设置为true
          preserveDrawingBuffer: true,
        }
        this.cameraConfig.fov = 5
        this.cameraConfig.far = 2000

        this.angle = 0 // 用于圆周运动计算的角度值
        this.R = 100 // 相机圆周运动的半径
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
      animate(): void {
        // 地图
        // if (this.camera) {
        //   // this.camera.position.y -= 0.3 //相机直线运动动画
        //   this.angle += 0.01
        //   // 相机y坐标不变，在XOZ平面上做圆周运动
        //   this.camera.position.x =
        //     this.mapCenter.x + this.R * Math.cos(this.angle)
        //   this.camera.position.y = this.mapCenter.y
        //   this.camera.position.z =
        //     this.mapCenter.z + this.R * Math.sin(this.angle)
        //   this.camera.lookAt(
        //     this.mapCenter.x,
        //     this.mapCenter.y,
        //     this.mapCenter.z,
        //   )
        // }
        // 管道穿梭动画
        // if (this.i < this.pointsArr.length - 1) {
        //   // 相机位置：曲线上当前点pointsArr[i]
        //   this.camera?.position.copy(this.pointsArr[this.i])
        //   // 曲线上当前点pointsArr[i]和下一个点pointsArr[i+1]近似模拟当前点曲线切线
        //   // 设置相机观察点为当前点的下一个点，相机视线和当前点曲线切线重合
        //   this.camera?.lookAt(this.pointsArr[this.i + 1])
        //   this.i += 1 //调节速度
        // } else {
        //   this.i = 0
        // }
      }
      // 地图
      createChart() {
        const group = new THREE.Group()
        // const group = new THREE.Object3D()
        const coordinates = AnHuiJson.geometry.coordinates

        coordinates.forEach(multiPolygon => {
          multiPolygon.forEach(polygon => {
            const pointsArr: THREE.Vector2[] = [] // 一组二维向量表示一个多边形轮廓坐标
            polygon.forEach(function (e) {
              // data坐标数据转化为Vector2构成的顶点数组
              const v2 = new THREE.Vector2(e[0], e[1])
              pointsArr.push(v2)
            })
            // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
            const shape = new THREE.Shape(pointsArr)
            // 多边形shape轮廓作为ShapeGeometry参数，生成一个多边形平面几何体
            const geometry = new THREE.ShapeGeometry(shape)
            const material = new THREE.MeshBasicMaterial({
              color: 0x0000ff,
              side: THREE.DoubleSide,
              // wireframe: true,
            })
            const mesh = new THREE.Mesh(geometry, material)
            group.add(mesh)
          })
        })

        const box3 = new THREE.Box3()
        box3.expandByObject(group)
        const size = new THREE.Vector3()
        box3.getSize(size)
        console.log('size', size)
        const center = new THREE.Vector3()
        box3.getCenter(center) // 计算包围盒中心坐标
        console.log('center', center)
        this.mapCenter = center

        this.scene?.add(group)

        this.camera?.lookAt(center.x, center.y, 0)
        // 相机位置设置在包围盒中心 x y保持一致, z轴做偏移
        this.camera?.position.set(center.x, center.y, 100)
        this.controls?.target.set(center.x, center.y, 0)
        this.axesHelper?.position.set(center.x, center.y, 0.01)
        this.controls?.update() //update()函数内会执行camera.lookAt(controls.target)

        // 倒过来了
        // this.camera?.up.set(0, -1, 0)
        console.log('camera.up', this.camera?.up)
      }
      // 穿梭管道
      createPipe() {
        // 三维样条曲线
        const path = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-50, 20, 90),
          new THREE.Vector3(-10, 40, 40),
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(60, -60, 0),
          new THREE.Vector3(90, -40, 60),
          new THREE.Vector3(120, 30, 30),
        ])
        // 样条曲线path作为TubeGeometry参数生成管道
        const geometry = new THREE.TubeGeometry(path, 200, 5, 30)
        const texLoader = new THREE.TextureLoader()
        //纹理贴图
        const texture = texLoader.load(guanDaoImg)
        //UV坐标U方向阵列模式
        texture.wrapS = THREE.RepeatWrapping
        //纹理沿着管道方向阵列(UV坐标U方向)
        texture.repeat.x = 10
        const material = new THREE.MeshLambertMaterial({
          map: texture,
          side: THREE.DoubleSide, //双面显示看到管道内壁
        })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene?.add(mesh)
        // this.camera?.position.set(3000, 100, 0)

        // 从曲线上等间距获取一定数量点坐标
        const pointsArr = path.getSpacedPoints(500)
        this.pointsArr = pointsArr
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    myThree.createChart()
    // myThree.createPipe()

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
