import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  CardContent: {
    padding: '0 0 16px',
  },
  CardActions: {
    padding: '0 0 8px',
  },
}

class ProductCardContent extends Component {
  static propTypes = {}

  render() {
    const {classes} = this.props

    return (
      <Fragment>
        <CardContent className={classes.CardContent}>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex mollitia similique sunt suscipit.
            Accusantium dolore earum fugiat fugit iusto molestiae natus, necessitatibus,
            nulla officiis quas ratione, repellendus soluta. Doloremque, labore.
          </Typography>
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
          </List>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Button size="small" color="primary">
            Добавить в корзину
          </Button>
          <Button size="small" color="primary">
            Купить
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Button size="small" color="primary">
            Фотоальбом
          </Button>
        </CardActions>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ProductCardContent)
