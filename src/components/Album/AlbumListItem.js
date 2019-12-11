import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Header, Button, ButtonGroup, Icon, Segment } from 'semantic-ui-react'
import { AuthContext } from '../../App'
import { AlbumContext } from '../../contexts/AlbumContext'
import apiService from '../../services/apiService'
import UpdateAlbum from './UpdateAlbum'
import {
  DELETE_ALBUM,
  FAILURE
} from '../../reducers/actionTypes'

const Album = ({ album }) => {
  const { state } = useContext(AuthContext)
  const { dispatch } = useContext(AlbumContext)
  const [formVisibility, setFormVisibility] = useState(false)

  const showWhenVisible = { display: formVisibility ? '' : 'none' }


  const pictures = album.pictures
  const firstPic = pictures && pictures.length > 0 ?
    <Image src={pictures[0].thumb} size='small' wrapped /> : 'No pictures yet.'

  const deleteAlbum = async (id, title, author) => {
    const ok = window.confirm(`remove blog '${title}' by ${author}?`)
    if ( ok===false) {
      return
    }
    try {
      await apiService.remove(id)
      dispatch({
        type: DELETE_ALBUM,
        id
      })
    } catch(error) {
      dispatch({
        type: FAILURE, error
      })
    }
  }

  const actionButtons = (
    <ButtonGroup>
      <Button
        color='green'
        size='tiny'
        data-cy='update'
        onClick={() => setFormVisibility(!formVisibility)}
      >
        <Icon name='edit' />
      </Button>
      <Button
        color='red'
        size='tiny'
        data-cy='delete'
        onClick={() => deleteAlbum( album.id, album.title, album.user.name ) }>
        <Icon name='trash' />
      </Button>
    </ButtonGroup>
  )

  return (
    <div data-cy='albumListItem'>
      <Segment>
        <Grid doubling columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <div style={showWhenVisible}>
              <UpdateAlbum id={ album.id } setFormVisibility={setFormVisibility} formVisibility={formVisibility} />
            </div>
          </Grid.Column>
          <Grid.Column>
            { state.user && actionButtons }
          </Grid.Column>
        </Grid>
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
              
            </Grid>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>

  )
}

export default Album