import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';

import {getTitle} from '../../utils/helpres'

class Store extends Component {
  static propTypes = {}

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

export default Store
