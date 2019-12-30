/* eslint-disable no-case-declarations */
// import albumService from '../services/albumService'
import {
  INIT_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  LOADING,
  FAILURE
} from './actionTypes'

const categoryReducer = (state, action) => {
  switch (action.type) {
  case FAILURE:
    return { data: null, isLoading: false, errorMessage: action.error }
  case LOADING:
    return { data: null, isLoading: true, errorMessage: '' }
  case INIT_CATEGORIES:
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_CATEGORY:
    const newData = [...state.data, action.data]
    return { data: newData, isLoading: false, errorMessage: '' }
  case UPDATE_CATEGORY:
    const updated = state.data.map(b => b.id !== action.data.id ? b : action.data)
    return { data: updated, isLoading: false, errorMessage: '' }
  case DELETE_CATEGORY:
    const delData = state.data.filter(d => d.id !== action.id)
    return { data: delData, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default categoryReducer