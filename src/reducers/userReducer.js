/* eslint-disable no-case-declarations */
import {
  INIT_USERS,
  CREATE_USER,
  DELETE_USER,
  LOADING,
  FAILURE
} from './actionTypes'

const userReducer = (state, action) => {
  switch (action.type) {
  case FAILURE:
    return { data: state.data, isLoading: false, errorMessage: action.error }
  case LOADING:
    return { data: state.data, isLoading: true, errorMessage: '' }
  case INIT_USERS:
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_USER:
    const newData = [...state.data.data, action.data]
    return { data: newData, isLoading: false, errorMessage: '' }
  case DELETE_USER:
    const delData = state.data.data.filter(d => d.id !== action.id)
    return { data: delData, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default userReducer