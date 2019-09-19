import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './style.scss';

function Header() {

  return (
    <Fragment>
      <Paper className="main-header">
        <Typography variant="h5" component="h3">
          This is a sheet of Header.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </Fragment>
  )
}

export default Header
