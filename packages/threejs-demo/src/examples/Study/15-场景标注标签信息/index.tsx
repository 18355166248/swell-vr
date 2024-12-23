import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
// 引入CSS2模型对象CSS2DObject
import {CSS2DObject} from 'three/addons/renderers/CSS2DRenderer.js'

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
      box?: THREE.Mesh<
        THREE.BoxGeometry,
        THREE.MeshLambertMaterial,
        THREE.Object3DEventMap
      >
      constructor() {
        super()
        this.isControl = true
        // this.axesHelperSize = 5
        // this.isAxesHelper = true
        this.cameraConfig.fov = 50
        this.isCSS2Renderer = true
      }
      animate(): void {
        if (this.camera && this.scene && this.css2Renderer) {
          this.css2Renderer.render(this.scene, this.camera)
        }
      }
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xe0eeee, 1.0)
        directionalLight.position.set(-10, 20, 10)

        this.scene?.add(directionalLight)
      }
      createChart() {
        const gemetry = new THREE.BoxGeometry(10, 10, 10)
        const material = new THREE.MeshLambertMaterial({color: 0x00ff00})
        const mesh = new THREE.Mesh(gemetry, material)
        this.scene?.add(mesh)
      }
      createHtml() {
        let div = document.getElementById('tag')
        console.log('🚀 ~ MyThree ~ createHtml ~ div:', div)
        // 本地调试会执行destroy, 且 CSS2DObject 会将 div 销毁, 所以第二次需要再创建一遍
        if (!div) {
          div = document.createElement('div')
          div.id = 'tag'
          div.innerHTML = 'Tag'
        }
        // HTML元素转化为threejs的CSS2模型对象
        const tag = new CSS2DObject(div)
        tag.position.set(12, 12, 0)
        this.scene?.add(tag)
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    myThree.createChart()
    myThree.createHtml()

    threeReal.current = myThree

    return () => {
      myThree.destroy()
    }
  }, [])

  return (
    <>
      <div id="tag">Tag</div>
      <div className="relative w-full h-full">
        <div ref={canvas} className="w-full h-full relative z-10" />
      </div>
    </>
  )
}

export default Three
