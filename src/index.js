import React from "react";
// Fonts
import "./assets/fonts/Arial/Arial.ttf";
import "./assets/fonts/Arial/Arial Bold.ttf";
import "./assets/fonts/DIN Alternate/DIN Alternate Bold.ttf";
import "./assets/fonts/DIN Condensed/DIN Condensed Bold.ttf";
import "./assets/fonts/Futura/Futura.ttc";
import "./assets/fonts/MyriadPro/MyriadPro-Regular.otf";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
// Routing
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  // Redirect,
  HashRouter,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-250944909-1');

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <App />
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
