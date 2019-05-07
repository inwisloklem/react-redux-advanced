import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

describe('commentsReducer', () => {
  const comment = 'Test comment.'
  const UNKNOWN = 'UNKNOWN'

  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: comment
    }
    expect(commentsReducer([], action)).toEqual([comment])
  })

  it('handles actions of unknown type', () => {
    const action = {
      type: UNKNOWN
    }
    expect(commentsReducer([], action)).toEqual([])
  })
})
