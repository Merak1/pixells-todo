import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import ToDo from "./components/ToDo";
import { DarkModeToggle } from "./components/accesibility/DarkModeToggle";

function App() {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-slate-800 h-[100vh]">
      <div className="text-center pt-8 dark:text-white">
        <div className="flex">
          <h1
            onClick={() => navigate("/")}
            className="bold font-gochi text-3xl w-full"
          >
            To do list
          </h1>
          <span className="absolute right w-4">
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
