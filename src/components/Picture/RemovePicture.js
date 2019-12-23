import React, { useContext } from 'react'
import { Button, Icon, Container } from 'semantic-ui-react'
import { DELETE_PICTURE } from '../../reducers/actionTypes'
import { removeData } from '../../actions/fetchData'
import { PictureContext } from '../../contexts/PictureContext'

const RemovePicture = ({ id, title } ) => {
  const { dispatch } = useContext(PictureContext)

  const remove = async (id, title) => {
    const ok = window.confirm(`remove picture '${title}'?`)
    if ( ok===false) {
      return
    }

    removeData(dispatch, DELETE_PICTURE, 'pictures', id)

  }
  return (
    <div>
      <Container>
        <Button floated='right'
          color='red'
          size='tiny'
          data-cy='delete'
          onClick={() => remove( id, title ) }
        >
          <Icon name='trash' />
        </Button>
      </Container>
    </div>
  )
}

export default RemovePicture