import React, { useContext }  from 'react'
import { useParams } from 'react-router-dom'
import { AlbumContext } from '../../../contexts/AlbumContext'
import AlbumDetails from './AlbumDetails'

const Albums = () => {
  const { albums } = useContext(AlbumContext)
  let { id } = useParams()
  let albumsData = albums.data && albums.data
  return (
    <div className="Albums">
      {albums.loading && <div className="loader">Loading ...</div>}
      { id &&
         albums.data &&
         <AlbumDetails album={ albumsData.find((item) => item.id === parseInt(id)) } />
      }
    </div>
  )
}

export default Albums