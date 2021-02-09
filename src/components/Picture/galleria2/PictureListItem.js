import React, { useState } from 'react'
import {
  Popup,
// Image
} from 'semantic-ui-react'
import './FlexList.css'

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

  const triggerAction = <img className='Pic-img' src={picture.image} />
  // // console.log('DETAIL ---', picture)
  const popInfo = <Popup
    trigger={ triggerAction }
    flowing
    hoverable
    position='bottom right'
    open={isOpen}
    onClose={handleClose}
    onOpen={handleOpen}
  >
    { picture.title }
  </Popup>

  // console.log(popInfo, triggerAction) onMouseOver={handleOpen} onMouseLeave={handleClose}
  console.log('STAte: ', isOpen)
  return (
    <>

      {/* { isOpen && popInfo } */}
      { popInfo }

    </>
  )
}

export default PictureListItem
