import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import {InnerShadow} from '../../../utils/innnerShadow/innerShadow'
import AnhuiData from './anhui.json'
import {convertToPixelCoordinates} from '../../../utils/innnerShadow/utils'

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
      innerShadow = new InnerShadow(AnhuiData)

      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 200
        this.isAxesHelper = true
        this.cameraConfig.fov = 450
        this.cameraConfig.far = 20000
        this.isCSS2Renderer = true
        this.isRayCaster = true
      }
      animate(): void {
        // console.log(this.camera?.position)
      }
      initLight() {
        //光源设置
        const ambient = new THREE.AmbientLight(0xffffff, 2.5)
        this.scene?.add(ambient)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
        directionalLight.rotateX(Math.PI / 2)
        directionalLight.position.set(0, 30, 0)

        this.scene?.add(directionalLight)

        // CameraHelper可视化.shadow.camera
        // const cameraHelper = new THREE.CameraHelper(
        //   directionalLight.shadow.camera,
        // )
        // this.scene?.add(cameraHelper)
      }

      initMap() {
        this.camera?.position.set(0, 280, 1400)
        const innerShadowCanvas = this.innerShadow.initInnerShadow({
          drawStyle: {
            fill: true,
            fillColor: 'rgba(34,117,211,1)',
            shadowColor: 'rgba(34,117,211,1)',
            shadowBlur: 60,
            shadowBlurScale: 0.1,
          },
          canvasWidth: this.width,
          canvasHeight: this.height,
        })
        const innerShadowMesh = this.drawInnerShadowMesh(innerShadowCanvas)
        innerShadowMesh.position.z = 2
        const group = new THREE.Group()

        group.add(innerShadowMesh)

        const extrudeGroup = new THREE.Group()

        AnhuiData.geometry.coordinates.forEach(feature => {
          const coordinates = feature[0]
          const mesh = this.drawExtrudeMesh(
            coordinates,
            'rgb(255, 204, 255, 0.5)',
          )
          extrudeGroup.add(mesh)
        })
        extrudeGroup.position.x = -4
        extrudeGroup.position.y = -15

        this.scene?.add(group)
        this.scene?.add(extrudeGroup)
      }

      drawInnerShadowMesh(mapCanvas: HTMLCanvasElement) {
        const texture = new THREE.Texture(mapCanvas)
        texture.needsUpdate = true

        const planeGeometry = new THREE.PlaneGeometry(this.width, this.height)

        const planeMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          opacity: 1,
          transparent: true, // 启用透明度
          // side: THREE.DoubleSide, // 双面可见
          depthWrite: true, // 关闭深度写入
          depthTest: true, // 开启深度测试
        })

        const plane = new THREE.Mesh(planeGeometry, planeMaterial)
        plane.renderOrder = 1 // 值越大，渲染越靠后
        // 保存对地图对象的引用
        return plane
      }

      // 侧面
      drawExtrudeMesh(coordinate: number[][], color: string | number) {
        const {mapScale, scale, offsetX, offsetY} = this.innerShadow
        console.log('🚀 ~ MyThree ~ useLayoutEffect ~ offsetX:', offsetX)
        console.log('🚀 ~ MyThree ~ useLayoutEffect ~ offsetY:', offsetY)

        // 准备坐标点数组
        const pathPoints: [number, number][][] = [[]]

        // 转换地理坐标为像素坐标
        for (let i = 0; i < coordinate.length; i++) {
          const point = coordinate[i]
          // 由于Three.js的坐标系中, y 轴是向上的，而在地理坐标中，纬度增加是向北（通常在地图上是向上），所以在转换时需要对纬度取负值来适应Three.js的坐标系。这是因为在Three.js中，正的 y 方向是向上的，而在地理坐标中，正的纬度方向是向北（通常在地图上是向上），这就导致了需要对纬度取负值来进行正确的映射。
          // 如果不对纬度取负值，渲染出来的地图可能会出现上下颠倒的情况。通过对纬度取负值，可以确保地图在Three.js中的渲染方向与我们在地理地图上看到的一致。
          const pixelCoord = convertToPixelCoordinates(
            point[0],
            point[1],
            mapScale,
          )

          // 应用缩放和偏移
          // const scaledX = (pixelCoord[0] - offset[0]) * scale
          const pathX = pixelCoord[0] * scale
          // 为了保持地图正确方向，在这里对 Y 坐标进行反转
          // const scaledY = (pixelCoord[1] - offset[1]) * scale
          const pathY = pixelCoord[1] * scale

          // 将坐标保存到数组，但在创建Three.js的形状时进行Y轴反转
          pathPoints[0].push([pathX, -pathY])
        }

        const shape = new THREE.Shape()
        // 绘制所有路径
        for (let pathIndex = 0; pathIndex < pathPoints.length; pathIndex++) {
          const path = pathPoints[pathIndex]
          for (let pointIndex = 0; pointIndex < path.length; pointIndex++) {
            const point = path[pointIndex]
            if (pointIndex === 0) {
              shape.moveTo(point[0], point[1])
            } else {
              shape.lineTo(point[0], point[1])
            }
          }
        }
        shape.closePath()
        const extrudeSettings = {
          depth: -10,
          bevelEnabled: false,
          bevelSegments: 1,
          bevelThickness: 0.2,
        }

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

        // 平面部分材质
        const material = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide,
          depthWrite: false, // 关闭深度写入
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.renderOrder = 2 // 值越大，渲染越靠后
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mesh._color = color

        return mesh
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    myThree.initMap()

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
