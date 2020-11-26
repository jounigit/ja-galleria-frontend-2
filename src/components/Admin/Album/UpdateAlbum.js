import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { AlbumContext } from '../../../contexts/AlbumContext'
import {
  CLOSE_MODAL,
  UPDATE_ALBUM } from '../../../reducers/actionTypes'
import AlbumForm from './AlbumForm'
import { updateData } from '../../../services/apiService'
import { ModalContext } from '../../../contexts/modalContext'

const UpdateAlbum = ({ ...props }) => {
  const initialState = {
    title: props.title,
    content: props.content,
    category_id: props.category_id,
    isSubmitting: false,
    errorMessage: null
  }
  // Component's state
  const [data, setData] = useState(initialState)
  const [editorState, setEditorState] = React.useState({ value: initialState.content })

  const handleEditorChange = value => {
    setEditorState({ value })
  }
  const { albums, dispatch } = useContext(AlbumContext)
  const { modalDispatch } = useContext(ModalContext)

  // console.log('Initial: ', initialState)
  // console.log('Update album state data: ', data)
  // console.log('Update edotir: ', editorState)
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

  // ----- handle form submit - post new data ---------- //
  const handleFormSubmit = async(event) => {
    event.preventDefault()
    if(data.title === '') {
      return handleError('title is required!')
    }

    const newData = {
      title: data.title,
      // content: data.content,
      content: editorState.value,
      category: data.category_id
    }
    console.log('Update album: ', newData)

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    updateData(dispatch, UPDATE_ALBUM, 'albums', props.id, newData)
    if( !albums.isLoading && albums.errorMessage==='') {
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null
      })

      localStorage.setItem('reloadPage', 'categories')
      modalDispatch({ type: CLOSE_MODAL })
    }
  }

  // :::::::::::::::::::::::::::::::::::: //

  return (
    <Container>
      <AlbumForm
        errorMessage={data.errorMessage}
        editorState={editorState.value}
        title={data.title}
        content={data.content}
        category_id={data.category_id}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleEditorChange={handleEditorChange}
        formHeader={'Päivitä albumi'}
      />
    </Container>
  )
}

export default UpdateAlbum