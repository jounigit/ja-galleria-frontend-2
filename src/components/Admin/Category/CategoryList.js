import React, { useContext } from 'react'
import CategoryDetails from './CategoryDetails'
import { AuthContext } from '../../../contexts/AuthContext'
import CreateCategory from './CreateCategory'
import ModalPortal from '../../Shared/modal/modalPortal'
import { Header } from 'semantic-ui-react'

const CategoryList = ({ categories }) => {
  const { auth } = useContext(AuthContext)

  return (
    <div className='CategoryList'>
      {
        auth.user &&
          <ModalPortal
            header='New category'
            btnContent='new category'
            btnIcon='edit'
            dataCy='addNewCategory'
          >
            <CreateCategory  />
          </ModalPortal>
      }

      <Header as='h2' dividing content='CATEGORIES' />

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