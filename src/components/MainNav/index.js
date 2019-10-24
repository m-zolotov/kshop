import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import Store from '@material-ui/icons/Store'
import PersonIcon from '@material-ui/icons/PersonTwoTone'
import CheckCircleIcon from '@material-ui/icons/CheckCircleTwoTone'
import ArchiveIcon from '@material-ui/icons/ArchiveTwoTone'
import ListAltIcon from '@material-ui/icons/ListAltTwoTone'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import {getTitle} from '../../utils/helpres'
import URLS from '../../utils/urls'
import './style.scss'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
}

const navLinks = [
  {
    text: getTitle(URLS.HOME),
    to: URLS.HOME,
    icon: <PersonIcon />,
  },
  {
    text: getTitle(URLS.STORE),
    to: URLS.STORE,
    icon: <Store />,
  },
  {
    text: getTitle(URLS.BLOG),
    to: URLS.BLOG,
    icon: <CheckCircleIcon />,
  },
  {
    text: getTitle(URLS.CONTACTS),
    to: URLS.CONTACTS,
    icon: <ArchiveIcon />,
  },
  {
    text: getTitle(URLS.PARTNERS),
    to: URLS.PARTNERS,
    icon: <ListAltIcon />,
  },
  {
    text: getTitle(URLS.CART),
    to: URLS.CART,
    icon: <ShoppingCart />,
  },
]

const initialState = {
  open: false,
  value: null,
}

class MainNav extends Component {
  state = initialState

  toggleDrawer = () => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    return this.setState(state => ({open: !state.open}))
  }

  renderLinks = navLinks =>
    navLinks.map(link => {
      return <Tab component={Link} key={link.to} to={link.to} label={link.text} icon={link.icon} />
    })

  handleChange = (event, value) => {
    this.setState({value})
  }

  render() {
    const {open, value} = this.state
    const {classes} = this.props

    return (
      <AppBar position="static">
        <Container>
          <Tabs
            component="nav"
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
          >
            {this.renderLinks(navLinks)}
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton onClick={this.toggleDrawer()}>
              <MenuIcon />
            </IconButton>
          </Tabs>
        </Container>
        <Drawer open={open} onClose={this.toggleDrawer()}>
          <Tabs
            component="nav"
            orientation="vertical"
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            className={classes.list}
          >
            {this.renderLinks(navLinks)}
          </Tabs>
        </Drawer>
      </AppBar>
    )
  }
}

export default withStyles(styles)(MainNav)
