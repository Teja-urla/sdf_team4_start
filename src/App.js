import Navbar from "./Navbar";
// import Textform from "./Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Textform from "./Textform";
import Header from "./components/Header";
import Template from "./components/Template";
import Mainbody from "./components/Mainbody";

// import Header from "./Header";

function App() {
  // const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#042743";
  //     showAlert("Dark mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };
  return (
    <>
      <Header></Header>
      {/* <Navbar title="TextUtils" key={new Date()} /> */}
      <Template></Template>
      <Mainbody></Mainbody>
    </>
  );
}

export default App;
