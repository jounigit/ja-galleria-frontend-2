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
import * as routes from '../../../../shared/constants/routes'
import { AuthContext } from '../../../../contexts/AuthContext'

export default function MobileContainer({ children }) {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const { auth, dispatch } = useContext(AuthContext)

  const adminButtons = () => {
    return (
      <>
        <Button as={NavLink}
          data-cy='admin'
          to={routes.ADMIN}
          inverted size='tiny'>
                admin
        </Button>
        <Button as='a'
          data-cy='logout'
          onClick={() => dispatch({ type: 'LOGOUT' })}
          inverted size='tiny'>
                      Logout - {auth.user.name}
        </Button>
      </>
    )
  }

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
            to={routes.CATEGORIES}
            onClick={() => setSidebarOpened(false)}
            content='Categories'
          />

          <Menu.Item
            name='albums'
            as={NavLink}
            to={routes.ALBUMS}
            onClick={() => setSidebarOpened(false)}
            content='Albums'
          />

          <Menu.Item
            name='pictures'
            as={NavLink}
            to={routes.PICTURES}
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
                      adminButtons()
                  }
                  <Button as='a'
                    data-cy='signup'
                    inverted
                    style={{ marginLeft: '0.5em' }}
                    content='Sign Up'
                  />
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