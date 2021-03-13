/* eslint-disable no-case-declarations */
import {
  LOGIN,
  LOGGEDIN,
  LOGOUT
} from './actionTypes'
import apiService from '../services/apiService'

const loginReducer = (state, action) => {
  switch (action.type) {
  case LOGIN:
    localStorage.setItem('id', JSON.stringify(action.payload.id))
    localStorage.setItem('user', JSON.stringify(action.payload.user))
    localStorage.setItem('token', JSON.stringify(action.payload.token))
    localStorage.setItem('role', JSON.stringify(action.payload.role))
    // set token for api
    apiService.setToken(state.token)
    return {
      ...state,
      isAuthenticated: true,
      id: action.payload.id,
      user: action.payload.user,
      token: action.payload.token,
      role: action.payload.role
    }
  case LOGGEDIN:
    return {
      ...state,
      isAuthenticated: true,
      id: action.payload.id,
      user: action.payload.user,
      token: action.payload.token,
      role: action.payload.role
    }
  case LOGOUT:
    localStorage.clear()
    return {
      ...state,
      isAuthenticated: false,
      id: null,
      user: null,
      token: null,
      role: null
    }
  default:
    return state
  }
}

export default loginReducer