import React, { useContext } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { DELETE_PICTURE } from '../../../reducers/actionTypes'
import apiService from '../../../services/apiService'
import { PictureContext } from '../../../contexts/PictureContext'

const RemovePicture = ({ id, title } ) => {
  const { pictures, dispatch } = useContext(PictureContext)

  const remove = async (id) => {
    const ok = window.confirm(`remove picture '${title}'?`)
    if ( ok===false) {
      return
    }

    try {
      const response = await apiService.remove('pictures', id)
      // const response = removeData(dispatch, DELETE_PICTURE, 'pictures', id)
      console.log('Remove data --', response)

      dispatch({
        type: DELETE_PICTURE,
        id
      })
    } catch (error) {
      console.error()
    }

    console.log('Pics state --', pictures)

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