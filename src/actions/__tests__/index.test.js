import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

describe('saveComment', () => {
  const comment = 'Test comment.'

  it('has the correct type', () => {
    const action = saveComment()
    expect(action.type).toBe(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const action = saveComment(comment)
    expect(action.payload).toBe(comment)
  })
})
