import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import ChinaData from '../../../data/map/china-parse.json'
// import ChinaProvinceData from '../../../data/map/china-province.json'
import {MapTools} from './MapTools'
import {FeatureCollection} from 'geojson'
import {districtStyle} from './districtStyle'

function Three() {
  const canvas = useRef<HTMLDivElement>(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      group?: THREE.Group<THREE.Object3DEventMap>
      mapTools?: MapTools

      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 50000
        this.isAxesHelper = true
        this.cameraConfig.fov = 450
        this.cameraConfig.far = 1000000
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
          // 自定义地图样式配置

          this.mapTools = new MapTools({
            scene: this.scene,
            renderer: this.renderer,
            camera: this.camera,
            controls: this.controls,
            containerDom: canvas.current!,
            data: ChinaData as FeatureCollection,
            style: districtStyle, // 传入自定义样式
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
