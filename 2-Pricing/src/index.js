import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error(
    "There's no #root div, something's wrong with our index.html"
  );
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
