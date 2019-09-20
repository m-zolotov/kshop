import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Redirect, Switch, Route} from 'react-router-dom'

import MainNav from '../MainNav'
import Header from '../Header'
import Home from '../Home'
import Store from '../Store'
import Blog from '../Blog'
import Contacts from '../Contacts'
import Partners from '../Partners'

import URLS from '../../utils/urls'

class AppContent extends Component {
  static get routes() {
    const routes = [
      {
        path: URLS.HOME,
        exact: true,
        component: Home,
      },
      {
        path: URLS.STORE,
        exact: true,
        component: Store,
      },
      {
        path: URLS.BLOG,
        exact: true,
        component: Blog,
      },
      {
        path: URLS.CONTACTS,
        exact: true,
        component: Contacts,
      },
      {
        path: URLS.PARTNERS,
        exact: true,
        component: Partners,
      },
    ]

    return routes.map(route => (
      <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
    ))
  }
  render() {
    return (
      <Fragment>
        <MainNav />
        <Header />
        <main>
          <Switch>
            {AppContent.routes}
            <Redirect to={URLS.HOME} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

export default AppContent
