import React, { useState, useContext } from 'react'
import { Header, Container } from 'semantic-ui-react'
import { PictureContext } from '../../contexts/PictureContext'
import apiService from '../../services/apiService'
import { UPDATE_PICTURE } from '../../reducers/actionTypes'
import PictureForm from './PictureForm'

const SavePictureData = ({ ...props }) => {
  const initialState = {
    title: props.title,
    content: props.content,
    thumb: props.thumb,
    isSubmitting: false,
    errorMessage: null,
    message: null
  }
  const [data, setData] = useState(initialState)
  const { dispatch } = useContext(PictureContext)
  // console.log('SAVE ---', data)
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

  // console.log('PIC inputs ---', data)
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

    try {
      const result = await apiService.update('pictures', props.id, newData)
      const newPicture = result.data
      console.log('NewPic data ---', newPicture)

      dispatch({
        type: UPDATE_PICTURE,
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
      props.setDataSaved(true)

    } catch (error) {
      console.error()
      handleError('failed updating picture!')
    }
  }
  // :::::::::::::::::::::::::::::::::::: //
  if (data.message) {
    return (
      <Container>
        <Header as='h3' color='green' data-cy='message'>{data.message}</Header>
      </Container>
    )
  }

  return (
    <Container>
      {
        <PictureForm
          errorMessage={data.errorMessage}
          title={data.title}
          content={data.content}
          thumb={data.thumb}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handleFileInputChange={handleFileInputChange}
          formHeader={'Päivitä kuva'}
        />
      }
    </Container>

  )
}

export default SavePictureData