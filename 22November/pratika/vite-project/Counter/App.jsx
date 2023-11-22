import { useState } from "react";

import "./App.css";

function App() {
  const [number, setnumber] = useState(0);
  const decrease = () => {
    if (number<1) {
      null
    }else  {
      setnumber((number) => number - 1);
      
      
    }
  };

  const increase = () => {
    setnumber((number) => number + 1);
  };
  return (
    <div className="app">
      <button onClick={increase}>Increase</button>
      <h1 className="num">{number}</h1>
      <button onClick={decrease}>
        Decrease
      </button>
    </div>
  );
}

export default App;
