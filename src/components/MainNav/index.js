import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import {NavLink} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

function MainNav() {
  const classes = useStyles()
  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({...state, [side]: open})
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
  ]

  const renderNavLinks = navLinks =>
    navLinks.map(link => {
      return (
        <NavLink key={link.to} to={link.to}>
          <Button size="large">
            {link.icon}
            <span className="cropped">{link.text}</span>
          </Button>
        </NavLink>
      )
    })

  const sideList = (side, navLinks) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav">
        {navLinks.map(link => {
          return (
            <NavLink key={link.to} to={link.to}>
              <ListItem button key={link.text}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItem>
            </NavLink>
          )
        })}
        <Divider />
      </List>
    </div>
  )
  // TODO: Ниже нужен Toolbar?
  return (
    <AppBar position="static">
      <Container>
        <List component="nav">
          <NavLink to={URLS.HOME}>
            <img className="sidebar__logo" src={logImg} alt="Vaillant Group" width="50px" height="50px" />
          </NavLink>
          {renderNavLinks(navLinks)}
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
        </List>
      </Container>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left', navLinks)}
      </Drawer>
    </AppBar>
  )
}

export default MainNav
