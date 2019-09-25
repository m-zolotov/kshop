import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

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

    const homeList = (
      <HomeList goods={goods} />
    )

    let homeContent = (
      <Fragment>
        {homeList}
      </Fragment>
    )

    return (
      <section>
        <h2>{title}</h2>
        {homeContent}
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
