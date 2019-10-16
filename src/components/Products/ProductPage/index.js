import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {fetchProducts} from '../../../redux/products'

class ProductPage extends Component {
  render() {
    return (
      <section>
        <Container>
          <Typography gutterBottom variant="h5" component="h3">
            Hello!
          </Typography>
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
