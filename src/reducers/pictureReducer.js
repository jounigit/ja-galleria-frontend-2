
/* eslint-disable no-case-declarations */
// import albumService from '../services/albumService'
import {
  INIT_PICTURES,
  CREATE_PICTURE,
  DELETE_PICTURE,
  UPDATE_PICTURE,
  LOADING,
  FAILURE
} from './actionTypes'

const pictureReducer = (state, action) => {
  switch (action.type) {
  case FAILURE:
    return { data: null, isLoading: false, errorMessage: action.error }
  case LOADING:
    return { data: null, isLoading: true, errorMessage: '' }
  case INIT_PICTURES:
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_PICTURE:
    const newData = [...state.data, action.data]
    return { data: newData, isLoading: false, errorMessage: '' }
  case UPDATE_PICTURE:
    console.log('REDUC state---', state.data)
    const updated = state.data.map(b => b.id !== action.data.id ? b : action.data)
    console.log('REDUC new state---', updated)
    return { data: updated, isLoading: false, errorMessage: '' }
  case DELETE_PICTURE:
    const delData = state.data.filter(d => d.id !== action.id)
    return { data: delData, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default pictureReducer