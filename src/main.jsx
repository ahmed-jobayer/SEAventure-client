import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routers.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
