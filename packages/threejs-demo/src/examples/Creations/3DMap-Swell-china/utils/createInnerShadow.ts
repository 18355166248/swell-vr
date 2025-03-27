import {FeatureCollection} from 'geojson'
import {calculateBounds} from './calculateBounds'
import * as turf from '@turf/turf'

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

  const mapCanvas = document.createElement('canvas')
  mapCanvas.width = bounds.width
  mapCanvas.height = bounds.height
  mapCanvas.style.width = bounds.width + 'px'
  mapCanvas.style.height = bounds.height + 'px'
  const mapContext = mapCanvas.getContext('2d') as CanvasRenderingContext2D

  // 遍历省份的每个多边形区域
  // 修复类型错误：正确处理不同类型的geometry
  data.features.forEach(feature => {
    const geometry = feature.geometry

    if (
      geometry &&
      (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon')
    ) {
      // 处理不同类型的几何体
      const polygons =
        geometry.type === 'Polygon'
          ? [geometry.coordinates]
          : geometry.coordinates

      // 遍历所有多边形
      for (
        let polygonIndex = 0;
        polygonIndex < polygons.length;
        polygonIndex++
      ) {
        const polygon = polygons[polygonIndex]

        // 绘制单个多边形的内阴影
        const shadowCanvas = drawInnerShadowScaled({
          feature: polygon,
          style: drawStyle,
          width: bounds.width,
          height: bounds.height,
          offset: [0, 0], // 提供一个默认值，实际不再使用这个参数
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
    }
  })

  // 生成最终的图片数据URL
  // downloadImage(mapCanvas, 'map')
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
    ctx.beginPath()
    for (let i = 0; i < pathPoints.length; i++) {
      const [x, y] = pathPoints[i]
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
  }

  // 计算阴影参数
  const shadowSize = Math.min(width, height) * (style.shadowBlurScale || 0.1)

  // 方法1：先绘制实际填充，然后绘制阴影效果
  // 清除画布
  ctx.clearRect(0, 0, width, height)

  // 1. 首先使用较深的颜色填充整个区域
  createPath(ctx)
  ctx.fillStyle = style.shadowColor
  ctx.fill()

  // 2. 然后在内部绘制略小的区域，使用目标填充色
  // 创建略小的路径（向内收缩）
  ctx.save()
  createPath(ctx)

  // 设置阴影参数 - 内部发光
  ctx.shadowColor = style.shadowColor
  ctx.shadowBlur = shadowSize
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 0

  // 使用填充色填充
  ctx.fillStyle = style.fillColor
  ctx.fill()
  ctx.restore()

  // 3. 增强边缘效果
  ctx.save()
  createPath(ctx)
  ctx.clip() // 将绘制限制在路径内部

  // 沿边缘创建渐变效果
  createPath(ctx)
  ctx.lineWidth = shadowSize / 2
  ctx.strokeStyle = style.shadowColor
  ctx.stroke()
  ctx.restore()

  // 4. 添加细微的外边缘高光，增强立体感
  ctx.save()
  createPath(ctx)
  ctx.clip('evenodd') // 剪切除了路径以外的区域

  // 创建一个略大的路径用于外部高光
  ctx.beginPath()
  ctx.rect(0, 0, width, height)
  ctx.closePath()

  ctx.shadowColor = style.shadowColor
  ctx.shadowBlur = shadowSize / 4
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 0

  ctx.fillStyle = 'transparent'
  ctx.fill()
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
