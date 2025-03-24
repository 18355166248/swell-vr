import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {CityData} from './types/data.type'
import {MapToolsProps} from './types/map-tools.type'

export class MapTools {
  scene: THREE.Scene
  renderer: THREE.Renderer
  camera: THREE.Camera
  controls: OrbitControls
  containerDom: HTMLElement
  data: CityData
  geometryData?: {
    index: number[]
    position: number[]
    normal: number[]
    uv: number[]
  }
  constructor(p: MapToolsProps) {
    this.scene = p.scene
    this.renderer = p.renderer
    this.camera = p.camera
    this.controls = p.controls
    this.containerDom = p.containerDom
    this.data = p.data
    this.init()
  }

  init() {
    const geometryData = this.generateGeometryData()
    this.geometryData = geometryData

    this.createSurface()
  }

  /**
   * 从GeoJSON数据生成用于BufferGeometry的数据
   * @returns 包含index、position、normal和uv数据的对象
   */
  generateGeometryData() {
    const geometryData = {
      index: [] as number[],
      position: [] as number[],
      normal: [] as number[],
      uv: [] as number[],
    }

    // 遍历所有feature
    this.data.features.forEach(feature => {
      // 只处理几何类型
      if (feature.geometry) {
        this.processGeometry(feature.geometry, geometryData)
      }
    })

    return geometryData
  }

  /**
   * 处理几何体数据
   * @param geometry 几何体数据
   * @param geometryData 几何体缓冲数据对象
   */
  private processGeometry(
    geometry: {type: string; coordinates: number[][][] | number[][][][]},
    geometryData: {
      index: number[]
      position: number[]
      normal: number[]
      uv: number[]
    },
  ) {
    let multiPolygonCoords: number[][][][]

    switch (geometry.type) {
      case 'Polygon':
        this.processPolygon(geometry.coordinates as number[][][], geometryData)
        break
      case 'MultiPolygon':
        // 处理多个多边形
        multiPolygonCoords = geometry.coordinates as number[][][][]
        multiPolygonCoords.forEach(polygonCoords => {
          this.processPolygon(polygonCoords, geometryData)
        })
        break
    }
  }

  /**
   * 处理多边形坐标
   * @param polygonCoords 多边形坐标数组
   * @param geometryData 几何体缓冲数据对象
   */
  private processPolygon(
    polygonCoords: number[][][],
    geometryData: {
      index: number[]
      position: number[]
      normal: number[]
      uv: number[]
    },
  ) {
    // 外环坐标
    const outerRing = polygonCoords[0]

    // 创建Shape对象用于三角剖分
    const shape = new THREE.Shape()

    // 移动到第一个点
    if (outerRing.length > 0) {
      shape.moveTo(outerRing[0][0], outerRing[0][1])

      // 添加其余的点
      for (let i = 1; i < outerRing.length; i++) {
        shape.lineTo(outerRing[i][0], outerRing[i][1])
      }
    }

    // 处理内环（孔洞）
    if (polygonCoords.length > 1) {
      for (let h = 1; h < polygonCoords.length; h++) {
        const holeCoords = polygonCoords[h]
        const holePath = new THREE.Path()

        if (holeCoords.length > 0) {
          holePath.moveTo(holeCoords[0][0], holeCoords[0][1])

          for (let i = 1; i < holeCoords.length; i++) {
            holePath.lineTo(holeCoords[i][0], holeCoords[i][1])
          }
        }

        shape.holes.push(holePath)
      }
    }

    // 使用THREE.js的三角剖分来生成顶点和索引
    const shapeGeometry = new THREE.ShapeGeometry(shape)
    const positionAttr = shapeGeometry.getAttribute('position')
    const normalAttr = shapeGeometry.getAttribute('normal')
    const uvAttr = shapeGeometry.getAttribute('uv')
    const index = shapeGeometry.getIndex()

    if (index) {
      // 存储顶点索引偏移
      const indexOffset = geometryData.position.length / 3

      // 添加索引数据
      for (let i = 0; i < index.count; i++) {
        geometryData.index.push(index.getX(i) + indexOffset)
      }

      // 添加位置数据
      for (let i = 0; i < positionAttr.count; i++) {
        const x = positionAttr.getX(i)
        const y = positionAttr.getY(i)
        const z = positionAttr.getZ(i) || 0 // z值通常为0，因为GeoJSON是2D的

        geometryData.position.push(x, y, z)
      }

      // 添加法线数据
      for (let i = 0; i < normalAttr.count; i++) {
        const nx = normalAttr.getX(i)
        const ny = normalAttr.getY(i)
        const nz = normalAttr.getZ(i)

        geometryData.normal.push(nx, ny, nz)
      }

      // 添加UV数据
      for (let i = 0; i < uvAttr.count; i++) {
        const u = uvAttr.getX(i)
        const v = uvAttr.getY(i)

        geometryData.uv.push(u, v)
      }
    }
  }

  private createSurface() {
    // 创建BufferGeometry
    const geometry = this.createBufferGeometry()
    // 创建材质
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    // 创建网格
    const mesh = new THREE.Mesh(geometry, material)
    // 添加到场景
    this.scene.add(mesh)
  }
  /**
   * 创建BufferGeometry
   * @returns THREE.BufferGeometry对象
   */
  createBufferGeometry(): THREE.BufferGeometry {
    const geometryData = this.geometryData

    const geometry = new THREE.BufferGeometry()
    if (!geometryData) return geometry
    console.log(
      '🚀 ~ MapTools ~ createBufferGeometry ~ geometryData:',
      geometryData,
    )
    // 设置索引
    geometry.setIndex(
      new THREE.BufferAttribute(new Uint32Array(geometryData.index), 1),
    )

    // 设置顶点位置
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(geometryData.position), 3),
    )

    // 设置法线
    geometry.setAttribute(
      'normal',
      new THREE.BufferAttribute(new Float32Array(geometryData.normal), 3),
    )

    // 设置UV坐标
    geometry.setAttribute(
      'uv',
      new THREE.BufferAttribute(new Float32Array(geometryData.uv), 2),
    )

    // 计算边界球和边界盒
    geometry.computeBoundingSphere()
    geometry.computeBoundingBox()

    return geometry
  }
}
