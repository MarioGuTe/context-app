import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SongsContextProvider from "./contexts/Songs/SongsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SongsContextProvider>
      <App />
    </SongsContextProvider>
  </BrowserRouter>
);
