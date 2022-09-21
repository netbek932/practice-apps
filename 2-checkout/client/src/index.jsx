import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from './App.jsx';

// render(
//   <div>
//     <p>Hello, World!</p>
//     <p>
//       <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
//     </p>
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(< App />, document.getElementById('app'));