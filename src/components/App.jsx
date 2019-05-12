import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentForm from 'components/CommentForm'
import CommentList from 'components/CommentList'
import styles from 'components/App.module.sass'

class App extends Component {
  renderButton () {
    return <button>{this.props.auth ? 'Sign Out' : 'Sign In'}</button>
  }

  renderHeader () {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render () {
    return (
      <main className={styles.app}>
        {this.renderHeader()}
        <Route path='/post' component={CommentForm} />
        <Route exact path='/' component={CommentList} />
      </main>
    )
  }
}

App.propTypes = {
  auth: PropTypes.bool.isRequired
}

function mapStateToProps (state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(App)
