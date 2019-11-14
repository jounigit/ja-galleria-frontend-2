import React, { Fragment }  from 'react'
import useFetch from '../../utils/useFetch'
import Album from './Album'
const baseUrl = 'http://localhost:8000/api'

const AlbumData = ({ match }) => {
  let { id } = match.params

  const album = useFetch(
    `${baseUrl}/albums/${id}`
  )

  console.log('ALBUMDATA -- ', album)

  if(album.loading) {
    return <div className='loader'>Loading ...</div>
  }

  return (
    <Fragment>
      {album.data &&  <Album album={album.data.data.data} visibility='true' />}
    </Fragment>
  )
}

export default AlbumData