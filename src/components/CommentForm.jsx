import React, { Component } from 'react'
import styles from 'components/CommentForm.module.sass'

class CommentForm extends Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ comment: '' })
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
        <button className={styles.button} type='submit'>
          Add
        </button>
      </form>
    )
  }
}

export default CommentForm
