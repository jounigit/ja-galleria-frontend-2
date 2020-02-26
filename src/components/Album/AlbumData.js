import React, { Fragment, useContext }  from 'react'
import { useParams } from 'react-router-dom'
import { AlbumContext } from '../../contexts/AlbumContext'
import AlbumDetails from './AlbumDetails'
import AlbumList from './AlbumList'

const AlbumData = () => {
  const { albums } = useContext(AlbumContext)
  let { id } = useParams()
  let albumsData = albums.data && albums.data

  return (
    <Fragment>
      {albums.loading && <div className="loader">Loading ...</div>}

      { !id
      && !albums.loading
      && albums.data
      && <AlbumList albums = { albumsData } /> }
      { id &&
      albums.data &&
      <AlbumDetails album={ albumsData.find((item) => item.id === parseInt(id)) } /> }
    </Fragment>
  )
}

export default AlbumData