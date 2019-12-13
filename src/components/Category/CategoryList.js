import React, { useContext } from 'react'
import CategoryDetails from './CategoryDetails'
import { AuthContext } from '../../App'
import CreateCategory from './CreateCategory'

const CategoryList = ({ categories }) => {
  const { state } = useContext(AuthContext)

  console.log('CATEGORIESlist -- ', categories)

  return (
    <div className='CategoryList'>
      {state.user && <CreateCategory />}

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