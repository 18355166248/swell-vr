import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'

function Two() {
  const canvas = useRef(null)

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      constructor() {
        super()
        this.isControl = true
        this.isStats = true
        this.isGui = true
        this.dataObj = {
          color: '#00ff00',
          x: 0,
          y: 0,
          z: 0,
        }
        this.guiSettings = [
          {
            type: 'color',
            key: 'color',
          },
          {
            type: 'folder',
            key: '相机',
            children: [
              {
                type: 'number',
                key: 'x',
                min: -10,
                max: 10,
              },
              {
                type: 'folder',
                key: '相机1',
                children: [
                  {
                    type: 'number',
                    key: 'y',
                    min: -10,
                    max: 10,
                  },
                ],
              },
              {
                type: 'folder',
                key: '相机2',
                children: [
                  {
                    type: 'number',
                    key: 'z',
                    min: -10,
                    max: 10,
                  },
                ],
              },
            ],
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
          50,
          0,
          0, //顶点2坐标
          0,
          100,
          0, //顶点3坐标
          0,
          0,
          10, //顶点4坐标
          0,
          0,
          100, //顶点5坐标
          50,
          0,
          10, //顶点6坐标
          0,
          0,
          0,
        ])
        // 创建属性缓冲区对象
        //3个为一组，表示一个顶点的xyz坐标
        const attribute = new THREE.BufferAttribute(vertices, 3)
        // 设置几何体attributes属性的位置属性
        geometry.attributes.position = attribute

        this.scene?.add(
          new THREE.Line(
            geometry,
            new THREE.MeshBasicMaterial({
              color: this.dataObj.color,
            }),
          ),
        )

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

export default Two
