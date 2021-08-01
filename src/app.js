import React, { Fragment, Suspense } from 'react'
import { Layout, Menu, Spin, Typography } from 'antd'
import "antd/dist/antd.css";
import { Link, Router } from '@reach/router'
import HeLxLogo from './images/helx-logo.png'
import './app.scss'
import { Home, Support, Workspaces } from './views'

const { Content } = Layout
const { SubMenu } = Menu
const { Title } = Typography

//

const workspacesEnabled = process.env.ENABLE_WORKSPACES
const searchEnabled = process.env.ENABLE_SEARCH

const locations = [
  { text: 'HOME', path: '/', Component: Home },
]

if (workspacesEnabled) {
  locations.push({ text: 'WORKSPACES', path: '/workspaces', Component: workspacesEnabled ? () => <Workspaces /> : null })
}

if (searchEnabled) {
  locations.push({ text: 'SEARCH', path: '/search', Component: searchEnabled ? React.lazy(() => import('search/App')) : null })
}

locations.push({ text: 'SUPPORT', path: '/support', Component: Support })

//

const Brand = () => {
  return (
    <div className="brand">
      <img src={ HeLxLogo } width="100" className="logo" />
      <span className="name">The HEAL Initiative</span>
    </div>
  )
}

//

export const App = () => {
  return (
    <div className="app">
      <div className="main-header">
        <Brand />
        <Menu mode="horizontal" className="main-menu">
          { locations.map(({ text, path }) => <Menu.Item key={ text }><Link to={ path } className="menu-item">{ text }</Link></Menu.Item>) }
        </Menu>
      </div>
      <div className="main-content">
        <Suspense fallback={ <Spin className="loading" /> }>
          <Router>
            { locations.map(({ text, path, Component }) => <Component key={ text } exact path={ path } />) }
          </Router>
        </Suspense>
      </div>
    </div>
  )
}
