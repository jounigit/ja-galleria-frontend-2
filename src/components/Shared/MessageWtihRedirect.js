import React, {
  // useState,
  useContext
  // useEffect
} from 'react'
import { Container } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { NotificationContext, notify } from '../../contexts/NotificationContext'

const MessageWithRedirect = ({ message, color, path = null }) => {
  const { msgDispatch } = useContext(NotificationContext)
  const pathTo = `/${path}`

  return (
    <Container>
      { notify( msgDispatch, message, 5, color) }
      { path &&
      <Redirect to={pathTo} /> &&
      setTimeout(() => notify( msgDispatch, message, 5, color), 3000) }
    </Container>
  )
}

export default MessageWithRedirect
