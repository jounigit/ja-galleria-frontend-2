import React, { useContext } from 'react'
import { Header, Form, Input, Button, Container, TextArea } from 'semantic-ui-react'
import { CategoryContext } from '../../contexts/CategoryContext'

const AlbumForm = ({
  errorMessage,
  title,
  content,
  category_id,
  handleFormSubmit,
  handleInputChange
}) => {

  const { categories } = useContext(CategoryContext) //
  const defaultVal = [{ id:'', title:'choose category...' }]
  const cats = defaultVal.concat(categories.data)

  const catOptions = cats.map((cat, i) => <option key={i} value={cat.id}>{cat.title}</option>)

  return (
    <Container>
      {errorMessage && (
        <Header as='h4' color='red' data-cy='error-message'>{errorMessage}</Header>
      )}

      <Form onSubmit={ handleFormSubmit }>
        <Form.Field>
          <label>category
            <select
              data-cy='category'
              name='category_id'
              value={category_id}
              onChange={handleInputChange}
            >
              { catOptions }
            </select>
          </label>
        </Form.Field>

        <Form.Field>
          <label>title
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
          <label>Content
            <TextArea
              data-cy='content'
              type='content'
              value={content}
              onChange={handleInputChange}
              name='content'
              id='content'
            />
          </label>
        </Form.Field>

        <Button data-cy='submit' type='submit'>submit</Button>
      </Form>
    </Container>

  )
}

export default AlbumForm