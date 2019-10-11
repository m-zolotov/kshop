import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ProductList from './ProductsList'
import ProductsSorting from './ProductsSorting'

class Products extends Component {
  static propTypes = {
    products: PropTypes.array,
  }

  render() {
    const {products} = this.props
    return (
      <div>
        <ProductList products={products} />
      </div>
    )
  }
}

export default Products
