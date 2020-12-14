import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import {
  // Grid,
  Image } from 'semantic-ui-react'

const options = {
  buttons: {
    iconPadding: '7px',
    iconColor: '#6F9283'
  },
  settings: {
    overlayColor: 'rgb(10, 10, 10, 0.9)',
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    // overlayColor: 'rgba(93, 87, 107, 0.9)',
    // transitionTimingFunction: 'ease-in-out',
    // slideTransitionSpeed: 0.6,
    // slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    // slideAnimationType: 'slide',
    // disablePanzoom: true,
    // disableWheelControls: true,
    // autoplaySpeed: 5000,
    hideControlsAfter: false
  },
  progressBar: {
    height: '3px',
    fillColor: '#6F9283',
    backgroundColor: '#33673B'
  }
}

const LightboxWithCustomCaptions = ({ pictures }) => {

  const captionFormer = ( { title, content } ) => (
    <div>
      <h3>{title}</h3>
      <p>{content ? content : ''}</p>
    </div>
  )

  const customCaptions = pictures &&
  pictures.map((p,i) =>
    (
      {
        id:  i ,
        caption: captionFormer( p )
      }
    )
  )
  console.log('Captions: ', customCaptions)

  return (
    <SRLWrapper customCaptions={customCaptions} options={options}>

      <Image.Group size='small'>
        { pictures &&
          pictures.map((p,i) =>
            <a key={i} href={ p.image } data-attribute="SRL">
              <Image src={ p.thumb } alt="forest" />
            </a>
          )
        }
      </Image.Group>

    </SRLWrapper>
  )
}

export default LightboxWithCustomCaptions