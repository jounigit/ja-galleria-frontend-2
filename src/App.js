import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import './App.css'
import { Pictures } from './components/Picture'
import { Home } from './components/Home'
import { Categories } from './components/Category/'
import { Albums } from './components/Album'

const App = () => {

  return (
    <Container>
      <Router>
        <div>
          <div>
            <Menu inverted>
              <Menu.Item link>
                <Link to="/">home</Link>
              </Menu.Item>
              <Menu.Item link>
                <Link  to="/categories">categories</Link>
              </Menu.Item>
              <Menu.Item link>
                <Link  to="/albums">albums</Link>
              </Menu.Item>
              <Menu.Item link>
                <Link  to="/pictures">pictures</Link>
              </Menu.Item>
              {/* <Menu.Item link>
                {user
                  ? <em>{user} logged in</em>
                  : <Link to="/login">login</Link>
                }
              </Menu.Item> */}
            </Menu>
          </div>
          <Switch>
            <Route path="/albums/:id"><Albums /></Route>
            <Route path="/albums"><Albums /></Route>
            <Route path="/categories"><Categories /></Route>
            <Route path="/pictures/:id"><Pictures /></Route>
            <Route path="/pictures"><Pictures /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </Container>
  )
}

export default App
