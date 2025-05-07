import gsap from 'gsap'
import MapControlStudy from '.'

export function initGsapTimeLine(this: MapControlStudy) {
  const timeLine = gsap.timeline()
  timeLine.addLabel('focusMap', 2)
  timeLine.addLabel('focusMapOpacity', 2.5)
  timeLine.addLabel('bar', 3.5)
  timeLine.add(
    gsap.to(this.camera.instance!.position, {
      duration: 2.5,
      x: -20.460391656828197,
      y: 19.30487264306655,
      z: 58.37802626943616,
      ease: 'circ.out',
    }),
  )
  timeLine.add(
    gsap.to(this.camera.instance!.position, {
      duration: 2.5,
      x: -0.2515849818960619,
      y: 12.397744557047988,
      z: 14.647659671139275,
      ease: 'circ.out',
    }),
  )

  if (this.rotateBorder1 && this.rotateBorder2) {
    timeLine.to(
      this.rotateBorder1.scale,
      {
        delay: 0.3,
        duration: 2,
        x: 1,
        y: 1,
        z: 1,
        ease: 'circ.out',
      },
      'focusMapOpacity',
    )
    timeLine.to(
      this.rotateBorder2.scale,
      {
        duration: 2,
        x: 1,
        y: 1,
        z: 1,
        ease: 'circ.out',
      },
      'focusMapOpacity',
    )
  }

  if (this.focusMapGroup) {
    timeLine.to(
      this.focusMapGroup.position,
      {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
        ease: 'circ.out',
      },
      'focusMapOpacity',
    )
    timeLine.to(
      this.focusMapGroup.scale,
      {
        duration: 2,
        x: 1,
        y: 1,
        z: 1,
        ease: 'circ.out',
      },
      'focusMapOpacity',
    )
  }

  if (this.focusMapTopMaterial) {
    timeLine.to(
      this.focusMapTopMaterial,
      {
        duration: 2,
        opacity: 1,
      },
      'focusMapOpacity',
    )
  }

  if (this.zhejiangLineMaterial) {
    timeLine.to(
      this.zhejiangLineMaterial,
      {
        duration: 2,
        opacity: 1,
      },
      'focusMapOpacity',
    )
  }
}
