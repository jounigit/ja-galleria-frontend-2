import React from 'react'
import AlbumListItem from './AlbumListItem'

const AlbumList = ({ albums }) => {
  console.log('LIST --', albums)
  return (
    <div className='AlbumList'>
      <h2>Albumit</h2>
      {
        albums.map(album =>
          <AlbumListItem key={album.id} album={album} />
        )
      }
    </div>
  )
}

export default AlbumList