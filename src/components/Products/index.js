import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container'

import ProductsList from './ProductsList'
import {fetchProducts} from '../../redux/products'
import {getTitle} from '../../utils/helpres'
import Loader from '../_common/Loader'

class Products extends Component {
  static propTypes = {
    products: PropTypes.array,
    fetchProducts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const title = getTitle(window.location.pathname)
    const {products, isProductsFetching} = this.props

    return (
      <section>
        <Container>
          <Loader isFetch={isProductsFetching} />
          <h2>{title}</h2>
          {products && <ProductsList products={products} />}
        </Container>
      </section>
    )
  }
}

const mapStateToProps = ({products}) => ({
  products: products.data,
  isProductsFetching: products.isProductsFetching,
  productsError: products.productsError,
})

const mapDispatchToProps = {
  fetchProducts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
