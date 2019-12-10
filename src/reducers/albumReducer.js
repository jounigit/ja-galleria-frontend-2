// import albumService from '../services/albumService'
import {
  INIT_ALBUMS,
  CREATE_ALBUM,
  DELETE_ALBUM,
  LOADING,
  FAILURE
} from './actionTypes'

const albumReducer = (state, action) => {
  switch (action.type) {
  case FAILURE:
    return { data: null, isLoading: false, errorMessage: action.error }
  case LOADING:
    return { data: state.data, isLoading: true, errorMessage: '' }
  case INIT_ALBUMS:
    console.log('reducer init :::', state)
    return { data: action.data, isLoading: false, errorMessage: '' }
  case CREATE_ALBUM:
    console.log('reducer create :::', state.data)
    return { data: action.data, isLoading: false, errorMessage: '' }
  case DELETE_ALBUM:
    console.log('reducer delete :::', state.data)
    // eslint-disable-next-line no-case-declarations
    // const newData = state.data.filter(d => d.id !== action.id)
    return { data: action.data, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

// export const deleteAlbum = (id) => async (dispatch) => {
//   try {
//     await albumService.remove(id)
//     // const newData = this.state.data
//     dispatch({
//       type: DELETE_ALBUM,
//       id
//     })
//   } catch(error) {
//     dispatch({
//       type: FAILURE, error
//     })
//   }
// }

export default albumReducer