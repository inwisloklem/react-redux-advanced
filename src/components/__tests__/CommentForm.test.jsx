import React from 'react'
import CommentForm from 'components/CommentForm'
import { shallow } from 'enzyme'

describe('CommentForm', () => {
  let commentForm

  beforeEach(() => {
    commentForm = shallow(<CommentForm />)
  })

  it('contains text area', () => {
    expect(commentForm.find('textarea').length).toBe(1)
  })

  it('contains button', () => {
    expect(commentForm.find('button').length).toBe(1)
  })

  afterEach(() => {
    commentForm.unmount()
  })
})
