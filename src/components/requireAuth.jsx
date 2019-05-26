import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function requireAuth (WrappedComponent) {
  class ComposedComponent extends Component {
    shouldNavigateAway () {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    componentDidMount () {
      this.shouldNavigateAway()
    }

    componentDidUpdate () {
      this.shouldNavigateAway()
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  ComposedComponent.propTypes = {
    auth: PropTypes.bool,
    history: PropTypes.array
  }

  function mapStateToProps (state) {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
