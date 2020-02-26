import React, { useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AuthContext } from '../../contexts/AuthContext'
import { Header } from 'semantic-ui-react'

const AlbumList = ({ albums }) => {
  const { auth } = useContext(AuthContext)

  const sortedAlbums = albums.sort((a,b) =>  b.id-a.id )

  // console.log('ALBUMLIST --', albums)

  return (
    <div className='AlbumList'>

      <Header as='h2' dividing content='Albumit' />

      {
        sortedAlbums.map(album =>
          <AlbumListItem key={album.id} album={album} user={auth.user} />
        )
      }
    </div>
  )
}

export default AlbumList