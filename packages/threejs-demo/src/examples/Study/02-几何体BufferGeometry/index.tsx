import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import ThreeBase from '../../../utils/ThreeBase'

function Two() {
  const canvas = useRef(null)

  useLayoutEffect(() => {
    if (!canvas.current) return

    class MyThree extends ThreeBase {
      material?: THREE.ShaderMaterial
      group?: THREE.Group<THREE.Object3DEventMap>
      normalObj?: THREE.Mesh<
        THREE.ExtrudeGeometry,
        THREE.MeshBasicMaterial,
        THREE.Object3DEventMap
      >
      time: number
      constructor() {
        super()
        this.isControl = true
        this.isStats = true
        this.isGui = true
        this.time = 1.0
        this.dataObj = {
          color: '#00ff00',
          x: 0,
          y: 0,
          z: 0,
        }
        this.guiSettings = [
          {
            type: 'color',
            key: 'color',
          },
          {
            type: 'folder',
            key: '相机',
            children: [
              {
                type: 'number',
                key: 'x',
                min: -10,
                max: 10,
              },
              {
                type: 'folder',
                key: '相机1',
                children: [
                  {
                    type: 'number',
                    key: 'y',
                    min: -10,
                    max: 10,
                  },
                ],
              },
              {
                type: 'folder',
                key: '相机2',
                children: [
                  {
                    type: 'number',
                    key: 'z',
                    min: -10,
                    max: 10,
                  },
                ],
              },
            ],
          },
        ]
      }
      createChart() {}
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

export default Two
