require('nw.gui').Window.get().showDevTools()
require('bootstrap');
require('admin-lte/dist/js/app.js')
require('bootstrap/dist/css/bootstrap.css')
require('admin-lte/dist/css/AdminLTE.css')
require('admin-lte/dist/css/skins/skin-blue.css')
require('admin-lte/plugins/slimScroll/jquery.slimscroll')
var container= document.getElementById('container')


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
  )

