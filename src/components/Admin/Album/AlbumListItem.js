import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Button, Table, Segment, } from 'semantic-ui-react'
import { AuthContext } from '../../../contexts/AuthContext'
import RemoveAlbum from './RemoveAlbum'
import { PictureContext } from '../../../contexts/PictureContext'

const AlbumListItem = ({ album }) => {
  const { auth } = useContext(AuthContext)
  const { pictures: { data: Pictures } } = useContext(PictureContext)

  // console.log('Album list item: ', album)

  //******* album pictures vars *************/
  const albumPictures = album.pictures
  const albumPicturesInfo = albumPictures.length ?
    albumPictures.length + ' - kuvaa' : 'no pictures'

  const getFirst = albumPictures && albumPictures.length && albumPictures[0]
  const firstPic = getFirst && Pictures && Pictures.filter(p => p.id === getFirst)

  const firstPicInfo = firstPic ?
    <Image fluid src={ firstPic[0].landscape } /> : ''

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

        { firstPicInfo }

        <Header as='h3'>
          {album.title}
          <Header.Subheader>Author - {album.user.username}</Header.Subheader>
          <Header.Subheader>{ albumPicturesInfo }</Header.Subheader>
        </Header>

        <Table.Row>
          <Table.Cell>
            { link }
          </Table.Cell>
          <Table.Cell>
            { removeAction }
          </Table.Cell>
        </Table.Row>

      </Segment>
      }
    </div>
  )
}

export default AlbumListItem




