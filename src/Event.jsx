import React from "react";

function App() {


  function handleClick() {
    alert("Button clicked!");
    console.log("Button was clicked!");
  }

  return (
    <div>
      <h1>Hello, bunii!</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
