import React, { useContext } from 'react'
import PictureDetails from '../Picture/PictureDetails'
import { Grid, Header, Segment, Divider } from 'semantic-ui-react'
import ChoosePicture from './ChoosePicture'
import ModalSection from '../../Shared/modal/ModalSection'
import { PictureContext } from '../../../contexts/PictureContext'
import { AuthContext } from '../../../contexts/AuthContext'

const AlbumDetails = ({ album }) => {
  const { pictures } = useContext(PictureContext)
  const { auth } = useContext(AuthContext)

  // console.log('ALBUMDETAILS -- ', album)
  console.log('A pics -- ', pictures)
  return (
    <div className='album' data-cy='album'>
      <Segment>
        <Header as='h3'>
          {album.title}
          <Header.Subheader>
            Author - {album.user.name}
          </Header.Subheader>
        </Header>
        <p>
          {album.content}
        </p>
      </Segment>

      <Header as='h3' content='Pictures' />

      { auth.user &&
      <ModalSection
        btnIcon={'edit'}
        btnContent={'choose/delete pictures'}
        compToModal={ ChoosePicture }
        headerContent={'Choose pictures to album'}
        id={ album.id }
        albumPics={ album.pictures }
      />
      }

      <Divider />
      <Grid doubling columns={3}>
        {
          album.pictures.map(picture =>
            <Grid.Column  key={picture.id}>
              <PictureDetails key={picture.id} picture={picture} />
            </Grid.Column>
          )
        }
      </Grid>

    </div>


  )
}

export default AlbumDetails