/* eslint-disable no-case-declarations */
import {
  INIT_ALBUMS,
  CREATE_ALBUM,
  DELETE_ALBUM,
  UPDATE_ALBUM,
  LOADING,
  FAILURE
} from './actionTypes'

const albumReducer = (state, action) => {
  switch (action.type) {
  case FAILURE:
    return { data: state.data, isLoading: false, errorMessage: action.error }
  case LOADING:
    return { data: state.data, isLoading: true, errorMessage: '' }
  case INIT_ALBUMS:
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_ALBUM:
    const newData = [...state.data, action.data]
    return { data: newData, isLoading: false, errorMessage: '' }
  case UPDATE_ALBUM:
    const updated = state.data.map(b => b.id !== action.data.id ? b : action.data)
    return { data: updated, isLoading: false, errorMessage: '' }
  case DELETE_ALBUM:
    const delData = state.data.filter(d => d.id !== action.id)
    return { data: delData, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default albumReducer