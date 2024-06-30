import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ToDo from "./components/ToDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center">
        <h1 className="bold">to do</h1>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/todo/:id" element={<ToDo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
