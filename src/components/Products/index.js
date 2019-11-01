import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container'

import ProductsList from './ProductsList'
import {fetchProducts} from '../../redux/products'
import Loader from '../_common/Loader'
import Header from '../_common/Header'

class Products extends Component {
  static propTypes = {
    products: PropTypes.array,
    fetchProducts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const {products, isProductsFetching} = this.props

    return (
      <section>
        <Container>
          <Loader isFetch={isProductsFetching} />
          <Header />
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
