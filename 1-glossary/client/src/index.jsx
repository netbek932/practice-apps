import React from 'react';
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom";
//import "./index.css";
import App from "./Components/App.jsx";

const Root = REACTDOM.createRoot(document.getElementById('root'));
Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
