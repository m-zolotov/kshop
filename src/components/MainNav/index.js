import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {NavLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/DashboardTwoTone'
import PersonIcon from '@material-ui/icons/PersonTwoTone'
import CheckCircleIcon from '@material-ui/icons/CheckCircleTwoTone'
import ArchiveIcon from '@material-ui/icons/ArchiveTwoTone'
import ListAltIcon from '@material-ui/icons/ListAltTwoTone'

import logImg from '../../assets/img/logo.svg'
import {getTitle} from '../../utils/helpres'
import URLS from '../../utils/urls'
import './style.scss';

const renderNavLinks = (navLinks) =>
  navLinks.map(link => {
    return (
      (
        <NavLink key={link.to} to={link.to}>
          <Button size="large">
            {link.icon}
            <span className="cropped">{link.text}</span>
          </Button>
        </NavLink>
      )
    )
  })

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function MainNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navLinks = [
    {
      text: getTitle(URLS.HOME),
      to: URLS.HOME,
      icon: <DashboardIcon />,
    },
    {
      text: getTitle(URLS.STORE),
      to: URLS.STORE,
      icon: <PersonIcon />,
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

  // -------

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  // -------

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const desktopMenuId = 'primary-search-account-menu';
  const renderMenuDesktop = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={desktopMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <NavLink to={URLS.HOME}>
          <img className="sidebar__logo" src={logImg} alt="Vaillant Group" width="50px" height="50px" />
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <NavLink to={URLS.HOME}>
          <img className="sidebar__logo" src={logImg} alt="Vaillant Group" width="50px" height="50px" />
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {renderNavLinks(navLinks)}
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
          <div className={classes.grow} />

          <Hidden>{/* TODO Добавить mdUp*/}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenuDesktop}

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>

    </div>
  );
}

export default MainNav

/*
import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import DashboardIcon from '@material-ui/icons/DashboardTwoTone'
import PersonIcon from '@material-ui/icons/PersonTwoTone'
import CheckCircleIcon from '@material-ui/icons/CheckCircleTwoTone'
import ArchiveIcon from '@material-ui/icons/ArchiveTwoTone'
import ListAltIcon from '@material-ui/icons/ListAltTwoTone'

import logImg from '../../assets/img/logo.svg'
import {getTitle} from '../../utils/helpres'
import URLS from '../../utils/urls'
import './style.scss';

const renderNavLinks = (navLinks) =>
  navLinks.map(link => {
    return (
      (
        <NavLink key={link.to} to={link.to}>
          <Button size="large">
            {link.icon}
            <span className="cropped">{link.text}</span>
          </Button>
        </NavLink>
      )
    )
  })

function MainNav() {
  const navLinks = [
    {
      text: getTitle(URLS.HOME),
      to: URLS.HOME,
      icon: <DashboardIcon />,
    },
    {
      text: getTitle(URLS.STORE),
      to: URLS.STORE,
      icon: <PersonIcon />,
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
  return (
    <AppBar position="static">
      <Toolbar>
        <nav className="nav">
          <NavLink to={URLS.HOME}>
            <img className="sidebar__logo" src={logImg} alt="Vaillant Group" width="50px" height="50px" />
          </NavLink>
          <Hidden mdUp>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Hidden>
          {renderNavLinks(navLinks)}
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default MainNav
*/
