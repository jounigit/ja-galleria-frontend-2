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
  update,
  // updateData
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

  const { dispatch } = useContext(AlbumContext)
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

    try {
      const result = await update('albums', AlbumID, newData)
      console.log('Updated album: ', result)
      dispatch({
        type: UPDATE_ALBUM,
        data: result.data,
        message: result.message
      })
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null
      })
      fetchData(CategoryDispatch, INIT_CATEGORIES, 'categories')
      notify( msgDispatch, 'Album stored successfully.', 4, 'green')
      modalDispatch({ type: CLOSE_MODAL })

    } catch (error) {
      notify( msgDispatch, error.message, 4, 'red')
      modalDispatch({ type: CLOSE_MODAL })
    }

    // const result = await updateData(dispatch, UPDATE_ALBUM, 'albums', AlbumID, newData)
    // console.log('Updated album: ', result)
    // if( !albums.isLoading && albums.errorMessage==='') {
    //   setData({
    //     title: '',
    //     content: '',
    //     isSubmitting: false,
    //     errorMessage: null
    //   })


    // }
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