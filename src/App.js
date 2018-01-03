import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import HomePage from "./component/pages/HomePage";
import LoginPage from "./component/pages/LoginPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React<br/>WebApp</h1>
        </header>
        <p className="App-intro">
         Building WebApp using React
        </p>
      
      </div>
      
    );
  }
}

export default App;
