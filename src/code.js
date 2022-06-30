// ReactDOM.render(
//   <h1 className="header">This is JS</h1>,
//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent = "hello world I am Teja";
// h1.className = "header";
// document.getElementById("root").append(h1);

import React from "react";
import ReactDOM from "react-dom";

const navbar = (
  <nav>
    <h1> Bobs Dog </h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
ReactDOM.render(navbar, document.getElementById("root"));
