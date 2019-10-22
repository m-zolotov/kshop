import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuIcon from '@material-ui/icons/Menu'
import Store from '@material-ui/icons/Store'
import PersonIcon from '@material-ui/icons/PersonTwoTone'
import CheckCircleIcon from '@material-ui/icons/CheckCircleTwoTone'
import ArchiveIcon from '@material-ui/icons/ArchiveTwoTone'
import ListAltIcon from '@material-ui/icons/ListAltTwoTone'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

import logImg from '../../assets/img/logo.svg'
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
      return (
        <Button component={Link}
                key={link.to}
                to={link.to}
                size="large"
                //variant={link.to === window.location.pathname ? "outlined" : "text"}
        >
          {link.icon}
          <span className="cropped">{link.text}</span>
        </Button>
      )
    })

  sideList = (navLinks) => {
    const {classes} = this.props

    return (
      <div
        className={classes.list}
        onClick={this.toggleDrawer()}
        onKeyDown={this.toggleDrawer()}
      >
        <MenuList component="nav">
          {navLinks.map(link => {
            return (
              <MenuItem component={Link} key={link.to} to={link.to} selected={window.location.pathname === link.to}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.text} />
              </MenuItem>
            )
          })}
          <Divider />
        </MenuList>
      </div>
    )
  }

  render() {
    const {open} = this.state
    const {classes} = this.props

    return (
      <AppBar position="static">
        <Container>
          <Toolbar component="nav">
            <Link to={URLS.HOME}>
              <img className="sidebar__logo" src={logImg} alt="Vaillant Group" width="50px" height="50px" />
            </Link>
            {this.renderLinks(navLinks)}
            <div className={classes.grow} />
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton onClick={this.toggleDrawer()}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
        <Drawer open={open} onClose={this.toggleDrawer()}>
          {this.sideList(navLinks)}
        </Drawer>
      </AppBar>
    )
  }
}

export default withStyles(styles)(MainNav)
