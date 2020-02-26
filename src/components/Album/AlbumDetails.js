import React from 'react'
import PictureDetails from '../Picture/PictureDetails'
import { Grid, Header, Segment, Divider } from 'semantic-ui-react'

const AlbumDetails = ({ album }) => {

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