import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { CategoryContext } from '../../../contexts/CategoryContext'
import { CLOSE_MODAL, UPDATE_CATEGORY } from '../../../reducers/actionTypes'
import CategoryForm from './CategoryForm'
import { updateData } from '../../../services/apiService'
import { ModalContext } from '../../../contexts/modalContext'

const UpdateCategory = ({ ...props } ) => {
  const initialState = {
    title: props.title,
    content: props.content,
    isSubmitting: false,
    errorMessage: null,
    message: null
  }
  const [data, setData] = useState(initialState)
  const { categories, dispatch } = useContext(CategoryContext)
  const { modalDispatch } = useContext(ModalContext)

  console.log('Update category rerender', )

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

    updateData(dispatch, UPDATE_CATEGORY, 'categories', props.id, newData)
    if( !categories.isLoading && categories.errorMessage==='') {
      setData({
        title: '',
        content: '',
        isSubmitting: false,
        errorMessage: null,
        message: 'Category updated successfully.'
      })
      modalDispatch({ type: CLOSE_MODAL })
    }
  }

  // :::::::::::::::::::::::::::::::::::: //
  // if (data.message) {
  //   setTimeout(() => props.setModalOpen(), 2000)
  //   return (
  //     <Container>
  //       <Header as='h3' color='green' data-cy='message'>{data.message}</Header>
  //     </Container>
  //   )
  // }

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