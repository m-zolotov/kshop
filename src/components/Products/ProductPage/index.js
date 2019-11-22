import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import {fetchProducts} from '../../../redux/products'
import Grid from '@material-ui/core/Grid'
import Header from '../../_common/Header'

import ProductCardMedia from '../ProductCardMedia'
import ProductCardContent from '../ProductCardContent'

//Todo: Перенести Grid item в отдельные файлы и вызывать сдесь с withStyles

class ProductPage extends Component {
  render() {
    return (
      <section>
        <Container>
          <Header title='Hello!' />
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <ProductCardContent />
              </Grid>
              <Grid item xs={12} sm={4}>
                <ProductCardMedia />
              </Grid>
            </Grid>
          </Card>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage)
