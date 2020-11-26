import React, { useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AuthContext } from '../../../contexts/AuthContext'
import CreateAlbum from './CreateAlbum'
import { Grid, Header } from 'semantic-ui-react'
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

      <Grid>
        {
          sortedAlbums.map((album) =>
            <Grid.Column mobile={16} tablet={8} computer={4}  key={album.id}>
              <AlbumListItem key={album.id} album={album} user={auth.user} />
            </Grid.Column>


          )
        }
      </Grid>



    </div>
  )
}

export default AlbumList