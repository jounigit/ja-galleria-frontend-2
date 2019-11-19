import React, { Fragment }  from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import Album from './Album'
const baseUrl = 'http://localhost:8000/api'

const AlbumData = () => {
  let { id } = useParams()

  const album = useFetch(
    `${baseUrl}/albums/${id}`
  )

  console.log('ALBUMDATA -- ', album)

  if(album.loading) {
    return <div className='loader'>Loading ...</div>
  }

  return (
    <Fragment>
      {album.data &&  <Album album={album.data.data.data} />}
    </Fragment>
  )
}

export default AlbumData