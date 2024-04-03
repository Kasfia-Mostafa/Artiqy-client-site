import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Router/route";
import AuthProviders from "./Utility/Providers/AuthProviders";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProviders>
);