import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import MachineIndustry from '../../../assets/gltf/machine_industry/scene.gltf'
import {Controller} from 'three/examples/jsm/libs/lil-gui.module.min.js'

class MyThree extends ThreeBase {
  mapCenter = {x: 0, y: 0, z: 0}
  pointsArr: THREE.Vector3[] = []
  i = 0 // 管道累加数
  group?: THREE.Group<THREE.Object3DEventMap>
  clock = new THREE.Clock()
  mixer?: THREE.AnimationMixer
  action?: THREE.AnimationAction
  constructor() {
    super()
    this.isGui = true
    this.isControl = true
    this.axesHelperSize = 4
    this.isAxesHelper = true
    this.cameraConfig.fov = 12
  }
  animate(): void {
    const frameT = this.clock.getDelta()
    this.mixer?.update(frameT)
  }
  initLight() {
    //光源设置
    const directionalLight = new THREE.DirectionalLight(0xe0eeee, 4.0)
    directionalLight.position.set(10, 20, 10)

    this.scene?.add(directionalLight)
  }
  createChart() {
    const gemetry = new THREE.BoxGeometry(10, 10, 10)
    const material = new THREE.MeshBasicMaterial({color: 0xff0000})
    const mesh = new THREE.Mesh(gemetry, material)
    mesh.name = 'Box'
    this.scene?.add(mesh)
    this.initAnimation(mesh)
    this.camera?.position.set(50, 60, 40)
  }
  initAnimation(mesh: THREE.Mesh) {
    // 给名为Box的模型对象的设置关键帧数据KeyframeTrack
    const times = [0, 2, 4, 6] //时间轴上，设置三个时刻0、3、6秒
    // times中三个不同时间点，物体分别对应values中的三个xyz坐标
    const values = [0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0]
    // 创建关键帧，把模型位置和时间对应起来
    // 0~3秒，物体从(0,0,0)逐渐移动到(100,0,0),3~6秒逐渐从(100,0,0)移动到(0,0,100)
    const posKF = new THREE.KeyframeTrack('Box.position', times, values)
    const colorKF = new THREE.KeyframeTrack(
      'Box.material.color',
      [2, 4, 6],
      [1, 0, 0, 0, 0, 1, 1, 0, 0],
    )
    const clip = new THREE.AnimationClip('Box', 6, [posKF, colorKF])
    this.mixer = new THREE.AnimationMixer(mesh)
    this.action = this.mixer.clipAction(clip)
    this.action.timeScale = 2 // 设置动画播放速度为原来的两倍
    // this.action.time = 3
    this.action.play()
  }
  createChart2() {
    const loader = new GLTFLoader()
    loader.load(MachineIndustry, gltf => {
      console.log(gltf)
      gltf.scene.traverse(obj => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (obj.isMesh) {
          // const o = obj as THREE.Mesh
          // o.castShadow = true // 开启阴影
        }
      })

      this.scene?.add(gltf.scene)
      this.camera?.position.set(20, 20, 20)

      if (this.scene && gltf.animations) {
        const clips = gltf.animations
        const mixer = new THREE.AnimationMixer(this.scene)

        clips.forEach(clip => {
          const action = mixer?.clipAction(clip)
          console.log('🚀 ~ MyThree ~ createChart2 ~ action:', action)
          // 不循环播放
          action.loop = THREE.LoopOnce
          // 当动画播放完成后，是否回到起始状态
          action.clampWhenFinished = true
          action.paused = true
          // action.time = 3

          if (action) {
            action.play()
          }

          if (this.gui) {
            this.gui.add(action, 'time', 0, 10, 0.5)
          }
        })

        // 创建一个时钟对象Clock
        const clock = new THREE.Clock()
        // eslint-disable-next-line no-inner-declarations
        function render() {
          requestAnimationFrame(render)
          if (mixer !== null) {
            //clock.getDelta()方法获得两帧的时间间隔
            // 更新播放器相关的时间
            mixer.update(clock.getDelta())
          }
        }
        render()
      }
    })
  }
}

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    myThree.createChart2()

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
