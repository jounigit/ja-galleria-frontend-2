import React, { useContext } from 'react'
import { Picture } from '../Picture'
import { Grid, Header, Container } from 'semantic-ui-react'
import ChoosePicture from './ChoosePicture'
import ModalSection from '../../Shared/modal/ModalSection'
import UpdateAlbum from './UpdateAlbum'
import RemoveAlbum from './RemoveAlbum'
import { AuthContext } from '../../../contexts/AuthContext'

const AlbumDetails = ({ album }) => {
  const { auth } = useContext(AuthContext)

  const removeAction = <RemoveAlbum
    id={ album.id }
    title={album.title}
    author={album.user.name}
  />

  const updateAction = <ModalSection
    btnIcon={'edit'}
    compToModal={ UpdateAlbum }
    headerContent={'Update Album'}
    id={ album.id }
    title={album.title}
    content={album.content}
    category_id={album.category_id}
  />

  const chooseAction = <ModalSection
    btnIcon={'file image outline'}
    btnContent={'choose/delete pictures'}
    compToModal={ ChoosePicture }
    headerContent={'Choose pictures to album'}
    id={ album.id }
    albumPics={ album.pictures }
  />

  //console.log('A pics -- ', pictures)
  return (
    <div className='album' data-cy='album'>
      <Container>
        <Grid columns={2} padded='horizontally'>
          <Grid.Column color='grey'>
            <Header as='h2'>Album</Header>
            { updateAction }
            { removeAction }

          </Grid.Column>
          <Grid.Column color='grey'>
            <Header as='h3' content='Pictures' />
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
              album.pictures.map(picture =>
                <Grid.Column  key={picture.id}>
                  <Picture key={picture.id} picture={picture} />
                </Grid.Column>
              )
            }
          </Grid>
          {/* </Grid.Row> */}
        </Grid>

      </Container>
    </div>


  )
}

export default AlbumDetails