import {MapControlOptions, PointLightOptions} from './types'
import MapApplication from './MapApplication'
import * as THREE from 'three'
import {InteractionManager} from 'three.interactive'
import {Label3D} from './components/label3d'
import LilGui from './utils/lilGui'
import Stats from 'three/addons/libs/stats.module.js'
import {
  ChinaProvinceInfo,
  GeoMapRenderer,
  LineRenderer,
  LoadAssets,
  ZheJiangCityInfo,
} from './utils/infoData'
import {Grid} from './utils/Grid'
import {GradientShader, PlaneMesh} from './utils/GradientShader'
import {SquareIcon} from './utils/base64-img'
import {
  createProvinceLabel,
  createSpecialProvinceLabel,
  createDecorationIcon,
} from './utils/createlabel'
import {gsap} from 'gsap'
import {getBoxSize} from './utils/base'

function SortByValue(_: any[]) {
  _.sort((t: any, a: any) => a.value - t.value)
  return _
}

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
  assets: LoadAssets
  rotateBorder1?: THREE.Mesh
  rotateBorder2?: THREE.Mesh
  otherLabel: any[] = []
  focusMapGroup: THREE.Group<THREE.Object3DEventMap>
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
    this.assets = new LoadAssets(() => {
      console.log('初始化成功')
      this.initEnvironment()
      this.createFloor()
      this.createChinaBlurLine()
      this.createGrid()
      this.createRotateBorder()
      this.createLabel()
      this.createModel()

      const timeLine = gsap.timeline()
      this.otherLabel.map((e, i) => {
        const r = e.element.querySelector('.other-label')
        timeLine.add(
          gsap.to(r, {
            duration: 1,
            delay: 0.1 * i,
            translateY: 0,
            opacity: 1,
            ease: 'circ.out',
          }),
          'focusMapOpacity',
        )
      })
    })
  }
  // 初始化 LilGui
  initSetting() {
    this.debug = new LilGui(false)
    if (this.renderer.instance) {
      this.renderer.instance.shadowMap.enabled = false
      this.renderer.resize()
    }
  }
  // 初始化环境光照
  initEnvironment() {
    // 创建环境光照
    const ambientLight = new THREE.AmbientLight(16777215, 5) // 白色环境光，强度5
    this.scene.add(ambientLight)

    // 创建平行光
    const directionalLight = new THREE.DirectionalLight(16777215, 5) // 白色平行光，强度5
    directionalLight.position.set(-30, 6, -8) // 设置光源位置
    directionalLight.castShadow = true // 启用阴影投射
    directionalLight.shadow.radius = 20 // 阴影半径
    directionalLight.shadow.mapSize.width = 1024 // 阴影贴图宽度
    directionalLight.shadow.mapSize.height = 1024 // 阴影贴图高度
    this.scene.add(directionalLight)

    // 调试模式下添加光源辅助器和GUI控制
    if (this.debug && this.debug.active && this.debug.instance) {
      const directionalLightHelper = new THREE.DirectionalLightHelper(
        directionalLight,
        2,
      )
      this.scene.add(directionalLightHelper)

      const environmentFolder = this.debug.instance.addFolder('Environment')
      environmentFolder.add(directionalLight.position, 'x', -30, 30, 1)
      environmentFolder.add(directionalLight.position, 'y', -30, 30, 1)
      environmentFolder.add(directionalLight.position, 'z', -30, 30, 1)
      environmentFolder.add(directionalLight, 'intensity', 1, 100, 1)
      environmentFolder.add(ambientLight, 'intensity', 1, 10, 1)
      environmentFolder.onChange(() => {
        directionalLightHelper.update()
      })
    }

    // 添加点光源
    this.createPointLight({
      color: '#1d5e5e', // 青色
      intensity: 600,
      distance: 10000,
      x: -9,
      y: 3,
      z: -3,
    })

    this.createPointLight({
      color: '#1d5e5e', // 青色
      intensity: 100,
      distance: 10000,
      x: 0,
      y: 2,
      z: 5,
    })
  }
  createPointLight(options: PointLightOptions) {
    // 创建点光源
    const pointLight = new THREE.PointLight(
      1924702,
      options.intensity,
      options.distance,
      1,
    )
    pointLight.position.set(options.x, options.y, options.z)
    this.scene.add(pointLight)

    // 调试模式下添加点光源辅助器和GUI控制
    if (this.debug && this.debug.active && this.debug.instance) {
      const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
      this.scene.add(pointLightHelper)

      const pointLightFolder = this.debug.instance.addFolder(
        'Point' + Math.random(),
      )
      pointLightFolder.addColor(options, 'color')
      pointLightFolder.add(options, 'intensity', 1, 20000, 10)
      pointLightFolder.add(options, 'distance', 100, 100000, 10)
      pointLightFolder.add(options, 'x', -30, 30, 1)
      pointLightFolder.add(options, 'y', -30, 30, 1)
      pointLightFolder.add(options, 'z', -30, 30, 1)

      pointLightFolder.onChange(event => {
        const updatedOptions = event.object as PointLightOptions
        pointLight.color = new THREE.Color(updatedOptions.color)
        pointLight.distance = updatedOptions.distance
        pointLight.intensity = updatedOptions.intensity
        pointLight.position.set(
          updatedOptions.x,
          updatedOptions.y,
          updatedOptions.z,
        )
        pointLightHelper.update()
      })
    }
  }
  // 创建地板
  createFloor() {
    if (this.assets.instance) {
      // 创建一个20x20的平面几何体作为地板
      const floorGeometry = new THREE.PlaneGeometry(20, 20)
      // 获取海洋纹理资源
      const oceanTexture = this.assets.instance.getResource('ocean')
      // 设置纹理属性
      oceanTexture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间
      oceanTexture.wrapS = THREE.RepeatWrapping // 水平方向重复纹理
      oceanTexture.wrapT = THREE.RepeatWrapping // 垂直方向重复纹理
      oceanTexture.repeat.set(1, 1) // 设置纹理重复次数
      // 创建基础材质并应用纹理
      const floorMaterial = new THREE.MeshBasicMaterial({
        map: oceanTexture,
        opacity: 1,
      })
      // 创建地板网格
      const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
      // 将地板旋转到水平位置（绕X轴旋转-90度）
      floorMesh.rotateX(-Math.PI / 2)
      // 设置地板位置稍微下沉
      floorMesh.position.set(0, -0.7, 0)
      // 将地板添加到场景
      this.scene.add(floorMesh)
    }
  }
  // 创建中国边缘线
  createChinaBlurLine() {
    // 创建一个147x147的平面几何体用于显示中国边缘线
    const blurLineGeometry = new THREE.PlaneGeometry(147, 147)

    // 获取中国边缘线纹理资源
    const blurLineTexture = this.assets.instance?.getResource('chinaBlurLine')

    if (blurLineTexture) {
      // 设置纹理属性
      blurLineTexture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间
      blurLineTexture.wrapS = THREE.RepeatWrapping // 水平方向重复纹理
      blurLineTexture.wrapT = THREE.RepeatWrapping // 垂直方向重复纹理
      blurLineTexture.generateMipmaps = false // 禁用mipmap生成以提高性能
      blurLineTexture.minFilter = THREE.NearestFilter // 设置最小化过滤器为最近点采样
      blurLineTexture.repeat.set(1, 1) // 设置纹理重复次数

      // 创建半透明材质并应用纹理作为透明度贴图
      const blurLineMaterial = new THREE.MeshBasicMaterial({
        color: 4162253, // 设置材质颜色（浅蓝色）
        alphaMap: blurLineTexture, // 使用纹理作为透明度贴图
        transparent: true, // 启用透明
        opacity: 0.5, // 设置透明度为50%
      })

      // 创建中国边缘线网格
      const blurLineMesh = new THREE.Mesh(blurLineGeometry, blurLineMaterial)

      // 将平面旋转到水平位置（绕X轴旋转-90度）
      blurLineMesh.rotateX(-Math.PI / 2)

      // 调整位置使其正确对齐
      blurLineMesh.position.set(-33.2, -0.5, -5.2)

      // 将中国边缘线添加到场景
      this.scene.add(blurLineMesh)

      // 如果处于调试模式，添加位置控制器
      if (this.debug && this.debug.active && this.debug.instance) {
        const blurLineFolder = this.debug.instance.addFolder('blurLine')

        // 添加X、Y、Z轴位置调整控制器
        blurLineFolder.add(blurLineMesh.position, 'x', -100, 100, 0.1)
        blurLineFolder.add(blurLineMesh.position, 'y', -100, 100, 0.1)
        blurLineFolder.add(blurLineMesh.position, 'z', -100, 100, 0.1)
      }
    }
  }
  // 创建网格
  createGrid() {
    const options = {
      gridSize: 50,
      gridDivision: 20,
      gridColor: 1788784,
      shapeSize: 0.5,
      shapeColor: 2776970,
      pointSize: 0.1,
      pointColor: 1396093,
      diffuse: !0,
      diffuseSpeed: 10,
    }
    new Grid(this, options)
  }
  // 创建2个旋转边框
  createRotateBorder() {
    // 旋转边框的尺寸大小
    const borderSize = 12

    // 获取两种不同的旋转边框纹理
    const outerBorderTexture =
      this.assets.instance?.getResource('rotationBorder1')
    const innerBorderTexture =
      this.assets.instance?.getResource('rotationBorder2')

    // 创建外层旋转边框
    const outerBorder = new PlaneMesh(this, {
      name: 'rotationBorder1-mesh',
      width: borderSize * 1.178, // 外层边框稍大
      needRotate: true,
      rotateSpeed: 0.001, // 外层旋转速度较慢
      material: new THREE.MeshBasicMaterial({
        map: outerBorderTexture,
        color: 4763647, // 蓝色调
        transparent: true,
        opacity: 0.2, // 外层透明度较低
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
      position: new THREE.Vector3(0, 0.28, 0),
    })
    outerBorder.instance.renderOrder = 6
    outerBorder.instance.scale.set(0, 0, 0)
    outerBorder.setParent(this.scene)

    // 创建内层旋转边框
    const innerBorder = new PlaneMesh(this, {
      name: 'rotationBorder2-mesh',
      width: borderSize * 1.116, // 内层边框稍小
      needRotate: true,
      rotateSpeed: -0.004, // 内层旋转速度较快，方向相反
      material: new THREE.MeshBasicMaterial({
        map: innerBorderTexture,
        color: 4763647, // 蓝色调
        transparent: true,
        opacity: 0.4, // 内层透明度较高
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
      position: new THREE.Vector3(0, 0.3, 0),
    })
    innerBorder.instance.renderOrder = 6
    innerBorder.instance.scale.set(0, 0, 0)
    innerBorder.setParent(this.scene)

    // 保存引用以便后续可能的动画或交互使用
    this.rotateBorder1 = outerBorder.instance
    this.rotateBorder2 = innerBorder.instance
  }
  // 创建标签
  createLabel() {
    const labels = []

    // 创建省份标签
    ChinaProvinceInfo.map(provinceInfo => {
      if (provinceInfo.hide == true) return false
      const provinceLabel = createProvinceLabel(
        provinceInfo,
        this.label3d,
        this.labelGroup,
        this.geoProjection.bind(this),
      )
      labels.push(provinceLabel)
    })

    // 创建特殊省份标签(浙江省)
    const zhejiangLabel = createSpecialProvinceLabel(
      {
        name: '浙江省',
        enName: 'ZHEJIANG PROVINCE',
        center: [120.109913, 26.881466],
      },
      this.label3d,
      this.labelGroup,
      this.geoProjection.bind(this),
    )

    // 创建大尺寸装饰图标
    const largeDecorationIcon = createDecorationIcon(
      {
        icon: SquareIcon,
        center: [125.109913, 26.881466],
        width: '40px',
        height: '40px',
        reflect: true,
      },
      this.label3d,
      this.labelGroup,
      this.geoProjection.bind(this),
    )

    // 创建小尺寸装饰图标
    const smallDecorationIcon = createDecorationIcon(
      {
        icon: SquareIcon,
        center: [116.109913, 26.881466],
        width: '20px',
        height: '20px',
        reflect: false,
      },
      this.label3d,
      this.labelGroup,
      this.geoProjection.bind(this),
    )

    labels.push(zhejiangLabel)
    labels.push(largeDecorationIcon)
    labels.push(smallDecorationIcon)
    this.otherLabel = labels
  }
  createModel() {
    const t = new THREE.Group()
    this.focusMapGroup = new THREE.Group()
    const {china: a, chinaTopLine: s} = this.createChina()
    // const {zhejiang: i, zhejiangTop: r, guangdonLine: c} = this.createProvince()
    a.setParent(t)
    s.setParent(t)
    // i.setParent(this.focusMapGroup)
    // r.setParent(this.focusMapGroup)
    // c.setParent(this.focusMapGroup)
    this.focusMapGroup.position.set(0, 0, -0.01)
    this.focusMapGroup.scale.set(1, 1, 0)
    t.add(this.focusMapGroup)
    t.rotation.x = -Math.PI / 2
    t.position.set(0, 0.2, 0)
    this.scene.add(t)
    // this.createBar()
  }
  createChina() {
    if (!this.assets.instance) return false
    const t = this.assets.instance.getResource('china'),
      a = new GeoMapRenderer({
        data: t,
        center: this.pointCenter,
        merge: !1,
        material: new THREE.MeshLambertMaterial({
          color: 1387591,
          transparent: !0,
          opacity: 1,
        }),
        renderOrder: 2,
      }),
      s = new LineRenderer({
        center: this.pointCenter,
        visibelProvince: '广东省',
        data: t,
        material: new THREE.LineBasicMaterial({color: 4162253}),
        renderOrder: 3,
      })
    s.lineGroup.position.z += 0.01
    const e = new LineRenderer({
      center: this.pointCenter,
      data: t,
      material: new THREE.LineBasicMaterial({
        color: 4162253,
        transparent: !0,
        opacity: 0.4,
      }),
      renderOrder: 3,
    })
    e.lineGroup.position.z -= 0.59
    return {china: a, chinaTopLine: s, chinaBottomLine: e}
  }
  createProvince() {
    if (!this.assets.instance) return false
    const t = this.assets.instance.getResource('zhejiang')
    const [a, s] = this.createProvinceMaterial()
    this.focusMapTopMaterial = a
    this.focusMapSideMaterial = s
    const e = new GeoMapRenderer({
        center: this.pointCenter,
        position: new THREE.Vector3(0, 0, 0.11),
        data: t,
        depth: 0.5,
        topFaceMaterial: a,
        sideMaterial: s,
        renderOrder: 9,
      }),
      i = new THREE.MeshStandardMaterial({
        color: 16777215,
        transparent: !0,
        opacity: 0.5,
      })
    new GradientShader(i, {uColor1: 2780818, uColor2: 1058614})
    this.defaultMaterial = i
    this.defaultLightMaterial = this.defaultMaterial.clone()
    this.defaultLightMaterial.emissive.setHex(725293)
    this.defaultLightMaterial.emissiveIntensity = 3.5
    const r = new GeoMapRenderer({
      center: this.pointCenter,
      position: new THREE.Vector3(0, 0, 0.72),
      data: t,
      material: i,
      renderOrder: 2,
    })
    r.mapGroup.children.map(o => {
      o.children.map(l => {
        l.type === 'Mesh' && this.eventElement.push(l)
      })
    })
    this.zhejiangLineMaterial = new THREE.LineBasicMaterial({
      color: 16777215,
      opacity: 0,
      transparent: !0,
      fog: !1,
    })
    const c = new LineRenderer({
      center: this.pointCenter,
      data: t,
      material: this.zhejiangLineMaterial,
      renderOrder: 3,
    })
    c.lineGroup.position.z += 0.73
    return {zhejiang: e, zhejiangTop: r, guangdonLine: c}
  }
  createProvinceMaterial() {
    const t = new THREE.MeshLambertMaterial({
      color: 16777215,
      transparent: true,
      opacity: 0,
      fog: false,
      side: THREE.DoubleSide,
    })
    t.onBeforeCompile = e => {
      e.uniforms = {
        ...e.uniforms,
        uColor1: {value: new THREE.Color(2780818)},
        uColor2: {value: new THREE.Color(1058614)},
      }
      e.vertexShader = e.vertexShader.replace(
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
      e.fragmentShader = e.fragmentShader.replace(
        'void main() {',
        `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `,
      )
      e.fragmentShader = e.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
      #ifdef OPAQUE
      diffuseColor.a = 1.0;
      #endif

      // https://github.com/mrdoob/three.js/pull/22425
      #ifdef USE_TRANSMISSION
      diffuseColor.a *= transmissionAlpha + 0.1;
      #endif
      vec3 gradient = mix(uColor1, uColor2, vPosition.x/15.78); // 15.78

      outgoingLight = outgoingLight*gradient;
      float topAlpha = 0.5;
      if(vPosition.z>0.3){
        diffuseColor.a *= topAlpha;
      }

      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
      `,
      )
    }
    const a = this.assets.instance.getResource('side')
    a.wrapS = THREE.RepeatWrapping
    a.wrapT = THREE.RepeatWrapping
    a.repeat.set(1, 1.5)
    a.offset.y += 0.065
    const s = new THREE.MeshStandardMaterial({
      color: 16777215,
      map: a,
      fog: false,
      opacity: 0,
      side: THREE.DoubleSide,
    })

    this.time.on('tick', () => {
      a.offset.y += 0.005
    })

    s.onBeforeCompile = e => {
      ;(e.uniforms = {
        ...e.uniforms,
        uColor1: {value: new THREE.Color(2780818)},
        uColor2: {value: new THREE.Color(2780818)},
      }),
        (e.vertexShader = e.vertexShader.replace(
          'void main() {',
          `
      attribute float alpha;
      varying vec3 vPosition;
      varying float vAlpha;
      void main() {
        vAlpha = alpha;
        vPosition = position;
    `,
        )),
        (e.fragmentShader = e.fragmentShader.replace(
          'void main() {',
          `
      varying vec3 vPosition;
      varying float vAlpha;
      uniform vec3 uColor1;
      uniform vec3 uColor2;

      void main() {
    `,
        )),
        (e.fragmentShader = e.fragmentShader.replace(
          '#include <opaque_fragment>',
          `
    #ifdef OPAQUE
    diffuseColor.a = 1.0;
    #endif

    // https://github.com/mrdoob/three.js/pull/22425
    #ifdef USE_TRANSMISSION
    diffuseColor.a *= transmissionAlpha + 0.1;
    #endif
    vec3 gradient = mix(uColor1, uColor2, vPosition.z/1.2);

    outgoingLight = outgoingLight*gradient;


    gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
    `,
        ))
    }

    return [t, s]
  }
  createBar() {
    const t = this
    const a = SortByValue(ZheJiangCityInfo).filter((o, l) => l < 7)
    const s = new THREE.Group()
    const e = 0.7
    const i = 4 * e
    const r = a[0].value
    this.allBar = []
    this.allBarMaterial = []
    this.allGuangquan = []
    this.allProvinceLabel = []
    a.map((o, l) => {
      const p = i * (o.value / r),
        n = new THREE.MeshBasicMaterial({
          color: 16777215,
          transparent: true,
          opacity: 0,
          depthTest: false,
          fog: false,
        })
      new GradientShader(n, {
        uColor1: l > 3 ? 16506760 : 5291006,
        uColor2: l > 3 ? 16776948 : 7863285,
        size: p,
        dir: 'y',
      })
      const h = new THREE.BoxGeometry(0.1 * e, 0.1 * e, p)
      h.translate(0, 0, p / 2)
      const f = new THREE.Mesh(h, n)
      f.renderOrder = 5
      const d = f
      const [v, m] = this.geoProjection(o.centroid)!
      d.position.set(v, -m, 0.95)
      d.scale.set(1, 1, 0)
      const g = this.createQuan(new THREE.Vector3(v, 0.94, m), l)
      const x = this.createHUIGUANG(p, l > 3 ? 16776948 : 7863285)
      d.add(...x)
      s.add(d)
      s.rotation.x = -Math.PI / 2
      const C = c(o, l, new THREE.Vector3(v, -m, 1.6 + p))
      this.allBar.push(d)
      this.allBarMaterial.push(n)
      this.allGuangquan.push(g)
      this.allProvinceLabel.push(C)
    })
    this.scene.add(s)
    function c(o, l, p) {
      const n = t.label3d.create('', 'provinces-label', !0)
      n.init(
        `<div class="provinces-label ${l > 4 ? 'yellow' : ''}">
          <div class="provinces-label-wrap">
            <div class="number"><span class="value">${
              o.value
            }</span><span class="unit">万人</span></div>
            <div class="name">
              <span class="zh">${o.name}</span>
              <span class="en">${o.enName.toUpperCase()}</span>
            </div>
            <div class="no">${l + 1}</div>
          </div>
        </div>`,
        p,
      )
      t.label3d.setLabelStyle(n, 0.01, 'x')
      n.setParent(t.labelGroup)
      return n
    }
  }
  createQuan(t, a) {
    if (!this.assets.instance) return false
    const s = this.assets.instance.getResource('guangquan1')
    const e = this.assets.instance.getResource('guangquan2')
    const i = new THREE.PlaneGeometry(0.5, 0.5),
      r = new THREE.MeshBasicMaterial({
        color: 16777215,
        map: s,
        alphaMap: s,
        opacity: 1,
        transparent: true,
        depthTest: false,
        fog: false,
        blending: THREE.AdditiveBlending,
      }),
      c = new THREE.MeshBasicMaterial({
        color: 16777215,
        map: e,
        alphaMap: e,
        opacity: 1,
        transparent: true,
        depthTest: false,
        fog: false,
        blending: THREE.AdditiveBlending,
      }),
      o = new THREE.Mesh(i, r)
    l = new THREE.Mesh(i, c)
    o.renderOrder = 6
    l.renderOrder = 6
    o.rotateX(-Math.PI / 2)
    l.rotateX(-Math.PI / 2)
    o.position.copy(t)
    l.position.copy(t)
    l.position.y -= 0.001
    o.scale.set(0, 0, 0)
    l.scale.set(0, 0, 0)
    this.quanGroup = new THREE.Group()
    this.quanGroup.add(o, l)
    this.scene.add(this.quanGroup)
    this.time.on('tick', () => {
      o.rotation.z += 0.05
    })
    return this.quanGroup
  }
  createHUIGUANG(t, a) {
    if (!this.assets.instance) return false
    const s = new THREE.PlaneGeometry(0.35, t)
    s.translate(0, t / 2, 0)
    const e = this.assets.instance.getResource('huiguang')
    e.colorSpace = THREE.SRGBColorSpace
    e.wrapS = THREE.RepeatWrapping
    e.wrapT = THREE.RepeatWrapping
    const i = new THREE.MeshBasicMaterial({
        color: a,
        map: e,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      }),
      r = new THREE.Mesh(s, i)
    r.renderOrder = 10
    r.rotateX(Math.PI / 2)
    const c = r.clone()
    const o = r.clone()
    c.rotateY((Math.PI / 180) * 60)
    o.rotateY((Math.PI / 180) * 120)
    return [r, c, o]
  }
  destroy() {
    super.destroy()
    this.debug?.destroy()
    this.label3d && this.label3d.destroy()
    this.stats && this.stats.dom && document.body.removeChild(this.stats.dom)
  }
}

export default MapControl
