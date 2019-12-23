import React, { useContext } from 'react'
import apiService from '../../../services/apiService'
import { CategoryContext } from '../../../contexts/CategoryContext'
import { UPDATE_CATEGORY } from '../../../reducers/actionTypes'

const getAndUpdateOne = async (id, dispatch) => {
  try {
    const category = await apiService.getOne('categories', id)
    dispatch({
      type: UPDATE_CATEGORY,
      data: category.data
    })
  } catch (error) {
    console.error()
  }
}

const UpdateCategoryAlbums = ({ id }) => {
  const { dispatch } = useContext(CategoryContext)

  const response = getAndUpdateOne(id, dispatch)

  return (
    <div>
      {response}
    </div>
  )

//   console.log(data)
}

export default UpdateCategoryAlbums