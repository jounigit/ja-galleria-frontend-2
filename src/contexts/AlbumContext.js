import React, { createContext, useReducer, useEffect } from 'react'
import albumReducer from '../reducers/albumReducer'
import axios from 'axios'

const baseUrl = 'http://localhost:8000/api'

const url = `${baseUrl}/albums`

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {
  const [albums, dispatch] = useReducer(albumReducer, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(url)
        console.log('RESULT ---', results.data)
        dispatch({ type: 'INIT_ALBUMS', data: results.data })
      } catch (error) {
        dispatch({ type: 'FAILURE', error: error.message || error })
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <AlbumContext.Provider value={{ albums, dispatch }}>
      { props.children }
    </AlbumContext.Provider>
  )
}

export default AlbumContextProvider