import { changeAuth, saveComment } from 'actions'
import { CHANGE_AUTH, SAVE_COMMENT } from 'actions/types'

describe('changeAuth', () => {
  const isLoggedIn = false

  it('has the correct type', () => {
    const action = changeAuth()
    expect(action.type).toBe(CHANGE_AUTH)
  })

  it('has the correct payload', () => {
    const action = saveComment(isLoggedIn)
    expect(action.payload).toBe(isLoggedIn)
  })
})

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
