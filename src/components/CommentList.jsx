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
    return <ul className={styles.list}>{this.renderComments()}</ul>
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default connect(state => ({ comments: state.comments }))(CommentList)
