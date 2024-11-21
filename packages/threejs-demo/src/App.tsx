import {Suspense, useEffect, useMemo, useRef} from 'react'
import './app.less'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {routerKeys} from './router'
import {recurve} from './utils/recurve'
import {Menu, MenuProps} from 'antd'

const prefixTitle = 'ThreeJS'

function App() {
  const keys = routerKeys
  const location = useLocation()
  const navigate = useNavigate()

  const leftMenuRef = useRef<HTMLDivElement>(null)

  const paths = useMemo(() => {
    return recurve(keys)
  }, [keys])

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/${routerKeys[0]}`)
    }
  }, [location])

  const active = useMemo(() => {
    return location.pathname.substring(1)
  }, [location.pathname])

  useEffect(() => {
    document.title = `${prefixTitle}: ${decodeURIComponent(active)}`
  }, [active])

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
    // setCurrent(e.key)
    navigate(e.key)
  }

  return (
    <div className="app">
      <div
        ref={leftMenuRef}
        className="left-menu fixed z-[1000] left-0 top-0 h-full"
      >
        <div className="inline-menu h-full  bg-[#001529] overflow-y-auto">
          <Menu
            mode="inline"
            theme="dark"
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={paths}
            inlineCollapsed
            getPopupContainer={() => leftMenuRef.current as HTMLElement}
          />
          <div className="h-4"></div>
        </div>
      </div>
      {/* <div className="tab">
        {keys.map(key => (
          <div
            className={`tab-item ${active === key ? 'active' : ''}`}
            key={key}
            onClick={() => goRoute(key)}
          >
            {key}
          </div>
        ))}
      </div> */}
      <div className="content w-full h-full">
        <Suspense fallback={<div></div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default App
