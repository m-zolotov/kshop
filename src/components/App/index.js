import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter} from 'react-router-dom'
import {Router} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import AppContent from '../AppContent'
import muiTheme from '../../styles/muiTheme'
import './style.scss';

const theme = createMuiTheme(muiTheme)
// Добавить глобальный Loader

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <AppContent />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
