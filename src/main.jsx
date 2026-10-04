import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Team from "./Team.jsx";

import "./styles.css";

const path = window.location.pathname;

console.log("Current path:", path);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {path.includes("/team/") ? <Team /> : <App />}
  </React.StrictMode>
);
