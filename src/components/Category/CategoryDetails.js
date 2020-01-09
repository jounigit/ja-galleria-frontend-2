import React, { useState, useContext } from 'react'
import ListItemAlbum from './ListItemAlbum'
import RemoveCategory from './RemoveCategory'
import UpdateCategory from './UpdateCategory'
import ModalSection from '../Shared/modal/ModalSection'
import { AuthContext } from '../../App'

const CategoryDetails = ({ category }) => {
  const [visible, setVisible] = useState(false)
  const { state } = useContext(AuthContext)

  const albums = () => category.albums.map(a =>
    <ListItemAlbum key={a.id} album={a} />
  )

  const showWhenVisible = { display: visible ? '' : 'none' }
  const linkable = {
    color: 'Blue',
    textDecoration: 'Underline'
  }

  return (
    <div className='category' data-cy='category'>
      { state.user &&
       <RemoveCategory
         id={category.id}
         title={category.title}
         author={category.user.name}
       /> }
      { state.user &&
      <ModalSection
        btnIcon={'edit'}
        compToModal={ UpdateCategory }
        headerContent={'Update Category'}
        id={category.id}
        title={category.title}
        content={category.content}
        author={category.user.name}
      />
      }

      <h3 data-cy='header'>
        {category.title}
      </h3>

      <p>
        {category.content}
      </p>
      <h5>
          Author - {category.user.name}
      </h5>
      <h3  data-cy='linkable' style={linkable} onClick={() => setVisible(!visible)}>Albums</h3>
      <ul style={showWhenVisible}>
        {albums().length > 0 ? albums() : 'no albums'}
      </ul>

      <hr />
    </div>
  )
}

export default CategoryDetails

