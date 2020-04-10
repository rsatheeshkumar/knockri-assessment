import { types } from './types'
import { get, post } from '../../webService'
import { setLoading, setError } from '../../redux/global/actions'

export const getApplications = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const res = await get(`applications/${id}`)
      dispatch({ type: types.GET_APPLICATION, payload: res.data })
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const removeApplications = () => ({
  type: types.REMOVE_APPLICATION,
})

export const getComments = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const res = await get('/comments')
      dispatch({ type: types.GET_COMMENTS, payload: res.data })
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const postComment = (data) => {
  return async (dispatch) => {
    try {
      const res = await post('/comments', data)
      console.log(res)
      dispatch({ type: types.POST_COMMENTS, payload: res.data })
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
