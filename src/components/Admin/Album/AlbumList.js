import React, { useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AuthContext } from '../../../contexts/AuthContext'
import CreateAlbum from './CreateAlbum'
import { Header } from 'semantic-ui-react'
import ModalPortal from '../../Shared/modal/modalPortal'

const AlbumList = ({ albums }) => {
  const { auth } = useContext(AuthContext)

  const sortedAlbums = albums.sort((a,b) =>  b.id-a.id )

  return (
    <div className='AlbumList'>
      {auth.user &&
      <ModalPortal
        header='New Album'
        btnContent='new album'
        btnIcon='edit'
        dataCy='addNewAlbum'
      >
        <CreateAlbum  />
      </ModalPortal>
      }

      <Header as='h2' dividing content='Albumit' />

      { albums.length < 1 && <p>no albums yet.</p> }

      {
        sortedAlbums.map(album =>
          <AlbumListItem key={album.id} album={album} user={auth.user} />
        )
      }

    </div>
  )
}

export default AlbumList