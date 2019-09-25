import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from '../redux'
import App from './App'
import '../styles/style.scss'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

/*console.log(store.getState())

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})

console.log(store.getState())*/

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
