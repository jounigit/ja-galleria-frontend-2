import React from 'react'
import Category from './Category'

const CategoryList = ({ categories }) => {
  console.log('DATA -- ', categories.loading)

  if(categories.loading) {
    return <div className='loader'>Loading ...</div>
  }
  console.log(categories.data)
  return (
    <div>
      <h2>Kategoriat</h2>
      {categories.data &&
        categories.data.data.map(category =>
          <Category key={category.id} category={category} />
        )
      }
    </div>
  )
}

export default CategoryList