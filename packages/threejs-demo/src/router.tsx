import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import {ElementType, lazy} from 'react'

const examples = import.meta.glob<ElementType>(
  ['./examples/*/*/index.ts', './examples/*/*/index.tsx'],
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

const routerJSON = [
  {
    path: '/',
    element: <App />,
    children: Object.keys(componentEnum).map(key => {
      const Comp = lazy(
        () => Promise.resolve(componentEnum[key]) as never,
      ) as unknown as ElementType

      return {
        path: `/${key}`,
        element: <Comp />,
      }
    }),
  },
]

export const routerKeys = Object.keys(componentEnum)
export const router = createBrowserRouter(routerJSON)
