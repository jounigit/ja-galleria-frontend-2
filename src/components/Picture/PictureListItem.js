import React from 'react'
import { Image, Container, Popup } from 'semantic-ui-react'

const PictureListItem = ({ picture }) => {

  // console.log('DETAIL ---', picture)
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
