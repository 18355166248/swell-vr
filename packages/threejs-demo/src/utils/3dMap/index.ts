/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import {processGeoData} from './processGeoData'
import {districtStyle} from './districtStyle'
import {processGradientColor} from './color'
import {KV} from './KV'

class ThreeMap {
  public bgGeoData: any
  private extrudeTopMaterial: THREE.MeshStandardMaterial
  private extrudeInnerShadowMaterial: THREE.MeshStandardMaterial
  extrudeSideMaterial: any
  extrudeBackgroundSideMaterial: THREE.ShaderMaterial
  rawDistrictData: any
  districtData: any
  constructor({data}: {data: any}) {
    this.bgGeoData = processGeoData({
      type: 'geojson',
      data,
    })
    this.rawDistrictData = this.bgGeoData.district.__geojson__.features
    this.districtData =
      this.bgGeoData.district.__geojson_process_proj__.features
    console.log('🚀 ~ ThreeMap ~ constructor ~ this.bgGeoData:', this.bgGeoData)

    this.initMap()
  }
  async initMap() {
    const color = new THREE.Color('#080c11')

    // 调整地图比例
    this.scaleAdaptation(false)

    this.extrudeTopMaterial = new THREE.MeshStandardMaterial({
      color,
      transparent: true,
      depthTest: true,
      depthWrite: true,
    })
    this.extrudeInnerShadowMaterial = new THREE.MeshStandardMaterial({
      transparent: true,
      depthTest: true,
      depthWrite: true,
    })
    // 获取侧面颜色配置
    const {colorConfig} = districtStyle.sideConfig
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
          // @ts-ignore
          type: 'int',
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
          // @ts-ignore
          type: 'vec3',
          value: {
            color: sideBottomColor,
            opacity: sideBottomOpacity,
          },
        },
        topColor: {
          // @ts-ignore
          type: 'vec3',
          value: {
            color: sideTopColor,
            opacity: sideTopOpacity,
          },
        },
      },
      transparent: true,
      vertexShader:
        'varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <uv2_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n  #include <uv2_vertex>\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}',
      fragmentShader:
        '#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n  vec3 color;\n  float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}',
    })

    // 创建背景侧面渐变材质 ShaderMaterial
    this.extrudeBackgroundSideMaterial = new THREE.ShaderMaterial({
      uniforms: {
        type: {
          // @ts-ignore
          type: 'int',
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
          // @ts-ignore
          type: 'vec3',
          value: {
            color: sideBottomColor,
            opacity: sideBottomOpacity,
          },
        },
        topColor: {
          // @ts-ignore
          type: 'vec3',
          value: {
            color: sideTopColor,
            opacity: sideTopOpacity,
          },
        },
      },
      transparent: false,
      vertexShader:
        'varying vec2 vUv;\n\n#include <common>  \n#include <uv_pars_vertex>  \n#include <uv2_pars_vertex>  \n#include <logdepthbuf_pars_vertex>  \n#include <clipping_planes_pars_vertex>   \n\nvoid main() {\n\n  #include <uv_vertex>    \n  #include <uv2_vertex>\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n  #include <begin_vertex>    \n  \n  #include <skinning_vertex>    \n  #include <displacementmap_vertex>    \n  #include <project_vertex>    \n  #include <logdepthbuf_vertex>    \n  #include <clipping_planes_vertex>      \n  \n  #include <worldpos_vertex>    \n  \n  \n}',
      fragmentShader:
        '#ifdef GL_ES\nprecision highp float;\n#endif\n\nstruct colorObj {\n    vec3 color;\n    float opacity;\n};\n\nuniform colorObj topColor;\nuniform colorObj bottomColor;\nuniform int type;\n\nvarying vec2 vUv;\n\n#include <common>  \n#include <packing>\n#include <uv_pars_fragment>\n\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n    #include <clipping_planes_fragment>\n\n    gl_FragColor = vec4(mix(topColor.color, bottomColor.color, vUv.y), mix(topColor.opacity, bottomColor.opacity, vUv.y));\n\n    #include <premultiplied_alpha_fragment>  \n    #include <dithering_fragment>\n}',
      depthTest: true,
      depthWrite: true,
    })
    // 初始化拉伸效果
    await this.initExtrude()
  }
  async initExtrude() {}
  scaleAdaptation() {
    const p = KV({
      geojson: {
        type: 'FeatureCollection',
        features: this.rawDistrictData,
      },
      geojsonProj: {
        type: 'FeatureCollection',
        features: this.districtData,
      },
      project,
      worldBboxSize: c,
      heightScale,
      pitch,
      rotation,
      offset,
      viewClip: h,
    })
    this.gis.globalOpts = p
  }
}

export {ThreeMap}
