import React from 'react'
import ReactDOM from 'react-dom'
export default class HelloWorld extends React.Component{
  render() {
    return(
      <div>Hello, {this.props.text}!</div>
    );
  }
}

window.hello_world = function (render_info) {
  ReactDOM.render(<HelloWorld text={render_info.props.text} />, render_info.node)
};