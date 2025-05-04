import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import GlobalProvider from "./context/GlobalContext"; // ✅ import your context provider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalProvider>
            <RouterProvider router={router} />
        </GlobalProvider>
    </React.StrictMode>
);
