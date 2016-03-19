require('nw.gui').Window.get().showDevTools()

var container= document.createElement('div')
document.body.appendChild(container)




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

