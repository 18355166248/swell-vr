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
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
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
