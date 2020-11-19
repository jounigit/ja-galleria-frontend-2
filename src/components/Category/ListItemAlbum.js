import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'

const ListItem = ({ albumID, handleClose }) => {
  const { albums } = useContext(AlbumContext)

  const album = albums.data &&
    albums.data.find((item) => item.id === albumID)
  // console.log('A item: ', album)
  const subContent = album && album.content && <p>{album.content.substring(0,30)} ...</p>
  return(
    <>
      <Divider fitted />
      <Link to={`/album/${album && album.id}`}
        style={{ color:'grey', paddingBottom:'50' }}
        onClick={handleClose}>
        <h4>
          {album && album.title}
        </h4>

        {album && subContent }

      </Link>
      <Divider hidden />
    </>
  )
}

export default ListItem