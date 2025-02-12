import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import opelGtRetopoGltf from '../../../assets/gltf/opel_gt_retopo/scene1.gltf'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import createBackground from '../../../utils/three-vignette-background/three-vignette.js'
import Tag from './Tag'
import pointWhite from '../../../assets/images/point-white.png'

const basePointScale = 1

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

      mixer?: THREE.AnimationMixer
      clock = new THREE.Clock()
      driverDoorAction?: THREE.AnimationAction
      pointGroupScale = basePointScale
      pointGroupScaleFlag = true // 波点缩放动画
      meshObjList: THREE.Object3D<THREE.Object3DEventMap>[] = []
      pointGroup: THREE.Sprite<THREE.Object3DEventMap>[] = []

      constructor() {
        super()
        this.isControl = true
        // this.axesHelperSize = 5
        // this.isAxesHelper = true
        this.cameraConfig.fov = 450
        this.cameraConfig.far = 20000
        this.isCSS2Renderer = true
        this.isRayCaster = true
      }
      animate(): void {
        if (this.mixer) {
          const delta = this.clock.getDelta()
          // 动画
          this.mixer.update(delta)
        }
        if (this.scene && this.camera && this.css2Renderer) {
          this.css2Renderer.render(this.scene, this.camera)
        }

        if (this.pointGroupScaleFlag) {
          this.pointGroupScale += 0.005
        }
        if (!this.pointGroupScaleFlag) {
          this.pointGroupScale -= 0.005
        }

        if (this.pointGroupScale >= basePointScale) {
          this.pointGroupScaleFlag = false
        }

        if (this.pointGroupScale <= basePointScale - 0.2) {
          this.pointGroupScaleFlag = true
        }

        this.pointGroup.forEach(element => {
          element.scale.set(
            this.pointGroupScale,
            this.pointGroupScale,
            this.pointGroupScale,
          )
        })

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
        loader.load(opelGtRetopoGltf, gltf => {
          console.log(gltf)
          gltf.scene.traverse(obj => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (obj.isMesh) {
              const o = obj as THREE.Mesh
              o.castShadow = true // 开启阴影
            }
          })

          // 提取指定动画
          const animations = gltf.animations
          console.log('🚀 ~ MyThree ~ createChart ~ animations:', animations)
          if (this.scene && animations.length > 0) {
            // 提取合适的轨道
            const driverDoorTracksToPlay: THREE.VectorKeyframeTrack[] = []
            // 遍历所有动画剪辑中的所有轨道，筛选出需要的轨道
            animations.forEach(clip => {
              clip.tracks.forEach(track => {
                if (
                  (track instanceof THREE.VectorKeyframeTrack ||
                    track instanceof THREE.QuaternionKeyframeTrack) &&
                  track.name.includes('driverDoor.')
                ) {
                  driverDoorTracksToPlay.push(track)
                }
              })
            })
            const driverDoorClip = new THREE.AnimationClip(
              'driverDoor',
              25,
              driverDoorTracksToPlay,
            )

            this.mixer = new THREE.AnimationMixer(gltf.scene)

            this.driverDoorAction = this.mixer.clipAction(driverDoorClip)
            this.driverDoorAction?.play()
          }

          const pointNames = ['引擎盖', '左车门']
          pointNames.forEach(name => {
            const meshObj = gltf.scene.getObjectByName(name)
            if (meshObj) {
              this.meshObjList.push(meshObj)
              const point = this.createSpritePoint()
              meshObj.add(point)
              this.pointGroup.push(point)
            }
          })

          this.scene?.add(gltf.scene)
        })

        if (this.renderer) {
          // 设置渲染器，允许光源阴影渲染
          this.renderer.shadowMap.enabled = true
        }
      }

      raycasterAction() {
        if (this.raycaster) {
          // 射线交叉计算拾取模型
          const intersects = this.raycaster.intersectObjects(this.meshObjList)

          console.log(
            '🚀 ~ MyThree ~ raycasterAction ~ intersects:',
            intersects,
          )

          if (intersects.length > 0) {
            console.log(
              '🚀 ~ this.driverDoorAction.play',
              this.driverDoorAction?.play,
            )
            this.driverDoorAction?.play()
          }
        }
      }
      // 创建波点
      createSpritePoint() {
        const map = new THREE.TextureLoader().load(pointWhite)
        const material = new THREE.SpriteMaterial({
          map,
          color: 0xffffff,
          transparent: true,
        })
        const sprite = new THREE.Sprite(material)
        sprite.scale.set(basePointScale, basePointScale, basePointScale)
        return sprite
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
