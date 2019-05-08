import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import PropTypes from 'prop-types'
import reducers from 'reducers'

function Root ({ children, initialState = {} }) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  )
  return <Provider store={store}>{children}</Provider>
}

Root.propTypes = {
  children: PropTypes.any,
  initialState: PropTypes.object
}

export default Root
