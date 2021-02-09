import React from 'react'
import './FlexList.css'
import PictureListItem from './PictureListItem'

const PicturesToFlex = ({ pictures }) => {

  const computerPics = pictures &&
      pictures.map((p, i) =>
        <li className='Pic-li' key={i}>
          <PictureListItem picture={p} />
        </li>
      )

  return (
    <div>

      <div className='Item-center'><h1>PICTURES</h1></div>

      { !pictures.length > 0 && <h3>no pictures yet!</h3>}

      <ul className='Pic-ul'>
        { computerPics }
        <li className='Pic-li'></li>
      </ul>

    </div>
  )
}

export default PicturesToFlex