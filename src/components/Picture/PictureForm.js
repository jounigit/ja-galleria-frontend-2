import React from 'react'
import { Header, Form, Input, Button, Container, TextArea } from 'semantic-ui-react'

const PictureForm = ({
  errorMessage,
  title,
  content,
  file,
  handleFormSubmit,
  handleFileInputChange,
  handleInputChange
}) => {

  return (
    <Container>
      {errorMessage && (
        <Header as='h4' color='red' data-cy='error-message'>{errorMessage}</Header>
      )}

      <Form onSubmit={ handleFormSubmit }>

        <Form.Field>
          <label>Image</label>
          <Input
            data-cy='file'
            type='file'
            value={file}
            onChange={handleFileInputChange}
            name='file'
          />
        </Form.Field>
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
          <label>Content
            <TextArea
              data-cy='content'
              value={content}
              onChange={handleInputChange}
              name='content'
            />
          </label>
        </Form.Field>

        <Button data-cy='submit' type='submit'>submit</Button>
      </Form>
    </Container>
  )
}

export default PictureForm