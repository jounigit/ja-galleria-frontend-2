import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Header } from 'semantic-ui-react'

const Album = ({ album }) => {

  const pictures = album.pictures
  return (
    <Grid doubling columns={3}>
      <Grid.Column>
        <Image src={pictures[0].thumb} size='small' wrapped />
      </Grid.Column>
      <Grid.Column>
        <Header as='h3'>
          {album.title}
          <Header.Subheader>
            Author - {album.user.name}
          </Header.Subheader>
        </Header>
        <p>
          {album.content.substring(0,40) }...
        </p>
      </Grid.Column>
      <Grid.Column>
        <Header as='h4'>
          {pictures.length + ' - kuvaa' || 'no pictures'}
        </Header>
        <Link to={`/albums/${album.id}`}>
            show
        </Link>
      </Grid.Column>
    </Grid>
  )
}

export default Album