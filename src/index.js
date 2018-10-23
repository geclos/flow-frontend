import _ from 'lodash'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Bootstrap from './components/Bootstrap'
import initializers from './initializers'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './main.scss'

_.forEach(initializers, initializer => initializer())

ReactDOM.render(
  <BrowserRouter>
    <Bootstrap>
      <App />
    </Bootstrap>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker();
