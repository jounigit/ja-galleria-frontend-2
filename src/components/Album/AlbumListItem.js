import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Album = ({ album }) => {

  console.log('ALBUM -- ', album)
  const pictures = album.pictures
  return (
    <Fragment>
      <h3 data-cy='album'>
        {album.title}
      </h3>

      <p>
        {album.content.substring(0,40) }...
      </p>
      <h5>
       author - {album.user.name}
      </h5>
      <h5>
      Pictures - {pictures.length || 'no pictures'}
      </h5>
      <Link to={`/albums/${album.id}`}>
            show
      </Link>

    </Fragment>
  )
}

export default Album