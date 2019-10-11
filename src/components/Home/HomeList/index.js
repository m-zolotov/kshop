import React, {Component} from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

class HomeList extends Component {
  static propTypes = {
    products: PropTypes.array,
  }

  renderLi() {
    const {products} = this.props
    return products.map(item => <ListItem key={item.id}>{item.title}</ListItem>)
  }

  render() {
    return <List>{this.renderLi()}</List>
  }
}

export default HomeList
