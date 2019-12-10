import React from 'react'
import { Card, Header, Form, Button } from 'semantic-ui-react'

const AlbumForm = ({
  errorMessage,
  title,
  content,
  handleFormSubmit,
  handleInputChange }) => {

  return (
    <Card centered style={{ marginTop: 20 }}>
      <Card.Content>
        <Header as='h2' color='green'>Lisää uusi albumi</Header>
      </Card.Content>
      <Card.Content>

        {errorMessage && (
          <Header as='h4' color='red' data-cy='error-message'>{errorMessage}</Header>
        )}

        <Form onSubmit={ handleFormSubmit }>
          <Form.Field>
            <label>Title</label>
            <input
              data-cy='title'
              type='title'
              value={title}
              onChange={handleInputChange}
              name='title'
              id='title'
            />
          </Form.Field>
          <Form.Field>
            <label>Content</label>
            <input
              data-cy='content'
              type='content'
              value={content}
              onChange={handleInputChange}
              name='content'
              id='content'
            />
          </Form.Field>

          <Button data-cy='submit' type='submit'>submit</Button>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default AlbumForm