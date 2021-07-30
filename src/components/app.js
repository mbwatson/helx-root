import { Layout, Menu } from 'antd'
import "antd/dist/antd.css";
import { Link, Router } from '@reach/router'

const { Content } = Layout
const { SubMenu } = Menu

const AppHome  = () => <div><h1>HOME</h1></div>
const AppOne   = () => <div><h1>APP ONE</h1></div>
const AppTwo   = () => <div><h1>APP TWO</h1></div>
const AppThree = () => <div><h1>APP THREE</h1></div>

export const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Menu mode="horizontal">
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/1">One</Link></Menu.Item>
          <Menu.Item><Link to="/2">Two</Link></Menu.Item>
          <Menu.Item><Link to="/3">Three</Link></Menu.Item>
        </Menu>
      </div>
      <div className="main-content">
        <Router>
          <AppHome exact path="/" />
          <AppOne exact path="/1" />
          <AppTwo exact path="/2" />
          <AppThree exact path="/3" />
        </Router>
      </div>
    </div>
  )
}
