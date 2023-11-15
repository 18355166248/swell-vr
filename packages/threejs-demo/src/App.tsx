import {ElementType, Suspense, lazy, useMemo, useState} from 'react'
import './app.less'

// const req = require.context('./', true, /.vue$/)
const examples = import.meta.glob<ElementType>(
  ['./examples/*/index.ts', './examples/*/index.tsx'],
  {
    eager: true,
  },
)
const componentEnum = Object.keys(examples)
  .map(key => {
    const res = key.match(/^\.\/examples\/(.*)\/index\.[tsx|ts]/)
    if (res) {
      const val = {
        key: res[1],
        components: examples[key],
      }
      return val
    }
  })
  .filter(v => !!v)
  .reduce((obj: Record<string, ElementType>, val) => {
    if (val) {
      obj[val.key] = val.components
      return obj
    }
    return obj
  }, {}) as unknown as Record<string, ElementType>

const prefixTitle = 'Three.JS-Demo'

function App() {
  const keys = Object.keys(componentEnum)
  const [active, setActive] = useState(keys[0])

  const Component = useMemo(() => {
    document.title = `${prefixTitle}: ${active}`
    return lazy(() => Promise.resolve(componentEnum[active] as never))
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
        <Suspense fallback={<div></div>}>
          <Component />
        </Suspense>
      </div>
    </div>
  )
}

export default App
