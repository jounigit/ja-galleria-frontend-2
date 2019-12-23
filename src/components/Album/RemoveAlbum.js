import React, { useContext } from 'react'
import { Button, Icon, Container } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'
import { DELETE_ALBUM } from '../../reducers/actionTypes'
import { removeData } from '../../actions/fetchData'

const RemoveAlbum = ({ id, title, author } ) => {
  const { dispatch } = useContext(AlbumContext)

  const remove = async (id, title, author) => {
    const ok = window.confirm(`remove category '${title}' by ${author}?`)
    if ( ok===false) {
      return
    }

    removeData(dispatch, DELETE_ALBUM, 'albums', id)

  }
  return (
    <div>
      <Container>
        <Button floated='right'
          color='red'
          size='tiny'
          data-cy='delete'
          onClick={() => remove( id, title, author ) }
        >
          <Icon name='trash' />
        </Button>
      </Container>
    </div>
  )
}

export default RemoveAlbum