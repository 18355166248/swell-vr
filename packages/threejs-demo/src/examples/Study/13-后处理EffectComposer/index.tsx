import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js'
// 引入渲染器通道RenderPass
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js'
// 引入OutlinePass通道
import {OutlinePass} from 'three/addons/postprocessing/OutlinePass.js'
import {SMAAPass} from 'three/examples/jsm/postprocessing/SMAAPass.js'
// import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader.js'
// import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js'
// 引入UnrealBloomPass通道
// import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js'

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      composer?: EffectComposer
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
      animate(): void {
        if (this.composer) {
          this.composer.render()
        }
      }
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xe0eeee, 1.0)
        directionalLight.position.set(-10, 20, 10)

        this.scene?.add(directionalLight)
      }
      createChart() {
        if (
          this.renderer &&
          this.scene &&
          this.camera &&
          this.width &&
          this.height
        ) {
          const composer = new EffectComposer(this.renderer)
          // 创建一个渲染器通道，场景和相机作为参数
          const renderPass = new RenderPass(this.scene, this.camera)
          // 设置renderPass通道
          composer.addPass(renderPass)

          const geometry = new THREE.BoxGeometry(20, 20, 20)
          const material = new THREE.MeshBasicMaterial({color: 0xffdab9})
          const mesh = new THREE.Mesh(geometry, material)
          const mesh2 = new THREE.Mesh(geometry, material)
          mesh2.position.set(20, 10, 20)
          this.scene?.add(mesh)
          this.scene?.add(mesh2)

          // OutlinePass第一个参数v2的尺寸和canvas画布保持一致
          const v2 = new THREE.Vector2(this.width, this.height)
          const outlinePass = new OutlinePass(v2, this.scene, this.camera)
          // 一个模型对象
          outlinePass.selectedObjects = [mesh]
          //模型描边颜色，默认白色
          outlinePass.visibleEdgeColor.set(0xff0000)
          //高亮发光描边厚度
          outlinePass.edgeThickness = 2
          //高亮描边发光强度
          outlinePass.edgeStrength = 5
          //模型闪烁频率控制，默认0不闪烁
          outlinePass.pulsePeriod = 2

          // 设置OutlinePass通道
          composer.addPass(outlinePass)

          // const unrealBloomPass = new UnrealBloomPass(
          //   new THREE.Vector2(this.width, this.height),
          //   1.0,
          //   0.1,
          //   0.7,
          // )
          // unrealBloomPass.renderToScreen = true
          // composer.addPass(unrealBloomPass)

          // 轻量级的抗锯齿算法,性能损耗较小。
          const pixelRatio = this.renderer.getPixelRatio()
          const smaaPass = new SMAAPass(
            this.width * pixelRatio,
            this.height * pixelRatio,
          )
          composer.addPass(smaaPass)

          // 一种更现代的抗锯齿技术,效果和性能都不错
          // const fxaaPass = new ShaderPass(FXAAShader)
          // const pixelRatio = this.renderer.getPixelRatio() //获取设备像素比
          // // width、height是canva画布的宽高度
          // fxaaPass.uniforms.resolution.value.x = 1 / (this.width * pixelRatio)
          // fxaaPass.uniforms.resolution.value.y = 1 / (this.height * pixelRatio)
          // composer.addPass(fxaaPass)

          this.composer = composer
          this.needRender = false

          setInterval(() => {
            outlinePass.selectedObjects = [
              outlinePass.selectedObjects[0] === mesh ? mesh2 : mesh,
            ]
          }, 2000)
        }
      }
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
