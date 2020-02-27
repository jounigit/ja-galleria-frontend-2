import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Segment } from 'semantic-ui-react'

const AlbumListItem = ({ album }) => {

  const pictures = album.pictures

  const firstPic = pictures && pictures.length > 0 ?
    pictures[0].thumb : ''
  return (
    <div data-cy='albumListItem'>

      <Image size='medium' src={firstPic} />

      <Header as='h2'>
        {album.title}
        <Header.Subheader>
            Author - {album.user.name}
        </Header.Subheader>
        <Header.Subheader>
          {pictures.length + ' - kuvaa' || 'no pictures'}
        </Header.Subheader>
      </Header>
      <Segment basic>
        {album.content && album.content.substring(0,260) }...
      </Segment>

      <Link to={`/album/${album.id}`} data-cy='showAlbumListItemLink'>show</Link>


      {/* <Card>
        <Image size='medium' src={firstPic} />
        <Card.Content>
          <Card.Header>{album.title}</Card.Header>
          <Card.Meta>Author - {album.user.name}</Card.Meta>
          <Card.Meta>{pictures.length + ' - kuvaa' || 'no pictures'}</Card.Meta>
          <Card.Description>
            {album.content && album.content.substring(0,260) }...
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/album/${album.id}`}>show</Link>
        </Card.Content>
      </Card> */}

      <div className="ui divider"></div>
    </div>

  )
}

export default AlbumListItem