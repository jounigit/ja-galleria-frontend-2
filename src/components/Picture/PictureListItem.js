import React from 'react'
import {
  Container,
  Popup,
  Image
} from 'semantic-ui-react'

const PictureListItem = ({ picture }) => {

  // console.log('DETAIL ---', picture)
  // console.log('PIC DETAIL url ---', picture.image)

  return (
    <div data-cy='pictureListItem'>
      <Container>

        <Popup
          content={picture.content}
          header={picture.title}
          trigger={<Image src={picture.image} data-cy='picture' fluid />}
        />

      </Container>

    </div>
  )
}

export default PictureListItem
