import React, { useContext } from 'react'
import { Container, Message } from 'semantic-ui-react'
import { NotificationContext } from '../../contexts/NotificationContext'

const Notification = () => {
  const { message } = useContext(NotificationContext)

  const visibility = { display: message.visibility ? '' : 'none' }
  const colorIn = message.style || 'black'

  return (
    <div style={visibility}>
      <Container>
        <Message color={ colorIn } >
          <Message.Header>{message.content}</Message.Header>
        </Message>
      </Container>
    </div>
  )
}

export default Notification
