import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
class ShoppingList extends Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }