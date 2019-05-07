import React from 'react'
import App from 'components/App'
import CommentForm from 'components/CommentForm'
import CommentList from 'components/CommentList'
import { shallow } from 'enzyme'

describe('App', () => {
  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  it('contains CommentForm component', () => {
    expect(app.find(CommentForm).length).toBe(1)
  })

  it('contains CommentList component', () => {
    expect(app.find(CommentList).length).toBe(1)
  })

  afterEach(() => {
    app.unmount()
  })
})
