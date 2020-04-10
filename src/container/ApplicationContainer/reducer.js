import { types } from './types'

const INITIAL_STATE = {
  application: [],
  comments: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state }
  switch (action.type) {
    case types.GET_APPLICATION:
      newState.application = action.payload
      return newState
    case types.REMOVE_APPLICATION:
      newState.application = []
      newState.comments = []
      return newState
    case types.GET_COMMENTS:
      newState.comments = action.payload
      return newState
    case types.POST_COMMENTS:
      newState.comments = [action.payload, ...newState.comments]
      return newState

    default:
      return state
  }
}

export default reducer
