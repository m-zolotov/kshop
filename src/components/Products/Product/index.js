import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
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
      <Card>
        <CardActionArea>
          <CardMedia className={classes.cardMedia} image="http://placeimg.com/690/388/animals" title={product.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Product)
