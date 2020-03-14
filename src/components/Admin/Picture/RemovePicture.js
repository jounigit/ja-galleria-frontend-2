import React, { useContext } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { DELETE_PICTURE } from '../../../reducers/actionTypes'
import { removeData } from '../../../services/apiService'
import { PictureContext } from '../../../contexts/PictureContext'

const RemovePicture = ({ id, title } ) => {
  const { dispatch } = useContext(PictureContext)

  const remove = async (id, title) => {
    const ok = window.confirm(`remove picture '${title}'?`)
    if ( ok===false) {
      return
    }

    try {
      removeData(dispatch, DELETE_PICTURE, 'pictures', id)
    } catch (error) {
      console.error()
    }

  }
  return (
    <div>
      <Container>
        <Button
          floated='left'
          size='tiny'
          negative
          data-cy='delete'
          icon='trash'
          onClick={() => remove( id, title ) }
        />
      </Container>
    </div>
  )
}

export default RemovePicture