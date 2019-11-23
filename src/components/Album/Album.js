import React, { Fragment } from 'react'
import { PictureDetails } from '../Picture'

const Album = ({ album = [] }) => {

  const pictures = () => album.pictures.map(p =>
    <PictureDetails key={p.id} picture={p} />
  )

  console.log('ALBUM -- ', album)
  return (
    <Fragment>
      <h3 data-cy='album'>
        {album.title}
      </h3>

      <p>
        {album.content}
      </p>
      {/* <h4>
          {album.user.name}
        </h4> */}
      <h3>Pictures</h3>
      <ul>
        {pictures().length > 0 ? pictures() : 'no albums'}
      </ul>

    </Fragment>
  )
}

export default Album