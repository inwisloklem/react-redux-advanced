import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from 'components/CommentList.module.sass'

class CommentList extends Component {
  renderComments () {
    return this.props.comments.map((comment, k) => (
      <li className={styles.item} key={k}>
        {comment}
      </li>
    ))
  }

  render () {
    return (
      <>
        <h2 className={styles.title}>Home</h2>
        <ul className={styles.list}>{this.renderComments()}</ul>
      </>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)
