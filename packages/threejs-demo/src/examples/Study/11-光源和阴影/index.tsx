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
      // 聚光源SpotLight
      createChart() {}
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
