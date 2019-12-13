import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Item } from 'semantic-ui-react'
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

  const pictures = album.pictures

  const firstPic = pictures && pictures.length > 0 ?
    pictures[0].thumb : ''

  const deleteAlbum = async (id, title, author) => {
    const ok = window.confirm(`remove blog '${title}' by ${author}?`)
    if ( ok===false) {
      return
    }
    try {
      await apiService.remove('albums', id)
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

  const deleteButton = <Button floated='right'
    color='red'
    size='tiny'
    data-cy='delete'
    onClick={() => deleteAlbum( album.id, album.title, album.user.name ) }>
    <Icon name='trash' />
  </Button>

  return (
    <div data-cy='albumListItem'>
      <Item.Group divided>
        <Item>
          <Item.Image size='small' src={firstPic} />
          <Item.Content>
            <Item.Header>{album.title}</Item.Header>
            <Item.Meta>
              <span className='stay'>Author - {album.user.name}</span>
            </Item.Meta>
            <Item.Meta>
              {pictures.length + ' - kuvaa' || 'no pictures'}
            </Item.Meta>
            <Item.Description>{album.content.substring(0,260) }...</Item.Description>
            <Item.Extra>
              <Link to={`/albums/${album.id}`}>show</Link>
              { state.user && deleteButton }
              { state.user &&

                   <UpdateAlbum
                     id={ album.id }
                     title={album.title}
                     content={album.content}
                     category={album.category}
                   />

              }

            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      <div className="ui divider"></div>
    </div>

  )
}

export default Album