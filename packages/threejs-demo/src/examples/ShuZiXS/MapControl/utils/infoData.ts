import {ResourceManager, TimeManager} from '../MapApplication'
import * as THREE from 'three'
import HuiGuangImg from '../../assets/imgs/huiguang.png'
import LogoImg from '../../assets/imgs/logo.png'
import RotationBorder1Img from '../../assets/imgs/rotationBorder1.png'
import RotationBorder2Img from '../../assets/imgs/rotationBorder2.png'
import {
  ArrowWhiteImg,
  circleWhite,
  circleWhiteBreak,
  FlyLineImg,
  PointWhiteImg,
  sideImg,
} from './base64-img'
import ChinaBlurLineImg from '../../assets/imgs/chinaBlurLine.png'
import OceanBlueBgImg from '../../assets/imgs/ocean-blue-bg.png'
import pathLine2Img from '../../assets/imgs/pathLine2.png'
import {AssetList, FeatureCollection} from '../types'
import {normalizeGeoJSON} from './base'
import * as d3 from 'd3'
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import {LineGeometry} from 'three/examples/jsm/lines/LineGeometry.js'
import {Line2} from 'three/addons/lines/Line2.js'
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial.js'

class LoadAssets {
  onLoadCallback: () => void
  instance?: ResourceManager
  constructor(e = () => {}) {
    this.onLoadCallback = e
    this.init()
  }
  init() {
    this.instance = new ResourceManager()
    this.instance.addLoader(THREE.FileLoader, 'FileLoader')
    this.instance.on('onProgress', (r, t, n) => {
      // eslint-disable-next-line no-extra-semi
      ;((t / n) * 100).toFixed(2) + ''
    })
    this.instance.on('onLoad', () => {
      this.onLoadCallback && this.onLoadCallback()
    })

    // 确保公共资源路径正确
    const baseUrl = window.location.origin
    const path = `${baseUrl}/data/map/`

    const list: AssetList = [
      {type: 'Texture', name: 'huiguang', path: HuiGuangImg},
      {type: 'Texture', name: 'watermark', path: LogoImg},
      {type: 'Texture', name: 'rotationBorder1', path: RotationBorder1Img},
      {type: 'Texture', name: 'rotationBorder2', path: RotationBorder2Img},
      {type: 'Texture', name: 'guangquan1', path: circleWhiteBreak},
      {type: 'Texture', name: 'guangquan2', path: circleWhite},
      {type: 'Texture', name: 'chinaBlurLine', path: ChinaBlurLineImg},
      {type: 'Texture', name: 'ocean', path: OceanBlueBgImg},
      {type: 'Texture', name: 'side', path: sideImg},
      {type: 'Texture', name: 'flyLine', path: FlyLineImg},
      {type: 'Texture', name: 'flyLineFocus', path: circleWhiteBreak},
      {type: 'Texture', name: 'pathLine', path: pathLine2Img},
      {type: 'Texture', name: 'arrow', path: ArrowWhiteImg},
      {type: 'Texture', name: 'point', path: PointWhiteImg},
      {
        type: 'File',
        name: 'zhejiang',
        path: path + 'zhejiang-city.json',
      },
      {
        type: 'File',
        name: 'china',
        path: path + 'china-province.json',
      },
    ]
    this.instance.loadAll(list)
  }
}

/**
 * 带有挤压效果的地图渲染器
 * 将GeoJSON数据渲染为具有高度和材质的3D地图
 * 支持顶面和侧面使用不同材质
 */
class ExtrudedGeoMapRenderer {
  /** 地图组，包含所有地图元素 */
  mapGroup: THREE.Group<THREE.Object3DEventMap>
  /** 资源管理器 */
  assets: LoadAssets
  /** 时间管理器 */
  time: TimeManager
  /** 坐标数据数组，存储地图各区域的名称和中心点 */
  coordinates: {
    name: string
    center: number[]
    centroid: number[]
  }[]
  /** 配置项 */
  config: {
    position: THREE.Vector3
    center: THREE.Vector2
    data: string
    renderOrder: number
    topFaceMaterial: THREE.MeshBasicMaterial
    sideMaterial: THREE.MeshBasicMaterial
    depth: number
  }

  /**
   * 构造函数
   * @param {Object} params - 包含资源和时间管理器的参数对象
   * @param {ResourceManager} params.assets - 资源管理器
   * @param {TimeManager} params.time - 时间管理器
   * @param {Object} options - 配置选项
   */
  constructor(
    {assets, time}: {assets: LoadAssets; time: TimeManager},
    options = {},
  ) {
    this.mapGroup = new THREE.Group()
    this.assets = assets
    this.time = time
    this.coordinates = []

    // 默认配置与自定义配置合并
    this.config = Object.assign(
      {
        position: new THREE.Vector3(0, 0, 0),
        center: new THREE.Vector2(0, 0),
        data: '',
        renderOrder: 1,
        topFaceMaterial: new THREE.MeshBasicMaterial({
          color: 1582651,
          transparent: true,
          opacity: 1,
        }),
        sideMaterial: new THREE.MeshBasicMaterial({
          color: 464171,
          transparent: true,
          opacity: 1,
        }),
        depth: 0.1,
      },
      options,
    )

    // 设置地图组位置
    this.mapGroup.position.copy(this.config.position)

    // 标准化GeoJSON数据并创建地图
    const geoData = normalizeGeoJSON(this.config.data)
    this.create(geoData)
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

  /**
   * 创建地图
   * 根据GeoJSON数据生成Three.js中的几何体
   * @param {object} geoData - 标准化后的GeoJSON数据
   */
  create(geoData: FeatureCollection) {
    geoData.features.forEach(feature => {
      // 为每个特征创建一个对象
      const featureObject = new THREE.Object3D()

      // 提取特征属性
      const {name, center = [], centroid = []} = feature.properties
      this.coordinates.push({name, center, centroid})

      // 挤压几何体配置
      const extrudeSettings = {
        depth: this.config.depth,
        bevelEnabled: true,
        bevelSegments: 1,
        bevelThickness: 0.1,
      }

      // 材质数组（顶面和侧面）
      const materials = [this.config.topFaceMaterial, this.config.sideMaterial]

      // 处理特征的几何坐标
      feature.geometry.coordinates.forEach(polygon => {
        polygon.forEach(ring => {
          // 创建形状
          const shape = new THREE.Shape()

          // 遍历环上的点
          for (let i = 0; i < ring.length; i++) {
            if (!ring[i][0] || !ring[i][1]) return false

            // 投影坐标
            const [x, y] = this.geoProjection(ring[i] as [number, number])!

            // 第一个点移动到，其他点连线到
            i === 0 ? shape.moveTo(x, -y) : shape.lineTo(x, -y)
          }

          // 创建挤压几何体和网格
          const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
          const mesh = new THREE.Mesh(geometry, materials)

          // 添加到特征对象
          featureObject.add(mesh)
        })
      })

      // 添加特征对象到地图组
      this.mapGroup.add(featureObject)
    })
  }

  /**
   * 创建自定义材质
   * 创建带有渐变效果的Lambert材质
   * @returns {[THREE.MeshLambertMaterial, THREE.Mesh]} 材质和网格对象
   */
  createMaterial(): [THREE.MeshLambertMaterial, THREE.MeshStandardMaterial] {
    // 创建基础材质
    const material = new THREE.MeshLambertMaterial({
      color: 16777215,
      transparent: true,
      opacity: 1,
      fog: false,
      side: THREE.DoubleSide,
    })

    // 自定义编译着色器
    material.onBeforeCompile = shader => {
      // 添加自定义uniform变量
      shader.uniforms = {
        ...shader.uniforms,
        uColor1: {value: new THREE.Color(2781042)},
        uColor2: {value: new THREE.Color(860197)},
      }

      // 修改顶点着色器
      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `
        attribute float alpha;
        varying vec3 vPosition;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vPosition = position;
        `,
      )

      // 修改片段着色器 - 主函数
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
        `,
      )

      // 修改片段着色器 - 不透明部分
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
        #ifdef OPAQUE
        diffuseColor.a = 1.0;
        #endif

        // https://github.com/mrdoob/three.js/pull/22425
        #ifdef USE_TRANSMISSION
        diffuseColor.a *= transmissionAlpha + 0.1;
        #endif

        // 水平方向渐变
        vec3 gradient = mix(uColor1, uColor2, vPosition.x/15.78);

        outgoingLight = outgoingLight*gradient;

        // 顶部透明度控制
        float topAlpha = 0.5;
        if(vPosition.z>0.3){
          diffuseColor.a *= topAlpha;
        }

        gl_FragColor = vec4(outgoingLight, diffuseColor.a);
        `,
      )
    }

    // 获取并配置侧面纹理
    const sideTexture = this.assets.instance!.getResource('side')
    sideTexture.wrapS = THREE.RepeatWrapping
    sideTexture.wrapT = THREE.RepeatWrapping
    sideTexture.repeat.set(1, 1.5)
    sideTexture.offset.y += 0.065

    // 创建侧面网格
    const sideMeshStandard = new THREE.MeshStandardMaterial({
      color: 16777215,
      map: sideTexture,
      fog: false,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    // 添加纹理动画
    this.time.on('tick', () => {
      sideTexture.offset.y += 0.0001
    })

    // 自定义侧面网格着色器
    sideMeshStandard.onBeforeCompile = shader => {
      // 添加自定义uniform变量
      shader.uniforms = {
        ...shader.uniforms,
        uColor1: {value: new THREE.Color(2781042)},
        uColor2: {value: new THREE.Color(2781042)},
      }

      // 修改顶点着色器
      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `
        attribute float alpha;
        varying vec3 vPosition;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vPosition = position;
        `,
      )

      // 修改片段着色器 - 主函数
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
        `,
      )

      // 修改片段着色器 - 不透明部分
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
        #ifdef OPAQUE
        diffuseColor.a = 1.0;
        #endif

        // https://github.com/mrdoob/three.js/pull/22425
        #ifdef USE_TRANSMISSION
        diffuseColor.a *= transmissionAlpha + 0.1;
        #endif

        // 垂直方向渐变
        vec3 gradient = mix(uColor1, uColor2, vPosition.z/1.2);

        outgoingLight = outgoingLight*gradient;

        gl_FragColor = vec4(outgoingLight, diffuseColor.a);
        `,
      )
    }

    return [material, sideMeshStandard]
  }

  /**
   * 获取坐标数据
   * @returns {Array} 坐标数据数组
   */
  getCoordinates() {
    return this.coordinates
  }

  /**
   * 设置父级容器
   * @param {THREE.Group} parent - 父级Three.js组
   */
  setParent(parent: THREE.Group) {
    parent.add(this.mapGroup)
  }
}

/**
 * 地图渲染器类
 * 用于将GeoJSON数据渲染为Three.js中的3D地图
 * 支持地图的合并渲染和独立渲染两种模式
 */
class GeoMapRenderer {
  /** 地图组，包含所有地图元素 */
  mapGroup: THREE.Group
  /** 坐标数据数组，存储地图各区域的名称和中心点 */
  coordinates: {
    name: string
    center: number[]
    centroid: number[]
  }[]
  /** 配置项 */
  config: {
    position: THREE.Vector3
    center: THREE.Vector2
    data: string
    renderOrder: number
    merge: boolean // 是否合并渲染
    material: THREE.MeshBasicMaterial
  }
  /**
   * 构造函数
   * @param {Object} _ 未使用的参数
   * @param {Object} e 配置参数
   */
  constructor(e = {}) {
    this.mapGroup = new THREE.Group()
    this.coordinates = []
    this.config = Object.assign(
      {
        position: new THREE.Vector3(0, 0, 0),
        center: new THREE.Vector2(0, 0),
        data: '',
        renderOrder: 1,
        merge: false,
        material: new THREE.MeshBasicMaterial({
          color: 1582651,
          transparent: true,
          opacity: 1,
        }),
      },
      e,
    )
    this.mapGroup.position.copy(this.config.position)
    const a = normalizeGeoJSON(this.config.data)
    this.create(a)
  }
  /**
   * 地理坐标投影转换
   * 将地理坐标转换为平面坐标用于渲染
   * @param {number[]} e 地理坐标
   * @returns {[number, number]} 投影后的平面坐标
   */
  geoProjection(e: number[]) {
    return d3
      .geoMercator()
      .center(this.config.center as unknown as [number, number])
      .scale(120)
      .translate([0, 0])(e as [number, number])
  }
  /**
   * 创建地图
   * 根据GeoJSON数据生成Three.js中的几何体
   * @param {object} e 标准化后的GeoJSON数据
   */
  create(e: FeatureCollection) {
    const {merge} = this.config
    const r: THREE.BufferGeometry[] = []
    e.features.forEach(t => {
      const n = new THREE.Object3D()
      const {name, center, centroid} = t.properties
      this.coordinates.push({name, center, centroid})
      n.userData.name = name
      n.userData.center = center
      n.userData.centroid = centroid

      t.geometry.coordinates.forEach(d => {
        d.forEach(s => {
          const h = new THREE.Shape()
          for (let o = 0; o < s.length; o++) {
            if (!s[o][0] || !s[o][1]) return false
            const [p, l] = this.geoProjection(s[o])!
            o === 0 && h.moveTo(p, -l)
            h.lineTo(p, -l)
          }

          const c = new THREE.ShapeGeometry(h)
          c.name = 'mapShape'
          if (merge) {
            r.push(c)
          } else {
            const o = new THREE.Mesh(c, this.config.material)
            o.renderOrder = this.config.renderOrder
            o.userData.name = name
            o.userData.center = center
            o.userData.centroid = centroid
            n.add(o)
          }
        })
      })
      merge || this.mapGroup.add(n)
    })
    if (merge) {
      const t = mergeGeometries(r)
      const n = new THREE.Mesh(t, this.config.material)
      n.renderOrder = this.config.renderOrder
      this.mapGroup.add(n)
    }
  }
  /**
   * 获取坐标数据
   * @returns {Array} 坐标数据数组
   */
  getCoordinates() {
    return this.coordinates
  }
  /**
   * 设置父级容器
   * @param {THREE.Group} e 父级Three.js组
   */
  setParent(e: THREE.Group) {
    e.add(this.mapGroup)
  }
}

/**
 * 线条渲染器类
 * 用于将GeoJSON数据渲染为Three.js中的线条
 * 支持LineLoop和Line2两种线条类型
 */
class LineRenderer {
  /** 线条组，包含所有线条元素 */
  lineGroup: THREE.Group
  /** 配置项 */
  config: {
    visibelProvince: string
    center: [number, number]
    data: string
    material?: THREE.LineBasicMaterial
    type: string
    renderOrder: number
  }
  /**
   * 构造函数
   * @param {Object} options - 配置参数
   */
  constructor(options = {}) {
    this.config = Object.assign(
      {
        visibelProvince: '',
        center: [0, 0] as [number, number],
        data: '',
        material: new THREE.LineBasicMaterial({color: 16777215}),
        type: 'LineLoop',
        renderOrder: 1,
      },
      options,
    )
    const geoData = normalizeGeoJSON(this.config.data)
    const lineGroup = this.create(geoData)
    this.lineGroup = lineGroup
  }
  /**
   * 地理坐标投影转换
   * 将地理坐标转换为平面坐标用于渲染
   * @param {number[]} coords - 地理坐标
   * @returns {[number, number] | undefined} 投影后的平面坐标
   */
  geoProjection(coords: [number, number]): [number, number] {
    return d3
      .geoMercator()
      .center(this.config.center)
      .scale(120)
      .translate([0, 0])(coords) as [number, number]
  }
  /**
   * 创建线条
   * 根据GeoJSON数据生成Three.js中的线条
   * @param {GeoJSON} geoData - 标准化后的GeoJSON数据
   * @returns {THREE.Group} 包含所有线条的组
   */
  create(geoData: FeatureCollection) {
    const {type, visibelProvince} = this.config
    const features = geoData.features
    const linesGroup = new THREE.Group()

    for (let i = 0; i < features.length; i++) {
      const feature = features[i]
      // 排除指定的不可见省份
      if (feature.properties.name !== visibelProvince) {
        feature.geometry.coordinates.forEach(polygon => {
          const points: THREE.Vector3[] = []
          let line: THREE.LineLoop | Line2 | null = null

          if (type === 'Line2') {
            // 使用Line2渲染（需要平坦数组格式）
            const positions: number[] = []
            polygon[0].forEach(coordPair => {
              const projCoords = this.geoProjection(coordPair)
              if (projCoords) {
                const [x, y] = projCoords
                positions.push(x, -y, 0)
              }
            })
            if (positions.length > 0) {
              line = this.createLine2(positions)
            }
          } else {
            // 使用标准LineLoop渲染
            polygon[0].forEach(coordPair => {
              const projCoords = this.geoProjection(coordPair)
              if (projCoords) {
                const [x, y] = projCoords
                points.push(new THREE.Vector3(x, -y, 0))
              }
            })
            if (points.length > 0) {
              line = this.createLine(points)
            }
          }

          if (line) {
            linesGroup.add(line)
          }
        })
      }
    }
    return linesGroup
  }
  /**
   * 创建Line2类型的线条
   * 适用于需要更细致线宽控制的场景
   * @param {number[]} positions - 位置数组（平坦格式：[x1,y1,z1,x2,y2,z2,...]）
   * @returns {Line2} Line2类型的线条对象
   */
  createLine2(positions: number[]): Line2 {
    const {material, renderOrder} = this.config
    const geometry = new LineGeometry()
    geometry.setPositions(positions)
    const line = new Line2(geometry, material as unknown as LineMaterial)
    line.name = 'mapLine2'
    line.renderOrder = renderOrder
    line.computeLineDistances()
    return line
  }
  /**
   * 创建标准LineLoop类型的线条
   * @param {THREE.Vector3[]} points - 三维点数组
   * @returns {THREE.LineLoop} LineLoop类型的线条对象
   */
  createLine(points: THREE.Vector3[]): THREE.LineLoop {
    const {material, renderOrder} = this.config
    const geometry = new THREE.BufferGeometry()
    geometry.setFromPoints(points)
    const line = new THREE.LineLoop(geometry, material)
    line.renderOrder = renderOrder
    line.name = 'mapLine'
    return line
  }
  /**
   * 设置父级容器
   * @param {THREE.Group} parent - 父级Three.js组
   */
  setParent(parent: THREE.Group) {
    parent.add(this.lineGroup)
  }
}

const ChinaProvinceInfo = [
  {
    name: '北京市',
    center: [116.405285, 39.904989],
    centroid: [116.41995, 40.18994],
    hide: true,
  },
  {
    name: '天津市',
    center: [117.190182, 39.125596],
    centroid: [117.347043, 39.288036],
    hide: true,
  },
  {
    name: '河北省',
    center: [114.502461, 38.045474],
    centroid: [114.502461, 38.045474],
    hide: true,
  },
  {
    name: '山西省',
    center: [112.549248, 37.857014],
    centroid: [112.304436, 37.618179],
    hide: true,
  },
  {
    name: '内蒙古自治区',
    center: [111.670801, 40.818311],
    centroid: [114.077429, 44.331087],
    hide: true,
  },
  {
    name: '辽宁省',
    center: [123.429096, 41.796767],
    centroid: [122.604994, 41.299712],
    hide: true,
  },
  {
    name: '吉林省',
    center: [125.3245, 43.886841],
    centroid: [126.171208, 43.703954],
    hide: true,
  },
  {
    name: '黑龙江省',
    center: [126.642464, 45.756967],
    centroid: [127.693027, 48.040465],
    hide: true,
  },
  {
    name: '上海市',
    center: [121.472644, 31.231706],
    centroid: [121.438737, 31.072559],
    hide: true,
  },
  {
    name: '江苏省',
    center: [118.767413, 32.041544],
    centroid: [119.486506, 32.983991],
    hide: false,
  },
  {
    name: '浙江省',
    center: [120.153576, 30.287459],
    centroid: [120.109913, 29.181466],
    hide: true,
  },
  {
    name: '安徽省',
    center: [117.283042, 31.86119],
    centroid: [117.226884, 31.849254],
    hide: false,
  },
  {
    name: '福建省',
    center: [119.306239, 26.075302],
    centroid: [118.006468, 26.069925],
    hide: false,
  },
  {
    name: '江西省',
    center: [115.892151, 28.676493],
    centroid: [115.732975, 27.636112],
    hide: false,
  },
  {
    name: '山东省',
    center: [117.000923, 36.675807],
    centroid: [118.187759, 36.376092],
    blur: true,
  },
  {
    name: '河南省',
    center: [113.665412, 34.757975],
    centroid: [113.619717, 33.902648],
    blur: true,
  },
  {
    name: '湖北省',
    center: [114.298572, 30.584355],
    centroid: [112.271301, 30.987527],
    blur: true,
  },
  {
    name: '湖南省',
    center: [112.982279, 28.19409],
    centroid: [111.711649, 27.629216],
    blur: true,
  },
  {
    name: '广东省',
    center: [113.280637, 23.125178],
    centroid: [113.429919, 23.334643],
    blur: true,
  },
  {
    name: '广西壮族自治区',
    center: [108.320004, 22.82402],
    centroid: [108.7944, 23.833381],
    hide: true,
  },
  {
    name: '海南省',
    center: [110.33119, 20.031971],
    centroid: [109.754859, 19.189767],
    hide: true,
  },
  {
    name: '重庆市',
    center: [106.504962, 29.533155],
    centroid: [107.8839, 30.067297],
    blur: true,
  },
  {
    name: '四川省',
    center: [104.065735, 30.659462],
    centroid: [102.693453, 30.674545],
    hide: true,
  },
  {
    name: '贵州省',
    center: [106.713478, 26.578343],
    centroid: [106.880455, 26.826368],
    blur: true,
  },
  {
    name: '云南省',
    center: [102.712251, 25.040609],
    centroid: [101.485106, 25.008643],
    hide: true,
  },
  {
    name: '西藏自治区',
    center: [91.132212, 29.660361],
    centroid: [88.388277, 31.56375],
    hide: true,
  },
  {
    name: '陕西省',
    center: [108.948024, 34.263161],
    centroid: [108.887114, 35.263661],
    hide: true,
  },
  {
    name: '甘肃省',
    center: [103.823557, 36.058039],
    centroid: [103.823557, 36.058039],
    hide: true,
  },
  {
    name: '青海省',
    center: [101.778916, 36.623178],
    centroid: [96.043533, 35.726403],
    hide: true,
  },
  {
    name: '宁夏回族自治区',
    center: [106.278179, 38.46637],
    centroid: [106.169866, 37.291332],
    hide: true,
  },
  {
    name: '新疆维吾尔自治区',
    center: [87.617733, 43.792818],
    centroid: [85.294711, 41.371801],
    hide: true,
  },
  {
    name: '台湾省',
    center: [121.509062, 25.044332],
    centroid: [120.971485, 23.749452],
  },
  {
    name: '香港特别行政区',
    center: [114.173355, 22.320048],
    centroid: [114.134357, 22.377366],
    hide: true,
  },
  {
    name: '澳门特别行政区',
    center: [113.54909, 22.198951],
    centroid: [113.566988, 22.159307],
    hide: true,
  },
]
const ZheJiangCityInfo = [
  {
    name: '杭州市',
    enName: 'hangzhou',
    value: 98,
    center: [120.153576, 30.287459],
    centroid: [119.476498, 29.898918],
  },
  {
    name: '宁波市',
    enName: 'ningbo',
    value: 57,
    center: [121.549792, 29.868388],
    centroid: [121.479174, 29.733017],
  },
  {
    name: '温州市',
    enName: 'wenzhou',
    value: 80,
    center: [120.672111, 28.000575],
    centroid: [120.463912, 27.894726],
  },
  {
    name: '嘉兴市',
    enName: 'jiaxing',
    value: 42,
    center: [120.750865, 30.762653],
    centroid: [120.783487, 30.620063],
  },
  {
    name: '湖州市',
    enName: 'huzhou',
    value: 37,
    center: [120.102398, 30.867198],
    centroid: [119.873663, 30.743058],
  },
  {
    name: '绍兴市',
    enName: 'shaoxing',
    value: 24,
    center: [120.582112, 29.997117],
    centroid: [120.640933, 29.732893],
  },
  {
    name: '金华市',
    enName: 'jinghua',
    value: 43,
    center: [119.649506, 29.089524],
    centroid: [119.957007, 29.115117],
  },
  {
    name: '衢州市',
    enName: 'hengzhou',
    value: 46,
    center: [118.87263, 28.941708],
    centroid: [118.679569, 28.932446],
  },
  {
    name: '舟山市',
    enName: 'zhousan',
    value: 37,
    center: [122.106863, 30.016028],
    centroid: [122.146805, 30.056563],
  },
  {
    name: '台州市',
    enName: 'taizhou',
    value: 36,
    center: [121.428599, 28.661378],
    centroid: [121.136679, 28.757098],
  },
  {
    name: '丽水市',
    enName: 'lishui',
    value: 48,
    center: [119.921786, 28.451993],
    centroid: [119.517145, 28.197644],
  },
]
const locationPoints = [
  {value: 166, lng: 119.00838863314104, lat: 29.70446787438727},
  {value: 196, lng: 121.95888480416225, lat: 29.804570962222094},
  {value: 145, lng: 121.1763690119717, lat: 29.943827249850777},
  {value: 101, lng: 121.56920938135673, lat: 29.85263574108389},
  {value: 199, lng: 120.9772766279951, lat: 28.330342193214033},
  {value: 167, lng: 120.33101898043361, lat: 30.565600410098323},
  {value: 169, lng: 120.36095289685078, lat: 30.739761809104824},
  {value: 101, lng: 119.983185482632, lat: 31.03706617454779},
  {value: 121, lng: 121.20282810334723, lat: 29.45300711212515},
  {value: 132, lng: 120.04632515461387, lat: 29.535586166289217},
  {value: 132, lng: 119.88396764642604, lat: 29.24289373808931},
  {value: 119, lng: 118.20295164180662, lat: 28.97847155167772},
  {value: 138, lng: 119.30239039019484, lat: 28.963362607831762},
  {value: 183, lng: 122.11925213943688, lat: 30.09279983271788},
  {value: 103, lng: 122.0641872449813, lat: 30.624331727210976},
  {value: 110, lng: 121.24428726916929, lat: 28.29819603626963},
  {value: 171, lng: 120.83475957600818, lat: 29.104535097251688},
  {value: 174, lng: 119.70182146944745, lat: 28.267110085326326},
]
const monitoringPoints = [
  {
    name: '监测点#01',
    level: '差',
    value: 84.9,
    lng: 118.27595005,
    lat: 29.11596322,
  },
  {
    name: '监测点#02',
    level: '极好',
    value: 12.5,
    lng: 118.94093792,
    lat: 27.90619049,
  },
  {
    name: '监测点#03',
    level: '良好',
    value: 52.8,
    lng: 121.35456753,
    lat: 28.34783376,
  },
  {
    name: '监测点#04',
    level: '好',
    value: 32,
    lng: 122.10985921,
    lat: 30.05331943,
  },
]

export {
  LoadAssets,
  GeoMapRenderer,
  LineRenderer,
  ExtrudedGeoMapRenderer,
  ChinaProvinceInfo,
  ZheJiangCityInfo,
  locationPoints,
  monitoringPoints,
}
