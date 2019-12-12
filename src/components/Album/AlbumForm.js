import React, { useContext } from 'react'
import { Card, Header, Form, Input, Button } from 'semantic-ui-react'
import { CategoryContext } from '../../contexts/CategoryContext'

const AlbumForm = ({
  errorMessage,
  title,
  content,
  category,
  handleFormSubmit,
  handleInputChange,
  formHeader }) => {

  const { categories } = useContext(CategoryContext) //

  const catOptions = categories.data.data.map(cat => <option key={cat.id} value={cat.id}>{cat.title}</option>)

  return (
    <Card centered style={{ marginTop: 20 }}>
      <Card.Content>
        <Header as='h2' color='green'>{ formHeader }</Header>
      </Card.Content>
      <Card.Content>

        {errorMessage && (
          <Header as='h4' color='red' data-cy='error-message'>{errorMessage}</Header>
        )}

        <Form onSubmit={ handleFormSubmit }>
          <Form.Field>
            <label>category</label>
            <select name='category' value={category} onChange={handleInputChange}>
              { catOptions }
            </select>
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
      </Card.Content>
    </Card>
  )
}

export default AlbumForm