import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import ThreeBase from '../../../utils/ThreeBase'

function Three() {
  const canvas = useRef(null)

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      constructor() {
        super()
        this.isControl = true
        this.isAxesHelper = true
      }
      createChart() {
        const geometry = new THREE.BoxGeometry(20, 20, 20)
        const material = new THREE.MeshLambertMaterial({color: 0x00ffff})

        const group = new THREE.Group()
        const mesh = new THREE.Mesh(geometry, material)
        const mesh2 = new THREE.Mesh(geometry, material)
        const mesh3 = new THREE.Mesh(geometry, material)
        group.add(mesh, mesh2)
        mesh2.add(mesh3)
        mesh3.position.set(-80, 30, 0)
        mesh3.name = 'name-mesh3'
        mesh2.position.set(30, 0, 0)
        group.position.set(0, 20, 0)
        this.scene?.add(group)
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(100, 100, 100)
        this.scene?.add(light)

        const mesh3Find = group.getObjectByName('name-mesh3')
        console.log('🚀 ~ MyThree ~ createChart ~ mesh3Find:', mesh3Find)

        const mesh3WorldPosition = new THREE.Vector3()
        mesh3.getWorldPosition(mesh3WorldPosition)
        console.log('mesh3.parent', mesh3.parent)
        console.log('mesh3', mesh3WorldPosition)

        // 局部坐标系
        const meshAxesHelper = new THREE.AxesHelper(50)
        mesh3.add(meshAxesHelper)

        this.camera?.position.set(150, 300, 250)
      }
    }

    const myThree = new MyThree()
    myThree.init(canvas.current)
    myThree.createChart()

    return () => {
      myThree.destroy()
    }
  }, [])

  return <div ref={canvas} className="w-full h-full" />
}

export default Three
