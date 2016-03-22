import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import MainSidebar from './MainSidebar'
import Content from './Content'
import ControlSidebar from './ControlSidebar'

// require('bootstrap/dist/js/bootstrap.js')


class App extends Component {


  componentDidMount(){
    console.log('did componentDidMount')
    require('bootstrap')
    require('admin-lte/plugins/slimScroll/jquery.slimscroll')
    require('admin-lte/dist/js/app.js')
  }
  
 render(){
   return (
    <div className="wrapper" >
      <Header/>
      <MainSidebar/>
      <Content/>
      <Footer/>
      <ControlSidebar/>
    </div>
  )
 } 
}

export default App