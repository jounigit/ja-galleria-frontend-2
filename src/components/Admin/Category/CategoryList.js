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


// const menuLinks = <Dropdown text='Galleria' pointing className='link item'> // LINKKI
//   <Dropdown.Menu> // DROPDOWN 1 ALKAA
//     <Dropdown.Header>Categories</Dropdown.Header> // HEADER
//     <Dropdown.Item> // DROPDOWN ELEMENTTI 1.1
//        <Dropdown text='Clothing'>
//          <Dropdown.Menu> // DROPDOWN 2 ALKAA
//            <Dropdown.Header>Mens</Dropdown.Header>
//            <Dropdown.Item>Shirts</Dropdown.Item> // DROPDOWN ELEMENTTI 2.1
//            <Dropdown.Item>Bags</Dropdown.Item> // DROPDOWN ELEMENTTI 2.2
//          </Dropdown.Menu> // DROPDOWN 2 LOPPUU
//         </Dropdown>
//     </Dropdown.Item> // DROPDOWN ELEMENTTI 1.1 LOPPUU
//     <Dropdown.Item>Home Goods</Dropdown.Item> // DROPDOWN ELEMENTTI 1.2
//     <Dropdown.Item>Bedroom</Dropdown.Item> // DROPDOWN ELEMENTTI 1.3
//     <Dropdown.Divider />
//     <Dropdown.Header>Order</Dropdown.Header>
//     <Dropdown.Item>Status</Dropdown.Item> // DROPDOWN ELEMENTTI 1.4
//     <Dropdown.Item>Cancellations</Dropdown.Item> // DROPDOWN ELEMENTTI 1.5
//   </Dropdown.Menu> // DROPDOWN 1 LOPPUU
// </Dropdown>