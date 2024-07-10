import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ArweaveMPCProvider } from "ar-mpc-sdk";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ArweaveMPCProvider clientId="166067852622-u463osbka1p8trhep3q94begneblcc85.apps.googleusercontent.com">
      <App />
    </ArweaveMPCProvider>
  </React.StrictMode>
);
