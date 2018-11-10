import React, { Component } from "react";
import "./Sidebar.css";
import Sidebarlink from "./SidebarLink.js";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Sidebarlink text="Hiring" route="/hiring" otro="bleh" />
        <Sidebarlink text="Interviews" route="/interviews" />
      </div>
    );
  }
}

export default Sidebar;
