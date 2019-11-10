import React, { Fragment } from 'react'
import Album from './Album'

const AlbumList = ({ albums }) => {
  console.log('ALBUMS -- ', albums)

  if(albums.loading) {
    return <div className='loader'>Loading ...</div>
  }

  return (
    <Fragment>
      <h2>Albumit</h2>
      {albums.data &&
          albums.data.data.map(album =>
            <Album key={album.id} album={album} />
          )
      }
    </Fragment>
  )
}

export default AlbumList