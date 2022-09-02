import "./App.css";

import First from "./pages/first/first";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home1 from "./pages/home1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <First />
            </>
          }
        ></Route>
        <Route
          path="/student"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/teacher"
          element={
            <>
              <Home1 />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
