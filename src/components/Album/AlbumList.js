import React, { Fragment } from 'react'
import useFetch from '../../utils/useFetch'
import AlbumListItem from './AlbumListItem'

const baseUrl = 'http://localhost:8000/api'

const AlbumList = () => {
  const albums = useFetch(
    `${baseUrl}/albums`
  )
  console.log('ALBUMS -- ', albums)

  if(albums.loading) {
    return <div className='loader'>Loading ...</div>
  }

  return (
    <Fragment>
      <h2>Albumit</h2>
      {albums.data &&
          albums.data.data.map(album =>
            <AlbumListItem key={album.id} album={album} />
          )
      }
    </Fragment>
  )
}

export default AlbumList