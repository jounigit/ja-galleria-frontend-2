import React from 'react'
import useFetch from '../../utils/useFetch'
import Category from './Category'

const baseUrl = 'http://localhost:8000/api'

const CategoryList = () => {
  const categories = useFetch(
    `${baseUrl}/categories`
  )
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