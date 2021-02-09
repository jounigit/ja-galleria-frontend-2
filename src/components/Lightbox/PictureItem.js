import React, { useState } from 'react'
import { Popup, } from 'semantic-ui-react'

const PictureItem = ({ picture }) => {
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
    <Popup
      trigger={ <img className='gallery-image' src={picture.image} /> }
      flowing
      hoverable
      position='bottom right'
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <h3>{ picture.title }</h3>
      <p>{ picture.content }</p>
    </Popup>
  )
}

export default PictureItem
