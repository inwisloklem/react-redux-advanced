import { combineReducers } from 'redux'
import authReducer from 'reducers/auth'
import commentsReducer from 'reducers/comments'

export default combineReducers({
  auth: authReducer,
  comments: commentsReducer
})
