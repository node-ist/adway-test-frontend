import { getJobDescriptionApi } from './../api'
export const GET_DESCRIPTION_REQUEST = 'GET_DESCRIPTION_REQUEST'
export const GET_DESCRIPTION_SUCCESS = 'GET_DESCRIPTION_SUCCESS'
export const GET_DESCRIPTION_FAIL = 'GET_DESCRIPTION_FAIL'

export function getDescription() {
  return dispatch => {
    dispatch({
      type: GET_DESCRIPTION_REQUEST,
    })

    getJobDescriptionApi(dispatch, GET_DESCRIPTION_SUCCESS, GET_DESCRIPTION_FAIL)
  }
}
