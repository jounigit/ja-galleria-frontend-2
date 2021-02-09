import React from 'react'
import {
  Popup,
  Image
} from 'semantic-ui-react'

const PictureListItem = ({ picture }) => {

  // console.log('DETAIL ---', picture)
  // console.log('PIC DETAIL url ---', picture.image)

  return (
    <div data-cy='pictureListItem'>

      <Popup
        content={picture.content}
        header={picture.title}
        trigger={<Image src={picture.image} data-cy='picture' fluid />}
      />

    </div>
  )
}

export default PictureListItem
