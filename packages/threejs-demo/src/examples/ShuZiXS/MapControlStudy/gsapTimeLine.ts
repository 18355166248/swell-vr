import gsap from 'gsap'
import MapControlStudy from '.'

export function initGsapTimeLine(this: MapControlStudy) {
  const timeLine = gsap.timeline()
  timeLine.addLabel('focusMapOpacity', 3)
  // timeLine.add(
  //   gsap.to(this.camera.instance!.position, {
  //     duration: 2,
  //     x: -0.2515849818960619,
  //     y: 12.397744557047988,
  //     z: 14.647659671139275,
  //     ease: 'circ.out',
  //   }),
  // )

  if (this.rotateBorder1 && this.rotateBorder2) {
    timeLine.to(
      this.rotateBorder1.scale,
      {
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
}
