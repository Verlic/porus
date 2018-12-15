import React, { Component } from "react";
import "./Body.css";
import {Editor, EditorState} from 'draft-js';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({editorState})
  }

  edit() {
    this.setState({ isEditing: true });
  }

  handleChange(value) {
    this.props.onTextChange(value);
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.setState({ isEditing: false });
    }
  }

  render() {
    if (!this.state.isEditing) {
      return (
        <p className="body" onClick={event => this.edit(event)}>
          {this.props.text}
        </p>
      );
    } else {
      return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      );
    }
  }
}

export default Body;
