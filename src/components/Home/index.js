import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container';

import HomeList from './HomeList'
import {fetchGoods} from '../../redux/goods'
import {getTitle} from '../../utils/helpres'

class Home extends Component {
  static propTypes = {
    goods: PropTypes.array,
    fetchGoods: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchGoods()
  }

  render() {
    const title = getTitle(window.location.pathname)
    const {goods} = this.props

    return (
      <section>
        <Container>
          <h2>{title}</h2>
          {goods && <HomeList goods={goods} />}
        </Container>
      </section>
    )
  }
}

const mapStateToProps = ({goods}) => ({
  goods: goods.goods,
  isGoodsFetching: goods.isGoodsFetching,
  goodsError: goods.goodsError,
})

const mapDispatchToProps = {
  fetchGoods,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
