import React, { useState } from 'react'
import { Popup } from 'semantic-ui-react'

const PictureListItem = ({ picture }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const handleOpen = () => {
    console.log('MOUSE over action: ')
    setIsOpen(true)
  }

  const handleClose = () => {
    console.log('MOUSE out action: ')
    setIsOpen(false)
  }

  return (
    <div data-cy='pictureListItem'>

      <Popup
        content={picture.content}
        header={picture.title}
        trigger={<img src={picture.image} data-cy='picture' fluid />}
        flowing
        hoverable
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
      />

    </div>
  )
}

export default PictureListItem
