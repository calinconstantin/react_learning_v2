import React from "react";
import './State.scss';
import { useState } from "react";
import ReactDOM from "react-dom/client";

export function State() {
    const [color, setColor] = useState("red");
  
    return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
        </>
      )
  }