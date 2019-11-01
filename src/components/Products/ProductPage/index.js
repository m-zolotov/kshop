import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {fetchProducts} from '../../../redux/products'
import Header from '../../_common/Header'

const styles = {
  heading: {
    marginTop: 15,
    marginBottom: 15,
  }
}

class ProductPage extends Component {
  render() {
    return (
      <section>
        <Container>
          <Header title='Hello!' />
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
