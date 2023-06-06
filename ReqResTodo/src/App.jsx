import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Routes, Route } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";
import userContext from "./context/userContext";

function App() {
  // const [count, setCount] = useState(0)
  const [userId, setUserId] = useState(2);

  return (
    <userContext.Provider value={{ userId, setUserId }}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route
          path="/tasks"
          element={
            <div>
              <Navbar />
              <Content />
            </div>
          }
        />

        {/* <Navbar />
      <Content /> */}
      </Routes>
    </userContext.Provider>
  );
}

export default App;
