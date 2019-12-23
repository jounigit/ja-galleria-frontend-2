import React, { createContext, useReducer, useEffect } from 'react'
import categoryReducer from '../reducers/categoryReducer'
import { INIT_CATEGORIES } from '../reducers/actionTypes'
import { fetchData } from '../actions/fetchData'

export const CategoryContext = createContext()

const CategoryContextProvider = (props) => {
  const [categories, dispatch] = useReducer(categoryReducer, [])
  // hook to get all records
  useEffect(() => {
    fetchData(dispatch, INIT_CATEGORIES, 'categories')
  }, [dispatch])

  return (
    <CategoryContext.Provider value={{ categories, dispatch }}>
      { props.children }
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider