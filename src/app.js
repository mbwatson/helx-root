import React, { Suspense } from 'react'
import { Layout, Menu } from 'antd'
import "antd/dist/antd.css";
import { Link, Router } from '@reach/router'
import HeLxLogo from './images/helx-logo.png'
import './app.scss'
const { Content } = Layout
const { SubMenu } = Menu

const Home           = () => <div><h1>HOME</h1></div>
const Workspaces     = () => <div><h1>WORKSPACES</h1></div>
const SemanticSearch = React.lazy(() => import('search/App'))

const Brand = () => {
  return (
    <div className="brand">
      <img src={ HeLxLogo } width="80" className="logo" />
      <span className="name">The HEAL Initiative</span>
    </div>
  )
}

export const App = () => {
  return (
    <div className="app">
      <div className="main-header">
        <Brand />
        <Menu mode="horizontal" className="main-menu">
          <Menu.Item><Link to="/" className="menu-item">HOME</Link></Menu.Item>
          <Menu.Item><Link to="/workspaces" className="menu-item">WORKSPACES</Link></Menu.Item>
          <Menu.Item><Link to="/search" className="menu-item">SEARCH</Link></Menu.Item>
        </Menu>
      </div>
      <div className="main-content">
        <Suspense fallback={ <div className="loading">Loading... </div> }>
          <Router>
            <Home exact path="/" />
            <Workspaces exact path="/workspaces" />
            <SemanticSearch exact path="/search" />
          </Router>
        </Suspense>
      </div>
    </div>
  )
}
