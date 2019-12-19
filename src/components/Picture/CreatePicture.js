import React, { useState, useContext } from 'react'
import {
//   Header,
//   Button,
  Container,
//   Modal,
//   Icon
} from 'semantic-ui-react'
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

    const newData = {
      title: data.title,
      content: data.content,
      file: data.file
    }

    console.log('NewData ---', newData)
  }

  return ( // <Modal as={Form} onSubmit={e => handleSubmit(e)} open={true} size="tiny">
    <Container>

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

    </Container>

  )
}

export default CreatePicture