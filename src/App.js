import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handlerChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        onChange={handlerChange}
        type="text"
        placeholder="Empieza a escribir algo"
      />
      <p className="repeater">{value}</p>
    </div>
  );
}

export default App;
