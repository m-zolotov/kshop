import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import {getTitle} from '../../utils/helpres'

class Blog extends Component {
  render() {
    const title = getTitle(window.location.pathname)

    return (
      <Fragment>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Fragment>
    )
  }
}

export default Blog
