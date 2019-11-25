import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navigation from './components/Shared/Navigation'
import './App.css'
import { PictureData } from './components/Picture'
import { Home } from './components/Home'
import { CategoryData } from './components/Category/'
import { AlbumData } from './components/Album'

const App = () => {

  return (
    <Container>
      <div>
        <Navigation />
      </div>
      <div>
        <Switch>
          <Route path="/albums/:id"><AlbumData /></Route>
          <Route path="/albums"><AlbumData /></Route>
          <Route path="/categories"><CategoryData /></Route>
          <Route path="/pictures/:id"><PictureData /></Route>
          <Route path="/pictures"><PictureData /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Container>
  )
}

export default App
