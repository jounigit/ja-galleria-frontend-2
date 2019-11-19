import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import { PictureList, PictureData } from './components/Picture'
import { Home } from './components/Home'
import { CategoryList } from './components/Category/'
import { AlbumList, AlbumData } from './components/Album'

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
            <Route path="/albums/:id"><AlbumData /></Route>
            <Route path="/albums"><AlbumList /></Route>
            <Route path="/categories"><CategoryList /></Route>
            <Route path="/pictures/:id"><PictureData /></Route>
            <Route path="/pictures"><PictureList /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
