import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ArticlesList from '../Articles/ArticlesList'
import Container from '@material-ui/core/Container'

import Header from '../_common/Header'
import {fetchPosts} from '../../redux/posts'

class Blog extends Component {
  static propTypes = {
    posts: PropTypes.array,
    fetchPosts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <section>
        <Container>
          <Header />
          <ArticlesList />
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
  fetchPosts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
