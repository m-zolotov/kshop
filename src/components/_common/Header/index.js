import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {getTitle} from '../../../utils/helpres'

const styles = {
  heading: {
    marginTop: 15,
    marginBottom: 15,
  }
}

class Header extends PureComponent {
  render() {
    const {classes} = this.props
    const title = this.props.title || getTitle(window.location.pathname)

    return (
      <Typography variant="h4" component="h1" className={classes.heading}>
        {title}
      </Typography>
    )
  }
}

export default withStyles(styles)(Header)
