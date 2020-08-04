import React, { Fragment, useContext }  from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
import CategoryList from './CategoryList'
import { fetchData } from '../../services/apiService'
import { INIT_CATEGORIES } from '../../reducers/actionTypes'


const CategoryData = () => {
  const { categories, dispatch } = useContext(CategoryContext)
  const reloadState = localStorage.getItem('reloadPage')

  if (reloadState === 'categories') {
    fetchData(dispatch, INIT_CATEGORIES, 'categories')
    localStorage.setItem('reloadPage', '')
  }

  const categoriesData = categories.data && categories.data

  return (
    <Fragment>
      {categories.loading && <div className="loader">Loading ...</div>}

      { categoriesData && <CategoryList categories = { categoriesData } /> }
    </Fragment>
  )
}

export default CategoryData