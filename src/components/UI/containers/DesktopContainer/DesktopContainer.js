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
import GalleriaLinks from '../menus/GalleriaLinks'
import { PopupAdminUserMenu } from '../menus/PopupAdminUserMenu'
import SiteLinks from '../menus/SiteLinks'

export default function DesktopContainer({ children }) {
  const [fixed, setFixed] = useState()

  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)

  // ----------------- menu, navigation -------------------------- //
  return (
    // <Container>
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
          // style={{ padding: '1em 0em', marginBottom: '1.5em' }}
        >
          <AppHeader />
          <Menu
            data-cy='menu'
            fixed={fixed ? 'top' : null}
            inverted
            // pointing={!fixed}
            secondary={!fixed}
            size='small'
          >
            <Container>
              {/* -------- menu links ------------- */}
              <Menu.Item
                as={NavLink}
                to={routes.HOME}
                name='home'
                content='HOME'
              />

              {/* ------ popup galleria links ------------ */}
              <GalleriaLinks />

              <SiteLinks />

              {/* ------ right, login logout ------------ */}
              <Menu.Menu position='right'>

                <PopupAdminUserMenu />

                {/* <AdminUserMenu /> */}

              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </Responsive>
    // </Container>
  )
}
