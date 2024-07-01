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
import { Toaster } from "react-hot-toast";

function App() {
  let location = useLocation();

  const navigate = useNavigate();
  return (
    <div className="dark:bg-slate-800 h-[100vh] font-gochi">
      <div className="text-center pt-8 dark:text-white text-slate-800 ">
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
            className="bold text-3xl w-full cursor-pointer flex flex-col justify-center"
          >
            <h1 className=" m-auto my-0">To do list</h1>
          </div>
          <span className="absolute font-sans right-[15%] w-4 top-[5%] flex  justify-center">
            <DarkModeToggle />
          </span>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/todo/:id" element={<ToDo />} />
        </Routes>
        <div className="font-sans">
          <Toaster position="bottom-right" />
        </div>
      </div>
    </div>
  );
}

export default App;
