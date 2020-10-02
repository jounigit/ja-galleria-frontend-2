import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumContext } from '../../contexts/AlbumContext'
import { PictureListItem } from '../Picture'
import { Grid, Header } from 'semantic-ui-react'

const AlbumDetails = () => {
  const { albums } = useContext(AlbumContext)
  let { id } = useParams()
  let album = albums.data &&
  albums.data.find((item) => item.id === id)
  // console.log('Album: ', album)

  return (
    <div className='album' data-cy='album'>
      {albums.loading && <div className="loader">Loading ...</div>}
      { id && album &&
      <Grid columns={2} divided>
        <Grid.Column>
          <Header as='h2'>
            {album.title}
            <Header.Subheader>
        Author - {album.user.name}
            </Header.Subheader>
          </Header>
          <p>
            {album.content}
          </p>
        </Grid.Column>
        <Grid columns={4}>
          {
            album.pictures.map(picture =>
              <Grid.Column  key={picture.id}>
                <PictureListItem key={picture.id} picture={picture} />
              </Grid.Column>
            )
          }
        </Grid>
      </Grid>
      }

    </div>


  )
}

export default AlbumDetails