import * as THREE from 'three'
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import {TimeManager} from '../MapApplication'

/**
 * 网格选项接口
 */
interface GridOptions {
  position: THREE.Vector3 // 网格位置
  gridSize: number // 网格大小
  gridDivision: number // 网格分区数
  gridColor: number // 网格颜色
  shapeSize: number // 形状大小
  shapeColor: number // 形状颜色
  pointSize: number // 点大小
  pointColor: number // 点颜色
  pointLayout: {
    // 点阵排布
    row: number // 行数
    col: number // 列数
  }
  pointBlending: THREE.Blending // 点混合模式
  diffuse: boolean // 是否启用扩散效果
  diffuseSpeed: number // 扩散速度
  diffuseColor: number // 扩散颜色
  diffuseWidth: number // 扩散宽度
  diffuseDir?: number // 扩散方向
}

/**
 * 扩散效果控制器类
 */
class DiffuseController {
  time: TimeManager
  options: {
    material: THREE.PointsMaterial
    size: number
    diffuseColor: number
    diffuseSpeed: number
    diffuseWidth: number
    diffuseDir?: number
  }

  /**
   * 构造函数
   */
  constructor({
    material,
    time,
    size,
    diffuseColor,
    diffuseSpeed,
    diffuseWidth,
    diffuseDir,
  }: {
    material: THREE.PointsMaterial
    time: TimeManager
    size: number
    diffuseColor: number
    diffuseSpeed: number
    diffuseWidth: number
    diffuseDir?: number
  }) {
    this.time = time
    // 默认配置
    const defaultOptions = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseWidth: 10,
      diffuseDir: undefined,
    }
    // 合并用户配置与默认配置
    this.options = Object.assign({}, defaultOptions, {
      material,
      size,
      diffuseColor,
      diffuseSpeed,
      diffuseWidth,
      diffuseDir,
    })
    this.init()
  }

  /**
   * 初始化扩散效果
   */
  init() {
    let shaderProgram: THREE.WebGLProgramParametersWithUniforms | null = null
    const {
      material,
      size,
      diffuseColor,
      diffuseSpeed,
      diffuseWidth,
      diffuseDir,
    } = this.options
    const resetTime = size / diffuseSpeed

    // 设置材质的着色器
    material.onBeforeCompile = shader => {
      shaderProgram = shader
      // 添加自定义 uniform 变量
      shader.uniforms = {
        ...shader.uniforms,
        uTime: {value: 0},
        uSpeed: {value: diffuseSpeed},
        uWidth: {value: diffuseWidth},
        uColor: {value: new THREE.Color(diffuseColor)},
        uDir: {value: diffuseDir},
      }

      // 修改顶点着色器，添加变量传递
      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `
            varying vec3 vPosition;
            void main(){
              vPosition = position;
          `,
      )

      // 修改片元着色器，添加变量声明
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `
            uniform float uTime;
            uniform float uSpeed;
            uniform float uWidth;
            uniform vec3 uColor;
            uniform float uDir;
            varying vec3 vPosition;

            void main(){
          `,
      )

      // 实现扩散效果的着色器代码
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <opaque_fragment>',
        `
            #ifdef OPAQUE
            diffuseColor.a = 1.0;
            #endif

            #ifdef USE_TRANSMISSION
            diffuseColor.a *= material.transmissionAlpha;
            #endif

            // 光环半径
            float radius = uTime * uSpeed;
            // 光环宽度
            float width = 0.0;
            if(width > uWidth){
              width = uWidth;
            }else{
              width = uTime * 5.0;
            }
            // 几何中心点
            vec2 center = vec2(0.0, 0.0);
            // 距离圆心的距离
            float distanceFromCenter = distance(vPosition.xz, center);

            // 根据方向决定使用的坐标
            if(uDir==2.0){
              distanceFromCenter = distance(vPosition.xy, center);
            }

            // 光环扩散效果实现
            if(distanceFromCenter > radius && distanceFromCenter < radius + 2.0 * width) {
              float percentage = 0.0;
              if(distanceFromCenter < radius + width) {
                percentage = (distanceFromCenter - radius) / width;
                outgoingLight = mix(outgoingLight, uColor, percentage);
              } else {
                percentage = (distanceFromCenter - radius - width) / width;
                outgoingLight = mix(uColor, outgoingLight, percentage);
              }
              gl_FragColor = vec4(outgoingLight, diffuseColor.a);
            } else {
              // discard;
            gl_FragColor = vec4(outgoingLight, diffuseColor.a);
            }
          `,
      )
    }

    // 添加时间更新
    this.time.on('tick', deltaTime => {
      if (shaderProgram) {
        shaderProgram.uniforms.uTime.value += deltaTime
        // 当时间超过一定值时重置，形成循环动画
        if (shaderProgram.uniforms.uTime.value > resetTime) {
          shaderProgram.uniforms.uTime.value = 0
        }
      }
    })
  }
}

/**
 * 网格类
 */
class Grid {
  scene: THREE.Scene
  time: TimeManager
  instance?: THREE.Group
  options: GridOptions

  /**
   * 构造函数
   */
  constructor(
    {scene, time}: {scene: THREE.Scene; time: TimeManager},
    customOptions: Partial<GridOptions>,
  ) {
    this.scene = scene
    this.time = time
    // 默认配置
    const defaultOptions = {
      position: new THREE.Vector3(0, 0, 0),
      gridSize: 100,
      gridDivision: 20,
      gridColor: 2635578,
      shapeSize: 1,
      shapeColor: 9345950,
      pointSize: 0.2,
      pointColor: 2635578,
      pointLayout: {row: 200, col: 200},
      pointBlending: THREE.NormalBlending,
      diffuse: false,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseWidth: 10,
    }
    // 合并用户配置与默认配置
    this.options = Object.assign({}, defaultOptions, customOptions)
    this.init()
  }

  /**
   * 初始化网格
   */
  init() {
    const gridGroup = new THREE.Group()
    gridGroup.name = 'Grid'

    // 创建网格、形状和点
    const gridHelper = this.createGridHelp()
    const shapes = this.createShapes()
    const points = this.createPoint()

    // 添加到组中
    gridGroup.add(gridHelper, shapes, points)
    gridGroup.position.copy(this.options.position)

    this.instance = gridGroup
    this.scene.add(gridGroup)
  }

  /**
   * 创建形状
   */
  createShapes() {
    const {gridSize, gridDivision, shapeSize, shapeColor} = this.options

    const cellSize = gridSize / gridDivision
    const halfGridSize = gridSize / 2
    const shapeMaterial = new THREE.MeshBasicMaterial({
      color: shapeColor,
      side: THREE.DoubleSide,
    })

    // 创建几何体数组
    const geometries = []

    // 生成网格上的加号
    for (let row = 0; row < gridDivision + 1; row++) {
      for (let col = 0; col < gridDivision + 1; col++) {
        const plusGeometry = this.createPlus(shapeSize)
        plusGeometry.translate(
          -halfGridSize + row * cellSize,
          -halfGridSize + col * cellSize,
          0,
        )
        geometries.push(plusGeometry)
      }
    }

    // 合并几何体
    const mergedGeometry = mergeGeometries(geometries)
    const shapeMesh = new THREE.Mesh(mergedGeometry, shapeMaterial)

    // 设置渲染顺序和旋转位置
    shapeMesh.renderOrder = -1
    shapeMesh.rotateX(-Math.PI / 2)
    shapeMesh.position.y += 0.01

    return shapeMesh
  }

  /**
   * 创建网格辅助线
   */
  createGridHelp() {
    const {gridSize, gridDivision, gridColor} = this.options
    return new THREE.GridHelper(gridSize, gridDivision, gridColor, gridColor)
  }

  /**
   * 创建点阵
   */
  createPoint() {
    const {
      gridSize,
      pointSize,
      pointColor,
      pointBlending,
      pointLayout,
      diffuse,
    } = this.options

    const rows = pointLayout.row
    const cols = pointLayout.col
    const vertices = new Float32Array(rows * cols * 3)

    // 生成点阵
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (row / (rows - 1)) * gridSize - gridSize / 2
        const y = 0
        const z = (col / (cols - 1)) * gridSize - gridSize / 2

        const index = (row * cols + col) * 3
        vertices[index] = x
        vertices[index + 1] = y
        vertices[index + 2] = z
      }
    }

    // 创建几何体和材质
    const pointGeometry = new THREE.BufferGeometry()
    pointGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(vertices, 3),
    )

    const pointMaterial = new THREE.PointsMaterial({
      size: pointSize,
      sizeAttenuation: true,
      color: pointColor,
      blending: pointBlending,
    })

    const pointCloud = new THREE.Points(pointGeometry, pointMaterial)

    // 如果启用扩散效果，则应用扩散着色器
    if (diffuse) {
      this.diffuseShader(pointMaterial)
    }

    return pointCloud
  }

  /**
   * 设置点模式（预留）
   */
  setPointMode() {}

  /**
   * 应用扩散着色器效果
   */
  diffuseShader(material: THREE.PointsMaterial) {
    const {gridSize, diffuseColor, diffuseSpeed, diffuseWidth, diffuseDir} =
      this.options

    new DiffuseController({
      material,
      time: this.time,
      size: gridSize,
      diffuseColor,
      diffuseSpeed,
      diffuseWidth,
      diffuseDir,
    })
    return false
  }

  /**
   * 创建加号形状
   */
  createPlus(size = 50) {
    const lineWidth = size / 6 / 3
    const armLength = size / 3

    // 加号形状的顶点
    const vertices = [
      new THREE.Vector2(-armLength, -lineWidth),
      new THREE.Vector2(-lineWidth, -lineWidth),
      new THREE.Vector2(-lineWidth, -armLength),
      new THREE.Vector2(lineWidth, -armLength),
      new THREE.Vector2(lineWidth, -armLength),
      new THREE.Vector2(lineWidth, -lineWidth),
      new THREE.Vector2(armLength, -lineWidth),
      new THREE.Vector2(armLength, lineWidth),
      new THREE.Vector2(lineWidth, lineWidth),
      new THREE.Vector2(lineWidth, armLength),
      new THREE.Vector2(-lineWidth, armLength),
      new THREE.Vector2(-lineWidth, lineWidth),
      new THREE.Vector2(-armLength, lineWidth),
    ]

    // 创建形状和几何体
    const shape = new THREE.Shape(vertices)
    return new THREE.ShapeGeometry(shape, 24)
  }
}

export {Grid}
