import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button>{this.props.name && this.props.click ? "ABC" : "DEF"}</button>
    );
  }
}

export default Button;
