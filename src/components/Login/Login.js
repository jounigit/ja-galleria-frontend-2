import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Card, Header, Form, Button } from 'semantic-ui-react'
import { AuthContext } from '../../App'


const baseUrl = 'http://localhost:8000/api'

const url = `${baseUrl}/login`

const Login = () => {
  const { dispatch } = useContext(AuthContext)
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null
  }
  const [data, setData] = useState(initialState)

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault()
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
      // console.log('LOGIN AXIOS -- ', result)
      // console.log('LOGIN AXIOS data -- ', result.data)
      dispatch({
        type: 'LOGIN',
        payload: result.data
      })
      setData({
        email: '',
        password: '',
        isSubmitting: false,
        errorMessage: null
      })
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message || error.statusText
      })
    }
  }

  return (
    <Card centered style={{ marginTop: 20 }}>
      <Card.Content>
        <Header as='h2' color='green'>Kirjaudu sovellukseen</Header>
      </Card.Content>
      <Card.Content>
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
              required />
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
              required />
          </Form.Field>

          {data.errorMessage && (
            <span className='form-error'>{data.errorMessage}</span>
          )}

          <Button data-cy='submit' type='submit'>login</Button>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default Login