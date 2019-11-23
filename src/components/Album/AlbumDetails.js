import React from 'react'
import PictureDetails from '../Picture/PictureDetails'

const AlbumDetails = ({ album }) => {

  const pictures = () => album.pictures.map(p =>
    <PictureDetails key={p.id} picture={p} />
  )

  console.log('ALBUMDETAILS -- ', album)
  return (
    <div className='album' data-cy='album'>
      <h3>
        {album.title}
      </h3>

      <p>
        {album.content}
      </p>
      <h5>
        Author - {album.user.name}
      </h5>
      <h3>Pictures</h3>
      <ul>
        {pictures().length > 0 ? pictures() : 'no albums'}
      </ul>
    </div>


  )
}

export default AlbumDetails