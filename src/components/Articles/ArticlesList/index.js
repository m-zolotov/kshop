import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Typography from '@material-ui/core/Typography'
import ListSubheader from '@material-ui/core/ListSubheader'

import Article from '../Article'

class ArticlesList extends PureComponent {
  static propTypes = {
    articles: PropTypes.array,
  }

  render() {
    return (
      <Fragment>
        <List>
          <ListItem>jskjdkjfkasdfsdakfnjsadnfj</ListItem>
          <ListItem>jskjdkjfkasdfsdakfnjsadnfj</ListItem>
          <ListItem>jskjdkjfkasdfsdakfnjsadnfj</ListItem>
          <ListItem>jskjdkjfkasdfsdakfnjsadnfj</ListItem>
          <ListItem>jskjdkjfkasdfsdakfnjsadnfj</ListItem>
        </List>
      </Fragment>
    )
  }
}

export default ArticlesList
