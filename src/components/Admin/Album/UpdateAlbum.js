import React, { useState,
  useContext
} from 'react'
import { Container } from 'semantic-ui-react'
import { AlbumContext } from '../../../contexts/AlbumContext'
import { CategoryContext } from '../../../contexts/CategoryContext'
import {
  CLOSE_MODAL,
  INIT_CATEGORIES,
  UPDATE_ALBUM,
  // FAILURE
} from '../../../reducers/actionTypes'
import { fetchData,
  // update,
  updateData
} from '../../../services/apiService'
import { ModalContext } from '../../../contexts/modalContext'
import AlbumForm from './AlbumForm'
import { NotificationContext, notify } from '../../../contexts/NotificationContext'

const UpdateAlbum = ({ id: AlbumID, title, content, categoryId }) => {
  const initialState = {
    title,
    content,
    categoryId,
    isSubmitting: false,
    errorMessage: null
  }
  // Component's state
  const [data, setData] = useState(initialState)
  const [editorState, setEditorState] = React.useState({ value: initialState.content })

  const { albums, dispatch } = useContext(AlbumContext)
  const { dispatch: CategoryDispatch } = useContext(CategoryContext)
  const { msgDispatch } = useContext(NotificationContext)
  const { modalDispatch } = useContext(ModalContext)

  // :::::::::::::::::::::::::::::::::::: //
  // handle input values

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
      category: data.categoryId
    }
    console.log('Update album: ', newData, ' A ID: ', AlbumID)

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    const result = await updateData(dispatch, UPDATE_ALBUM, 'albums', AlbumID, newData)

    if( !albums.isLoading && albums.errorMessage==='') {
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null
      })
      console.log('Album result err: ', result )
      console.log('Album result type: ', typeof(result) )
      result && result === Error && console.log('PÖÖÖÖ')

      fetchData(CategoryDispatch, INIT_CATEGORIES, 'categories')
      //   localStorage.setItem('reloadPage', 'categories')
      // console.log('Album error: ', albums.errorMessage, ' album: ', albums)

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
        content={data.content}
        categoryId={data.categoryId}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleEditorChange={handleEditorChange}
      />
    </Container>
  )
}

export default UpdateAlbum