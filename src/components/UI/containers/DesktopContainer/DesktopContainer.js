import React, { useState } from 'react'
import {
  Responsive,
  Segment,
  Menu,
  Container,
  Visibility,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { AppHeader } from '../../headers/AppHeader'
import * as routes from '../../../../shared/constants/routes'
import PopupLinks from '../menus/popupLinks'
// import { DropdownMenuUser } from '../menus/DropdownMenuUser'
import { AdminUserMenu } from '../menus/AdminUserMenu'

export default function DesktopContainer({ children }) {
  const [fixed, setFixed] = useState()

  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)

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
              {/* -------- menu links ------------- */}
              <Menu.Item
                as={NavLink}
                to={routes.HOME}
                name='home'
                content='ABOUT'
              />

              {/* ------ popup galleria links ------------ */}
              <PopupLinks />

              {/* <Menu.Item
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
              /> */}

              {/* ------ right, login logout ------------ */}
              <Menu.Item position='right'>

                <AdminUserMenu />

              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </Responsive>
  )
}
