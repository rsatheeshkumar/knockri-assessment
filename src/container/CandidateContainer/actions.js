import { candidateTypes } from './types'
import { get } from '../../webService'
import { setLoading, setError } from '../../redux/global/actions'

export const getCandidates = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const res = await get('/candidates')
      dispatch({ type: candidateTypes.GET_CANDIDATE, payload: res.data })
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const getQuestions = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const res = await get('/questions')
      const data = {}
      res.data.forEach((d) => (data[d.id] = d.question))
      dispatch({ type: candidateTypes.GET_QUESTIONS, payload: data })
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
