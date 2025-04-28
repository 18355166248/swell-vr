import * as THREE from 'three'
import * as d3 from 'd3'

type ExtrudedGeoMapRendererConfig = {
  position: THREE.Vector3
  center: THREE.Vector2
  data: string
  renderOrder: number
  topFaceMaterial: THREE.MeshBasicMaterial
  sideMaterial: THREE.MeshBasicMaterial
  depth: number
}
/**
 * 带有挤压效果的地图渲染器
 * 将GeoJSON数据渲染为具有高度和材质的3D地图
 * 支持顶面和侧面使用不同材质
 */
export class ExtrudedGeoMapRenderer {
  mapGroup: THREE.Group<THREE.Object3DEventMap>
  config: ExtrudedGeoMapRendererConfig
  constructor(config: ExtrudedGeoMapRendererConfig) {
    this.mapGroup = new THREE.Group()
    this.config = config
  }
  /**
   * 地理坐标投影转换
   * 将地理坐标转换为平面坐标用于渲染
   * @param {[number, number]} coords - 地理坐标
   * @returns {[number, number] | undefined} 投影后的平面坐标
   */
  geoProjection(coords: [number, number]) {
    return d3
      .geoMercator()
      .center(this.config.center as unknown as [number, number])
      .scale(120)
      .translate([0, 0])(coords) as [number, number]
  }
  setParent(parent: THREE.Group) {
    parent.add(this.mapGroup)
  }
}

export default ExtrudedGeoMapRenderer
