import axios from 'axios'
import { CHANGE_AUTH, FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types'

export function changeAuth (isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

export function fetchComments () {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments')
  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function saveComment (comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
