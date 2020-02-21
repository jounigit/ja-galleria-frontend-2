import React from 'react'
import AlbumContextProvider from '../../../contexts/AlbumContext'
import AlbumData from './AlbumData'

const Albums = () => {
  return (
    <div className="Albums">
      <AlbumContextProvider>
        <AlbumData />
      </AlbumContextProvider>
    </div>
  )
}

export default Albums