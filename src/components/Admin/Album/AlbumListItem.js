import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Button, Segment, Grid, } from 'semantic-ui-react'
import { AuthContext } from '../../../contexts/AuthContext'
import RemoveAlbum from './RemoveAlbum'
import { PictureContext } from '../../../contexts/PictureContext'

const AlbumListItem = ({ album }) => {
  const { auth } = useContext(AuthContext)
  const { pictures: { data: Pictures } } = useContext(PictureContext)

  if (album === undefined) { return <div className='Item-center'>Loading...</div> }

  //******* album pictures vars *************/
  const albumPictures = album.pictures
  const albumPicturesInfo = albumPictures.length ?
    albumPictures.length + ' - kuvaa' : 'no pictures'

  /****** get first album picture id, filter picture form pictures array ***/
  const getFirst = albumPictures && albumPictures.length && albumPictures[0]
  let firstPic = getFirst !== 0 && Pictures.find(p => p.id === getFirst)

  firstPic = firstPic && <Image src={ firstPic.landscape } fluid />

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
      <Segment>

        { firstPic && firstPic }

        <Header as='h3'>
          {album.title}
          <Header.Subheader>Author - {album.user.username}</Header.Subheader>
          <Header.Subheader>{ albumPicturesInfo }</Header.Subheader>
        </Header>

        <Grid>
          <Grid.Column tablet={3} computer={3}>{ link }</Grid.Column>
          <Grid.Column tablet={3} computer={3}>{ removeAction }</Grid.Column>
        </Grid>

      </Segment>
      }
    </div>
  )
}

export default AlbumListItem




