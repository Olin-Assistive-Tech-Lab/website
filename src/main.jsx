
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Team from "./Team.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

import "./styles.css";

const path = window.location.pathname;

const isTeamPage =
  path === "/website/team/" ||
  path === "/website/team" ||
  path.endsWith("/team/") ||
  path.endsWith("/team");

const isPrivacyPage =
  path === "/website/privacy/" ||
  path === "/website/privacy" ||
  path.endsWith("/privacy/") ||
  path.endsWith("/privacy");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isPrivacyPage ? (
      <PrivacyPolicy />
    ) : isTeamPage ? (
      <Team />
    ) : (
      <App />
    )}
  </React.StrictMode>
);
