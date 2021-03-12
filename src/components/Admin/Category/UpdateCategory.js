import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { CategoryContext } from '../../../contexts/CategoryContext'
import { CLOSE_MODAL, UPDATE_CATEGORY } from '../../../reducers/actionTypes'
import CategoryForm from './CategoryForm'
import { update } from '../../../services/apiService'
import { ModalContext } from '../../../contexts/modalContext'
import { NotificationContext, notify } from '../../../contexts/NotificationContext'

const UpdateCategory = ({ id: CategoryID, title, content }) => {
  const initialState = {
    title,
    content,
    isSubmitting: false,
    errorMessage: null,
    message: null
  }
  const [data, setData] = useState(initialState)
  const { dispatch } = useContext(CategoryContext)
  const { msgDispatch } = useContext(NotificationContext)
  const { modalDispatch } = useContext(ModalContext)

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
      content: data.content
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    })

    try {
      const result = await update('categories', CategoryID, newData)
      console.log('Updated album: ', result)
      dispatch({
        type: UPDATE_CATEGORY,
        data: result.data,
        message: result.message
      })
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null
      })
      notify( msgDispatch, 'Album stored successfully.', 4, 'green')
      modalDispatch({ type: CLOSE_MODAL })

    } catch (error) {
      console.log('UpdateData error: ', error.message)
      setData({
        title: '',
        content: '',
        isSubmitting: false
      })

      notify( msgDispatch, error.message, 4, 'red')
      modalDispatch({ type: CLOSE_MODAL })
    }
  }

  // :::::::::::::::::::::::::::::::::::: //

  return (
    <Container>
      <CategoryForm
        errorMessage={data.errorMessage}
        title={data.title}
        content={data.content}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formHeader={'Päivitä kategoria'}
      />
    </Container>

  )

}

export default UpdateCategory