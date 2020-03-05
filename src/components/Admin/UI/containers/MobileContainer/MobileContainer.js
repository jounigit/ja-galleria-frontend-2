import React, { useState, useContext } from 'react'
import {
  Responsive,
  Sidebar,
  Menu,
  Segment,
  Button,
  Container
} from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import AppHeader from '../../headers/AppHeader/AppHeader'
import * as routes from '../../../../../shared/constants/routes'
import { AuthContext } from '../../../../../contexts/AuthContext'

export default function MobileContainer({ children }) {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const { auth, dispatch } = useContext(AuthContext)

  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item
            name='categories'
            as={NavLink}
            to={routes.ADMINCATEGORIES}
            onClick={() => setSidebarOpened(false)}
            content='Categories'
          />

          <Menu.Item
            name='albums'
            as={NavLink}
            to={routes.ADMINALBUMS}
            onClick={() => setSidebarOpened(false)}
            content='Albums'
          />

          <Menu.Item
            name='pictures'
            as={NavLink}
            to={routes.ADMINPICTURES}
            onClick={() => setSidebarOpened(false)}
            content='Pictures'
          />

        </Sidebar>
        <Sidebar.Pusher
          dimmed={sidebarOpened}
          onClick={() => (sidebarOpened ? setSidebarOpened(false) : null)}
          style={{ minHeight: '100vh' }}
        >
          <Segment
            inverted
            textAlign="center"
            vertical
            style={{ minHeight: '100px',
              padding: '1em 0em',
              marginBottom: '10px' }}
          >
            <AppHeader mobile />
            <Container>
              <Menu inverted pointing secondary size="tiny">
                <Menu.Item
                  onClick={() => setSidebarOpened(!sidebarOpened)}
                  icon='sidebar'
                />
                {/* ------ right, login logout ------------ */}
                <Menu.Item position='right'>
                  <Menu.Item
                    as={NavLink}
                    to={routes.HOME}
                    name='publicPage'
                    content='Public page'
                  />
                  {
                    auth.user === null ?
                      <Button as={Link}
                        to={routes.LOGIN}
                        name='login'
                        inverted
                        content='Log in'
                      />
                      :
                      <Button as='a'
                        onClick={() => dispatch({ type: 'LOGOUT' })}
                        inverted>
                      Logout - {auth.user.name}
                      </Button>
                  }
                </Menu.Item>
              </Menu>

            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Responsive>
  )
}