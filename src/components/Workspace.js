import React, { Component } from 'react'


import PureRenderMixin from 'react-addons-pure-render-mixin'
import _ from 'lodash'
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);


export default class Workspace extends Component{

  constructor(props){
     super(props);
     this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

  }




  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>);
    });
  }

  generateLayout() {
     var p = this.props;
    return _.map(new Array( p.items), function(item, i) {
      var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
      return {x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i.toString()};
    });
  }

  onLayoutChange(layout){
         this.setState({layout: this.generateLayout()})

      this.props.onLayoutChange(  );

  }


  render() {
    var layout = [
    {x: 0, y: 0, w: 1, h: 2},
    {x: 1, y: 0, w: 1, h: 2},
    {x: 2, y: 0, w: 1, h: 2}
  ];
   return (
      <ReactGridLayout className="layout" layout={layout}
      cols={12} rowHeight={30}>
      { this.generateDOM() }
    </ReactGridLayout>
    )
  }
}


Workspace.propTypes =  {
    onLayoutChange: React.PropTypes.func.isRequired
}



Workspace.defaultProps =  {
  isDraggable: true,
  isResizable: true,
  items: 20,
  rowHeight: 30,
  cols: 12
}


