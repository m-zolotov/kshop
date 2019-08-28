import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
        <li key={link.to} className="sidebar__link">
          <Button
            size="large"
            to={link.to}
            component={NavLink}
          >
            {link.icon}
            <span className="cropped">{link.text}</span>
          </Button>
        </li>
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
          <ul>{renderNavLinks(navLinks)}</ul>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default MainNav
