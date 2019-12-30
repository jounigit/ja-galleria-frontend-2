import React, { useState, useContext } from 'react'
import { PictureContext } from '../../contexts/PictureContext'
import { Header, Container } from 'semantic-ui-react'
import apiService from '../../services/apiService'
import { CREATE_PICTURE } from '../../reducers/actionTypes'

const initialState = {
  file: null,
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const UploadPicture = ({ ...props }) => {
  const [data, setData] = useState(initialState)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [formVisibility, setFormVisibility] = useState(false)
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
      const result = await apiService.create('pictures', formData)
      const newPicture = result.data
      // console.log('NewPic ---', result)
      console.log('NewPic data ---', newPicture)

      dispatch({
        type: CREATE_PICTURE,
        data: newPicture
      })
      props.setUploaded(newPicture)
      // props.setMessage(result.message)
      setData({
        file: null,
        isSubmitting: false,
        errorMessage: null,
        message: result.message
      })
      setFormVisibility( !formVisibility )

    } catch (error) {
      console.error()
      handleError('failed storing picture!')
    }
  }

  // :::::::::::::::::::::::::::::::::::: //
  if (data.message) {
    return (
      <Container>
        <img src={props.uploaded.thumb} alt="icon" width="200" />
        <Header as='h4' color='green' data-cy='message'>{data.message}</Header>
      </Container>
    )
  }

  const $imagePreview = previewUrl ?
    <img src={previewUrl} alt="icon" width="200" /> :
    <Header as='h4'>Please select an Image for Preview</Header>

  // :::::::::::::::::::::::::::::::::::: //
  return(
    <Container>
      {/* <div style={hideWhenVisible}>
        {createButton}
      </div>
      <div style={showWhenVisible}> */}
      <input type="file" name="avatar" onChange={fileChangedHandler} />
      <button type="button" onClick={submit} > Upload </button>

      { $imagePreview &&
      <img src={previewUrl} alt="icon" width="200" /> }
      {/* </div> */}

    </Container>
  )
}

export default UploadPicture