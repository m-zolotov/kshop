import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'

import Header from '../_common/Header'
import ContactsList from './ContactsList'

class Contacts extends Component {
  static propTypes = {}

  render() {
    return (
      <section>
        <Container>
          <Header />
          <ContactsList />
        </Container>
      </section>
    )
  }
}

export default Contacts
