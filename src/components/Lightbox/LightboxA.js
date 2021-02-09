import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import './Gallery.css'
import PictureItem from './PictureItem'

const options = {
  buttons: {
    iconPadding: '7px',
    iconColor: '#6F9283'
  },
  settings: {
    overlayColor: 'rgb(10, 10, 10, 0.9)',
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    hideControlsAfter: false
  },
  progressBar: {
    height: '3px',
    fillColor: '#6F9283',
    backgroundColor: '#33673B'
  }
}

const captionFormer = ( { title, content } ) => (
  <div>
    <h3>{title}</h3>
    <p>{content ? content : ''}</p>
  </div>
)

const LightboxA = ({ pictures }) => {

  // ::::::::::: picture info ::::::::::::::::::: //
  const customCaptions = pictures &&
  pictures.map((p,i) => ( { id: i, caption: captionFormer( p ) } ) )

  console.log('Captions: ', customCaptions)

  // ::::::::::: chunk pictures for design :::::::::::::: //

  const computerPics = pictures &&
  pictures.map((p, i) =>
    <div key={i} className='gallery-item'>
      <PictureItem picture={ p } />
    </div>
  )

  // :::::::::::::::::::::::::::::::::::: //
  return (
    <SRLWrapper customCaptions={customCaptions} options={options}>

      <div className='gallery'>
        { pictures && computerPics }
      </div>

    </SRLWrapper>
  )
}

export default LightboxA