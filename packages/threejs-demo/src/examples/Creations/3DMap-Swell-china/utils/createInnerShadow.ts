import * as turf from '@turf/turf'
import {FeatureCollection} from 'geojson'

/**
 * 初始化地图内阴影效果
 * 该方法通过Canvas绘制中国地图的内部阴影效果
 * 将每个省份的边界绘制成带有阴影的形状
 */
export function initInnerShadow({
  drawStyle,
  canvasWidth = 1024,
  canvasHeight = 768,
  data,
}: {
  drawStyle: {
    fill: boolean
    fillColor: string
    shadowColor: string
    shadowBlur: number
    shadowBlurScale: number
  }
  canvasWidth?: number
  canvasHeight?: number
  data: FeatureCollection
}) {
  // 根据画布尺寸计算最佳地图缩放值
  const mapScale = 1

  // 创建画布和上下文
  const mapCanvas = document.createElement('canvas')
  mapCanvas.width = canvasWidth
  mapCanvas.height = canvasHeight
  mapCanvas.style.width = canvasWidth + 'px'
  mapCanvas.style.height = canvasHeight + 'px'
  const mapContext = mapCanvas.getContext('2d') as CanvasRenderingContext2D

  // 计算地图完整边界
  const bbox = turf.bbox(data)
  const allTopLeft = [bbox[0], bbox[1]]
  const allBottomRight = [bbox[2], bbox[3]]

  // 计算地图边界的宽度和高度
  const mapWidth = Math.abs(allTopLeft[0] - allBottomRight[0])
  const mapHeight = Math.abs(allTopLeft[1] - allBottomRight[1])

  // 确保地图尺寸足够大
  const minSize = 300
  const adjustedMapWidth = Math.max(mapWidth, minSize)
  const adjustedMapHeight = Math.max(mapHeight, minSize)

  // 计算居中偏移
  const offsetX = (canvasWidth - adjustedMapWidth) / 2
  const offsetY = (canvasHeight - adjustedMapHeight) / 2

  // 遍历省份的每个多边形区域
  const polygons = data.features[0].geometry.coordinates
  console.log('🚀 ~ polygons:', polygons)
  for (let polygonIndex = 0; polygonIndex < polygons.length; polygonIndex++) {
    const polygon = polygons[polygonIndex]

    // 绘制单个多边形的内阴影
    const shadowCanvas = drawInnerShadowScaled({
      feature: polygon,
      zoom: mapScale,
      style: drawStyle,
      width: canvasWidth,
      height: canvasHeight,
      offset: [allTopLeft[0], allBottomRight[1]],
      canvasOffset: [offsetX, offsetY],
    })

    if (shadowCanvas) {
      // 将阴影效果绘制到主画布上
      mapContext.drawImage(
        shadowCanvas,
        0,
        0,
        shadowCanvas.width,
        shadowCanvas.height,
      )
    }
  }

  // 生成最终的图片数据URL
  // downloadImage(mapCanvas, 'map')
  return mapCanvas
}

/**
 * 为单个地理区域绘制内阴影效果，并支持缩放和居中
 */
function drawInnerShadowScaled(params: {
  feature: number[][][] // 地理区域坐标数据
  zoom: number // 缩放级别
  style: {
    // 绘制样式
    fill: boolean
    fillColor: string
    shadowColor: string
    shadowBlur: number
  }
  width: number // 画布宽度
  height: number // 画布高度
  offset: number[] // 坐标偏移量
  canvasOffset: number[] // 画布上的偏移，用于居中
}) {
  const {feature, style, width, height, offset, canvasOffset} = params
  if (feature[0].length <= 5) return null

  // 创建新的画布和上下文
  const shadowCanvas = document.createElement('canvas')
  const ctx = shadowCanvas.getContext('2d') as CanvasRenderingContext2D

  // 设置画布尺寸
  shadowCanvas.width = width
  shadowCanvas.height = height
  shadowCanvas.style.width = width + 'px'
  shadowCanvas.style.height = height + 'px'

  // 准备坐标点数组
  const pathPoints: [number, number][][] = [[]]

  // 计算特征的边界框，用于后续计算特征的尺寸
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity

  // 转换地理坐标为像素坐标
  for (let i = 0; i < feature[0].length; i++) {
    const point = feature[0][i]
    // 使用简单的线性变换进行坐标转换
    const pixelCoord = [
      point[0] * 100, // 经度转换为像素坐标
      point[1] * 100, // 纬度转换为像素坐标
    ]
    // 应用缩放和偏移
    const scaledX = pixelCoord[0] - offset[0] + canvasOffset[0]
    const scaledY = pixelCoord[1] - offset[1] + canvasOffset[1]
    pathPoints[0].push([scaledX, scaledY])

    // 更新边界框
    minX = Math.min(minX, scaledX)
    minY = Math.min(minY, scaledY)
    maxX = Math.max(maxX, scaledX)
    maxY = Math.max(maxY, scaledY)
  }

  const topLeft = [minX, minY]
  const bottomRight = [maxX, maxY]

  const featureWidth = Math.abs(bottomRight[0] - topLeft[0])
  const featureHeight = Math.abs(bottomRight[1] - topLeft[1])

  const shadowBlur = Math.min(featureWidth, featureHeight) / 300

  if (pathPoints[0].length <= 10) return null

  // 设置合成模式为源出
  ctx.globalCompositeOperation = 'source-out'
  ctx.beginPath()

  // 绘制所有路径
  for (let pathIndex = 0; pathIndex < pathPoints.length; pathIndex++) {
    const path = pathPoints[pathIndex]
    for (let pointIndex = 0; pointIndex < path.length; pointIndex++) {
      const point = path[pointIndex]
      if (pointIndex === 0) {
        ctx.moveTo(point[0], point[1])
      } else {
        ctx.lineTo(point[0], point[1])
      }
    }
    ctx.closePath()
  }

  // 应用阴影和填充样式
  ctx.shadowBlur = shadowBlur // 根据缩放调整阴影模糊值
  ctx.shadowColor = style.shadowColor
  ctx.fillStyle = style.fillColor
  ctx.fill()

  return shadowCanvas
}

export function downloadImage(
  canvas: HTMLCanvasElement,
  fileName: string = 'map',
) {
  // 生成图片数据URL（PNG格式，默认质量0.9）
  const dataUrl = canvas.toDataURL('image/png', 0.9)

  // 创建隐藏的下载链接
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = `${fileName}.png` // 自定义文件名
  // 自定义下载的目录
  // 触发下载
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
