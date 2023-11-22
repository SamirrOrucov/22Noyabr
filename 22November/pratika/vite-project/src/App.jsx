import { useState } from "react";
import "./App.css";

function App() {
  const [status, setstatus] = useState(false);
  function handleClck() {
    setstatus ( (status) => true)
  }

  return (
    <div className="app">
      <button onClick={handleClck}>Open</button>
      {status && (
        <div className="table">
          <p>this is the Module</p>
          <span onClick={()=>setstatus(false)}>x</span>
        </div>
      )}
    </div>
  );
}

export default App;
