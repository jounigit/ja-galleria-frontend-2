import React from 'react'
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
// import { Segment } from 'semantic-ui-react'

const CategoryListItem = ({ category, cssClass }) => {

  if (category === undefined) { return <div className='Item-center'>Loading...</div> }

  const { title, slug, content, albums: CatAlbums } = category
  const albumsLen = CatAlbums.length
  console.log('CAT item home page: ', cssClass)

  /********************* padded='very' **********************************  className='category' */
  return (
    <div style={{ marginBottom: 30, textAlign:'center' }} data-cy='categoryListItem'>

      <Segment raised>

        <Link className={cssClass} to={`/category/${slug}`} data-cy='categoryListItemLink'>

          <h1 data-cy='header'>
            {title.toUpperCase()}
          </h1>

          <p>
            {content}
          </p>
          {/* <h5> Author - { category.user && category.user.username } </h5> */}
          <h3>{ albumsLen > 0 ? `${albumsLen} albums` : 'no albums yet'}</h3>

        </Link>

      </Segment>

    </div>
  )
}

export default CategoryListItem

