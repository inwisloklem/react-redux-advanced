import React from 'react'
import App from 'components/App'
import Root from 'Root'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { mount } from 'enzyme'
import moxios from 'moxios'

describe('App', () => {
  const response = [{ name: 'Test comment 1.' }, { name: 'Test comment 2.' }]
  let app
  let history

  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/post')

    app = mount(
      <Root>
        <Router history={history}>
          <App />
        </Router>
      </Root>
    )

    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response
    })
  })

  it('can fetch a list of comments and display them', done => {
    app.find('button[data-fetch]').simulate('click')
    moxios.wait(() => {
      history.push('/')
      app.update()
      expect(
        app
          .find('ul')
          .last()
          .find('li')
      ).toHaveLength(response.length)
      done()
    })
  })

  afterEach(() => {
    app.unmount()
    moxios.uninstall()
  })
})
