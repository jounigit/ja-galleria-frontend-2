import React, { useState } from 'react'
import ListItemAlbum from './ListItemAlbum'
import RemoveCategory from './RemoveCategory'

const CategoryDetails = ({ category }) => {
  const [visible, setVisible] = useState(false)
  // console.log('CATEGORY -- ', category)
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
      <RemoveCategory id={category.id} title={category.title} author={category.user.name} />
      <h3>
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

