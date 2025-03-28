import {FeatureCollection} from 'geojson'
import {calculateBounds} from './calculateBounds'
import * as turf from '@turf/turf'
import {pointToTile} from '@mapbox/tilebelt'

/**
 * 初始化地图内阴影效果
 * 该方法通过Canvas绘制中国地图的内部阴影效果
 * 将每个省份的边界绘制成带有阴影的形状
 */
export function initInnerShadow({
  drawStyle,
  data,
}: {
  drawStyle: {
    fillColor: string
    shadowColor: string
    shadowBlur: number
    shadowBlurScale: number
  }
  data: FeatureCollection
}) {
  // 使用calculateBounds计算地图边界
  const bounds = calculateBounds(data)
  const scale = 10
  const width = bounds.width * scale
  const height = bounds.height * scale

  const mapCanvas = document.createElement('canvas')
  mapCanvas.width = width
  mapCanvas.height = height
  mapCanvas.style.width = width + 'px'
  mapCanvas.style.height = height + 'px'
  const mapContext = mapCanvas.getContext('2d') as CanvasRenderingContext2D
  const zoom = 10

  const flattenedGeoJson = turf.flatten(Object.assign({}, data))

  // 遍历省份的每个多边形区域
  // 修复类型错误：正确处理不同类型的geometry
  flattenedGeoJson.features.forEach(feature => {
    // 计算特征的边界框
    const featureBbox = turf.bbox(feature)
    const featureTopLeft = pointToTile(featureBbox[0], featureBbox[1], zoom)
    const featureBottomRight = pointToTile(featureBbox[2], featureBbox[3], zoom)

    // 计算特征的像素尺寸
    const featureWidth = Math.abs(featureTopLeft[0] - featureBottomRight[0])
    const featureHeight = Math.abs(featureTopLeft[1] - featureBottomRight[1])

    // 只处理有效尺寸的特征
    if (featureWidth > 0 && featureHeight > 0) {
      // 根据特征尺寸调整阴影模糊程度
      drawStyle.shadowBlur = Math.min(featureWidth, featureHeight) * 2

      // 为当前特征创建内阴影画布
      const featureCanvas = createInnerShadowCanvas({
        feature,
        zoom,
        style: drawStyle,
        width: featureWidth,
        height: featureHeight,
        offset: [featureTopLeft[0], featureBottomRight[1]],
      })

      // 将特征画布绘制到结果画布上
      mapContext.drawImage(
        featureCanvas,
        Math.abs(featureTopLeft[0] - featureTopLeft[0]),
        Math.abs(featureBottomRight[1] - featureBottomRight[1]),
        featureCanvas.width,
        featureCanvas.height,
      )
    }
  })

  // 生成最终的图片数据URL
  downloadImage(mapCanvas, 'map')
  return mapCanvas
}

/**
 * 为单个地理区域绘制内阴影效果，并支持缩放和居中
 */
function drawInnerShadowScaled(params: {
  feature: number[][][] // 地理区域坐标数据
  style: {
    // 绘制样式
    fillColor: string
    shadowColor: string
    shadowBlur: number
    shadowBlurScale?: number // 添加可选参数
  }
  width: number // 画布宽度
  height: number // 画布高度
  offset: number[] // 坐标偏移量，为了兼容性保留此参数，但不再使用
}) {
  const {feature, style, width, height} = params

  if (feature[0].length <= 5) {
    return null
  }

  // 创建新的画布和上下文
  const shadowCanvas = document.createElement('canvas')
  const ctx = shadowCanvas.getContext('2d') as CanvasRenderingContext2D

  // 设置画布尺寸
  shadowCanvas.width = width
  shadowCanvas.height = height
  shadowCanvas.style.width = width + 'px'
  shadowCanvas.style.height = height + 'px'

  // 处理坐标数据
  const polygon = turf.polygon([feature[0]])
  const bbox = turf.bbox(polygon)

  // 计算适当的缩放系数和偏移，确保图形居中显示
  const scaleX = (width / (bbox[2] - bbox[0])) * 0.8 // 留出边距
  const scaleY = (height / (bbox[3] - bbox[1])) * 0.8
  const scale = Math.min(scaleX, scaleY)

  const offsetX = (width - (bbox[2] - bbox[0]) * scale) / 2
  const offsetY = (height - (bbox[3] - bbox[1]) * scale) / 2

  // 转换坐标
  const pathPoints: [number, number][] = []
  for (let i = 0; i < feature[0].length; i++) {
    const point = feature[0][i]
    const x = (point[0] - bbox[0]) * scale + offsetX
    const y = (point[1] - bbox[1]) * scale + offsetY
    pathPoints.push([x, y])
  }

  // 创建路径
  const createPath = (ctx: CanvasRenderingContext2D) => {
    const path = new Path2D()
    for (let i = 0; i < pathPoints.length; i++) {
      const [x, y] = pathPoints[i]
      if (i === 0) {
        path.moveTo(x, y)
      } else {
        path.lineTo(x, y)
      }
    }
    path.closePath()
    return path
  }

  // 计算阴影参数
  const shadowSize = Math.min(width, height) * (style.shadowBlurScale || 0.1)

  const path = createPath(ctx)

  // 内阴影设置
  ctx.save()
  // source-out 在不与现有画布内容重叠的地方绘制新图形,绘制会导致画布上面之前的图形都变成透明的
  ctx.globalCompositeOperation = 'source-out'
  ctx.shadowBlur = shadowSize
  ctx.shadowColor = style.shadowColor
  ctx.fillStyle = style.shadowColor
  ctx.fill(path)
  ctx.restore()

  ctx.save()
  // destination-over 在现有的画布内容后面绘制新的图形,绘制不会导致画布上面之前的图形都变为透明
  ctx.globalCompositeOperation = 'destination-over'
  ctx.fillStyle = style.fillColor
  ctx.fill(path)
  ctx.restore()

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

/**
 * 创建内阴影效果的画布
 * @param {Object} config - 配置参数
 * @returns {HTMLCanvasElement} - 渲染好的画布元素
 */
function createInnerShadowCanvas(config: any) {
  const {
    feature: geoFeature,
    zoom: zoomLevel,
    style: styleConfig,
    width: canvasWidth,
    height: canvasHeight,
    offset: canvasOffset,
  } = config

  // 创建画布和获取2D上下文
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  // 设置画布尺寸
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  canvas.style.width = canvasWidth + 'px'
  canvas.style.height = canvasHeight + 'px'

  // 获取地理特征的坐标
  const coordinates = geoFeature.geometry.coordinates
  const processedCoords: number[][][] = []
  let ringIndex, pointIndex, projectedPoint

  // 初始化第一个环
  processedCoords.push([])

  // 处理坐标点，将地理坐标转换为画布坐标
  for (let i = 0; i < coordinates[0].length; i++) {
    const point = coordinates[0][i]
    projectedPoint = pointToTile(point[0], point[1], zoomLevel)
    const v = [
      projectedPoint[0] - canvasOffset[0],
      projectedPoint[1] - canvasOffset[1],
    ]
    processedCoords[0].push(v)
  }

  // 设置合成操作并开始绘制路径
  ctx.globalCompositeOperation = 'source-out'
  ctx.beginPath()

  // 绘制所有环
  for (ringIndex = 0; ringIndex < processedCoords.length; ringIndex++) {
    for (
      pointIndex = 0;
      pointIndex < processedCoords[ringIndex].length;
      pointIndex++
    ) {
      const point = processedCoords[ringIndex][pointIndex]
      // 第一个点使用moveTo，其余点使用lineTo
      ctx[pointIndex ? 'lineTo' : 'moveTo'](point[0], point[1])
    }
    ctx.closePath()
  }

  // 应用阴影和填充样式
  ctx.shadowBlur = styleConfig.shadowBlur
  ctx.shadowColor = styleConfig.shadowColor
  ctx.fillStyle = styleConfig.fillColor
  ctx.fill()

  return canvas
}
