import React, { useState } from 'react'
import axios from 'axios'
import { Card, Header, Form, Button, Container } from 'semantic-ui-react'
import { Redirect } from 'react-router'

const baseUrl = process.env.REACT_APP_API

const url = `${baseUrl}/register`

const Signup = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    isSubmitting: false,
    message: null,
    errorMessage: null
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
    if(data.username === '') {
      return handleError('username is required!')
    }

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


    // console.log('DATA --', data)
    try {
      await axios.post(url,
        {
          name: data.username,
          email: data.email,
          password: data.password
        })

      // console.log('RES --', response)
      // console.log('RES id --', response.data.user.id)

      setData({
        username: '',
        email: '',
        password: '',
        isSubmitting: false,
        errorMessage: null,
        message: 'User signed up successfully'
      })
    } catch (error) {
      handleError('incorrect email or password!')
    }

  }
  // console.log('STATE -- ', data)
  // :::::::::::::::::::::::::::::::::::: //
  if (data.message) {
    const urlTo = <Redirect to='/login' />
    // setTimeout(() => <Redirect to='/login' />, 2000)
    return (
      <Container>
        <Header as='h3' color='green' data-cy='message'>{data.message}</Header>
        { setTimeout(() => urlTo, 2000) }
      </Container>
    )
  }

  return (
    <Card centered style={{ marginTop: 20 }}>
      <Card.Content>
        <Header as='h2' color='green'>Sign up</Header>
      </Card.Content>
      <Card.Content>

        {data.errorMessage && (
          <Header as='h4' color='red' data-cy='error-message'>{data.errorMessage}</Header>

        )}
        <Form onSubmit={ handleFormSubmit }>
          <Form.Field>
            <label>Userame</label>
            <input
              data-cy='username'
              type='username'
              value={data.name}
              onChange={handleInputChange}
              name='username'
              id='username'
            />
          </Form.Field>
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
  )
}

export default Signup