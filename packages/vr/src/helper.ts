import * as THREE from 'three'
import {DeepPartial, DeepRequired, ThreeObjectBase} from './types'

let raycaster: THREE.Raycaster
let mouseVector: THREE.Vector2

function getRaycasterAndMouse() {
  if (!raycaster) raycaster = new THREE.Raycaster()
  if (!mouseVector) mouseVector = new THREE.Vector2()
  return {
    raycaster,
    mouse: mouseVector,
  }
}

/**
 * 获取依赖函数
 */
export type GetAddListenerToThreeObjectDeps = () => {
  camera?: THREE.PerspectiveCamera
  scene?: THREE.Scene
  renderer?: THREE.WebGLRenderer
}

export type ThreeObjectDispatchEvent<T extends keyof HTMLElementEventMap> = {
  type: T
  intersect: THREE.Intersection
  sourceEvent: HTMLElementEventMap[T]
  isMouseDown: boolean
}

/**
 * 纹理缓存加载器
 */
export class TextureCacheLoader {
  static instance: TextureCacheLoader
  static getInstance() {
    if (!TextureCacheLoader.instance)
      TextureCacheLoader.instance = new TextureCacheLoader()
    return TextureCacheLoader.instance
  }

  /**
   * 缓存
   */
  private cache = new Map<string, THREE.Texture>()

  /**
   * 加载器 https://threejs.org/docs/#api/zh/loaders/TextureLoader
   */
  private loader = new THREE.TextureLoader()

  /**
   * 根据单个链接加载纹理
   * @param url 图片链接
   * @returns 返回纹理
   */
  loadUrl(url: string) {
    if (this.cache.has(url)) return this.cache.get(url)
    const texture = this.loader.load(url)
    this.cache.set(url, texture)
    return texture
  }

  /**
   * 根据多个链接加载纹理
   * @param urls 图片链接数组
   * @returns 返回纹理数组
   */
  loadUrls(urls: string[]) {
    return urls.map(url => this.loadUrl(url))
  }
}

/**
 * 处理位置、缩放、旋转等基础信息默认值
 * @param baseInfo 位置、缩放、旋转信息
 * @returns 返回位置、缩放、旋转等基础信息
 */
export function formatBaseInfo(
  baseInfo: DeepPartial<ThreeObjectBase> | undefined,
): DeepRequired<ThreeObjectBase> {
  return {
    position: {
      x: baseInfo?.position?.x ?? 0,
      y: baseInfo?.position?.y ?? 0,
      z: baseInfo?.position?.z ?? 0,
    },
    rotate: {
      x: baseInfo?.rotate?.x ?? 0,
      y: baseInfo?.rotate?.y ?? 0,
      z: baseInfo?.rotate?.z ?? 0,
    },
    scale: {
      x: baseInfo?.scale?.x ?? 1,
      y: baseInfo?.scale?.y ?? 1,
      z: baseInfo?.scale?.z ?? 1,
    },
  }
}

/**
 * 更新 threejs 3d 对象的位置、缩放、旋转等基础信息
 * @param object threejs 3d 对象
 * @param baseInfo 位置、缩放、旋转信息
 */
export function update3dObjectBaseInfo(
  object: THREE.Object3D,
  baseInfo: Partial<ThreeObjectBase>,
): void {
  const {position, rotate, scale} = baseInfo
  if (
    position &&
    !new THREE.Vector3(position.x, position.y, position.z).equals(
      object.position,
    )
  ) {
    object.position.set(position.x, position.y, position.z)
  }

  if (
    scale &&
    !new THREE.Vector3(scale.x, scale.y, scale.z).equals(object.scale)
  ) {
    object.scale.set(scale.x, scale.y, scale.z)
  }

  if (
    rotate &&
    !new THREE.Euler(rotate.x, rotate.y, rotate.z).equals(object.rotation)
  ) {
    object.rotation.set(rotate.x, rotate.y, rotate.z)
  }
}

/**
 * 为 threejs 添加事件监听
 */
export function addListenerToThree(
  getDeps: GetAddListenerToThreeObjectDeps,
  events: (keyof HTMLElementEventMap)[] = [
    'click',
    'mousemove',
    'touchmove',
    'mouseup',
  ],
) {
  const {renderer} = getDeps()
  const renderElement = renderer?.domElement
  if (!renderElement) return

  // 上一个事件的对象
  let preIntersect: THREE.Intersection | undefined

  const {raycaster, mouse} = getRaycasterAndMouse()
  // 鼠标是否处于按压状态，用于传给 tip 判断，在按下鼠标滑动时不显示 tip
  let isMouseDown = false

  renderElement.addEventListener('mousedown', () => {
    isMouseDown = true
  })
  renderElement.addEventListener('mouseup', () => {
    isMouseDown = false
  })

  for (const eventName of events) {
    renderElement.addEventListener(eventName, e =>
      handleEvent(eventName, e as MouseEvent),
    )
  }

  function handleEvent(eventName: string, event: MouseEvent | TouchEvent) {
    event.preventDefault()
    const {camera, scene, renderer} = getDeps()
    if (!camera || !scene || !renderer) return

    const bound = renderer.domElement.getBoundingClientRect()

    const clientX =
      (event as TouchEvent)?.changedTouches?.[0]?.clientX ??
      (event as MouseEvent).clientX
    const clientY =
      (event as TouchEvent)?.changedTouches?.[0]?.clientY ??
      (event as MouseEvent).clientY

    // 通过鼠标点击的位置计算出 raycaster 所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
    mouse.x = ((clientX - bound.left) / renderer.domElement.clientWidth) * 2 - 1
    mouse.y =
      -((clientY - bound.top) / renderer.domElement.clientHeight) * 2 + 1
    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    raycaster.setFromCamera(mouse, camera)
    // 获取raycaster直线和所有模型相交的数组集合。第二个参数表示是否需要递归查找
    const intersects = raycaster.intersectObjects(scene.children)
    // 所有的相交的模型 如果只需要将第一个触发事件，那就数组的第一个
    const firstIntersect = intersects[0] ?? undefined
    if (!firstIntersect || intersects.length <= 0) return

    // 因为mouseover和mouseout会频繁触发 所以这里要做优化
    // 在鼠标移动的时候 去监听 mouseover 和 mouseout 事件
    if (
      ['mousemove', 'touchmove'].includes(eventName) &&
      preIntersect?.object.uuid !== firstIntersect.object.uuid
    ) {
      // 在 mousemove touchmove 事件时, 并且本次鼠标指中的 three 对象和上一个对象不相同时 相当于遇到了 tip 节点

      // 触发上次hover对象的mouseout事件
      preIntersect?.object.dispatchEvent({
        type: 'mouseout',
        intersect: preIntersect,
        sourceEvent: event,
        isMouseDown,
      } as any)
      preIntersect = firstIntersect

      // 触发本次 hover 对象的 mouseover 事件
      firstIntersect?.object.dispatchEvent({
        type: 'mouseover',
        intersect: firstIntersect,
        sourceEvent: event,
        isMouseDown,
      } as any)
    }

    firstIntersect.object.dispatchEvent({
      type: (eventName === 'touchmove' ? 'mousemove' : eventName) as string,
      intersect: firstIntersect,
      sourceEvent: event,
      isMouseDown,
    } as any)
  }
}

/**
 * 获取 threejs 3d 对象的位置、缩放、旋转等基础信息
 * @param object threejs 3d 对象
 * @returns 返回 threejs 3d 对象的位置、缩放、旋转等基础信息
 */
export function get3dObjectBaseInfo(object?: THREE.Object3D): ThreeObjectBase {
  return {
    position: {
      x: object?.position?.x ?? 0,
      y: object?.position?.y ?? 0,
      z: object?.position?.z ?? 0,
    },
    rotate: {
      // x: 0,
      // y: 0,
      // z: 0,
      x: object?.rotation?.x ?? 0,
      y: object?.rotation?.y ?? 0,
      z: object?.rotation?.z ?? 0,
    },
    scale: {
      x: object?.scale?.x ?? 1,
      y: object?.scale?.y ?? 1,
      z: object?.scale?.z ?? 1,
    },
  }
}
