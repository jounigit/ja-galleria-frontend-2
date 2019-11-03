import { useEffect, useReducer } from 'react'
import axios from 'axios'

const fetchReducer = (state, action) => {
  switch (action.type) {
  case 'FAILURE':
    return { data: null, isLoading: false, errorMessage: action.error }
  case 'SUCCESS':
    return { data: action.data, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

// custom hook for performing GET request
const useFetch = (url) => {
  const initialState = { data: null, isLoading: true, errorMessage: '' }
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  const fetchData = async () => {
    try {
      const results = await axios.get(url)
      dispatch({ type: 'SUCCESS', data: results })
    } catch (error) {
      dispatch({ type: 'FAILURE', error: error.message || error })
    }
  }
  useEffect(() => {
    fetchData()
  }, [url])

  return state
}

export default useFetch