import React, { useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AuthContext } from '../../App'
import CreateAlbum from './CreateAlbum'
import ModalSection from '../Shared/modal/ModalSection'

const AlbumList = ({ albums }) => {
  const { state } = useContext(AuthContext)

  const sortedAlbums = albums.sort((a,b) =>  b.id-a.id )

  // console.log('ALBUMLIST --', albums)

  return (
    <div className='AlbumList'>
      {state.user &&
      <ModalSection
        btnIcon={'edit'}
        btnContent={'new album'}
        compToModal={ CreateAlbum }
        headerContent={'New Album'}
      />
      }

      <h2>Albumit</h2>
      {
        sortedAlbums.map(album =>
          <AlbumListItem key={album.id} album={album} user={state.user} />
        )
      }
    </div>
  )
}

export default AlbumList