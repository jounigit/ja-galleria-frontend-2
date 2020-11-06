import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes'

const modalReducer = (state, action) => {
  switch (action.type) {
  case OPEN_MODAL:
    return state = { open: true, header: action.header }
  case CLOSE_MODAL:
    return state = { open: false, header: '' }
  default:
    throw new Error()
  }
}

export default modalReducer