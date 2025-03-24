import {Color} from 'three'

/**
 * 处理颜色渐变配置
 * @param config 包含颜色范围的配置对象
 * @returns 渐变颜色配置对象，包含顶部和底部的颜色及透明度
 */
export function processGradientColor(config: {range: string[]}) {
  let bottomColor, topColor
  let bottomOpacity = 1,
    topOpacity = 1
  let singleColorObj, bottomColorObj, topColorObj, firstColorObj, lastColorObj

  if (!config.range || !Array.isArray(config.range)) {
    console.error('[xGis]', '渐变颜色配置不合法')
    return null
  }

  switch (config.range.length) {
    case 0:
      console.error('[xGis]', 'extrude range 不合法')
      return null
    case 1:
      // 只有一个颜色时，顶部和底部使用相同的颜色
      singleColorObj = parseColorString(config.range[0])
      bottomColor = singleColorObj.color
      topColor = singleColorObj.color
      bottomOpacity = singleColorObj.opacity
      topOpacity = singleColorObj.opacity
      break
    case 2:
      // 有两个颜色时，分别设置顶部和底部颜色
      bottomColorObj = parseColorString(config.range[0])
      bottomColor = bottomColorObj.color
      bottomOpacity = bottomColorObj.opacity

      topColorObj = parseColorString(config.range[1])
      topColor = topColorObj.color
      topOpacity = topColorObj.opacity
      break
    default:
      // 处理超过两个颜色的情况（如果需要）
      firstColorObj = parseColorString(config.range[0])
      bottomColor = firstColorObj.color
      bottomOpacity = firstColorObj.opacity

      lastColorObj = parseColorString(config.range[config.range.length - 1])
      topColor = lastColorObj.color
      topOpacity = lastColorObj.opacity
  }

  return {
    bottomColor,
    topColor,
    bottomOpacity,
    topOpacity,
  }
}

// 创建颜色缓存，提高性能
const colorCache = new Map()

/**
 * 解析颜色字符串为颜色对象
 * @param colorString 颜色字符串，如 "#080c11" 或 "rgba(8,12,17,0.5)"
 * @returns 包含颜色和透明度的对象
 */
function parseColorString(colorString: string) {
  const cachedResult = colorCache.get(colorString)
  if (cachedResult) {
    return {...cachedResult} // 返回缓存的副本
  }

  let opacity = 1
  const color = new Color()
  let transparent = false

  // 处理RGBA格式
  if (/^(rgba|RGBA)/.test(colorString)) {
    const rgbaMatch = colorString
      .replace(/(?:\(|\)|rgba|RGBA)*/g, '')
      .split(',')
    const r = Number(rgbaMatch[0]) / 255
    const g = Number(rgbaMatch[1]) / 255
    const b = Number(rgbaMatch[2]) / 255
    opacity = Number(rgbaMatch[3])
    transparent = opacity !== 1
    color.setRGB(r, g, b)
  } else {
    // 处理其他格式（十六进制、RGB等）
    color.set(colorString)
  }

  const result = {
    color,
    transparent,
    opacity,
  }

  // 缓存结果
  colorCache.set(colorString, {...result})

  return result
}
