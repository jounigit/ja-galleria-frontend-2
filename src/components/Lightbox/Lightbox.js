import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
// import kuva1 from '../../assets/kuva-1.jpg'
// import kuva1Thumb from '../../assets/kuva-1-thumb.jpg'
// import kuva2 from '../../assets/kuva-2.jpg'
// import kuva2Thumb from '../../assets/kuva-2-thumb.jpg'
import {
  Grid,
  Image } from 'semantic-ui-react'

const options = {
  settings: {
    overlayColor: 'rgb(25, 136, 124)',
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: '#1b5245',
    iconColor: 'rgba(126, 172, 139, 0.8)',
  },
  //   thumbnails: {
  //     thumbnailsSize: ['120px', '150px'],
  //     thumbnailsPosition: 'left',
  //     thumbnailsGap: '0 0 10px 0',
  //     thumbnailsOpacity: 0.2,
  //     thumbnailsContainerBackgroundColor: '#AF9AB2',
  //     thumbnailsContainerPadding: '0 5px'
  //   },
  caption: {
    captionColor: '#a6cfa5',
    captionFontFamily: 'Raleway, sans-serif',
    captionFontWeight: '300',
    captionTextTransform: 'uppercase',
  }
}

const Lightbox = ({ pictures }) => {
  return (
    <SRLWrapper options={options}>

      <Grid columns={4}>
        { pictures &&
          pictures.map((p,i) =>
            <Grid.Column key={i}>
              <a href={ p.image } data-attribute="SRL">
                <Image src={ p.thumb } alt="Umbrella" />
              </a>
            </Grid.Column>
          )
        }
      </Grid>
    </SRLWrapper>
  )
}

export default Lightbox