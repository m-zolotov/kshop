import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import URLS from '../../../utils/urls'

const styles = {
  Card: {
    border: '1px solid #eee',
  },
  cardMedia: {
    height: 200,
  },
}

class Product extends PureComponent {
  static propTypes = {
    product: PropTypes.object,
  }

  render() {
    const {classes, product} = this.props
    return (
      <Card square className={classes.Card}>
        <CardActionArea component={Link} to={`${URLS.STORE}/${product.index}`}>
          <CardMedia className={classes.cardMedia} image={product.imgThumb} title={product.title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            В корзину
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Product)
