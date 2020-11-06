import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { CategoryContext } from '../../../contexts/CategoryContext'
import { CLOSE_MODAL, CREATE_CATEGORY } from '../../../reducers/actionTypes'
import CategoryForm from './CategoryForm'
import { createData } from '../../../services/apiService'
import { ModalContext } from '../../../contexts/modalContext'

const initialState = {
  title: '',
  content: '',
  isSubmitting: false,
  errorMessage: null,
  message: null
}

const CreateCategory = () => {
  const [data, setData] = useState(initialState)
  const { categories, dispatch } = useContext(CategoryContext)
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

    createData(dispatch, CREATE_CATEGORY, 'categories', newData)

    if( !categories.isLoading && categories.errorMessage==='') {
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null,
        message: 'Category stored successfully.'
      })
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
        category={data.category}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formHeader={'Uusi kategoria'}
      />
    </Container>

  )

}

export default CreateCategory