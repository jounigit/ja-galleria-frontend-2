import apiService from '../services/apiService'

export const fetchData = async (dispatch, TYPE, path) => {
  try {
    const results = await apiService.getAll(path)
    if (path === 'pictures') {
      dispatch({ type: TYPE, data: results.data })
    } else {
      dispatch({ type: TYPE, data: results })
    }
    console.log('!! fetchData ---', path, ' -- ', results)
  } catch (error) {
    dispatch({ type: 'FAILURE', error: error.message || error })
  }
}