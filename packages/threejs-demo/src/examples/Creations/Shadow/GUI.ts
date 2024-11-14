import * as THREE from 'three'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'

const cameraConfig = {
  fov: 35, // 50 70
  viewX: 6.6, // 0
  viewY: 2.2, // 2
  viewZ: 6.6, // 5
}

const pointLightConfig = {
  viewX: 0,
  viewY: 1.8,
  viewZ: 1.2,
}

export default function initGUI(
  camera: THREE.PerspectiveCamera,
  container: HTMLElement,
  pointLight: THREE.PointLight,
) {
  const div = document.createElement('div')
  container.appendChild(div)
  div.style.position = 'absolute'
  div.style.zIndex = '9'
  div.style.right = '0'
  div.style.top = '0'

  const gui = new GUI({container: div, title: 'Camera Layers'})

  gui.add(camera.rotation, 'x', -3, 3)
  gui.add(camera.rotation, 'y', -5, 1.3, 0.1)
  gui.add(camera.rotation, 'z', -10, 10)

  const cameraFolder = gui.addFolder('相机属性设置')

  cameraFolder
    .add(cameraConfig, 'fov', 0, 100)
    .name('修改相机远近')
    .onChange(num => {
      cameraConfig.fov = num
      camera.fov = num
      camera.updateProjectionMatrix()
    })
  cameraFolder
    .add(cameraConfig, 'viewX', -100, 100, 0.1)
    .name('修改视角-x')
    .onChange(num => {
      console.log('x', num)
      cameraConfig.viewX = num
      camera.position.set(
        cameraConfig.viewX,
        cameraConfig.viewY,
        cameraConfig.viewZ,
      )
    })
  cameraFolder
    .add(cameraConfig, 'viewY', 0, 20, 0.2)
    .name('修改视角-y')
    .onChange(num => {
      console.log('y', num)
      cameraConfig.viewY = num
      camera.position.set(
        cameraConfig.viewX,
        cameraConfig.viewY,
        cameraConfig.viewZ,
      )
    })
  cameraFolder
    .add(cameraConfig, 'viewZ', 0, 100)
    .name('修改视角-z')
    .onChange(num => {
      console.log('z', num)
      cameraConfig.viewZ = num
      camera.position.set(
        cameraConfig.viewX,
        cameraConfig.viewY,
        cameraConfig.viewZ,
      )
    })

  const pointLightFolder = gui.addFolder('点光源设置')
  pointLightFolder.add(pointLight, 'intensity', 1, 10, 0.00001)
  pointLightFolder.add(pointLight, 'distance', 0, 100, 0.00001)
  pointLightFolder.add(pointLight, 'decay', 0, 10, 0.00001)
  pointLightFolder
    .add(pointLightConfig, 'viewX', -30, 50, 1)
    .name('修改视角-x')
    .onChange(num => {
      console.log(pointLightConfig)
      pointLightConfig.viewX = num
      pointLight.position.set(
        pointLightConfig.viewX,
        pointLightConfig.viewY,
        pointLightConfig.viewZ,
      )
    })
  pointLightFolder
    .add(pointLightConfig, 'viewY', -100, 100, 0.3)
    .name('修改视角-y')
    .onChange(num => {
      pointLightConfig.viewY = num
      pointLight.position.set(
        pointLightConfig.viewX,
        pointLightConfig.viewY,
        pointLightConfig.viewZ,
      )
    })
  pointLightFolder
    .add(pointLightConfig, 'viewZ', 0, 10)
    .name('修改视角-z')
    .onChange(num => {
      pointLightConfig.viewZ = num
      pointLight.position.set(
        pointLightConfig.viewX,
        pointLightConfig.viewY,
        pointLightConfig.viewZ,
      )
    })

  gui.open()

  return gui
}
