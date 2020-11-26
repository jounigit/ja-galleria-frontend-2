/* eslint-disable no-case-declarations */
import {
  INIT_USERS,
  CREATE_USER,
  DELETE_USER,
  LOADING,
  FAILURE
} from './actionTypes'

const userReducer = (state, action) => {

  // console.log('=user state ==', state.data)
  switch (action.type) {
  case FAILURE:
    return { data: state.data, isLoading: false, errorMessage: action.error }
  case LOADING:
    return { data: state.data, isLoading: true, errorMessage: '' }
  case INIT_USERS:
    console.log('=user data init: ', action.data)
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_USER:
    const newData = [...state.data, action.data]
    console.log('=user data create ==', newData)
    return { data: newData, isLoading: false, errorMessage: '' }
  case DELETE_USER:
    // console.log('=user data before ==', state.data)
    const delData = state.data.filter(d => d.id !== action.id)
    return { data: delData, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default userReducer