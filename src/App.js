import React, { createContext, useEffect } from 'react'
import {  Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navigation from './components/Shared/Navigation'
import './App.css'
import { PictureData } from './components/Picture'
import { Home } from './components/Home'
import { CategoryData } from './components/Category/'
import { AlbumData } from './components/Album'
import Login from './components/Login/Login'
import apiService from './services/apiService'

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

  // console.log('STATE user --', state.user)
  // console.log('AUTH Token --', state.token)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Container>
        <div>
          <Navigation />
        </div>
        {state.user && <h4>User: {state.user.name}</h4>}
        <div>
          <Switch>
            <Route path='/login'><Login /></Route>
            <Route path='/albums/:id'><AlbumData /></Route>
            <Route path='/albums'><AlbumData /></Route>
            <Route path='/categories'><CategoryData /></Route>
            <Route path='/pictures/:id'><PictureData /></Route>
            <Route path='/pictures'><PictureData /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </div>
      </Container>
    </AuthContext.Provider>

  )
}

export default App
