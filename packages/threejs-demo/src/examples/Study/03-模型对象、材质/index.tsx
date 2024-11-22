import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'

function Three() {
  const canvas = useRef(null)

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      constructor() {
        super()
        this.isControl = true
        this.isStats = true
        this.isGui = true
        this.isAxesHelper = true
        this.dataObj = {
          color: '#bdd551',
          x: 0,
          y: 0,
          z: 0,
        }
        this.guiSettings = [
          {
            type: 'color',
            key: 'color',
          },
        ]
      }
      createChart() {
        //创建一个空的几何体对象
        const geometry = new THREE.BufferGeometry()
        //类型化数组创建顶点数据
        const vertices = new Float32Array([
          0,
          0,
          0, //顶点1坐标
          100,
          0,
          0, //顶点2坐标
          100,
          100,
          0, //顶点3坐标
          0,
          100,
          0, //顶点4坐标
        ])
        // 创建属性缓冲区对象
        //3个为一组，表示一个顶点的xyz坐标
        const attribute = new THREE.BufferAttribute(vertices, 3)
        // 设置几何体attributes属性的位置属性
        geometry.attributes.position = attribute

        const indexes = new Uint16Array([0, 1, 2, 0, 2, 3])
        geometry.index = new THREE.BufferAttribute(indexes, 1)

        const mesh = new THREE.Mesh(
          geometry,
          // new THREE.LineBasicMaterial({
          //   color: this.dataObj.color,
          // }),
          new THREE.MeshBasicMaterial({
            color: this.dataObj.color,
            side: THREE.DoubleSide,
          }),
        )
        mesh.translateX(10)
        mesh.translateY(20)
        mesh.translateZ(30)
        mesh.rotateX(Math.PI / 6)
        mesh.scale.x = 0.5
        mesh.scale.y = 0.5
        mesh.scale.z = 0.5
        this.scene?.add(mesh)

        const mesh2 = mesh.clone(true)

        mesh2.translateX(80)
        mesh2.material.color.set('green')
        this.scene?.add(mesh2)

        this.camera?.position.set(150, 300, 250)
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
