import React, { useContext } from 'react'
import CategoryDetails from './CategoryDetails'
import { AuthContext } from '../../../contexts/AuthContext'
import CreateCategory from './CreateCategory'
import ModalSection from '../../Shared/modal/ModalSection'
import { Header } from 'semantic-ui-react'

const CategoryList = ({ categories }) => {
  const { auth } = useContext(AuthContext)

  return (
    <div className='CategoryList'>
      {auth.user &&
      <ModalSection
        btnIcon={'edit'}
        btnContent={'new category'}
        dataCy={'addNewCategory'}
        compToModal={ CreateCategory }
        headerContent={'New Category'}
      />}

      <Header as='h2' dividing content='Kategoriat' />

      { categories.length < 1 && <p>no albums yet.</p> }

      {
        categories.map(category =>
          <CategoryDetails key={category.id} category={category} />
        )
      }
    </div>
  )
}

export default CategoryList