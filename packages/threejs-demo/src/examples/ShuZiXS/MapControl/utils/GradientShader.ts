import * as THREE from 'three'
import {TimeManager} from '../MapApplication'

/**
 * 平面网格对象类
 * 用于创建可旋转的平面网格，通常用作地图或效果的基础元素
 */
class PlaneMesh {
  /** 时间管理器实例 */
  time: TimeManager
  /** 平面网格配置选项 */
  options: {
    /** 平面宽度 */
    width: number
    /** 缩放比例 */
    scale: number
    /** 位置坐标 */
    position: THREE.Vector3
    /** 是否需要旋转 */
    needRotate: boolean
    /** 旋转速度 */
    rotateSpeed: number
    /** 材质 */
    material: THREE.MeshBasicMaterial
  }
  /** Three.js网格实例 */
  instance: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
  /**
   * 构造函数
   * @param {Object} param - 包含时间管理器的对象
   * @param {TimeManager} param.time - 时间管理器实例
   * @param {Object} e - 平面网格配置选项
   */
  constructor(
    {time}: {time: TimeManager},
    e: {
      name: string
      width: number
      position: THREE.Vector3
      needRotate: boolean
      rotateSpeed: number
      material: THREE.MeshBasicMaterial
    },
  ) {
    this.time = time
    // 合并默认配置和传入配置
    this.options = Object.assign(
      {},
      {
        width: 10,
        scale: 1,
        position: new THREE.Vector3(0, 0, 0),
        needRotate: !1,
        rotateSpeed: 0.001,
        material: new THREE.MeshBasicMaterial({
          transparent: !0,
          opacity: 1,
          depthTest: !0,
        }),
      },
      e,
    )
    // 创建平面几何体
    const a = new THREE.PlaneGeometry(this.options.width, this.options.width)
    // 创建网格对象
    const t = new THREE.Mesh(a, this.options.material)
    t.name = e.name
    // 绕X轴旋转90度（平放）
    t.rotateX(-Math.PI / 2)
    // 设置位置
    t.position.copy(this.options.position)
    // 设置缩放
    t.scale.set(this.options.scale, this.options.scale, this.options.scale)
    this.instance = t
  }

  /**
   * 设置父对象并开始监听更新事件
   * @param {THREE.Object3D} o - 父对象
   */
  setParent(o: THREE.Object3D) {
    // 添加到父对象中
    o.add(this.instance)
    // 监听时间管理器的tick事件
    this.time.on('tick', () => {
      this.update()
    })
  }

  /**
   * 更新方法，处理旋转等动画效果
   */
  update() {
    // 如果需要旋转，则更新旋转角度
    this.options.needRotate &&
      (this.instance.rotation.z += this.options.rotateSpeed)
  }
}

/**
 * 渐变着色器类
 * 用于创建材质上的渐变效果
 */
class GradientShader {
  /** 着色器对象 */
  shader: THREE.WebGLProgramParametersWithUniforms | null
  /** 渐变配置 */
  config: {
    /** 渐变起始颜色 (十进制RGB) */
    uColor1: number
    /** 渐变结束颜色 (十进制RGB) */
    uColor2: number
    /** 渐变尺寸 */
    size: number
    /** 渐变方向 ('x', 'y', 或 'z') */
    dir: 'x' | 'y' | 'z'
  }

  /**
   * 构造函数
   * @param {THREE.Material} o - 需要应用渐变的材质
   * @param {Object} e - 渐变配置项
   */
  constructor(o: THREE.Material, e?: Partial<GradientShader['config']>) {
    this.shader = null
    // 合并默认配置和传入配置
    this.config = Object.assign(
      {uColor1: 2781042, uColor2: 860197, size: 15, dir: 'x' as const},
      e || {},
    )
    this.init(o)
  }

  /**
   * 初始化着色器
   * @param {THREE.Material} o - 需要应用渐变的材质
   */
  init(o: THREE.Material) {
    const {uColor1: e, uColor2: a, dir: t, size: s} = this.config
    // 方向映射表: x=1, y=2, z=3
    const l: Record<'x' | 'y' | 'z', number> = {x: 1, y: 2, z: 3}
    // 在材质编译前修改着色器代码
    o.onBeforeCompile = i => {
      // 添加自定义uniform变量
      i.uniforms = {
        ...i.uniforms,
        uColor1: {value: new THREE.Color(e)},
        uColor2: {value: new THREE.Color(a)},
        uDir: {value: l[t]},
        uSize: {value: s},
      }

      this.shader = i
      // 修改顶点着色器
      i.vertexShader = i.vertexShader.replace(
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
      // 修改片元着色器 - 添加变量声明
      i.fragmentShader = i.fragmentShader.replace(
        'void main() {',
        `
                varying vec3 vPosition;
                varying float vAlpha;
                uniform vec3 uColor1;
                uniform vec3 uColor2;
                uniform float uDir;
                uniform float uSize;

                void main() {
              `,
      )
      // 修改片元着色器 - 实现渐变效果
      i.fragmentShader = i.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
              #ifdef OPAQUE
              diffuseColor.a = 1.0;
              #endif

              // https://github.com/mrdoob/three.js/pull/22425
              #ifdef USE_TRANSMISSION
              diffuseColor.a *= transmissionAlpha + 0.1;
              #endif
              // 初始化渐变向量
              vec3 gradient = vec3(0.0,0.0,0.0);
              // 根据方向应用不同轴向的渐变
              if(uDir==1.0){
                // X轴渐变
                gradient = mix(uColor1, uColor2, vPosition.x/ uSize);
              }else if(uDir==2.0){
                // Z轴渐变
                gradient = mix(uColor1, uColor2, vPosition.z/ uSize);
              }else if(uDir==3.0){
                // Y轴渐变
                gradient = mix(uColor1, uColor2, vPosition.y/ uSize);
              }
              // 应用渐变颜色
              outgoingLight = outgoingLight * gradient;

              // 输出最终颜色
              gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
              `,
      )
    }
  }
}
export {GradientShader, PlaneMesh}
