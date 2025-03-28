import {FeatureCollection, Feature} from 'geojson'
import * as turf from '@turf/turf'
import * as THREE from 'three'
// 地址坐标转Mercator坐标
export function processMercator(
  data: FeatureCollection | Feature,
  camera: THREE.Camera,
  width: number,
  height: number,
) {
  const dataCopyMercator = JSON.parse(JSON.stringify(data)) as
    | FeatureCollection
    | Feature
  const dataCopyScreen = JSON.parse(JSON.stringify(data)) as
    | FeatureCollection
    | Feature
  if (
    dataCopyMercator.type === 'FeatureCollection' &&
    dataCopyMercator.features[0].geometry.type === 'MultiPolygon' &&
    dataCopyScreen.type === 'FeatureCollection' &&
    dataCopyScreen.features[0].geometry.type === 'MultiPolygon'
  ) {
    const coordinate = dataCopyMercator.features[0].geometry.coordinates[0]
    const coordinateScreen = dataCopyScreen.features[0].geometry.coordinates[0]
    coordinate.forEach((item: number[][], index: number) => {
      item.forEach((item1: number[], index1: number) => {
        const point = turf.point(item1)
        const mercatorPoint = turf.toMercator(point)
        const mercatorPointCoordinates = mercatorPoint.geometry.coordinates

        const {screenX, screenY} = processMercatorPoint(
          mercatorPointCoordinates,
          camera,
          width,
          height,
        )
        coordinateScreen[index][index1][0] = screenX
        coordinateScreen[index][index1][1] = screenY

        item1[0] = mercatorPointCoordinates[0]
        item1[1] = mercatorPointCoordinates[1]
      })
    })
  } else if (data.type === 'Feature' && data.geometry.type === 'Polygon') {
    const coordinate = data.geometry.coordinates
    coordinate.forEach((item: number[][]) => {
      item.forEach((item1: number[]) => {
        const point = turf.point(item1)
        const mercatorPoint = turf.toMercator(point)
        item1[0] = mercatorPoint.geometry.coordinates[0]
        item1[1] = mercatorPoint.geometry.coordinates[1]
      })
    })
  }
  return {
    dataCopyMercator,
    dataCopyScreen,
  }
}

function processMercatorPoint(
  point: number[],
  camera: THREE.Camera,
  width: number,
  height: number,
) {
  // 3D场景中的坐标
  const vector3 = new THREE.Vector3(point[0], point[1], 0)
  // 投影到屏幕
  vector3.project(camera)
  // 转换为标准化设备坐标(NDC)到屏幕像素
  const screenX = ((vector3.x + 1) * width) / 2
  const screenY = ((-vector3.y + 1) * height) / 2
  return {
    screenX,
    screenY,
  }
}
