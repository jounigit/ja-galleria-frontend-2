import React, { useState, useContext } from 'react'
import { Header, Button, Container, Modal, Icon } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'
import apiService from '../../services/apiService'
import { CREATE_ALBUM } from '../../reducers/actionTypes'
import AlbumForm from './AlbumForm'

const initialState = {
  title: '',
  content: '',
  category: '',
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const CreateAlbum = () => {
  const [data, setData] = useState(initialState)
  const [formVisibility, setFormVisibility] = useState(false)
  const { dispatch } = useContext(AlbumContext)

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
      content: data.content,
      category_id: data.category
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    try {
      const result = await apiService.create(newData)
      const newAlbum = result.data

      dispatch({
        type: CREATE_ALBUM,
        data: newAlbum
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

  const createButton = <Button
    color='green'
    size='tiny'
    data-cy='addNewAlbum'
  >
    <Icon name='edit' />
    new album
  </Button>

  return ( // <Modal as={Form} onSubmit={e => handleSubmit(e)} open={true} size="tiny">
    <Container>
      <Modal trigger={createButton}  size='tiny'>
        <Modal.Header>Uusi Albumi</Modal.Header>
        <Modal.Content>
          <AlbumForm
            errorMessage={data.errorMessage}
            title={data.title}
            content={data.content}
            category={data.category}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            formHeader={'Uusi albumi'}
          />
        </Modal.Content>
      </Modal>
    </Container>

  )

}

export default CreateAlbum
