import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import MainSidebar from './MainSidebar'
import Content from './Content'
import ControlSidebar from './ControlSidebar'

// require('bootstrap/dist/js/bootstrap.js')

const App = () => (
  <div className="wrapper" >
    <Header/>
    <MainSidebar/>
    <Content/>
    <Footer/>
    <ControlSidebar/>
  </div>
)

export default App