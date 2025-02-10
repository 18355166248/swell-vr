import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import Iphone13ProMaxGltf from '../../../assets/gltf/iphone_13_pro_max/scene.gltf'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import createBackground from '../../../utils/three-vignette-background/three-vignette.js'
import {CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import Tag from './Tag'
import posx from '../../../assets/Bridge2/posx.jpg'
import negx from '../../../assets/Bridge2/negx.jpg'
import posy from '../../../assets/Bridge2/posy.jpg'
import negy from '../../../assets/Bridge2/negy.jpg'
import posz from '../../../assets/Bridge2/posz.jpg'
import negz from '../../../assets/Bridge2/negz.jpg'

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
      mesh?: THREE.Mesh<
        THREE.BoxGeometry,
        THREE.MeshLambertMaterial,
        THREE.Object3DEventMap
      >
      planeBody: Record<
        string,
        {
          name: string
          tag: string
          tagMesh?: THREE.Object3D<THREE.Object3DEventMap>
        }
      > = {
        door: {
          name: '机舱门',
          tag: '机舱标注',
        },
        empennage: {
          name: '尾翼',
          tag: '尾翼标注',
        },
      }
      // 飞机身体模块
      planeBodyList: THREE.Object3D<THREE.Object3DEventMap>[] = []
      mixer?: THREE.AnimationMixer
      clips?: THREE.AnimationClip[]
      iphoneMesh: THREE.Object3D<THREE.Object3DEventMap> | undefined

      constructor() {
        super()
        this.isControl = true
        // this.axesHelperSize = 5
        // this.isAxesHelper = true
        this.cameraConfig.fov = 450
        this.cameraConfig.far = 2000
        this.isCSS2Renderer = true
        this.isRayCaster = true
      }
      animate(): void {
        if (this.mixer) {
          // 动画
          this.mixer?.update(0.01)
        }
        if (this.scene && this.camera && this.css2Renderer) {
          this.css2Renderer.render(this.scene, this.camera)
        }

        // 旋转手机
        // if (this.iphoneMesh) {
        //   this.iphoneMesh.rotation.y += 0.01
        // }

        this.composer?.render()
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

      raycasterAction() {
        if (this.raycaster) {
          // 射线交叉计算拾取模型
          const intersects = this.raycaster.intersectObjects(this.planeBodyList)
          console.log('intersects', intersects)
          const list = Object.values(this.planeBody)

          // 销毁历史tag
          list.forEach(b => {
            if (b.tagMesh) {
              b.tagMesh.children.forEach(c => {
                if (c.name === this.tagKey) {
                  c.removeFromParent()
                }
              })
            }
          })
          if (intersects.length > 0) {
            const obj = intersects[0].object
            const body = list.find(b => b.name === obj.name)
            if (body && body.tagMesh) {
              this.createTag(body.tagMesh, <Tag name={body.name} />)
            }
          }
        }
      }
      // 创建圆弧线
      createArcLine() {
        // 创建一个圆弧曲线
        const curve = new THREE.EllipseCurve(
          0,
          0, // 圆弧中心点
          0.4,
          0.4, // x和y方向的半径改为0.4
          Math.PI / 9, // 起始角度 (20度)
          Math.PI * 2 - Math.PI / 9, // 结束角度 (340度)
          false, // 是否逆时针
          0, // 旋转角度
        )

        // 获取圆弧上的点
        const points = curve.getPoints(50)
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        // 创建材质
        const material = new THREE.LineBasicMaterial({
          color: 0xffffff,
          linewidth: 2,
        })

        // 创建线条
        const arcLine = new THREE.Line(geometry, material)

        // 调整位置和旋转
        arcLine.rotation.x = Math.PI / 2 // 旋转90度使其垂直
        arcLine.position.set(0, -0.49, 0) // 调整位置更靠近底部

        // 创建文字标签
        const textDiv = document.createElement('div')
        textDiv.className = 'text-label'
        textDiv.textContent = '720°'
        textDiv.style.color = 'white'
        textDiv.style.fontWeight = 'bold'
        textDiv.style.fontSize = '38px'
        textDiv.style.fontFamily = 'Arial'
        textDiv.style.userSelect = 'none'
        textDiv.style.whiteSpace = 'nowrap'

        const label = new CSS2DObject(textDiv)
        label.position.set(0.4, 0, 0) // 调整文字位置到圆弧上方缺口处

        arcLine.add(label)

        if (this.scene) {
          this.scene.add(arcLine)
        }
      }
      createChart() {
        if (this.scene && this.camera) {
          const background = createBackground({
            aspect: this.camera.aspect,
            grainScale: 0.001,
            colors: ['#ffffff', '#353535'],
          })
          this.scene.add(background)

          this.camera.position.set(0.54, 0.03, -0.83)

          // 添加圆弧线
          this.createArcLine()
        }
        if (this.controls) {
          this.controls.maxDistance = 2
          this.controls.minDistance = 1
        }
        const loader = new GLTFLoader()
        loader.load(Iphone13ProMaxGltf, gltf => {
          const mesh = gltf.scene.getObjectByName('iPhone13ProMaxfbx')
          if (mesh) {
            const textureCube = new THREE.CubeTextureLoader().load([
              posx,
              negx,
              posy,
              negy,
              posz,
              negz,
            ])
            console.log('🚀 ~ MyThree ~ createChart ~ mesh:', mesh)

            // Update material properties for better reflection
            mesh.traverse(child => {
              if (child instanceof THREE.Mesh) {
                if (child.material) {
                  child.material.envMap = textureCube
                  child.material.envMapIntensity = 0.5
                  child.material.needsUpdate = true
                  // 不用设置material.metalness和material.roughness 因为模型已经设置好了
                }
              }
            })
          }

          this.iphoneMesh = mesh

          Object.values(this.planeBody).forEach(b => {
            const bPlane = gltf.scene.getObjectByName(b.name)
            const bTag = gltf.scene.getObjectByName(b.tag)
            if (bPlane) {
              this.planeBodyList.push(bPlane)
            }
            if (bTag) {
              b.tagMesh = bTag
            }
          })

          this.scene?.add(gltf.scene)

          // animation
          if (this.scene) {
            this.clips = gltf.animations
            this.mixer = new THREE.AnimationMixer(this.scene)

            this.clips.forEach(clip => {
              const action = this.mixer?.clipAction(clip)
              if (action) {
                action.play()
              }
            })
          }
        })
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
