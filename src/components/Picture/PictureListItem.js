import React from 'react'
import { Container } from 'semantic-ui-react'

const PictureListItem = ({ picture }) => {

  // console.log('DETAIL ---', picture)
  return (
    <div data-cy='pictureListItem'>
      <Container>
        <img src ={picture.image} alt='KUVA' />

        {/* <Popup
          content={picture.content}
          header={picture.title}
          trigger={<Image src={picture.image} data-cy='picture' fluid />}
        /> */}

      </Container>

    </div>
  )
}

export default PictureListItem
