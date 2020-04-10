import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3010'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const get = async (url) => {
  const res = await axios.get(url)
  return res
}

export const post = async (url, data) => {
  const res = await axios.post(url, data)
  return res
}
