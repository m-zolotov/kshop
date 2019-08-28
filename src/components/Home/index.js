import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import {getTitle} from '../../utils/helpres'

class Home extends Component {
  render() {
    const title = getTitle(window.location.pathname)

    return (
      <Fragment>
        <h2>{title}</h2>
      </Fragment>
    )
  }
}

export default Home
