import React from 'react'
import CategoryDetails from './CategoryDetails'
import { Header } from 'semantic-ui-react'

const CategoryList = ({ categories }) => {

  return (
    <div className='CategoryList'>

      <Header as='h2' dividing content='Kategoriat' />
      {
        categories.map(category =>
          <CategoryDetails key={category.id} category={category} />
        )
      }
    </div>
  )
}

export default CategoryList