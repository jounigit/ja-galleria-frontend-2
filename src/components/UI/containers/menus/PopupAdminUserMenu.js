import React, { useContext, useState } from 'react'
import {
  DELETE_USER, LOGOUT } from '../../../../reducers/actionTypes'
import { NotificationContext, notify } from '../../../../contexts/NotificationContext'
import { AuthContext } from '../../../../contexts/AuthContext'
import { UserContext } from '../../../../contexts/UserContext'
import { removeData } from '../../../../services/apiService'
import { Button, Divider, Grid, Header, Icon, Menu, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as routes from '../../../../shared/constants/routes'


export const PopupAdminUserMenu = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const { auth, dispatch } = useContext(AuthContext)
  const { userDispatch } = useContext(UserContext)
  const { msgDispatch } = useContext(NotificationContext)

  /************ popup actions ********************/
  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  // logout action
  const handleLogout = () => {
    dispatch({ type: LOGOUT })
    notify( msgDispatch, 'User logged out.', 3, 'teal' )
  }

  // resign action
  const handleResign = () => {
    const ok = window.confirm(`remove user ${auth.user}?`)
    if ( ok===false) { return }
    removeData(userDispatch, DELETE_USER, 'users', auth.id)
    dispatch({ type: LOGOUT })
    notify( msgDispatch, 'user resigned successfully', 5, 'orange' )
  }

  const clickLogout = (e) => {
    e.preventDefault()
    handleLogout()
    handleClose()
  }

  const clickResign = (e) => {
    e.preventDefault()
    handleResign()
    handleClose()
  }

  /************ links ********************/
  const linkStyle = {
    color:'grey',
    marginTop:'50px',
    cursor: 'pointer'
  }

  const adminpage =
  <Link style={ linkStyle } to={routes.ADMIN} onClick={handleClose}>
    <h4>ADMIN PAGE</h4>
  </Link>

  const loginLink =
  <Link style={ linkStyle } to={routes.LOGIN} onClick={handleClose}>
    <Icon name='sign in' />Login
  </Link>

  const logoutLink =
  <a style={ linkStyle } onClick={ clickLogout } >
    <h4><Icon name='sign out' />Logout</h4>
  </a>

  const resignLink =
  <a style={ linkStyle } onClick={ clickResign }>
    <h4><Icon name='remove user' />Resign</h4>
  </a>

  const signupLink =
  <Link  style={ linkStyle } to={routes.SIGNUP} onClick={handleClose}>
    <h4><Icon name='sign in' />Sign Up</h4>
  </Link>

  const columns =
  <>
    <Grid.Column>
      <Header as='h3'>
        <Icon name='user' /> {auth.user}
      </Header>
      <Divider fitted />
      { auth.user && adminpage }
    </Grid.Column>
    <Grid.Column>
      <Divider fitted />
      { auth.user === null ? loginLink : logoutLink }
    </Grid.Column>
    <Grid.Column>
      <Divider fitted />
      { auth.user ? resignLink : signupLink }
    </Grid.Column>
  </>

  const triggerAction =
  <Menu.Item>
    <Button inverted size='tiny'>user actions <Icon name='caret down' /></Button>
  </Menu.Item>

  return (
    <Popup
      trigger={ triggerAction }
      flowing
      hoverable
      position='bottom right'
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