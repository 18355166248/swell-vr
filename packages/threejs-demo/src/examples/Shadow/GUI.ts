import * as THREE from 'three'
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'

const cameraConfig = {
  fov: 50,
  viewX: 0,
  viewY: 2,
  viewZ: 5,
}

export default function initGUI(
  camera: THREE.PerspectiveCamera,
  container: HTMLElement,
) {
  const div = document.createElement('div')
  container.appendChild(div)
  div.style.position = 'absolute'
  div.style.zIndex = '9'
  div.style.right = '0'
  div.style.top = '0'

  const gui = new GUI({container: div, title: 'Camera Layers'})
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
    .add(cameraConfig, 'viewX', -50, 50)
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
    .add(cameraConfig, 'viewY', 0, 100)
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

  gui.open()

  return gui
}
