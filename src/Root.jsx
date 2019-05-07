import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import reducers from 'reducers'

function Root (props) {
  const { children } = props
  return <Provider store={createStore(reducers, {})}>{children}</Provider>
}

Root.propTypes = {
  children: PropTypes.any
}

export default Root
