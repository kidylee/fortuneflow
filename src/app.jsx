var React = require('react');
var ReactDOM = require('react-dom');




class MyComponent extends React.Component {
  render() {
    return <div>Hello World afefasef</div>;
  }

  componentWillMount(){
    console.log('Ready for mount');
  }
}

var div= document.createElement('div');
document.body.appendChild(div)


ReactDOM.render(<MyComponent />, div);
