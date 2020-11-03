import React from 'react'
import { Header, Image, Form, Input, Button, Container, TextArea } from 'semantic-ui-react'

const PictureForm = ({
  errorMessage,
  title,
  content,
  thumb,
  handleFormSubmit,
  handleInputChange
}) => {
  console.log('form ---', thumb)
  return (
    <Container>
      {errorMessage && (
        <Header as='h4' color='red' data-cy='error-message'>{errorMessage}</Header>
      )}

      <Form>
        <Image src={thumb} size='medium' />
        <Header as='h3' color='green' content='Update picture info' />
        <Form.Field>
          <label>
            title
            <Input
              data-cy='title'
              type='title'
              value={title}
              onChange={handleInputChange}
              name='title'
              id='title'
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label>
            Content
            <TextArea
              data-cy='content'
              value={content}
              onChange={handleInputChange}
              name='content'
            />
          </label>
        </Form.Field>

        <Button
          data-cy='submit'
          type='submit'
          content='lähetä'
          value="Upload" onClick={handleFormSubmit}
        />
      </Form>
    </Container>
  )
}

export default PictureForm