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
  case LOGGEDIN:
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      token: action.payload.token
    }
  case LOGOUT:
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

export default loginReducer