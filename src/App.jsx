import React from "react";
import GlobalProvider from "./context/GlobalContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};

export default App;