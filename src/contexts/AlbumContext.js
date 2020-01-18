import React, { createContext, useReducer, useEffect } from 'react'
import albumReducer from '../reducers/albumReducer'
import { INIT_ALBUMS } from '../reducers/actionTypes'
import { fetchData } from '../actions/dataActions'

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {
  const [albums, dispatch] = useReducer(albumReducer, [])

  useEffect(() => {
    fetchData(dispatch, INIT_ALBUMS, 'albums')
  }, [dispatch])

  return (
    <AlbumContext.Provider value={{ albums, dispatch }}>
      { props.children }
    </AlbumContext.Provider>
  )
}

export default AlbumContextProvider