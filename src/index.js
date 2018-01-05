import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App/>
 
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
