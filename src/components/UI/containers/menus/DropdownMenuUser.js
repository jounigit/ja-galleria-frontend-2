import React, { useContext } from 'react'
import { DELETE_USER, LOGOUT } from '../../../../reducers/actionTypes'
import { NotificationContext, notify } from '../../../../contexts/NotificationContext'
import { AuthContext } from '../../../../contexts/AuthContext'
import { UserContext } from '../../../../contexts/UserContext'
import { removeData } from '../../../../services/apiService'
import { Divider, Dropdown, Icon } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import * as routes from '../../../../shared/constants/routes'


export const DropdownMenuUser = () => {
  const { auth, dispatch } = useContext(AuthContext)
  const { userDispatch } = useContext(UserContext)
  const { msgDispatch } = useContext(NotificationContext)

  // logout actions
  const handleLogout = () => () => {
    dispatch({ type: LOGOUT })
    notify( msgDispatch, 'User logged out.', 5, 'teal' )
  }

  // resign actions
  const handleResign = () => () => {
    const ok = window.confirm(`remove user ${auth.user}?`)
    if ( ok===false) { return }
    removeData(userDispatch, DELETE_USER, 'users', auth.id)
    dispatch({ type: LOGOUT })
    notify( msgDispatch, 'user resigned successfully', 5, 'orange' )
  }

  const menuLinks =
  <Dropdown text='ADMIN TOOLS' pointing className='link item'>
    <Dropdown.Menu>
      <Dropdown.Header>
        { auth.user && <> <Icon name='user' />   {auth.user}<Divider /> </> }
      </Dropdown.Header>
      {
        auth.user === null ?
          <Dropdown.Item as={Link}
            to={routes.LOGIN}
            data-cy='login'
            icon='sign-in'
            text='Login'
          />

          :

          <Dropdown.Item
            as='a'
            data-cy='logout'
            onClick={ handleLogout() }
            icon='sign-out'
            text='Logout'
          />
      }
      <Dropdown.Divider />
      {
        auth.user === null &&
          <Dropdown.Item
            as={Link}
            to={routes.SIGNUP}
            data-cy='signup'
            icon='signup'
            text='Sign Up'
          />
      }
      {
        auth.user &&
        <Dropdown.Item
          as='a'
          data-cy='resign'
          icon='remove user'
          onClick={ handleResign() }
          text='Resign'
        />
      }
      <Dropdown.Divider />
      {
        auth.user &&
        <Dropdown.Item
          as={NavLink}
          to={routes.ADMIN}
          data-cy='adminLink'
          name='admin'
          text='Admin page'
        />
      }
    </Dropdown.Menu>
  </Dropdown>


  return (
    <>
      { menuLinks }
    </>
  )
}