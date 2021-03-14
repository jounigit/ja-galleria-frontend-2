import React, { useContext } from 'react'
import AlbumListItem from './AlbumListItem'
import { AuthContext } from '../../../contexts/AuthContext'
import CreateAlbum from './CreateAlbum'
import { Grid, Header, Segment } from 'semantic-ui-react'
import ModalPortal from '../../Shared/modal/modalPortal'

const AlbumList = ({ albums }) => {
  const { auth } = useContext(AuthContext)

  console.log('= AlbumList: ', albums)

  const sortedAlbums = albums.filter(a =>  a.user.id === auth.id )

  //********************************************/
  return (
    <div className='AlbumList' style={{ marginBottom: 100 }}>
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

      <Segment basic textAlign='center'><Header as='h1' content='ALBUMS' /></Segment>

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