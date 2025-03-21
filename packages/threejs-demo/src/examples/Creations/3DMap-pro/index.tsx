import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import {ThreeMap} from '../../../utils/3dMap'
import ChinaData from '../../../data/map/china.json'
import ChinaProvinceData from '../../../data/map/china-province.json'

function Three() {
  const canvas = useRef<HTMLDivElement>(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      mapCenter = {x: 0, y: 0, z: 0}
      pointsArr: THREE.Vector3[] = []
      i = 0 // 管道累加数
      group?: THREE.Group<THREE.Object3DEventMap>
      map?: ThreeMap

      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 50000
        this.isAxesHelper = true
        this.cameraConfig.fov = 450
        this.cameraConfig.far = 650000
        this.isCSS2Renderer = true
        this.isRayCaster = true
      }
      animate(): void {
        // console.log(this.camera?.position)
      }
      initLight() {
        //光源设置
        const ambient = new THREE.AmbientLight(0xffffff, 10)
        this.scene?.add(ambient)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
        directionalLight.rotateX(Math.PI / 2)
        directionalLight.position.set(0, 30, 0)

        this.scene?.add(directionalLight)
      }
      initMap() {
        if (this.scene && this.renderer && this.camera && this.controls) {
          this.map = new ThreeMap({
            data: ChinaData,
            subDistrictData: ChinaProvinceData,
            sceneSystem: this.scene,
            renderSystem: this.renderer,
            cameraSystem: this.camera,
            controlsSystem: this.controls,
            containerDom: canvas.current!,
          })
        }
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
