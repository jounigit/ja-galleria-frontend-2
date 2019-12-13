import React, { useContext } from 'react'
import { Button, Icon } from 'semantic-ui-react'
// import { AuthContext } from '../../App'
import { AlbumContext } from '../../contexts/AlbumContext'
import apiService from '../../services/apiService'
import { DELETE_ALBUM, FAILURE } from '../../reducers/actionTypes'

const RemoveAlbum = ({ id, title, author } ) => {
  const { dispatch } = useContext(AlbumContext)

  const remove = async (id, title, author) => {
    const ok = window.confirm(`remove category '${title}' by ${author}?`)
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
  return (
    <div>
      <Button floated='right'
        color='red'
        size='tiny'
        data-cy='delete'
        onClick={() => remove( id, title, author ) }
      >
        <Icon name='trash' />
      </Button>
    </div>
  )
}

export default RemoveAlbum