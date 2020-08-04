/* eslint-disable no-case-declarations */
import {
  INIT_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  LOADING,
  FAILURE,
  CLEAR_ERROR,
  CLEAR_MSG
} from './actionTypes'

const categoryReducer = (state, action) => {
  switch (action.type) {
  case FAILURE:
    return { data: state.data, isLoading: false, errorMessage: action.error }
  case CLEAR_ERROR:
    return { data: state.data, isLoading: false, errorMessage: '' }
  case CLEAR_MSG:
    return { data: state.data, isLoading: false, errorMessage: '', message: '' }
  case LOADING:
    return { data: null, isLoading: true, errorMessage: '' }
  case INIT_CATEGORIES:
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_CATEGORY:
    const newData = [...state.data, action.data]
    return { data: newData, isLoading: false, errorMessage: '', message: action.message }
  case UPDATE_CATEGORY:
    const updated = state.data.map(b => b.id !== action.data.id ? b : action.data)
    return { data: updated, isLoading: false, errorMessage: '', message: action.message }
  case DELETE_CATEGORY:
    const delData = state.data.filter(d => d.id !== action.id)
    return { data: delData, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default categoryReducer