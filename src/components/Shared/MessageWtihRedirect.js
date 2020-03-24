import React, {
  useState,
  useEffect
} from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router'

const MessageWithRedirect = ({ message, path }) => {
  const [redirect, setRedirect] = useState(false)
  const pathTo = `/${path}`
  // console.log('=STATE: ', redirect ,'= TO: ', path)

  useEffect(() => {
    const timeOut = setTimeout(() => setRedirect(true), 2000)
    return () => clearTimeout(timeOut)
  }, [redirect])

  return (
    <Container>
      { redirect && <Redirect to={pathTo} /> }
      <Header as='h3' color='green' data-cy='message'>{message}</Header>
    </Container>
  )
}

export default MessageWithRedirect
