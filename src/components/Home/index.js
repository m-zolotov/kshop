import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'

import Header from '../_common/Header'


class Home extends Component {
  render() {
    return (
      <section>
        <Container>
          <Header />
        </Container>
      </section>
    )
  }
}

export default Home
