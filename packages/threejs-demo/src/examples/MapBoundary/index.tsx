import {useLayoutEffect, useRef} from 'react'
import ThreeBase from '../../utils/ThreeBase'
import * as THREE from 'three'
import guangzhouData from './guangzhou.json'
import {initGeoFun, latLng2px} from './geoUtil'

export default function MapBoundary() {
  const textureRef = useRef<HTMLDivElement>(null)
  const myThreeRef = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!textureRef.current) return
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
        this.time = 1.0
      }
      getData() {
        return guangzhouData.features[0].geometry.coordinates[0][0]
      }
      createLine(points: THREE.Vector3[]) {
        const curve = new THREE.CatmullRomCurve3(points, true, 'catmullrom', 0)

        const geometry = new THREE.TubeGeometry(
          curve,
          Math.round(points.length * 0.5),
          0.01,
          8,
          true,
        )
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: {value: 0.0},
            len: {value: 0.03},
            size: {value: 0.005},
            color1: {value: new THREE.Color('#FFFFFF')},
            color2: {value: new THREE.Color('yellow')},
          },
          // 顶点着色器
          vertexShader: `
            uniform float time;
            uniform float size;
            uniform float len;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec3 vColor;
            void main() {
              vColor = color1;
              vec3 newPosition = position;
              float d = uv.x - time;

              if (abs(d) < len) {
                newPosition = newPosition + normal * size;
                vColor = color2;
              }
              gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
          `,
          // 片元着色器
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              gl_FragColor =vec4(vColor, 1.0);
            }
          `,
        })
        this.material = material
        const mesh = new THREE.Mesh(geometry, material)
        return mesh
      }
      createRegion(points: THREE.Vector3[]) {
        const extrudeSettings = {
          depth: 0.2,
          bevelEnabled: false,
        }
        const shape = new THREE.Shape()

        shape.moveTo(points[0].x, points[0].z)

        for (let i = 1; i < points.length; i = i + 2) {
          shape.lineTo(points[i].x, points[i].z)
        }
        shape.lineTo(points[0].x, points[0].z)
        //添加区块形状
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
        const tex = new THREE.TextureLoader().load('./tex.png')
        tex.wrapS = THREE.RepeatWrapping
        tex.wrapT = THREE.RepeatWrapping
        const material = new THREE.MeshBasicMaterial({
          map: tex,
          color: new THREE.Color('#00FFFF'),
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotateX(Math.PI * 0.5)

        return mesh
      }
      createChart() {
        initGeoFun(180)
        if (this.scene) {
          this.scene.background = new THREE.Color('rgb(65, 67, 67)')
          const points = this.getData()
          const pointsVector3 = points.map(item => {
            const p = latLng2px(item as [number, number]) as [number, number]
            return new THREE.Vector3(p[0], 0, p[1])
          })

          this.group = new THREE.Group()
          this.normalObj = this.createRegion(pointsVector3)
          this.group.add(this.createLine(pointsVector3))
          this.group.add(this.normalObj)
          this.scene.add(this.group)

          this.modelCenter(this.group, {
            width: 0.5,
            height: 20,
            depth: 1,
          })
        }
      }
      animate() {
        if (!this.renderer || !this.scene || !this.camera) return
        if (this.controls) {
          this.controls.update()
        }
        this.animateAction()
        this.renderer.render(this.scene, this.camera)
        this.threeAnim = requestAnimationFrame(this.animate.bind(this))
      }
      animateAction() {
        if (this.material) {
          if (this.time >= 1.0) {
            this.time = 0.0
          }
          this.time = this.time + 0.005
          this.material.uniforms.time.value = this.time
        }
      }
    }
    const myThree = new MyThree()
    myThreeRef.current = myThree
    myThree.init(textureRef.current)
    myThree.createChart()

    return () => {
      myThree.destroy()
    }
  }, [])

  return <div ref={textureRef} className="w-full h-full"></div>
}
