import axios from 'axios'
const apiUrl = 'http://localhost:8000/api'

const baseUrl = 'http://localhost:8000/api/albums'

let token = null
let config = []

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
  config = {
    headers: { 'Authorization': token }
  }
}

const getAll = async (url) => {
  const response = await axios.get(`${apiUrl}/${url}`)
  return response.data
}

const create = async ( url, newObject ) => {
  const response = await axios.post(`${apiUrl}/${url}`, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

// ::::::::::::::::::::::::::::::::::::: (`${baseUrl}/${id}/comments`, newObject)
export const getAlbums = () => {
  const url = `${apiUrl}/albums`
  getAll(url)
}

export default { getAll, create, update, remove, setToken }