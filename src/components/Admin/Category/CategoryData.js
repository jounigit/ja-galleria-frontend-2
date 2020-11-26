import React, { Fragment, useContext }  from 'react'
import { CategoryContext } from '../../../contexts/CategoryContext'
import CategoryList from './CategoryList'
import { fetchData } from '../../../services/apiService'
import { INIT_CATEGORIES, CLEAR_ERROR, CLEAR_MSG } from '../../../reducers/actionTypes'
import { NotificationContext, notify } from '../../../contexts/NotificationContext'


const CategoryData = () => {
  const { categories, dispatch } = useContext(CategoryContext)
  const { msgDispatch } = useContext(NotificationContext)
  const reloadState = localStorage.getItem('reloadPage')

  if (reloadState === 'categories') {
    fetchData(dispatch, INIT_CATEGORIES, 'categories')
    localStorage.setItem('reloadPage', '')
  }

  if(categories.errorMessage) {
    let errorMsg = categories.errorMessage.response.data.message
    dispatch({ type: CLEAR_ERROR })
    notify( msgDispatch, errorMsg, 4, 'red')
  }

  if(categories.message) {
    let msg = categories.message
    dispatch({ type: CLEAR_MSG })
    notify( msgDispatch, msg, 4, 'green')
  }
  // console.log('= CategoryData state:', categories)

  const categoriesData = categories.data && categories.data

  return (
    <Fragment>
      {categories.loading && <div className="loader">Loading ...</div>}

      { categoriesData && <CategoryList categories = { categoriesData.reverse() } /> }
    </Fragment>
  )
}

export default CategoryData