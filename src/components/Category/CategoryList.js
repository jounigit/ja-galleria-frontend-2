import React, { useContext } from 'react'
import CategoryDetails from './CategoryDetails'
import { AuthContext } from '../../App'
import CreateCategory from './CreateCategory'
import ModalSection from '../Shared/modal/ModalSection'
import { Header } from 'semantic-ui-react'

const CategoryList = ({ categories }) => {
  const { state } = useContext(AuthContext)

  return (
    <div className='CategoryList'>
      {state.user &&
      <ModalSection
        btnIcon={'edit'}
        btnContent={'new category'}
        compToModal={ CreateCategory }
        headerContent={'New Category'}
      />}

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