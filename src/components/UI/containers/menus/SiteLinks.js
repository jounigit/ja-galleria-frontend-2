import React, { useState } from 'react'
import { Divider, Grid, Icon, Menu, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as routes from '../../../../shared/constants/routes'


const SiteLinks = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  /************ popup actions ********************/
  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  /************ links ********************/
  const linkStyle = {
    color:'grey',
    marginTop:'50px',
    cursor: 'pointer'
  }

  const page1 =
  <Link style={ linkStyle } to={routes.CATEGORIES} onClick={handleClose}>
    <h4>Categories</h4>
  </Link>

  const page2 =
  <Link style={ linkStyle } to={routes.ALBUMS} onClick={handleClose}>
    <h4>Albums</h4>
  </Link>

  const page3 =
  <Link style={ linkStyle } to={routes.PICTURES} onClick={handleClose}>
    <h4>Pictures</h4>
  </Link>

  const columns =
  <>
    <Grid.Column>
      { page1 }
    </Grid.Column>
    <Grid.Column>
      <Divider fitted />
      { page2 }
    </Grid.Column>
    <Grid.Column>
      <Divider fitted />
      { page3 }
    </Grid.Column>
  </>

  return (
    <Popup
      trigger={<Menu.Item> Site links &nbsp; <Icon name='caret down' /> </Menu.Item>}
      flowing
      hoverable
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <Grid divided columns={1}>
        { columns }
      </Grid>
    </Popup>
  )
}

export default SiteLinks