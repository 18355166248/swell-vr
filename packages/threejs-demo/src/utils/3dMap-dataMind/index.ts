/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {processGeoData} from './processGeoData'
import {districtStyle} from './districtStyle'
import {processGradientColor} from './color'
import {KV} from './KV'
import {projectCoords} from './projectCoords'
import {Vf} from './constant'
import {bV} from './bv'
import RV from './RV'
import {createDistrictInnerShadow} from './createDistrictInnerShadow'
import {updateMaterialProperties} from './updateMaterialProperties'
import eV from './eV'
import {subDistrictStyle} from './subDistrictStyle'
import {renderSubDistricts} from './HV'
import {CityData, ProvinceData, SubDistrictInfo} from './types'

class ThreeMap {
  public bgGeoData: any
  extrudeTopMaterial?: THREE.MeshStandardMaterial
  extrudeInnerShadowMaterial?: THREE.MeshStandardMaterial
  extrudeSideMaterial?: any
  extrudeBackgroundSideMaterial?: THREE.ShaderMaterial
  rawDistrictData: any
  districtData: any
  viewportSystem: {
    sceneSystem: THREE.Scene
    renderSystem: THREE.WebGLRenderer
    cameraSystem: THREE.Camera
    controlsSystem: OrbitControls
  }

  gis: {
    globalOpts: any
  } = {
    globalOpts: {},
  }
  districtFillGroup = new THREE.Group()
  subDistrictStrokeGroup = new THREE.Group()
  subDistrictFillGroup = new THREE.Group()
  poiGroup = new eV()
  districtStyle: {
    enabled: boolean
    heightScale: number
    fill: {
      color: string
      map: string
      normalScale: number
      metalness: number
      roughness: number
      opacity: number
    }
    innerShadow: {
      enabled: boolean
      shadowColor: string
      shadowBlurScale: number
    }
    boundaryStreamer: {
      enabled: boolean
      lineLength: number
      lineWidth: number
      lineHeadColor: string
      lineColor: string
      lineHeadRatio: number
      speed: number
    }
    sideConfig: {map: null; colorConfig: {type: string; range: string[]}}
    stroke: {color: string; opacity: number; width: number}
    bottomStroke: {color: string; opacity: number; width: number}
  }
  // 子区域信息数组
  subDistrictInfoArr: SubDistrictInfo[] = []
  subDistrictStyle: {stroke: {color: string; opacity: number; width: number}}
  containerDom: HTMLDivElement
  data: CityData
  subDistrictData: ProvinceData
  constructor({
    data,
    subDistrictData,
    sceneSystem,
    renderSystem,
    cameraSystem,
    controlsSystem,
    containerDom,
  }: {
    data: any
    subDistrictData: any
    sceneSystem: THREE.Scene
    renderSystem: THREE.WebGLRenderer
    cameraSystem: THREE.Camera
    controlsSystem: OrbitControls
    containerDom: HTMLDivElement
  }) {
    this.data = data
    this.subDistrictData = subDistrictData
    this.districtStyle = districtStyle
    this.subDistrictStyle = subDistrictStyle
    this.containerDom = containerDom
    this.bgGeoData = processGeoData({
      type: 'geojson',
      data,
    })
    this.rawDistrictData = this.bgGeoData.__geojson__.features
    this.districtData = this.bgGeoData.__geojson_process_proj__.features

    this.viewportSystem = {
      sceneSystem,
      renderSystem,
      cameraSystem,
      controlsSystem,
    }

    this.viewportSystem.sceneSystem.add(this.districtFillGroup)
    this.viewportSystem.sceneSystem.add(this.subDistrictStrokeGroup)
    this.viewportSystem.sceneSystem.add(this.subDistrictFillGroup)

    this.initLayerGroup()

    this.initMap()

    renderSubDistricts(this)

    // 创建内阴影
    createDistrictInnerShadow(this)

    // 更新材质属性
    updateMaterialProperties(this, 'extrude')

    // 初始化文本
    this.initPoi()

    // this.districtFillGroup.updateWorldMatrix(true, true)
    // const box = new THREE.Box3().setFromObject(this.districtFillGroup)
    // const size = new THREE.Vector3()
    // box.getSize(size)
    // const planeGeo = new THREE.PlaneGeometry(size.x, size.y)
    // const planeMat = new THREE.MeshBasicMaterial({color: 0xffff00})
    // const backgroundPlane = new THREE.Mesh(planeGeo, planeMat)
    // this.districtFillGroup.add(backgroundPlane)
    // console.log(`宽度：${size.x}, 高度：${size.y}, 深度：${size.z}`)
  }
  initLayerGroup() {
    this.viewportSystem.sceneSystem.add(this.poiGroup)
    console.log(
      '🚀 ~ ThreeMap ~ initLayerGroup ~ this.poiGroup:',
      this.poiGroup,
    )
  }
  async initMap() {
    const color = new THREE.Color('#00FFFF')

    // 调整地图比例
    this.scaleAdaptation()

    this.viewportSystem.cameraSystem.position.set(
      this.gis.globalOpts.cameraStatus.position[0],
      this.gis.globalOpts.cameraStatus.position[1],
      this.gis.globalOpts.cameraStatus.position[2],
    )
    this.viewportSystem.cameraSystem.up.set(
      this.gis.globalOpts.cameraStatus.up[0],
      this.gis.globalOpts.cameraStatus.up[1],
      this.gis.globalOpts.cameraStatus.up[2],
    )
    this.viewportSystem.controlsSystem.target.set(
      this.gis.globalOpts.cameraStatus.target[0],
      this.gis.globalOpts.cameraStatus.target[1],
      this.gis.globalOpts.cameraStatus.target[2],
    )

    // 创建顶部材质
    this.extrudeTopMaterial = new THREE.MeshStandardMaterial({
      color,
      transparent: true,
      depthTest: true,
      // 禁用深度写入：对透明或半透明材质设置depthWrite: false，避免深度缓冲干扰
      depthWrite: false,
    })
    this.extrudeInnerShadowMaterial = new THREE.MeshStandardMaterial({
      transparent: true,
      depthTest: true,
      depthWrite: true,
    })
    // 获取侧面颜色配置
    const {colorConfig} = this.districtStyle.sideConfig
    const {
      bottomColor: sideBottomColor,
      topColor: sideTopColor,
      bottomOpacity: sideBottomOpacity,
      topOpacity: sideTopOpacity,
    } = processGradientColor(colorConfig)!
    // 创建侧面渐变材质

    this.extrudeSideMaterial = new THREE.ShaderMaterial({
      uniforms: {
        type: {
          // type: 'int',
          value: (colorType => {
            switch (colorType) {
              case 'linear':
                return 1
              case 'ordinal':
                return 2
              default:
                return 1
            }
          })(colorConfig.type),
        },
        bottomColor: {
          // type: 'vec3',
          value: {
            color: sideBottomColor,
            opacity: sideBottomOpacity,
          },
        },
        topColor: {
          // type: 'vec3',
          value: {
            color: sideTopColor,
            opacity: sideTopOpacity,
          },
        },
      },
      transparent: true,
      vertexShader:
        'varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}',
      fragmentShader:
        '#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n  vec3 color;\n  float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}',
    })

    // 初始化拉伸效果
    this.initExtrude()
  }
  initExtrude() {
    // 处理区域拉伸效果
    const {bboxOption, boundaryProj} = this.gis.globalOpts
    const processedData = bV(boundaryProj, bboxOption.bboxProj)

    // 初始化索引和位置计数器
    let indexOffset = 0,
      positionOffset = 0,
      indexCount = 0,
      positionCount = 0

    // 获取基础高度
    const baseHeight = bboxOption.baseHeight ? bboxOption.baseHeight : 1

    // 遍历几何数据组
    for (
      let groupIndex = 0;
      groupIndex < processedData.group.length;
      groupIndex += 3
    ) {
      // 更新偏移量
      indexOffset += indexCount
      positionOffset += positionCount
      indexCount = processedData.group[groupIndex + 1]
      positionCount = processedData.group[groupIndex + 2]

      // 根据几何类型创建不同的网格
      switch (processedData.group[groupIndex]) {
        case 0: // 顶部面
          // 创建顶部几何体 BufferGeometry
          // eslint-disable-next-line no-case-declarations
          const topGeometry = RV({
            index: processedData.index.slice(
              indexOffset,
              1 * (indexOffset + indexCount),
            ),
            position: processedData.position.slice(
              3 * positionOffset,
              3 * (positionOffset + positionCount),
            ),
            normal: processedData.normal.slice(
              3 * positionOffset,
              3 * (positionOffset + positionCount),
            ),
            uv: processedData.uv.slice(
              2 * positionOffset,
              2 * (positionOffset + positionCount),
            ),
          })

          // 创建顶部网格
          // eslint-disable-next-line no-case-declarations
          const topMesh = new THREE.Mesh(topGeometry, this.extrudeTopMaterial!)

          topMesh.renderOrder = 3
          topMesh.scale.z = baseHeight
          topMesh.position.z = 0
          topMesh.userData.faceType = 'top'
          topMesh.name = 'map-top'
          topMesh.frustumCulled = false
          this.districtFillGroup.add(topMesh)

          // 创建内阴影网格 Mesh
          // eslint-disable-next-line no-case-declarations
          const innerShadowMesh = new THREE.Mesh(
            topGeometry,
            this.extrudeInnerShadowMaterial!,
          )

          innerShadowMesh.renderOrder = 10
          innerShadowMesh.scale.z = 1.01 * baseHeight
          innerShadowMesh.position.z = 0
          innerShadowMesh.userData.faceType = 'map-innerShadow'
          innerShadowMesh.name = 'map-innerShadow'
          innerShadowMesh.frustumCulled = false
          this.districtFillGroup.add(innerShadowMesh)
          break

        case 1: // 侧面
          // 创建侧面几何体
          const sideGeometry = RV({
            index: processedData.index.slice(
              indexOffset,
              1 * (indexOffset + indexCount),
            ),
            position: processedData.position.slice(
              3 * positionOffset,
              3 * (positionOffset + positionCount),
            ),
            normal: processedData.normal.slice(
              3 * positionOffset,
              3 * (positionOffset + positionCount),
            ),
            uv: processedData.uv.slice(
              2 * positionOffset,
              2 * (positionOffset + positionCount),
            ),
          })

          // 创建侧面网格
          const sideMesh = new THREE.Mesh(
            sideGeometry,
            this.extrudeSideMaterial!,
          )

          sideMesh.renderOrder = 3
          sideMesh.scale.z = baseHeight
          sideMesh.position.z = 0
          sideMesh.name = 'map-side'
          sideMesh.userData.faceType = 'side'
          sideMesh.userData.invertedRelection = true
          sideMesh.castShadow = true
          sideMesh.frustumCulled = false
          this.districtFillGroup.add(sideMesh)
      }
      console.log(
        '🚀 ~ ThreeMap ~ initExtrude ~ this.districtFillGroup:',
        this.districtFillGroup,
      )
    }
  }
  scaleAdaptation() {
    const {heightScale} = this.districtStyle
    const p = KV({
      geojson: {
        type: 'FeatureCollection',
        features: this.rawDistrictData,
      },
      geojsonProj: {
        type: 'FeatureCollection',
        features: this.districtData,
      },
      project: projectCoords,
      worldBboxSize: Vf,
      heightScale,
      pitch: 40,
      rotation: 0,
      offset: [0, 0, 0],
      // offset: [0.027833236052840063, -0.0586515564517673, 0.9499718963036327],
    })
    this.gis.globalOpts = p
  }
  async initPoi() {
    for (let u = 0; u < this.subDistrictInfoArr.length; u++) {
      const t = this.subDistrictInfoArr[u]
      const {centroid, alias} = t
      if (!centroid) continue
      // Vector3
      const h = new THREE.Vector3(0, 0, 0)
      await this.poiGroup.addText(
        h,
        'vertical',
        'middle',
        '',
        {
          // content: `${major.format ? major.format(alias) : alias}`,
          content: alias,
          props: {
            color: 'rgba(214,242,255,0.6)',
            enabled: true,
            fontFamily: 'SourceHanSansCN-Normal',
            fontSize: 12,
            fontWeight: 'normal',
          },
        },
        null,
        0,
        0,
        {
          position: [centroid[0], centroid[1], 0],
          offsetX: 0,
          offsetY: 0,
        },
      )
    }
  }
}

export {ThreeMap}
