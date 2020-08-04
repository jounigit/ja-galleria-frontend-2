import { NEW_MSG, HIDE_MSG } from './actionTypes'

const notificationReducer = (state, action) => {
  switch (action.type) {
  case NEW_MSG:
    return state = { content: action.content, style: action.style, visibility: true }
  case HIDE_MSG:
    return state = { content: 'No message', style: '', visibility: false }
  default:
    throw new Error()
  }
}

export default notificationReducer