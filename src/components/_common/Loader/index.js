import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'
//import cn from 'classnames'
import {CSSTransition} from 'react-transition-group'
import CircularProgress from '@material-ui/core/CircularProgress'

import {COLORS, THEME} from '../../../styles/muiTheme'

const styles = {
  circularProgress: {
    color: COLORS.primary.light,
  },
}

Loader.propTypes = {
  isFetch: PropTypes.bool,
  isBlock: PropTypes.bool,
  isApp: PropTypes.bool,
}

export default function Loader({isFetch, isBlock, isApp}) {
  const loader = (
    <CSSTransition in={isFetch} classNames="loader" timeout={THEME.SHORTER} unmountOnExit>
      <CircularProgress size={50} style={styles.circularProgress} />
    </CSSTransition>
  )
  return ReactDOM.createPortal(loader, document.body)
}
