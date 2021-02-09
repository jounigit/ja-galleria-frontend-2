import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Card, Header, Form, Button, Container } from 'semantic-ui-react'
import { AuthContext } from '../../contexts/AuthContext'
import MessageWithRedirect from '../Shared/MessageWtihRedirect'

const baseUrl = process.env.REACT_APP_API

const url = `${baseUrl}/login`

const Login = () => {
  const { dispatch } = useContext(AuthContext)
  const initialState = {
    email: '',
    password: '',
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

  //---------------- form handling -----------------------------
  const handleFormSubmit = async(event) => {
    event.preventDefault()

    if(data.email === '') {
      return handleError('email is required!')
    }
    if(data.password === '') {
      return handleError('password is required!')
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    try {
      const result = await axios.post(url,
        {
          email: data.email,
          password: data.password
        })

      console.log('Login result: ', result.data)
      dispatch({
        type: 'LOGIN',
        payload: result.data
      })

      setData({
        email: '',
        password: '',
        isSubmitting: false,
        errorMessage: null,
        message: result.statusText
      })
    } catch (error) {
      handleError('incorrect email or password!')
    }

  }
  // :::::::::::::::::::::::::::::::::::: //
  if (data.message) {
    return (
      <MessageWithRedirect
        message='Login successfully!'
        color='green'
        path='/'
      />
    )
  }

  // :::::::::::::::::::::::::::::::::::: //
  return (
    <Container>
      <Card centered style={{ marginTop: 20 }}>
        <Card.Content>
          <Header as='h2' color='green'>Kirjaudu sovellukseen</Header>
        </Card.Content>
        <Card.Content>

          {data.errorMessage && (
            <Header as='h4' color='red' data-cy='error-message'>{data.errorMessage}</Header>

          )}
          <Form onSubmit={ handleFormSubmit }>
            <Form.Field>
              <label>Email</label>
              <input
                data-cy='email'
                type='email'
                value={data.email}
                onChange={handleInputChange}
                name='email'
                id='email'
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                data-cy='password'
                type='password'
                value={data.password}
                onChange={handleInputChange}
                name='password'
                id='password'
              />
            </Form.Field>


            <Button data-cy='submit' type='submit'>login</Button>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default Login