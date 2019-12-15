import React, { Fragment, useContext }  from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
import CategoryList from './CategoryList'

const CategoryData = () => {
  const { categories } = useContext(CategoryContext)

  const categoriesData = categories.data && categories.data
console.log('CATS :::', categoriesData)
  return (
    <Fragment>
      {categories.loading && <div className="loader">Loading ...</div>}

      { categoriesData && <CategoryList categories = { categoriesData } /> }
    </Fragment>
  )
}

export default CategoryData