import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Grid, Segment } from 'semantic-ui-react'
import { AuthContext } from '../../../contexts/AuthContext'
import UpdateAlbum from './UpdateAlbum'
import RemoveAlbum from './RemoveAlbum'
import ModalSection from '../../Shared/modal/ModalSection'
import ChoosePicture from './ChoosePicture'

const AlbumListItem = ({ album }) => {
  const { auth } = useContext(AuthContext)

  const pictures = album.pictures
  const firstPic = pictures && pictures.length > 0 ?
    pictures[0].thumb : ''

  const chooseAction = <ModalSection
    btnIcon={'file image outline'}
    compToModal={ ChoosePicture }
    headerContent={'Choose pictures to album'}
    id={ album.id }
    albumPics={ album.pictures }
  />

  const editAction = <ModalSection
    btnIcon={'edit'}
    compToModal={ UpdateAlbum }
    headerContent={'Update Album'}
    id={ album.id }
    title={album.title}
    content={album.content}
    category_id={album.category_id}
  />

  const removeAction = <RemoveAlbum
    id={ album.id }
    title={album.title}
    author={album.user.name}
  />

  console.log('AlbumListItem -> Album')
  return (
    <div className='album' data-cy='albumListItem'>
      { auth.user &&
      <Segment>
        <Grid>

          <Grid.Column  mobile={16} tablet={8} computer={4}>
            <Image size='small' src={firstPic} />
          </Grid.Column>

          <Grid.Column  mobile={16} tablet={8} computer={9}>
            <Header as='h2'>
              {album.title}
              <Header.Subheader>
                Author - {album.user.name}
              </Header.Subheader>
              <Header.Subheader>
                {pictures.length + ' - kuvaa' || 'no pictures'}
              </Header.Subheader>
            </Header>
            <p>{album.content && album.content.substring(0,260) }...</p>
            <Link to={`/admin/album/${album.id}`}>show</Link>
          </Grid.Column>

          <Grid.Column  mobile={2} tablet={1} computer={1}>
            { chooseAction }
          </Grid.Column>

          <Grid.Column  mobile={1} tablet={1} computer={1}>
            { editAction }
          </Grid.Column>

          <Grid.Column  mobile={1} tablet={1} computer={1}>
            { removeAction }
          </Grid.Column>
        </Grid>

      </Segment>

      }
    </div>
  )
}

export default AlbumListItem