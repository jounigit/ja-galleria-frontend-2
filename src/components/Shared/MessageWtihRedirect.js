import React, {
  useState,
  useEffect
} from 'react'
import { Container, Header, Card } from 'semantic-ui-react'
import { Redirect } from 'react-router'

const MessageWithRedirect = ({ message, color, path = null }) => {
  const [redirect, setRedirect] = useState(false)
  const pathTo = `/${path}`

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirect(true)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (redirect) {
    return <Redirect to={pathTo} />
  }

  return (
    <Container>
      <Card centered style={{ marginTop: 20 }}>
        <Card.Content>
          <Header as='h3' color={color} data-cy='message'>{message}</Header>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default MessageWithRedirect
