import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Header, Button, Segment } from 'semantic-ui-react'
import { AuthContext } from '../../App'
import { AlbumContext } from '../../contexts/AlbumContext'
import albumService from '../../services/albumService'
import {
  DELETE_ALBUM,
  FAILURE
} from '../../reducers/actionTypes'

const Album = ({ album }) => {
  const { state } = useContext(AuthContext)
  const { albums, dispatch } = useContext(AlbumContext)
  // set token for api
  albumService.setToken(state.token)
  const pictures = album.pictures
  const firstPic = pictures && pictures.length > 0 ?
    <Image src={pictures[0].thumb} size='small' wrapped /> : 'No pictures yet.'

  const deleteAlbum = async (id, title, author) => {
    const ok = window.confirm(`remove blog '${title}' by ${author}?`)
    if ( ok===false) {
      return
    }
    try {
      console.log('ListItem :::', albums.data)
      const res = await albumService.remove(id)
      console.log('ListItem res :::', res)
      const newAlbums = albums.data.filter(d => d.id !== id)
      console.log('ListItem new :::', newAlbums)
      dispatch({
        type: DELETE_ALBUM,
        data: newAlbums
      })
    } catch(error) {
      dispatch({
        type: FAILURE, error
      })
    }
  }

  return (
    <div data-cy='albumListItem'>
      <Segment>
        <Grid doubling columns={3}>
          <Grid.Column>
            { firstPic }
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
            <Grid columns={2}>
              <Grid.Column>
                <Header as='h4'>
                  {pictures.length + ' - kuvaa' || 'no pictures'}
                </Header>
                <Link to={`/albums/${album.id}`}>show</Link>
              </Grid.Column>
              <Grid.Column>
                { state.user &&
                  <Button
                    color='red'
                    size='mini'
                    data-cy='delete'
                    onClick={() => deleteAlbum( album.id, album.title, album.user.name ) }>
                      delete
                  </Button> }
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>

  )
}

export default Album