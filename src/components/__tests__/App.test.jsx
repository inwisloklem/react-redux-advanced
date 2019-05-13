import React from 'react'
import App from 'components/App'
import { MemoryRouter } from 'react-router-dom'
import CommentForm from 'components/CommentForm'
import CommentList from 'components/CommentList'
import Root from 'Root'
import { mount } from 'enzyme'

describe('App', () => {
  let app

  describe('CommentForm', () => {
    beforeEach(() => {
      app = mount(
        <Root>
          <MemoryRouter initialEntries={['/post']}>
            <App />
          </MemoryRouter>
        </Root>
      )
    })

    it('routes to CommentForm component', () => {
      expect(app.find(CommentForm)).toHaveLength(1)
    })

    afterEach(() => {
      app.unmount()
    })
  })

  describe('CommentList', () => {
    beforeEach(() => {
      app = mount(
        <Root>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Root>
      )
    })

    it('routes to CommentList component', () => {
      expect(app.find(CommentList)).toHaveLength(1)
    })

    afterEach(() => {
      app.unmount()
    })
  })
})
