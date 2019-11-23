import React, { createContext, useReducer, useEffect } from 'react'
import categoryReducer from '../reducers/categoryReducer'
import axios from 'axios'

const baseUrl = 'http://localhost:8000/api'

const url = `${baseUrl}/categories`

export const CategoryContext = createContext()

const CategoryContextProvider = (props) => {
  const [categories, dispatch] = useReducer(categoryReducer, [])

  // hook to get all records
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(url)
        // console.log('categories RESULT ---', results)
        dispatch({ type: 'INIT_CATEGORY', data: results })
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