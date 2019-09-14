import React from 'react'
import Picture from './Picture'

const PictureList = ({ pictures }) => {
  console.log(pictures)
  return (
    <div className='PictureList'>
      <h2>Kuvat</h2>
      {pictures.loading && <div className="loader" />}
      {pictures.data &&
        pictures.data.data.length > 0 &&
        pictures.data.data.map(picture =>
          <Picture key={picture.id} picture={picture} />
        )
      }
    </div>
  )
}

export default PictureList