import { candidateTypes } from './types'

const INITIAL_STATE = {
  candidates: [],
  questions: [],
  error: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state }
  switch (action.type) {
    case candidateTypes.GET_CANDIDATE:
      newState.candidates = action.payload
      newState.error = null
      return newState
    case candidateTypes.GET_QUESTIONS:
      newState.questions = action.payload
      newState.error = null
      return newState
    case candidateTypes.SET_ERROR:
      newState.error = action.message
      return newState
    default:
      return state
  }
}

export default reducer
