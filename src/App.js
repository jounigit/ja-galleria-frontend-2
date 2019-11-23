import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import { Pictures } from './components/Picture'
import { Home } from './components/Home'
import { CategoryList } from './components/Category/'
import { Albums } from './components/Album'

const App = () => {

  const padding = { padding: 5 }

  return (
    <div>
      <Router>
        <div>
          <div>
            <Link style={padding} to="/">home</Link>
            <Link style={padding} to="/categories">categories</Link>
            <Link style={padding} to="/albums">albums</Link>
            <Link style={padding} to="/pictures">pictures</Link>
          </div>
          <Switch>
            <Route path="/albums/:id"><Albums /></Route>
            <Route path="/albums"><Albums /></Route>
            <Route path="/categories"><CategoryList /></Route>
            <Route path="/pictures/:id"><Pictures /></Route>
            <Route path="/pictures"><Pictures /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
