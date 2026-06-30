import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
  <BrowserRouter>
    <App />
    <ToastContainer position="top-right" autoClose={2500} />
  </BrowserRouter>
</ThemeProvider>
  </React.StrictMode>
);