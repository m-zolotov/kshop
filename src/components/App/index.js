import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter} from 'react-router-dom'
import AppContent from '../AppContent'
import './style.scss';

//const theme = createMuiTheme(muiTheme)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    );
  }
}

export default App;
