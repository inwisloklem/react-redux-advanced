import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentForm from 'components/CommentForm'
import CommentList from 'components/CommentList'
import styles from 'components/App.module.sass'

class App extends Component {
  renderButton () {
    return (
      <button className={styles.button}>
        {this.props.auth ? 'Sign Out' : 'Sign In'}
      </button>
    )
  }

  renderHeader () {
    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} exact to='/'>
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to='/post'>
            Post comment
          </NavLink>
        </li>
        <li className={styles.item}>{this.renderButton()}</li>
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
