import {Suspense, useEffect, useMemo} from 'react'
import './app.less'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {routerKeys} from './router'

const prefixTitle = 'ThreeJS-Demo'

function App() {
  const keys = routerKeys
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/${routerKeys[0]}`)
    }
  }, [location])

  const active = useMemo(() => {
    return location.pathname.substring(1)
  }, [location.pathname])

  useEffect(() => {
    document.title = `${prefixTitle}: ${active}`
  }, [active])

  function goRoute(key: string) {
    navigate(`/${key}`)
  }

  return (
    <div className="app">
      <div className="tab">
        {keys.map(key => (
          <div
            className={`tab-item ${active === key ? 'active' : ''}`}
            key={key}
            onClick={() => goRoute(key)}
          >
            {key}
          </div>
        ))}
      </div>
      <div className="content w-full h-full">
        <Suspense fallback={<div></div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default App
