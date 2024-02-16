import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error(
    "There's no #root div, something's wrong with our index.html",
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
