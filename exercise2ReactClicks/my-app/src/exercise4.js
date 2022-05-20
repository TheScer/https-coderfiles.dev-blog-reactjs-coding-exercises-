import "./App.css";
import { ButtonHolder } from "./components/ButtonHolder";
import React, { useState } from "react";
//exercise 4 State and Props
//

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  );
}

export default App;
