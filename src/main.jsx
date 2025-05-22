// /src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/**
 * Entry point for the React application.
 *
 * Renders the main App compoment inside a StrictMode wrapper at the root DOM node.
 *
 * @module main
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
