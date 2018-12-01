import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  edit(event) {
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
        <h1 className="title" onClick={event => this.edit(event)}>
          {this.props.text}
        </h1>
      );
    } else {
      return (
        <input
          className="title-input"
          onChange={event => this.handleChange(event.target.value)}
          value={this.props.text}
          onKeyPress={event => this.handleKeyPress(event)}
        />
      );
    }
  }
}

export default Title;
