import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Product from '../Product'

class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.array,
  }

  get body() {
    return this.props.products.map(product => (
      <Grid key={product.index} item xs={4}>
        <Product product={product} />
      </Grid>
    ))
  }

  render() {
    return (
      <Grid container spacing={2}>
        {this.body}
      </Grid>
    )
  }
}

export default ProductsList
