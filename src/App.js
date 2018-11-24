import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "./components/Content";

import Api from "./api";

const client = new Api();
var notes = client.getNotes(); 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar notes={notes} />
          <div>
            <Route path="/notes/:note" component={Content} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
