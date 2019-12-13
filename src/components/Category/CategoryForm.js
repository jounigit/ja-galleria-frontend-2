import React from 'react'
import { Header, Form, Input, Button, Container } from 'semantic-ui-react'

const CategoryForm = ({
  errorMessage,
  title,
  content,
  handleFormSubmit,
  handleInputChange
}) => {

  return (
    <Container>
      {errorMessage && (
        <Header as='h4' color='red' data-cy='error-message'>{errorMessage}</Header>
      )}

      <Form onSubmit={ handleFormSubmit }>

        <Form.Field>
          <label>title</label>
          <Input
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
          <Input
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
    </Container>
  )
}

export default CategoryForm