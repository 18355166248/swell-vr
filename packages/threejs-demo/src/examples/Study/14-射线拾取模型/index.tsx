import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import TipsIcon from '../../../assets/images/tips.png'

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      sprite?: THREE.Sprite<THREE.Object3DEventMap>
      sprite2?: THREE.Sprite<THREE.Object3DEventMap>
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
        this.axesHelperSize = 5
        this.isAxesHelper = true
        this.cameraConfig.fov = 30
        this.isRayCaster = true
      }
      animate(): void {}
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xe0eeee, 1.0)
        directionalLight.position.set(-10, 20, 10)

        this.scene?.add(directionalLight)
      }
      createChart() {
        const geometry = new THREE.BoxGeometry(4, 5, 6)
        const material = new THREE.MeshLambertMaterial({
          color: 0x00ffff,
        })

        const mesh = new THREE.Mesh(geometry, material)
        this.box = mesh
        this.scene?.add(mesh)

        const spriteMaterial = new THREE.SpriteMaterial({
          color: 0x00ffff,
          map: new THREE.TextureLoader().load(TipsIcon),
        })
        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.position.set(2, 3, 3)
        sprite.name = 'sprite'
        mesh.add(sprite)

        const spriteCopy = sprite.clone()
        sprite.name = 'sprite2'
        spriteCopy.position.set(0, 7, 0)
        this.scene?.add(spriteCopy)

        this.sprite = sprite
        this.sprite2 = spriteCopy
      }
      raycasterAction() {
        if (this.raycaster && this.sprite && this.sprite2 && this.box) {
          const intersects = this.raycaster.intersectObjects([
            this.sprite,
            this.sprite2,
          ])

          if (intersects.length > 0) {
            if (intersects[0].object.name === 'sprite') {
              this.box.material.color.set(0x00ff00)
            }

            if (intersects[0].object.name === 'sprite2') {
              this.box.material.color.set(0x0000ff)
            }
          }
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
