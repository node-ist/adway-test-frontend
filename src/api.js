import axios from 'axios'

const baseUrl = 'http://localhost:8888'

export async function getJobDescriptionApi(dispatch, type_success, type_fail) {
  try {
    const response = await axios.get(`${baseUrl}/jobs`)
    dispatch({
      type: type_success,
      payload: response.data.data[0],
    })
  } catch(error) {
    dispatch({
      type: type_fail,
      payload: error,
    })
  }
}

export async function sendForm(values) {
  const response = await axios.post(`${baseUrl}/users/profile`, values)

  return response.data
}
