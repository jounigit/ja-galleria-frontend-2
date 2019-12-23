import React, { createContext, useReducer, useEffect } from 'react'
import pictureReducer from '../reducers/pictureReducer'
import { INIT_PICTURES } from '../reducers/actionTypes'
import { fetchData } from '../actions/fetchData'
// import axios from 'axios'

export const PictureContext = createContext()

const PictureContextProvider = (props) => {
  const [pictures, dispatch] = useReducer(pictureReducer, [])

  // hook to get all pictures
  useEffect(() => {
    fetchData(dispatch, INIT_PICTURES, 'pictures')
  }, [dispatch])

  return (
    <PictureContext.Provider value={{ pictures, dispatch }}>
      { props.children }
    </PictureContext.Provider>
  )
}

export default PictureContextProvider