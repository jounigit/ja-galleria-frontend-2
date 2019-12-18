import React, { useState, useContext } from 'react'
import { Container, Header, Icon, Button, Modal } from 'semantic-ui-react'
import { AlbumContext } from '../../contexts/AlbumContext'
import apiService from '../../services/apiService'
import { UPDATE_ALBUM } from '../../reducers/actionTypes'
import AlbumForm from './AlbumForm'
// import UpdateCategoryAlbums from '../Category/actions/UpdateCategoryAlbums'

const UpdateAlbum = ({ id, title, content, category_id }) => {
  const initialState = {
    title: title,
    content: content,
    category_id: category_id,
    isSubmitting: false,
    errorMessage: null,
    message: null
  }
  // Component's state
  const [data, setData] = useState(initialState)
  // const [categoryId, setCategoryId] = useState('')
  const { dispatch } = useContext(AlbumContext) // Album actions

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
  // console.log('INPUTS :::', data)

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
    // console.log('NEWDATA :::', newData)

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    try {
      const result = await apiService.update('albums', id, newData)
      const newAlbum = result.data
      console.log('UPDATE :::', newAlbum.category.id)
      // setCategoryId(newAlbum.category.id)
      dispatch({
        type: UPDATE_ALBUM,
        data: newAlbum
      })
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: null,
        message: result.message
      })
    } catch (error) {
      handleError('failed updating album!')
    }
  }

  // :::::::::::::::::::::::::::::::::::: //
  if (data.message) {
    localStorage.setItem('reloadPage', 'categories')
    setTimeout(() => setData({ ...data, message: null }), 4000)
    return (
      <Container>
        <Header as='h3' color='green' data-cy='message'>{data.message}</Header>
      </Container>
    )
  }

  const updateButton = <Button floated='right'
    color='green'
    size='tiny'
    data-cy='update'
  >
    <Icon name='edit' />
  </Button>

  return (

    <Modal trigger={ updateButton }  size='tiny'>
      <Modal.Header>Päivitä Albumi</Modal.Header>
      <Modal.Content>
        <AlbumForm
          errorMessage={data.errorMessage}
          title={data.title}
          content={data.content}
          category_id={data.category_id}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          formHeader={'Päivitä albumi'}
        />
      </Modal.Content>
    </Modal>

  )
}

export default UpdateAlbum