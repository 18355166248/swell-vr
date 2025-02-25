export const cacheUtils = {
  /**
   * 为单个地理区域绘制内阴影效果
   * @param params 绘制参数
   * @returns 包含阴影效果的Canvas元素
   */
  drawInnerShadow(params: {
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
  }) {
    const {feature, zoom, style, width, height, offset} = params

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

    // 转换地理坐标为像素坐标
    pathPoints[0].push([0, 0])
    for (let i = 0; i < feature[0].length; i++) {
      const point = feature[0][i]
      const pixelCoord = this.convertToPixelCoordinates(
        point[0],
        point[1],
        zoom,
      )
      pathPoints[0].push([pixelCoord[0] - offset[0], pixelCoord[1] - offset[1]])
    }

    if (pathPoints[0].length <= 10) return null

    // 设置合成模式并开始绘制路径
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
    ctx.shadowBlur = style.shadowBlur
    ctx.shadowColor = style.shadowColor
    ctx.fillStyle = style.fillColor
    ctx.fill()

    return shadowCanvas
  },
}
