import { useEffect, useReducer } from 'react'
import axios from 'axios'

const pictureReducer = (state, action) => {
  switch (action.type) {
  case 'FAILURE':
    return { data: null, isLoading: false, errorMessage: action.error }
  case 'LOADING':
    return { data: null, isLoading: true, errorMessage: '' }
  case 'INIT_PICTURES':
    return { data: action.data, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

// custom hook for performing GET request
export const useInitPictures = (url) => {
  const initialState = { data: null, isLoading: true, errorMessage: '' }
  const [state, dispatch] = useReducer(pictureReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(url)
        dispatch({ type: 'INIT_PICTURES', data: results })
      } catch (error) {
        dispatch({ type: 'FAILURE', error: error.message || error })
      }
    }
    fetchData()
  }, [url])

  return state
}

export default pictureReducer