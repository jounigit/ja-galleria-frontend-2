import React,
{
  createContext,
  useReducer,
  useEffect,
  // useContext
} from 'react'
import userReducer from '../reducers/userReducer'
import { INIT_USERS } from '../reducers/actionTypes'
import { fetchData } from '../services/apiService'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [users, userDispatch] = useReducer(userReducer, [])

  useEffect(() => {
    fetchData(userDispatch, INIT_USERS, 'users')
  }, [userDispatch])

  return (
    <UserContext.Provider value={{ users, userDispatch }}>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserContextProvider