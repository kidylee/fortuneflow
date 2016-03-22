import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import MainSidebar from './MainSidebar'
import MainWindow from './MainWindow'
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
      <MainWindow/>
      <Footer/>
      <ControlSidebar/>
    </div>
  )
 }
}

export default App
