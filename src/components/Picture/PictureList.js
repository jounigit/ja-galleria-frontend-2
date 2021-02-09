import React, { useState, useContext } from 'react'
import { PictureContext } from '../../contexts/PictureContext'
import PicturesToColumns from './galleria1/PicturesToColumns'
import PicturesToFlex from './galleria2/PicturesToFlex'
import PicturesToFlexGrid from './galleria3/PicturesToFlexGrid'
import PicturesGallery from './galleria4/PicturesGallery'

// import PicturesGallery from './PicturesGallery'
// import PicturesToFlexGrid from './PicturesToFlexGrid'

const PictureList = () => {
  const [picGallery, setPicGallery] = useState(1)
  const { pictures: { data: Pictures } } = useContext(PictureContext)

  if (Pictures === undefined) { return <div className='Item-center'>Loading...</div> }
  const pictureArray = Pictures || []
  console.log('Pic list ---', Pictures)

  return (
    <div className='PictureList'>
      <div style={{ display: 'inline' }}>
        <button onClick={ () => setPicGallery(1)}>gallery 1</button>
        <button onClick={ () => setPicGallery(2)}>gallery 2</button>
        <button onClick={ () => setPicGallery(3)}>gallery 3</button>
        <button onClick={ () => setPicGallery(4)}>gallery 4</button>
        <p>Gallery {picGallery}</p>
      </div>

      { !pictureArray.length > 0 && <h3>no pictures yet!</h3>}

      { picGallery === 1 && <PicturesToColumns pictures={pictureArray} /> }
      { picGallery === 2 && <PicturesToFlex pictures={pictureArray} /> }
      { picGallery === 3 && <PicturesToFlexGrid pictures={pictureArray} /> }
      { picGallery === 4 && <PicturesGallery pictures={pictureArray} /> }

    </div>
  )
}

export default PictureList