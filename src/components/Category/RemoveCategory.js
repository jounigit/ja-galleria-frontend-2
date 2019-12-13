import React, { useContext } from 'react'
import { Button, Icon } from 'semantic-ui-react'
// import { AuthContext } from '../../App'
import { CategoryContext } from '../../contexts/CategoryContext'
import apiService from '../../services/apiService'
import {
  DELETE_CATEGORY,
  FAILURE
} from '../../reducers/actionTypes'

const RemoveCategory = ({ id, title, author } ) => {
  const { dispatch } = useContext(CategoryContext)

  const remove = async (id, title, author) => {
    const ok = window.confirm(`remove category '${title}' by ${author}?`)
    if ( ok===false) {
      return
    }

    try {
      await apiService.remove('categories', id)
      dispatch({
        type: DELETE_CATEGORY,
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

export default RemoveCategory