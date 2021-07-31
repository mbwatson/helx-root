import React, { Suspense } from 'react'
import { Layout, Menu } from 'antd'
import "antd/dist/antd.css";
import { Link, Router } from '@reach/router'
import './app.scss'

const { Content } = Layout
const { SubMenu } = Menu

const SemanticSearch = React.lazy(() => import('search/App'))
const Home      = () => <div><h1>HOME</h1></div>
const SearchApp = () => <div><h1>SEARCH</h1></div>
const AppOne    = () => <div><h1>APP ONE</h1></div>
const AppTwo    = () => <div><h1>APP TWO</h1></div>
const AppThree  = () => <div><h1>APP THREE</h1></div>

export const App = () => {
  return (
    <div className="app">
      <div className="main-header">
        <Menu mode="horizontal">
          <Menu.Item><Link to="/">HOME</Link></Menu.Item>
          <Menu.Item><Link to="/1">ONE</Link></Menu.Item>
          <Menu.Item><Link to="/2">TWO</Link></Menu.Item>
          <Menu.Item><Link to="/3">THREE</Link></Menu.Item>
          <Menu.Item><Link to="/search">SEARCH</Link></Menu.Item>
        </Menu>
      </div>
      <div className="main-content">
        <Suspense fallback={ <div className="loading">Loading... </div> }>
          <Router>
            <Home exact path="/" />
            <AppOne exact path="/1" />
            <AppTwo exact path="/2" />
            <AppThree exact path="/3" />
            <SemanticSearch exact path="/search" />
          </Router>
        </Suspense>
      </div>
    </div>
  )
}
