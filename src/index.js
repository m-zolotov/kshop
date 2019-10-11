import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'
import Root from './components'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
