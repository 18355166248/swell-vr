import {useLayoutEffect, useRef, useState} from 'react'
import * as VR from 'swell-vr'
import {spacesConfig} from './config'
import './demo.css'

export default function Css2DLabel() {
  const domRef = useRef<HTMLDivElement>(null)
  const tipRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const VRREf = useRef<InstanceType<typeof VR.Vr360>>()

  const [tipConfig, setTipConfig] = useState<{
    left: number
    top: number
    title: string
    content: string
  }>()

  useLayoutEffect(() => {
    let vr: InstanceType<typeof VR.Vr360>
    if (containerRef.current !== null && tipRef.current !== null) {
      const {Vr360} = VR
      vr = new Vr360({
        container: containerRef.current,
        tipContainer: tipRef.current,
        spacesConfig,
      })
      // 设置全景自动旋转
      vr.controls.autoRotate = true
      vr.render()
      vr.listenResize()
      vr.on(
        'showTip',
        (e: {
          left: number
          top: number
          tip: {content: {title: string; content: string}}
        }) => {
          vr.controls.autoRotate = false

          const {left, top, tip} = e
          const {title, content} = tip.content
          setTipConfig({left, top, title, content})
        },
      )

      vr.on('hideTip', () => {
        vr.controls.autoRotate = true
        setTipConfig(undefined)
      })

      VRREf.current = vr
    }

    return () => {
      vr?.destroy()
    }
  }, [])

  return (
    <div ref={domRef} className="demo">
      {/* 提示 */}
      <div
        ref={tipRef}
        className="demo-tip"
        style={{
          transform: `translate(${tipConfig?.left}px, ${
            (tipConfig?.top || 0) + 60
          }px)`,
          zIndex: tipConfig ? 99 : -1,
          visibility: tipConfig ? 'visible' : 'hidden',
        }}
      >
        {/* 提示标题 */}
        <div className="demo-tip-title">{tipConfig?.title}</div>
        {/* 提示内容 */}
        <div className="demo-tip-content">{tipConfig?.content}</div>
      </div>
      <div ref={containerRef} className="demo-container"></div>
      {/* 底部切换 */}
      <div className="footer">
        {spacesConfig.map(config => (
          <div
            key={config.id}
            className="footer-card"
            style={{
              backgroundImage: `url(${config.cubeSpaceTextureUrls.right})`,
            }}
            onClick={() => {
              VRREf.current?.switchSpace(config.id)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
