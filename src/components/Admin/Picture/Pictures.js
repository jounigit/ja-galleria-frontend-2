import React from 'react'
import PictureContextProvider from '../../../contexts/PictureContext'
import PictureData from './PictureData'

const Pictures = () => {
  return (
    <div className="Pictures">
      <PictureContextProvider>
        <PictureData />
      </PictureContextProvider>
    </div>
  )
}

export default Pictures