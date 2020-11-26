import React, { useContext, useState } from 'react'
import { Picture } from '../Picture'
import { Grid, Header, Button, Segment, Divider, Container, Label, Popup } from 'semantic-ui-react'
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
  const [isFormOpen, setIsFormOpen] = useState(false)
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

  // ::::::::::::::::::::::::::::::::::::::::::::: //
  const category_id = album.category ? album.category.id : ''

  const albumContentInfo = album.content ?
    <div dangerouslySetInnerHTML={{ __html: album.content }}></div> :
    <Header as='h5'>No content yet. Edit album content.</Header>

  const showForm =
    <Segment>
      <Label color='olive' attached='top'>Edit {album.title}</Label>
      <UpdateAlbum
        id={ album.id }
        title={album.title}
        content={album.content}
        category_id={ category_id }
      />
    </Segment>

  const showTexContent =
  <>
    <Header as='h5'>
      {album.title}
      <Header.Subheader>
            Author - {album.user.username}
      </Header.Subheader>
    </Header>
    <Header as='h5'>Category - { album.category && album.category.title }</Header>
    {albumContentInfo}
  </>

  const editButton = <Popup
    trigger={<Button color='olive' size='mini' content='edit' onClick={ () => setIsFormOpen(!isFormOpen) } />}
    content="Open or close update form."
    basic
  />

  return (
    <Container>
      <Segment>
        { removeAction }
        <Grid columns={2} relaxed='very' divided>
          <Grid.Column>
            { editButton }
            <Divider section />
            { isFormOpen &&
              showForm
            }
            { !isFormOpen &&
              showTexContent
            }
          </Grid.Column>
          <Grid.Column>
            { auth.user && chooseAction }

            <Divider section />

            <Grid columns={4}>
              {
                albumPictures.map(picture =>
                  <Grid.Column  key={picture.id}>
                    <Picture key={picture.id} picture={picture} />
                  </Grid.Column>
                )
              }
            </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>




  )
}

export default AlbumDetails