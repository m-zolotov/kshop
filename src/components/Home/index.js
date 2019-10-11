import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container'

import HomeList from './HomeList'
import {fetchProducts} from '../../redux/products'
import {getTitle} from '../../utils/helpres'

class Home extends Component {
  static propTypes = {
    products: PropTypes.array,
    fetchProducts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const title = getTitle(window.location.pathname)
    const {products} = this.props

    return (
      <section>
        <Container>
          <h2>{title}</h2>
          {products && <HomeList products={products} />}
        </Container>
      </section>
    )
  }
}

const mapStateToProps = ({products}) => ({
  products: products.products,
  isProductsFetching: products.isProductsFetching,
  productsError: products.productsError,
})

const mapDispatchToProps = {
  fetchProducts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
