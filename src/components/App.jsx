import React from 'react'
import CommentForm from 'components/CommentForm'
import CommentList from 'components/CommentList'
import styles from 'components/App.module.sass'

function App () {
  return (
    <main className={styles.app}>
      <section className={styles.commentForm}>
        <CommentForm />
      </section>
      <section className={styles.commentList}>
        <CommentList />
      </section>
    </main>
  )
}

export default App
