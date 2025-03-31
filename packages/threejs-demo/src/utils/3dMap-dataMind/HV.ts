import {cloneDeep} from 'lodash-es'
import * as THREE from 'three'
import {ThreeMap} from '.'
import {projectCoords} from './projectCoords'
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial.js'
import {LineGeometry} from 'three/examples/jsm/lines/LineGeometry.js'
import {Feature, SubDistrictInfo} from './types'
/**
 * 渲染城市/区县等子区域数据
 * @param {Object} map - 地图实例
 * @param {string} renderMode - 渲染模式，默认为"all"，可选值为"all"或"stroke"
 */
async function renderSubDistricts(map: ThreeMap, renderMode = 'all') {
  // 检查子区域数据是否存在
  if (!map.data) return

  // 初始化子区域信息数组
  map.subDistrictInfoArr = []

  //  创建子区域边界线材质
  const strokeMaterial = (function (map) {
    const {subDistrictStyle} = map
    if (subDistrictStyle.stroke && subDistrictStyle.stroke.width) {
      // 创建线材质(LineMaterial)
      const material = new LineMaterial({
        color: new THREE.Color(subDistrictStyle.stroke.color).getHex(),
        transparent: true,
        opacity: subDistrictStyle.stroke.opacity,
        linewidth: subDistrictStyle.stroke.width,
      })

      // 设置分辨率
      material.resolution.set(
        map.containerDom.clientWidth,
        map.containerDom.clientHeight,
      )

      return material
    }
    return null
  })(map)

  // 创建区域填充材质(MeshBasicMaterial)
  const fillMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    color: new THREE.Color('#00FFFF'),
    opacity: 0,
  })

  // 处理每个子区域数据
  map.subDistrictData.features.forEach(district => {
    const districtName = district.properties.name
    const districtAlias = districtName

    const center = district.properties.centroid || district.properties.center
    if (center) {
      // 获取中心点坐标（经纬度转换为平面坐标）
      const centroid = projectCoords([center[0], center[1]])

      // 构建区域信息对象
      const districtInfo = {
        adcode: district.properties.adcode,
        name: districtName,
        alias: districtAlias,
        lng: center[0],
        lat: center[1],
        centroid: centroid,
      }

      // 处理每个子区域的多边形坐标数据
      district.geometry.coordinates.forEach((coordinates, polygonIndex) => {
        if (districtAlias) {
          renderDistrictPolygon(
            coordinates,
            polygonIndex,
            district,
            districtInfo,
          )
        }
      })

      // 将唯一的区域信息添加到数组中
      if (
        districtAlias &&
        !map.subDistrictInfoArr.find(item => item.adcode == districtInfo.adcode)
      ) {
        map.subDistrictInfoArr.push(districtInfo)
      }
    }
  })

  /**
   * 渲染区域多边形
   * @param {Array} coordinates - 多边形坐标点数组
   * @param {number} polygonIndex - 多边形索引
   * @param {Object} district - 区域数据
   * @param {Object} districtInfo - 区域信息
   */
  function renderDistrictPolygon(
    coordinates: number[][],
    polygonIndex: number,
    district: Feature,
    districtInfo: SubDistrictInfo,
  ) {
    if (coordinates.length > 2) {
      let lineGeometry
      const linePositions = []

      // 创建形状(Shape)
      const shape = new THREE.Shape()

      // 构建多边形路径
      for (let i = 0; i < coordinates.length; i++) {
        const [x, y] = coordinates[i]
        if (i === 0) {
          shape.moveTo(x, y)
        }
        shape.lineTo(x, y)
        linePositions.push(x, y, 0)
      }

      // 渲染边界线
      if (strokeMaterial) {
        lineGeometry = new LineGeometry()
        lineGeometry.setPositions(linePositions)
        // 更新分辨率
        strokeMaterial.resolution.set(
          map.containerDom.clientWidth,
          map.containerDom.clientHeight,
        )

        // 创建线条(Line2)并添加到边界线组
        const line = new THREE.Line(lineGeometry, strokeMaterial)
        // line.setRenderIndex(lU.BASE_MAP_LAYER_PROVINCE_STROKE)
        line.renderOrder = 6
        map.subDistrictStrokeGroup.add(line)
      }

      // 渲染区域填充
      if (renderMode !== 'stroke') {
        // 创建形状几何体(ShapeGeometry)
        const shapeGeometry = new THREE.ShapeGeometry(shape)
        const material = fillMaterial.clone()

        // 创建网格(Mesh)并添加到填充组
        const mesh = new THREE.Mesh(shapeGeometry, material)
        // mesh.setRenderIndex(lU.BASE_MAP_LAYER_PROVINCE_MESH)
        mesh.renderOrder = 4
        mesh.name = `sub-district-${districtInfo.alias}-${polygonIndex}`
        mesh.ext = cloneDeep(district.properties, districtInfo)
        map.subDistrictFillGroup.add(mesh)
      }
    }
  }
}

// 将函数暴露到全局作用域
// window.HV = renderSubDistricts
export {renderSubDistricts}
