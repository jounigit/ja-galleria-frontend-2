import React, { useState, useContext } from 'react'
import {
  Responsive,
  Segment,
  Menu,
  Container,
  Visibility,
  Button,
  // Header
} from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import { AppHeader } from '../../headers/AppHeader'
import * as routes from '../../../../shared/constants/routes'
import { AuthContext } from '../../../../contexts/AuthContext'
import { UserContext } from '../../../../contexts/UserContext'
import { removeData } from '../../../../services/apiService'
import { DELETE_USER, LOGOUT } from '../../../../reducers/actionTypes'
import { NotificationContext, notify } from '../../../../contexts/NotificationContext'

export default function DesktopContainer({ children }) {
  const [fixed, setFixed] = useState()
  const { auth, dispatch } = useContext(AuthContext)
  const { userDispatch } = useContext(UserContext)
  const { msgDispatch } = useContext(NotificationContext)

  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)

  // resign actions
  const handleResign = () => () => {
    const ok = window.confirm(`remove user ${auth.user}?`)
    if ( ok===false) { return }
    removeData(userDispatch, DELETE_USER, 'users', auth.user.id)
    dispatch({ type: LOGOUT })
    notify( msgDispatch, `user ${auth.user.name} resigned`, 5, 'orange' )
  }

  // logout actions
  const handleLogout = () => () => {
    dispatch({ type: LOGOUT })
    notify( msgDispatch, 'User logged out.', 5, 'teal' )
  }

  // ----------------- menu, navigation -------------------------- //
  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          vertical
          style={{ padding: '1em 0em', marginBottom: '1.5em' }}
        >
          <AppHeader />
          <Menu
            data-cy='menu'
            fixed={fixed ? 'top' : null}
            inverted
            pointing={!fixed}
            secondary={!fixed}
            size='small'>
            <Container>
              <Menu.Item
                as={NavLink}
                to={routes.HOME}
                name='home'
                content='Home'
              />
              <Menu.Item
                as={NavLink}
                to={routes.CATEGORIES}
                name='categories'
                content='Categories'
              />
              <Menu.Item
                as={NavLink}
                to={routes.ALBUMS}
                name='album'
                content='Albums'
              />
              <Menu.Item
                as={NavLink}
                to={routes.PICTURES}
                name='pictures'
                content='Pictures'
              />

              {/* ------ right, login logout ------------ */}
              <Menu.Item position='right'>
                {
                  auth.user &&
                  <Menu.Item
                    as={NavLink}
                    to={routes.ADMIN}
                    data-cy='adminLink'
                    name='admin'
                    content='Admin page'
                  />
                }

                {
                  auth.user === null ?
                    <Button as={Link}
                      to={routes.LOGIN}
                      data-cy='login'
                      name='login'
                      inverted size='tiny'
                      content='Log in'
                    />
                    :
                    <Button as='a'
                      data-cy='logout'
                      onClick={ handleLogout() }
                      inverted size='tiny'>
                      Logout - {auth.user}
                    </Button>
                }

                {
                  auth.user === null &&
                  <Button as={Link}
                    to={routes.SIGNUP}
                    data-cy='signup'
                    inverted primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                    content='Sign Up'
                  />
                }
                {
                  auth.user &&
                  <Button as='a'
                    data-cy='resign'
                    onClick={ handleResign() }
                    inverted primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                    content='Resign'
                  />
                }
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  )
}