import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Team from "./Team.jsx";

import "./styles.css";

const path = window.location.pathname;

const isTeamPage =
  path === "/website/team/" ||
  path === "/website/team" ||
  path.endsWith("/team/") ||
  path.endsWith("/team");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isTeamPage ? <Team /> : <App />}
  </React.StrictMode>
);
