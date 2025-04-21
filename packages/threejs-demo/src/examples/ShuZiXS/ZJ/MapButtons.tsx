import React, {useState} from 'react'
import MapControl from '../MapControl'

// 定义按钮组的属性类型
interface MapButtonsProps {
  mapRef: React.MutableRefObject<MapControl | undefined>
}

// 按钮组件
const MapButtons: React.FC<MapButtonsProps> = ({mapRef}) => {
  // 使用独立的state跟踪每个按钮的选中状态，而不是一个对象
  const [flyLineActive, setFlyLineActive] = useState(false)
  const [scatterPointsActive, setScatterPointsActive] = useState(false)
  const [importantPointsActive, setImportantPointsActive] = useState(false)
  const [particleEffectActive, setParticleEffectActive] = useState(false)

  // 处理飞线按钮点击
  const handleFlyLine = () => {
    if (mapRef.current) {
      // 切换按钮状态 - 仅影响飞线按钮
      const newState = !flyLineActive
      setFlyLineActive(newState)

      if (mapRef.current.flyLineGroup && mapRef.current.flyLineFocusGroup) {
        mapRef.current.flyLineGroup.visible = newState
        mapRef.current.flyLineFocusGroup.visible = newState
      }
    }
  }

  // 处理散点图按钮点击
  const handleScatterPoints = () => {
    if (mapRef.current) {
      // 切换按钮状态 - 仅影响散点图按钮
      setScatterPointsActive(!scatterPointsActive)
      // 根据状态决定是否显示散点图
      mapRef.current.scatterGroup!.visible = !scatterPointsActive
    }
  }

  // 处理重点点位按钮点击
  const handleImportantPoints = () => {
    if (mapRef.current) {
      // 切换按钮状态 - 仅影响重点点位按钮
      setImportantPointsActive(!importantPointsActive)
      mapRef.current.InfoPointGroup!.visible = !importantPointsActive
    }
  }

  // 处理粒子特效按钮点击
  const handleParticleEffect = () => {
    if (mapRef.current && mapRef.current.particles) {
      // 切换按钮状态 - 仅影响粒子特效按钮
      setParticleEffectActive(!particleEffectActive)
      mapRef.current.particles.enable = !particleEffectActive
      mapRef.current.particles.instance!.visible = !particleEffectActive
    }
  }

  // 基础按钮样式
  const baseButtonClass =
    'w-20 h-10 rounded-md backdrop-blur-md text-xs flex items-center justify-center transition-colors duration-200 border focus:outline-none focus:ring-0'

  // 激活和未激活状态的样式
  const inactiveButtonClass = `${baseButtonClass} bg-gray-800/80 text-gray-300 hover:bg-gray-700/90 hover:text-white border-gray-700/40`
  const activeButtonClass = `${baseButtonClass} bg-gradient-to-r from-cyan-500/90 to-blue-600/90 text-white border-cyan-400/60 shadow-lg shadow-cyan-500/30 font-medium`

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
      {/* 飞线按钮 */}
      <button
        onClick={handleFlyLine}
        className={flyLineActive ? activeButtonClass : inactiveButtonClass}
        title="飞线"
      >
        飞线
      </button>

      {/* 散点图按钮 */}
      <button
        onClick={handleScatterPoints}
        className={
          scatterPointsActive ? activeButtonClass : inactiveButtonClass
        }
        title="散点图"
      >
        散点图
      </button>

      {/* 重点点位按钮 */}
      <button
        onClick={handleImportantPoints}
        className={
          importantPointsActive ? activeButtonClass : inactiveButtonClass
        }
        title="重点点位"
      >
        重点点位
      </button>

      {/* 粒子特效按钮 */}
      <button
        onClick={handleParticleEffect}
        className={
          particleEffectActive ? activeButtonClass : inactiveButtonClass
        }
        title="粒子特效"
      >
        粒子特效
      </button>
    </div>
  )
}

export default MapButtons
