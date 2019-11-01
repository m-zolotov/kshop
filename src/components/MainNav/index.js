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
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'

import {getTitle, getIdOpenPage} from '../../utils/helpres'
import URLS from '../../utils/urls'
import './style.scss'

const styles = {
  list: {
    width: 250,
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    paddingLeft: "0",
    paddingRight: "0",
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
  value: getIdOpenPage(),
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
      return <Tab component={Link} key={link.to} to={link.to} label={link.text} />
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
          <Toolbar className={classes.toolbar}>
            <Hidden smDown>
              <Tabs component="nav" value={value} onChange={this.handleChange} className={classes.grow}>
                {this.renderLinks(navLinks)}
              </Tabs>
            </Hidden>
            <Hidden mdUp>
              <div className={classes.grow}>
                <IconButton onClick={this.toggleDrawer()}>
                  <MenuIcon />
                </IconButton>
              </div>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <Hidden mdUp>
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
        </Hidden>
      </AppBar>
    )
  }
}

export default withStyles(styles)(MainNav)
