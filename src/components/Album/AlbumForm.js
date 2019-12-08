import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Card, Header, Form, Button, Container } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'
import { AuthContext } from '../../App'

const AlbumForm = () => {
  const { albums, dispatch } = useContext(AlbumContext)
  const { state } = useContext(AuthContext)

  const baseUrl = 'http://localhost:8000/api'

  const url = `${baseUrl}/albums`

  const initialState = {
    title: '',
    content: '',
    isSubmitting: false,
    errorMessage: null,
    message: null
  }

  const [data, setData] = useState(initialState)

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleError = error => {
    setData({
      ...data,
      isSubmitting: false,
      errorMessage: error
    })
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault()
    if(data.title === '') {
      return handleError('title is required!')
    }

    const bearerToken = `Bearer ${state.token}`

    const config = {
      headers: { 'Authorization': bearerToken }
    }

    const newData = {
      title: data.title,
      content: data.content
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    try {
      const result = await axios.post(url, newData, config)

      const newAlbum = result.data.data

      const albumsArray = [...albums.data, newAlbum]
      console.log('New albums --', albumsArray)

      dispatch({
        type: 'CREATE_ALBUM',
        data: albumsArray
      })
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null,
        message: result.data.message
      })
    } catch (error) {
      handleError('failed storing album!')
    }

    // console.log('Form --', albums)
    // console.log('Bearer --', bearerToken)
  }

  console.log('Form albums --', albums.data)

  if (data.message) {
    return (
      <Container>
        <Header as='h4' color='green' data-cy='message'>{data.message}</Header>
      </Container>
    )
  }

  return (
    <Card centered style={{ marginTop: 20 }}>
      <Card.Content>
        <Header as='h2' color='green'>Lisää uusi albumi</Header>
      </Card.Content>
      <Card.Content>

        {data.errorMessage && (
          <Header as='h4' color='red' data-cy='error-message'>{data.errorMessage}</Header>
        )}

        <Form onSubmit={ handleFormSubmit }>
          <Form.Field>
            <label>Title</label>
            <input
              data-cy='title'
              type='title'
              value={data.title}
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
              value={data.content}
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