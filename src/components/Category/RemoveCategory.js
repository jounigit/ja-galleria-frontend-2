import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import { CategoryContext } from '../../contexts/CategoryContext'
import {
  DELETE_CATEGORY
} from '../../reducers/actionTypes'
import { removeData } from '../../services/apiService'

const RemoveCategory = ({ id, title, author } ) => {
  const { dispatch } = useContext(CategoryContext)

  const remove = async (id, title, author) => {
    const ok = window.confirm(`remove category '${title}' by ${author}?`)
    if ( ok===false) {
      return
    }

    removeData(dispatch, DELETE_CATEGORY, 'categories', id)

  }
  return (
    <div>
      <Button
        floated='left'
        size='tiny'
        negative
        data-cy='delete'
        icon='trash'
        onClick={() => remove( id, title, author ) }
      />
    </div>
  )
}

export default RemoveCategory