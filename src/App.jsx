import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ToDo from "./components/ToDo";
import { DarkModeToggle } from "./components/accesibility/DarkModeToggle";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <div className="text-center pt-8 dark:text-white">
        <div className="flex">
          <h1 className="bold font-gochi text-3xl w-full">To do list</h1>
          <span className="text-sm text-wrap">
            <DarkModeToggle />
          </span>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/todo/:id" element={<ToDo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
