import React, { useState, useContext } from 'react'
import { Header, Container } from 'semantic-ui-react'
import { PictureContext } from '../../../contexts/PictureContext'
import { UPDATE_PICTURE } from '../../../reducers/actionTypes'
import PictureForm from './PictureForm'
import { updateData } from '../../../services/apiService'

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
  const { pictures, dispatch } = useContext(PictureContext)
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

    updateData(dispatch, UPDATE_PICTURE, 'pictures', props.id, newData)
    if( !pictures.isLoading && pictures.errorMessage==='') {
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null,
        message: 'Picture updated successfully.'
      })
      props.setDataSaved(true)
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
          formHeader={'Päivitä kuva'}
        />
      }
    </Container>

  )
}

export default SavePictureData