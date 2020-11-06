import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Grid, Segment } from 'semantic-ui-react'
import { AuthContext } from '../../../contexts/AuthContext'
import UpdateAlbum from './UpdateAlbum'
import RemoveAlbum from './RemoveAlbum'
import ChoosePicture from './ChoosePicture'
import { PictureContext } from '../../../contexts/PictureContext'
import ModalPortal from '../../Shared/modal/modalPortal'

const AlbumListItem = ({ album }) => {
  const { auth } = useContext(AuthContext)
  const { pictures } = useContext(PictureContext)

  const albumPictures = album.pictures
  const getFirst = albumPictures && albumPictures.length && albumPictures[0]

  const firstPic = getFirst && pictures.data &&
    pictures.data.filter(p => p.id === getFirst)

  // ::::::::::: actions ::::::::::::::::::::::::: //
  const chooseAction =
  <ModalPortal btnIcon='file image outline'>
    <ChoosePicture
      header='Choose pictures to album'
      id={ album.id }
      albumPics={ album.pictures }
    />
  </ModalPortal>

  const editAction =
  <ModalPortal btnIcon='edit'>
    <UpdateAlbum
      id={ album.id }
      title={album.title}
      content={album.content}
      category_id={album.category_id}
    />
  </ModalPortal>

  const removeAction = <RemoveAlbum
    id={ album.id }
    title={album.title}
    author={album.user.username}
  />

  return (
    <div className='album' data-cy='albumListItem'>
      { auth.user &&
      <Segment>
        <Grid>

          <Grid.Column  mobile={16} tablet={8} computer={4}>
            { firstPic ?
              <Image size='small' src={firstPic && firstPic[0].image} /> : ''
            }
          </Grid.Column>

          <Grid.Column  mobile={16} tablet={8} computer={9}>
            <Header as='h2'>
              {album.title}
              <Header.Subheader>
                Author - {album.user.username}
              </Header.Subheader>
              <Header.Subheader>
                {
                  albumPictures.length ?
                    albumPictures.length + ' - kuvaa' : 'no pictures'
                }
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

// const editAction = <ModalSection
// btnIcon={'edit'}
// compToModal={ UpdateAlbum }
// headerContent={'Update Album'}
// id={ album.id }
// title={album.title}
// content={album.content}
// category_id={album.category_id}
// />