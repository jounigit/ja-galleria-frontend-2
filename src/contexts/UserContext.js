import React,
{
  createContext,
  useReducer,
  useEffect,
  // useContext
} from 'react'
import userReducer from '../reducers/userReducer'
import { INIT_USERS } from '../reducers/actionTypes'
import { fetchProtectedData } from '../services/apiService'
// import { AuthContext } from '../../../contexts/AuthContext'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  // const { auth } = useContext(AuthContext)
  const [users, userDispatch] = useReducer(userReducer, [])

  useEffect(() => {
    fetchProtectedData(userDispatch, INIT_USERS, 'users')
  }, [userDispatch])

  return (
    <UserContext.Provider value={{ users, userDispatch }}>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserContextProvider