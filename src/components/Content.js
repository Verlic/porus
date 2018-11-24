import React, { Component } from "react";
import Title from "./Title.js";
import Body from "./Body.js";
import "./Content.css"

import Api from "../api";

const client = new Api();


class Content extends Component {

  render() {
    var note = client.getNote(this.props.match.params.note); 

    if (!note) {
      return (
        <div id="content">
        <h2>404 - Note not found.... che</h2>
        </div>
      )
    }

    return (
      <div id="content">
        <Title text={note.title} />
        <Body text={note.body}/>
      </div>
    );
  }
}

export default Content;
