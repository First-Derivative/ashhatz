import React from "react";
import { ThemeProvider } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import App from "./App"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider
    breakpoints={["xxl", "xl", "lg", "md", "sm", "xs", "init"]}
    minBreakpoint="init">
    <App />
  </ThemeProvider>
);
