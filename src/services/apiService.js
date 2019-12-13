import axios from 'axios'
const apiUrl = 'http://localhost:8000/api'

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

const update = async (url, id, newObject) => {
  const response = await axios.put(`${apiUrl}/${url}/${id}`, newObject, config)
  return response.data
}

const remove = async (url, id) => {
  const response = await axios.delete(`${apiUrl}/${url}/${id}`, config)
  return response.data
}


export default { getAll, create, update, remove, setToken }