import axios from 'axios'
import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types'

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
