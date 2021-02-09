import React from 'react'
import './Gallery.css'

const PicturesGallery = ({ pictures }) => {

  const computerPics = pictures &&
      pictures.map((p, i) =>
        <div key={i} className='gallery-item'>
          <img key={i} className='gallery-image' src={p.image} />
        </div>
      )

  return (
    <div>

      <div className='Item-center'><h1>PICTURES</h1></div>

      { !pictures.length > 0 && <h3>no pictures yet!</h3>}

      <div className='gallery'>
        { computerPics }
      </div>
    </div>
  )
}

export default PicturesGallery