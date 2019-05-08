import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions'
import styles from 'components/CommentForm.module.sass'

class CommentForm extends Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.comment) {
      this.props.saveComment(this.state.comment)
      this.setState({ comment: '' })
    }
  }

  render () {
    const { comment } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textArea}
          onChange={handleChange}
          placeholder='Enter your comment here...'
          value={comment}
        />
        <button className={styles.button} type='submit' data-submit>
          Submit
        </button>

        <button
          className={styles.button}
          type='button'
          onClick={this.props.fetchComments}
          data-fetch
        >
          Fetch comments
        </button>
      </form>
    )
  }
}

CommentForm.propTypes = {
  fetchComments: PropTypes.func,
  saveComment: PropTypes.func
}

export default connect(
  null,
  actions
)(CommentForm)
