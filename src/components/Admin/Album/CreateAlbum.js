import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { CREATE_ALBUM } from '../../../reducers/actionTypes'
import AlbumForm from './AlbumForm'
import { createData } from '../../../services/apiService'
import { NotificationContext, notify } from '../../../contexts/NotificationContext'

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
  const { albums, dispatch } = useContext(AlbumContext)
  const { msgDispatch } = useContext(NotificationContext)

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

    createData(dispatch, CREATE_ALBUM, 'albums', newData)

    if( !albums.isLoading && albums.errorMessage==='') {
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null,
        message: 'Album stored successfully.'
      })
      // update Categories, message, close modal
      localStorage.setItem('reloadPage', 'categories')
      notify( msgDispatch, 'Album stored successfully.', 4, 'green')
      props.setModalOpen()
    }
  }

  // :::::::::::::::::::::::::::::::::::: //

  return (
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
