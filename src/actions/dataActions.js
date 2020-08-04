// import apiService from '../services/apiService'
// import { FAILURE } from '../reducers/actionTypes'

// export const fetchData = async (dispatch, TYPE, path) => {
//   try {
//     const results = await apiService.getAll(path)
//     if (path === 'pictures') {
//       dispatch({ type: TYPE, data: results.data })
//     } else {
//       dispatch({ type: TYPE, data: results })
//     }
//   } catch (error) {
//     dispatch({ type: FAILURE, error: error.message || error })
//   }
// }

// export const createData = async (dispatch, TYPE, path, data) => {
//   try {
//     const result = await apiService.create(path, data)
//     dispatch({
//       type: TYPE,
//       data: result.data
//     })
//   } catch (error) {
//     dispatch({
//       type: FAILURE, error
//     })
//   }
// }

// export const updateData = async (dispatch, TYPE, path, id, data) => {
//   try {
//     const result = await apiService.update(path, id, data)
//     dispatch({
//       type: TYPE,
//       data: result.data
//     })
//   } catch (error) {
//     dispatch({
//       type: FAILURE, error
//     })
//   }
// }

// export const removeData = async (dispatch, TYPE, path, id) => {
//   try {
//     await apiService.remove(path, id)
//     dispatch({
//       type: TYPE,
//       id
//     })
//   } catch(error) {
//     dispatch({
//       type: FAILURE, error
//     })
//   }
// }