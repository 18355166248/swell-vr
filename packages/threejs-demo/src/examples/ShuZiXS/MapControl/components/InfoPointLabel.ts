/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import {Label3D, Label3DProps} from './label3d'

/**
 * 监测点信息类型定义
 */
export interface MonitoringPointInfo {
  name: string // 监测点名称
  value: number // PM2.5值
  level: string // 污染等级
  lng: number // 经度
  lat: number // 纬度
}

/**
 * 创建信息监测点标签
 * 生成一个包含监测点详细信息的3D标签，显示名称、PM2.5值和污染等级
 *
 * @param pointInfo - 监测点信息，包含名称、数值、等级和坐标
 * @param labelManager - 3D标签管理器实例
 * @param parentGroup - 标签所属的父级3D组
 * @param geoProjection - 地理坐标转换为3D坐标的函数
 * @returns 创建的标签实例
 */
export function createInfoPointLabel(
  pointInfo: MonitoringPointInfo,
  labelManager: Label3D,
  parentGroup: THREE.Group,
  geoProjection: (coords: any) => [number, number] | null,
): Label3DProps {
  // 创建标签实例，设置css类名，使用sprite模式
  const infoLabel = labelManager.create('', 'info-point', true)

  // 转换地理坐标到3D坐标
  const coordinates = geoProjection([pointInfo.lng, pointInfo.lat])
  if (!coordinates) {
    throw new Error(`无法获取坐标: ${pointInfo.lng}, ${pointInfo.lat}`)
  }
  const [posX, posY] = coordinates

  // 初始化标签内容和位置
  infoLabel.init(
    `<div class="info-point-wrap">
      <div class="info-point-wrap-inner">
        <div class="info-point-line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="info-point-content">
          <div class="content-item"><span class="label">名称</span><span class="value">${pointInfo.name}</span></div>
          <div class="content-item"><span class="label">PM2.5</span><span class="value">${pointInfo.value}ug/m²</span></div>
          <div class="content-item"><span class="label">等级</span><span class="value">${pointInfo.level}</span></div>
        </div>
      </div>
    </div>`,
    // 位置设置为地图上方，便于视觉观察
    new THREE.Vector3(posX, -posY, 2.4),
  )

  // 设置标签样式：缩放比例、旋转轴和方向
  labelManager.setLabelStyle(infoLabel, 0.015, 'x')

  // 设置标签父级对象
  infoLabel.setParent(parentGroup)

  // 默认隐藏标签
  infoLabel.hide()

  return infoLabel
}
