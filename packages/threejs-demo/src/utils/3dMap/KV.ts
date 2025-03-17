/* eslint-disable @typescript-eslint/no-explicit-any */
import {max} from 'lodash-es'
import {geoToCartesian, geoToCartesianAlt} from './oA'
import {projectCoords, unprojectCoords} from './projectCoords'
import * as turf from '@turf/turf'

const JV = {
  bboxSize: 68016,
  height: 50503.97002946732,
  maxSize: 68565.51601500002,
  minSize: 50503.97002946732,
  width: 68565.51601500002,
}

/**
 * 计算并返回地图视图和相机状态的配置信息
 * @param {Object} t - 输入配置参数
 * @param {Object} t.geojson - 原始GeoJSON数据
 * @param {Object} t.geojsonProj - 投影后的GeoJSON数据
 * @param {Object} t.geojsonUtil - GeoJSON工具对象
 * @param {number} t.worldBboxSize - 世界边界框尺寸
 * @param {number} t.heightScale - 高度缩放系数
 * @param {number} t.pitch - 相机俯仰角
 * @param {number} t.rotation - 相机旋转角
 * @param {Array} t.offset - 相机偏移量 [x, y, z]
 * @param {Object} t.viewClip - 视图裁剪配置
 * @returns {Object} 地图视图配置和相机状态
 */
function KV(t: {
  geojson: any
  geojsonProj: any
  project: (coords: number[]) => number[]
  worldBboxSize: number
  heightScale: number
  pitch: number
  rotation: number
  offset: number[]
  viewClip?: {
    bbox: number[]
    direction: string
  }
}) {
  // 解构输入参数
  const {
    geojson: geoData,
    geojsonProj: projectedData,
    worldBboxSize: worldSize,
    heightScale: heightFactor,
    pitch: cameraPitch,
    rotation: cameraRotation,
    offset: cameraOffset,
    viewClip: clipConfig,
  } = t

  // 获取投影数据的边界框
  const originalBbox = turf.bbox(projectedData)
  let finalBbox = originalBbox

  // 如果需要视图裁剪，计算裁剪后的边界框
  if (clipConfig) {
    finalBbox = calculateClippedBbox(
      originalBbox as [number, number, number, number],
      [
        ...projectCoords([clipConfig.bbox[0], clipConfig.bbox[1]]),
        ...projectCoords([clipConfig.bbox[2], clipConfig.bbox[3]]),
      ],
      clipConfig.direction,
    )
  }

  // 计算边界框选项
  const bboxOptions = calculateBboxOptions(finalBbox, worldSize, heightFactor)

  // 计算边界框中心点
  const bboxCenter = [
    (finalBbox[0] + finalBbox[2]) / 2,
    (finalBbox[1] + finalBbox[3]) / 2,
    0,
  ]

  // 计算基于边界框大小的缩放值
  const scaledSize = bboxOptions.size.bboxSize * cameraOffset[2]

  // 计算相机位置
  const cameraPosition = geoToCartesian(cameraPitch, cameraRotation).map(
    value => value * scaledSize,
  )
  console.log('🚀 ~ cameraPosition:', cameraPosition)
  cameraPosition[0] += bboxCenter[0]
  cameraPosition[1] += bboxCenter[1]
  cameraPosition[2] += bboxCenter[2]
  console.log('🚀 ~ cameraPosition:', cameraPosition)

  // 计算相机上方向
  const cameraUp = geoToCartesianAlt(cameraPitch, cameraRotation)

  // 构建并返回结果对象
  return {
    boundary: geoData,
    boundaryProj: projectedData,
    bboxOption: bboxOptions,
    viewBBoxOption: bboxOptions,
    cameraStatus: {
      near: Math.max(bboxOptions.size.bboxSize, 0.001),
      far: 10 * bboxOptions.size.bboxSize,
      target: [
        bboxCenter[0] + cameraOffset[0] * bboxOptions.size.bboxSize,
        bboxCenter[1] + cameraOffset[1] * bboxOptions.size.bboxSize,
        0,
      ],
      // position: [
      //   cameraPosition[0] + cameraOffset[0] * bboxOptions.size.bboxSize,
      //   cameraPosition[1] + cameraOffset[1] * bboxOptions.size.bboxSize,
      //   cameraPosition[2],
      // ],
      position: [127341.46718482752, 1170.6685647963968, 49496.650606293035],
      up: cameraUp,
    },
    layerFitValue: {
      xy: bboxOptions.size.bboxSize >> 4,
      z: bboxOptions.size.bboxSize >> 3,
      flylineWidth: bboxOptions.size.bboxSize >> 12,
      straightLineWidth: bboxOptions.size.bboxSize >> 6,
    },
  }
}

/**
 * 计算视图裁剪后的边界框
 * @param {Array} originalBbox - 原始边界框 [xMin, yMin, xMax, yMax]
 * @param {Array} clipBbox - 裁剪边界框
 * @param {string} direction - 裁剪方向："bottom-right", "bottom", "top", "left", "right"
 * @returns {Array} 裁剪后的边界框
 */
function calculateClippedBbox(
  originalBbox: [number, number, number, number],
  clipBbox: number[],
  direction: string,
): [number, number, number, number] {
  const resultBbox: [number, number, number, number] = [0, 0, 0, 0]

  switch (direction) {
    case 'bottom-right':
      resultBbox[0] = originalBbox[0]
      resultBbox[1] = Math.max(originalBbox[1], clipBbox[3])
      resultBbox[2] = Math.min(originalBbox[2], clipBbox[0])
      resultBbox[3] = originalBbox[3]
      break
    case 'bottom':
      resultBbox[0] = originalBbox[0]
      resultBbox[1] = Math.max(originalBbox[1], clipBbox[3])
      resultBbox[2] = originalBbox[2]
      resultBbox[3] = originalBbox[3]
      break
    case 'top':
      resultBbox[0] = originalBbox[0]
      resultBbox[1] = originalBbox[1]
      resultBbox[2] = originalBbox[2]
      resultBbox[3] = Math.min(originalBbox[3], clipBbox[1])
      break
    case 'left':
      resultBbox[0] = Math.max(originalBbox[0], clipBbox[2])
      resultBbox[1] = originalBbox[1]
      resultBbox[2] = originalBbox[2]
      resultBbox[3] = originalBbox[3]
      break
    case 'right':
      resultBbox[0] = originalBbox[0]
      resultBbox[1] = originalBbox[1]
      resultBbox[2] = Math.min(originalBbox[2], clipBbox[0])
      resultBbox[3] = originalBbox[3]
      break
  }

  return resultBbox
}

/**
 * 计算边界框的各种选项和参数
 * @param {Array} bbox - 边界框 [xMin, yMin, xMax, yMax]
 * @param {number} worldSize - 世界大小比例
 * @param {number} heightFactor - 高度比例因子
 * @returns {Object} 包含边界框各种计算参数的对象
 */
function calculateBboxOptions(
  bbox: number[],
  worldSize: number,
  heightFactor: number,
) {
  // 计算投影坐标系中的中心点
  const centerProj = [(bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2, 0]

  // 计算边界框角点
  const corner1 = [bbox[0], bbox[1]]
  const corner2 = [bbox[2], bbox[3]]

  // 使用窗口函数转换坐标
  const transformedBbox = [
    ...unprojectCoords(corner1),
    ...unprojectCoords(corner2),
  ]

  // 计算转换后边界框的中心
  const center = [
    (transformedBbox[0] + transformedBbox[2]) / 2,
    (transformedBbox[1] + transformedBbox[3]) / 2,
    0,
  ]

  // 计算宽度和高度
  const width = Math.abs(bbox[0] - bbox[2])
  const height = Math.abs(bbox[1] - bbox[3])

  // 计算最小和最大尺寸
  const minSize = Math.min(width, height)
  const maxSize = Math.max(width, height)

  // 使用预定义的常量进行比例计算
  const constantWidth = JV.width
  const constantHeight = JV.height
  const constantBboxSize = JV.bboxSize

  // 计算实际的边界框大小
  const bboxSize =
    (max([width / constantWidth, height / constantHeight]) as number) *
    constantBboxSize

  // 计算边界框比例和基础高度
  const bboxScale = bboxSize / worldSize
  const baseHeight = bboxSize * heightFactor * 0.05

  return {
    bbox: transformedBbox,
    bboxProj: bbox,
    center: center,
    centerProj: centerProj,
    size: {
      width: width,
      height: height,
      minSize: minSize,
      maxSize: maxSize,
      bboxSize: bboxSize,
    },
    bboxScale: bboxScale,
    baseHeight: baseHeight,
  }
}

// window.KV = KV;
export {KV}
