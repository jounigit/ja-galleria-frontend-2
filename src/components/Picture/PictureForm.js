import React from 'react'
import { Header, Image, Form, Input, Button, Container, TextArea } from 'semantic-ui-react'

const PictureForm = ({
  errorMessage,
  title,
  content,
  thumb,
  handleFormSubmit,
  // handleFileInputChange,
  handleInputChange
}) => {
  console.log('form ---', thumb)
  return (
    <Container>
      {errorMessage && (
        <Header as='h4' color='red' data-cy='error-message'>{errorMessage}</Header>
      )}


      <Form>
        <Image src={thumb} wrapped ui={false} />
        {/* <Form.Field>
          <label>
            Image
            <Input
              data-cy='file'
              type='file'
              value={file}
              onChange={handleFileInputChange}
              name='file'
            />
          </label>
        </Form.Field> */}
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

        {/* <input type="button" value="Upload as Form" onClick={handleFormSubmit} /> */}

        <Button data-cy='submit' type='submit'  value="Upload" onClick={handleFormSubmit} />
      </Form>
    </Container>
  )
}

export default PictureForm