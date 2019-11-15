import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import useFetch from './utils/useFetch'
import './App.css'
import { PictureList } from './components/Picture'
import { Home } from './components/Home'
import { CategoryList } from './components/Category/'
import { AlbumList, AlbumData } from './components/Album'
const baseUrl = 'http://localhost:8000/api'

const App = () => {
  const pictures = useFetch(
    `${baseUrl}/pictures`
  )
  const categories = useFetch(
    `${baseUrl}/categories`
  )
  const albums = useFetch(
    `${baseUrl}/albums`
  )

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
            <Route path="/albums"><AlbumList albums={albums} /></Route>
            <Route path="/categories"><CategoryList categories={categories} /></Route>
            <Route path="/pictures"><PictureList pictures={pictures} /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
