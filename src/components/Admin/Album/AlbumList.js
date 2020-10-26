import React, { useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AuthContext } from '../../../contexts/AuthContext'
import CreateAlbum from './CreateAlbum'
import ModalSection from '../../Shared/modal/ModalSection'
import { Header } from 'semantic-ui-react'

const AlbumList = ({ albums }) => {
  const { auth } = useContext(AuthContext)

  const sortedAlbums = albums.sort((a,b) =>  b.id-a.id )

  return (
    <div className='AlbumList'>
      {auth.user &&
      <ModalSection
        btnIcon={'edit'}
        btnContent={'new album'}
        dataCy={'addNewAlbum'}
        compToModal={ CreateAlbum }
        headerContent={'New Album'}
      />
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