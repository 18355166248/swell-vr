/* eslint-disable @typescript-eslint/no-explicit-any */
import {ThreeMap} from '.'
import {Vf} from './constant'
import MV from './MV'
import * as THREE from 'three'

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
  const ctx = canvas.getContext('2d')

  // 设置画布尺寸
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  canvas.style.width = canvasWidth + 'px'
  canvas.style.height = canvasHeight + 'px'

  // 获取地理特征的坐标
  const coordinates = geoFeature.geometry.coordinates
  const processedCoords = []
  let ringIndex, pointIndex, projectedPoint

  // 初始化第一个环
  processedCoords.push([])

  // 处理坐标点，将地理坐标转换为画布坐标
  for (let i = 0; i < coordinates[0].length; i++) {
    const point = coordinates[0][i]
    projectedPoint = wV(point[0], point[1], zoomLevel)
    processedCoords[0].push([
      projectedPoint[0] - canvasOffset[0],
      projectedPoint[1] - canvasOffset[1],
    ])
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

/**
 * 为地图区域创建内阴影效果
 * @param {Object} mapInstance - 地图实例
 */
export function createDistrictInnerShadow(mapInstance: ThreeMap) {
  // 获取内阴影样式配置
  const {
    districtStyle: {innerShadow: shadowConfig},
  } = mapInstance

  // 检查内阴影是否启用且配置有效
  if (
    shadowConfig &&
    shadowConfig.enabled &&
    shadowConfig.shadowColor &&
    shadowConfig.shadowBlurScale
  ) {
    // 获取地图全局配置
    const {bboxOption: bboxConfig, boundary: boundaryData} =
      mapInstance.gis.globalOpts

    // 生成内阴影纹理
    const shadowTexture = (function generateShadowTexture(options) {
      // 解构配置参数
      const {
        geojson: geoJsonData, // 地图数据
        bboxOption: bboxOptions, // 边界框配置
        maxZoom: maxZoomLevel, // 最大缩放级别
        shadowColor: shadowColorValue, // 阴影颜色
        shadowBlurScale: blurScale, // 阴影模糊程度
      } = options

      const {bbox: boundingBox} = bboxOptions

      // 初始化地图视图
      const mapView = MV({
        tileUrl: '',
        bbox: boundingBox,
        maxZoom: maxZoomLevel,
        worldBboxSize: Vf,
        bboxOption: bboxOptions,
        isExtrudeBackground: false,
      })

      // 获取当前缩放级别
      const {zoom: currentZoom} = mapView

      // 计算边界框的像素坐标
      const topLeftPixel = window.wV(
        boundingBox[0],
        boundingBox[1],
        currentZoom,
      )
      const bottomRightPixel = window.wV(
        boundingBox[2],
        boundingBox[3],
        currentZoom,
      )

      // 计算画布尺寸
      const canvasWidth = Math.abs(topLeftPixel[0] - bottomRightPixel[0])
      const canvasHeight = Math.abs(topLeftPixel[1] - bottomRightPixel[1])

      // 创建画布
      const resultCanvas = document.createElement('canvas')
      resultCanvas.width = canvasWidth
      resultCanvas.height = canvasHeight
      resultCanvas.style.width = canvasWidth + 'px'
      resultCanvas.style.height = canvasHeight + 'px'

      // 获取画布上下文
      const canvasContext = resultCanvas.getContext('2d')

      // 设置绘制样式
      const drawStyle = {
        fill: true,
        fillColor: shadowColorValue,
        shadowColor: shadowColorValue,
        shadowBlur: 100,
      }

      // 扁平化GeoJSON 地图数据
      const flattenedGeoJson = am.flatten(Object.assign({}, geoJsonData))
      let featureIndex, currentFeature

      // 处理每个地理特征
      for (
        featureIndex = 0;
        featureIndex < flattenedGeoJson.features.length;
        featureIndex++
      ) {
        currentFeature = flattenedGeoJson.features[featureIndex]

        // 计算特征的边界框
        const featureBbox = am.bbox(currentFeature)
        const featureTopLeft = window.wV(
          featureBbox[0],
          featureBbox[1],
          currentZoom,
        )
        const featureBottomRight = window.wV(
          featureBbox[2],
          featureBbox[3],
          currentZoom,
        )

        // 计算特征的像素尺寸
        const featureWidth = Math.abs(featureTopLeft[0] - featureBottomRight[0])
        const featureHeight = Math.abs(
          featureTopLeft[1] - featureBottomRight[1],
        )

        // 只处理有效尺寸的特征
        if (featureWidth > 0 && featureHeight > 0) {
          // 根据特征尺寸调整阴影模糊程度
          drawStyle.shadowBlur =
            Math.min(featureWidth, featureHeight) * blurScale

          // 为当前特征创建内阴影画布
          const featureCanvas = createInnerShadowCanvas({
            feature: currentFeature,
            zoom: currentZoom,
            style: drawStyle,
            width: featureWidth,
            height: featureHeight,
            offset: [featureTopLeft[0], featureBottomRight[1]],
          })

          // 将特征画布绘制到结果画布上
          canvasContext.drawImage(
            featureCanvas,
            Math.abs(featureTopLeft[0] - topLeftPixel[0]),
            Math.abs(featureBottomRight[1] - bottomRightPixel[1]),
            featureCanvas.width,
            featureCanvas.height,
          )
        }
      }

      // // 注释掉的导出图片功能
      // // 生成图片数据URL（PNG格式，默认质量0.9）
      // const dataUrl = resultCanvas.toDataURL('image/png', 0.9);
      // // 创建隐藏的下载链接
      // const link = document.createElement('a');
      // link.href = dataUrl;
      // link.download = `myImage-${featureIndex}.png`; // 自定义文件名
      // // 触发下载
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);

      return resultCanvas
    })({
      geojson: boundaryData,
      bboxOption: bboxConfig,
      maxZoom: 12,
      shadowColor: shadowConfig.shadowColor,
      shadowBlurScale: shadowConfig.shadowBlurScale,
    })

    if (mapInstance.extrudeInnerShadowMaterial) {
      // 更新材质的纹理贴图 Es = Texture
      mapInstance.extrudeInnerShadowMaterial.map = new THREE.Texture(
        shadowTexture,
      )
      mapInstance.extrudeInnerShadowMaterial.opacity = 1
      mapInstance.extrudeInnerShadowMaterial.needsUpdate = true
    }
  } else {
    if (mapInstance.extrudeInnerShadowMaterial) {
      // 如果内阴影未启用，则清除纹理
      mapInstance.extrudeInnerShadowMaterial.map = null
      mapInstance.extrudeInnerShadowMaterial.opacity = 0
      mapInstance.extrudeInnerShadowMaterial.needsUpdate = true
    }
  }
}
