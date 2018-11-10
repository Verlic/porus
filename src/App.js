import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div>
          <Route path="/:note" component={Content} />
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
