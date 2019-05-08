import React from 'react'
import CommentList from 'components/CommentList'
import Root from 'Root'
import { mount } from 'enzyme'

describe('CommentList', () => {
  const initialState = {
    comments: ['Test comment 1.', 'Test comment 2.']
  }
  let commentList

  beforeEach(() => {
    commentList = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    )
  })

  it('creates one <li> per comment', () => {
    expect(commentList.find('li').length).toBe(initialState.comments.length)
  })

  it('shows the text for each comment', () => {
    const text = commentList.render().text()
    initialState.comments.forEach(comment => {
      expect(text).toContain(comment)
    })
  })

  afterEach(() => {
    commentList.unmount()
  })
})
