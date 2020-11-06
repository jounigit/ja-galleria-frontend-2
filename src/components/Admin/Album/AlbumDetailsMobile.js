import React, { useContext } from 'react'
import { Picture } from '../Picture'
import { Grid, Header, Container, Divider } from 'semantic-ui-react'
import ChoosePicture from './ChoosePicture'
import UpdateAlbum from './UpdateAlbum'
import RemoveAlbum from './RemoveAlbum'
import { AuthContext } from '../../../contexts/AuthContext'
import ModalPortal from '../../Shared/modal/modalPortal'

const AlbumDetailsMobile = ({ album }) => {
  const { auth } = useContext(AuthContext)

  const removeAction = <RemoveAlbum
    id={ album.id }
    title={album.title}
    author={album.user.name}
  />

  const updateAction =
  <ModalPortal
    btnIcon='edit'
    header='Update Album'
  >
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
    btnContent='choose/delete'
  >
    <ChoosePicture
      header='Choose pictures to album'
      id={ album.id }
      albumPics={ album.pictures }
    />
  </ModalPortal>

  //console.log('A pics -- ', pictures)
  return (
    <div className='album' data-cy='album'>
      <Container>

        <Header as='h2'>
          {album.title}
          <Header.Subheader>
            Author - {album.user.name}
          </Header.Subheader>
        </Header>
        <p>
          {album.content}
        </p>
        <Divider />
        <Grid>
          <Grid.Column mobile={2}>
            { updateAction }
          </Grid.Column>
          <Grid.Column mobile={2}>
            { removeAction }
          </Grid.Column>
        </Grid>
        <Divider />
        <Header as='h3'>
          Pictures
          <Header.Subheader>
           Choose more pictures to album
          </Header.Subheader>
        </Header>

        { auth.user && chooseAction }
        <Divider />
        {
          album.pictures.map(picture =>
            <Grid.Column  key={picture.id}>
              <Picture key={picture.id} picture={picture} />
            </Grid.Column>
          )
        }

      </Container>
    </div>

  )
}

export default AlbumDetailsMobile