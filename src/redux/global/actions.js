import { globalTypes } from './types'

export const setError = (message) => ({
  type: globalTypes.SET_ERROR,
  message,
})

export const setLoading = (status) => ({
  type: globalTypes.SET_LOADING,
  status,
})
