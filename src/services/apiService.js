import axios from 'axios'
import { FAILURE } from '../reducers/actionTypes'
const apiUrl = process.env.REACT_APP_API

let token = null
let config = []

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
  config = {
    headers: { 'Authorization': token }
  }
}

const getAllProtected = async (url) => {
  const response = await axios.get(`${apiUrl}/${url}`, config)
  return response.data
}

const getAll = async (url) => {
  const response = await axios.get(`${apiUrl}/${url}`)
  return response.data
}

const getOne = async (url, id) => {
  const response = await axios.get(`${apiUrl}/${url}/${id}`)
  return response.data
}

const create = async ( url, newObject ) => {
  const response = await axios.post(`${apiUrl}/${url}`, newObject, config)
  return response.data
}

const update = async (url, id, newObject) => {
  const response = await axios.put(`${apiUrl}/${url}/${id}`, newObject, config)
  console.log('== Service update response ==', response.data)
  return response.data
}

const updateAlbumPictures = async (id, picID) => {
  const response = await axios.get(`${apiUrl}/albums/${id}/pictures/${picID}`, config)
  console.log('== Service update response ==', response.data)
  return response.data
}

const remove = async (url, id) => {
  const response = await axios.delete(`${apiUrl}/${url}/${id}`, config)
  return response.data
}

const upload = async ( url, newObject ) => {
  const response = await axios.post(`${apiUrl}/${url}/upload`, newObject, config)
  return response.data
}

// ::::::::::::::::: actions :::::::::::::::::::::::::::::::: //
export const fetchProtectedData = async (dispatch, TYPE, path) => {
  try {
    const results = await getAllProtected(path)
    dispatch({ type: TYPE, data: results.data })
  } catch (error) {
    dispatch({ type: FAILURE, error: error.message || error })
  }
}

export const fetchData = async (dispatch, TYPE, path) => {
  try {
    const results = await getAll(path)
    dispatch({ type: TYPE, data: results })
  } catch (error) {
    dispatch({ type: FAILURE, error: error.message || error })
  }
}

export const createData = async (dispatch, TYPE, path, data) => {
  try {
    const result = await axios.post(`${apiUrl}/${path}`, data, config)
    // const result = await create(path, data)
    dispatch({
      type: TYPE,
      data: result.data,
      message: result.message
    })
  } catch (error) {
    dispatch({
      type: FAILURE, error
    })
  }
}

export const updateData = async (dispatch, TYPE, path, id, data) => {
  try {
    const result = await axios.put(`${apiUrl}/${path}/${id}`, data, config)
    // const result = await update(path, id, data)
    // console.log('== Service updateData ==', result.data)
    dispatch({
      type: TYPE,
      data: result.data,
      message: result.message
    })
  } catch (error) {
    dispatch({
      type: FAILURE, error
    })
  }
}

export const addAlbumPicture = async (dispatch, TYPE, id, pictureID) => {
  try {
    const result = await updateAlbumPictures(id, pictureID)
    // console.log('Service updateData res: ', result)
    dispatch({
      type: TYPE,
      data: result,
      message: result.message
    })
    return result
  } catch (error) {
    dispatch({
      type: FAILURE, error
    })
  }
}

export const removeAlbumPicture = async (dispatch, TYPE, path, id, pictureID) => {
  try {
    const result = await axios.delete(`${apiUrl}/${path}/${id}/${pictureID}`, config)
    // const result = await update(path, id, data)
    console.log('== Service remove picture ==', result)
    dispatch({
      type: TYPE,
      data: result.data,
      message: result.message
    })
  } catch (error) {
    dispatch({
      type: FAILURE, error
    })
  }
}

export const removeData = async (dispatch, TYPE, path, id) => {
  try {
    await remove(path, id)
    dispatch({
      type: TYPE,
      id
    })
  } catch(error) {
    dispatch({
      type: FAILURE, error
    })
  }
}

export default {
  getAllProtected,
  getAll,
  getOne,
  create,
  update,
  remove,
  setToken,
  upload,
  updateAlbumPictures
}