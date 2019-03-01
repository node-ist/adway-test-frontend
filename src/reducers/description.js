import { GET_DESCRIPTION_REQUEST, GET_DESCRIPTION_SUCCESS, GET_DESCRIPTION_FAIL } from '../actions/DescriptionActions'

const initialState = {
  description: null,
  isFetching: true,
  error: '',
}

export function descriptionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DESCRIPTION_REQUEST:
      return { ...state, isFetching: true }

    case GET_DESCRIPTION_SUCCESS:
      return { ...state, description: action.payload, isFetching: false }

    case GET_DESCRIPTION_FAIL:
      return { ...state, error: action.payload, description: null, isFetching: false }

    default:
      return state
  }
}
