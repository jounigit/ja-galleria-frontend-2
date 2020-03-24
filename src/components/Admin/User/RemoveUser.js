import React, { useContext } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { UserContext } from '../../../contexts/UserContext'
import { AuthContext } from '../../../contexts/AuthContext'
import { DELETE_USER, LOGOUT } from '../../../reducers/actionTypes'
import { removeData } from '../../../services/apiService'

const RemoveAlbum = ({ id, user } ) => {
  const { dispatch } = useContext(AuthContext)
  const { userDispatch } = useContext(UserContext)

  const remove = async (id, user) => {
    const ok = window.confirm(`remove user ${user.name}?`)
    if ( ok===false) {
      return
    }
    removeData(userDispatch, DELETE_USER, 'users', id)
    dispatch({ type: LOGOUT })
  }
  return (
    <div>
      <Container>
        {/* { auth.loggedOut && <Redirect to='/home' /> } */}
        <Button
          floated='left'
          size='tiny'
          negative
          data-cy='delete'
          icon='trash'
          onClick={() => remove( id, user ) }
        />
      </Container>
    </div>
  )
}

export default RemoveAlbum