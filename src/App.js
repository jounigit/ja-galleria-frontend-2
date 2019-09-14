import React from 'react'
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import useFetch from './utils/useFetch'
import './App.css'
import { PictureList } from './components/Picture'
import { Home } from './components/Home'
const App = () => {
  const pictures = useFetch(
    'http://localhost:8000/api/pictures'
  )
  const padding = { padding: 5 }

  return (
    <div>
      <Router>
        <div>
          <div>
            <Link style={padding} to="/">home</Link>
            <Link style={padding} to="/pictures">pictures</Link>
          </div>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/pictures" render={() => <PictureList pictures={pictures} />} />
        </div>
      </Router>
    </div>
  )
}

export default App
