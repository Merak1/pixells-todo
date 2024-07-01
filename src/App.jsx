import { useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import ToDo from "./components/ToDo";
import { DarkModeToggle } from "./components/accesibility/DarkModeToggle";

function App() {
  let location = useLocation();

  const navigate = useNavigate();
  return (
    <div className="dark:bg-slate-800 h-[100vh]">
      <div className="text-center pt-8 dark:text-white ">
        <div className="flex pb-10 border-b-2 dark:text-white">
          {location.pathname !== "/" ? (
            <div className="p-2 text-4xl">
              <Link to="/">⬅️</Link>
            </div>
          ) : (
            <></>
          )}
          <div
            onClick={() => navigate("/")}
            className="bold font-gochi text-3xl w-full cursor-pointer flex flex-col justify-center"
          >
            <h1 className=" m-auto my-0">To do list</h1>
          </div>
          <span className="absolute right-[15%] w-4 top-[5%] flex  justify-center">
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
