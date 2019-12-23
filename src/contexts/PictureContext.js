import React, { createContext, useReducer, useEffect } from 'react'
import pictureReducer from '../reducers/pictureReducer'
import axios from 'axios'

const baseUrl = 'http://localhost:8000/api'

const url = `${baseUrl}/pictures`

export const PictureContext = createContext()

const PictureContextProvider = (props) => {
  const [pictures, dispatch] = useReducer(pictureReducer, [])

  // hook to get all pictures
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(url)
        dispatch({ type: 'INIT_PICTURES', data: results.data.data })
      } catch (error) {
        dispatch({ type: 'FAILURE', error: error.message || error })
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <PictureContext.Provider value={{ pictures, dispatch }}>
      { props.children }
    </PictureContext.Provider>
  )
}

export default PictureContextProvider