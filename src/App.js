import React, {
  createContext,
  useEffect,
  // lazy,
  Suspense
} from 'react'
import {  Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './App.css'
import { ResponsiveContainer } from './components/UI/containers/ResponsiveContainer'
import * as routes from './shared/constants/routes'
import apiService from './services/apiService'

import { PictureData } from './components/Picture'
import { Home } from './components/Home'
import { CategoryData } from './components/Category'
import { AlbumData } from './components/Album'
import Login from './components/Login/Login'
import Footer from './components/UI/footers/AppFooter'

export const AuthContext = createContext()

// reducer
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}
const reducer = (state, action) => {
  switch (action.type) {
  case 'LOGIN':
    localStorage.setItem('user', JSON.stringify(action.payload.user))
    localStorage.setItem('token', JSON.stringify(action.payload.token))
    // set token for api
    apiService.setToken(state.token)
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      token: action.payload.token
    }
  case 'LOGGEDIN':
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      token: action.payload.token
    }
  case 'LOGOUT':
    localStorage.clear()
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      token: null
    }
  default:
    return state
  }
}
// endreducer

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  useEffect(() => {
    let storageToken = JSON.parse(localStorage.getItem('token'))
    let storageUser = JSON.parse(localStorage.getItem('user'))
    apiService.setToken(state.token)
    const loggedUser = {
      token: storageToken,
      user: storageUser
    }
    if (storageUser && state.user === null) {
      // set token for api

      dispatch({ type: 'LOGGEDIN', payload: loggedUser })
    }
  }, [state])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContext.Provider value={{ state, dispatch }}>
        <Container>
          <ResponsiveContainer>
            <Switch>
              <Route path={routes.CATEGORIES} component={CategoryData} />
              <Route path={routes.ALBUM} component={AlbumData} />
              <Route path={routes.ALBUMS} component={AlbumData} />
              <Route path={routes.PICTURE} component={PictureData} />
              <Route path={routes.PICTURES} component={PictureData} />
              {/* <Route path={routes.ADMIN} component={Admin} /> */}
              <Route path={routes.LOGIN} component={Login} />
              <Route component={Home} />
            </Switch>
          </ResponsiveContainer>
          <Footer />
        </Container>
      </AuthContext.Provider>
    </Suspense>
  )
}

export default App
{/* <Switch>
            <Route path='/login'><Login /></Route>
            <Route path='/albums/:id'><AlbumData /></Route>
            <Route path='/albums'><AlbumData /></Route>
            <Route path='/categories'><CategoryData /></Route>
            <Route path='/pictures/:id'><PictureData /></Route>
            <Route path='/pictures'><PictureData /></Route>
            <Route path='/'><Home /></Route>
          </Switch> */}