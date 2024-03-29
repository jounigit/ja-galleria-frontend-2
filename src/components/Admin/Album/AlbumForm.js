import React, { useContext } from 'react'
import ReactQuill from 'react-quill'
import ToolbarSmall, { modules, formats } from '../../Editor/ToolbarSmall'
import 'react-quill/dist/quill.snow.css'
import { Header, Form, Input, Button, Container } from 'semantic-ui-react'
import { CategoryContext } from '../../../contexts/CategoryContext'

const AlbumForm = ({
  errorMessage,
  editorState,
  title,
  categoryId,
  handleFormSubmit,
  handleInputChange,
  handleEditorChange
}) => {

  const { categories } = useContext(CategoryContext) //
  const defaultVal = [{ id:'', title:'choose category...' }]
  const cats = defaultVal.concat(categories.data)

  const categoryOptions = cats.map((cat, i) =>
    <option key={i} value={cat.id}>{cat.title}</option>
  )

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
          <label>category</label>
          <select
            id='categoryId'
            name='categoryId'
            value={categoryId}
            onChange={handleInputChange}
          >
            { categoryOptions }
          </select>

        </Form.Field>
        <Form.Field>
          <label>content</label>
          <div  style={{ backgroundColor: 'white' }}>
            <ToolbarSmall />
            <ReactQuill
              value={editorState || ''}
              onChange={handleEditorChange}
              modules={modules}
              formats={formats}
            />
          </div>

        </Form.Field>
        <Button data-cy='submit' size='small' color='olive' type='submit'>submit</Button>
      </Form>
    </Container>

  )
}

export default AlbumForm