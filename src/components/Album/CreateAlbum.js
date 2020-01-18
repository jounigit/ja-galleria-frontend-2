import React, { useState, useContext } from 'react'
import { Header, Container } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'
import apiService from '../../services/apiService'
import { CREATE_ALBUM } from '../../reducers/actionTypes'
import AlbumForm from './AlbumForm'

const initialState = {
  title: '',
  content: '',
  category_id: '',
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const CreateAlbum = ({ ...props }) => {
  const [data, setData] = useState(initialState)
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
      category_id: data.category_id
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    try {
      const result = await apiService.create('albums', newData)
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
    } catch (error) {
      handleError('failed storing album!')
    }
  }

  // :::::::::::::::::::::::::::::::::::: //
  if (data.message) {
    localStorage.setItem('reloadPage', 'categories')
    setTimeout(() => props.setModalOpen(), 2000)
    return (
      <Container>
        <Header as='h3' color='green' data-cy='message'>{data.message}</Header>
      </Container>
    )
  }

  return ( // <Modal as={Form} onSubmit={e => handleSubmit(e)} open={true} size="tiny">
    <Container>
      <AlbumForm
        errorMessage={data.errorMessage}
        title={data.title}
        content={data.content}
        category_id={data.category_id}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formHeader={'Uusi albumi'}
      />
    </Container>

  )

}

export default CreateAlbum
