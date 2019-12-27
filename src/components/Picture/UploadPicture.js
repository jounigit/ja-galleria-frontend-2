import React, { useState, useContext } from 'react'
import { PictureContext } from '../../contexts/PictureContext'
import { Header, Button, Icon, Container } from 'semantic-ui-react'
import apiService from '../../services/apiService'
import { CREATE_PICTURE } from '../../reducers/actionTypes'

const initialState = {
  file: null,
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const UploadPicture = () => {
  const [data, setData] = useState(initialState)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [formVisibility, setFormVisibility] = useState(false)
  const { dispatch } = useContext(PictureContext)

  const hideWhenVisible = { display: formVisibility ? 'none' : '' }
  const showWhenVisible = { display: formVisibility ? '' : 'none' }

  const toggleVisibility = () => {
    setFormVisibility( !formVisibility )
  }

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
      console.log('NewPic ---', result)
      console.log('NewPic data ---', newPicture)

      dispatch({
        type: CREATE_PICTURE,
        data: newPicture
      })
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
  // if (data.message) {
  //   setFormVisibility( !formVisibility )
  //   setTimeout(() => setData({ ...data, message: null }), 4000)
  //   return (
  //     <Container>
  //       <Header as='h3' color='green' data-cy='message'>{data.message}</Header>
  //     </Container>
  //   )
  // }

  const $imagePreview = previewUrl ?
    <img src={previewUrl} alt="icon" width="200" /> :
    <Header as='h4'>Please select an Image for Preview</Header>

  const createButton = <Button
    color='green'
    size='tiny'
    onClick={toggleVisibility}
  >
    <Icon name='edit' />
          new picture
  </Button>

  // :::::::::::::::::::::::::::::::::::: //
  return(
    <Container>
      <div style={hideWhenVisible}>
        {createButton}
      </div>
      <div style={showWhenVisible}>
        <input type="file" name="avatar" onChange={fileChangedHandler} />
        <button type="button" onClick={submit} > Upload </button>

        { $imagePreview }
      </div>

    </Container>
  )
}

export default UploadPicture