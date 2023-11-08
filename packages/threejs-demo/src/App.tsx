import './app.less'
import Texture from './examples/Texture'
import Seed from './examples/Seed'
import {useMemo, useState} from 'react'

const tabList = {
  Texture,
  Seed,
}

type TabKeys = keyof typeof tabList

function App() {
  const [active, setActive] = useState<TabKeys>('Texture')
  const keys = Object.keys(tabList) as TabKeys[]

  const Component = useMemo(() => tabList[active], [active])

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
