import * as THREE from 'three'

/**
 * 处理多边形坐标，生成用于BufferGeometry的数据
 * @param polygonCoords 多边形坐标数组
 * @param geometryData 几何体缓冲数据对象
 */
export function processPolygon(
  polygonCoords: number[][][],
  geometryData: {
    index: number[]
    position: number[]
    normal: number[]
    uv: number[]
  },
): void {
  // 外环坐标
  const outerRing = polygonCoords[0]

  // 创建Shape对象用于三角剖分
  const shape = new THREE.Shape()

  // 移动到第一个点
  if (outerRing.length > 0) {
    shape.moveTo(outerRing[0][0], outerRing[0][1])

    // 添加其余的点
    for (let i = 1; i < outerRing.length; i++) {
      shape.lineTo(outerRing[i][0], outerRing[i][1])
    }
  }

  // 处理内环（孔洞）
  if (polygonCoords.length > 1) {
    for (let h = 1; h < polygonCoords.length; h++) {
      const holeCoords = polygonCoords[h]
      const holePath = new THREE.Path()

      if (holeCoords.length > 0) {
        holePath.moveTo(holeCoords[0][0], holeCoords[0][1])

        for (let i = 1; i < holeCoords.length; i++) {
          holePath.lineTo(holeCoords[i][0], holeCoords[i][1])
        }
      }

      shape.holes.push(holePath)
    }
  }

  // 使用THREE.js的三角剖分来生成顶点和索引
  const shapeGeometry = new THREE.ShapeGeometry(shape)
  const positionAttr = shapeGeometry.getAttribute('position')
  const normalAttr = shapeGeometry.getAttribute('normal')
  const uvAttr = shapeGeometry.getAttribute('uv')
  const index = shapeGeometry.getIndex()

  if (index) {
    // 存储顶点索引偏移
    const indexOffset = geometryData.position.length / 3

    // 添加索引数据
    for (let i = 0; i < index.count; i++) {
      geometryData.index.push(index.getX(i) + indexOffset)
    }

    // 添加位置数据
    for (let i = 0; i < positionAttr.count; i++) {
      const x = positionAttr.getX(i)
      const y = positionAttr.getY(i)
      const z = positionAttr.getZ(i) || 0 // z值通常为0，因为GeoJSON是2D的

      geometryData.position.push(x, y, z)
    }

    // 添加法线数据
    for (let i = 0; i < normalAttr.count; i++) {
      const nx = normalAttr.getX(i)
      const ny = normalAttr.getY(i)
      const nz = normalAttr.getZ(i)

      geometryData.normal.push(nx, ny, nz)
    }

    // 添加UV数据
    for (let i = 0; i < uvAttr.count; i++) {
      const u = uvAttr.getX(i)
      const v = uvAttr.getY(i)

      geometryData.uv.push(u, v)
    }
  }
}
