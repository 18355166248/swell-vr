import {MapControlOptions} from './types'
import MapApplication from './MapApplication'
import * as THREE from 'three'
import {InteractionManager} from 'three.interactive'
import {Label3D} from './components/label3d'
import LilGui from './utils/lilGui'
import Stats from 'three/addons/libs/stats.module.js'

class MapControl extends MapApplication {
  pointCenter: [number, number]
  flyLineCenter: [number, number]
  depth: number
  clicked: boolean
  interactionManager: InteractionManager
  labelGroup: THREE.Group
  label3d: Label3D
  eventElement: never[]
  defaultMaterial: null
  defaultLightMaterial: null
  debug?: LilGui
  stats?: Stats
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    super(container, options)
    this.pointCenter = options.centroid
    this.flyLineCenter = options.center
    this.depth = 0.5
    this.clicked = false
    this.scene.fog = new THREE.Fog(1058614, 1, 50)
    this.scene.background = new THREE.Color(1058614)
    this.camera.instance.position.set(
      -13.767695123014105,
      12.990152163077308,
      39.28228164159694,
    )
    this.camera.instance.near = 1
    this.camera.instance.far = 1e4
    this.camera.instance.updateProjectionMatrix()
    this.interactionManager = new InteractionManager(
      this.renderer.instance,
      this.camera.instance,
      this.canvas,
    )
    this.labelGroup = new THREE.Group()
    this.label3d = new Label3D(this)
    this.labelGroup.rotateX(-Math.PI / 2)
    this.eventElement = []
    this.defaultMaterial = null
    this.defaultLightMaterial = null
    this.scene.add(this.labelGroup)
    this.initSetting()
  }
  initSetting() {
    this.debug = new LilGui(false)
    if (this.renderer.instance) {
      this.renderer.instance.shadowMap.enabled = false
      this.renderer.resize()
    }
  }
  destroy() {
    super.destroy()
    this.debug?.destroy()
    this.label3d && this.label3d.destroy()
    this.stats && this.stats.dom && document.body.removeChild(this.stats.dom)
  }
}

export default MapControl
