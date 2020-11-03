import React, { useState, useContext } from 'react'
import { PictureContext } from '../../../contexts/PictureContext'
import { Header, Container, Button } from 'semantic-ui-react'
import { InputFile } from 'semantic-ui-react-input-file'
import apiService from '../../../services/apiService'
import { CREATE_PICTURE } from '../../../reducers/actionTypes'

const initialState = {
  file: null,
  isSubmitting: false,
  loaded: false,
  errorMessage: null,
  message: null
}

const UploadPicture = ({ ...props }) => {
  const [data, setData] = useState(initialState)
  // const [pictureSaved, setPictureSaved] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(null)
  const { dispatch } = useContext(PictureContext)

  // :::::::::::::::::::::::::::::::::::: //
  // hande input values
  const fileChangedHandler = event => {
    setData({
      ...data,
      file: event.target.files[0]
    })

    let reader = new FileReader()

    reader.onloadend = () => {
      setPreviewUrl( reader.result )
    }

    reader.readAsDataURL(event.target.files[0])
  }
  // clear input
  const clearInput = () => {
    setData({ ...data, file: null })
    setPreviewUrl(null)
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
  const submit = async() => {

    const formData = new FormData()
    formData.append('image', data.file)

    try {
      const result = await apiService.upload('pictures', formData)
      const newPicture = result
      console.log('NewPic ---', result)
      console.log('NewPic data ---', newPicture)

      dispatch({
        type: CREATE_PICTURE,
        data: newPicture
      })
      props.setMessage('Picture loaded and saved!')
      props.setUploaded(newPicture)

      // props.setMessage(result.message)
      setData({
        file: null,
        isSubmitting: false,
        loaded: true,
        errorMessage: null,
        message: 'Picture loaded!'
      })

    } catch (error) {
      console.error()
      handleError('failed storing picture!')
    }
  }

  // :::::::::::::::::::::::::::::::::::: //
  // if (data.message) {
  //   return (
  //     <Container>
  //       {/* <img src={props.uploaded.image} alt="icon" width="200" /> */}
  //       <Header as='h4' color='green' id='message'>{data.message}</Header>
  //     </Container>
  //   )
  // }

  if (data.errorMessage) {
    return (
      <Container>
        <Header as='h4' color='red' data-cy='message'>{data.errorMessage}</Header>
      </Container>
    )
  }

  // :::::::::::::::::::::::::::::::::::: //
  if (previewUrl) {
    return (
      <Container>
        <img src={previewUrl} alt="icon" width="200" />
        <Header as='h5' content='valittu' />
        <Button
          id='file-submit'
          size='tiny'
          positive
          content='upload'
          onClick={submit}
        />
        <Button
          size='tiny'
          color='orange'
          content='change'
          onClick={ clearInput }
        />
      </Container>
    )
  }
  // const buttonProps = <Button content='valitse' type="button" />
  // :::::::::::::::::::::::::::::::::::: //
  return(
    <Container>
      <InputFile
        id= 'file-upload'
        // button={{ ...buttonProps }}
        input={{
          onChange: fileChangedHandler
        }}
      />
    </Container>
  )
}

export default UploadPicture