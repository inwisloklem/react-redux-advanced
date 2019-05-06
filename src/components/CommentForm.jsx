import React from 'react'
import styles from 'components/CommentForm.module.sass'

function CommentForm () {
  return (
    <form className={styles.form}>
      <textarea
        className={styles.textArea}
        placeholder='Enter your comment here...'
      />
      <button className={styles.button} type='submit'>
        Add
      </button>
    </form>
  )
}

export default CommentForm
