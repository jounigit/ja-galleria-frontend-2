import React, {
  useReducer,
  createContext
} from 'react'
import modalReducer from '../reducers/modalReducer'
import { OPEN_MODAL, CLOSE_MODAL } from '../reducers/actionTypes'

const initialState = {
  open: false
}

export const modalState = (dispatch) => {
  dispatch({
    type: OPEN_MODAL
  })
  dispatch({
    type: CLOSE_MODAL
  })
}

export const ModalContext = createContext()

const ModalContextProvider = (props) => {
  const [modal, modalDispatch] = useReducer(modalReducer, initialState)

  return (
    <ModalContext.Provider value={{ modal, modalDispatch }}>
      { props.children }
    </ModalContext.Provider>
  )
}

export default ModalContextProvider