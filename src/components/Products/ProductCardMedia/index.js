import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CardMedia from '@material-ui/core/CardMedia'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  CardMedia: {
    border: '1px solid #eee',
  },
}

class ProductCardMedia extends Component {
  static propTypes = {}

  render() {
    const {classes} = this.props

    return (
      <CardMedia
        component="img"
        alt="title"
        height="340"
        image="http://placehold.it/900x1200"
        title="title"
        className={classes.CardMedia}
      />
    )
  }
}

export default withStyles(styles)(ProductCardMedia)
