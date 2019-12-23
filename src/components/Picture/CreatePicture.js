import React, { useState, useContext } from 'react'
import {
  Header,
  Button,
  Container,
  Modal,
  Icon
} from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'
import apiService from '../../services/apiService'
import { CREATE_PICTURE } from '../../reducers/actionTypes'
import PictureForm from './PictureForm'

const initialState = {
  title: '',
  content: '',
  file: null,
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const CreatePicture = () => {
  const [data, setData] = useState(initialState)
  //   const [formVisibility, setFormVisibility] = useState(false)
  const { dispatch } = useContext(PictureContext)

  // :::::::::::::::::::::::::::::::::::: //
  // hande input values
  const handleFileInputChange = event => {
    setData({
      ...data,
      file: event.target.files[0]
    })
  }
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

  console.log('PIC inputs ---', data)
  // ----- handle form submit - post new data ---------- //
  const handleFormSubmit = async(event) => {
    event.preventDefault()
    if(data.title === '') {
      return handleError('title is required!')
    }

    const formData = new FormData()
    formData.append('image',data.file)
    formData.append('title',data.title)
    formData.append('content',data.content)

    try {
      const result = await apiService.create('pictures', formData)
      const newPicture = result.data
      console.log('NewPic ---', result)
      console.log('NewPic data ---', newPicture)

      dispatch({
        type: CREATE_PICTURE,
        data: newPicture
      })
      setData({
        title: '',
        content: '',
        file: null,
        isSubmitting: false,
        errorMessage: null,
        message: result.message
      })

    } catch (error) {
      console.error()
      handleError('failed storing picture!')
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
    data-cy='addCategory'
  >
    <Icon name='edit' />
          new picture
  </Button>

  return ( // <Modal as={Form} onSubmit={e => handleSubmit(e)} open={true} size="tiny">
    <Container>
      <Modal trigger={createButton}  size='tiny'>
        <Modal.Header>Uusi Kuva</Modal.Header>
        <Modal.Content>
          <PictureForm
            errorMessage={data.errorMessage}
            title={data.title}
            content={data.content}
            category_id={data.category_id}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            handleFileInputChange={handleFileInputChange}
            formHeader={'Uusi kuva'}
          />
        </Modal.Content>
      </Modal>
    </Container>

  )
}

export default CreatePicture