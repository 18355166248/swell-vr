import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'

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
      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 5
        this.isAxesHelper = true
        this.cameraConfig.fov = 120
      }
      animate(): void {}
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xe0eeee, 1.0)
        directionalLight.position.set(-10, 20, 10)

        this.scene?.add(directionalLight)
      }
      createChart() {}
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
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
