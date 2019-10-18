import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import './style.scss'

function Header() {

  return (
    <Container>
      <Typography variant="h5" component="h3">
        This is a sheet of Header.
      </Typography>
      <Typography component="p">Paper can be used to build surface or other elements for your application.</Typography>
    </Container>
  )
}

export default Header
