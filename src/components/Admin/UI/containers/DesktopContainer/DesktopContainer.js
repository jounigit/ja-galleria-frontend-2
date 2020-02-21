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
import { NavLink } from 'react-router-dom'
import { AppHeader } from '../../headers/AppHeader'
import * as routes from '../../../../../shared/constants/routes'
import { AuthContext } from '../../../../../contexts/AuthContext'

export default function DesktopContainer({ children }) {
  const [fixed, setFixed] = useState()
  const { auth, dispatch } = useContext(AuthContext)

  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)

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
            {
              auth.user === null ?
                <h3>
                  unAuthorized
                </h3>
                :
                <Container>
                  <Menu.Item
                    as={NavLink}
                    to={routes.ADMIN}
                    name='adminHome'
                    content='Home'
                  />
                  <Menu.Item
                    as={NavLink}
                    to={routes.ADMINCATEGORIES}
                    name='categories'
                    content='Categories'
                  />
                  <Menu.Item
                    as={NavLink}
                    to={routes.ADMINALBUMS}
                    name='album'
                    content='Albums'
                  />
                  <Menu.Item
                    as={NavLink}
                    to={routes.ADMINPICTURES}
                    name='pictures'
                    content='Pictures'
                  />

                  {/* ------ right, login logout ------------ */}
                  <Menu.Item position='right'>
                    <Menu.Item
                      as={NavLink}
                      to={routes.HOME}
                      name='publicPage'
                      content='Public page'
                    />

                    <Button as='a'
                      data-cy='logout'
                      onClick={() => dispatch({ type: 'LOGOUT' })}
                      inverted size='tiny'>
                      Logout - {auth.user.name}
                    </Button>
                  </Menu.Item>
                </Container>
            }
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  )
}