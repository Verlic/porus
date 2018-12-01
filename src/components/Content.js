import React, { Component } from "react";
import Title from "./Title.js";
import Body from "./Body.js";
import "./Content.css";

import Api from "../api";

const client = new Api();

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { note: client.getNote(this.props.match.params.note) };
  }

  onTitleChange(value) {
    this.setState({note:{title:value}});
  }

  render() {
    if (!this.state.note) {
      return (
        <div id="content">
          <h2>404 - Note not found.... che</h2>
        </div>
      );
    }

    return (
      <div id="content">
        <Title
          text={this.state.note.title}
          onTextChange={(value) => this.onTitleChange(value)}
        />
        <Body text={this.state.note.body} />
      </div>
    );
  }
}

export default Content;
