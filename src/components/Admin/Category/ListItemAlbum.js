import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AlbumContext } from '../../../contexts/AlbumContext'

const ListItem = ({ albumID }) => {
  const { albums } = useContext(AlbumContext)

  const album = albums.data &&
    albums.data.find((item) => item.id === albumID)
  // console.log('A item: ', album)
  return(
    <li>
      <h3>
        {album && album.title}
      </h3>
      <p>
        {album && album.content && album.content.substring(0,40) }...
      </p>
      <Link to={`/album/${album && album.id}`}>
            show
      </Link>
    </li>
  )
}

export default ListItem