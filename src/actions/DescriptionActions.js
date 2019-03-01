// import { getJobDescriptionApi } from './../api'
export const GET_DESCRIPTION_REQUEST = 'GET_DESCRIPTION_REQUEST'
export const GET_DESCRIPTION_SUCCESS = 'GET_DESCRIPTION_SUCCESS'
export const GET_DESCRIPTION_FAIL = 'GET_DESCRIPTION_FAIL'

export function getDescription() {
  return dispatch => {
    dispatch({
      type: GET_DESCRIPTION_REQUEST,
    })

    setTimeout(() => {
      dispatch({
        type: GET_DESCRIPTION_SUCCESS,
        payload: {
          title: 'Front-end developer - Comviq Join squad',
          tel: 'Tele 2',
          location: 'Sweden',
          time: 'Full-time',
          more_link: '#',
          role_description: 'As a Front-End developer within the Comviq Join squad you will be responsible for building great customer experiences. The squad support new customers...',
          benefits: ['We invest in our people', 'Net gen telecom company', 'State of the art IT stack'],
        },
      })
    },2000)

    // getJobDescriptionApi(dispatch, GET_DESCRIPTION_SUCCESS, GET_DESCRIPTION_FAIL)
  }
}
