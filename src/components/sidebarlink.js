import React, { Component } from "react";
import "./SidebarLink.css";
import { Link } from "react-router-dom";

class Sidebarlink extends Component {
  render() {
    return (
      <div className="Sidebarlink">
        <Link to={this.props.route}>{this.props.text}</Link>        
      </div>
    );
  }
}

export default Sidebarlink;
