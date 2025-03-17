/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import earcut, {flatten} from 'earcut'

/**
 * 将源几何体数据的指定属性数组合并到目标几何体数据中
 * 这个辅助函数用于合并几何体的各个属性数组（如索引、位置、法线和纹理坐标）
 * @param {Object} targetGeometry - 目标几何体对象
 * @param {Object} sourceGeometry - 源几何体对象
 * @param {string} attributeName - 要合并的属性名称（如"index"、"position"等）
 */
function _V(targetGeometry, sourceGeometry, attributeName) {
  for (let i = 0; i < sourceGeometry[attributeName].length; i++) {
    targetGeometry[attributeName].push(sourceGeometry[attributeName][i])
  }
}

/**
 * 计算三维向量的长度/模
 * @param {Array} vector - 三维向量 [x, y, z]
 * @returns {number} 向量的长度
 */
function pV(vector) {
  const x = vector[0],
    y = vector[1],
    z = vector[2]

  // 使用勾股定理计算三维向量的长度
  return Math.sqrt(x * x + y * y + z * z)
}

/**
 * 判断多边形或轮廓的方向（顺时针或逆时针）
 * @param {Array} t - 包含坐标的数组
 * @param {number} e - 起始索引
 * @param {number} i - 结束索引
 * @param {number} n - 步长
 * @returns {boolean} true表示为正方向（通常是逆时针）
 */
function mV(t, e, i, n) {
  let r = 0
  for (let o = e, a = i - n; o < i; o += n)
    (r += (t[a] - t[o]) * (t[o + 1] + t[a + 1])), (a = o)
  return r > 0
}

/**
 * 归一化三维向量（使其长度为1）
 * @param {Array} result - 用于存储结果的向量
 * @param {Array} vector - 需要归一化的向量
 * @returns {Array} 归一化后的向量
 */
function fV(result, vector) {
  const x = vector[0],
    y = vector[1],
    z = vector[2]

  // 计算向量的平方长度
  const squaredLength = x * x + y * y + z * z

  // 只有当向量长度大于0时才进行归一化，避免除以零
  if (squaredLength > 0) {
    // 计算向量长度的倒数
    const invLength = 1 / Math.sqrt(squaredLength)

    // 将向量的每个分量乘以长度的倒数，实现归一化
    result[0] = vector[0] * invLength
    result[1] = vector[1] * invLength
    result[2] = vector[2] * invLength
  }

  return result
}

/**
 * 计算两个三维向量的差（向量减法）
 * @param {Array} t - 用于存储结果的向量
 * @param {Array} e - 第一个向量
 * @param {Array} i - 第二个向量
 * @returns {Array} 结果向量 t = e - i
 */
function dV(t, e, i) {
  return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t
}

function gV(t, e, i, n = [], r = !0) {
  const o = [],
    a = []
  return (
    dV(o, i, e),
    dV(a, t, e),
    (function (t, e, i) {
      const n = e[0],
        r = e[1],
        o = e[2],
        a = i[0],
        s = i[1],
        l = i[2]
      ;(t[0] = r * l - o * s), (t[1] = o * a - n * l), (t[2] = n * s - r * a)
    })(n, o, a),
    r && fV(n, n),
    n
  )
}

/**
 * 处理2D平面地理特征的三角剖分和法线计算
 * 将地理多边形数据转换为3D模型中的平面几何体（顶部面）
 * @param {Object} targetGeometry - 目标几何体数据对象，包含index、position、normal和uv数组
 * @param {Object} params - 输入参数，包含coordinates(坐标)、bbox(边界框)和height(高度)
 */
function yV(targetGeometry, params) {
  const {coordinates, bbox, height} = params
  // 将多边形坐标扁平化为顶点数组
  const {vertices, holes, dimensions} = flatten(coordinates)
  // 对顶点进行三角剖分，生成三角形索引
  const triangulatedIndices = earcut(vertices, holes, dimensions)
  // 从目标几何体中提取各个属性数组
  const {index, position, normal, uv} = targetGeometry
  // 计算边界框的宽度和高度，用于纹理坐标映射
  const bboxWidth = bbox[2] - bbox[0],
    bboxHeight = bbox[3] - bbox[1],
    // 记录当前顶点数量，用于索引偏移
    vertexOffset = position.length / 3

  // 临时存储顶点坐标的数组
  const tempVertex = []
  let i

  // 第一步：添加所有顶点
  for (i = 0; i < vertices.length; i += dimensions) {
    // 提取并四舍五入顶点坐标
    tempVertex[0] = +Math.round(vertices[i])
    tempVertex[1] = +Math.round(vertices[i + 1])
    tempVertex[2] = +Math.round(height)

    // 添加顶点位置
    position.push(...tempVertex)

    // 计算并添加纹理坐标（UV）
    uv.push(
      (+tempVertex[0] - bbox[0]) / bboxWidth,
      (+tempVertex[1] - bbox[1]) / bboxHeight,
    )

    // 初始化法线向量（稍后会计算实际值）
    normal.push(0, 0, 0)
  }

  // 临时变量，用于存储三角形的三个顶点索引和坐标
  let vertexIndex1, vertexIndex2, vertexIndex3
  const vertex1 = [],
    vertex2 = [],
    vertex3 = [],
    tempNormal = []

  // 第二步：处理三角形，添加索引并计算法线
  for (i = 2; i < triangulatedIndices.length; i += 3) {
    // 获取三角形的三个顶点索引（加上偏移量）
    vertexIndex1 = triangulatedIndices[i - 2] + vertexOffset
    vertexIndex2 = triangulatedIndices[i - 1] + vertexOffset
    vertexIndex3 = triangulatedIndices[i] + vertexOffset

    // 添加三角形索引
    index.push(vertexIndex1, vertexIndex2, vertexIndex3)

    // 获取第一个顶点的坐标
    vertexIndex1 *= 3
    vertex1[0] = position[vertexIndex1]
    vertex1[1] = position[vertexIndex1 + 1]
    vertex1[2] = position[vertexIndex1 + 2]

    // 获取第二个顶点的坐标
    vertexIndex2 *= 3
    vertex2[0] = position[vertexIndex2]
    vertex2[1] = position[vertexIndex2 + 1]
    vertex2[2] = position[vertexIndex2 + 2]

    // 获取第三个顶点的坐标
    vertexIndex3 *= 3
    vertex3[0] = position[vertexIndex3]
    vertex3[1] = position[vertexIndex3 + 1]
    vertex3[2] = position[vertexIndex3 + 2]

    // 计算三角形的法线向量
    gV(vertex1, vertex2, vertex3, tempNormal, false)

    // 将法线向量添加到三个顶点
    normal[vertexIndex1] += tempNormal[0]
    normal[vertexIndex1 + 1] += tempNormal[1]
    normal[vertexIndex1 + 2] += tempNormal[2]

    normal[vertexIndex2] += tempNormal[0]
    normal[vertexIndex2 + 1] += tempNormal[1]
    normal[vertexIndex2 + 2] += tempNormal[2]

    normal[vertexIndex3] += tempNormal[0]
    normal[vertexIndex3 + 1] += tempNormal[1]
    normal[vertexIndex3 + 2] += tempNormal[2]
  }

  // 第三步：归一化所有法线向量
  for (i = 3 * vertexOffset; i < normal.length; i += 3) {
    tempNormal[0] = normal[i]
    tempNormal[1] = normal[i + 1]
    tempNormal[2] = normal[i + 2]

    // 归一化法线向量
    fV(tempNormal, tempNormal)

    // 更新法线数组
    ;[normal[i], normal[i + 1], normal[i + 2]] = tempNormal
  }
}

/**
 * 处理3D立体地理特征的三角剖分和法线计算
 * 将2D地理数据挤压(extrude)成具有高度的3D模型（侧面）
 * @param {Object} targetGeometry - 目标几何体数据对象，包含index、position、normal和uv数组
 * @param {Object} params - 输入参数，包含coordinates(坐标)和height(高度)
 */
function vV(targetGeometry, params) {
  const {coordinates, height} = params,
    // 将多边形坐标扁平化为顶点数组
    {vertices, holes, dimensions} = flatten(coordinates),
    // 从目标几何体中提取各个属性数组
    {index, position, normal, uv} = targetGeometry,
    // 临时变量，用于存储计算过程中的向量和坐标
    tempVector1 = [],
    tempVector2 = [],
    tempVector3 = [],
    tempVector4 = [],
    tempNormal1 = [],
    tempNormal2 = [],
    tempVertex = [],
    tempUV = [],
    tempHoles = [],
    // 记录当前顶点数量，用于索引偏移
    vertexOffset = position.length / 3

  let i, j

  // 第一步：添加所有顶点（每个原始顶点生成上下两个顶点，形成侧面）
  for (i = 0; i < vertices.length; i += dimensions) {
    // 上顶点（有高度）
    tempVertex[0] = +Math.round(vertices[i])
    tempVertex[1] = +Math.round(vertices[i + 1])
    tempVertex[2] = +Math.round(height)
    position.push(...tempVertex)
    normal.push(0, 0, 0)

    // 下顶点（高度为0）
    tempVertex[2] = 0
    position.push(...tempVertex)
    normal.push(0, 0, 0)
  }

  // 确定第一个轮廓的结束位置
  const firstContourEnd =
    holes && holes.length > 0 ? holes[0] : vertices.length / dimensions

  // 存储所有轮廓的起始和结束位置
  let contourStart, contourEnd
  tempHoles.push([0, firstContourEnd])

  // 处理所有孔洞轮廓
  const holesCount = holes.length
  for (i = 0; i < holesCount; i++) {
    contourStart = holes[i]
    contourEnd =
      i < holesCount - 1 ? holes[i + 1] : vertices.length / dimensions
    tempHoles.push([contourStart, contourEnd])
  }

  // 用于UV坐标计算的累计长度
  let cumulativeLength, isFirstContour, isClockwise

  // 第二步：处理每个轮廓，生成侧面三角形
  for (i = 0; i < tempHoles.length; i++) {
    // 获取当前轮廓的起始和结束位置
    const [contourStart, contourEnd] = tempHoles[i]

    // 判断是否为外部轮廓
    isFirstContour = i === 0

    // 判断轮廓方向（顺时针或逆时针）
    isClockwise =
      isFirstContour ===
      mV(
        vertices,
        contourStart * dimensions,
        contourEnd * dimensions,
        dimensions,
      )

    // 初始化累计长度（用于UV坐标）
    cumulativeLength = 0

    // 根据轮廓方向选择不同的处理方式
    if (isClockwise) {
      // 顺时针轮廓处理
      for (j = contourStart + 1; j < contourEnd; j++) {
        // 计算当前段的四个顶点索引（形成一个四边形）
        let quadIndex = 2 * (j - 1) + vertexOffset
        quadIndex *= 3

        // 获取四边形的四个顶点坐标
        tempVector1[0] = position[quadIndex]
        tempVector1[1] = position[quadIndex + 1]
        tempVector1[2] = position[quadIndex + 2]

        tempVector2[0] = position[quadIndex + 3]
        tempVector2[1] = position[quadIndex + 4]
        tempVector2[2] = position[quadIndex + 5]

        quadIndex = 2 * j + vertexOffset
        quadIndex *= 3

        tempVector3[0] = position[quadIndex]
        tempVector3[1] = position[quadIndex + 1]
        tempVector3[2] = position[quadIndex + 2]

        tempVector4[0] = position[quadIndex + 3]
        tempVector4[1] = position[quadIndex + 4]
        tempVector4[2] = position[quadIndex + 5]

        // 计算UV坐标
        quadIndex = 2 * (j - 1) + vertexOffset
        quadIndex *= 2

        uv[quadIndex] = cumulativeLength
        uv[quadIndex + 1] = 1
        uv[quadIndex + 2] = cumulativeLength
        uv[quadIndex + 3] = 0

        // 更新累计长度（用于UV坐标）
        cumulativeLength += pV(dV(tempUV, tempVector4, tempVector2))

        quadIndex = 2 * j + vertexOffset
        quadIndex *= 2

        uv[quadIndex] = cumulativeLength
        uv[quadIndex + 1] = 1
        uv[quadIndex + 2] = cumulativeLength
        uv[quadIndex + 3] = 0

        // 计算法线
        gV(tempVector2, tempVector4, tempVector1, tempNormal1, false)
        gV(tempVector4, tempVector3, tempVector1, tempNormal2, false)

        // 更新顶点法线
        quadIndex = 2 * (j - 1) + vertexOffset
        quadIndex *= 3

        normal[quadIndex] += tempNormal1[0] + tempNormal2[0]
        normal[quadIndex + 1] += tempNormal1[1] + tempNormal2[1]
        normal[quadIndex + 2] += tempNormal1[2] + tempNormal2[2]

        normal[quadIndex + 3] += tempNormal1[0]
        normal[quadIndex + 4] += tempNormal1[1]
        normal[quadIndex + 5] += tempNormal1[2]

        quadIndex = 2 * j + vertexOffset
        quadIndex *= 3

        normal[quadIndex] += tempNormal2[0]
        normal[quadIndex + 1] += tempNormal2[1]
        normal[quadIndex + 2] += tempNormal2[2]

        normal[quadIndex + 3] += tempNormal1[0] + tempNormal2[0]
        normal[quadIndex + 4] += tempNormal1[1] + tempNormal2[1]
        normal[quadIndex + 5] += tempNormal1[2] + tempNormal2[2]

        // 添加三角形索引（两个三角形组成一个四边形）
        quadIndex = 2 * (j - 1) + vertexOffset
        index.push(quadIndex + 1, quadIndex + 3, quadIndex)
        index.push(quadIndex + 3, quadIndex + 2, quadIndex)
      }
    } else {
      // 逆时针轮廓处理
      for (j = contourEnd - 2; j >= contourStart; j--) {
        // 计算当前段的四个顶点索引（形成一个四边形）
        let quadIndex = 2 * (j + 1) + vertexOffset
        quadIndex *= 3

        // 获取四边形的四个顶点坐标
        tempVector1[0] = position[quadIndex]
        tempVector1[1] = position[quadIndex + 1]
        tempVector1[2] = position[quadIndex + 2]

        tempVector2[0] = position[quadIndex + 3]
        tempVector2[1] = position[quadIndex + 4]
        tempVector2[2] = position[quadIndex + 5]

        quadIndex = 2 * j + vertexOffset
        quadIndex *= 3

        tempVector3[0] = position[quadIndex]
        tempVector3[1] = position[quadIndex + 1]
        tempVector3[2] = position[quadIndex + 2]

        tempVector4[0] = position[quadIndex + 3]
        tempVector4[1] = position[quadIndex + 4]
        tempVector4[2] = position[quadIndex + 5]

        // 计算UV坐标
        quadIndex = 2 * (j + 1) + vertexOffset
        quadIndex *= 2

        uv[quadIndex] = cumulativeLength
        uv[quadIndex + 1] = 1
        uv[quadIndex + 2] = cumulativeLength
        uv[quadIndex + 3] = 0

        // 更新累计长度（用于UV坐标）
        cumulativeLength += pV(dV(tempUV, tempVector4, tempVector2))

        quadIndex = 2 * j + vertexOffset
        quadIndex *= 2

        uv[quadIndex] = cumulativeLength
        uv[quadIndex + 1] = 1
        uv[quadIndex + 2] = cumulativeLength
        uv[quadIndex + 3] = 0

        // 计算法线
        gV(tempVector2, tempVector4, tempVector1, tempNormal1, false)
        gV(tempVector4, tempVector3, tempVector1, tempNormal2, false)

        // 更新顶点法线
        quadIndex = 2 * (j + 1) + vertexOffset
        quadIndex *= 3

        normal[quadIndex] += tempNormal1[0] + tempNormal2[0]
        normal[quadIndex + 1] += tempNormal1[1] + tempNormal2[1]
        normal[quadIndex + 2] += tempNormal1[2] + tempNormal2[2]

        normal[quadIndex + 3] += tempNormal1[0]
        normal[quadIndex + 4] += tempNormal1[1]
        normal[quadIndex + 5] += tempNormal1[2]

        quadIndex = 2 * j + vertexOffset
        quadIndex *= 3

        normal[quadIndex] += tempNormal2[0]
        normal[quadIndex + 1] += tempNormal2[1]
        normal[quadIndex + 2] += tempNormal2[2]

        normal[quadIndex + 3] += tempNormal1[0] + tempNormal2[0]
        normal[quadIndex + 4] += tempNormal1[1] + tempNormal2[1]
        normal[quadIndex + 5] += tempNormal1[2] + tempNormal2[2]

        // 添加三角形索引（两个三角形组成一个四边形）
        quadIndex = 2 * (j + 1) + vertexOffset
        index.push(quadIndex + 1, quadIndex - 1, quadIndex)
        index.push(quadIndex - 1, quadIndex - 2, quadIndex)
      }
    }
  }

  // 第三步：归一化所有法线向量
  for (i = 3 * vertexOffset; i < normal.length; i += 3) {
    tempNormal1[0] = normal[i]
    tempNormal1[1] = normal[i + 1]
    tempNormal1[2] = normal[i + 2]

    // 归一化法线向量
    fV(tempNormal1, tempNormal1)

    // 更新法线数组
    ;[normal[i], normal[i + 1], normal[i + 2]] = tempNormal1
  }
}

/**
 * 将地理特征数据转换为3D几何体数据结构
 * 这个函数处理GeoJSON格式的特征集合，将其转换为可在3D渲染中使用的顶点数据
 * @param {Object} geoData - 输入的地理数据对象，包含features数组
 * @param {Object} boundingBox - 地理边界框配置参数
 * @returns {Object} 处理后的几何体数据，包含索引、位置、法线、纹理坐标和组信息
 */
function bV(geoData, boundingBox) {
  // 顶部面几何体数据结构
  const topGeometry = {
      index: [], // 顶点索引数组
      position: [], // 顶点位置数组
      normal: [], // 法线向量数组
      uv: [], // 纹理坐标数组
    },
    // 侧面几何体数据结构
    sideGeometry = {
      index: [], // 顶点索引数组
      position: [], // 顶点位置数组
      normal: [], // 法线向量数组
      uv: [], // 纹理坐标数组
    }

  let featureIndex, currentFeature, coordinates

  // 遍历所有地理特征
  for (
    featureIndex = 0;
    featureIndex < geoData.features.length;
    featureIndex++
  ) {
    currentFeature = geoData.features[featureIndex]
    coordinates = currentFeature.geometry.coordinates

    // 处理顶部面几何体
    yV(topGeometry, {
      coordinates: coordinates,
      bbox: boundingBox,
      height: 1, // 设置高度为1
    })

    // 处理侧面几何体
    vV(sideGeometry, {
      coordinates: coordinates,
      bbox: boundingBox,
      height: 1, // 设置高度为1
    })
  }

  // 合并后的最终几何体数据结构
  const mergedGeometry = {
    index: [], // 顶点索引数组
    position: [], // 顶点位置数组
    normal: [], // 法线向量数组
    uv: [], // 纹理坐标数组
    group: [], // 组信息数组，用于区分顶部和侧面
  }

  // 将顶部面和侧面的几何体数据合并到最终结果中
  // 0 表示顶部面, 1 表示侧面
  xV(0, mergedGeometry, topGeometry) // 添加顶部面数据
  xV(1, mergedGeometry, sideGeometry) // 添加侧面数据

  return mergedGeometry
}

/**
 * 将处理后的几何体数据添加到目标对象中
 * @param {number} groupId - 组标识符，0表示顶部面，1表示侧面
 * @param {Object} targetGeometry - 目标几何体对象，包含index、position、normal、uv和group数组
 * @param {Object} sourceGeometry - 源几何体数据，包含index、position、normal和uv数组
 */
function xV(groupId, targetGeometry, sourceGeometry) {
  _V(targetGeometry, sourceGeometry, 'index')
  _V(targetGeometry, sourceGeometry, 'position')
  _V(targetGeometry, sourceGeometry, 'normal')
  _V(targetGeometry, sourceGeometry, 'uv')
  targetGeometry.group.push(
    groupId,
    sourceGeometry.index.length,
    sourceGeometry.position.length / 3,
  )
}

export {bV, vV}
