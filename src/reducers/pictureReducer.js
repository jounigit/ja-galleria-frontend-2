
const pictureReducer = (state, action) => {
  switch (action.type) {
  case 'FAILURE':
    return { data: null, isLoading: false, errorMessage: action.error }
  case 'LOADING':
    return { data: null, isLoading: true, errorMessage: '' }
  case 'INIT_PICTURES':
    return { data: action.data, isLoading: false, errorMessage: '' }
  default:
    return state
  }
}

export default pictureReducer