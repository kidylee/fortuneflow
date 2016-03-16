
console.log(window);
console.log(window.document);

console.log(document);


var React = require('react');
var ReactDOM = require('react-dom');




class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }

  componentWillMount(){
    console.log('Ready for mount');
  }
}

ReactDOM.render(<MyComponent />, node);
