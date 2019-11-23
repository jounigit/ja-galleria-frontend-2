import React from 'react'
import CategoryDetails from './CategoryDetails'

const CategoryList = ({ categories }) => {
  console.log('CATEGORIESlist -- ', categories)

  return (
    <div>
      <h2>Kategoriat</h2>
      {
        categories.map(category =>
          <CategoryDetails key={category.id} category={category} />
        )
      }
    </div>
  )
}

export default CategoryList