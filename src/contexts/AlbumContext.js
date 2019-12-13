import React, { createContext, useReducer, useEffect } from 'react'
import albumReducer from '../reducers/albumReducer'
import apiService from '../services/apiService'

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {
  const [albums, dispatch] = useReducer(albumReducer, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getAll('albums')
        // console.log('RESULT ---', results.data)
        dispatch({ type: 'INIT_ALBUMS', data: result })
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