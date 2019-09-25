import React, {Component} from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class HomeList extends Component {
  static propTypes = {
    goods: PropTypes.array,
  }

  /*renderLi() {
    const {goods} = this.props
    console.log('goods', goods)
    goods.map((item, index) => {
      return (
        <ListItem key={index}>{item.title}</ListItem>
      )
    })
  }*/

  render() {
    return (
      <List>
        {/*{this.renderLi()}*/}
      </List>
    )
  }
}

export default HomeList
