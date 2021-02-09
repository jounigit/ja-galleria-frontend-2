import React from 'react'
import PictureListItem from './PictureListItem'
import './PicturesFlexColumn.css'

const PicturesToFlexGrid = ({ pictures }) => {

  const computerPics = pictures &&
      pictures.map((p, i) =>
        <div key={i}>
          <PictureListItem picture={p} />
          {/* <img key={i} className='Grid-image' src={p.image} /> */}
        </div>
      )

  return (
    <div>

      <div className='Item-center'><h1>PICTURES</h1></div>

      { !pictures.length > 0 && <h3>no pictures yet!</h3>}

      <div className='Fleximg'>
        { computerPics }
      </div>
    </div>
  )
}

export default PicturesToFlexGrid