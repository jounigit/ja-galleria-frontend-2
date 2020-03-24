import React, {
  createContext,
} from 'react'
import {  Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './App.css'
import { ResponsiveContainer } from './components/UI/containers/ResponsiveContainer'
import * as routes from './shared/constants/routes'

import { PictureData, PictureList } from './components/Picture'
import { Home } from './components/Home'
import { CategoryData } from './components/Category'
import { AlbumList, AlbumDetails } from './components/Album'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Footer from './components/UI/footers/AppFooter'
import Admin from './components/Admin/Admin'

export const AuthContext = createContext()

const App = () => {

  return (
    <Container>
      <Switch>
        <Route path={routes.ADMIN} component={Admin} />
        <ResponsiveContainer>
          <Route path={routes.CATEGORIES} component={CategoryData} />
          <Route path={routes.ALBUM} component={AlbumDetails} />
          <Route path={routes.ALBUMS} component={AlbumList} />
          <Route path={routes.PICTURE} component={PictureData} />
          <Route path={routes.PICTURES} component={PictureList} />
          <Route path={routes.LOGIN} component={Login} />
          <Route path={routes.SIGNUP} component={Signup} />
          <Route path={routes.HOME} component={Home} />
          <Route exact path="/" component={Home} />
        </ResponsiveContainer>
      </Switch>
      <Footer />
    </Container>
  )
}

export default App