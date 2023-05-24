import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ExpressionContext from "./context/Expression";
import Calculate from "./components/calculate";
function App() {
  // const [count, setCount] = useState(0);
  const [exp, setExp] = useState("");

  return (
    <>
      <div>
        <ExpressionContext.Provider value={{ exp, setExp }}>
          {/* <p>hello world</p> */}
          <Calculate />
        </ExpressionContext.Provider>
      </div>
    </>
  );
}

export default App;
