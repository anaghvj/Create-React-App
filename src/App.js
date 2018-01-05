import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
//import { Button } from "semantic-ui-react";
import logo from "./logo.svg";
import HomePage from "./component/pages/HomePage";
import LoginPage from "./component/pages/LoginPage";
import Game from "./component/game/Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <div>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/login">Login </Link>
            <span> | </span>
            <Link to="/game">Game</Link>
          </div>
        </header>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/game" exact component={Game} />
      </div>
    );
  }
}

export default App;
