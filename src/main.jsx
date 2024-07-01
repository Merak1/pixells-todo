import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/ReactToggle.css";
import { BrowserRouter } from "react-router-dom";
import { TaskContextProvider } from "./hooks/useTasks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskContextProvider>
  </React.StrictMode>
);
