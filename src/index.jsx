require('nw.gui').Window.get().showDevTools()

require('bootstrap/dist/css/bootstrap.css')
require('admin-lte/dist/css/AdminLTE.css')
require('admin-lte/dist/css/skins/skin-blue.css')
require("!style!css!sass!./stylesheets/main.scss");

window.jQuery = window.$ = require('jQuery')
var container= document.getElementById('container')

import React from 'react';
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
let store = configureStore({})

render(
  <Root store={store}/>,
  container
  )