import * as THREE from 'three'

/**
 * 生成UUID（通用唯一标识符）
 * @param length 生成的UUID长度，默认为10
 * @param charPoolSize 字符池大小，默认为62（包含数字、大小写字母）
 * @returns 生成的UUID字符串
 */
export function uuid(length = 10, charPoolSize = 62) {
  // 定义字符池，包含数字、大小写字母
  const charPool =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const result = []
  let index = 0

  // 如果指定了长度，生成指定长度的随机UUID
  if (((charPoolSize = charPoolSize || charPool.length), length)) {
    for (index = 0; index < length; index++) {
      result[index] = charPool[0 | (Math.random() * charPoolSize)]
    }
  }
  // 否则生成标准格式的UUID（8-4-4-4-12格式）
  else {
    let randomNum
    // 设置UUID的分隔符和版本号
    for (
      result[8] = result[13] = result[18] = result[23] = '-',
        result[14] = '4',
        index = 0;
      index < 36;
      index++
    ) {
      if (!result[index]) {
        randomNum = 0 | (Math.random() * 16)
        // 确保UUID符合规范（第19位的高位为二进制10xx）
        result[index] = charPool[index == 19 ? (randomNum & 3) | 8 : randomNum]
      }
    }
  }

  return result.join('')
}

/**
 * 标准化GeoJSON数据格式
 * 将Polygon类型的几何体转换为MultiPolygon兼容格式
 * @param jsonString GeoJSON格式的字符串
 * @returns 处理后的GeoJSON对象
 */
export const normalizeGeoJSON = (jsonString: string) => {
  const geoJsonData = JSON.parse(jsonString)
  const features = geoJsonData.features

  // 遍历所有特征
  for (let i = 0; i < features.length; i++) {
    const feature = features[i]

    // 如果是Polygon类型，将坐标数组包装一层，使其与MultiPolygon格式兼容
    if (['Polygon'].includes(feature.geometry.type)) {
      feature.geometry.coordinates = [feature.geometry.coordinates]
    }
  }

  return geoJsonData
}

/**
 * 获取对象的包围盒大小
 * @param e 需要计算包围盒的对象
 * @returns 包含包围盒信息的对象
 */
export function getBoxSize(e) {
  const i = new THREE.Vector3()
  const n = new THREE.Box3()
  n.expandByObject(e)
  const t = new THREE.Vector3()
  n.getSize(t)
  const o = new THREE.Vector3()
  n.getCenter(o)
  const r = {box3: n, boxSize: t, center: o, size: new THREE.Vector3()}
  if (e.geometry) {
    e.geometry.computeBoundingBox()
    e.geometry.computeBoundingSphere()
    const {max: s, min: l} = e.geometry.boundingBox
    i.x = s.x - l.x
    i.y = s.y - l.y
    i.z = s.z - l.z
    r.size = i
  }
  return r
}

// 保留原函数作为兼容性别名
export const M = normalizeGeoJSON
