import React, { useState, useContext } from 'react'
import { Card, Header, Form, Button, Container } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'
import albumService from '../../services/albumService'
import { CREATE_ALBUM } from '../../reducers/actionTypes'
import { AuthContext } from '../../App'
import AlbumForm from './AlbumForm'

const initialState = {
  title: '',
  content: '',
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const NewAlbum = () => {
  const [data, setData] = useState(initialState)
  const [formVisibility, setFormVisibility] = useState(false)
  const { albums, dispatch } = useContext(AlbumContext)
  const { state } = useContext(AuthContext)
  // set token for api
  albumService.setToken(state.token)

  const showWhenVisible = { display: formVisibility ? '' : 'none' }

  // :::::::::::::::::::::::::::::::::::: //
  // hande input values
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  // handle errors
  const handleError = error => {
    setData({
      ...data,
      isSubmitting: false,
      errorMessage: error
    })
  }
  // ----- handle form submit - post new data ---------- //
  const handleFormSubmit = async(event) => {
    event.preventDefault()
    if(data.title === '') {
      return handleError('title is required!')
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
      const result = await albumService.create(newData)
      console.log('Form result --', result)
      const newAlbum = result.data
      const albumsArray = [...albums.data, newAlbum]

      dispatch({
        type: CREATE_ALBUM,
        data: albumsArray
      })
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null,
        message: result.message
      })
      setFormVisibility(!formVisibility)
    } catch (error) {
      handleError('failed storing album!')
    }
  }

  // :::::::::::::::::::::::::::::::::::: //
  if (data.message) {
    setTimeout(() => setData({ ...data, message: null }), 4000)
    return (
      <Container>
        <Header as='h3' color='green' data-cy='message'>{data.message}</Header>
      </Container>
    )
  }

  return (
    <Container>
      <Button color='green' size='small' data-cy='addNewAlbum'  onClick={() => setFormVisibility(!formVisibility)}>new album</Button>

      <div style={showWhenVisible}>
        <AlbumForm
          errorMessage={data.errorMessage}
          title={data.title}
          content={data.content}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange} 
        />
      </div>
    </Container>

  )

}

export default NewAlbum
