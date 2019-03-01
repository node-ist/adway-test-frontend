import axios from 'axios'

const baseUrl = ''

export function getJobDescriptionApi(dispatch, type_success, type_fail) {
  return axios.get(baseUrl).then(res =>
    dispatch({
      type: type_success,
      payload: res.data,
    })
  ).catch(dispatch({
      type: type_fail,
      payload: 'Error',
    })
  )
}

export function sendForm(values) {
  axios.post(baseUrl, { data: values })
    .then(() => {
      this.props.history.push('/confirmation')
    })
    .catch()
}
