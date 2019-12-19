import apiService from '../../../services/apiService'

export const fetchData = async (dispatch, TYPE) => {
  try {
    const results = await apiService.getAll('categories')
    dispatch({ type: TYPE, data: results })
    // console.log('!!! CAT context dispatched ---')
  } catch (error) {
    dispatch({ type: 'FAILURE', error: error.message || error })
  }
}