import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import {getTitle} from '../../utils/helpres'

class Store extends Component {
  static propTypes = {}

  render() {
    const title = getTitle(window.location.pathname)

    return (
      <Fragment>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim est eveniet facilis ipsam
          iure nobis, nostrum nulla odit placeat possimus quia saepe sit sunt unde velit. Deleniti, facere.</p>
      </Fragment>
    )
  }
}

export default Store
