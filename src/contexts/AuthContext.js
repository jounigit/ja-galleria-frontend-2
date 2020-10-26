import React, { createContext, useReducer, useEffect } from 'react'
import { LOGGEDIN } from '../reducers/actionTypes'
import loginReducer from '../reducers/loginReducer'
import apiService from '../services/apiService'

export const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
  id: null,
  token: null,
}

const AuthContextProvider = (props) => {
  const [auth, dispatch] = useReducer(loginReducer, initialState)

  useEffect(() => {
    let storageToken = JSON.parse(localStorage.getItem('token'))
    let storageUser = JSON.parse(localStorage.getItem('user'))
    let storageID = JSON.parse(localStorage.getItem('id'))
    apiService.setToken(auth.token)
    const loggedUser = {
      token: storageToken,
      user: storageUser,
      id: storageID
    }
    if (storageUser && auth.user === null) {
      // set token for api

      dispatch({ type: LOGGEDIN, payload: loggedUser })
    }
  }, [auth])

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider