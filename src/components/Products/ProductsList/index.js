import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';
import ProductCart from '../../_common/ProductCard'

class ProductsList extends Component {
  static propTypes = {
    products: PropTypes.array,
  }

  renderProducts() {
    const {products} = this.props
    return products.map((product, index) => <Grid item xs={4}>
      <ProductCart key={index} product={product} />
    </Grid>)
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
