import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { CLOSE_MODAL, CREATE_ALBUM, INIT_CATEGORIES } from '../../../reducers/actionTypes'
import AlbumForm from './AlbumForm'
import { createData, fetchData } from '../../../services/apiService'
import { NotificationContext, notify } from '../../../contexts/NotificationContext'
import { ModalContext } from '../../../contexts/modalContext'
import { CategoryContext } from '../../../contexts/CategoryContext'

const initialState = {
  title: '',
  content: '',
  category_id: '',
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const CreateAlbum = () => {
  const [data, setData] = useState(initialState)
  const [editorState, setEditorState] = React.useState({ value: initialState.content })
  const { albums, dispatch } = useContext(AlbumContext)
  const { dispatch: CategoryDispatch } = useContext(CategoryContext)
  const { msgDispatch } = useContext(NotificationContext)
  const { modalDispatch } = useContext(ModalContext)

  // :::::::::::::::::::::::::::::::::::: //
  // hande input values

  const handleEditorChange = value => {
    setEditorState({ value })
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

  // ----- handle form submit - post new data ---------- //
  const handleFormSubmit = async(event) => {
    event.preventDefault()
    if(data.title === '') {
      return handleError('title is required!')
    }

    const newData = {
      title: data.title,
      content: editorState.value,
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

      fetchData(CategoryDispatch, INIT_CATEGORIES, 'categories')

      // localStorage.setItem('reloadPage', 'categories')
      notify( msgDispatch, 'Album stored successfully.', 4, 'green')

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
        category_id={data.category_id}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleEditorChange={handleEditorChange}
      />
    </Container>

  )

}

export default CreateAlbum
