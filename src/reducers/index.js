import { combineReducers } from 'redux'
import { descriptionReducer } from './description'

export const rootReducer = combineReducers({
    data: descriptionReducer,
})
