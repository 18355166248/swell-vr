import {useMemo, useState} from 'react'
import './app.less'
import Texture from './examples/Texture'
import Seed from './utils'
import Css2DLabel from './examples/Css2DLabel'

const tabList = {
  Texture,
  Seed,
  Css2DLabel,
}

const prefixTitle = 'Three.JS-Demo'

type TabKeys = keyof typeof tabList

function App() {
  const [active, setActive] = useState<TabKeys>('Css2DLabel')
  const keys = Object.keys(tabList) as TabKeys[]

  const Component = useMemo(() => {
    document.title = `${prefixTitle}: ${active}`
    return tabList[active]
  }, [active])

  return (
    <div className="app">
      <div className="tab">
        {keys.map(key => (
          <div
            className={`tab-item ${active === key ? 'active' : ''}`}
            key={key}
            onClick={() => setActive(key)}
          >
            {key}
          </div>
        ))}
      </div>
      <div className="content">
        <Component />
      </div>
    </div>
  )
}

export default App
