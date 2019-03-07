import React from 'react'
import ReactDOM from 'react-dom'
import { GoogleMapProvider } from 'gomap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import setupSocket from './sockets'
import store from './store'
import App from './app'
import * as serviceWorker from './serviceWorker'
import './assets/iconfont/styles.css'
import './index.css'
import './assets/font/styles.css'

setupSocket(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <GoogleMapProvider>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </GoogleMapProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
