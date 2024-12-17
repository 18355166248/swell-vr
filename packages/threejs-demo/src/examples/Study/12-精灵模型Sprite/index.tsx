import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'
import TipsIcon from '../../../assets/images/tips.png'
import WaterDroplets from '../../../assets/images/water-droplets.png'
import SnowFlakesIcon from '../../../assets/images/snow-flakes.png'

function Three() {
  const canvas = useRef(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      scaleNum = 0.5
      num = 25 // -1都是雪 51都是雨
      speed = 0.2 // 雨滴速度
      mapCenter = {x: 0, y: 0, z: 0}
      pointsArr: THREE.Vector3[] = []
      i = 0 // 管道累加数
      group?: THREE.Group<THREE.Object3DEventMap>
      constructor() {
        super()
        this.isControl = true
        this.axesHelperSize = 5
        // this.isAxesHelper = true
      }
      animate(): void {
        if (this.group) {
          this.group.children.forEach(m => {
            m.position.y -= m.scale.x * this.speed
            if (m.position.y < -20) {
              m.position.y = 20
            }
          })
        }
      }
      initLight() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xe0eeee, 1.0)
        directionalLight.position.set(-10, 20, 10)

        this.scene?.add(directionalLight)
      }
      // 提示精灵图
      createChart() {
        const geometry = new THREE.BoxGeometry(4, 5, 6)
        const material = new THREE.MeshLambertMaterial({
          color: 0x00ffff,
        })

        const mesh = new THREE.Mesh(geometry, material)
        this.scene?.add(mesh)

        const spriteMaterial = new THREE.SpriteMaterial({
          color: 0x00ffff,
          map: new THREE.TextureLoader().load(TipsIcon),
        })
        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.position.set(2, 3, 3)
        mesh.add(sprite)

        const spriteCopy = sprite.clone()
        spriteCopy.position.set(0, 7, 0)
        this.scene?.add(spriteCopy)
      }
      // 下雨&下雪
      createRain() {
        const snowSpriteMaterial = new THREE.SpriteMaterial({
          transparent: true,
          opacity: 0.8,
          color: 0xffffff,
          map: new THREE.TextureLoader().load(SnowFlakesIcon),
        })
        const waterSpriteMaterial = new THREE.SpriteMaterial({
          transparent: true,
          opacity: 0.8,
          color: 0xffffff,
          map: new THREE.TextureLoader().load(WaterDroplets),
        })
        const group = new THREE.Group()
        for (let i = 0; i < 50; i++) {
          const sprite = new THREE.Sprite(
            i > this.num ? snowSpriteMaterial : waterSpriteMaterial,
          )
          const x = Math.random() * 20
          const y = Math.random() * 20
          const z = Math.random() * 20
          sprite.position.set(x, y, z)
          const scale = Math.random() * this.scaleNum
          sprite.scale.set(scale, scale, 1)
          group.add(sprite)
        }
        for (let i = 0; i < 50; i++) {
          const sprite = new THREE.Sprite(
            i > this.num ? snowSpriteMaterial : waterSpriteMaterial,
          )
          const x = -Math.random() * 20
          const y = Math.random() * 20
          const z = Math.random() * 20
          sprite.position.set(x, y, z)
          const scale = Math.random() * this.scaleNum
          sprite.scale.set(scale, scale, 1)
          group.add(sprite)
        }
        for (let i = 0; i < 50; i++) {
          const sprite = new THREE.Sprite(
            i > this.num ? snowSpriteMaterial : waterSpriteMaterial,
          )
          const x = Math.random() * 20
          const y = -Math.random() * 20
          const z = Math.random() * 20
          sprite.position.set(x, y, z)
          const scale = Math.random() * this.scaleNum
          sprite.scale.set(scale, scale, 1)
          group.add(sprite)
        }
        for (let i = 0; i < 50; i++) {
          const sprite = new THREE.Sprite(
            i > this.num ? snowSpriteMaterial : waterSpriteMaterial,
          )
          const x = -Math.random() * 20
          const y = -Math.random() * 20
          const z = Math.random() * 20
          sprite.position.set(x, y, z)
          const scale = Math.random() * this.scaleNum
          sprite.scale.set(scale, scale, 1)
          group.add(sprite)
        }

        this.group = group
        this.scene?.add(group)
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.initLight()
    // myThree.createChart()
    myThree.createRain()

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
