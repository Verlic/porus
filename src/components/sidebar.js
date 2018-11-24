import React, { Component } from "react";
import "./Sidebar.css";
import Sidebarlink from "./SidebarLink.js";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        {this.props.notes.map(note => <Sidebarlink key={note.id} text={note.title} route={"/notes/" + note.id} />)}
      </div>
    );
  }
}

export default Sidebar;
