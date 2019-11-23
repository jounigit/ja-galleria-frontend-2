import React from 'react'
import CategoryContextProvider from '../../contexts/CategoryContext'
import CategoryData from './CategoryData'

const Categories = () => {
  return (
    <div className="Categories">
      <CategoryContextProvider>
        <CategoryData />
      </CategoryContextProvider>
    </div>
  )
}

export default Categories