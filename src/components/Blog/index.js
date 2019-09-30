import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container';

import {fetchPosts} from '../../redux/posts'
import {getTitle} from '../../utils/helpres'

class Blog extends Component {
  static propTypes = {
    posts: PropTypes.array,
    fetchPosts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const title = getTitle(window.location.pathname)

    return (
      <section>
        <Container>
          <h2>{title}</h2>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = ({posts}) => ({
  posts: posts.posts,
  isPostsFetching: posts.isPostsFetching,
  postsError: posts.postsError,
})

const mapDispatchToProps = {
  fetchPosts
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Blog)
