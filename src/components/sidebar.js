import React, { Component } from "react";
import "./sidebar.css";
import Sidebarlink from "./sidebarlink.js";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Sidebarlink text="Hiring" />
        <Sidebarlink text="Interviews" />

      </div>
    );
  }
}

export default Sidebar;
