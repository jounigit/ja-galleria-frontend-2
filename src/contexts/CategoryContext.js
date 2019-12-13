import React, { createContext, useReducer, useEffect } from 'react'
import categoryReducer from '../reducers/categoryReducer'
import apiService from '../services/apiService'
import { INIT_CATEGORIES } from '../reducers/actionTypes'

export const CategoryContext = createContext()

const CategoryContextProvider = (props) => {
  const [categories, dispatch] = useReducer(categoryReducer, [])

  // hook to get all records
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await apiService.getAll('categories')
        // console.log('categories RESULT ---', categories)
        dispatch({ type: INIT_CATEGORIES, data: results })
      } catch (error) {
        dispatch({ type: 'FAILURE', error: error.message || error })
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <CategoryContext.Provider value={{ categories, dispatch }}>
      { props.children }
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider