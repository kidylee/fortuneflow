import React,{Component} from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);


let AutoLayout = ({layout, generatedChild }) => (
  <ReactGridLayout className="layout" layout= { layout }
      cols={12} rowHeight={30}>
      { generatedChild }
  </ReactGridLayout>
)



const generateLayout = (layout) => {
    return _.map(layout, function(item, i) {
      var y = _.result(item, 'y') || Math.ceil(Math.random() * 4) + 1;
      return {x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i.toString()};
    });
}

const generateDOM = (layout) => {

    return _.map(layout, function(item) {
      return (
        <div key={item.channel}>
          <span className="text">{item.channel}</span>
        </div>);
    });
  }

const mapStateToProps = (state, ownProps) => {
  let layout = generateLayout(state.layout)
  return {
    layout: layout,
    generatedChild: generateDOM(state.layout)
  }
}


AutoLayout = connect(
  mapStateToProps
)(AutoLayout)

export default AutoLayout
