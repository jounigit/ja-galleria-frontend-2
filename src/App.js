import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navigation from './components/Shared/Navigation'
import './App.css'
import { Pictures } from './components/Picture'
import { Home } from './components/Home'
import { Categories, CategoryData } from './components/Category/'
import { Albums } from './components/Album'

const App = () => {

  return (
    <Container>
      <div>
        <Navigation />
      </div>
      <div>
        <Switch>
          <Route path="/albums/:id"><Albums /></Route>
          <Route path="/albums"><Albums /></Route>
          <Route path="/categories"><CategoryData /></Route>
          <Route path="/pictures/:id"><Pictures /></Route>
          <Route path="/pictures"><Pictures /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Container>
  )
}

export default App
