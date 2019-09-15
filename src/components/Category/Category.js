import React, { useState } from 'react'
import ListItem from './ListItemAlbum'

const Category = ( { category } ) => {
  const [visible, setVisible] = useState(false)
  console.log('CAT -- ', category)
  const albums = () => category.albums.map(a =>
    <ListItem key={a.id} album={a} />
  )

  const showWhenVisible = { display: visible ? '' : 'none' }
  const linkable = {
    color: 'Blue',
    textDecoration: 'Underline'
  }

  return (
    <div className='category'>
      <h3 style={linkable} onClick={() => setVisible(!visible)}>
        {category.title}
      </h3>

      <div style={showWhenVisible}>
        <p>
          {category.content}
        </p>
        <h4>
          {category.user.name}
        </h4>
        <h3>Albums</h3>
        <ul>
          {albums().length > 0 ? albums() : 'no albums'}
        </ul>
      </div>

    </div>
  )
}

export default Category