import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
//import { Button } from "semantic-ui-react";
import logo from "./logo.svg";
import HomePage from "./component/pages/HomePage";
import LoginPage from "./component/pages/LoginPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
      </div>

        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </div>
    );
  }
}

export default App;
