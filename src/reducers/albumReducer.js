/* eslint-disable no-case-declarations */
import {
  INIT_ALBUMS,
  CREATE_ALBUM,
  DELETE_ALBUM,
  UPDATE_ALBUM,
  UPDATE_ALBUM_PICTURE,
  LOADING,
  FAILURE,
  CLEAR_ERROR,
  CLEAR_MSG
} from './actionTypes'

const albumReducer = (state, action) => {
  switch (action.type) {
  case FAILURE:
    console.log('Album reducer err: ', action.error)
    return { data: state.data, isLoading: false, errorMessage: action.error }
  case CLEAR_ERROR:
    return { data: state.data, isLoading: false, errorMessage: '', message: '' }
  case CLEAR_MSG:
    return { data: state.data, isLoading: false, errorMessage: '', message: '' }
  case LOADING:
    return { data: state.data, isLoading: true, errorMessage: '' }
  case INIT_ALBUMS:
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_ALBUM:
    const newData = [...state.data, action.data]  // console.log('Album reducer: ', action.data)
    return { data: newData, isLoading: false, errorMessage: '', message: action.message }
  case UPDATE_ALBUM: // console.log('Album reducer to update: ', action.data)
    const updated = state.data.map(b => b.id !== action.data.id ? b : action.data)
    return { data: updated, isLoading: false, errorMessage: '', message: action.message }
  case UPDATE_ALBUM_PICTURE: //  console.log('Album reducer to update: ', action.data)
    const updatedPics = state.data.map(b => b.id !== action.data.id ? b : action.data)
    return { data: updatedPics, isLoading: false, errorMessage: '', message: action.message }
  case DELETE_ALBUM:
    const delData = state.data.filter(d => d.id !== action.id)
    return { data: delData, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default albumReducer