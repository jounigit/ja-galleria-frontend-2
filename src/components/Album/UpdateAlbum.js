import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'

import apiService from '../../services/apiService'
import { UPDATE_ALBUM } from '../../reducers/actionTypes'
import AlbumForm from './AlbumForm'

const initialState = {
  title: '',
  content: '',
  category: '',
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const UpdateAlbum = ({ id, setFormVisibility, formVisibility }) => {
  // Component's state
  const [data, setData] = useState(initialState)
  // const [formVisibility, setFormVisibility] = useState(false)
  const { dispatch } = useContext(AlbumContext) // Album actions

  // const showWhenVisible = { display: formVisibility ? '' : 'none' }

  // :::::::::::::::::::::::::::::::::::: //
  // handle input values
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
  console.log('INPUTS :::', data)
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
    console.log('NEWDATA :::', newData)

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    try {
      const result = await apiService.update(id, newData)
      const newAlbum = result.data
      console.log('UPDATE :::', newAlbum)

      dispatch({
        type: UPDATE_ALBUM,
        data: newAlbum
      })
      setData({
        title: '',
        content: '',
        category: '',
        isSubmitting: false,
        errorMessage: null,
        message: result.message
      })
      setFormVisibility(!formVisibility)
    } catch (error) {
      handleError('failed updating album!')
    }
  }

  // :::::::::::::::::::::::::::::::::::: //

  return (

    <Container>
      <AlbumForm
        errorMessage={data.errorMessage}
        title={data.title}
        content={data.content}
        category={data.category}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formHeader={'Päivitä albumi'}
      />
    </Container>

  )
}

export default UpdateAlbum