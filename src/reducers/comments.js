import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name)
      return [...comments, ...state]
    case SAVE_COMMENT:
      return [action.payload, ...state]
    default:
      return state
  }
}
