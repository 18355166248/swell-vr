import * as THREE from 'three'
import {normalizeGeoJSON} from './base'
import {FeatureCollection} from '../types'
import * as d3 from 'd3'

interface GeoMapRendererOptions {
  data: string
  center: THREE.Vector2
  position: THREE.Vector3
  material: THREE.Material
  renderOrder: number
}

/**
 * 地理地图渲染器
 * 负责将地理数据渲染为Three.js中的3D地图
 * 支持地图的合并渲染和独立渲染两种模式
 */
class GeoMapRenderer {
  mapGroup: THREE.Group
  config: GeoMapRendererOptions
  coordinates: {
    name: string
    center: number[]
    centroid: number[]
  }[] = []
  constructor(config: Partial<GeoMapRendererOptions>) {
    this.mapGroup = new THREE.Group()
    this.config = {
      ...{
        data: '',
        center: new THREE.Vector2(0, 0),
        position: new THREE.Vector3(0, 0, 0),
        material: new THREE.MeshBasicMaterial({
          color: 0x18263b, // 深蓝色
          transparent: true,
          opacity: 1,
        }),
        renderOrder: 0,
      },
      ...config,
    }
    this.mapGroup.position.copy(this.config.position)
    const geoData = normalizeGeoJSON(this.config.data)
    this.create(geoData)
  }
  /**
   * 创建地图
   * 根据GeoJSON数据生成Three.js中的几何体
   * @param {object} geoData 标准化后的GeoJSON数据
   */
  create(geoData: FeatureCollection) {
    const geometries: THREE.BufferGeometry[] = []
    geoData.features.forEach(feature => {
      const obj = new THREE.Object3D()
      const {name, center, centroid} = feature.properties
      obj.userData.name = name
      obj.userData.center = center
      obj.userData.centroid = centroid
      this.coordinates.push({name, center, centroid})
      feature.geometry.coordinates.forEach(coordinate => {
        coordinate.forEach(d => {
          const shape = new THREE.Shape()
          d.forEach((s, i) => {
            if (!s[0] || !s[1]) return false
            const [p, l] = this.geoProjection(s)!
            i === 0 && shape.moveTo(p, l)
            shape.lineTo(p, l)
          })
          const geometry = new THREE.ShapeGeometry(shape)
          geometry.name = 'mapShape'
          geometries.push(geometry)
        })
      })

      this.mapGroup.add(obj)
    })
  }
  /**
   * 地理坐标投影转换
   * 将地理坐标转换为平面坐标用于渲染
   * @param {number[]} e 地理坐标
   * @returns {[number, number]} 投影后的平面坐标
   */
  geoProjection(e: [number, number]) {
    return d3
      .geoMercator()
      .center(this.config.center as unknown as [number, number])
      .scale(120)
      .translate([0, 0])(e as [number, number])
  }
  setParent(parent: THREE.Group) {
    parent.add(this.mapGroup)
  }
}

export default GeoMapRenderer
