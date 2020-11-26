import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AlbumContext } from '../../contexts/AlbumContext'
import { PictureListItem } from '../Picture'
import { Grid, Header } from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'

const AlbumDetails = () => {
  const { albums } = useContext(AlbumContext)
  const { pictures } = useContext(PictureContext)
  let { id } = useParams()

  // :::::::::: find album :::::::::::::::::::: //
  let album = albums.data && albums.data.find((item) => item.id === id)

  // :::::::::: find pictures ::::::::::::::::: //
  const ids = album && album.pictures
  const pics = pictures.data

  const albumPictures = pics && ids &&
    pics.map(p => ids.includes(p.id) ? p : null).filter(p => p !== null)

  // :::::::::::::::::::::::::::::::::::: //
  return (
    <div className='album' data-cy='album'>
      {albums.loading && <div className="loader">Loading ...</div>}
      { id && album &&
      <Grid.Column>

        <Header as='h4'>
          {album.title}
          <Header.Subheader>
              Author - {album.user.username}
          </Header.Subheader>
        </Header>

        <Grid columns={2} divided>
          <Grid.Column>
            <div dangerouslySetInnerHTML={{ __html: album.content }}></div>
          </Grid.Column>
          <Grid columns={4}>
            { albumPictures &&
            albumPictures.map( (picture, i) =>
              <Grid.Column  key={i}>
                <PictureListItem key={picture.id} picture={picture} />
              </Grid.Column>
            )
            }
          </Grid>
        </Grid>
      </Grid.Column>

      }

    </div>


  )
}

export default AlbumDetails