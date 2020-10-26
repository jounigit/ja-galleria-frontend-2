import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Segment } from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'

const AlbumListItem = ({ album }) => {
  const { pictures } = useContext(PictureContext)
  console.log('AlbumListItem: ', album)

  const albumPictures = album.pictures
  const getFirst = albumPictures && albumPictures.length && albumPictures[0]

  const firstPic = getFirst && pictures.data &&
    pictures.data.filter(p => p.id === getFirst)


  return (
    <div data-cy='albumListItem'>

      { firstPic ?
        <Image size='medium' src={firstPic && firstPic[0].image} /> : ''
      }

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
      <Segment basic>
        {album.content && album.content.substring(0,260) }...
      </Segment>

      <Link to={`/album/${album.id}`} data-cy='albumListItemLink'>show</Link>

      <div className="ui divider"></div>
    </div>

  )
}

export default AlbumListItem