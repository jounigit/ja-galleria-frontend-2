import React, {
  useReducer,
  createContext
} from 'react'
import notificationReducer from '../reducers/notificationReducer'
import { NEW_MSG, HIDE_MSG } from '../reducers/actionTypes'

const initialState = {
  content: 'Message ...',
  style: 'black',
  visibility: false
}

export const notify = (dispatch, content, time, style) => {
  dispatch({
    type: NEW_MSG,
    content,
    style
  })
  setTimeout(() => {
    dispatch({
      type: HIDE_MSG
    })
  }, (time * 1000))
}

export const NotificationContext = createContext()

const NotificationContextProvider = (props) => {
  const [message, msgDispatch] = useReducer(notificationReducer, initialState)

  return (
    <NotificationContext.Provider  value={{ message, msgDispatch }}>
      { props.children }
    </NotificationContext.Provider>
  )
}

export default NotificationContextProvider