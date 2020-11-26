import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Button, Grid } from 'semantic-ui-react'
import { AuthContext } from '../../../contexts/AuthContext'
// import UpdateAlbum from './UpdateAlbum'
import RemoveAlbum from './RemoveAlbum'
// import ChoosePicture from './ChoosePicture'
import { PictureContext } from '../../../contexts/PictureContext'
// import ModalPortal from '../../Shared/modal/modalPortal'

const AlbumListItem = ({ album }) => {
  const { auth } = useContext(AuthContext)
  const { pictures } = useContext(PictureContext)

  console.log('Album list item: ', album)

  //******* album pictures vars *************/
  const albumPictures = album.pictures
  const albumPicturesInfo = albumPictures.length ?
    albumPictures.length + ' - kuvaa' : 'no pictures'

  const getFirst = albumPictures && albumPictures.length && albumPictures[0]
  const firstPic = getFirst && pictures.data &&
    pictures.data.filter(p => p.id === getFirst)

  const firstPicInfo = firstPic ?
    <Image size='small' src={firstPic && firstPic[0].image} /> : ''

  //********************************************/
  const link = <Link to={`/admin/album/${album.id}`}>
    <Button size='tiny' positive icon='edit' />
  </Link>
  const removeAction = <RemoveAlbum
    id={ album.id }
    title={album.title}
    author={album.user.username}
  />

  //********************************************/
  return (
    <div className='album' data-cy='albumListItem'>
      { auth.user &&
      <>

        { firstPicInfo }

        <Header as='h3'>
          {album.title}
          <Header.Subheader>Author - {album.user.username}</Header.Subheader>
          <Header.Subheader>{ albumPicturesInfo }</Header.Subheader>
        </Header>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              { link }
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              { removeAction }
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </>
      }
    </div>
  )
}

export default AlbumListItem




