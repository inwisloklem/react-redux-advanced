import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

// TODO: Make this work

describe('App', () => {
  const response = [{ name: 'Test comment 1.' }, { name: 'Test comment 2.' }]
  let app

  beforeEach(() => {
    app = mount(
      <Root>
        <App />
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
      app.update()
      expect(app.find('li')).toHaveLength(response.length)
      done()
    })
  })

  afterEach(() => {
    app.unmount()
    moxios.uninstall()
  })
})
