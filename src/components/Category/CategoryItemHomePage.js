import { auto } from '@popperjs/core'
import React from 'react'
import { Link } from 'react-router-dom'
// import { Segment } from 'semantic-ui-react'

const CategoryItemHomePage = ({ category, cssClass }) => {

  const center = {
    margin: auto,
    // width: '100px',
    minWidth: '50%',
    maxWidth: '70%',
    // border: '3px solid green',
    padding: '4em 0',
    fontSize: 'calc(8px + 2vmin)'
  }

  if (category === undefined) { return <div className='Item-center'>Loading...</div> }

  const { title, slug, content, albums: CatAlbums } = category
  const albumsLen = CatAlbums.length
  console.log('CAT item home page: ', cssClass, center)

  /********************* padded='very' **********************************  className='category' */
  return (
    <div className='Item-center' style={ center }>

      <Link className={cssClass} to={`/category/${slug}`} data-cy='CategoryItemHomePage'>

        <h1 data-cy='header'>
          {title.toUpperCase()}
        </h1>

        <p>
          {content}
        </p>
        {/* <h5> Author - { category.user && category.user.username } </h5> */}
        <h3>{ albumsLen > 0 ? `${albumsLen} albums` : 'no albums yet'}</h3>

      </Link>

    </div>
  )
}

export default CategoryItemHomePage

