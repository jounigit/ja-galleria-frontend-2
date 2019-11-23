import React from 'react'
import AlbumDetails from './AlbumDetails'

const AlbumList = ({ albums }) => {
  console.log('LIST --', albums)
  return (
    <div className='AlbumList'>
      <h2>Albumit</h2>
      {
        albums.map(album =>
          <AlbumDetails key={album.id} album={album} />
        )
      }
    </div>
  )
}

export default AlbumList