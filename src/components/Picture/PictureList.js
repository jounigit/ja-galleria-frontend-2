import React from 'react'
import PictureDetails from './PictureDetails'

const PictureListContext = ({ pictures }) => {
  return (
    <div className='PictureList'>
      <h2>Kuvat</h2>
      {
        pictures.map(picture =>
          <PictureDetails key={picture.id} picture={picture} />
        )
      }
    </div>
  )
}

export default PictureListContext