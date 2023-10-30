import * as THREE from 'three'
import {CubeSpaceTextureUrls, SpaceConfig} from './types'
import {TextureCacheLoader} from './helper'

export type SpaceManagerProps = {
  textureCacheLoader: TextureCacheLoader
}

export class SpaceManager {
  private textureCacheLoader: TextureCacheLoader
  private spaceIdGroupMap = new Map<string, THREE.Group>()

  constructor({textureCacheLoader}: SpaceManagerProps) {
    this.textureCacheLoader = textureCacheLoader
  }

  create(spaceConfig: SpaceConfig) {
    const {cubeSpaceTextureUrls, id} = spaceConfig

    const group = new THREE.Group()

    // 创建空间
    const spaceMesh = this.createCubeSpaceMesh(cubeSpaceTextureUrls)
    spaceMesh.userData.type = 'spaceMesh'

    // 挂载当前 spaceConfig 到 group 上，在事件里面使用（更新时会覆盖这个挂载）
    group.userData.type = 'spaceGroup'
    group.userData.spaceConfig = spaceConfig

    group.add(spaceMesh)
    this.spaceIdGroupMap.set(id, group)

    return group
  }

  createCubeSpaceMesh(cubeSpaceTextureUrls: CubeSpaceTextureUrls) {
    const boxGeometry = new THREE.BoxGeometry(100, 100, 100)
    // 随机挑选一个面翻转扩大，使得贴图能够正常渲染
    boxGeometry.scale(-1, 1, 1)
    // 贴材质
    const boxMaterials = this.createCubeSpaceMaterials(cubeSpaceTextureUrls)
    const spaceMesh = new THREE.Mesh(boxGeometry, boxMaterials)

    return spaceMesh
  }

  // 创建正方体空间材料
  createCubeSpaceMaterials(cubeSpaceTextureUrls: CubeSpaceTextureUrls) {
    const directions = ['right', 'left', 'up', 'down', 'front', 'back'] as const
    const boxMaterials = directions.map(direction => {
      const texture = this.textureCacheLoader.loadUrl(
        cubeSpaceTextureUrls[direction as keyof typeof cubeSpaceTextureUrls],
      )
      return new THREE.MeshBasicMaterial({map: texture})
    })

    return boxMaterials
  }

  /**
   * find
   */
  public find(id: string) {
    return this.spaceIdGroupMap.get(id)
  }
}
