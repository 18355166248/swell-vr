import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase.js'
import CartoonGltf from '../../../assets/gltf/cartoon_plane/cartoon_plane_biaozhu.glb'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import createBackground from '../../../utils/three-vignette-background/three-vignette.js'
import Tag from './Tag.js'

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

      constructor() {
        super()
        this.isControl = true
        // this.axesHelperSize = 5
        // this.isAxesHelper = true
        this.cameraConfig.fov = 450
        this.cameraConfig.far = 20000
        this.isCSS2Renderer = true
        this.isRayCaster = true
        this.isOutlinePass = true
        this.outlinePassParams.color = 0xffe4b5
        this.outlinePassParams.edgeStrength = 3
        this.isTWEEN = true

        this.guiSettings = [
          {
            type: 'folder',
            key: '相机',
            children: [
              {
                type: 'number',
                key: 'cameraPosX',
                min: -10,
                max: 10,
              },
              {
                type: 'number',
                key: 'cameraPosY',
                min: -10,
                max: 10,
              },
              {
                type: 'number',
                key: 'cameraPosZ',
                min: -10,
                max: 10,
              },
            ],
          },
        ]

        this.isGui = true
        this.dataObj = {
          cameraPosX: 0,
          cameraPosY: 0,
          cameraPosZ: 0,
        }
      }
      onGuiAction = () => {
        const {cameraPosX, cameraPosY, cameraPosZ} = this.dataObj
        this.camera?.position.set(cameraPosX, cameraPosY, cameraPosZ)
      }
      animate(): void {
        if (this.mixer) {
          // 动画
          this.mixer?.update(0.01)
        }
        if (this.scene && this.camera && this.css2Renderer) {
          this.css2Renderer.render(this.scene, this.camera)
        }

        this.composer?.render()
      }
      initLight() {
        //光源设置
        const ambient = new THREE.AmbientLight(0xffffff, 2.5)
        this.scene?.add(ambient)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
        directionalLight.rotateX(Math.PI / 2)
        directionalLight.position.set(0, 30, 0)
        directionalLight.castShadow = true // 开启阴影
        // 方向光阴影的投射范围
        directionalLight.shadow.camera.left = -10
        directionalLight.shadow.camera.right = 10
        directionalLight.shadow.camera.top = 10
        directionalLight.shadow.camera.bottom = -10
        directionalLight.shadow.camera.near = 0.5
        directionalLight.shadow.camera.far = 6000

        // directionalLight.shadow.mapSize.set(1020, 1020)

        // directionalLight.shadow.radius = 3

        this.scene?.add(directionalLight)

        // CameraHelper可视化.shadow.camera
        // const cameraHelper = new THREE.CameraHelper(
        //   directionalLight.shadow.camera,
        // )
        // this.scene?.add(cameraHelper)
      }
      initPlane() {
        // 创建一个虚拟平面并放置在远处
        const planeGeometry = new THREE.CircleGeometry(15, 50)
        const planeMaterial = new THREE.MeshLambertMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.3,
        })

        const mesh = new THREE.Mesh(planeGeometry, planeMaterial)
        mesh.receiveShadow = true // 设置接收阴影的投影面
        mesh.position.set(0, -8, -5)
        mesh.rotateX(-Math.PI / 2) // 旋转90度
        this.scene?.add(mesh)
      }

      createChart() {
        if (this.scene && this.camera) {
          const background = createBackground({
            aspect: this.camera.aspect,
            grainScale: 0.001,
            colors: ['#ffffff', '#353535'],
          })
          this.scene.add(background)
        }
        if (this.controls) {
          this.controls.maxDistance = 200
          this.controls.minDistance = 20
        }
        const loader = new GLTFLoader()
        loader.load(CartoonGltf, gltf => {
          console.log(gltf.scene)
          gltf.scene.traverse(obj => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (obj.isMesh) {
              const o = obj as THREE.Mesh
              o.castShadow = true // 开启阴影
            }
          })

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

        if (this.renderer) {
          // 设置渲染器，允许光源阴影渲染
          this.renderer.shadowMap.enabled = true
        }
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
            if (this.outlinePass) {
              const obj = intersects[0].object
              const body = list.find(b => b.name === obj.name)
              if (body && body.tagMesh) {
                this.createTag(body.tagMesh, <Tag name={body.name} />)
                if (this.TWEEN && this.camera && this.scene) {
                  const A = this.scene.getObjectByName(body.name)
                  if (A) {
                    const pos = new THREE.Vector3()
                    //获取三维场景中某个对象世界坐标
                    A.getWorldPosition(pos)
                    // 向量的x、y、z坐标分别在pos基础上增加30
                    const pos2 = pos.clone().addScalar(15)

                    new this.TWEEN.Tween({
                      x: this.camera.position.x,
                      y: this.camera.position.y,
                      z: this.camera.position.z,
                      tx: 0,
                      ty: 0,
                      tz: 0,
                    })
                      .to(
                        {
                          x: pos2.x,
                          y: pos2.y,
                          z: pos2.z,
                          // 相机结束指向的目标观察点
                          tx: pos.x,
                          ty: pos.y,
                          tz: pos.z,
                        },
                        600,
                      )
                      .onUpdate(obj => {
                        if (this.camera) {
                          // 动态改变相机位置
                          this.camera.position.set(obj.x, obj.y, obj.z)
                          // 动态计算相机视线
                          this.camera.lookAt(obj.tx, obj.ty, obj.tz)
                        }
                      })
                      .onComplete(obj => {
                        if (this.controls) {
                          this.controls.target.set(obj.tx, obj.ty, obj.tz)
                          this.controls.update()
                        }
                      })
                      .start()
                      .easing(this.TWEEN.Easing.Quadratic.Out) //进入和结束都设置缓动
                  }
                }
              }

              this.outlinePass.selectedObjects = [intersects[0].object]
            }
          } else {
            if (this.outlinePass) {
              this.outlinePass.selectedObjects = []
            }
          }
        }
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initPlane()
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
