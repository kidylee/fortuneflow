import React, { Component } from 'react'
import Workspace from './Workspace'


class MainWindow extends Component {


  constructor(props){
    super(props)
    this.state = { layout: [] }
  }

  onLayoutChange(layout) {
    this.setState({layout: layout})
  }

  stringifyLayout() {
    return this.state.layout.map(function(l) {
      return <div className="layoutItem" key={l.i}><b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]</div>;
    });
  }


  render(){

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Page Header
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>

        <div className="layoutJSON">
             Displayed as <code>[x, y, w, h]</code>:
             <div className="columns">
               {this.stringifyLayout()}
             </div>
        </div>

        <Workspace onLayoutChange={this.onLayoutChange.bind(this)} className="content"/>

      </div>
    )
  }
}



export default MainWindow
