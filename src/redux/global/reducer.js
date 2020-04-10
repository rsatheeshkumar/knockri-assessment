import { globalTypes } from './types'

const INITIAL_STATE = {
  error: null,
  loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state }
  switch (action.type) {
    case globalTypes.SET_ERROR:
      newState.loading = false
      newState.error = action.message
      return newState
    case globalTypes.SET_LOADING:
      newState.loading = action.status
      return newState
    default:
      return newState
  }
}

export default reducer
