import React from 'react'
import CommentForm from 'components/CommentForm'
import Root from 'Root'
import { mount } from 'enzyme'

describe('CommentForm', () => {
  const comment = 'Test comment.'
  let commentForm

  beforeEach(() => {
    commentForm = mount(
      <Root>
        <CommentForm />
      </Root>
    )
  })

  it('contains textarea and two buttons', () => {
    expect(commentForm.find('textarea').length).toBe(1)
    expect(commentForm.find('button').length).toBe(2)
  })

  describe('textarea', () => {
    beforeEach(() => {
      commentForm.find('textarea').simulate('change', {
        target: { value: comment }
      })
      commentForm.update()
    })

    it('is typeable', () => {
      expect(commentForm.find('textarea').prop('value')).toBe(comment)
    })

    it('clears after the form is submitted', () => {
      commentForm.find('form').simulate('submit', {
        preventDefault () {}
      })
      commentForm.update()
      expect(commentForm.find('textarea').prop('value')).toBe('')
    })
  })

  afterEach(() => {
    commentForm.unmount()
  })
})
