import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Product from '../Product'

class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.array,
  }

  renderProducts() {
    const {products} = this.props
    return products.map(product => (
      <Grid item xs={4} key={product.index}>
        <Product key={product.index} product={product} />
      </Grid>
    ))
  }

  render() {
    return (
      <Grid container spacing={2}>
        {this.renderProducts()}
      </Grid>
    )
  }
}

export default ProductsList
