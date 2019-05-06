import React from 'react'
import styles from 'components/CommentList.module.sass'

function CommentList () {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        Be the change that you wish to see in the world
      </li>
      <li className={styles.item}>
        Insanity is doing the same thing, over and over again, but expecting
        different results
      </li>
      <li className={styles.item}>
        No one can make you feel inferior without your consent
      </li>
    </ul>
  )
}

export default CommentList
