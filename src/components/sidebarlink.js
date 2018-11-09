import React, { Component } from "react";
import "./sidebarlink.css";

class Sidebarlink extends Component {
  render() {
    return (
      <div className="Sidebarlink">
        <a href="#about">{this.props.text}</a>
      </div>
    );
  }
}

export default Sidebarlink;
