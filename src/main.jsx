import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
