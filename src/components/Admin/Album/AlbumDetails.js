import React, { useContext } from 'react'
import { Picture } from '../Picture'
import { Grid, Header, Container } from 'semantic-ui-react'
import ChoosePicture from './ChoosePicture'
import UpdateAlbum from './UpdateAlbum'
import RemoveAlbum from './RemoveAlbum'
import { AuthContext } from '../../../contexts/AuthContext'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { PictureContext } from '../../../contexts/PictureContext'
import { useParams } from 'react-router'
import ModalPortal from '../../Shared/modal/modalPortal'

const AlbumDetails = () => {
  const { albums } = useContext(AlbumContext)
  const { pictures } = useContext(PictureContext)
  const { auth } = useContext(AuthContext)
  let { id } = useParams()

  // :::::::::: find album :::::::::::::::::::: //
  let album = albums.data && albums.data.find((item) => item.id === id)

  console.log('AlbumDetails: ', album)
  // :::::::::: find pictures ::::::::::::::::: //
  const ids = album && album.pictures
  const pics = pictures.data

  const albumPictures = pics && ids &&
    pics.map(p => ids.includes(p.id) ? p : null).filter(p => p !== null)

  // ::::::::::: actions ::::::::::::::::::::::::: //
  const removeAction = <RemoveAlbum
    id={ album.id }
    title={album.title}
    author={album.user.name}
  />

  const updateAction =
  <ModalPortal btnIcon='edit'>
    <UpdateAlbum
      id={ album.id }
      title={album.title}
      content={album.content}
      category_id={album.category_id}
    />
  </ModalPortal>

  const chooseAction =
  <ModalPortal
    btnIcon='file image outline'
    btnContent='choose/delete pictures'
  >
    <ChoosePicture
      header='Choose pictures to album'
      id={ album.id }
      albumPics={ album.pictures }
    />
  </ModalPortal>



  return (
    <div className='album' data-cy='album'>
      <Container>
        <Grid columns={2} padded='horizontally'>
          <Grid.Column>
            {/* <Header as='h2'>Album</Header> */}
            { updateAction }
            { removeAction }

          </Grid.Column>
          <Grid.Column>
            {/* <Grid.Column color='grey'> */}
            {/* <Header as='h3' content='Pictures' /> */}
            { auth.user && chooseAction }
          </Grid.Column>
        </Grid>
        <Grid columns={2} divided>
          {/* <Grid.Row> */}
          <Grid.Column>
            <Header as='h2'>
              {album.title}
              <Header.Subheader>
            Author - {album.user.name}
              </Header.Subheader>
            </Header>
            <p>
              {album.content}
            </p>
          </Grid.Column>
          <Grid columns={4}>
            {
              albumPictures.map(picture =>
                <Grid.Column  key={picture.id}>
                  <Picture key={picture.id} picture={picture} />
                </Grid.Column>
              )
            }
          </Grid>
        </Grid>

      </Container>
    </div>


  )
}

export default AlbumDetails